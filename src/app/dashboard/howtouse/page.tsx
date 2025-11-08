"use client";
import React, { useEffect } from "react";

export default function HowtoUse() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get("access_token");
      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, []);

  return (
    <main className="flex-1 overflow-auto rounded-[10px] bg-[#F3F4EF] md:pr-1 pt-14 md:pt-0 w-full">
      <section className="bg-[#f9fafb] py-16 px-6 font-sans bg-[#f8faf6] py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-10">
            🧭 How to Use <span className="text-[#0b76ef]">AutoWordPress</span>
          </h2>

          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/images/login-google.jpg"
                alt="Login with Google"
                className="w-full md:w-1/3 rounded-xl shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">
                  Step 1: Login with Google
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Start by signing in using your Google account. This allows
                  AutoWordPress to create a secure workspace for your sites.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              <img
                src="/images/sidebar-settings.jpg"
                alt="Open Settings"
                className="w-full md:w-1/3 rounded-xl shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">
                  Step 2: Open Settings
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  On the sidebar, click on <strong>Settings</strong> to manage
                  your WordPress connection.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/images/connect-website.jpg"
                alt="Connect with website"
                className="w-full md:w-1/3 rounded-xl shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">
                  Step 3: Connect Your Website
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Click <strong>Connect with Website</strong>, then enter:
                </p>
                <ul className="list-disc pl-6 text-gray-600 leading-relaxed">
                  <li>📝 Site name (for your reference)</li>
                  <li>👤 WordPress username</li>
                  <li>
                    🔑 Application password (from WordPress user settings)
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              <img
                src="/images/connect-website.jpg"
                alt="Get token step"
                className="w-full md:w-1/3 rounded-xl shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">
                  Step 4: Click “Get Token”
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Click <strong>Get Token</strong> to securely connect
                  AutoWordPress with your site. Once done, you’ll see a success
                  message.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/images/dashboard-create.jpg"
                alt="Dashboard create post"
                className="w-full md:w-1/3 rounded-xl shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">
                  Step 5: Return to Dashboard & Create Posts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Go back to your dashboard. Now you can create new posts,
                  generate AI content, and upload directly to your WordPress
                  site.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              <img
                src="/images/dashboard-create.jpg"
                alt="Schedule post"
                className="w-full md:w-1/3 rounded-xl shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">
                  Step 6: Schedule or Publish Automatically
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose whether to publish instantly or schedule posts for
                  later. AutoWordPress handles the timing — your website runs on
                  autopilot 24/7 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="autowordpress" className="font-sans bg-[#f8faf6] py-10 px-4">
        <div className=" mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-3">
              AutoWordPress — Let your site write & post itself
            </h1>

            <p className="text-[#334155] leading-relaxed mb-5">
              Before, I had to sit and write every post and schedule them
              manually for my WordPress sites. It took hours each day, and I
              still felt like I couldnt keep up.
            </p>

            <p className="text-[#334155] leading-relaxed mb-5">
              So I coded a homemade tool — <strong>AutoWordPress</strong> — that
              automatically generates content with AI and schedules posts. Now
              the system runs smoothly: posts go up regularly, SEO stays steady,
              and traffic grows naturally. I only need to do a weekly check; the
              rest is handled by the machine.
            </p>

            <p className="text-[#0f172a] font-semibold leading-snug mb-6">
              It feels amazing to have my site running 24/7, producing content
              continuously without me typing a single word.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#try"
                className="inline-block bg-[#0b76ef] text-white font-semibold py-3 px-5 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Try AutoWordPress
              </a>
            </div>
          </div>

          <div className="bg-[#f1f5f9] border-t border-[#eef2f7] py-4 px-8">
            <ul className="list-disc pl-5 text-[#334155] leading-relaxed">
              <li>✅ AI-generated articles (editable)</li>
              <li>✅ Scheduled publishing to WordPress via REST API</li>
              <li>✅ Basic SEO-friendly templates</li>
              <li>✅ Weekly overview & analytics</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
