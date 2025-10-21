// pages/api/oauth/twitter.js
// export default async function handler(req, res) {
//   const { user_id } = req.query;
//   const client_id = process.env.TWITTER_CLIENT_ID;
//   const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/twitter?user_id=${user_id}`;
//   const state = crypto.randomUUID(); // bạn có thể lưu state vào session

//   const twitterAuthUrl = new URL("https://twitter.com/i/oauth2/authorize");
//   twitterAuthUrl.searchParams.set("response_type", "code");
//   twitterAuthUrl.searchParams.set("client_id", client_id);
//   twitterAuthUrl.searchParams.set("redirect_uri", redirect_uri);
//   twitterAuthUrl.searchParams.set(
//     "scope",
//     "tweet.read users.read offline.access"
//   );
//   twitterAuthUrl.searchParams.set("state", state);
//   twitterAuthUrl.searchParams.set("code_challenge", "challenge"); // nếu không dùng PKCE thì bỏ
//   twitterAuthUrl.searchParams.set("code_challenge_method", "plain"); // hoặc bỏ luôn 2 dòng này
//   console.log(twitterAuthUrl.toString());
//   res.redirect(twitterAuthUrl.toString());
// }

// OAUTH 1
import { TwitterApi } from "twitter-api-v2";

export default async function handler(req, res) {
  const { user_id } = req.query;
  const twitterClient = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_SECRET_KEY,
  });

  const { url, oauth_token_secret } = await twitterClient.generateAuthLink(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/twitter?user_id=${user_id}`
  );

  // Lưu oauth_token_secret vào session hoặc database (gắn với người dùng)
  // ví dụ đơn giản dùng cookie:
  res.setHeader(
    "Set-Cookie",
    `oauth_token_secret=${oauth_token_secret}; HttpOnly`
  );

  res.redirect(url);
}
