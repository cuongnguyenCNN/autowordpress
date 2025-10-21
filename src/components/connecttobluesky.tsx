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
  const { user } = useUser();
  const [username, setUsername] = useState("");
  const [appPassword, setAppPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const res = await fetch("/api/oauth/callback/bluesky", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: username,
        password: appPassword,
        user_id: user?.id,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("access_token_bluesky", data.data.accessJwt);
      localStorage.setItem("refresh_token_bluesky", data.data.refreshJwt);
      onSuccess(); // bạn có thể lưu session token vào state/global/store
    } else {
      setError(data.error || "Login failed");
    }

    setLoading(false);
  };
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition text-xl"
        >
          ✕<span className="sr-only">Close</span>
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Connect Bluesky</h2>

        {/* Username input */}
        <label className="block mb-2 font-medium text-sm text-gray-700">
          Username
        </label>
        <input
          type="text"
          placeholder="yourname.bsky.social"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <small className="text-gray-500 block mb-4">
          For example: <code>yourname.bsky.social</code>
        </small>

        {/* App password input */}
        <label className="block mb-2 font-medium text-sm text-gray-700">
          App Password
        </label>
        <input
          type="password"
          placeholder="xxxx-xxxx-xxxx-xxxx"
          value={appPassword}
          onChange={(e) => setAppPassword(e.target.value)}
          className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <small className="text-gray-500 block mb-4">
          This is not your account password. Use an{" "}
          <Link
            href="https://bsky.app/settings/app-passwords"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
          >
            app password
          </Link>
          .
        </small>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          {loading ? "Connecting..." : "Connect"}
        </button>
      </div>
    </div>
  );
}
