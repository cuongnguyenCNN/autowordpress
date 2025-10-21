import { supabase } from "../../../../lib/supabaseClient";

export default async function handler(req, res) {
  const { code } = req.query;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/youtube`,
      grant_type: "authorization_code",
    }),
  });

  const tokenData = await tokenRes.json();

  const { access_token, refresh_token, expires_in } = tokenData;

  const userProfileRes = await fetch(
    "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  const youtubeChannelRes = await fetch(
    "https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
      },
    }
  );

  const youtubeChannelData = await youtubeChannelRes.json();
  const channel = youtubeChannelData.items?.[0];
  if (!channel) {
    throw new Error("No YouTube channel found for this user.");
  }

  const channelId = channel.id;
  const channelTitle = channel.snippet.title;
  const channelAvatar = channel.snippet.thumbnails.default?.url;
  const userProfile = await userProfileRes.json();

  // Step 3: Get the user's email or other identifying info to link with Supabase
  const email = userProfile.email;

  // Step 4: Check if the user exists in Supabase
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !user) {
    throw new Error("User not found in Supabase", email);
  }
  console.log(user, email);
  const { error: upsertError } = await supabase.from("social_accounts").upsert(
    {
      user_id: user.id,
      provider: "youtube",
      account_name: channelTitle,
      access_token,
      refresh_token,
      connected: true,
      channel_id: channelId,
      channel_title: channelTitle,
      avatar_url: channelAvatar,
      expires_at: new Date(Date.now() + expires_in * 1000),
    },
    { onConflict: ["user_id", "provider"] }
  );

  if (upsertError) {
    console.error("Upsert failed:", upsertError.message);
    throw upsertError;
  }

  res.redirect("/dashboard/settings");
}
