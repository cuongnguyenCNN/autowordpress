export default function ContentStudio() {
  return (
    <main className="flex-1 overflow-y-auto overflow-x-visible bg-base-150">
      <div className="p-6">
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Open sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-lg bg-base-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Content Studio</h2>
            </div>
            <div className="mb-8">
              <div className="card bg-primary/10 border border-primary shadow-lg hover:shadow-xl transition-all">
                <div className="card-body p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="badge badge-primary">NEW</div>
                    <div className="badge badge-ghost">AI-Powered</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="w-6 h-6 text-primary"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          ></path>
                        </svg>
                        AI UGC Video Creator
                      </h3>
                      <p className="text-base-content/80">
                        Create authentic UGC-style videos in seconds using our
                        AI-powered templates. Perfect for product demos,
                        testimonials, and viral marketing content.
                      </p>
                      <div className="flex items-center gap-4 text-sm mt-2">
                        <span className="flex items-center gap-1 text-primary">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="w-4 h-4"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                            ></path>
                          </svg>
                          SUPER HOT
                        </span>
                        <span className="flex items-center gap-1">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="w-4 h-4"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            ></path>
                          </svg>
                          Infinite views
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button className="btn btn-primary btn-lg">
                        Try AI UGC Creator
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="w-5 h-5"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card bg-base-100 hover:bg-base-200 transition-all duration-200">
                <div className="card bg-base-150 transition-colors p-6 relative text-left flex flex-col h-full">
                  <div className="absolute top-3 right-3">
                    <div className="bg-accent rounded-lg p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="w-8 h-8 mb-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                      <h3 className="font-bold text-lg mb-2">2x2 Grid Video</h3>
                      <div className="flex items-left gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <p
                            className="text-sm text-left tooltip tooltip-down"
                            data-tip="This template has been used to drive over 50,000 downloads for 100% free to my app (founder of post bridge)"
                          >
                            Create viral videos with this 4 image grid format
                            (tested &amp; proven to 🎸)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-primary">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="w-4 h-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                          ></path>
                        </svg>
                        Trending
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="w-4 h-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                        20M+ views
                      </span>
                    </div>
                  </div>
                  <div className="w-full text-left mt-4 pt-4 flex items-center justify-between">
                    <button className="btn btn-primary btn-sm">
                      Upgrade to Use
                    </button>
                    <div className="tooltip" data-tip="Preview output">
                      <button className="btn btn-circle btn-sm">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="w-4 h-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 hover:bg-base-200 transition-all duration-200">
                <div className="card bg-base-150 transition-colors p-6 relative text-left flex flex-col h-full">
                  <div className="absolute top-3 right-3">
                    <div className="bg-accent rounded-lg p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="w-8 h-8 mb-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <h3 className="font-bold text-lg mb-2">
                        Single Fade-in Video
                      </h3>
                      <div className="flex items-left gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <p
                            className="text-sm text-left tooltip tooltip-down"
                            data-tip="This template has been used to drive over 50,000 downloads for 100% free to my app (founder of post bridge)"
                          >
                            Simple format with billions of views - use your
                            imagination to make a viral banger (we will do the
                            editing)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-primary">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="w-4 h-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                          ></path>
                        </svg>
                        Trending
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="w-4 h-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                        500M+ views
                      </span>
                    </div>
                  </div>
                  <div className="w-full text-left mt-4 pt-4 flex items-center justify-between">
                    <button className="btn btn-primary btn-sm">
                      Upgrade to Use
                    </button>
                    <div className="tooltip" data-tip="Preview output">
                      <button className="btn btn-circle btn-sm">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="w-4 h-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 hover:bg-base-200 transition-all duration-200">
                <div className="card bg-base-150 transition-colors p-6 relative text-left flex flex-col h-full">
                  <div className="absolute top-3 right-3">
                    <div className="bg-accent rounded-lg p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="w-8 h-8 mb-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        ></path>
                      </svg>
                      <h3 className="font-bold text-lg mb-2">AI UGC Creator</h3>
                      <div className="flex items-left gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <p
                            className="text-sm text-left tooltip tooltip-down"
                            data-tip="This template has been used to drive over 50,000 downloads for 100% free to my app (founder of post bridge)"
                          >
                            Create authentic UGC-style videos in seconds using
                            our AI-powered templates. Perfect for product demos,
                            testimonials, and viral marketing content.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-primary">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="w-4 h-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                          ></path>
                        </svg>
                        Trending
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="w-4 h-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                        1B+ views
                      </span>
                    </div>
                  </div>
                  <div className="w-full text-left mt-4 pt-4 flex items-center justify-between">
                    <button className="btn btn-primary btn-sm">
                      Upgrade to Use
                    </button>
                    <div className="tooltip" data-tip="Preview output">
                      <button className="btn btn-circle btn-sm">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="w-4 h-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <dialog className="modal ">
              <div className="modal-box max-w-xl relative">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Generating Video</h3>
                  <div className="w-full bg-base-200 rounded-full h-4">
                    <div className="bg-primary h-4 rounded-full transition-all duration-300"></div>
                  </div>
                  <p className="text-sm text-base-content/70"></p>
                </div>
              </div>
            </dialog>
            <dialog className="modal ">
              <div className="modal-box max-w-5xl relative">
                <button className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </button>
                <h3 className="font-bold text-xl mb-6 pr-8">
                  Viral Grid Examples
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
                <div className="mt-6 space-y-4">
                  <div className="alert alert-info text-sm">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="w-4 h-4"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                    </svg>
                    <span>
                      These posts were created using the exact same template
                      youre about to use!
                    </span>
                  </div>
                  <div className="modal-action">
                    <button className="btn btn-primary">
                      Got it, lets create!
                    </button>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div className="h-24"></div>
    </main>
  );
}
