"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProfileModal from "./profilemodal";
import PricingModal from "./pricingModal";
import { useUser } from "../contexts/userscontext";
import { motion, AnimatePresence } from "framer-motion";

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
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function SideBar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const [openPricingModal, setOpenPricingModal] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { user } = useUser();
  const percentage = Math.min(
    ((user?.post_used ?? 0) / (user?.post_limit ?? 1)) * 100,
    100
  );
  const handleClick = (path: string) => {
    if (window.location.pathname !== path) {
      router.push(path);
    }
  };
  return (
    <>
      <div className="hidden md:block mr-6 flex-shrink-0 flex flex-col">
        <div className="h-full m-1 overflow-hidden">
          <aside className="w-56 p-1.5 max-h-[600px]:p-1 sm:p-4 md:p-6 hidden md:block h-full relative">
            <div className="flex flex-col h-full overflow-y-auto">
              <div className="flex-shrink-0 mb-1 max-h-[600px]:mb-0.5 sm:mb-4 md:mb-6 hidden lg:block">
                <Link href="/dashboard">
                  {/* <img
                  alt="LinkPost"
                  fetchPriority="high"
                  width="130"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  className="scale-65 max-h-[600px]:scale-50 sm:scale-75 md:scale-85 lg:scale-90 xl:scale-100 max-h-[16px] sm:max-h-[24px] md:max-h-[32px] max-h-[600px]:max-h-[14px]"
                  src="/landing/images/socialrails-logo-4.svg"
                  style={convertStyleStringToObject("color: transparent;")}
                /> */}
                  <b>LinkPost</b>
                </Link>
              </div>
              <div className="flex-shrink-0 mb-1.5 max-h-[600px]:mb-1 sm:mb-3 xl:mb-4">
                <button
                  disabled={(user?.post_used ?? 0) >= (user?.post_limit ?? 0)}
                  onClick={() => setOpenModalCreate(true)}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 px-4 w-full justify-center bg-gradient-to-r from-[#B8D8FF] to-[#85ACFF] hover:opacity-80 rounded-xl max-h-[600px]:rounded text-white hover:text-white text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
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
                    className="lucide lucide-plus mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  New Post
                </button>
              </div>
              <ProfileModal
                isOpen={openModalCreate}
                onClose={() => setOpenModalCreate(false)}
                content=""
              />
              <nav className="space-y-0.5 max-h-[600px]:space-y-[0.125rem] sm:space-y-1 xl:space-y-1.5">
                <button
                  onClick={() => handleClick("/dashboard")}
                  className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5 bg-[#EEEFE8] text-gray-900 font-medium"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"></path>
                  </svg>
                  Dashboard
                </button>
                <button
                  onClick={() => handleClick("/dashboard/scheduled")}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                  </svg>
                  Scheduled
                </button>
                <button
                  onClick={() => handleClick("/dashboard/analytics")}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                  </svg>
                  Analytics
                </button>
                <button
                  onClick={() => handleClick("/dashboard/ideas")}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
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
                    className="lucide lucide-lightbulb mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                  Ideas
                </button>
                <div className="mt-2 max-h-[600px]:mt-1 sm:mt-4 xl:mt-6 pt-2 max-h-[600px]:pt-1 sm:pt-4 xl:pt-6 pb-1 max-h-[600px]:pb-0.5 text-[9px] max-h-[600px]:text-[7px] sm:text-[10px] xl:text-xs text-gray-600 px-1 max-h-[600px]:px-0.5">
                  Videos
                </div>
                <button
                  onClick={() => handleClick("/dashboard/videos")}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path>
                  </svg>
                  Create
                </button>
                <button
                  onClick={() => handleClick("/dashboard/videos/lists")}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
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
                    className="lucide lucide-video mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                  >
                    <path d="m22 8-6 4 6 4V8Z"></path>
                    <rect
                      width="14"
                      height="12"
                      x="2"
                      y="6"
                      rx="2"
                      ry="2"
                    ></rect>
                  </svg>
                  Videos
                </button>
              </nav>
              <div className="mt-auto pt-2 max-h-[600px]:pt-1 sm:pt-3 xl:pt-4 space-y-0.5 max-h-[600px]:space-y-[0.125rem] sm:space-y-1 xl:space-y-1.5">
                <div className="p-3 bg-blue-50 shadow-sm rounded-2xl">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-blue-700 font-medium ">
                      <span>Free Posts</span>
                      <span>
                        {user?.post_used}/{user?.post_limit}
                      </span>
                    </div>{" "}
                    <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-500 h-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p
                      onClick={() => setOpenPricingModal(true)}
                      className="text-xs text-blue-600 mt-1 cursor-pointer"
                    >
                      Upgrade
                    </p>
                  </div>
                </div>
                <PricingModal
                  isOpen={openPricingModal}
                  onClose={() => setOpenPricingModal(false)}
                ></PricingModal>
                <Link
                  href="https://t.me/cuongnguyencnn1"
                  target="_blank"
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
                  data-feedback-fish="true"
                  data-feedback-fish-userid="cuongnguyen71195@gmail.com"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                  >
                    <path
                      d="M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Support
                </Link>
                <button
                  onClick={() => handleClick("/dashboard/settings")}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
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
                    className="lucide lucide-settings mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  Settings
                </button>
                <div className="mt-1 max-h-[600px]:mt-0.5 sm:mt-2">
                  <button
                    className="inline-flex items-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 w-full rounded-xl justify-start border-none bg-[#EEEFE8] hover:bg-[#EEEFE8] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    type="button"
                    id="radix-:rc:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-2 truncate">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="h-5 w-5 text-muted-foreground"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z"></path>
                        </svg>
                        <div className="flex flex-col">
                          <span className="font-medium">Ok</span>
                        </div>
                      </div>
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
                        className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </aside>
          {/* Sidebar dạng trượt cho mobile */}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="md:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="mb-4 text-right w-full text-gray-500 hover:text-black"
              onClick={onClose}
            >
              ✕ Close
            </button>

            <div className="flex flex-col h-full overflow-y-auto">
              <div className="flex-shrink-0 mb-1 max-h-[600px]:mb-0.5 sm:mb-4 md:mb-6 hidden lg:block">
                <Link href="/dashboard">
                  {/* <img
                  alt="LinkPost"
                  fetchPriority="high"
                  width="130"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  className="scale-65 max-h-[600px]:scale-50 sm:scale-75 md:scale-85 lg:scale-90 xl:scale-100 max-h-[16px] sm:max-h-[24px] md:max-h-[32px] max-h-[600px]:max-h-[14px]"
                  src="/landing/images/socialrails-logo-4.svg"
                  style={convertStyleStringToObject("color: transparent;")}
                /> */}
                  <b>LinkPost</b>
                </Link>
              </div>
              <div className="flex-shrink-0 mb-1.5 max-h-[600px]:mb-1 sm:mb-3 xl:mb-4">
                <button
                  disabled={(user?.post_used ?? 0) >= (user?.post_limit ?? 0)}
                  onClick={() => setOpenModalCreate(true)}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-accent h-10 px-4 w-full justify-center  hover:opacity-80 rounded-xl max-h-[600px]:rounded text-white hover:text-white text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
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
                    className="lucide lucide-plus mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  New Post
                </button>
              </div>
              <ProfileModal
                isOpen={openModalCreate}
                onClose={() => setOpenModalCreate(false)}
                content=""
              />
              <nav className="space-y-0.5 max-h-[600px]:space-y-[0.125rem] sm:space-y-1 xl:space-y-1.5">
                <button
                  onClick={() => handleClick("/dashboard")}
                  className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5 bg-[#EEEFE8] text-gray-900 font-medium"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"></path>
                  </svg>
                  Dashboard faag
                </button>
                <button
                  onClick={() => handleClick("/dashboard/scheduled")}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                  </svg>
                  Scheduled
                </button>
                <button
                  onClick={() => handleClick("/dashboard/ideas")}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
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
                    className="lucide lucide-lightbulb mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                  Ideas
                </button>
                <div className="mt-2 max-h-[600px]:mt-1 sm:mt-4 xl:mt-6 pt-2 max-h-[600px]:pt-1 sm:pt-4 xl:pt-6 pb-1 max-h-[600px]:pb-0.5 text-[9px] max-h-[600px]:text-[7px] sm:text-[10px] xl:text-xs text-gray-600 px-1 max-h-[600px]:px-0.5">
                  Videos
                </div>
                <button
                  onClick={() => handleClick("/dashboard/videos")}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path>
                  </svg>
                  Create
                </button>
                <button
                  onClick={() => handleClick("/dashboard/videos/lists")}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
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
                    className="lucide lucide-video mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                  >
                    <path d="m22 8-6 4 6 4V8Z"></path>
                    <rect
                      width="14"
                      height="12"
                      x="2"
                      y="6"
                      rx="2"
                      ry="2"
                    ></rect>
                  </svg>
                  Videos
                </button>
              </nav>
              <div className="mt-auto pt-2 max-h-[600px]:pt-1 sm:pt-3 xl:pt-4 space-y-0.5 max-h-[600px]:space-y-[0.125rem] sm:space-y-1 xl:space-y-1.5">
                <div className="p-3 bg-blue-50 shadow-sm rounded-2xl">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-blue-700 font-medium ">
                      <span>Free Posts</span>
                      <span>
                        {user?.post_used}/{user?.post_limit}
                      </span>
                    </div>
                    <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-500 h-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div
                      aria-valuemax={100}
                      aria-valuemin={0}
                      role="progressbar"
                      data-state="indeterminate"
                      data-max="100"
                      className="relative w-full overflow-hidden rounded-full h-1.5 bg-blue-200"
                    >
                      <div
                        data-state="indeterminate"
                        data-max="100"
                        className="h-full w-full flex-1 bg-primary transition-all"
                        style={convertStyleStringToObject(
                          "transform: translateX(0%);"
                        )}
                      ></div>
                    </div>
                    <p
                      onClick={() => setOpenPricingModal(true)}
                      className="text-xs text-blue-600 mt-1 cursor-pointer"
                    >
                      Upgrade Now
                    </p>
                  </div>
                </div>
                <PricingModal
                  isOpen={openPricingModal}
                  onClose={() => setOpenPricingModal(false)}
                ></PricingModal>
                <button
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
                  data-feedback-fish="true"
                  data-feedback-fish-userid="cuongnguyen71195@gmail.com"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                  >
                    <path
                      d="M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Support
                </button>
                <button
                  onClick={() => handleClick("/dashboard/settings")}
                  className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full rounded-xl max-h-[600px]:rounded justify-start text-gray-600 hover:text-gray-900 hover:bg-[#EEEFE8] text-[10px] max-h-[600px]:text-[8px] sm:text-[11px] md:text-[12px] xl:text-sm py-0.5 max-h-[600px]:py-px sm:py-1 xl:py-1.5"
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
                    className="lucide lucide-settings mr-1 max-h-[600px]:mr-0.5 sm:mr-1.5 h-2 w-2 max-h-[600px]:h-1.5 max-h-[600px]:w-1.5 sm:h-2.5 sm:w-2.5 xl:h-3 xl:w-3"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  Settings
                </button>
                <div className="mt-1 max-h-[600px]:mt-0.5 sm:mt-2">
                  <button
                    className="inline-flex items-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 w-full rounded-xl justify-start border-none bg-[#EEEFE8] hover:bg-[#EEEFE8] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    type="button"
                    id="radix-:rc:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-2 truncate">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="h-5 w-5 text-muted-foreground"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z"></path>
                        </svg>
                        <div className="flex flex-col">
                          <span className="font-medium">Ok</span>
                        </div>
                      </div>
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
                        className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
