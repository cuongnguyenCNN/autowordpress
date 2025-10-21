"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}
interface Pricing {
  starter: number;
  professional: number;
  business: number;
  starterLink: string;
  professionalLink: string;
  businessLink: string;
}

const monthlyPricing: Pricing = {
  starter: 9,
  professional: 29,
  business: 95,
  starterLink:
    "https://noteflowai.lemonsqueezy.com/buy/2638a9a3-3060-420c-b018-e58a5cac741c",
  professionalLink:
    "https://noteflowai.lemonsqueezy.com/buy/ff534af8-6a14-4971-bc52-cabbd70c08c7",
  businessLink:
    "https://noteflowai.lemonsqueezy.com/buy/9b7aa6a8-7d35-460d-92e0-1e65f2b8ce78",
};

const yearlyPricing: Pricing = {
  starter: 7,
  professional: 24,
  business: 91,
  starterLink:
    "https://noteflowai.lemonsqueezy.com/buy/933a8e53-84af-485c-be18-d1345be30996",
  professionalLink:
    "https://noteflowai.lemonsqueezy.com/buy/6b85d3a3-0254-4741-a930-cdf04242f9fb",
  businessLink:
    "https://noteflowai.lemonsqueezy.com/buy/1eb39774-d246-41d2-b403-9539cb359110",
};
export default function PricingModal({ isOpen, onClose }: ProfileModalProps) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const price = billing === "monthly" ? monthlyPricing : yearlyPricing;
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        role="dialog"
        aria-modal="true"
        className="bg-white dark:bg-background rounded-xl w-[95%] max-w-4xl mx-auto p-4 md:p-6 relative shadow-lg overflow-y-auto max-h-[90vh] border bg-card text-card-foreground"
      >
        {/* Nút Đóng */}
        <button
          onClick={onClose}
          type="button"
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition"
        >
          ✕<span className="sr-only">Close</span>
        </button>
        <div className="pb-12 text-center">
          <h2 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
            Plans match your needs
          </h2>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg text-gray-700 mb-4">
              Our pricing is simple, transparent and adapts to the size of your
              brand.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4 mb-2">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="ml-1 text-sm text-gray-600">
                  No credit card required to start
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="ml-1 text-sm text-gray-600">
                  Cancel anytime
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="ml-1 text-sm text-gray-600">
                  5-minute setup
                </span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Nội dung */}
        <div className="flex flex-col md:flex-row gap-6">
          <div>
            <div className="m-auto mb-16 flex max-w-xs justify-center">
              <div className="relative mx-6 flex w-full rounded-lg bg-gray-200 p-1">
                <span
                  className="pointer-events-none absolute inset-0 m-1"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 w-1/2 transform rounded bg-white shadow transition ${
                      billing === "monthly" ? "translate-x-full" : ""
                    }`}
                  ></span>
                </span>
                <button
                  onClick={() => setBilling("yearly")}
                  className="relative flex-1 p-1 text-sm font-medium transition text-gray-900"
                  aria-pressed="false"
                >
                  Bill Yearly
                  <span className="text-emerald-500"> -20%</span>
                </button>
                <button
                  onClick={() => setBilling("monthly")}
                  className="relative flex-1 p-1 text-sm font-medium transition "
                  aria-pressed="false"
                >
                  Bill Monthly
                </button>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-2 xl:gap-4">
              <div className="relative flex h-full flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="mb-4">
                  <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4">
                    Starter
                  </div>
                  <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                    <span className="text-2xl font-bold">$</span>
                    <span className="text-4xl font-bold tabular-nums">
                      {price.starter}
                    </span>
                    <span className="pl-1 text-sm text-gray-500">/month</span>
                  </div>
                  <div className="grow text-sm text-gray-700">
                    Perfect for individuals and solopreneurs.
                  </div>
                </div>
                <ul className="grow space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>Unlimited Posts</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>20 Videos / Month</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>5 Auto-Recurring Posts</span>
                  </li>
                  {/* <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>3 Workspaces</span>
                  </li> */}
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>4 Social Media Platforms</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>Image, Video &amp; Carousel Posting</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>AI Assistant</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>AI Ideas (Limited)</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href={price.starterLink}
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 w-full rounded-xl bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"
                    aria-disabled="false"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="relative flex h-full flex-col rounded-2xl bg-gradient-to-tr from-gray-900 to-gray-700 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
                <div className="mb-4">
                  <div className="mb-1 font-medium text-gray-200 underline decoration-gray-600 underline-offset-4">
                    Professional
                  </div>
                  <div className="mb-4 flex items-baseline border-b border-dashed border-gray-600 pb-4">
                    <div className="absolute -top-3 right-4 rotate-3">
                      <span className="inline-flex text-white items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                        MOST POPULAR
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-200">$</span>
                    <span className="text-4xl font-bold tabular-nums text-gray-200">
                      {price.professional}
                    </span>
                    <span className="pl-1 text-sm text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    For professionals and growing teams.
                  </div>
                </div>
                <ul className="grow space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>Unlimited Posts</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>50 Videos / Month</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>50 Auto-Recurring Posts</span>
                  </li>
                  {/* <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>10 Workspaces</span>
                  </li> */}
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>4 Social Media Platforms</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>Image, Video &amp; Carousel Posting</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>AI Assistant</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>AI Ideas (Unlimited)</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href={price.professionalLink}
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 w-full rounded-xl bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"
                    aria-disabled="false"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              {/* <div className="relative flex h-full flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="mb-4">
                  <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4">
                    Business
                  </div>
                  <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                    <span className="text-2xl font-bold">$</span>
                    <span className="text-4xl font-bold tabular-nums">
                      {price.business}
                    </span>
                    <span className="pl-1 text-sm text-gray-500">/month</span>
                  </div>
                  <div className="grow text-sm text-gray-700">
                    For agencies and enterprises ready to scale.
                  </div>
                </div>
                <ul className="grow space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>Unlimited Posts</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>150 Videos / Month</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>Unlimited Auto-Recurring Posts</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>25 Workspaces</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>4 Social Media Platforms</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>Image, Video &amp; Carousel Posting</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>AI Assistant</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                    </svg>
                    <span>AI Ideas (Unlimited)</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href={price.businessLink}
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 w-full rounded-xl bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"
                    aria-disabled="false"
                  >
                    Get Started
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
