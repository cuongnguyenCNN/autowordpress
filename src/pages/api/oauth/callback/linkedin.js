// pages/api/oauth/callback/linkedin.js
import axios from "axios";

import { supabase } from "../../../../lib/supabaseClient";

export default async function handler(req, res) {
  const { code, user_id } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Missing LinkedIn OAuth code" });
  }

  try {
    // 1. Exchange code for access token
    const tokenRes = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      null,
      {
        params: {
          grant_type: "authorization_code",
          code,
          redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/linkedin?user_id=${user_id}`,
          client_id: process.env.LINKEDIN_CLIENT_ID,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = tokenRes.data.access_token;
    const accessTokenData = tokenRes.data;
    console.log(tokenRes);
    // 2. Get user's LinkedIn ID
    const profileRes = await axios.get("https://api.linkedin.com/v2/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userId = profileRes.data.id;
    const profileUser = profileRes.data;
    const { error: upsertError } = await supabase
      .from("social_accounts")
      .upsert(
        {
          user_id: user_id,
          provider: "linkedin",
          account_name: profileUser.name, // Assuming you have this value
          access_token: accessToken,
          channel_id: profileUser.sub,
          channel_title: profileUser.name,
          connected: true,
          avatar_url: profileUser.picture,
          expires_at: new Date(Date.now() + accessTokenData.expires_in * 1000),
          //   twitter_handle: twitterHandle, // The Twitter handle (e.g., @username)
          //   avatar_url: twitterAvatar, // Avatar URL from the Twitter API response
        },
        { onConflict: ["user_id", "provider"] }
      );
    console.log(userId);
    // 3. Post content to LinkedIn
    // const postRes = await axios.post(
    //   "https://api.linkedin.com/v2/ugcPosts",
    //   {
    //     author: `urn:li:person:${userId}`,
    //     lifecycleState: "PUBLISHED",
    //     specificContent: {
    //       "com.linkedin.ugc.ShareContent": {
    //         shareCommentary: {
    //           text: "Hello from Next.js and LinkedIn API! 👋",
    //         },
    //         shareMediaCategory: "NONE",
    //       },
    //     },
    //     visibility: {
    //       "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
    //     },
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //       "Content-Type": "application/json",
    //       "X-Restli-Protocol-Version": "2.0.0",
    //     },
    //   }
    // );
    if (upsertError) {
      console.error("Upsert failed:", upsertError.message);
      throw upsertError;
    }
    res.redirect("/dashboard/settings");
    // return res.status(200).json({ success: true, data: postRes.data });
  } catch (err) {
    console.error("LinkedIn OAuth error:", err?.response?.data || err.message);
    return res.status(500).json({ error: "LinkedIn integration failed" });
  }
}
