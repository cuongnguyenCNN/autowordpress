import Link from "next/link";
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

export default function Content() {
  return (
    <main>
      <section className="max-w-6xl mx-auto bg-base-100 flex flex-col items-center justify-center px-8 py-8 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          <div className="flex flex-col gap-8 lg:gap-10 items-center justify-center text-center lg:text-left lg:items-start">
            <div>
              <Link
                href="#demo"
                className="flex items-center gap-2 mb-8 text-primary underline hover:text-primary-focus transition-colors"
              >
                <span className="bg-primary/20 p-2 rounded-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="w-3 h-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                  </svg>
                </span>
                Watch demo video
              </Link>
              <h1 className="font-extrabold text-5xl lg:text-5xl tracking-tight md:-mb-4">
                Schedule your content everywhere in seconds
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center sm:hidden">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-base-content/80">
                <div className="grid grid-cols-9 sm:flex items-center gap-3 sm:gap-4 sm:w-auto">
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Twitter/X"
                  >
                    <img
                      alt="Twitter/X"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/x.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Instagram"
                  >
                    <img
                      alt="Instagram"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/instagram.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="LinkedIn"
                  >
                    <img
                      alt="LinkedIn"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/linkedin.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Facebook"
                  >
                    <img
                      alt="Facebook"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/facebook.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="TikTok"
                  >
                    <img
                      alt="TikTok"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/tiktok.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="YouTube"
                  >
                    <img
                      alt="YouTube"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/youtube.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Bluesky"
                  >
                    <img
                      alt="Bluesky"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/bluesky.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Threads"
                  >
                    <img
                      alt="Threads"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/threads.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Pinterest"
                  >
                    <img
                      alt="Pinterest"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/pinterest.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg leading-relaxed mb-2">
                The simplest way to post and grow on all platforms. Built for
                creators and small teams without the ridiculous price tag.
              </p>
              <div className="flex flex-col gap-4 md:gap-3 mt-4 md:mt-3">
                <div className="flex items-start gap-2 md:gap-3 px-4 md:px-0">
                  <div className="w-5 h-5 md:w-6 md:h-6 mt-1 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17L4 12"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg leading-tight md:leading-relaxed">
                    Post to all major platforms in one click
                  </span>
                </div>
                <div className="flex items-start gap-2 md:gap-3 px-4 md:px-0">
                  <div className="w-5 h-5 md:w-6 md:h-6 mt-1 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17L4 12"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg leading-tight md:leading-relaxed">
                    Schedule content for the perfect posting time
                  </span>
                </div>
                <div className="flex items-start gap-2 md:gap-3 px-4 md:px-0">
                  <div className="w-5 h-5 md:w-6 md:h-6 mt-1 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17L4 12"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg leading-tight md:leading-relaxed">
                    Customize content for each platform
                  </span>
                </div>
                <div className="flex items-start gap-2 md:gap-3 px-4 md:px-0">
                  <div className="w-5 h-5 md:w-6 md:h-6 mt-1 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17L4 12"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg leading-tight md:leading-relaxed">
                    Generate viral videos using our studio templates
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-col items-center">
                <Link
                  href="/#pricing"
                  className="btn btn-primary rounded-xl bg-primary/90 btn-wide text-base"
                >
                  Try it for free
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3">
              <div className="-space-x-2 avatar-group justy-start">
                <div className="avatar w-12 h-12">
                  <img
                    alt="User"
                    fetchPriority="high"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    style={convertStyleStringToObject("color:transparent")}
                    srcSet="/_next/image?url=%2Fakim.jpg&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fakim.jpg&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Fakim.jpg&amp;w=128&amp;q=75"
                  />
                </div>
                <div className="avatar w-12 h-12">
                  <img
                    alt="User"
                    fetchPriority="high"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    style={convertStyleStringToObject("color:transparent")}
                    srcSet="/_next/image?url=%2Fninth.jpg&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fninth.jpg&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Fninth.jpg&amp;w=128&amp;q=75"
                  />
                </div>
                <div className="avatar w-12 h-12">
                  <img
                    alt="User"
                    fetchPriority="high"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    style={convertStyleStringToObject("color:transparent")}
                    srcSet="/_next/image?url=%2Fandrei.jpeg&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fandrei.jpeg&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Fandrei.jpeg&amp;w=128&amp;q=75"
                  />
                </div>
                <div className="avatar w-12 h-12">
                  <img
                    alt="User"
                    fetchPriority="high"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    style={convertStyleStringToObject("color:transparent")}
                    srcSet="/_next/image?url=%2FjackBadge.jpg&amp;w=64&amp;q=75 1x, /_next/image?url=%2FjackBadge.jpg&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2FjackBadge.jpg&amp;w=128&amp;q=75"
                  />
                </div>
                <div className="avatar w-12 h-12">
                  <img
                    alt="User"
                    fetchPriority="high"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    style={convertStyleStringToObject("color:transparent")}
                    srcSet="/_next/image?url=%2Fbeby-badge.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fbeby-badge.png&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Fbeby-badge.png&amp;w=128&amp;q=75"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-1">
                <div className="rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="url(#star-gradient)"
                    className="w-5 h-5"
                  >
                    <defs>
                      <linearGradient
                        id="star-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={convertStyleStringToObject(
                            "stop-color:#FFD700"
                          )}
                        ></stop>{" "}
                        <stop
                          offset="100%"
                          style={convertStyleStringToObject(
                            "stop-color:#FFA500"
                          )}
                        ></stop>{" "}
                      </linearGradient>
                    </defs>
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="url(#star-gradient)"
                    className="w-5 h-5"
                  >
                    <defs>
                      <linearGradient
                        id="star-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={convertStyleStringToObject(
                            "stop-color:#FFD700"
                          )}
                        ></stop>{" "}
                        <stop
                          offset="100%"
                          style={convertStyleStringToObject(
                            "stop-color:#FFA500"
                          )}
                        ></stop>{" "}
                      </linearGradient>
                    </defs>
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="url(#star-gradient)"
                    className="w-5 h-5"
                  >
                    <defs>
                      <linearGradient
                        id="star-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={convertStyleStringToObject(
                            "stop-color:#FFD700"
                          )}
                        ></stop>{" "}
                        <stop
                          offset="100%"
                          style={convertStyleStringToObject(
                            "stop-color:#FFA500"
                          )}
                        ></stop>{" "}
                      </linearGradient>
                    </defs>
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="url(#star-gradient)"
                    className="w-5 h-5"
                  >
                    <defs>
                      <linearGradient
                        id="star-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={convertStyleStringToObject(
                            "stop-color:#FFD700"
                          )}
                        ></stop>{" "}
                        <stop
                          offset="100%"
                          style={convertStyleStringToObject(
                            "stop-color:#FFA500"
                          )}
                        ></stop>{" "}
                      </linearGradient>
                    </defs>
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="url(#star-gradient)"
                    className="w-5 h-5"
                  >
                    <defs>
                      <linearGradient
                        id="star-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={convertStyleStringToObject(
                            "stop-color:#FFD700"
                          )}
                        ></stop>{" "}
                        <stop
                          offset="100%"
                          style={convertStyleStringToObject(
                            "stop-color:#FFA500"
                          )}
                        ></stop>{" "}
                      </linearGradient>
                    </defs>
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="text-base text-base-content/80">
                  {" "}
                  Loved by{" "}
                  <span className="font-semibold text-primary-content">
                    5337
                  </span>{" "}
                  small businesses{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 lg:w-2/3">
            <img
              alt="super cool person deep in their super cool curiosities"
              fetchPriority="high"
              width="1000"
              height="500"
              decoding="async"
              data-nimg="1"
              className="w-full hidden sm:block"
              style={convertStyleStringToObject("color:transparent")}
              srcSet="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fpw%2FAP1GczO_RYdbfHwxvztNGBulb3PIJai5o_gd9nGk0Tj5mUbe9RBJ2uXjd4Ec964wQPGeUU--p0olTqOss3uCOU6ufQ2R7JTZy4TUkcDvA-TG4Q4TgSOgs1Em4NpI3BHTzn_Hn06SUERkXdmmXep4syDkGJsQ%3Dw1477-h1163-s-no-gm%3Fauthuser%3D0&amp;w=1080&amp;q=75 1x, /_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fpw%2FAP1GczO_RYdbfHwxvztNGBulb3PIJai5o_gd9nGk0Tj5mUbe9RBJ2uXjd4Ec964wQPGeUU--p0olTqOss3uCOU6ufQ2R7JTZy4TUkcDvA-TG4Q4TgSOgs1Em4NpI3BHTzn_Hn06SUERkXdmmXep4syDkGJsQ%3Dw1477-h1163-s-no-gm%3Fauthuser%3D0&amp;w=2048&amp;q=75 2x"
              src="/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fpw%2FAP1GczO_RYdbfHwxvztNGBulb3PIJai5o_gd9nGk0Tj5mUbe9RBJ2uXjd4Ec964wQPGeUU--p0olTqOss3uCOU6ufQ2R7JTZy4TUkcDvA-TG4Q4TgSOgs1Em4NpI3BHTzn_Hn06SUERkXdmmXep4syDkGJsQ%3Dw1477-h1163-s-no-gm%3Fauthuser%3D0&amp;w=2048&amp;q=75"
            />
            <div className="mt-6 md:mt-8 flex flex-col items-center justify-center hidden sm:block">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-base-content/80">
                <span className="text-xs sm:text-sm">
                  <span className="hidden sm:inline">All platforms:</span>
                </span>
                <div className="grid grid-cols-9 sm:flex items-center gap-3 sm:gap-4 sm:w-auto">
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Twitter/X"
                  >
                    <img
                      alt="Twitter/X"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/x.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Instagram"
                  >
                    <img
                      alt="Instagram"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/instagram.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="LinkedIn"
                  >
                    <img
                      alt="LinkedIn"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/linkedin.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Facebook"
                  >
                    <img
                      alt="Facebook"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/facebook.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="TikTok"
                  >
                    <img
                      alt="TikTok"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/tiktok.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="YouTube"
                  >
                    <img
                      alt="YouTube"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/youtube.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Bluesky"
                  >
                    <img
                      alt="Bluesky"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/bluesky.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Threads"
                  >
                    <img
                      alt="Threads"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/threads.svg"
                    />
                  </div>
                  <div
                    className="relative w-5 h-5 sm:w-6 sm:h-6 tooltip"
                    data-tip="Pinterest"
                  >
                    <img
                      alt="Pinterest"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={convertStyleStringToObject(
                        "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      )}
                      src="/icons/pinterest.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6"></div>
          </div>
        </div>
      </section>
      <section className="bg-base-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-base-150 rounded-lg p-8 flex flex-col h-full">
              <p className="text-xl text-base-content/90 flex-grow mb-6">
                <span className="bg-yellow-100/70 px-1 rounded">
                  Best price/quality
                </span>{" "}
                of all platforms of this kind by far
              </p>
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  <img
                    alt="Yorgo Hoebekes testimonial for post bridge"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="w-12 h-12 rounded-full object-cover"
                    style={convertStyleStringToObject("color:transparent")}
                    srcSet="/_next/image?url=%2Fyorgo.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fyorgo.jpg&amp;w=96&amp;q=75 2x"
                    src="/_next/image?url=%2Fyorgo.jpg&amp;w=96&amp;q=75"
                  />
                </div>
                <div>
                  <div className="font-medium">Yorgo Hoebeke</div>
                  <div className="text-sm text-base-content/70">
                    @yorgohoebeke
                  </div>
                </div>
                <Link
                  href="https://x.com/yorgohoebeke/status/1856770400803225686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto"
                  aria-label="See user post on Twitter"
                >
                  <svg
                    className="w-5 h-5 fill-[#00aCee]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-base-150 rounded-lg p-8 flex flex-col h-full">
              <p className="text-xl text-base-content/90 flex-grow mb-6">
                Post bridge is{" "}
                <span className="bg-yellow-100/70 px-1 rounded">
                  the best investment ive made in months
                </span>
                . Its simple and works, exactly what i was searching to handle
                multiple channels.
              </p>
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  <img
                    alt="Fers testimonial for post bridge"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="w-12 h-12 rounded-full object-cover"
                    style={convertStyleStringToObject("color:transparent")}
                    srcSet="/_next/image?url=%2Ffer.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Ffer.jpg&amp;w=96&amp;q=75 2x"
                    src="/_next/image?url=%2Ffer.jpg&amp;w=96&amp;q=75"
                  />
                </div>
                <div>
                  <div className="font-medium">Fer</div>
                  <div className="text-sm text-base-content/70">@fer_chvs</div>
                </div>
                <Link
                  href="https://x.com/fer_chvs/status/1851987537062986203?s=46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto"
                  aria-label="See user post on Twitter"
                >
                  <svg
                    className="w-5 h-5 fill-[#00aCee]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-base-150 rounded-lg p-8 flex flex-col h-full">
              <p className="text-xl text-base-content/90 flex-grow mb-6">
                Time is money, and using post bridge daily has been saving me
                both for the last two weeks 👌
              </p>
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  <img
                    alt="Soto Monteros testimonial for post bridge"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="w-12 h-12 rounded-full object-cover"
                    style={convertStyleStringToObject("color:transparent")}
                    srcSet="/_next/image?url=%2Fsoto.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fsoto.jpg&amp;w=96&amp;q=75 2x"
                    src="/_next/image?url=%2Fsoto.jpg&amp;w=96&amp;q=75"
                  />
                </div>
                <div>
                  <div className="font-medium">Soto Montero</div>
                  <div className="text-sm text-base-content/70">
                    @thesotomontero
                  </div>
                </div>
                <Link
                  href="https://x.com/thesotomontero/status/1856864768188969287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto"
                  aria-label="See user post on Twitter"
                >
                  <svg
                    className="w-5 h-5 fill-[#00aCee]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-10 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mx-auto leading-tight">
                Posting content shouldnt be this
                <span className="text-error"> hard</span>
              </h2>
            </div>
            <p className="text-base-content/70 mb-10">
              Other solutions and tools...
            </p>
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
              <div className="p-8 rounded-2xl bg-base-200/30 border border-base-300">
                <div className="text-2xl mb-2 flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-error"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
                  </svg>{" "}
                  Manually posting
                </div>
                <div className="text-base-content/70">
                  Hours of time you cant get back - spent posting your content 1
                  by 1 to each platform (ouch)
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-base-200/30 border border-base-300">
                <div className="text-2xl mb-2 flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 288 512"
                    className="text-error"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
                  </svg>{" "}
                  Unfairly expensive
                </div>
                <div className="text-base-content/70">
                  Youre not an enterprise, or a Fortune 500 company, so why are
                  you paying as much as one?
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-base-200/30 border border-base-300">
                <div className="text-2xl mb-2 flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-error"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>{" "}
                  Features you dont need
                </div>
                <div className="text-base-content/70">
                  99 features and you only need one... but youll have to pay for
                  all of them.
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-base-200/30 border border-base-300">
                <div className="text-2xl mb-2 flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-error"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path>
                  </svg>{" "}
                  Complex tools
                </div>
                <div className="text-base-content/70">
                  The learning curve is steeper than a UFOs flight path.
                  Houston, we have a problem!
                </div>
              </div>
            </div>
            <p className="text-xl mt-12 text-base-content/70">
              Give up hours of your time or buckets of your cash? You shouldnt
              have to choose.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 px-10 bg-base-100" id="features">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
            Grow your social reach with
            <span className="text-primary"> less effort </span>for
            <span className="text-primary"> less money</span>
          </h2>
          <p className="text-base-content/70 mb-10">
            Using post bridge features...
          </p>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
              <ul className="w-full">
                <li>
                  <button
                    className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                    aria-expanded="true"
                  >
                    <span className="duration-100 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="flex-1 text-base-content text-primary font-semibold">
                      <h3 className="inline">Cross-posting</h3>
                    </span>
                  </button>
                  <div
                    className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden"
                    style={convertStyleStringToObject("opacity:1")}
                  >
                    <div className="pb-5 leading-relaxed">
                      Upload your content to post bridge and post it to any of
                      your connected social media accounts; including posting to
                      all platforms at the same time.{" "}
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                    aria-expanded="false"
                  >
                    <span className="duration-100 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="flex-1 text-base-content ">
                      <h3 className="inline">Scheduling</h3>
                    </span>
                  </button>
                  <div
                    className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden"
                    style={convertStyleStringToObject("max-height:0;opacity:0")}
                  >
                    <div className="pb-5 leading-relaxed">
                      Schedule your content to be posted on your social accounts
                      at the perfect time.
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                    aria-expanded="false"
                  >
                    <span className="duration-100 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        ></path>
                      </svg>
                    </span>
                    <span className="flex-1 text-base-content ">
                      <h3 className="inline">Content management</h3>
                    </span>
                  </button>
                  <div
                    className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden"
                    style={convertStyleStringToObject("max-height:0;opacity:0")}
                  >
                    <div className="pb-5 leading-relaxed">
                      View all of your posted content and scheduled content in
                      one place, edit scheduled posts and view your past posts.
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                    aria-expanded="false"
                  >
                    <span className="duration-100 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 2.25a1.5 1.5 0 0 1 1.5 1.5v1.5h-3V3.75A1.5 1.5 0 0 1 12 2.25zM4.5 6h15a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5V7.5A1.5 1.5 0 0 1 4.5 6zM6 9h12v9H6V9z"
                        ></path>
                      </svg>
                    </span>
                    <span className="flex-1 text-base-content ">
                      <h3 className="inline">Content Studio</h3>
                    </span>
                  </button>
                  <div
                    className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden"
                    style={convertStyleStringToObject("max-height:0;opacity:0")}
                  >
                    <div className="pb-5 leading-relaxed">
                      Proven viral templates to create content for your brand in
                      minutes. (The same templates weve used to get over 60,000
                      app downloads to our own apps) Drag and drop using our
                      video maker and get 1000s of potential customers to your
                      page
                    </div>
                  </div>
                </li>
              </ul>
              <div className="rounded-2xl aspect-square w-full sm:w-[26rem]">
                <video
                  className="w-full h-full object-cover rounded-2xl"
                  width="500"
                  height="500"
                >
                  <source src="/feature1vid.webm" type="video/webm" />
                  <source src="/feature1vid.mp4" type="video/mp4" />
                  Your browser doesnt support this video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-100 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="stats stats-vertical lg:stats-horizontal shadow border bg-base-100 w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-8 h-8"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
                </svg>
              </div>
              <div className="stat-title">Weekly Time Saved ~</div>
              <div className="stat-value text-primary">3h 4m</div>
              <div className="stat-desc">Per active user</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-8 h-8"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
                </svg>
              </div>
              <div className="stat-title">Yearly Time Saved ~</div>
              <div className="stat-value text-secondary">
                13 <span className="text-lg">entire days</span>
              </div>
              <div className="stat-desc">Based on weekly average</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-accent">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 640 512"
                  className="w-8 h-8"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                </svg>
              </div>
              <div className="stat-title">Posts Published</div>
              <div className="stat-value text-accent">97,503</div>
              <div className="stat-desc text-success">↗︎ 69% engagement</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Create<span className="text-primary mx-2">Viral Videos</span>in
              Seconds
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Stop spending hours on content creation. Use our Content Studio
              -packed with proven viral templates- to create engaging videos
              that drive{" "}
              <button className="text-primary hover:underline font-semibold inline-flex items-center gap-1 group">
                real results
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                </svg>
              </button>
              .
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden mb-12 border border-base-200">
            <video className="w-full aspect-video object-cover rounded-2xl">
              <source src="/contentStudioDemo2.webm" type="video/webm" />
              <source src="/contentStudioDemo2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="rounded-3xl bg-base-200/50 p-6 border border-base-200">
              <div className="space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C4.254 8.25 3.75 8.754 3.75 9.375v1.5m0-5.25v5.25m0-5.25C3.75 5.004 4.254 4.5 4.875 4.5h.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-.75C4.254 8.25 3.75 8.754 3.75 9.375M6 8.25H4.875m0 0h.75m-1.5 0h1.5m0 0h.75M6 8.25h.75m-.75 0h.75m-.75 0H6m0 0h.75"
                  ></path>
                </svg>
                <h3 className="text-xl font-bold">Proven Templates</h3>
                <p className="text-base-content/70">
                  Access templates that have driven 60,000+ app downloads and
                  viral social posts.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-base-200/50 p-6 border border-base-200">
              <div className="space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  ></path>
                </svg>
                <h3 className="text-xl font-bold">Plug &amp; Play Editor</h3>
                <p className="text-base-content/70">
                  Simple plug-and-play interface to customize templates to your
                  brand in minutes.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-base-200/50 p-6 border border-base-200">
              <div className="space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  ></path>
                </svg>
                <h3 className="text-xl font-bold">Proven Results</h3>
                <p className="text-base-content/70">
                  Templates designed to maximize engagement and drive traffic to
                  your business.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="mt-4 text-lg text-base-content/70">
              *No video editing experience needed - *Creator or Pro subscription
              required
            </p>
          </div>
          <dialog className="modal ">
            <div className="modal-box max-w-5xl relative">
              <button className="btn btn-sm btn-circle absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-xl mb-6 pr-8">
                Viral Examples Using Our Templates
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="card bg-base-200">
                  <div className="card-body p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="w-4 h-4 text-pink-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                      <h4 className="font-semibold text-sm">Instagram</h4>
                    </div>
                    <div className="bg-white rounded-lg flex justify-center">
                      <iframe
                        className="w-[300px]"
                        style={convertStyleStringToObject(
                          "height:550px;border:none"
                        )}
                        src="https://www.instagram.com/reel/DCJ4AzwBT_V/embed"
                      ></iframe>
                    </div>
                    <p className="text-xs text-base-content/70 mt-2">
                      5.2M views - Brought in 5,000+ users overnight
                    </p>
                  </div>
                </div>
                <div className="card bg-base-200">
                  <div className="card-body p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="w-4 h-4 text-black"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                      </svg>
                      <h4 className="font-semibold text-sm">TikTok</h4>
                    </div>
                    <div className="bg-white rounded-lg flex justify-center">
                      <iframe
                        className="w-[300px]"
                        style={convertStyleStringToObject(
                          "height:550px;border:none"
                        )}
                        src="https://www.tiktok.com/embed/7434601364048727352"
                      ></iframe>
                    </div>
                    <p className="text-xs text-base-content/70 mt-2">
                      490k views - Posted to instagram and tiktok using post
                      bridge (1,000 free downloads generated)
                    </p>
                  </div>
                </div>
                <div className="card bg-base-200">
                  <div className="card-body p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="w-4 h-4 text-pink-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                      <h4 className="font-semibold text-sm">Instagram</h4>
                    </div>
                    <div className="bg-white rounded-lg flex justify-center">
                      <iframe
                        className="w-[300px]"
                        style={convertStyleStringToObject(
                          "height:550px;border:none"
                        )}
                        src="https://www.instagram.com/reel/DATeS1DJKiW/embed"
                      ></iframe>
                    </div>
                    <p className="text-xs text-base-content/70 mt-2">
                      2.1M views - template can be applied to almost any
                      consumer app and get viral views
                    </p>
                  </div>
                </div>
              </div>
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
                    These posts were created using the exact same templates
                    youll be using!
                  </span>
                </div>
                <div className="modal-action">
                  <button className="btn btn-primary">Got it!</button>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </section>
      <section className="bg-base-200 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              2500+ users growing on all platforms
            </h2>
            <p className="text-xl text-base-content/80">
              Posting and scheduling their social content using post bridge
            </p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance] space-y-6">
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div>
                  <img
                    alt="Achievement"
                    loading="lazy"
                    width="400"
                    height="250"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover"
                    style={convertStyleStringToObject("color:transparent")}
                    srcSet="/_next/image?url=%2Follie-ig-1m.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2Follie-ig-1m.png&amp;w=828&amp;q=75 2x"
                    src="/_next/image?url=%2Follie-ig-1m.png&amp;w=828&amp;q=75"
                  />
                </div>
                <div className="p-6">
                  <p className="text-base/relaxed">
                    <span>
                      My first ever 1M view video. This has been{" "}
                      <span className="bg-warning/20 px-1 rounded-md">
                        a monumental boost for [my app]
                      </span>
                    </span>
                    <span> ScoutR.</span>
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="Ollie Warren"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2Follie_avatar.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Follie_avatar.jpg&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2Follie_avatar.jpg&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Ollie Warren</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @ollie_warren99
                      </p>
                    </div>
                    <Link
                      href="https://x.com/ollie_warren99/status/1864567347748491733"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="See user post on Twitter"
                    >
                      <svg
                        className="w-5 h-5 fill-[#00aCee]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div className="p-6">
                  <p className="text-base/relaxed">
                    Finally, social media posting tool for the rest of us.
                    Thanks Jack!
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="David"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2Fninth.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fninth.jpg&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2Fninth.jpg&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">David</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @ninthdensity
                      </p>
                    </div>
                    <Link
                      href="https://x.com/ninthdensity/status/1856817175295922573"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="See user post on Twitter"
                    >
                      <svg
                        className="w-5 h-5 fill-[#00aCee]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div className="p-6">
                  <p className="text-base/relaxed">
                    <span>
                      post bridge is amazing,{" "}
                      <span className="bg-warning/20 px-1 rounded-md">
                        makes my life so much easier!
                      </span>
                    </span>
                    <span></span>
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="Julian"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2Fjulian.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fjulian.png&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2Fjulian.png&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Julian</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @BuiltByJulian
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div className="p-6">
                  <p className="text-base/relaxed">
                    <span>
                      Thank u for making this!!!! All current products with
                      similar pricing are too expensive which priced out small
                      entrepreneurs. Thank u for making{" "}
                      <span className="bg-warning/20 px-1 rounded-md">
                        such a great product
                      </span>
                    </span>
                    <span>!</span>
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="Nil Ni"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2FphReview.jpeg&amp;w=48&amp;q=75 1x, /_next/image?url=%2FphReview.jpeg&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2FphReview.jpeg&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Nil Ni</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @nilni
                      </p>
                    </div>
                    <Link
                      href="https://www.producthunt.com/products/post-bridge?comment=4028700#post-bridge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="See user review on Product Hunt"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 26.245 26.256"
                        className="w-[18px] h-[18px]"
                      >
                        <path
                          d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
                          fill="#da552f"
                        ></path>
                        <path
                          d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
                          fill="#fff"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div className="p-6">
                  <p className="text-base/relaxed">
                    <span>
                      <span className="bg-warning/20 px-1 rounded-md">
                        Amazing tool at an amazing price
                      </span>
                    </span>
                    <span> 🔥🔥</span>
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="Andrei Bogdan"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2Fandrei.jpeg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fandrei.jpeg&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2Fandrei.jpeg&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Andrei Bogdan</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @TheAndreiBogdan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div className="p-6">
                  <p className="text-base/relaxed">
                    <span>
                      Literally no easier way to interface would multi-account
                      posting. and for 10x cheaper.{" "}
                      <span className="bg-warning/20 px-1 rounded-md">
                        every creator should be using this
                      </span>
                    </span>
                    <span></span>
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="Noah Solomon"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2Fnoah.jpeg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fnoah.jpeg&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2Fnoah.jpeg&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Noah Solomon</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @noah_solomon1
                      </p>
                    </div>
                    <Link
                      href="https://www.producthunt.com/products/post-bridge/reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="See user review on Product Hunt"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 26.245 26.256"
                        className="w-[18px] h-[18px]"
                      >
                        <path
                          d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
                          fill="#da552f"
                        ></path>
                        <path
                          d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
                          fill="#fff"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div>
                  <img
                    alt="Achievement"
                    loading="lazy"
                    width="400"
                    height="250"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover"
                    style={convertStyleStringToObject("color:transparent")}
                    srcSet="/_next/image?url=%2FmaxThumbs.jpeg&amp;w=640&amp;q=75 1x, /_next/image?url=%2FmaxThumbs.jpeg&amp;w=828&amp;q=75 2x"
                    src="/_next/image?url=%2FmaxThumbs.jpeg&amp;w=828&amp;q=75"
                  />
                </div>
                <div className="p-6">
                  <p className="text-base/relaxed">
                    <span>
                      First posts made on YT and TT with post bridge [to
                      advertise my product]. So happy I finally took the first
                      step to prioritizing marketing daily. Jack built{" "}
                      <span className="bg-warning/20 px-1 rounded-md">
                        an amazing app
                      </span>
                    </span>
                    <span> here.</span>
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="Max Blade"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2Fmaxblade.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fmaxblade.jpg&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2Fmaxblade.jpg&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Max Blade</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @_MaxBlade
                      </p>
                    </div>
                    <Link
                      href="https://x.com/_MaxBlade/status/1870538781046235264"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="See user post on Twitter"
                    >
                      <svg
                        className="w-5 h-5 fill-[#00aCee]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div className="p-6">
                  <p className="text-base/relaxed">
                    <span>
                      The UI is{" "}
                      <span className="bg-warning/20 px-1 rounded-md">
                        clean and easy to navigate
                      </span>
                    </span>
                    <span>
                      . Easy as adding an event on a calendar. Similar apps Ive
                      found have a slightly higher learning curve when all you
                      want to do is just schedule your damn content.
                    </span>
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="Rahul Kahani"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2Frahul.jpeg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Frahul.jpeg&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2Frahul.jpeg&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Rahul Kahani</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @rahulkahani
                      </p>
                    </div>
                    <Link
                      href="https://www.producthunt.com/products/post-bridge?comment=4028583#post-bridge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="See user review on Product Hunt"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 26.245 26.256"
                        className="w-[18px] h-[18px]"
                      >
                        <path
                          d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
                          fill="#da552f"
                        ></path>
                        <path
                          d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
                          fill="#fff"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div className="p-6">
                  <p className="text-base/relaxed">
                    <span>
                      Post-bridge is{" "}
                      <span className="bg-warning/20 px-1 rounded-md">
                        the best investment i made in months
                      </span>
                    </span>
                    <span>
                      . Its simple and works, exactly what i was searching to
                      handle multiple channels. So good to invest in products
                      from the community 💙 Thanks so much for this product bro!
                    </span>
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="Fer"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2Ffer.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Ffer.jpg&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2Ffer.jpg&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Fer</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @fer_chvs
                      </p>
                    </div>
                    <Link
                      href="https://x.com/fer_chvs/status/1851987537062986203?s=46"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="See user post on Twitter"
                    >
                      <svg
                        className="w-5 h-5 fill-[#00aCee]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div className="p-6">
                  <p className="text-base/relaxed">
                    $9/month should not be legal for this level of app
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="Paulius"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2Fpauli.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fpauli.jpg&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2Fpauli.jpg&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Paulius</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @0xPaulius
                      </p>
                    </div>
                    <Link
                      href="https://x.com/0xPaulius/status/1856860177841983953"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="See user post on Twitter"
                    >
                      <svg
                        className="w-5 h-5 fill-[#00aCee]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div>
                  <img
                    alt="Achievement"
                    loading="lazy"
                    width="400"
                    height="250"
                    decoding="async"
                    data-nimg="1"
                    className="w-full object-cover"
                    style={convertStyleStringToObject("color:transparent")}
                    srcSet="/_next/image?url=%2Fcyril-test-proof.jpeg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fcyril-test-proof.jpeg&amp;w=828&amp;q=75 2x"
                    src="/_next/image?url=%2Fcyril-test-proof.jpeg&amp;w=828&amp;q=75"
                  />
                </div>
                <div className="p-6">
                  <p className="text-base/relaxed">
                    <span>
                      Creating videos directly on Post-Bridge and scheduling it
                      right away{" "}
                      <span className="bg-warning/20 px-1 rounded-md">
                        is a cheat code
                      </span>
                    </span>
                    <span></span>
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="Cyril"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2Fcyril-pfp.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fcyril-pfp.jpg&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2Fcyril-pfp.jpg&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Cyril</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @SlamingDev
                      </p>
                    </div>
                    <Link
                      href="https://x.com/slamingdev/status/1863651830489554978?s=46"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="See user post on Twitter"
                    >
                      <svg
                        className="w-5 h-5 fill-[#00aCee]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid">
              <div
                id="testimonials"
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300 h-fit"
              >
                <div className="p-6">
                  <p className="text-base/relaxed">
                    <span>
                      I hate how every social media has a different scheduling
                      and post management provider, thankfully post bridge
                      solves that and I love the experience so far,{" "}
                      <span className="bg-warning/20 px-1 rounded-md">
                        it just works.
                      </span>
                    </span>
                    <span></span>
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="shrink-0">
                      <img
                        alt="Ryan Vogel"
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full w-10 h-10 object-cover"
                        style={convertStyleStringToObject("color:transparent")}
                        srcSet="/_next/image?url=%2Fryant.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fryant.jpg&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2Fryant.jpg&amp;w=96&amp;q=75"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Ryan Vogel</h3>
                      <p className="text-sm text-base-content/70 truncate">
                        @ryandavogel
                      </p>
                    </div>
                    <Link
                      href="https://x.com/ryandavogel/status/1856870315793539201?s=46"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="See user post on Twitter"
                    >
                      <svg
                        className="w-5 h-5 fill-[#00aCee]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-base-100" id="platforms">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Supported Platforms</h2>
            <p className="text-base-content/60 max-w-2xl mx-auto">
              Use post bridge to schedule and post your content across all of
              these social media platforms at the same time - all from one
              place.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Link
              className="card bg-base-200 hover:bg-base-300 transition-all duration-300 relative cursor-pointer"
              target="_self"
              rel=""
              href="twitter-scheduler"
            >
              <div className="card-body items-center text-center p-6">
                <div
                  className="w-12 h-12 relative mb-3 hover:text-blue-400 
          "
                >
                  <img
                    alt="TwitterX"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/x.svg"
                  />
                </div>
                <h3 className="text-sm font-medium ">Twitter/X</h3>
              </div>
            </Link>
            <Link
              className="card bg-base-200 hover:bg-base-300 
      transition-all duration-300 relative cursor-pointer"
              target="_self"
              rel=""
              href="instagram-scheduler"
            >
              <div className="card-body items-center text-center p-6">
                <div
                  className="w-12 h-12 relative mb-3 undefined 
          "
                >
                  <img
                    alt="Instagram"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/instagram.svg"
                  />
                </div>
                <h3 className="text-sm font-medium ">Instagram</h3>
              </div>
            </Link>
            <Link
              className="card bg-base-200 hover:bg-base-300 
      transition-all duration-300 relative cursor-pointer"
              target="_self"
              rel=""
              href="linkedin-scheduler"
            >
              <div className="card-body items-center text-center p-6">
                <div
                  className="w-12 h-12 relative mb-3 hover:text-blue-600 
          "
                >
                  <img
                    alt="LinkedIn"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/linkedin.svg"
                  />
                </div>
                <h3 className="text-sm font-medium ">LinkedIn</h3>
              </div>
            </Link>
            <Link
              className="card bg-base-200 hover:bg-base-300 
      transition-all duration-300 relative cursor-pointer"
              target="_self"
              rel=""
              href="#platforms"
            >
              <div className="card-body items-center text-center p-6">
                <div
                  className="w-12 h-12 relative mb-3 hover:text-blue-500 
          "
                >
                  <img
                    alt="Facebook"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/facebook.svg"
                  />
                </div>
                <h3 className="text-sm font-medium ">Facebook</h3>
              </div>
            </Link>
            <Link
              className="card bg-base-200 hover:bg-base-300 
      transition-all duration-300 relative cursor-pointer"
              target="_self"
              rel=""
              href="tiktok-scheduler"
            >
              <div className="card-body items-center text-center p-6">
                <div
                  className="w-12 h-12 relative mb-3 undefined 
          "
                >
                  <img
                    alt="TikTok"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/tiktok.svg"
                  />
                </div>
                <h3 className="text-sm font-medium ">TikTok</h3>
              </div>
            </Link>
            <Link
              className="card bg-base-200 hover:bg-base-300 
      transition-all duration-300 relative cursor-pointer"
              target="_self"
              rel=""
              href="youtube-scheduler"
            >
              <div className="card-body items-center text-center p-6">
                <div
                  className="w-12 h-12 relative mb-3 undefined 
          "
                >
                  <img
                    alt="YouTube"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/youtube.svg"
                  />
                </div>
                <h3 className="text-sm font-medium ">YouTube</h3>
              </div>
            </Link>
            <Link
              className="card bg-base-200 hover:bg-base-300 
      transition-all duration-300 relative cursor-pointer"
              target="_self"
              rel=""
              href="bluesky-scheduler"
            >
              <div className="card-body items-center text-center p-6">
                <div
                  className="w-12 h-12 relative mb-3 undefined 
          "
                >
                  <img
                    alt="Bluesky"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/bluesky.svg"
                  />
                </div>
                <h3 className="text-sm font-medium ">Bluesky</h3>
              </div>
            </Link>
            <Link
              className="card bg-base-200 hover:bg-base-300 
      transition-all duration-300 relative cursor-pointer"
              target="_self"
              rel=""
              href="threads-scheduler"
            >
              <div className="card-body items-center text-center p-6">
                <div
                  className="w-12 h-12 relative mb-3 undefined 
          "
                >
                  <img
                    alt="Threads"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/threads.svg"
                  />
                </div>
                <h3 className="text-sm font-medium ">Threads</h3>
              </div>
            </Link>
            <Link
              className="card bg-base-200 hover:bg-base-300 
      transition-all duration-300 relative cursor-pointer"
              target="_self"
              rel=""
              href="pinterest-scheduler"
            >
              <div className="card-body items-center text-center p-6">
                <div className="w-12 h-12 relative mb-3 undefined ">
                  <img
                    alt="Pinterest"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/pinterest.svg"
                  />
                </div>
                <h3 className="text-sm font-medium ">Pinterest</h3>
              </div>
            </Link>
            <Link
              className="card bg-base-200 hover:bg-base-300 transition-all duration-300 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://insigh.to/b/post-bridge"
            >
              <div className="card-body items-center text-center p-6">
                <div className="w-12 h-12 relative mb-3">
                  <img
                    alt="Request a Platform"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/plus.svg"
                  />
                </div>
                <h3 className="text-sm font-medium">Request a Platform</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-base-200 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 bg-base-100">
              <img
                alt="Founder"
                loading="lazy"
                width="256"
                height="256"
                decoding="async"
                data-nimg="1"
                className="w-full h-full object-cover"
                style={convertStyleStringToObject("color:transparent")}
                srcSet="/_next/image?url=%2Ffounder-image.jpg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffounder-image.jpg&amp;w=640&amp;q=75 2x"
                src="/_next/image?url=%2Ffounder-image.jpg&amp;w=640&amp;q=75"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                heyo! its jack{" "}
                <span className="text-sm">(the guy who made post bridge)</span>
              </h2>
              <div className="space-y-4 text-base-content/80">
                <p className="">
                  Last year I was spending over 1 hour every day posting the
                  same content to all social platforms. I needed a faster way to
                  post my content to promote my mobile app.
                </p>
                <p>
                  I wanted to use existing tools but they all charged way too
                  much money, on top of that they were way too complex. I was
                  hardly making any money to begin with and these tools were
                  asking me to pay $50-$150 per month!
                </p>
                <p>
                  I set out to built my own tool just for myself, but turns out
                  other people had the same problem as me! Thats how post bridge
                  was born.
                </p>
                <p>
                  Ive since used post bridge daily to grow my own mobile app to
                  100,000 users by posting all my content to all platforms -
                  which has brought in over 100,000,000 views
                </p>
                <p className="font-medium text-base-content">
                  Now I save multiple hours per week and so do{" "}
                  <span className="text-primary font-bold">thousands</span> of
                  others using post bridge - for a truly <b>unbeatable</b>{" "}
                  price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-base-200 pb-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg md:text-xl font-medium text-base-content/80">
            Want to see how I use post bridge daily? Check out this video
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary animate-bounce"
          >
            <path
              d="M12 4L12 20M12 20L5 13M12 20L19 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <section className="relative w-full bg-base-200 pb-24" id="demo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/c0ALsm_7yH0?rel=0"
                title="LinkPost Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-150 overflow-hidden" id="pricing">
        <div className="py-24 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <p className="font-medium text-primary mb-8">Pricing</p>
            <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
              Get more views, with less effort.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-20">
              <div className="join border border-base-content/20 rounded-full bg-base-100 p-1 w-64">
                <button className="btn btn-sm join-item flex-1 btn-ghost">
                  Monthly
                </button>
                <button className="btn btn-sm join-item flex-1 btn-primary relative">
                  Yearly
                  <span className="absolute -top-3 -right-3 text-[12px] bg-accent animate-bounce text-secondary-content px-1 py-0.5 rounded-full whitespace-nowrap">
                    40% OFF
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Free trial</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-base-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-base-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row justify-center gap-8">
            <div className="relative w-full max-w-lg">
              <div className="relative shadow-md flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg ">
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-secondary-content text-xs font-bold px-2 py-1 rounded-lg">
                    40% OFF
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">Starter</p>
                    <p className="text-base-content/80 mt-2">
                      Best for beginner creators
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-end gap-1">
                    <p className="text-5xl tracking-tight font-extrabold">
                      $5<span className="text-2xl align-super">.33</span>
                    </p>
                    <div className="flex flex-col justify-end mb-1">
                      <p className="text-xs text-base-content/60 uppercase font-semibold">
                        <span className="text-lg font-normal lowercase">
                          /month
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-base-content/80">
                      Billed as $64/year
                    </p>
                    <p className="text-sm text-success">
                      Save $44 with yearly pricing
                      <span className="ml-1 text-xs">(40% off)</span>
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      <span className="font-bold">
                        5 connected social accounts
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited posts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Schedule posts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Carousel posts</span>
                  </li>
                </ul>
                <div className="space-y-2">
                  <button className="btn btn-primary btn-block group">
                    <div className="flex items-center justify-center gap-2">
                      Start 7 day free trial →
                    </div>
                  </button>
                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-primary/70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    $0.00 due today, cancel anytime
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-lg">
              <div className="relative shadow-md flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg border-2 border-primary shadow-xl">
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-secondary-content text-xs font-bold px-2 py-1 rounded-lg">
                    40% OFF
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">
                      Creator
                      <span className="ml-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-xl">
                        Most popular
                      </span>
                    </p>
                    <p className="text-base-content/80 mt-2">
                      Best for growing creators
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-end gap-1">
                    <p className="text-5xl tracking-tight font-extrabold">
                      $10<span className="text-2xl align-super">.75</span>
                    </p>
                    <div className="flex flex-col justify-end mb-1">
                      <p className="text-xs text-base-content/60 uppercase font-semibold">
                        <span className="text-lg font-normal lowercase">
                          /month
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-base-content/80">
                      Billed as $129/year
                    </p>
                    <p className="text-sm text-success">
                      Save $87 with yearly pricing
                      <span className="ml-1 text-xs">(40% off)</span>
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      <span className="font-bold">
                        15 connected social accounts
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited posts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Schedule posts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Carousel posts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Content studio access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Limited growth consulting</span>
                    <div
                      className="tooltip"
                      data-tip="Direct communication line to help you grow your accounts (from 100M+ views of experience)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                  </li>
                </ul>
                <div className="space-y-2">
                  <button className="btn btn-primary btn-block group">
                    <div className="flex items-center justify-center gap-2">
                      Start 7 day free trial →
                    </div>
                  </button>
                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-primary/70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    $0.00 due today, cancel anytime
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-lg">
              <div className="relative shadow-md flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg ">
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-secondary-content text-xs font-bold px-2 py-1 rounded-lg">
                    40% OFF
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">
                      Pro
                      <span className="ml-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-xl">
                        Best deal
                      </span>
                    </p>
                    <p className="text-base-content/80 mt-2">
                      Best for scaling brands
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-end gap-1">
                    <p className="text-5xl tracking-tight font-extrabold">
                      $16<span className="text-2xl align-super">.17</span>
                    </p>
                    <div className="flex flex-col justify-end mb-1">
                      <p className="text-xs text-base-content/60 uppercase font-semibold">
                        <span className="text-lg font-normal lowercase">
                          /month
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-base-content/80">
                      Billed as $194/year
                    </p>
                    <p className="text-sm text-success">
                      Save $130 with yearly pricing
                      <span className="ml-1 text-xs">(40% off)</span>
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      <span className="font-bold">
                        <span className="bg-gradient-to-r from-primary via-black to-primary bg-clip-text text-transparent animate-gradient">
                          Unlimited connected accounts
                        </span>
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited posts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Schedule posts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Carousel posts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Content studio access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[18px] h-[18px] opacity-80 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Priority growth consulting</span>
                    <div
                      className="tooltip"
                      data-tip="Direct communication line to help you grow your accounts (from 100M+ views of experience)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                  </li>
                </ul>
                <div className="space-y-2">
                  <button className="btn btn-primary btn-block group">
                    <div className="flex items-center justify-center gap-2">
                      Start 7 day free trial →
                    </div>
                  </button>
                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-primary/70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    $0.00 due today, cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 px-4">
            <div className="flex items-center gap-3 text-base-content/80">
              <span className="font-medium">Post to:</span>
              <div className="flex items-center gap-4">
                <div className="relative w-6 h-6 tooltip" data-tip="Twitter/X">
                  <img
                    alt="Twitter/X"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/x.svg"
                  />
                </div>
                <div className="relative w-6 h-6 tooltip" data-tip="Instagram">
                  <img
                    alt="Instagram"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/instagram.svg"
                  />
                </div>
                <div className="relative w-6 h-6 tooltip" data-tip="LinkedIn">
                  <img
                    alt="LinkedIn"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/linkedin.svg"
                  />
                </div>
                <div className="relative w-6 h-6 tooltip" data-tip="Facebook">
                  <img
                    alt="Facebook"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/facebook.svg"
                  />
                </div>
                <div className="relative w-6 h-6 tooltip" data-tip="TikTok">
                  <img
                    alt="TikTok"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/tiktok.svg"
                  />
                </div>
                <div className="relative w-6 h-6 tooltip" data-tip="YouTube">
                  <img
                    alt="YouTube"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/youtube.svg"
                  />
                </div>
                <div className="relative w-6 h-6 tooltip" data-tip="Bluesky">
                  <img
                    alt="Bluesky"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/bluesky.svg"
                  />
                </div>
                <div className="relative w-6 h-6 tooltip" data-tip="Threads">
                  <img
                    alt="Threads"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/threads.svg"
                  />
                </div>
                <div className="relative w-6 h-6 tooltip" data-tip="Pinterest">
                  <img
                    alt="Pinterest"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    style={convertStyleStringToObject(
                      "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                    )}
                    src="/icons/pinterest.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-200" id="faq">
        <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex flex-col text-left basis-1/2">
            <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
            <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
              Frequently Asked Questions
            </p>
          </div>
          <ul className="basis-1/2">
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content ">
                  What social platforms do you support?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden"
                style={convertStyleStringToObject("max-height:0;opacity:0")}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    Currently we support Twitter/X, Instagram, LinkedIn,
                    Facebook, TikTok, YouTube, Bluesky, Threads, Pinterest for
                    scheduled posting and instant posting. To see all platforms
                    we offer and that are coming soon{" "}
                    <Link
                      href="/#platforms"
                      className="text-primary hover:underline"
                    >
                      click here
                    </Link>
                    . If you have a request please feel free to email us.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content ">
                  How many social accounts can I connect?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden"
                style={convertStyleStringToObject("max-height:0;opacity:0")}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    Depends on your plan, see the pricing section for more
                    details... You will not find a more fair price anywhere
                    else.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content ">
                  What is a social account?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden"
                style={convertStyleStringToObject("max-height:0;opacity:0")}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    Social accounts are accounts of supported social media
                    platforms. For example: Connecting your instagram account =
                    connecting 1 social account.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content ">
                  How many posts can I make and schedule per month?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden"
                style={convertStyleStringToObject("max-height:0;opacity:0")}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    Unlimited for paying users. 5 for free users. 1 post to 4
                    platforms = 4 posts total.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content ">
                  Will my posts get less reach using this app?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden"
                style={convertStyleStringToObject("max-height:0;opacity:0")}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-4 leading-relaxed">
                    <div>
                      <b>
                        No, you will have the same reach as if you posted
                        manually
                      </b>
                      . We understand you may be wary that the algorithm favors
                      manual posting, we were too! However, under our own
                      testing we have found no difference in reach between
                      manual posting and posting from post bridge.
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                      <img
                        alt="Proof of views comparison"
                        loading="lazy"
                        width="250"
                        height="150"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-lg"
                        style={convertStyleStringToObject(
                          "color:transparent;width:100%;height:auto"
                        )}
                        sizes="100vw"
                        srcSet="/_next/image?url=%2FproofOfViews.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2FproofOfViews.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2FproofOfViews.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2FproofOfViews.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2FproofOfViews.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2FproofOfViews.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2FproofOfViews.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2FproofOfViews.png&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=%2FproofOfViews.png&amp;w=3840&amp;q=75"
                      />
                      <img
                        alt="views with post bridge testimonial"
                        loading="lazy"
                        width="500"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-lg"
                        style={convertStyleStringToObject(
                          "color:transparent;width:100%;height:auto"
                        )}
                        sizes="100vw"
                        srcSet="/_next/image?url=%2FviewsProof.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2FviewsProof.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2FviewsProof.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2FviewsProof.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2FviewsProof.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2FviewsProof.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2FviewsProof.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2FviewsProof.png&amp;w=3840&amp;q=75 3840w"
                        src="/_next/image?url=%2FviewsProof.png&amp;w=3840&amp;q=75"
                      />
                    </div>
                    <div>
                      Also checkout our blog post{" "}
                      <Link
                        href="/blog/social-media-best-practices"
                        className="text-primary hover:underline"
                      >
                        here
                      </Link>{" "}
                      to make sure you are using a warm account with best
                      practices for getting your content to go viral.
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content ">
                  Can I cancel anytime?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden"
                style={convertStyleStringToObject("max-height:0;opacity:0")}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    Yes, theres no lock-in and you can cancel your subscription
                    at anytime of the month. When cancelling it will cancel at
                    the end of your current billing period; you can still use
                    the pro features until the end of your billing period.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content ">
                  Can I get a refund?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden"
                style={convertStyleStringToObject("max-height:0;opacity:0")}
              >
                <div className="pb-5 leading-relaxed">
                  <p>
                    Yes! You can request a refund within 7 days of being
                    charged. Just reach out by email in this time frame.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content ">
                  I have another question
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden"
                style={convertStyleStringToObject("max-height:0;opacity:0")}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    Cool, contact us by email: jack@frikit.net 👋
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="relative hero overflow-hidden min-h-screen">
        <img
          alt="Background"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="object-cover w-full"
          style={convertStyleStringToObject(
            "position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
          )}
          sizes="100vw"
          srcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611926653458-09294b3142bf%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611926653458-09294b3142bf%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611926653458-09294b3142bf%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611926653458-09294b3142bf%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611926653458-09294b3142bf%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611926653458-09294b3142bf%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611926653458-09294b3142bf%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611926653458-09294b3142bf%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&amp;w=3840&amp;q=75 3840w"
          src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611926653458-09294b3142bf%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&amp;w=3840&amp;q=75"
        />
        <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
        <div className="relative hero-content text-center text-neutral-content p-8">
          <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
            <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
              Get more views, with less effort
            </h2>
            <p className="text-lg opacity-80 mb-12 md:mb-16">
              Post to all platforms in 30 seconds instead of 30 minutes.
            </p>
            <Link href="/dashboard" className="btn btn-primary btn-wide">
              Try for free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
