import { supabase } from "../../../../lib/supabaseClient";
export default async function handler(req, res) {
  const code = req.query.code;
  const { user_id } = req.query;
  // Encode client_id and client_secret in Base64 format for Basic Authentication
  const credentials = `${process.env.TWITTER_CLIENT_ID}:${process.env.TWITTER_CLIENT_SECRET}`;
  const encodedCredentials = Buffer.from(credentials).toString("base64");
  const tokenResponse = await fetch("https://api.twitter.com/2/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encodedCredentials}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/twitter?user_id=${user_id}`,
      client_id: process.env.TWITTER_CLIENT_ID,
      client_secret: process.env.TWITTER_CLIENT_SECRET,
      code_verifier: "challenge",
    }),
  });

  const tokenData = await tokenResponse.json();
  console.log(tokenData);

  if (tokenData.access_token) {
    // You can fetch user profile here
    const userRes = await fetch("https://api.twitter.com/2/users/me", {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    const userData = await userRes.json();
    console.log(userRes);
    console.log(userData.data);
    const { error: upsertError } = await supabase
      .from("social_accounts")
      .upsert(
        {
          user_id: user_id,
          provider: "twitter",
          account_name: userData.data.name, // Assuming you have this value
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          channel_id: userData.data.id,
          channel_title: userData.data.username,
          connected: true,
          avatar_url: userData.data.profile_image_url,
          //   twitter_handle: twitterHandle, // The Twitter handle (e.g., @username)
          //   avatar_url: twitterAvatar, // Avatar URL from the Twitter API response
          expires_at: new Date(Date.now() + tokenData.expires_in * 1000),
        },
        { onConflict: ["user_id", "provider"] }
      );

    if (upsertError) {
      console.error("Error upserting the Twitter account:", upsertError);
    } else {
      console.log("Twitter account with donation successfully upserted.");
    }
    res.redirect("/dashboard/settings");
  } else {
    res.status(400).json({ error: "Token exchange failed", tokenData });
  }
}
