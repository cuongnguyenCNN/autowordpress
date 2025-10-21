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

export default function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-8 sm:grid-cols-12 md:py-12 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]">
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
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
                AutoWordpress
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              © AutoWordpress - All rights reserved.
            </div>
          </div>
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/#features"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/#pricing"
                >
                  Pricing &amp; Plans
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/#faq"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/affiliate-program"
                >
                  Become an Affiliate
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/free-tools"
                >
                  Free Tools
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="./terms-of-service/"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="./privacy-policy/"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  className="text-gray-600 text-sm transition hover:text-gray-900"
                  href="mailto:contact@AutoWordpress.com?subject=Contact%AutoWordpress"
                >
                  contact@postsbridge.com
                </Link>
              </li>
              <li className="flex gap-3">
                <Link
                  className="flex items-center text-sm justify-center text-black-500 transition hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  href="#"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.5-1.4-1.2s.6-1.2 1.4-1.2 1.4.5 1.4 1.2-.6 1.2-1.4 1.2zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.7h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z"></path>
                  </svg>
                </Link>
                <Link
                  className="flex items-center text-sm justify-center text-black-500 transition hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter/X"
                  href="#"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>
      {/* <div className="relative -mt-26 h-60 w-full -z-10" aria-hidden="true"> */}
      {/* <div className="mt-5 pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[88px] max-sm:text-[44px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['SocialRails'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['SocialRails'] after:[text-shadow:0_1px_0_white]"></div> */}
      {/* <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3 max-sm:scale-75"
          aria-hidden="true"
        >
          <div className="h-50 w-56 rounded-full border-[20px] border-blue-700 blur-[80px] will-change-[filter]"></div>
        </div>
      </div> */}
      <div className="text-center text-2xl bg-gray-300 py-5">
        Let contact on{" "}
        <a
          href="https://t.me/cuongnguyencnn1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-200"
        >
          Telegram
        </a>{" "}
        to buy source AutoWordpress.
      </div>
    </footer>
  );
}
