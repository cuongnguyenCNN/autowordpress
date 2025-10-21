//import Link from "next/link";
"use client";
import { useUser } from "@/src/contexts/userscontext";
import { supabase } from "@/src/lib/supabaseClient";
import Link from "next/link";
import { useEffect } from "react";
// const tabs = [
//   { label: "Social Media", icon: <Notebook size={18} />, id: "socialmedia" },
//   {
//     label: "Subscription",
//     icon: <AlertCircle size={18} />,
//     id: "subscription",
//   },
//   { label: "Account", icon: <Zap size={18} />, id: "account" },
// ];
// function convertStyleStringToObject(styleString: string) {
//   const styleObject: { [key: string]: string } = {};

//   styleString.split(";").forEach((style) => {
//     if (style.trim()) {
//       const [property, value] = style.split(":");
//       if (property && value) {
//         const camelCaseProperty = property
//           .trim()
//           .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()); // Convert to camelCase
//         styleObject[camelCaseProperty] = value.trim();
//       }
//     }
//   });

//   return styleObject;
// }
// function isTokenExpired(
//   expires_at: string | Date,
//   bufferSeconds: number = 60
// ): boolean {
//   const expiresAt = new Date(expires_at).getTime(); // convert to ms
//   const now = Date.now();
//   return expiresAt - now > bufferSeconds * 1000;
// }
export default function Videos() {
  const dates = [];
  for (let index = 0; index < 30; index++) {
    dates[index] = index + 1;
  }
  const { user } = useUser();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get("access_token");

      if (accessToken) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
    const fetchToken = async () => {
      const { data, error } = await supabase
        .from("social_accounts")
        .select("*")
        .eq("user_id", user?.id);

      if (data) {
        console.error("Error fetching token", data);
      } else {
        console.error("Error fetching token", error);
      }
    };

    if (user?.id) {
      fetchToken();
    }
  }, [user?.id]);
  return (
    <main className="flex-1 overflow-auto rounded-[10px] bg-[#F3F4EF] md:pr-1 pt-14 md:pt-0 w-full">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">🎥</span>
                <span>Create a Video</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Choose a video type to get started
              </p>
            </div>
            <Link className="w-full md:w-auto" href="/dashboard/videos/list">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 h-10 w-full md:w-auto rounded-xl border-gray-100 hover:bg-white/100 border bg-white text-gray-900 shadow-sm px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none active:border-gray-100 select-none ring-0 outline-none focus-visible:outline-none focus-visible:ring-offset-0">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="h-4 w-4 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
                </svg>
                View Your Videos
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl shadow-lg px-6 py-8 cursor-pointer transition-all hover:scale-[1.02] border border-gray-100 min-h-[280px] flex flex-col relative overflow-hidden focus:outline-none focus:ring-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-50"></div>
              <div className="bg-green-100 rounded-xl p-5 mb-5 w-20 h-20 flex items-center justify-center relative z-10">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-green-600"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.1986 9.94447C14.7649 9.5337 14.4859 8.98613 14.4085 8.39384L14.0056 5.31138L11.275 6.79724C10.7503 7.08274 10.1433 7.17888 9.55608 7.06948L6.49998 6.50015L7.06931 9.55625C7.17871 10.1435 7.08257 10.7505 6.79707 11.2751L5.31121 14.0057L8.39367 14.4086C8.98596 14.4861 9.53353 14.7651 9.94431 15.1987L12.0821 17.4557L13.4178 14.6486C13.6745 14.1092 14.109 13.6747 14.6484 13.418L17.4555 12.0823L15.1986 9.94447ZM15.2238 15.5079L13.0111 20.1581C12.8687 20.4573 12.5107 20.5844 12.2115 20.442C12.1448 20.4103 12.0845 20.3665 12.0337 20.3129L8.49229 16.5741C8.39749 16.474 8.27113 16.4096 8.13445 16.3918L3.02816 15.7243C2.69958 15.6814 2.46804 15.3802 2.51099 15.0516C2.52056 14.9784 2.54359 14.9075 2.5789 14.8426L5.04031 10.3192C5.1062 10.1981 5.12839 10.058 5.10314 9.92253L4.16 4.85991C4.09931 4.53414 4.3142 4.22086 4.63997 4.16017C4.7126 4.14664 4.78711 4.14664 4.85974 4.16017L9.92237 5.10331C10.0579 5.12855 10.198 5.10637 10.319 5.04048L14.8424 2.57907C15.1335 2.42068 15.4979 2.52825 15.6562 2.81931C15.6916 2.88421 15.7146 2.95507 15.7241 3.02833L16.3916 8.13462C16.4095 8.2713 16.4739 8.39766 16.5739 8.49245L20.3127 12.0338C20.5533 12.2617 20.5636 12.6415 20.3357 12.8821C20.2849 12.9357 20.2246 12.9795 20.1579 13.0112L15.5078 15.224C15.3833 15.2832 15.283 15.3835 15.2238 15.5079ZM16.0206 17.435L17.4348 16.0208L21.6775 20.2634L20.2633 21.6776L16.0206 17.435Z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 relative z-10">
                Greenscreen Meme
              </h3>
              <p className="text-gray-600 text-lg relative z-10">
                Create viral meme videos with custom backgrounds
              </p>
              <div className="mt-auto pt-4 relative z-10">
                <div className="inline-flex items-center text-green-600 font-medium">
                  Get started{" "}
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
                    className="lucide lucide-arrow-right ml-2 w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg px-6 py-8 cursor-pointer transition-all hover:scale-[1.02] border border-gray-100 min-h-[280px] flex flex-col relative overflow-hidden focus:outline-none focus:ring-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50"></div>
              <div className="bg-blue-100 rounded-xl p-5 mb-5 w-20 h-20 flex items-center justify-center relative z-10">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-blue-600"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.465l-2.667-4H20l.001 4zM9.536 9 6.869 5h2.596l2.667 4H9.536zm5 0-2.667-4h2.596l2.667 4h-2.596zM4 5h.465l2.667 4H4V5zm0 14v-8h16l.002 8H4z"></path>
                  <path d="m10 18 5.5-3-5.5-3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 relative z-10">
                Hook Video
              </h3>
              <p className="text-gray-600 text-lg relative z-10">
                Create engaging hook videos with product demos
              </p>
              <div className="mt-auto pt-4 relative z-10">
                <div className="inline-flex items-center text-blue-600 font-medium">
                  Get started{" "}
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
                    className="lucide lucide-arrow-right ml-2 w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg px-6 py-8 cursor-pointer transition-all hover:scale-[1.02] border border-gray-100 min-h-[280px] flex flex-col relative overflow-hidden focus:outline-none focus:ring-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full opacity-50"></div>
              <div className="bg-amber-100 rounded-xl p-5 mb-5 w-20 h-20 flex items-center justify-center relative z-10">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-amber-600"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.465l-2.667-4H20l.001 4zM9.536 9 6.869 5h2.596l2.667 4H9.536zm5 0-2.667-4h2.596l2.667 4h-2.596zM4 5h.465l2.667 4H4V5zm0 14v-8h16l.002 8H4z"></path>
                  <path d="m10 18 5.5-3-5.5-3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 relative z-10">
                Ghibli AI
              </h3>
              <p className="text-gray-600 text-lg relative z-10">
                Create a short video with Ghibli-style AI images and text
              </p>
              <div className="mt-auto pt-4 relative z-10">
                <div className="inline-flex items-center text-amber-600 font-medium">
                  Get started{" "}
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
                    className="lucide lucide-arrow-right ml-2 w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
