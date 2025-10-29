"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useUser } from "../contexts/userscontext";
import { supabase } from "../lib/supabaseClient";
import "react-datepicker/dist/react-datepicker.css";
import { SocialAccount } from "../types";
import { usePosts } from "../contexts/postscontext";
import { EmojiClickData } from "emoji-picker-react";
import { marked } from "marked";
import EmojiPicker from "emoji-picker-react";
import { useSocialAccounts } from "../contexts/socialaccountcontext";
import dynamic from "next/dynamic";
// import { Dialog } from "@headlessui/react";
// import MarkdownIt from "markdown-it";
// import ReactMarkdown from "react-markdown";
import "react-quill/dist/quill.snow.css";
import "react-markdown-editor-lite/lib/index.css";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// load editor dynamically (vì editor không chạy SSR)
// const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
//   ssr: false,
// });
const MDEditor1 = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
type GoogleUser = {
  name: string;
  picture: string;
  email: string;
};
interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  googleuser?: GoogleUser;
  content: string;
}
function convertStyleStringToObject(styleString: string) {
  const styleObject: { [key: string]: string } = {};

  styleString.split(";").forEach((style) => {
    if (style.trim()) {
      const [property, value] = style.split(":");
      if (property && value) {
        const camelCaseProperty = property
          .trim()
          .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()); // Convert to camelCase
        styleObject[camelCaseProperty] = value.trim();
      }
    }
  });

  return styleObject;
}
const platformsList = ["Wordpress"];
export default function ProfileModal({
  isOpen,
  onClose,
  content,
}: ProfileModalProps) {
  const [media, setMedia] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [titlepost, setTitlepost] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);
  const [startDateInput, setStartDateInput] = useState(
    new Date().toISOString().slice(0, 16)
  );
  const { user, fetchUser } = useUser();
  const { fetchPosts } = usePosts();
  const { socialAccounts, fetchSocialAccount, addSocialAccount } =
    useSocialAccounts();
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedSocialAccounts, setSelectedSocialAccounts] = useState<
    SocialAccount[]
  >([]);
  const [errors, setErrors] = useState<string[]>([]);
  const validateForm = (action: "postNow" | "scheduled" | "draft"): boolean => {
    const validationErrors: string[] = [];

    if (!title.trim()) {
      validationErrors.push("Post content is required.");
    }

    if (selectedPlatforms.length === 0) {
      validationErrors.push("Please select at least one platform.");
    }

    if (action === "scheduled" && !startDateInput) {
      validationErrors.push("Scheduled time is required.");
    }

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  // const mdParser = new MarkdownIt({
  //   html: true,
  //   linkify: true,
  //   typographer: true,
  // });
  // function isSpace(ch: string) {
  //   return /\s/.test(ch);
  // }
  function convertToBase64(file: File) {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  }
  // const handleImageUpload = async (file: File) => {
  //   // Cách 1: Upload tạm thời (base64, demo)
  //   const base64 = await convertToBase64(file);
  //   return base64;
  // };
  // const handleEditorChange = ({ text }: any) => {
  //   setTitle(text);
  // };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedPlatforms((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  const handleSubmitPostNow = async () => {
    if (!validateForm("postNow")) return;
    setUploading(true);
    for (let index = 0; index < selectedPlatforms.length; index++) {
      const platform = selectedPlatforms[index];
      try {
        switch (platform) {
          case "Wordpress":
            await uploadToWordpress();
            break;
          default:
            console.warn(`Platform ${platform} chưa được hỗ trợ`);
            continue;
        }
        console.log(`✅ Đăng bài thành công lên ${platform}`);
      } catch (error) {
        console.error(`❌ Lỗi khi đăng bài lên ${platform}:`, error);
      }
    }
    await supabase
      .from("users")
      .update({ post_used: (user?.post_used ?? 0) + 1 }) // dùng raw để tăng trực tiếp
      .eq("id", user?.id);
    await fetchUser();
    setUploading(false);
    onClose();
  };
  const handleSubmitSchedulePost = async () => {
    if (!validateForm("scheduled")) return;
    const formData = new FormData();
    formData.append("content", title);
    formData.append("scheduledAt", startDateInput?.toString() || "");
    formData.append("user_id", user?.id || "");
    formData.append("platforms", "");
    formData.append("media", media || "");
    let mediaUrl = null;
    const platformsString = selectedPlatforms.join(",");
    debugger;
    try {
      if (media && media instanceof File) {
        const filePath = `media/${Date.now()}-${media.name}`;
        const { error } = await supabase.storage
          .from("uploads")
          .upload(filePath, media, { contentType: media.type });

        if (error) {
          alert("Lỗi upload file: " + error.message);
          return;
        }

        mediaUrl = supabase.storage.from("uploads").getPublicUrl(filePath)
          .data.publicUrl;
      }
      const { data, error } = await supabase
        .from("posts")
        .insert({
          user_id: user?.id,
          content: title,
          title: titlepost,
          media_url: mediaUrl,
          scheduled_time: startDateInput,
          platforms: platformsString,
          recurrence_interval: repeatMode,
          recurrence_end: recurrenceEnd === "" ? null : recurrenceEnd,
          status: "scheduled",
        })
        .select();
      debugger;
      await supabase
        .from("users")
        .update({ post_used: (user?.post_used ?? 0) + 1 }) // dùng raw để tăng trực tiếp
        .eq("id", user?.id);
      if (data) {
        alert("Bài viết đã được lên lịch thành công!");
        console.log(data);
        fetchPosts();
      } else {
        alert("Lỗi tạo bài viết: ");
        console.log(error);
      }
    } catch (error) {
      console.error("Unexpected error during upload:", error);
      alert("Lỗi không xác định: " + error);
    }
    await fetchUser();
    onClose();
  };
  const handleSubmitDraftPost = async () => {
    if (!validateForm("draft")) return;
    const formData = new FormData();
    formData.append("content", title);
    formData.append("scheduledAt", startDateInput?.toString() || "");
    formData.append("user_id", user?.id || "");
    formData.append("platforms", "");
    formData.append("media", media || "");
    let mediaUrl = null;
    const platformsString = selectedPlatforms.join(",");
    try {
      if (media && media instanceof File) {
        const filePath = `media/${Date.now()}-${media.name}`;
        const { error } = await supabase.storage
          .from("uploads")
          .upload(filePath, media, { contentType: media.type });

        if (error) {
          alert("Lỗi upload file: " + error.message);
          return;
        }

        mediaUrl = supabase.storage.from("uploads").getPublicUrl(filePath)
          .data.publicUrl;
      }
      const { data, error } = await supabase
        .from("posts")
        .insert({
          user_id: user?.id,
          content: title,
          media_url: mediaUrl,
          scheduled_time: startDateInput,
          platforms: platformsString,
          status: "draft",
        })
        .select();
      await supabase
        .from("users")
        .update({ post_used: (user?.post_used ?? 0) + 1 }) // dùng raw để tăng trực tiếp
        .eq("id", user?.id);
      if (data) {
        alert("Bài viết đã được lưu nháp thành công!");
        console.log(data);
        fetchPosts();
      } else {
        alert("Lỗi tạo bài viết: ");
        console.log(error);
      }
    } catch (error) {
      console.error("Unexpected error during upload:", error);
      alert("Lỗi không xác định: " + error);
    }

    await fetchUser();
    onClose();
  };
  const handleFile = (file: File) => {
    if (
      file &&
      (file.type.startsWith("image") || file.type.startsWith("video"))
    ) {
      setMedia(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFile = () => setMedia(null);
  const uploadImage = async (file: File): Promise<number | null> => {
    const response = await fetch(
      `${localStorage.getItem("access_site_url")}/wp-json/wp/v2/media`,
      {
        method: "POST",
        headers: {
          "Content-Disposition": `attachment; filename="${file.name}"`,
          Authorization: `${localStorage.getItem("access_token")}`,
        },
        body: file,
      }
    );

    if (!response.ok) {
      throw new Error("Upload image failed");
    }

    const data = await response.json();
    return data.id; // id của media
  };
  const uploadToWordpress = async () => {
    try {
      debugger;
      let mediaId: number | null = null;

      if (media) {
        mediaId = await uploadImage(media);
      }

      const response = await fetch(
        `${localStorage.getItem("access_site_url")}` + "/wp-json/wp/v2/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({
            title: titlepost,
            content: contentRef.current?.innerText || "",
            status: "publish",
            ...(mediaId && { featured_media: mediaId }),
          }),
        }
      );

      const data = await response.json();
      alert(data.id ? "✅ Đăng bài thành công!" : "❌ Lỗi: " + data.message);
    } catch (err) {
      console.log(err);
    }
  };
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const addEmoji = (emoji: EmojiClickData) => {
    const cursorPos = textareaRef.current?.selectionStart || 0;
    const before = title.slice(0, cursorPos);
    const after = title.slice(cursorPos);
    const newText = before + emoji.emoji + after;
    setTitle(newText);
    // Di chuyển lại con trỏ sau emoji
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.selectionStart = cursorPos + emoji.emoji.length;
        textareaRef.current.selectionEnd = cursorPos + emoji.emoji.length;
      }
    }, 0);
  };
  const maxChars = 3000;

  // Hàm đếm ký tự không tính khoảng trắng
  const countCharacters = (input: string) => {
    return input.replace(/\s/g, "").length;
  };
  const [repeatMode, setRepeatMode] = useState("none"); // daily, weekly, custom...
  const [recurrenceEnd, setRecurrenceEnd] = useState("");
  const [repeatCount] = useState(0);
  const [suggestedHashtags, setSuggestedHashtags] = useState<string[]>([]);
  const [showHashtags, setShowHashtags] = useState(false);
  const maxRecurringPosts = 5; // ví dụ user gói Free có 5 recurring posts

  const isLimitReached = repeatCount >= maxRecurringPosts;
  // const countWords = (str: string) => {
  //   return str
  //     .trim()
  //     .split(/\s+/) // tách theo khoảng trắng
  //     .filter((word) => word.length > 0).length;
  // };
  const suggestHashtags = () => {
    if (!title.trim()) {
      alert("❗ Hãy nhập nội dung trước khi gợi ý hashtag.");
      return;
    }

    // Giả lập gợi ý hashtag từ nội dung
    if (!showHashtags) {
      const keywords =
        title
          .toLowerCase()
          .match(/\b\w+\b/g)
          ?.filter((w) => w.length > 3) || [];

      const uniqueTags = Array.from(new Set(keywords.slice(0, 5))).map(
        (word) => `#${word}`
      );
      setSuggestedHashtags(uniqueTags);
    }
    setShowHashtags(!showHashtags);
  };

  const addHashtagToContent = (tag: string) => {
    const newContent = title + " " + tag;
    setTitle(newContent);
    //setCharCount(newContent.length);
  };
  useEffect(() => {
    if (isOpen) {
      const htmlContent = marked.parse(content);
      setTitle(content || "");
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, content]);
  useEffect(() => {
    if (user?.id) {
      setSelectedSocialAccounts(socialAccounts);
    }
  }, [user?.id]);

  if (!isOpen) return null;
  return (
    <>
      <div
        data-state="open"
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        style={convertStyleStringToObject("pointer-events: auto;")}
        data-aria-hidden="true"
        aria-hidden="true"
      ></div>
      <div
        role="dialog"
        id="radix-:Rukq:"
        aria-describedby="radix-:RukqH2:"
        aria-labelledby="radix-:RukqH1:"
        data-state="open"
        className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] gap-4 bg-background shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-75 max-w-lg sm:rounded-3xl border-none max-sm:overflow-y-auto max-sm:w-[95%] max-sm:p-4 max-sm:rounded-xl max-sm:left-[2.5%] max-sm:right-[2.5%] max-sm:top-[5vh] max-sm:bottom-auto max-sm:translate-x-0 max-sm:translate-y-0 max-sm:m-auto max-h-[90vh] max-sm:max-h-[95vh] p-0.5 overflow-hidden rounded-2xl flex flex-col w-[calc(100%-16px)] sm:w-[calc(100%-32px)] sm:max-w-[850px] mx-auto isolate"
        style={convertStyleStringToObject(
          "pointer-events: auto; background:white"
        )}
      >
        <div className="pl-8 pt-7 pb-6 max-sm:px-5 max-sm:py-4 bg-gradient-to-b from-[#F3F4EF] to-[#F9F9F7] border-b max-sm:sticky max-sm:top-0 max-sm:bg-background/95 max-sm:backdrop-blur-sm max-sm:z-10 transition-all">
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <h2
              id="radix-:RukqH1:"
              className="tracking-tight flex font-medium text-lg items-center gap-2 text-gray-800"
            >
              <div className="bg-[#F3F4EF] p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus h-[18px] w-[18px]"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
              Create Post
            </h2>
            <p
              id="radix-:RukqH2:"
              className="text-left mt-1.5 text-muted-foreground text-[13px] pl-[42px]"
            >
              Share your content across multiple social platforms
            </p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <div className="p-6 max-sm:p-3 space-y-6">
                <div className="">
                  <div className="space-y-4">
                    {errors.length > 0 && (
                      <div className="text-red-500 mb-2">
                        <ul>
                          {errors.map((err, i) => (
                            <li key={i}>• {err}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex gap-4 max-sm:gap-2">
                      <div className="flex-1">
                        <div className="border rounded-2xl bg-background">
                          <div className="grid grid-cols-10 gap-2 p-2 border-b relative">
                            <div className="relative flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-all bg-accent border-accent-foreground shadow-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-settings2 h-4 w-4 mb-1"
                              >
                                <path d="M20 7h-9"></path>
                                <path d="M14 17H5"></path>
                                <circle cx="17" cy="17" r="3"></circle>
                                <circle cx="7" cy="7" r="3"></circle>
                              </svg>
                              <span className="text-[10px] max-sm:hidden select-none">
                                All
                              </span>
                            </div>
                            <div
                              className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-all opacity-40 hover:bg-accent/50 cursor-not-allowed"
                              style={convertStyleStringToObject(
                                "transform: none; backface-visibility: visible; -webkit-font-smoothing: antialiased;"
                              )}
                            >
                              <div className="text-black">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 448 512"
                                  className="h-5 w-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
                                </svg>
                              </div>
                              <span className="text-[10px] mt-1 max-sm:hidden select-none">
                                Twitter
                              </span>
                            </div>
                            <div
                              className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-all opacity-40 hover:bg-accent/50 cursor-not-allowed"
                              style={convertStyleStringToObject(
                                "transform: none; backface-visibility: visible; -webkit-font-smoothing: antialiased;"
                              )}
                            >
                              <div className="text-[#2368C5]">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 448 512"
                                  className="h-5 w-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                </svg>
                              </div>
                              <span className="text-[10px] mt-1 max-sm:hidden select-none">
                                Linkedin
                              </span>
                            </div>
                            <div
                              className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-all opacity-40 hover:bg-accent/50 cursor-not-allowed"
                              style={convertStyleStringToObject(
                                "transform: none; backface-visibility: visible; -webkit-font-smoothing: antialiased;"
                              )}
                            >
                              <div className="text-[#3087FF]">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  className="h-5 w-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"></path>
                                </svg>
                              </div>
                              <span className="text-[10px] mt-1 max-sm:hidden select-none">
                                Bluesky
                              </span>
                            </div>
                            <div
                              className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-all opacity-40 hover:bg-accent/50 cursor-not-allowed"
                              style={convertStyleStringToObject(
                                "transform: none; backface-visibility: visible; -webkit-font-smoothing: antialiased;"
                              )}
                            >
                              <div className="text-black">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 448 512"
                                  className="h-5 w-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"></path>
                                </svg>
                              </div>
                              <span className="text-[10px] mt-1 max-sm:hidden select-none">
                                Threads
                              </span>
                            </div>
                            <div
                              className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-all opacity-40 hover:bg-accent/50 cursor-not-allowed"
                              style={convertStyleStringToObject(
                                "transform: none; backface-visibility: visible; -webkit-font-smoothing: antialiased;"
                              )}
                            >
                              <div className="text-[#E60023]">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 496 512"
                                  className="h-5 w-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                                </svg>
                              </div>
                              <span className="text-[10px] mt-1 max-sm:hidden select-none">
                                Pinterest
                              </span>
                            </div>
                            <div
                              className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-all opacity-40 hover:bg-accent/50 cursor-not-allowed"
                              style={convertStyleStringToObject(
                                "transform: none; backface-visibility: visible; -webkit-font-smoothing: antialiased;"
                              )}
                            >
                              <div className="text-[#E4405F]">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 448 512"
                                  className="h-5 w-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                              </div>
                              <span className="text-[10px] mt-1 max-sm:hidden select-none">
                                Instagram
                              </span>
                            </div>
                            <div
                              className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-all opacity-40 hover:bg-accent/50 cursor-not-allowed"
                              style={convertStyleStringToObject(
                                "transform: none; backface-visibility: visible; -webkit-font-smoothing: antialiased;"
                              )}
                            >
                              <div className="text-[#1877F2]">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  className="h-5 w-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path>
                                </svg>
                              </div>
                              <span className="text-[10px] mt-1 max-sm:hidden select-none">
                                Facebook
                              </span>
                            </div>
                            <div
                              className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-all opacity-40 hover:bg-accent/50 cursor-not-allowed"
                              style={convertStyleStringToObject(
                                "transform: none; backface-visibility: visible; -webkit-font-smoothing: antialiased;"
                              )}
                            >
                              <div className="text-[#FF0000]">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 576 512"
                                  className="h-5 w-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                </svg>
                              </div>
                              <span className="text-[10px] mt-1 max-sm:hidden select-none">
                                Youtube
                              </span>
                            </div>
                            <div
                              className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-all opacity-40 hover:bg-accent/50 cursor-not-allowed"
                              style={convertStyleStringToObject(
                                "transform: none; backface-visibility: visible; -webkit-font-smoothing: antialiased;"
                              )}
                            >
                              <div className="text-black">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 448 512"
                                  className="h-5 w-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                                </svg>
                              </div>
                              <span className="text-[10px] mt-1 max-sm:hidden select-none">
                                Tiktok
                              </span>
                            </div>
                          </div>
                          <div className="relative px-2 sm:px-0">
                            <input
                              placeholder="Write title"
                              className="w-full rounded-md border border-gray-300 bg-white p-2 outline-none focus:ring-2 focus:ring-blue-500"
                              value={titlepost}
                              onChange={(e) => setTitlepost(e.target.value)}
                            />

                            {/* <textarea
                              ref={textareaRef}
                              value={title}
                              onChange={(e) => {
                                if (countCharacters(title) <= maxChars) {
                                  setTitle(e.target.value);
                                }
                              }}
                              className="flex w-full rounded-md border-input bg-background ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 focus:ring-0 focus-visible:ring-0 ring-offset-0 focus:ring-offset-0 focus-visible:ring-offset-0 transition-none min-h-[200px] rounded-b-2xl border-0 resize-none text-sm leading-relaxed p-4 markdown-content focus:outline-none focus-visible:outline-none"
                              placeholder="Write your post content..."
                              style={convertStyleStringToObject(
                                "white-space: pre-wrap; height: 202px;"
                              )}
                            ></textarea> */}
                            {/* <ReactQuill
                              theme="snow"
                              value={title}
                              onChange={setTitle}
                              className="h-[400px] mb-8"
                            /> */}
                            <MDEditor1
                              value={title}
                              onChange={(value) => {
                                if (countCharacters(title) <= maxChars) {
                                  setTitle(value || "");
                                }
                              }}
                              height={500}
                            />
                            {/* <MdEditor
                              value={title}
                              style={{ height: "500px" }}
                              renderHTML={(title) => mdParser.render(title)}
                              onChange={handleEditorChange}
                              onImageUpload={handleImageUpload}
                              config={{
                                view: {
                                  html: true, // Chỉ hiển thị phần render HTML
                                },
                              }}
                            /> */}
                            {/* <div
                              id="contentMarkdown"
                              ref={contentRef}
                              className="p-4 border rounded-md bg-gray-50 overflow-auto min-h-[300px]"
                            >
                              <ReactMarkdown>{title}</ReactMarkdown>
                            </div> */}
                            <div className="absolute bottom-4 right-4 flex items-center gap-2 max-w-[90%] justify-end">
                              <div className="relative flex items-center gap-2 ml-auto">
                                <div
                                  onClick={() =>
                                    setShowEmojiPicker(!showEmojiPicker)
                                  }
                                  className="p-2 rounded-lg transition-all bg-blue-50 hover:bg-blue-100 cursor-pointer"
                                  aria-haspopup="dialog"
                                  aria-expanded="false"
                                  aria-controls="radix-:r30:"
                                  data-state="closed"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-smile h-5 w-5 text-blue-500"
                                  >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                    <line x1="9" x2="9.01" y1="9" y2="9"></line>
                                    <line
                                      x1="15"
                                      x2="15.01"
                                      y1="9"
                                      y2="9"
                                    ></line>
                                  </svg>
                                  {showEmojiPicker && (
                                    <div className="absolute top-full right-0 mt-2 z-20 w-[90vw] max-w-xs sm:max-w-sm sm:w-auto bg-white rounded-md shadow-lg">
                                      {/* <Picker
                                        data={data}
                                        onEmojiSelect={addEmoji}
                                      /> */}
                                      <EmojiPicker onEmojiClick={addEmoji} />
                                    </div>
                                  )}
                                </div>

                                <div
                                  className="p-2 rounded-lg transition-all bg-blue-50 hover:bg-blue-100 opacity-50 cursor-not-allowed"
                                  data-state="closed"
                                >
                                  <div className="relative">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-pencil h-5 w-5 text-blue-500"
                                    >
                                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                      <path d="m15 5 4 4"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div
                                  className="p-2 rounded-lg transition-all hidden sm:block bg-blue-50 hover:bg-blue-100 opacity-50 cursor-not-allowed"
                                  data-state="closed"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-bar-chart h-5 w-5 text-blue-500"
                                  >
                                    <line
                                      x1="12"
                                      x2="12"
                                      y1="20"
                                      y2="10"
                                    ></line>
                                    <line x1="18" x2="18" y1="20" y2="4"></line>
                                    <line x1="6" x2="6" y1="20" y2="16"></line>
                                  </svg>
                                </div>
                                <div
                                  className="relative flex flex-col items-center p-2 rounded-lg transition-all bg-purple-50 hover:bg-purple-100 opacity-50 cursor-not-allowed"
                                  data-state="closed"
                                >
                                  <div
                                    className=" flex"
                                    onClick={suggestHashtags}
                                    title="Suggest Hashtags"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-wand2 h-5 w-5 text-purple-500"
                                    >
                                      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
                                      <path d="m14 7 3 3"></path>
                                      <path d="M5 6v4"></path>
                                      <path d="M19 14v4"></path>
                                      <path d="M10 2v2"></path>
                                      <path d="M7 8H3"></path>
                                      <path d="M21 16h-4"></path>
                                      <path d="M11 3H9"></path>
                                    </svg>
                                  </div>
                                  {showHashtags &&
                                    suggestedHashtags.length > 0 && (
                                      <div className="absolute top-full mt-2 flex flex-col items-start gap-1 bg-white p-2 rounded-lg shadow-lg">
                                        {suggestedHashtags.map((tag, idx) => (
                                          <button
                                            key={idx}
                                            onClick={() =>
                                              addHashtagToContent(tag)
                                            }
                                            className="flex items-center bg-blue-100 px-2 py-1 rounded text-blue-700 hover:bg-blue-200 transition"
                                          >
                                            {tag}
                                          </button>
                                        ))}
                                      </div>
                                    )}
                                </div>

                                <div className="w-10 h-10 relative flex-shrink-0 sm:mr-0 mr-4">
                                  <svg className="w-10 h-10 transform -rotate-90">
                                    <circle
                                      cx="20"
                                      cy="20"
                                      r="16"
                                      fill="none"
                                      stroke="#e5e5e5"
                                      stroke-width="3"
                                    ></circle>
                                    <circle
                                      cx="20"
                                      cy="20"
                                      r="16"
                                      fill="none"
                                      stroke="rgb(34 197 94)"
                                      stroke-width="3"
                                      stroke-dasharray="0 100.53"
                                      className="transition-all duration-300"
                                    ></circle>
                                  </svg>
                                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                                    {countCharacters(title)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-4">
                        <div
                          role="presentation"
                          className="border-2 mb-4 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all duration-200
          border-gray-200 hover:border-gray-300 hover:bg-[#FAFAFA]"
                        >
                          <label
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            className={`flex flex-col items-center space-y-2 block border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
                              isDragging
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-300"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-upload h-8 w-8 text-gray-400 items-center"
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="17 8 12 3 7 8"></polyline>
                              <line x1="12" x2="12" y1="3" y2="15"></line>
                            </svg>
                            <input
                              type="file"
                              accept="image/*,video/*"
                              hidden
                              onChange={handleFileChange}
                            />
                            <p className="text-sm text-gray-500">
                              Drag &amp; drop images or a video here, or click
                              to select
                            </p>
                          </label>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {media && (
                          <div className="relative rounded-lg overflow-hidden border">
                            <div className="relative min-h-[400px] w-full">
                              {media.type.startsWith("video") ? (
                                <video
                                  style={convertStyleStringToObject(
                                    "max-height: 600px;"
                                  )}
                                  src={URL.createObjectURL(media)}
                                  controls
                                  className="absolute inset-0 w-full h-full object-contain bg-black/5"
                                />
                              ) : (
                                <img
                                  src={URL.createObjectURL(media)}
                                  alt="preview"
                                  className="absolute inset-0 w-full h-full object-contain bg-black/5"
                                />
                              )}
                            </div>
                            <button
                              onClick={removeFile}
                              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-red-300 text-[#9e2513] hover:opacity-70 h-10 w-10 absolute top-2 right-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-x h-4 w-4"
                              >
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="space-y-2">
                        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal mt-2 text-muted-foreground">
                          Pick a Date &amp; Time:
                        </label>
                        <div className="flex max-sm:flex-col max-sm:space-y-3 sm:items-center sm:justify-between sm:gap-4">
                          <div className="flex-1 relative cursor-pointer">
                            <input
                              className="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:border-[#9C9C9C] focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 w-full cursor-pointer rounded-2xl"
                              type="datetime-local"
                              onChange={(e) =>
                                setStartDateInput(e.target.value)
                              }
                              value={startDateInput.toString()}
                            />
                          </div>
                          <div className="flex max-sm:flex-col max-sm:space-y-3 sm:items-center sm:gap-4">
                            <div className="flex items-center space-x-2">
                              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-9 px-3 text-xs gap-1.5 transition-all rounded-2xl bg-background hover:bg-accent/80">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-clock h-3.5 w-3.5"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                Show optimal times
                              </button>
                            </div>
                          </div>
                          <div className="flex max-sm:flex-col max-sm:space-y-3 sm:items-center sm:gap-4">
                            <div className="flex items-center space-x-2">
                              <div
                                className="jsx-7a8c892f8abaaf0e touch-manipulation"
                                style={convertStyleStringToObject(
                                  "touch-action: manipulation;"
                                )}
                              >
                                <button
                                  type="button"
                                  role="switch"
                                  aria-checked="true"
                                  data-state="checked"
                                  value="on"
                                  className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input custom-switch transition-all duration-200 ease-in-out"
                                >
                                  <span
                                    data-state="checked"
                                    className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                                  ></span>
                                </button>
                              </div>
                              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal text-muted-foreground">
                                Use my timezone
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 border-t pt-4">
                          <div className="bg-[#F3F4EF] rounded-2xl mb-8">
                            <div
                              className="flex items-center justify-between p-4 opacity-60 cursor-not-allowed"
                              data-state="closed"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="p-2 bg-[primary/10] rounded-xl">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 16 16"
                                    className="h-4 w-4 text-primary"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"></path>
                                    <path
                                      fill-rule="evenodd"
                                      d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                                    ></path>
                                  </svg>
                                </div>
                                <div>
                                  <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium">
                                    Recurring Post
                                    <select
                                      value={repeatMode}
                                      onChange={(e) =>
                                        setRepeatMode(e.target.value)
                                      }
                                      className="border rounded px-2 py-1 mt-1 w-full"
                                      disabled={isLimitReached}
                                    >
                                      <option value="none">No repeat</option>
                                      <option value="daily">Daily</option>
                                      <option value="weekly">Weekly</option>
                                      <option value="monthly">Monthly</option>
                                    </select>
                                  </label>
                                  {isLimitReached && (
                                    <p className="text-sm text-muted-foreground">
                                      Limit reached (0/0)
                                    </p>
                                  )}
                                  {repeatMode !== "none" && (
                                    <div>
                                      <label className="font-semibold">
                                        Repeat Until
                                      </label>
                                      <input
                                        type="date"
                                        value={recurrenceEnd || " "}
                                        onChange={(e) =>
                                          setRecurrenceEnd(e.target.value)
                                        }
                                        className="border px-3 py-2 rounded w-full mt-1"
                                        min={
                                          new Date().toISOString().split("T")[0]
                                        } // Không cho chọn ngày trong quá khứ
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <button
                                type="button"
                                role="switch"
                                aria-checked="false"
                                data-state="unchecked"
                                data-
                                value="on"
                                className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-input data-[state=checked]:bg-primary"
                                id="recurring-post"
                              >
                                <span
                                  data-state="unchecked"
                                  data-
                                  className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                                ></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal text-muted-foreground">
                        Platforms:
                      </label>
                      <div className="grid gap-3">
                        {platformsList.map((platform, key) => (
                          <div
                            key={platform + key}
                            className="flex items-center justify-between p-3 max-sm:p-2 border rounded-lg opacity-60"
                          >
                            <div className="flex items-center space-x-2 flex-1">
                              <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-1">
                                <div className="flex items-center space-x-2">
                                  <input
                                    // disabled={
                                    //   !selectedSocialAccounts.some(
                                    //     (account) =>
                                    //       account.provider ===
                                    //       platform.toLocaleLowerCase()
                                    //   )
                                    // }
                                    type="checkbox"
                                    value={platform}
                                    onChange={handleCheckboxChange}
                                    checked={selectedPlatforms.includes(
                                      platform
                                    )}
                                  />

                                  {platform === "Twitter/X" ? (
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 448 512"
                                      className="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
                                    </svg>
                                  ) : null}
                                  {platform === "LinkedIn" ? (
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 448 512"
                                      className="h-5 w-5 text-[#2368C5]"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                    </svg>
                                  ) : null}
                                  {platform === "Bluesky" ? (
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 576 512"
                                      className="h-5 w-5 text-[#3087FF]"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"></path>
                                    </svg>
                                  ) : null}
                                  {platform === "Wordpress" ? (
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 576 512"
                                      className="h-5 w-5 text-[#3087FF]"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"></path>
                                    </svg>
                                  ) : null}
                                  {platform === "Threads" ? (
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 448 512"
                                      className="h-5 w-5 text-[#000000]"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"></path>
                                    </svg>
                                  ) : null}
                                  {platform === "Pinterest" ? (
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 496 512"
                                      className="h-5 w-5 text-[#E60023]"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                                    </svg>
                                  ) : null}
                                  {platform === "Instagram" ? (
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 448 512"
                                      className="h-5 w-5 text-[#E4405F]"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                    </svg>
                                  ) : null}
                                  {platform === "Facebook" ? (
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 512 512"
                                      className="h-5 w-5 text-[#1877F2]"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path>
                                    </svg>
                                  ) : null}
                                  {platform === "YouTube" ? (
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 576 512"
                                      className="h-5 w-5 text-[#FF0000]"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                    </svg>
                                  ) : null}
                                  {platform === "TikTok" ? (
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 448 512"
                                      className="h-5 w-5 text-[#000000]"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                                    </svg>
                                  ) : null}

                                  <span className="max-sm:text-sm">
                                    {platform}
                                  </span>
                                </div>
                                {!selectedSocialAccounts.some(
                                  (account) =>
                                    account.provider ===
                                    platform.toLocaleLowerCase()
                                ) ? (
                                  <Link
                                    href="/dashboard/settings"
                                    onClick={() => {
                                      addSocialAccount({
                                        user_id: user?.id || "",
                                        provider: "wordpress",
                                        account_name:
                                          localStorage.getItem(
                                            "access_username"
                                          ) || "",
                                        access_token:
                                          localStorage.getItem(
                                            "access_token"
                                          ) || "",
                                        url:
                                          localStorage.getItem(
                                            "access_site_url"
                                          ) || "",
                                        connected: true,
                                        created_at: new Date().toISOString(),
                                      });
                                      onClose(); // hoặc setOpen(false)
                                    }}
                                    className="text-sm max-sm:text-xs text-muted-foreground hover:text-primary hover:underline flex items-center gap-2"
                                  >
                                    Authenticate First
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-link h-4 w-4 max-sm:h-3 max-sm:w-3"
                                    >
                                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>
                                  </Link>
                                ) : (
                                  "Connected"
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 max-sm:p-3  border-t bg-white sm:bg-white sm:sticky sm:bottom-0 sm:left-0 sm:right-0 mt-auto max-sm:mb-16 max-sm:pb-8 sm:shadow-md sm:z-10">
                <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center max-sm:space-y-1.5 sm:space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-info h-4 w-4 text-muted-foreground max-sm:hidden"
                    data-state="closed"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                  <button
                    onClick={() => {
                      onClose();
                      setErrors([]);
                    }}
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-xl border-none sm:w-auto max-sm:w-full max-sm:py-1 max-sm:text-xs max-sm:h-8"
                  >
                    Cancel
                  </button>
                  <div className="relative max-sm:w-full sm:inline-flex max-sm:flex max-sm:flex-col max-sm:space-y-1.5 sm:space-x-2">
                    <button
                      onClick={handleSubmitDraftPost}
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-orange-100 hover:bg-orange-200 border-orange-300 text-orange-800 rounded-xl sm:w-auto max-sm:w-full max-sm:py-1 max-sm:text-xs max-sm:h-8"
                    >
                      Save as Draft
                    </button>
                    <button
                      onClick={handleSubmitSchedulePost}
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-orange-100 text-primary-foreground hover:bg-orange-200 h-10 px-4 py-2 rounded-xl sm:w-auto max-sm:w-full max-sm:py-1 max-sm:text-xs max-sm:h-8"
                      title="Please authenticate and select at least one platform"
                    >
                      Schedule Post
                    </button>
                    <button
                      onClick={handleSubmitPostNow}
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-xl bg-blue-600 font-bold hover:bg-[#B8D8FF] text-white hover:text-white sm:w-auto max-sm:w-full max-sm:py-1 max-sm:text-xs max-sm:h-8"
                      title="Please authenticate and select at least one platform"
                    >
                      <span className="max-sm:hidden">
                        {uploading ? "Posting..." : "Post Now"}
                      </span>
                      <span className="sm:hidden">Post</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            onClose();
            setErrors([]);
          }}
          type="button"
          className="absolute right-4 top-4 max-sm:hidden rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x h-4 w-4"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  );
}
