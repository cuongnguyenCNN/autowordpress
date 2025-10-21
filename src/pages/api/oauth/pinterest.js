export default async function handler(req, res) {
  const { user_id } = req.query;
  const state = user_id;
  const CLIENT_ID = process.env.PINTEREST_CLIENT_ID;
  const REDIRECT_URI = `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/pinterest`;

  const authUrl = `https://www.pinterest.com/oauth/?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=user_accounts:read,pins:read,pins:write,boards:read,boards:write&state=${state}
`;

  res.redirect(authUrl);
}
