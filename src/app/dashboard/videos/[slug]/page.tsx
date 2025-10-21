"use client";

import Link from "next/link";

// {
//     params,
//   }: {
//     params: Promise<{ slug: string }>;
//   }
export default async function Page() {
  //   const { slug } = await params;

  return (
    <main className="flex-1 overflow-auto rounded-[10px] bg-[#F3F4EF] md:pr-1 pt-14 md:pt-0 w-full">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">🎥</span>
                <span>Your Videos</span>
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-sm sm:text-base text-gray-600">
                  Manage all your videos
                </p>
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
                  className="lucide lucide-info h-4 w-4 text-gray-400 cursor-help"
                  data-state="closed"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Link className="w-full md:w-auto" href="/dashboard/videos">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 h-10 w-full md:w-auto rounded-xl border-gray-100 hover:bg-white/100 border bg-white text-gray-900 shadow-sm px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none active:border-gray-100 select-none ring-0 outline-none focus-visible:outline-none focus-visible:ring-offset-0">
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
                    className="lucide lucide-plus-circle h-4 w-4 mr-2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                  New Video
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-3xl">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
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
                className="lucide lucide-refresh-cw w-8 h-8 text-gray-400"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M8 16H3v5"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              No videos found
            </h3>
            <p className="text-gray-500 mb-6 text-center max-w-md">
              You haven&apos;t created any videos yet. Create your first video
              to get started.
            </p>
            <Link href="/dashboard/videos">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 h-10 rounded-xl border-gray-100 hover:bg-white/100 border bg-white text-gray-900 shadow-sm px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-0 active:outline-none active:border-gray-100 select-none ring-0 outline-none focus-visible:outline-none focus-visible:ring-offset-0">
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
                  className="lucide lucide-plus-circle mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12h8"></path>
                  <path d="M12 8v8"></path>
                </svg>
                Create Your First Video
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
