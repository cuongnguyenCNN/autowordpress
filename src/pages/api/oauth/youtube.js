export default async function handler(req, res) {
  const client_id = process.env.GOOGLE_CLIENT_ID;
  const scope = "https://www.googleapis.com/auth/youtube";
  const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/youtube`;
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&access_type=offline&prompt=consent&include_granted_scopes=true`;
  res.redirect(url);
}
