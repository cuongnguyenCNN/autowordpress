"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useUser } from "../contexts/userscontext";
import { useSocialAccounts } from "../contexts/socialaccountcontext";
import { Award } from "lucide-react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}
export default function BlueskyLoginModal({
  isOpen,
  onClose,
  onSuccess,
}: ProfileModalProps) {
  const [username, setUsername] = useState("");
  const [appPassword, setAppPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [siteUrl, setSiteUrl] = useState(""); // 🆕 URL WordPress site
  const [token, setToken] = useState("");
  const { user } = useUser();
  const { socialAccounts, fetchSocialAccount, addSocialAccount } =
    useSocialAccounts();
  const [errors, setErrors] = useState<{
    siteUrl?: string;
    username?: string;
    appPassword?: string;
  }>({});
  const validate = () => {
    const newErrors: typeof errors = {};

    if (!siteUrl.trim())
      newErrors.siteUrl = "Vui lòng nhập URL website WordPress.";
    else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(siteUrl))
      newErrors.siteUrl = "URL không hợp lệ. Hãy bao gồm http hoặc https.";

    if (!username.trim())
      newErrors.username = "Vui lòng nhập tên tài khoản WordPress.";
    if (!appPassword.trim())
      newErrors.appPassword = "Vui lòng nhập Application Password.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const verifyWordPressToken = async (siteUrl: string, basicToken: string) => {
    const res = await fetch(`${siteUrl}/wp-json/wp/v2/users/me`, {
      headers: {
        Authorization: `Basic ${basicToken}`, // ✅ cần thêm "Basic "
      },
    });

    if (!res.ok) throw new Error("Invalid token or credentials");

    return await res.json(); // ✅ trả về thông tin user WordPress
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // setLoading(true);
    setToken("");

    try {
      const basicToken = Buffer.from(`${username}:${appPassword}`).toString(
        "base64"
      );

      // ✅ Xác thực token bằng cách gọi API users/me
      const wpUser = await verifyWordPressToken(siteUrl, basicToken);
      console.log("✅ WordPress user verified:", wpUser);
      // ✅ Lưu thông tin cục bộ
      localStorage.setItem("access_site_url", siteUrl);
      localStorage.setItem("access_username", username);
      localStorage.setItem("access_token", `Basic ${basicToken}`);
      debugger;
      // ✅ Lưu thông tin vào Supabase
      const res = await addSocialAccount({
        user_id: user?.id || "",
        provider: "wordpress",
        account_name: username || "",
        access_token: `Basic ${basicToken}` || "",
        connected: true,
        created_at: new Date().toISOString(),
      });

      console.log("✅ Saved to Supabase:", res);
      // if (data) {
      //   console.error("❌ Supabase error:", data);
      //   setToken("Lỗi khi lưu thông tin tài khoản vào hệ thống.");
      //   return;
      // }

      // ✅ Hiển thị token cho người dùng
      setToken(`Basic ${basicToken}`);
    } catch (err: unknown) {
      console.error("❌ Error verifying token:", err);
      setToken("Lỗi kết nối đến server hoặc thông tin không hợp lệ.");
    } finally {
      setLoading(false);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        {/* Close button */}
        <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            🔑 Lấy Bearer Token từ WordPress
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="WordPress Site URL (ví dụ: https://myblog.com)"
              value={siteUrl}
              onChange={(e) => setSiteUrl(e.target.value)}
              className="border p-2 rounded-md"
            />
            {errors.siteUrl && (
              <p className="text-red-500 text-sm mt-1">{errors.siteUrl}</p>
            )}
            <input
              type="text"
              placeholder="Username (tài khoản WordPress)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2 rounded-md"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
            <input
              type="password"
              placeholder="Application Password"
              value={appPassword}
              onChange={(e) => setAppPassword(e.target.value)}
              className="border p-2 rounded-md"
            />
            {errors.appPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.appPassword}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400"
            >
              {loading ? "Đang lấy token..." : "Lấy Token"}
            </button>
          </form>

          {token && (
            <div className="mt-4 p-3 bg-gray-100 rounded-md">
              <p className="font-semibold">Bearer Token:</p>
              <code className="break-all text-sm">{token}</code>
            </div>
          )}
        </div>
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition text-xl"
        >
          ✕<span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
}
