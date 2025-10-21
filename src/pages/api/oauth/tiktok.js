// pages/api/auth/tiktok.ts

export default function handler(req, res) {
  const clientId = process.env.TIKTOK_CLIENT_KEY;
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/facebook`;
  const scope = "user.info.basic,video.upload,video.publish";

  const authUrl = `https://www.tiktok.com/v2/auth/authorize?client_key=${clientId}&scope=${scope}&response_type=code&redirect_uri=${redirectUri}&state=random_string`;

  res.redirect(authUrl);
}
