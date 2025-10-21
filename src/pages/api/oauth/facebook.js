export default async function handler(req, res) {
  const client_id = process.env.FB_APP_ID;
  const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/facebook`;
  const fbAuthUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=pages_manage_posts,pages_read_engagement,pages_show_list,publish_video&response_type=code`;

  //const fbOauthURL = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=pages_manage_posts,pages_read_engagement,pages_show_list,publish_video&response_type=code`;

  res.redirect(fbAuthUrl);
}
