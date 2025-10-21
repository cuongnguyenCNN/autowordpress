import { supabase } from "../../../../lib/supabaseClient";
import axios from "axios";

export default async function handler(req, res) {
  const { code, state } = req.query;

  const CLIENT_ID = process.env.PINTEREST_CLIENT_ID;
  const CLIENT_SECRET = process.env.PINTEREST_CLIENT_SECRET;
  const REDIRECT_URI = `${process.env.NEXT_PUBLIC_BASE_URL}/api/oauth/callback/pinterest`;

  try {
    console.log("Pinterest Token Request Data:", {
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    });

    const formBody = new URLSearchParams();
    formBody.append("grant_type", "authorization_code");
    formBody.append("code", code);
    formBody.append("redirect_uri", REDIRECT_URI);
    formBody.append("client_id", CLIENT_ID);
    formBody.append("client_secret", CLIENT_SECRET);

    // ✅ Gửi kèm header chính xác
    const tokenRes = await axios.post(
      "https://api.pinterest.com/v5/oauth/token",
      formBody.toString(), // 👈 BẮT BUỘC .toString()
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const tokenData = tokenRes.data;
    console.log("🎟 Token response:", tokenData);

    if (!tokenData.access_token) {
      return res
        .status(401)
        .json({ error: "Failed to get access token", details: tokenData });
    }

    const access_token = tokenData.access_token;

    const userRes = await fetch("https://api.pinterest.com/v5/user_account", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    });

    const profileUser = await userRes.json();
    console.log("👤 Pinterest User:", profileUser);

    if (!profileUser.username || !profileUser.id) {
      return res
        .status(400)
        .json({ error: "Failed to fetch user profile", profileUser });
    }

    const { error: upsertError } = await supabase
      .from("social_accounts")
      .upsert(
        {
          user_id: state,
          provider: "pinterest",
          account_name: profileUser.username,
          access_token: access_token,
          channel_id: profileUser.id,
          channel_title: profileUser.username,
          connected: true,
          avatar_url: profileUser.profile_image || null,
          expires_at: new Date(
            Date.now() + (tokenData.expires_in || 3600) * 1000
          ),
        },
        { onConflict: ["user_id", "provider"] }
      );

    if (upsertError) {
      console.error("❌ Supabase upsert error:", upsertError);
    }

    res.redirect("/dashboard/settings");
  } catch (err) {
    console.error(
      "🔥 Pinterest OAuth Error:",
      err.response?.data || err.message
    );
    res.status(500).json({
      error: "Internal server error",
      details: err.response?.data || err.message,
    });
  }
}
