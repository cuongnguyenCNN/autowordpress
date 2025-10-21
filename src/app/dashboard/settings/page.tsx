//import Link from "next/link";
"use client";
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
  const connectTwitter = () => {
    window.location.href = `/api/oauth/twitter?user_id=${user?.id}`;
  };
  const connectLinkedIn = () => {
    window.location.href = `/api/oauth/linkedin?user_id=${user?.id}`;
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
