import Link from "next/link";

// function convertStyleStringToObject(styleString: string) {
//   const styleObject: { [key: string]: string } = {};

//   styleString.split(";").forEach((style) => {
//     if (style.trim()) {
//       const [property, value] = style.split(":");
//       if (property && value) {
//         const camelCaseProperty = property
//           .trim()
//           .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()); // Convert to camelCase
//         styleObject[camelCaseProperty] = value.trim();
//       }
//     }
//   });

//   return styleObject;
// }

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-1 items-center">
            <Link className="inline-flex" aria-label="SiteToSocials" href="/">
              {/* <img
                alt="AutoWordpress"
                width="141"
                height="35"
                decoding="async"
                data-nimg="1"
                src="/landing/images/socialrails-logo-4.svg"
                style={convertStyleStringToObject("color: transparent;")}
              /> */}
              <b>AutoWordpress</b>
            </Link>
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <Link
                  className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 transition duration-150 ease-in-out hover:underline"
                  href="/#social-connections"
                >
                  How It Works
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 transition duration-150 ease-in-out hover:underline"
                  href="/#pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 transition duration-150 ease-in-out hover:underline"
                  href="/#faq"
                >
                  FAQ
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 transition duration-150 ease-in-out hover:underline"
                  href="/affiliate-program"
                >
                  Become an Affiliate
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
                href="/signin"
              >
                Login
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link
                className="btn-sm bg-gradient-to-t from-blue-600 to-blue-500 text-white shadow hover:bg-blue-400"
                href="/signin"
              >
                Start Now <span className="hidden xl:inline-block ml-1">→</span>
              </Link>
            </li>
          </ul>
          <div className="flex md:hidden">
            <button
              className="group inline-flex h-8 w-8 items-center justify-center bg-white text-center text-gray-800 transition false"
              aria-controls="mobile-nav"
              aria-expanded="false"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="pointer-events-none fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] translate-x-[7px] group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:translate-y-0 group-[[aria-expanded=true]]:translate-x-0"
                  y="7"
                  x="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-expanded=true]]:rotate-45"
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:translate-y-0"
                  y="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
              </svg>
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
}
