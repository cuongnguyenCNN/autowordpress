// pages/api/oauth/linkedin.js
export default async function handler(req, res) {
  const { user_id } = req.query;
  const scope = "openid profile email w_member_social";
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/linkedin?user_id=${user_id}`;
  const clientId = process.env.LINKEDIN_CLIENT_ID;

  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${scope}`;
  res.redirect(authUrl);
}
