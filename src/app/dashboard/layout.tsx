"use client";
import SideBar from "@/src/components/sidebar";
import { PostsProvider } from "@/src/contexts/postscontext";
import { SocialAccountProvider } from "@/src/contexts/socialaccountcontext";
import Link from "next/link";
import { useState } from "react";

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
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <PostsProvider>
      <SocialAccountProvider>
        <div className="flex min-h-screen flex-col">
          <div className="dashboard-layout bg-[#F3F4EF]">
            <div className="fixed inset-0 flex flex-col">
              <div className="flex flex-1 overflow-hidden bg-[#F3F4EF] md:p-4 pt-0">
                <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#F3F4EF]/90 backdrop-blur-sm border-b border-gray-200/50">
                  <div className="flex items-center justify-between p-3">
                    <Link className="flex items-center" href="/dashboard">
                      {/* <img
                      alt="AutoWordpress"
                      fetchPriority="high"
                      width="120"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="/landing/images/socialrails-logo-4.svg"
                      style={convertStyleStringToObject("color: transparent;")}
                    /> */}
                      <b>AutoWordpress</b>
                    </Link>
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full w-9 h-9"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r0:"
                      data-state="closed"
                      onClick={() => setIsOpenSidebar(true)}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <SideBar
                  isOpen={isOpenSidebar}
                  onClose={() => setIsOpenSidebar(false)}
                />
                {children}
              </div>
            </div>
          </div>
          <div
            role="region"
            aria-label="Notifications (F8)"
            style={convertStyleStringToObject("pointer-events:none")}
          >
            <ol className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"></ol>
          </div>
        </div>
      </SocialAccountProvider>
    </PostsProvider>
  );
}
