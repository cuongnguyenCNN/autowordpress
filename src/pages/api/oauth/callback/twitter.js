import { TwitterApi } from "twitter-api-v2";
import cookie from "cookie";
import { supabase } from "../../../../lib/supabaseClient";

export default async function handler(req, res) {
  const { oauth_token, oauth_verifier, user_id } = req.query;
  const cookies = cookie.parse(req.headers.cookie || "");
  const oauth_token_secret = cookies.oauth_token_secret;

  const client = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_SECRET_KEY,
    accessToken: oauth_token,
    accessSecret: oauth_token_secret,
  });

  try {
    const {
      accessToken,
      accessSecret,
      client: loggedClient,
    } = await client.login(oauth_verifier);

    // Lưu accessToken và accessSecret vào session hoặc database (tùy người dùng)

    // Ví dụ: test post tweet
    // const mediaId = await loggedClient.v1.uploadMedia("./public/video.mp4", {
    //   type: "video/mp4",
    // });

    // await loggedClient.v2.tweet({
    //   text: "Video uploaded from my app!",
    //   media: { media_ids: [mediaId] },
    // });
    const userProfile = await loggedClient.v1.verifyCredentials();
    console.log(userProfile);
    const { error: upsertError } = await supabase
      .from("social_accounts")
      .upsert(
        {
          user_id: user_id,
          provider: "twitter/x",
          access_secret: accessSecret,
          account_name: userProfile.name, // Assuming you have this value
          access_token: accessToken,
          channel_id: userProfile.id,
          channel_title: userProfile.screen_name,
          connected: true,
          avatar_url: userProfile.profile_image_url_https,
          //   twitter_handle: twitterHandle, // The Twitter handle (e.g., @username)
          //   avatar_url: twitterAvatar, // Avatar URL from the Twitter API response
        },
        { onConflict: ["user_id", "provider"] }
      );

    if (upsertError) {
      console.error("Error upserting the Twitter account:", upsertError);
    } else {
      console.log("Twitter account with donation successfully upserted.");
    }
    res.redirect("/dashboard/settings");
    // res.status(200).send(userProfile);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading", err);
  }
}
