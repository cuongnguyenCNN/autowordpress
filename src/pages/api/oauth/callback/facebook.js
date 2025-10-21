export default async function handler(req, res) {
  const code = req.query.code;

  const response = await fetch(
    `https://graph.facebook.com/v18.0/oauth/access_token?client_id=${process.env.FB_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/facebook&client_secret=${process.env.FB_APP_SECRET}&code=${code}`
  );
  const data = await response.json();

  const { access_token } = data;
  console.log(data);
  // Optionally: Get page access token (you must connect user's page first)
  const pageRes = await fetch(
    `https://graph.facebook.com/me/accounts?access_token=${access_token}`
  );
  const pages = await pageRes.json();

  const pageAccessToken = pages.data[0]?.access_token; // Lưu cái này để post video

  // Lưu token vào Supabase, cookie, hay session
  res.redirect(`/dashboard?fb_token=${pageAccessToken}`);
}
