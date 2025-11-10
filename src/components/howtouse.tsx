"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HowtoUse({ isOpen, onClose }: ProfileModalProps) {
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
          <h3 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
            How to get application Password
          </h3>
        </div>

        {/* Nội dung */}
        <div className="max-w mx-auto p-4">
          <ol className="list-decimal list-inside space-y-2 ">
            <li>Step 1: Log in to your website admin panel.</li>
            <li>Step 2: Go to Profile → Application Passwords.</li>
            <li>
              Step 3: Enter your username and click "Add Application Password".
            </li>
            <li>
              Step 4: Save the generated password and return to this platform to
              enter it.
            </li>
          </ol>

          <div className="mt-6">
            <img
              src="/images/apppassword.jpg"
              alt="Application password setup"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
