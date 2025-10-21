//import Link from "next/link";
"use client";
import Header from "@/src/components/header";
import { useUser } from "@/src/contexts/userscontext";
import { supabase } from "@/src/lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function SignIn() {
  const { user, signInWithGoogle } = useUser();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Check your email for the magic link!");
    }
  };
  useEffect(() => {
    // localStorage.getItem(
    //     `sb-${process.env.NEXT_PUBLIC_SUPABASE_CLIENT_ID}-auth-token`;
    if (user) {
      router.push("/dashboard"); // nếu đã đăng nhập thì chuyển về trang chủ
    }
  }, [user]);
  return (
    <div className="flex min-h-screen flex-col">
      <section
        className="relative overflow-x-clip w-full"
        style={convertStyleStringToObject("max-width: 100vw;")}
      >
        <Header></Header>
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
          aria-hidden="true"
        >
          <img
            alt="Stripes"
            fetchPriority="high"
            width="768"
            height="428"
            decoding="async"
            data-nimg="1"
            className="max-w-none"
            src="/landing/images/stripes.svg"
            style={convertStyleStringToObject("color: transparent;")}
          />
        </div>
        <div
          className="pointer-events-none absolute -top-32 left-1/2 ml-[580px] -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-50 blur-[160px] will-change-[filter]"></div>
        </div>
        <div
          className="pointer-events-none absolute left-1/2 top-[420px] ml-[380px] -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px] will-change-[filter]"></div>
        </div>
        <div
          className="pointer-events-none absolute left-1/2 top-[640px] -ml-[300px] -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px] will-change-[filter]"></div>
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-center min-h-[calc(100vh+30px)] overflow-x-clip">
          <div className="m-1 bg-[#ffffff] text-card-foreground w-full max-w-md p-8 space-y-8 rounded-3xl shadow-lg border-2 border-opacity-30">
            <h2 className="text-3xl mt-2 font-bold text-center">
              Login / Sign Up
            </h2>
            <form className="space-y-5" onSubmit={handleLogin}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex w-full bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:border-[#9C9C9C] focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 opacity-80 h-12 px-4 rounded-xl border-2 border-black/[0.1]"
                placeholder="Your email"
                type="email"
              />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full rounded-xl bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                type="submit"
              >
                Send magic link
              </button>
            </form>{" "}
            {message && (
              <p className="mt-4 text-center text-sm text-red-600">{message}</p>
            )}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-opacity-30"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#F7F8F9] px-2 opacity-65 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <button
              onClick={signInWithGoogle}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-background hover:text-accent-foreground px-4 py-2 w-full h-12 rounded-xl hover:bg-gray-50 transition-colors duration-200 border-2 border-black/[0.1] shadow-sm"
              style={{ color: "red" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 488 512"
                className="mr-2 h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Google
            </button>
            <div className="text-center text-sm text-muted-foreground">
              <Link
                className="hover:underline opacity-65"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>{" "}
              •{" "}
              <Link
                className="hover:underline opacity-65"
                href="/terms-of-service"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div
        role="region"
        aria-label="Notifications (F8)"
        style={convertStyleStringToObject("pointer-events:none")}
      >
        <ol className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"></ol>
      </div>
    </div>
  );
}
