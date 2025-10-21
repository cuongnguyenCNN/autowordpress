import { BskyAgent } from "@atproto/api";
import { supabase } from "../../../../lib/supabaseClient";
function sanitizeHandle(handle) {
  return handle
    .normalize("NFKC")
    .replace(/[\u202A-\u202E]/g, "") // Xóa các ký tự BiDi control
    .trim();
}
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { password, user_id } = req.body;
  const identifier = sanitizeHandle(req.body.identifier);
  try {
    const agent = new BskyAgent({ service: "https://bsky.social" });
    console.log(identifier, password);
    const session = await agent.login({ identifier, password });
    const dataSession = session.data;
    const { error: upsertError } = await supabase
      .from("social_accounts")
      .upsert(
        {
          user_id: user_id,
          provider: "bluesky",
          account_name: dataSession.handle, // Assuming you have this value
          access_token: dataSession.accessJwt,
          channel_id: dataSession.did,
          refresh_token: dataSession.refreshJwt,
          channel_title: dataSession.handle,
          connected: true,
          email: dataSession.email,
          // expires_at: new Date(Date.now() + accessTokenData.expires_in * 1000),
          //   twitter_handle: twitterHandle, // The Twitter handle (e.g., @username)
          //   avatar_url: twitterAvatar, // Avatar URL from the Twitter API response
        },
        { onConflict: ["user_id", "provider"] }
      );
    console.log(upsertError);
    console.log(session);

    return res.status(200).json({ success: true, data: session.data });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ success: false, message: err.message });
  }
}
