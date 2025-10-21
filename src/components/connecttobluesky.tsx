"use client";

import { useState } from "react";
import { useUser } from "../contexts/userscontext";
import Link from "next/link";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToken("");

    try {
      const res = await fetch("/api/get-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteUrl, username, appPassword }),
      });
      localStorage.setItem("access_site_url", siteUrl);
      localStorage.setItem("access_username", username);
      localStorage.setItem("access_username1", appPassword);
      const data = await res.json();
      if (data.token) {
        setToken(data.token);
      } else {
        setToken("❌ Không thể lấy token. Vui lòng kiểm tra thông tin!");
      }
    } catch (err) {
      setToken("Lỗi kết nối đến server hoặc URL không hợp lệ.");
    } finally {
      setLoading(false);
      onSuccess();
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
            <input
              type="text"
              placeholder="Username (tài khoản WordPress)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Application Password"
              value={appPassword}
              onChange={(e) => setAppPassword(e.target.value)}
              className="border p-2 rounded-md"
            />
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
