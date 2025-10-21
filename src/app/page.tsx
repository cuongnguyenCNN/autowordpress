"use client";
import Link from "next/link";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import FAQ from "../components/faq";
// import PricingModal from "../components/pricingModal";
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
export default function Home() {
  // const [openPricingModal, setOpenPricingModal] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <Header></Header>
      <main
        className="flex-1 overflow-x-clip w-full"
        style={convertStyleStringToObject("max-width: 100vw;")}
      >
        <div className="relative z-10">
          <section
            className="relative z-10 overflow-x-clip w-full"
            style={convertStyleStringToObject("max-width: 100vw;")}
          >
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
            <div className="mx-auto max-w-6xl px-4 sm:px-6 overflow-x-clip">
              <div className="pb-12 pt-32 md:pb-20 md:pt-40">
                <div className="pb-12 text-center md:pb-16">
                  <h1
                    className="mb-6 border-y text-5xl font-extrabold leading-tighter tracking-tighter [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <span
                      style={convertStyleStringToObject(
                        "color: rgb(39, 39, 39);"
                      )}
                    >
                      Grow Website Without{" "}
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
                      <br />
                      Posting Every Day
                    </span>
                  </h1>
                  <div className="mx-auto max-w-3xl">
                    <p
                      className="mb-4 text-md text-gray-700 md:text-lg lg:text-xl aos-init aos-animate"
                      data-aos="zoom-y-out"
                      data-aos-delay="300"
                    >
                      Use AutoWordpress to grow website without spending hours
                      on it.
                    </p>
                    <div
                      className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 aos-init aos-animate"
                      data-aos="zoom-y-out"
                      data-aos-delay="350"
                    >
                      <img
                        alt="Twitter/X Logo"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 hover:opacity-100 transition-opacity"
                        src="/landing/images/Twitter-Logo-2.png"
                        style={convertStyleStringToObject(
                          "color: transparent;"
                        )}
                      />
                      <img
                        alt="LinkedIn Logo"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 hover:opacity-100 transition-opacity"
                        src="/landing/images/LinkedInLogo.svg"
                        style={convertStyleStringToObject(
                          "color: transparent;"
                        )}
                      />
                      <img
                        alt="Threads Logo"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 hover:opacity-100 transition-opacity"
                        src="/landing/images/Threads-Logo-2.png"
                        style={convertStyleStringToObject(
                          "color: transparent;"
                        )}
                      />
                      <img
                        alt="Bluesky Logo"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 hover:opacity-100 transition-opacity"
                        src="/landing/images/Bluesky-Logo-2.png"
                        style={convertStyleStringToObject(
                          "color: transparent;"
                        )}
                      />
                      <img
                        alt="Pinterest Logo"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 hover:opacity-100 transition-opacity"
                        src="/landing/images/pinterest-logo.png"
                        style={convertStyleStringToObject(
                          "color: transparent;"
                        )}
                      />
                      <img
                        alt="Instagram Logo"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 hover:opacity-100 transition-opacity"
                        src="/landing/images/Instagram-Logo.png"
                        style={convertStyleStringToObject(
                          "color: transparent;"
                        )}
                      />
                      <img
                        alt="Facebook Logo"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 hover:opacity-100 transition-opacity"
                        src="/landing/images/Facebook-Logo.png"
                        style={convertStyleStringToObject(
                          "color: transparent;"
                        )}
                      />
                      <img
                        alt="YouTube Logo"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 hover:opacity-100 transition-opacity"
                        src="/landing/images/YouTube-Logo-2.png"
                        style={convertStyleStringToObject(
                          "color: transparent;"
                        )}
                      />
                      <img
                        alt="TikTok Logo"
                        width="28"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 hover:opacity-100 transition-opacity"
                        src="/landing/images/tiktok-logo-2.png"
                        style={convertStyleStringToObject(
                          "color: transparent;"
                        )}
                      />
                    </div>
                    <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                      <div
                        className="relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center aos-init aos-animate"
                        data-aos="zoom-y-out"
                        data-aos-delay="450"
                      >
                        <Link
                          className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                          href="/signin"
                        >
                          <span className="relative inline-flex items-center">
                            Try It For Free{" "}
                            <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                              -&gt;
                            </span>
                          </span>
                        </Link>
                        <Link
                          className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                          href="/#social-connections"
                        >
                          How It Works
                        </Link>
                      </div>
                    </div>
                    <div
                      className="mt-6 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-3 sm:space-y-0 aos-init aos-animate"
                      data-aos="zoom-y-out"
                      data-aos-delay="600"
                      data-aos-duration="1000"
                    >
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
                          No credit card required
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
                    </div>
                    <div
                      className="flex items-center justify-center gap-4 mt-8 bg-white sm:bg-white/80 rounded-xl p-4 shadow-sm border border-gray-100 max-w-2xl mx-auto aos-init aos-animate"
                      data-aos="zoom-y-out"
                      data-aos-delay="500"
                    >
                      <div className="flex-shrink-0">
                        <img
                          alt="Tona"
                          width="48"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-full border-2 border-gray-100"
                          src="/landing/images/tona-review.png"
                          style={convertStyleStringToObject(
                            "color: transparent;"
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-sm italic mb-2">
                          &quot;If you value your time and want to upgrade your
                          content creation workflow, you absolutely need
                          AutoWordpress.&quot;
                        </p>
                        <div className="flex items-center gap-1 mb-2">
                          <svg
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">
                            Tona
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-500">
                            Founder, The Sidepreneur
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-gray-400">
                        <svg
                          className="w-8 h-8 opacity-20"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-12 md:mt-16 max-w-6xl aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="relative mx-auto transition-transform duration-500">
                      {/* <img
                        alt="AutoWordpress Calendar Preview"
                        fetchPriority="high"
                        width="1915"
                        height="902"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-2xl shadow-xl w-full"
                        src="/landing/images/calendar-view-socialrails4.png"
                        style={convertStyleStringToObject(
                          "color: transparent;"
                        )}
                      /> */}
                      <img
                        alt="AutoWordpress Calendar Preview"
                        fetchPriority="high"
                        width="1915"
                        height="902"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-2xl shadow-xl w-full"
                        src="/landing/videos/calendar-new-2.gif"
                        style={convertStyleStringToObject(
                          "color: transparent;"
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="relative" id="social-connections">
            <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6">
              <div className="py-12 md:py-20">
                <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex md:flex-row md:items-center md:gap-16 lg:gap-24">
                  <div
                    className="order-last md:order-first md:w-5/12 lg:w-1/2 aos-init aos-animate"
                    data-aos="fade-left"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 pointer-events-none border border-gray-200 dark:border-gray-800 rounded-2xl"></div>
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 opacity-50 rounded-2xl"></div>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          alt="Social Connections Demo"
                          width="640"
                          height="640"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-auto"
                          src="/landing/videos/social-connections-5.gif"
                          style={convertStyleStringToObject(
                            "color: transparent;"
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="order-first md:order-last md:w-7/12 lg:w-1/2 mb-8 md:mb-0 aos-init aos-animate"
                    data-aos="fade-right"
                  >
                    <div className="text-center md:text-left">
                      <h3 className="h3 text-3xl font-extrabold mb-4 text-[#272727]">
                        Post to 9 social platforms
                      </h3>
                      <p className="text-xl text-gray-600 mb-6">
                        Manage up to 25 workspaces, and post to 9 social
                        platforms from one place
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg
                            className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
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
                          <span className="text-[#272727] opacity-80">
                            Authorize once, post everywhere
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
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
                          <span className="text-[#272727] opacity-80">
                            17+ hours saved compared to manual posting
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
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
                          <span className="text-[#272727] opacity-80">
                            Secure OAuth connections for all platforms
                          </span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <Link
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          href="/signin"
                        >
                          Connect your accounts <span className="ml-2">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="relative">
            <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6">
              <div className="py-12 md:py-20">
                <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex md:flex-row md:items-center md:gap-16 lg:gap-24">
                  <div
                    className="md:w-7/12 lg:w-1/2 mb-12 md:mb-0 text-center md:text-left aos-init aos-animate"
                    data-aos="fade-right"
                  >
                    <div className="mb-8">
                      <h3 className="text-3xl font-extrabold mb-4 text-[#272727">
                        Overcome Creator&apos;s Block
                      </h3>
                      <p className="text-xl text-gray-600">
                        Get instant post ideas when you&apos;re stuck,
                        customized for your business type
                      </p>
                    </div>
                    <div className="space-y-4 flex flex-col items-center md:items-start">
                      <div className="flex items-start max-w-[280px] w-full">
                        <div className="flex-shrink-0 mt-1">
                          <svg
                            className="w-4 h-4 fill-current text-blue-500"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm3-7H9V5c0-.6-.4-1-1-1S7 4.4 7 5v2H5c-.6 0-1 .4-1 1s.4 1 1 1h2v2c0 .6.4 1 1 1s1-.4 1-1V9h2c.6 0 1-.4 1-1s-.4-1-1-1z"></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-lg font-bold mb-1 text-left text-[#272727]">
                            Save Ideas
                          </h4>
                          <p className="text-gray-600 text-left">
                            Save ideas for later.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start max-w-[280px] w-full">
                        <div className="flex-shrink-0 mt-1">
                          <svg
                            className="w-4 h-4 fill-current text-blue-500"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm3.7-8.5l-4.5 4.5-2.9-2.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.6 3.6c.2.2.4.3.7.3s.5-.1.7-.3l5.2-5.2c.4-.4.4-1 0-1.4s-1-.4-1.4 0z"></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-lg font-bold mb-1 text-left text-[#272727]">
                            Instant Post
                          </h4>
                          <p className="text-gray-600 text-left">
                            Make a post in seconds.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="md:w-5/12 lg:w-1/2 aos-init aos-animate"
                    data-aos="fade-left"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 pointer-events-none border border-gray-200 dark:border-gray-800 rounded-3xl"></div>
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 opacity-50 rounded-3xl"></div>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <div className="aspect-[1173/684] relative w-full">
                          <img
                            alt="Generate Idea Demo"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            src="/landing/videos/idea-generation-2.gif"
                            style={convertStyleStringToObject(
                              "position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative">
            <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6">
              <div className="py-12 md:py-20">
                <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex md:flex-row md:items-center md:gap-16 lg:gap-24">
                  <div
                    className="md:w-5/12 lg:w-1/2 order-2 md:order-1 aos-init aos-animate"
                    data-aos="fade-right"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 pointer-events-none border border-gray-200 dark:border-gray-800 rounded-3xl"></div>
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 opacity-50 rounded-3xl"></div>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <div className="aspect-[1539/906] relative w-full">
                          <img
                            alt="Content Calendar Demo"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            src="/landing/images/Capture.jpg"
                            style={convertStyleStringToObject(
                              "position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="md:w-7/12 lg:w-1/2 mb-12 md:mb-0 text-center md:text-left order-1 md:order-2 aos-init aos-animate"
                    data-aos="fade-left"
                  >
                    <div className="mb-8">
                      <h3 className="text-3xl font-extrabold mb-4 text-[#272727]">
                        Schedule Once, Relax All Week
                      </h3>
                      <p className="text-xl text-gray-600">
                        Set your entire week&apos;s content in one short
                        session, then get back to running your business
                      </p>
                    </div>
                    <div className="space-y-4 flex flex-col items-center md:items-start">
                      <div className="flex items-start max-w-[280px] w-full">
                        <div className="flex-shrink-0 mt-1">
                          <svg
                            className="w-4 h-4 fill-current text-blue-500"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm3-7H9V5c0-.6-.4-1-1-1S7 4.4 7 5v2H5c-.6 0-1 .4-1 1s.4 1 1 1h2v2c0 .6.4 1 1 1s1-.4 1-1V9h2c.6 0 1-.4 1-1s-.4-1-1-1z"></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-lg font-bold mb-1 text-left text-[#272727]">
                            Drag &amp; Drop Scheduling
                          </h4>
                          <p className="text-gray-600 text-left">
                            Reschedule posts with a simple drag and drop motion.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start max-w-[280px] w-full">
                        <div className="flex-shrink-0 mt-1">
                          <svg
                            className="w-4 h-4 fill-current text-blue-500"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm3.7-8.5l-4.5 4.5-2.9-2.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.6 3.6c.2.2.4.3.7.3s.5-.1.7-.3l5.2-5.2c.4-.4.4-1 0-1.4s-1-.4-1.4 0z"></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-lg font-bold mb-1 text-left text-[#272727]">
                            Visual Timeline
                          </h4>
                          <p className="text-gray-600 text-left">
                            See your entire content schedule at a glance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="relative" id="post-creation">
            <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6">
              <div className="py-12 md:py-20">
                <div className="flex flex-col items-center max-w-6xl mx-auto">
                  <div
                    className="text-center mb-12 aos-init aos-animate"
                    data-aos="fade-down"
                  >
                    <h3 className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#272727] font-extrabold tracking-tight">
                      Make a new post in seconds
                    </h3>
                    <p className="text-xl text-gray-600">
                      Use build-in AI tools to optimize your posts, and upload
                      media
                    </p>
                  </div>
                  <div
                    className="w-full aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <div className="relative">
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-full max-w-5xl mx-auto">
                          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-transparent">
                            <div
                              className="relative w-full"
                              style={convertStyleStringToObject(
                                "padding-bottom: 54.1667%;"
                              )}
                            >
                              <div className="absolute inset-0 bg-transparent">
                                <div
                                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 z-10 opacity-100"
                                  style={convertStyleStringToObject(
                                    "background-image: url(&quot;/landing/images/preview-make-a-new-post.webp&quot;);"
                                  )}
                                ></div>
                                <div className="absolute inset-0 bg-transparent">
                                  <div
                                    style={convertStyleStringToObject(
                                      "object-fit: cover; width: 100%; height: 100%; background-color: transparent; transform: scale(1.02);"
                                    )}
                                  >
                                    <video
                                      src="/landing/videos/making-a-post.mp4"
                                      preload="auto"
                                      crossOrigin={"anonymous"}
                                      webkit-
                                      x5-
                                      style={convertStyleStringToObject(
                                        "object-fit: cover; width: 100%; height: 100%; background-color: transparent; transform: scale(1.02);"
                                      )}
                                    ></video>
                                  </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-20 cursor-pointer">
                                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                                    <svg
                                      className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 translate-x-0.5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="relative py-16 sm:py-32 overflow-visible">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-10 relative">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#272727] font-extrabold tracking-tight">
                  Tools That Help You Stay on Track
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Automation &amp; scheduling tools to help save you hours every
                  week
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="relative bg-[#f9fafb] rounded-3xl shadow-lg border border-gray-100 p-8">
                  <div className="text-center mb-6">
                    <div
                      className="inline-flex p-3 bg-primary/10 rounded-2xl mb-4"
                      style={convertStyleStringToObject(
                        "background: rgb(243, 244, 239);"
                      )}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        className="h-8 w-8 text-primary"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"></path>
                        <path
                          fill-rule="evenodd"
                          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      Auto-Recurring Posts
                    </h3>
                    <p className="text-gray-600">
                      Automate with recurring posts
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        className="h-5 w-5 text-primary"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"></path>
                        <path
                          fill-rule="evenodd"
                          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                        ></path>
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          Weekly Post
                        </p>
                        <p className="text-xs text-gray-500">
                          Every Monday at 9 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-[#f9fafb] rounded-3xl shadow-lg border border-gray-100 p-8">
                  <div className="text-center mb-6">
                    <div
                      className="inline-flex p-3 bg-primary/10 rounded-2xl mb-4"
                      style={convertStyleStringToObject(
                        "background: rgb(243, 244, 239);"
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-clock h-8 w-8 text-primary"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      Best Times to Post
                    </h3>
                    <p className="text-gray-600">
                      Suggestions for the best time to post
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-sm">9:00 AM</span>
                      </div>
                      <span className="text-xs text-green-600 font-medium">
                        High
                      </span>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="font-medium text-sm">12:00 PM</span>
                      </div>
                      <span className="text-xs text-yellow-600 font-medium">
                        Medium
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative bg-[#f9fafb] rounded-3xl shadow-lg border border-gray-100 p-8">
                  <div className="text-center mb-6">
                    <div
                      className="inline-flex p-3 bg-primary/10 rounded-2xl mb-4"
                      style={convertStyleStringToObject(
                        "background: rgb(243, 244, 239);"
                      )}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="h-8 w-8 text-primary"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-.7.71z"></path>
                        <path d="m11 12-6-1.5V7.01l8.87 3.74c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5l6-1.5z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      Timeslots
                    </h3>
                    <p className="text-gray-600">
                      Set timeslots and schedule faster
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-calendar h-4 w-4 text-primary"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span className="font-medium text-sm">Today</span>
                      </div>
                      <span className="text-xs text-gray-500">3 available</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-primary/10 text-primary px-3 py-1.5 rounded text-xs font-medium">
                        9:00 AM
                      </div>
                      <div className="bg-primary/10 text-primary px-3 py-1.5 rounded text-xs font-medium">
                        1:00 PM
                      </div>
                      <div className="bg-primary/10 text-primary px-3 py-1.5 rounded text-xs font-medium">
                        6:00 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-[#f9fafb] rounded-3xl shadow-lg border border-gray-100 p-8">
                  <div className="text-center mb-6">
                    <div
                      className="inline-flex p-3 bg-primary/10 rounded-2xl mb-4"
                      style={convertStyleStringToObject(
                        "background: rgb(243, 244, 239);"
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-type h-8 w-8 text-primary"
                      >
                        <polyline points="4 7 4 4 20 4 20 7"></polyline>
                        <line x1="9" x2="15" y1="20" y2="20"></line>
                        <line x1="12" x2="12" y1="4" y2="20"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      Optimize captions for each platform
                    </h3>
                    <p className="text-gray-600">
                      Auto-optimize posts for each platform in your writing
                      style, with one click
                    </p>
                  </div>
                  <div
                    className="bg-primary/5 rounded-lg p-4"
                    style={convertStyleStringToObject(
                      "background: rgb(243, 244, 239);"
                    )}
                  >
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-2xl">✍️</div>
                      <div className="text-2xl text-gray-400">→</div>
                      <div className="flex space-x-2">
                        <img
                          alt="LinkedIn Logo"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="w-5 h-5"
                          src="/landing/images/LinkedInLogo.svg"
                          style={convertStyleStringToObject(
                            "color: transparent;"
                          )}
                        />
                        <img
                          alt="Instagram Logo"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="w-5 h-5"
                          src="/landing/images/Instagram-Logo.png"
                          style={convertStyleStringToObject(
                            "color: transparent;"
                          )}
                        />
                        <img
                          alt="Twitter/X Logo"
                          loading="lazy"
                          width="20"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          className="w-5 h-5"
                          src="/landing/images/Twitter-Logo-2.png"
                          style={convertStyleStringToObject(
                            "color: transparent;"
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-[#f9fafb] rounded-3xl shadow-lg border border-gray-100 p-8">
                  <div className="text-center mb-6">
                    <div
                      className="inline-flex p-3 bg-primary/10 rounded-2xl mb-4"
                      style={convertStyleStringToObject(
                        "background: rgb(243, 244, 239);"
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-crop h-8 w-8 text-primary"
                      >
                        <path d="M6 2v14a2 2 0 0 0 2 2h14"></path>
                        <path d="M18 22V8a2 2 0 0 0-2-2H2"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      Auto-Image Resizing
                    </h3>
                    <p className="text-gray-600">
                      No more cropping, resize your images to fit every platform
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-200 to-purple-200 rounded"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Instagram</div>
                          <div className="text-xs text-gray-500">
                            Square format
                          </div>
                        </div>
                        <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          ✓
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-gradient-to-br from-blue-200 to-cyan-200 rounded"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Twitter</div>
                          <div className="text-xs text-gray-500">
                            Wide format
                          </div>
                        </div>
                        <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          ✓
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-[#f9fafb] rounded-3xl shadow-lg border border-gray-100 p-8">
                  <div className="text-center mb-6">
                    <div
                      className="inline-flex p-3 bg-primary/10 rounded-2xl mb-4"
                      style={convertStyleStringToObject(
                        "background: rgb(243, 244, 239);"
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-file-image h-8 w-8 text-primary"
                      >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <circle cx="10" cy="12" r="2"></circle>
                        <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      Video Thumbnails Made Easy
                    </h3>
                    <p className="text-gray-600">
                      Upload a video, we will generate the thumbnail for you
                    </p>
                  </div>
                  <div
                    className="bg-primary/5 rounded-lg p-4"
                    style={convertStyleStringToObject(
                      "background: rgb(243, 244, 239);"
                    )}
                  >
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-white rounded border border-gray-200 aspect-video relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200"></div>
                        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                          0:00
                        </div>
                      </div>
                      <div className="bg-white rounded border border-gray-200 aspect-video relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-blue-200"></div>
                        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                          2:30
                        </div>
                      </div>
                      <div className="bg-white rounded border border-gray-200 aspect-video relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200"></div>
                        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                          5:00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative py-16 sm:py-32 overflow-visible">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-10 relative">
              <div className="max-w-3xl mx-auto text-center mb-24">
                <h2 className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#272727] font-extrabold tracking-tight">
                  Smart Scheduling Features
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Automation &amp; scheduling tools to help you save time
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
                <div
                  className="relative bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] overflow-visible aos-init aos-animate"
                  data-aos="fade-right"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F3F4EF]/80 to-white pointer-events-none rounded-2xl"></div>
                  <div className="relative p-8 md:p-12">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="p-4 bg-[#EEEFE8] rounded-2xl transform hover:rotate-6 transition-transform duration-300">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          className="h-8 w-8 text-primary"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"></path>
                          <path
                            fillRule="evenodd"
                            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-primary">
                          Auto-Recurring Posts
                        </h3>
                        <p className="text-gray-600">
                          Automate your content schedule with recurring posts
                        </p>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <p className="text-gray-600 text-lg">
                          Setup recurring posts like:
                        </p>
                        <ul className="grid gap-4 mb-20">
                          <li
                            className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-primary/50 shadow-sm transform hover:-translate-y-1 transition-transform duration-300 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="100"
                          >
                            <span className="h-2 w-2 bg-primary rounded-full"></span>
                            <span className="text-gray-700">
                              Daily engagement posts
                            </span>
                          </li>
                          <li
                            className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-primary/50 shadow-sm transform hover:-translate-y-1 transition-transform duration-300 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="200"
                          >
                            <span className="h-2 w-2 bg-primary rounded-full"></span>
                            <span className="text-gray-700">
                              Weekly promotions for your business
                            </span>
                          </li>
                          <li
                            className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-primary/50 shadow-sm transform hover:-translate-y-1 transition-transform duration-300 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="300"
                          >
                            <span className="h-2 w-2 bg-primary rounded-full"></span>
                            <span className="text-gray-700">
                              Monthly updates to showcase your progress
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="absolute bottom-0 translate-y-[60%] transform translate-x-6 w-[90%]">
                        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(8,_112,_184,_0.1)] p-4 border border-gray-100/50 hover:shadow-xl transition-all duration-300 scale-90 hover:scale-95">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-[#F3F4EF] rounded-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                className="h-4 w-4 text-primary"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"></path>
                                <path
                                  fillRule="evenodd"
                                  d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-0.5">
                                <p className="font-semibold text-gray-900 text-sm">
                                  Recurring Post
                                </p>
                                <span className="px-1.5 py-0.5 bg-primary/10 rounded-full text-xs font-medium text-primary">
                                  Active
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 text-xs text-gray-500">
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
                                  className="lucide lucide-clock h-3.5 w-3.5"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <p>Repeats every week</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] overflow-visible mt-20 md:mt-0 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2FF]/80 to-white pointer-events-none rounded-2xl"></div>
                  <div className="relative p-8 md:p-12">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="p-4 bg-indigo-100 rounded-2xl transform hover:rotate-6 transition-transform duration-300">
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
                          className="lucide lucide-clock h-8 w-8 text-indigo-600"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-indigo-600">
                          Best Times to Post
                        </h3>
                        <p className="text-gray-600">
                          Pick a high traffic time to post
                        </p>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <p className="text-gray-600 text-lg">
                          Suggestions based on:
                        </p>
                        <ul className="grid gap-4 mb-20">
                          <li
                            className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-indigo-100/50 shadow-sm transform hover:-translate-y-1 transition-transform duration-300 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="400"
                          >
                            <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
                            <span className="text-gray-700">
                              Commute time activity peaks (morning/evening)
                            </span>
                          </li>
                          <li
                            className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-indigo-100/50 shadow-sm transform hover:-translate-y-1 transition-transform duration-300 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="500"
                          >
                            <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
                            <span className="text-gray-700">
                              Common break periods (lunch, afternoon)
                            </span>
                          </li>
                          <li
                            className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-indigo-100/50 shadow-sm transform hover:-translate-y-1 transition-transform duration-300 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="600"
                          >
                            <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
                            <span className="text-gray-700">
                              Timezone-aware scheduling options
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="absolute bottom-0 translate-y-[80%] transform -translate-x-4 md:-translate-x-12 w-[90%]">
                        <div className="grid gap-2 scale-90">
                          <div
                            className="p-3 rounded-xl border transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                          border-green-200 bg-gradient-to-r from-green-50 to-white shadow-[0_8px_30px_rgba(0,_200,_0,_0.1)]"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                <div>
                                  <p className="font-semibold text-gray-900 text-sm">
                                    9:00 AM
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    Morning commute
                                  </p>
                                </div>
                              </div>
                              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">
                                High engagement
                              </span>
                            </div>
                          </div>
                          <div
                            className="p-3 rounded-xl border transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                          border-yellow-200 bg-gradient-to-r from-yellow-50 to-white shadow-[0_8px_30px_rgba(200,_200,_0,_0.1)]"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                <div>
                                  <p className="font-semibold text-gray-900 text-sm">
                                    12:00 PM
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    Lunch break
                                  </p>
                                </div>
                              </div>
                              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                                Medium engagement
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-10"></div>
            </div>
          </section>
          {/* <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-20 md:pt-20 pb-8 md:pb-20">
                <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
                  <h2
                    className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#272727] font-extrabold tracking-tight aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    Automate TikToks That Get Views
                  </h2>
                  <p
                    className="text-xl text-gray-600 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Choose a style and start generating content in minutes
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
              <div
                className="relative flex justify-center items-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="flex justify-center items-center gap-2 md:gap-4">
                  <div className="hidden md:block relative w-[180px] md:w-[220px] transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                    <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[9/16] bg-gray-900">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 z-10 opacity-100"
                        style={convertStyleStringToObject(
                          "background-image: url(&quot;/landing/images/preview-tiktok-1.jpg&quot;);"
                        )}
                      ></div>
                      <div className="absolute inset-0">
                        <div
                          style={convertStyleStringToObject(
                            "object-fit: cover; width: 100%; height: 100%;"
                          )}
                        >
                          <video
                            src="/landing/videos/tiktok-preview-1.mp4"
                            preload="auto"
                            webkit-
                            x5-
                            style={convertStyleStringToObject(
                              "width: 100%; height: 100%;"
                            )}
                          ></video>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20 cursor-pointer group">
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110">
                          <svg
                            className="w-6 h-6 text-blue-600 translate-x-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[180px] md:w-[220px] transform rotate-0 hover:rotate-6 transition-transform duration-300 z-30">
                    <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[9/16] bg-gray-900">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 z-10 opacity-100"
                        style={convertStyleStringToObject(
                          "background-image: url(&quot;/landing/images/preview-tiktok-2.jpg&quot;);"
                        )}
                      ></div>
                      <div className="absolute inset-0">
                        <div
                          style={convertStyleStringToObject(
                            "object-fit: cover; width: 100%; height: 100%;"
                          )}
                        >
                          <video
                            src="/landing/videos/preview-tiktok-2.mp4"
                            preload="auto"
                            webkit-
                            x5-
                            style={convertStyleStringToObject(
                              "width: 100%; height: 100%;"
                            )}
                          ></video>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20 cursor-pointer group">
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110">
                          <svg
                            className="w-6 h-6 text-blue-600 translate-x-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[180px] md:w-[220px] transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
                    <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[9/16] bg-gray-900">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 z-10 opacity-100"
                        style={convertStyleStringToObject(
                          "background-image: url(&quot;/landing/images/preview-tiktok-3.jpg&quot;);"
                        )}
                      ></div>
                      <div className="absolute inset-0">
                        <div
                          style={convertStyleStringToObject(
                            "object-fit: cover; width: 100%; height: 100%;"
                          )}
                        >
                          <video
                            src="/landing/videos/preview-tiktok-3.mp4"
                            preload="auto"
                            webkit-
                            x5-
                            style={convertStyleStringToObject(
                              "width: 100%; height: 100%;"
                            )}
                          ></video>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20 cursor-pointer group">
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110">
                          <svg
                            className="w-6 h-6 text-blue-600 translate-x-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block relative w-[180px] md:w-[220px] transform rotate-12 hover:rotate-0 transition-transform duration-300 z-10">
                    <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[9/16] bg-gray-900">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 z-10 opacity-100"
                        style={convertStyleStringToObject(
                          "background-image: url(&quot;/landing/images/preview-tiktok-4.jpg&quot;);"
                        )}
                      ></div>
                      <div className="absolute inset-0">
                        <div
                          style={convertStyleStringToObject(
                            "object-fit: cover; width: 100%; height: 100%;"
                          )}
                        >
                          <video
                            src="/landing/videos/preview-tiktok-4.mp4"
                            preload="auto"
                            webkit-
                            x5-
                            style={convertStyleStringToObject(
                              "width: 100%; height: 100%;"
                            )}
                          ></video>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20 cursor-pointer group">
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110">
                          <svg
                            className="w-6 h-6 text-blue-600 translate-x-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="relative py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
                <div className="inline-flex items-center justify-center p-1 mb-4 text-blue-600 bg-blue-100 rounded-full">
                  <span className="px-3 py-1 text-sm font-medium">
                    Why AutoWordpress?
                  </span>
                </div>
                <p className="text-xl text-gray-600">
                  The simple (rail)way to manage your social media brands.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="relative p-6 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-emerald-500 mb-3">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        With AutoWordpress
                      </h3>
                    </div>
                    <ul className="text-gray-600 space-y-3 mb-6 flex-grow">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-emerald-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Schedule posts to 9 platforms</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-emerald-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Generate short-form content</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-emerald-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Switch between 25 workspaces</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-emerald-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Automated recurring posts</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-emerald-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Mobile friendly dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-emerald-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Affordable plans starting at $15/month</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-gray-400 mb-3">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Tools Like Loomly
                      </h3>
                    </div>
                    <ul className="text-gray-600 space-y-3 mb-6 flex-grow">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Limited social media platforms</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Loads of features you don&apos;t need</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>No short-form video creation</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Higher costs for multiple platforms</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-gray-400 mb-3">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Your Current Situation
                      </h3>
                    </div>
                    <ul className="text-gray-600 space-y-3 mb-6 flex-grow">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Always copying and pasting content</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Constant switching between accounts</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Spending hours creating content</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Mixing up brand accounts</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2 mt-1 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>No easy content calendar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/signin"
                  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                >
                  Start Scheduling Your Posts
                </Link>
              </div>
            </div>
          </section>
          <div className="relative z-10 mt-24 pt-18 pb-2 max-w-6xl mx-auto px-4 sm:px-6">
            <div
              className="senja-embed"
              data-id="ad41d9f4-0ba8-46b2-852a-edb4c1372e0c"
              data-mode="shadow"
              data-lazyload="false"
              data-built="true"
              data-session="c7992621-1d48-4385-af2d-11a6c932dc00"
              style={convertStyleStringToObject("display: block; width: 100%;")}
            ></div>
          </div>
          {/* <div className="py-8 md:py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex justify-center">
                <div
                  className="twitter-tweet twitter-tweet-rendered"
                  style={convertStyleStringToObject(
                    "display: flex; max-width: 550px; width: 100%; margin-top: 10px; margin-bottom: 10px;"
                  )}
                >
                  <iframe
                    id="twitter-widget-0"
                    scrolling="no"
                    allowTransparency={true}
                    allowFullScreen={true}
                    className=""
                    style={convertStyleStringToObject(
                      "position: static; visibility: visible; width: 550px; height: 283px; display: block; flex-grow: 1;"
                    )}
                    title="X Post"
                    src="https://platform.twitter.com/embed/Tweet.html?creatorScreenName=socialrails&amp;dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1896606747285955031&amp;lang=en&amp;origin=https%3A%2F%2Fsocialrails.com%2F&amp;sessionId=2f440cf446875f12e67dd30837b718aed4ed6471&amp;siteScreenName=socialrails&amp;theme=light&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716&amp;width=550px"
                    data-tweet-id="1896606747285955031"
                  ></iframe>
                </div>
              </div>
            </div>
          </div> */}
          {/* <section id="pricing" className="relative">
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
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="pb-12 pt-14 md:pb-20 md:pt-20">
                <div className="pb-12 text-center">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 px-4 py-1.5">
                    <span className="animate-pulse text-amber-600">⏰</span>
                    <span className="text-sm font-medium text-amber-700">
                      Early-Bird Pricing
                    </span>
                  </div>
                  <h2 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
                    Plans that match your needs
                  </h2>
                  <div className="mx-auto max-w-3xl">
                    <p className="text-lg text-gray-700 mb-4">
                      Our pricing is simple, transparent and adapts to the size
                      of your brand.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-2">
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
                    </div>
                  </div>
                </div>
                <div>
                  <div className="m-auto mb-16 flex max-w-xs justify-center">
                    <div className="relative mx-6 flex w-full rounded-lg bg-gray-200 p-1">
                      <span
                        className="pointer-events-none absolute inset-0 m-1"
                        aria-hidden="true"
                      >
                        <span className="absolute inset-0 w-1/2 transform rounded bg-white shadow transition translate-x-full"></span>
                      </span>
                      <button
                        className="relative flex-1 p-1 text-sm font-medium transition text-gray-900"
                        aria-pressed="false"
                      >
                        Bill Yearly
                        <span className="text-emerald-500"> -20%</span>
                      </button>
                      <button
                        className="relative flex-1 p-1 text-sm font-medium transition "
                        aria-pressed="false"
                      >
                        Bill Monthly
                      </button>
                    </div>
                  </div>
                  <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-3 xl:gap-6">
                    <div className="relative flex h-full flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <div className="mb-4">
                        <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4">
                          Starter
                        </div>
                        <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                          <span className="text-2xl font-bold">$</span>
                          <span className="text-4xl font-bold tabular-nums">
                            19
                          </span>
                          <span className="pl-1 text-sm text-gray-500">
                            /month
                          </span>
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
                          <span>10 Videos / Month</span>
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
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                          </svg>
                          <span>3 Workspaces</span>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                          </svg>
                          <span>9 Social Media Platforms</span>
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
                          href="#"
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
                          <span className="text-2xl font-bold text-gray-200">
                            $
                          </span>
                          <span className="text-4xl font-bold tabular-nums text-gray-200">
                            49
                          </span>
                          <span className="pl-1 text-sm text-gray-400">
                            /month
                          </span>
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
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                          </svg>
                          <span>10 Workspaces</span>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                          </svg>
                          <span>9 Social Media Platforms</span>
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
                          href="#"
                          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 w-full rounded-xl bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"
                          aria-disabled="false"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                    <div className="relative flex h-full flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <div className="mb-4">
                        <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4">
                          Business
                        </div>
                        <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                          <span className="text-2xl font-bold">$</span>
                          <span className="text-4xl font-bold tabular-nums">
                            95
                          </span>
                          <span className="pl-1 text-sm text-gray-500">
                            /month
                          </span>
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
                          <span>9 Social Media Platforms</span>
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
                          href="#"
                          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 w-full rounded-xl bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow hover:bg-[length:100%_150%]"
                          aria-disabled="false"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <PricingModal
                  isOpen={openPricingModal}
                  onClose={() => setOpenPricingModal(false)}
                ></PricingModal>
              </div>
            </div>
          </section> */}
          <section id="faq">
            <FAQ></FAQ>
          </section>
        </div>
        <Footer></Footer>
      </main>
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
