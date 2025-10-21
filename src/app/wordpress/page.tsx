"use client";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();
    alert(data.success ? "✅ Đăng bài thành công!" : "❌ Lỗi: " + data.message);
    setLoading(false);
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">📰 Đăng bài lên WordPress</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          placeholder="Tiêu đề bài viết"
          className="border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Nội dung..."
          className="border p-2 h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white p-2 rounded"
        >
          {loading ? "Đang đăng..." : "Đăng bài"}
        </button>
      </form>
    </div>
  );
}
