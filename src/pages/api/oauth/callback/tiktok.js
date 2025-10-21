export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) return res.status(400).send("Missing code");

  const redirectUri = `https://postsbridge.netlify.app/api/oauth/callback/tiktok`;

  // Exchange code for token
  const tokenRes = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      code,
      client_key: process.env.TIKTOK_CLIENT_KEY,
      client_secret: process.env.TIKTOK_CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
    }),
  });

  const tokenData = await tokenRes.json();
  const { access_token, refresh_token, open_id, expires_in } =
    tokenData.data || {};

  if (!access_token) {
    console.error("Token exchange failed", tokenData);
    return res.status(400).json({ error: "Failed to get token" });
  }

  // Get basic user info (optional)
  const userInfoRes = await fetch("https://open.tiktokapis.com/v2/user/info/", {
    method: "GET",
    headers: { Authorization: `Bearer ${access_token}` },
  });

  const userInfo = await userInfoRes.json();
  const username = userInfo.data?.user?.display_name;
  const avatar = userInfo.data?.user?.avatar_url;

  // Save to Supabase (optional)
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("tiktok_id", open_id)
    .single();

  if (!user) {
    return res.status(404).json({ error: "User not found in Supabase" });
  }

  await supabase.from("social_accounts").upsert(
    {
      user_id: user.id,
      provider: "tiktok",
      account_name: username,
      avatar_url: avatar,
      access_token,
      refresh_token,
      connected: true,
      expires_at: new Date(Date.now() + expires_in * 1000),
    },
    { onConflict: ["user_id", "provider"] }
  );

  return res.redirect("/dashboard"); // Or wherever you want
}
