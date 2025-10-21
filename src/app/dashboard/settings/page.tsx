//import Link from "next/link";
"use client";
import BlueskyLoginModal from "@/src/components/connecttobluesky";
import PricingModal from "@/src/components/pricingModal";
import { useUser } from "@/src/contexts/userscontext";
import { supabase } from "@/src/lib/supabaseClient";
import { SocialAccount } from "@/src/types";
import { Notebook, AlertCircle, Zap } from "lucide-react";
import { useEffect, useState } from "react";
const tabs = [
  { label: "Social Media", icon: <Notebook size={18} />, id: "socialmedia" },
  {
    label: "Subscription",
    icon: <AlertCircle size={18} />,
    id: "subscription",
  },
  { label: "Account", icon: <Zap size={18} />, id: "account" },
];
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
function isTokenExpired(
  expires_at: string | Date,
  bufferSeconds: number = 60
): boolean {
  const expiresAt = new Date(expires_at).getTime(); // convert to ms
  const now = Date.now();
  return expiresAt - now > bufferSeconds * 1000;
}

export default function Settings() {
  const [activeTab, setActiveTab] = useState("socialmedia");
  const [data, setData] = useState<SocialAccount[] | null>(null);
  const [openPricingModal, setOpenPricingModal] = useState(false);
  const { user, signOut } = useUser();
  const [showModal, setShowModal] = useState(false);
  const unauthorizeLinkedIn = async () => {
    debugger;
    try {
      if (!user) throw new Error("User not found");

      const { error } = await supabase
        .from("social_accounts") // tên bảng của bạn
        .update({ connected: false })
        .eq("provider", "linkedin")
        .eq("user_id", user?.id);

      if (error) throw error;

      console.log("✅ LinkedIn disconnected successfully!");
    } catch (err) {
      console.log("❌ Failed to unauthorize LinkedIn", err);
    }
  };
  const handleSuccess = () => {
    console.log("Session saved:");
    setShowModal(false);
    // lưu sessionData vào localStorage hoặc backend tùy bạn
  };
  const connectYouTube = () => {
    window.location.href = "/api/oauth/youtube";
  };
  const connectFacebook = () => {
    window.location.href = "/api/oauth/facebook";
  };
  const connectTiktok = () => {
    window.location.href = "/api/oauth/tiktok";
  };
  const connectTwitter = () => {
    window.location.href = `/api/oauth/twitter?user_id=${user?.id}`;
  };
  const connectPinterest = () => {
    window.location.href = `/api/oauth/pinterest?user_id=${user?.id}`;
  };
  const connectLinkedIn = () => {
    window.location.href = `/api/oauth/linkedin?user_id=${user?.id}`;
  };
  // const connectBlueSky = () => {
  //   window.location.href = "/api/oauth/bluesky";
  // };
  const connectThreads = () => {
    window.location.href = "/api/oauth/threads";
  };
  const connectInstagram = () => {
    window.location.href = "/api/oauth/instagram";
  };
  const percentage = Math.min(
    ((user?.post_used ?? 0) / (user?.post_limit ?? 1)) * 100,
    100
  );
  useEffect(() => {
    const getUser = async () => {
      await supabase.auth.getSession();
    };

    getUser();
    const fetchToken = async () => {
      const { data, error } = await supabase
        .from("social_accounts")
        .select("*")
        .eq("user_id", user?.id);

      if (data) {
        setData(data);
      } else {
        console.error("Error fetching token", error);
      }
    };

    if (user?.id) {
      fetchToken();
    }
  });
  return (
    <main className="flex-1 overflow-auto rounded-[10px] bg-[#F3F4EF] md:pr-1 pt-14 md:pt-0 w-full">
      <div className="flex bg-[#F3F4EF] min-h-screen">
        <div className="flex-1">
          <div className="container max-w-7xl mx-auto px-3 md:px-4 py-8 w-full">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-3 md:pb-4">
                <h1 className="text-xl md:text-3xl font-bold">⚙️ Settings</h1>
              </div>
              <div
                dir="ltr"
                data-orientation="horizontal"
                className="space-y-4 md:space-y-6"
              >
                <div
                  role="tablist"
                  aria-orientation="horizontal"
                  className="items-center justify-center p-1 text-muted-foreground grid w-full grid-cols-3 h-10 md:h-11 rounded-xl bg-[#EEEFE8] overflow-hidden"
                  data-orientation="horizontal"
                  style={convertStyleStringToObject("outline: none;")}
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-center px-4 py-2 text-sm font-medium w-full gap-2 transition-all rounded-md text-sm font-medium ring-offset-background
            ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
                {activeTab === "socialmedia" && (
                  <div
                    data-state="active"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:rp:-trigger-social"
                    id="radix-:rp:-content-social"
                    className="ring-0 outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=inactive]:hidden data-[state=active]:block"
                    style={convertStyleStringToObject("")}
                  >
                    <div className="rounded-lg m-1 border text-card-foreground border-none bg-[#F3F4EF]">
                      <div className="flex flex-col space-y-1.5 p-6 px-0 pt-2">
                        <h3 className="text-l font-normal flex items-center gap-2 text-base md:text-lg">
                          Connections
                          <button data-state="closed">
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
                              className="lucide lucide-info h-3 w-3 md:h-4 md:w-4 text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </button>
                        </h3>
                      </div>
                      <div className="p-6 pt-0 px-0">
                        <div className="space-y-4">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl border bg-card text-card-foreground shadow-sm gap-3 sm:gap-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                              <div className="flex items-center gap-2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 448 512"
                                  className="h-5 w-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
                                </svg>
                                <span className="font-medium">Twitter/X</span>
                              </div>
                              {data?.filter(
                                (provider) => provider.provider === "twitter/x"
                              )[0] && (
                                <div className="flex items-center gap-3 bg-[#F5F5F5] px-3 py-2 rounded-xl">
                                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                    <img
                                      alt="Nguyen Ngoc Cuong's avatar"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover shadow-md"
                                      src={
                                        data?.filter(
                                          (provider) =>
                                            provider.provider === "twitter/x"
                                        )[0]?.avatar_url
                                      }
                                      style={convertStyleStringToObject(
                                        "position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                      )}
                                    />
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    @
                                    {
                                      data?.filter(
                                        (provider) =>
                                          provider.provider === "twitter/x"
                                      )[0]?.account_name
                                    }
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="w-full sm:w-auto">
                              {data?.filter(
                                (provider) => provider.provider === "twitter/x"
                              )[0]?.connected ? (
                                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-[#E0FCE7] rounded-xl hover:bg-red-300 transition-colors duration-300 group w-full sm:w-auto">
                                  <span className="group-hover:hidden text-[#388543] flex items-center gap-1">
                                    ✓ Connected
                                  </span>
                                  <span className="hidden group-hover:inline text-[#B22510]">
                                    Unauthorize
                                  </span>
                                </button>
                              ) : (
                                <button
                                  onClick={connectTwitter}
                                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-xl"
                                >
                                  Connect Twitter
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl border bg-card text-card-foreground shadow-sm gap-3 sm:gap-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                              <div className="flex items-center gap-2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 448 512"
                                  className="h-5 w-5 text-[#2368C5]"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                </svg>
                                <span className="font-medium">LinkedIn</span>
                              </div>{" "}
                              {data?.filter(
                                (provider) => provider.provider === "linkedin"
                              )[0] && (
                                <div className="flex items-center gap-3 bg-[#F5F5F5] px-3 py-2 rounded-xl">
                                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                    <img
                                      alt="Nguyen Ngoc Cuong's avatar"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover shadow-md"
                                      src={
                                        data?.filter(
                                          (provider) =>
                                            provider.provider === "linkedin"
                                        )[0]?.avatar_url
                                      }
                                      style={convertStyleStringToObject(
                                        "position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                      )}
                                    />
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    @
                                    {
                                      data?.filter(
                                        (provider) =>
                                          provider.provider === "linkedin"
                                      )[0]?.account_name
                                    }
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="w-full sm:w-auto">
                              {data?.filter(
                                (provider) =>
                                  provider.provider === "linkedin" &&
                                  isTokenExpired(provider.expires_at)
                              )[0]?.connected ? (
                                <button
                                  onClick={unauthorizeLinkedIn}
                                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-[#E0FCE7] rounded-xl hover:bg-red-300 transition-colors duration-300 group w-full sm:w-auto"
                                >
                                  <span className="group-hover:hidden text-[#388543] flex items-center gap-1">
                                    ✓ Connected
                                  </span>
                                  <span className="hidden group-hover:inline text-[#B22510]">
                                    Unauthorize
                                  </span>
                                </button>
                              ) : (
                                <button
                                  onClick={connectLinkedIn}
                                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-xl"
                                >
                                  Connect LinkedIn
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl border bg-card text-card-foreground shadow-sm gap-3 sm:gap-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                              <div className="flex items-center gap-2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  className="h-5 w-5 text-[#0085FF]"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"></path>
                                </svg>
                                <span className="font-medium">Bluesky</span>
                              </div>
                              {data?.filter(
                                (provider) => provider.provider === "bluesky"
                              )[0] && (
                                <div className="flex items-center gap-3 bg-[#F5F5F5] px-3 py-2 rounded-xl">
                                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                    <img
                                      alt="Nguyen Ngoc Cuong's avatar"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover shadow-md"
                                      src={
                                        data?.filter(
                                          (provider) =>
                                            provider.provider === "bluesky"
                                        )[0]?.avatar_url
                                      }
                                      style={convertStyleStringToObject(
                                        "position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                      )}
                                    />
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    @
                                    {
                                      data?.filter(
                                        (provider) =>
                                          provider.provider === "bluesky"
                                      )[0]?.account_name
                                    }
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="w-full sm:w-auto">
                              {data?.filter(
                                (provider) => provider.provider === "bluesky"
                              )[0]?.connected ? (
                                <button
                                  onClick={() => setShowModal(true)}
                                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-[#E0FCE7] rounded-xl hover:bg-red-300 transition-colors duration-300 group w-full sm:w-auto"
                                >
                                  <span className="group-hover:hidden text-[#388543] flex items-center gap-1">
                                    ✓ Connected
                                  </span>
                                  <span className="hidden group-hover:inline text-[#B22510]">
                                    Unauthorize
                                  </span>
                                </button>
                              ) : (
                                <button
                                  onClick={() => setShowModal(true)}
                                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-xl"
                                >
                                  Connect Bluesky
                                </button>
                              )}
                            </div>
                            {showModal && (
                              <BlueskyLoginModal
                                isOpen={showModal}
                                onClose={() => setShowModal(false)}
                                onSuccess={handleSuccess}
                              />
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl border bg-card text-card-foreground shadow-sm gap-3 sm:gap-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                              <div className="flex items-center gap-2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 576 512"
                                  className="h-5 w-5 text-[#FF0000]"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                </svg>
                                <span className="font-medium">YouTube</span>
                              </div>
                              {data?.filter(
                                (provider) => provider.provider === "youtube"
                              )[0] && (
                                <div className="flex items-center gap-3 bg-[#F5F5F5] px-3 py-2 rounded-xl">
                                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                    <img
                                      alt="Nguyen Ngoc Cuong's avatar"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover shadow-md"
                                      src={
                                        data?.filter(
                                          (provider) =>
                                            provider.provider === "youtube"
                                        )[0]?.avatar_url
                                      }
                                      style={convertStyleStringToObject(
                                        "position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                      )}
                                    />
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    @
                                    {
                                      data?.filter(
                                        (provider) =>
                                          provider.provider === "youtube"
                                      )[0]?.account_name
                                    }
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="w-full sm:w-auto">
                              {data?.filter(
                                (provider) =>
                                  provider.provider === "youtube" &&
                                  isTokenExpired(provider.expires_at)
                              )[0]?.connected ? (
                                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-[#E0FCE7] rounded-xl hover:bg-red-300 transition-colors duration-300 group w-full sm:w-auto">
                                  <span className="group-hover:hidden text-[#388543] flex items-center gap-1">
                                    ✓ Connected
                                  </span>
                                  <span className="hidden group-hover:inline text-[#B22510]">
                                    Unauthorize
                                  </span>
                                </button>
                              ) : (
                                <button
                                  onClick={connectYouTube}
                                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-xl"
                                >
                                  Connect YouTube
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl border bg-card text-card-foreground shadow-sm gap-3 sm:gap-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                              <div className="flex items-center gap-2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 448 512"
                                  className="h-5 w-5 text-[#000000]"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"></path>
                                </svg>
                                <span className="font-medium">Threads</span>
                              </div>
                            </div>
                            <div className="w-full sm:w-auto">
                              <button
                                disabled={true}
                                onClick={connectThreads}
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-xl"
                              >
                                Connect Threads
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl border bg-card text-card-foreground shadow-sm gap-3 sm:gap-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                              <div className="flex items-center gap-2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 496 512"
                                  className="h-5 w-5 text-[#D80E00]"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                                </svg>
                                <span className="font-medium">Pinterest</span>
                              </div>
                            </div>
                            <div className="w-full sm:w-auto">
                              <button
                                disabled={true}
                                onClick={connectPinterest}
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-xl"
                              >
                                Connect Pinterest
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl border bg-card text-card-foreground shadow-sm gap-3 sm:gap-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                              <div className="flex items-center gap-2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  className="h-5 w-5 text-[#1877F2]"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path>
                                </svg>
                                <span className="font-medium">Facebook</span>
                              </div>
                            </div>
                            <div className="w-full sm:w-auto">
                              <button
                                disabled={true}
                                onClick={connectFacebook}
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-xl"
                              >
                                Connect Facebook
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl border bg-card text-card-foreground shadow-sm gap-3 sm:gap-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                              <div className="flex items-center gap-2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 448 512"
                                  className="h-5 w-5 text-[#EA1884]"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                                <span className="font-medium">Instagram</span>
                              </div>
                            </div>
                            <div className="w-full sm:w-auto">
                              <button
                                disabled={true}
                                onClick={connectInstagram}
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-xl"
                              >
                                Connect Instagram
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 rounded-2xl border bg-card text-card-foreground shadow-sm gap-3 sm:gap-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                              <div className="flex items-center gap-2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 448 512"
                                  className="h-5 w-5 text-[#000000]"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                                </svg>
                                <span className="font-medium">TikTok</span>
                              </div>
                            </div>
                            <div className="w-full sm:w-auto">
                              <button
                                disabled={true}
                                onClick={connectTiktok}
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-xl"
                              >
                                Connect TikTok
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "subscription" && (
                  <div
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:rp:-trigger-subscription"
                    id="radix-:rp:-content-subscription"
                    className="ring-0 outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=inactive]:hidden data-[state=active]:block"
                  >
                    <div className="m-1 border bg-[#ffffff] text-card-foreground p-4 md:p-8 rounded-2xl">
                      <div className="flex flex-col space-y-1.5 p-6 px-0 pt-0">
                        <h3 className="text-l font-normal text-base md:text-lg">
                          Subscription
                        </h3>
                      </div>
                      <div className="p-6 pt-0 px-0">
                        <div className="space-y-6">
                          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-blue-100 rounded-lg">
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
                                    className="lucide lucide-credit-card h-4 w-4 text-blue-600"
                                  >
                                    <rect
                                      width="20"
                                      height="14"
                                      x="2"
                                      y="5"
                                      rx="2"
                                    ></rect>
                                    <line x1="2" x2="22" y1="10" y2="10"></line>
                                  </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-900">
                                  Free Plan
                                </h3>
                              </div>
                              <button
                                onClick={() => setOpenPricingModal(true)}
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-9 px-3 bg-blue-600 rounded-xl hover:bg-blue-700 text-white shadow-sm"
                              >
                                Upgrade Plan
                              </button>
                            </div>
                            <PricingModal
                              isOpen={openPricingModal}
                              onClose={() => setOpenPricingModal(false)}
                            ></PricingModal>
                            <div className="space-y-3">
                              <div className="flex justify-between text-sm">
                                <span className="font-medium text-blue-800">
                                  Posts Available
                                </span>
                                <span className="font-semibold text-blue-900">
                                  {user?.post_used}/{user?.post_limit}
                                </span>
                              </div>
                              <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
                                <div
                                  className="bg-blue-500 h-full"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "account" && (
                  <div
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:rp:-trigger-account"
                    id="radix-:rp:-content-account"
                    className="ring-0 outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=inactive]:hidden data-[state=active]:block"
                  >
                    <div className="m-1 border bg-[#ffffff] text-card-foreground p-4 md:p-8 rounded-2xl">
                      <div className="flex flex-col space-y-1.5 p-6 px-0 pt-0">
                        <h3 className="text-l font-normal text-base md:text-lg">
                          Business Description
                        </h3>
                      </div>
                      <div className="p-6 pt-0 px-0 space-y-4 md:space-y-6">
                        <div className="bg-muted/50 rounded-lg p-4">
                          <div className="mb-4">
                            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium mb-2 block">
                              Business Name
                            </label>
                            <input
                              id="businessName"
                              placeholder="e.g., LinkPost"
                              className="w-full px-3 py-2 rounded-lg border bg-background text-sm"
                              type="text"
                              value=""
                            />
                          </div>
                          <p className="text-xs md:text-sm text-muted-foreground mb-4">
                            Describe your business to help generate better text
                            suggestions for your videos
                          </p>
                          <textarea
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 ring-offset-0 focus:ring-offset-0 focus-visible:ring-offset-0 transition-none min-h-[100px] mb-4"
                            id="businessDescription"
                            placeholder="e.g., A social media scheduling tool that lets you post to 9 platforms from one dashboard"
                          ></textarea>
                          <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Save Description
                          </button>
                        </div>
                        <div className="border-t pt-4">
                          <h3 className="text-base md:text-lg font-normal mb-4">
                            Account Actions
                          </h3>
                          <div className="flex flex-col md:flex-row md:items-center justify-between p-3 md:p-4 bg-muted/50 rounded-lg">
                            <div className="space-y-0.5 mb-3 md:mb-0">
                              <div className="text-xs md:text-sm font-medium">
                                Email Address
                              </div>
                              <div className="text-xs md:text-sm text-muted-foreground">
                                {user?.email}
                              </div>
                            </div>
                            <button
                              onClick={signOut}
                              className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-xl text-xs md:text-sm"
                            >
                              Log Out
                            </button>
                          </div>
                          <div className="border-t pt-4 md:pt-6 mt-4">
                            <h3 className="text-sm md:text-lg font-normal text-destructive mb-2">
                              Danger Zone
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground mb-4">
                              Once you delete your account, there is no going
                              back. Please be certain.
                            </p>
                            <button
                              className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-red-300 text-[#9e2513] hover:opacity-70 h-10 px-4 py-2 rounded-xl text-xs md:text-sm"
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:r3i:"
                              data-state="closed"
                            >
                              Delete Account
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6 md:mt-8 text-center text-xs md:text-sm text-muted-foreground">
              <a
                className="hover:underline mr-4"
                target="_blank"
                rel="noopener noreferrer"
                href="/terms-of-service"
              >
                Terms of Service
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
