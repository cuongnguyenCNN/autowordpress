"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import React from "react";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "<p>Bắt đầu viết nội dung bài viết...</p>",
    immediatelyRender: false,
  });

  if (!editor) return <p>Đang tải trình soạn thảo...</p>;

  return (
    <div className="border rounded-lg">
      {/* Toolbar */}
      <div className="border-b p-2 flex flex-wrap gap-2 bg-gray-50">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="btn-editor"
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="btn-editor italic"
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className="btn-editor underline"
        >
          U
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="btn-editor"
        >
          • List
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className="btn-editor font-semibold"
        >
          H2
        </button>
      </div>

      {/* Content */}
      <EditorContent editor={editor} className="p-4 min-h-[300px]" />
    </div>
  );
}

// Tailwind helper styles
function btnEditorClass(active: boolean) {
  return active
    ? "bg-blue-100 text-blue-700 px-2 py-1 rounded-md"
    : "hover:bg-gray-100 px-2 py-1 rounded-md";
}
