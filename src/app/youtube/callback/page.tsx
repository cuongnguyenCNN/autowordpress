"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@/src/contexts/userscontext";

export default function YouTubeCallback() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { user } = useUser();
  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");
    const expiresIn = params.get("expires_in");
    const saveToken = async () => {
      const expiryDate = new Date(
        Date.now() + parseInt(expiresIn || "3600") * 1000
      );

      await supabase.from("social_accounts").upsert({
        user_id: user?.id,
        platform: "youtube",
        account_name: "YouTube Channel", // có thể thêm fetch info sau
        access_token: accessToken,
        token_expiry: expiryDate.toISOString(),
      });

      router.push("/dashboard");
    };

    if (accessToken) {
      // ✅ Lưu token vào localStorage
      localStorage.setItem("youtube_token", accessToken);
      saveToken();
    } else {
      alert("Không nhận được token.");
    }
  }, [router]);

  return <p>Đang kết nối YouTube...</p>;
}
