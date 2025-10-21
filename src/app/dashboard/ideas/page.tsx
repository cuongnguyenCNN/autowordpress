//import Link from "next/link";
"use client";
import ProfileModal from "@/src/components/profilemodal";
import { gemini } from "@/src/lib/gemini";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Ideas() {
  const [result, setReSult] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const GenerateIdeas = async () => {
    setLoading(true);
    const response = await gemini.models.generateContent({
      model: "gemini-2.0-flash",
      contents: text,
    });
    console.log(response.text);
    setReSult(response.text || "");
    setLoading(false);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get("access_token");

      if (accessToken) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  });
  return (
    <main className="flex-1 overflow-auto rounded-[10px] bg-[#F3F4EF] md:pr-1 pt-14 md:pt-0 w-full">
      <div className="container max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">
              🤔 Content Ideas
            </h1>
            <p className="text-muted-foreground ml-2">
              Generate content ideas for posts
            </p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 h-10 rounded-xl hover:bg-white/100 border px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none active:border-gray-100 select-none ring-0 outline-none focus-visible:outline-none focus-visible:ring-offset-0 bg-white shadow-sm border-blue-100 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles h-4 w-4 mr-2"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>
              Get Ideas
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 h-10 rounded-xl border-gray-100 border bg-white text-gray-900 shadow-sm px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none active:border-gray-100 select-none ring-0 outline-none focus-visible:outline-none focus-visible:ring-offset-0 hover:bg-white/100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-save h-4 w-4 mr-2"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
              Saved Ideas
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="grid gap-4 md:grid-cols-[1fr_auto]">
              <div className="flex-1">
                <textarea
                  value={text}
                  onChange={handleChange}
                  className="flex min-h-[80px] w-full border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 ring-offset-0 focus:ring-offset-0 focus-visible:ring-offset-0 resize-none h-20 rounded-xl border-input/50 focus-visible:ring-1 focus-visible:ring-primary/30 transition-all duration-200"
                  placeholder="Write a topic or sentence (e.g., 'Productivity tips for remote workers')"
                ></textarea>
              </div>
              <button
                onClick={() => GenerateIdeas()}
                style={{ background: "white" }}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 w-full md:w-auto h-20 rounded-xl shadow-sm font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 disabled:from-muted/80 disabled:to-muted/80 disabled:text-muted-foreground/80 disabled:cursor-not-allowed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-refresh-cw mr-2 h-4 w-4"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
                Generate Ideas
              </button>
            </div>
            <div className="text-sm text-muted-foreground flex justify-between items-center">
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles h-4 w-4 text-primary/70"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  <path d="M5 3v4"></path>
                  <path d="M19 17v4"></path>
                  <path d="M3 5h4"></path>
                  <path d="M17 19h4"></path>
                </svg>
                Ideas are generated using AI. Results may vary.
              </p>
            </div>
            <div className="prose max-w-none">
              {loading ? (
                <div className="flex items-center justify-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
                </div>
              ) : (
                <>
                  <ReactMarkdown>{result}</ReactMarkdown>
                  <button
                    onClick={() => setOpenModalCreate(true)}
                    style={{
                      background: "rgb(59 130 246 / var(--tw-bg-opacity, 1))",
                    }}
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 w-full md:w-auto h-20 rounded-xl shadow-sm font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 disabled:from-muted/80 disabled:to-muted/80 disabled:text-muted-foreground/80 disabled:cursor-not-allowed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-refresh-cw mr-2 h-4 w-4"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>
                    Generate Posts
                  </button>
                </>
              )}
            </div>
            <ProfileModal
              isOpen={openModalCreate}
              onClose={() => setOpenModalCreate(false)}
              content={result}
            />
          </div>
          <div className="mt-8 space-y-8"></div>
        </div>
      </div>
    </main>
  );
}
