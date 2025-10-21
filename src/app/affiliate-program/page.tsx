//import Link from "next/link";

import Footer from "@/src/components/footer";
import Header from "@/src/components/header";

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

export default function AffiliateProgram() {
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
        <div className="pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="animate-fade-in">
                <h1 className="text-4xl mt-4 font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
                  AutoWordpress Affiliate Program
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-8">
                  Join Our Affiliate Program And Earn 50% Recurring Commission
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-11 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                  Become an Affiliate
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
                    className="lucide lucide-arrow-right ml-2 h-5 w-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
              <div className="mt-4 animate-fade-in max-w-2xl mx-auto">
                <img
                  alt="AutoWordpress Affiliate Program"
                  fetchPriority="high"
                  width="800"
                  height="800"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  src="https://illustrations.popsy.co/blue/Shaking-hands.svg"
                  style={convertStyleStringToObject("color: transparent;")}
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How The AutoWordpress Referral Program Works
              </h2>
              <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                Earn 50% recurring commission for every customer you refer to
                AutoWordpress. We handle the product, support, and billing - you
                focus on spreading the word and earning passive income.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4">
                  <div className="text-green-500 bg-white p-3 rounded-lg shadow-sm">
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
                      className="lucide lucide-dollar-sign h-6 w-6"
                    >
                      <line x1="12" x2="12" y1="2" y2="22"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Commission
                    </h3>
                    <p className="text-gray-600">
                      50% recurring commission on all referrals
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4">
                  <div className="text-blue-500 bg-white p-3 rounded-lg shadow-sm">
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
                      className="lucide lucide-clock h-6 w-6"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Cookie Duration
                    </h3>
                    <p className="text-gray-600">30-days attribution window</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4">
                  <div className="text-purple-500 bg-white p-3 rounded-lg shadow-sm">
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
                      className="lucide lucide-mouse-pointer-click h-6 w-6"
                    >
                      <path d="m9 9 5 12 1.8-5.2L21 14Z"></path>
                      <path d="M7.2 2.2 8 5.1"></path>
                      <path d="m5.1 8-2.9-.8"></path>
                      <path d="M14 4.1 12 6"></path>
                      <path d="m6 12-1.9 2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Click Attribution
                    </h3>
                    <p className="text-gray-600">
                      First-Click attribution model
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4">
                  <div className="text-orange-500 bg-white p-3 rounded-lg shadow-sm">
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
                      className="lucide lucide-credit-card h-6 w-6"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Payment Terms
                    </h3>
                    <p className="text-gray-600">Net-30 payment schedule</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-16">
              <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Why Become an Affiliate?
                </h2>
                <p className="text-xl text-gray-600">
                  Simple program, high commissions, automated monthly payouts
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Recurring Revenue
                  </h3>
                  <p className="text-gray-600">
                    Earn 50% commission every month for the first 12 months of
                    your referred customers
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Easy to Join
                  </h3>
                  <p className="text-gray-600">
                    Simple signup process and instant approval through our
                    partner Endorsely
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Automated Payouts
                  </h3>
                  <p className="text-gray-600">
                    Get paid automatically every month through Stripe Connect
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mb-16 animate-fade-in">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Start Earning?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join our affiliate program today and start earning 50%
                  recurring commission
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-11 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full">
                  Sign Up Now
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
                    className="lucide lucide-arrow-right ml-2 h-5 w-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
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
