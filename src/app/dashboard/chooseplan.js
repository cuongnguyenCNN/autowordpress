import Link from "next/link";
import { useState } from "react";
const ChoosePlan = () => {
  const [isYearly, setIsYearly] = useState(true);
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 9,
      yearlyPrice: 7.5, // Giving 2 months free if billed annually
      description: "Grow your reach the easy way",
      accounts: 5,
    },
    {
      name: "Creator",
      monthlyPrice: 18,
      yearlyPrice: 15,
      description: "Create once, post everywhere",
      accounts: 15,
    },
    {
      name: "Pro",
      monthlyPrice: 36,
      yearlyPrice: 30,
      description: "Grow all your accounts, all at once",
      accounts: "Unlimited",
    },
  ];
  return (
    <div class="flex-1 transition-all duration-300 ease-in-out ml-64 p-6 content-dashboard">
      <div class="max-w-5xl mx-auto">
        <div class="">
          <section class="bg-base-150 overflow-hidden" id="pricing">
            <div class="py-8 px-8 max-w-6xl mx-auto">
              <div class="flex flex-col text-center w-full mb-6">
                <Link
                  class="btn btn-ghost btn-sm p-0 hover:bg-transparent mb-4 mobile-button"
                  href="/dashboard"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </Link>
                <h2 class="font-bold text-3xl lg:text-5xl tracking-tight mb-8">
                  Choose your plan
                </h2>
                <div class="flex justify-center mt-8">
                  <div class="join border border-base-content/20 rounded-full bg-base-100 p-1 w-64">
                    <button
                      className={`btn btn-sm join-item flex-1 ${
                        isYearly ? "btn-ghost" : "btn-primary"
                      }`}
                      onClick={() => setIsYearly(false)}
                    >
                      Monthly
                    </button>
                    <button
                      className={`btn btn-sm join-item flex-1 relative ${
                        isYearly ? "btn-primary" : "btn-ghost"
                      }`}
                      onClick={() => setIsYearly(true)}
                    >
                      Yearly
                      <span class="absolute -top-3 -right-3 text-[10px] bg-secondary/70 text-secondary-content px-1 py-0.5 rounded-full whitespace-nowrap">
                        2 months free
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="relative flex justify-center gap-8 flex-col md:flex-row">
                <div class="relative w-full max-w-lg mx-auto">
                  <div class="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                    <div class="flex justify-between items-center gap-4">
                      <div>
                        <p class="text-lg lg:text-xl font-bold">Starter</p>
                        <p class="text-base-content/80 mt-2">
                          Grow your reach the easy way
                        </p>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <p class="text-5xl tracking-tight font-extrabold">
                        $
                        {isYearly
                          ? plans[0].yearlyPrice
                          : plans[0].monthlyPrice}
                      </p>
                      <div class="flex flex-col justify-end mb-[4px]">
                        <p class="text-xs text-base-content/60 uppercase font-semibold">
                          <span class="text-lg font-normal lowercase">
                            /month
                          </span>
                        </p>
                        {isYearly && (
                          <p class="text-xs text-base-content/60">
                            billed annually
                          </p>
                        )}
                      </div>
                    </div>
                    <ul class="space-y-2.5 leading-relaxed text-base flex-1">
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>5 connected social accounts</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Unlimited instant posts</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Unlimited scheduled posts</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Unlimited potential views</span>
                      </li>
                    </ul>
                    <div class="space-y-2">
                      <button class="btn btn-primary btn-block group">
                        <svg
                          class="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
                          viewBox="0 0 375 509"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z"></path>
                        </svg>
                        Get post bridge
                      </button>
                      <p class="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                        Start posting instantly. Go viral asap 📈
                      </p>
                    </div>
                  </div>
                </div>
                <div class="relative w-full max-w-lg mx-auto">
                  <div class="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                    <div class="flex justify-between items-center gap-4">
                      <div>
                        <p class="text-lg lg:text-xl font-bold">Creator</p>
                        <p class="text-base-content/80 mt-2">
                          Create once, post everywhere
                        </p>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <p class="text-5xl tracking-tight font-extrabold">
                        $
                        {isYearly
                          ? plans[1].yearlyPrice
                          : plans[1].monthlyPrice}
                      </p>
                      <div class="flex flex-col justify-end mb-[4px]">
                        <p class="text-xs text-base-content/60 uppercase font-semibold">
                          <span class="text-lg font-normal lowercase">
                            /month
                          </span>
                        </p>
                        {isYearly && (
                          <p class="text-xs text-base-content/60">
                            billed annually
                          </p>
                        )}
                      </div>
                    </div>
                    <ul class="space-y-2.5 leading-relaxed text-base flex-1">
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>15 connected social accounts</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Unlimited instant posts</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Unlimited scheduled posts</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Unlimited potential views</span>
                      </li>
                    </ul>
                    <div class="space-y-2">
                      <button class="btn btn-primary btn-block group">
                        <svg
                          class="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
                          viewBox="0 0 375 509"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z"></path>
                        </svg>
                        Get post bridge
                      </button>
                      <p class="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                        Start posting instantly. Go viral asap 📈
                      </p>
                    </div>
                  </div>
                </div>
                <div class="relative w-full max-w-lg mx-auto">
                  <div class="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                    <div class="flex justify-between items-center gap-4">
                      <div>
                        <p class="text-lg lg:text-xl font-bold">Pro</p>
                        <p class="text-base-content/80 mt-2">
                          Grow all your accounts, all at once
                        </p>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <p class="text-5xl tracking-tight font-extrabold">
                        $
                        {isYearly
                          ? plans[2].yearlyPrice
                          : plans[2].monthlyPrice}
                      </p>
                      <div class="flex flex-col justify-end mb-[4px]">
                        <p class="text-xs text-base-content/60 uppercase font-semibold">
                          <span class="text-lg font-normal lowercase">
                            /month
                          </span>
                        </p>
                        {isYearly && (
                          <p class="text-xs text-base-content/60">
                            billed annually
                          </p>
                        )}
                      </div>
                    </div>
                    <ul class="space-y-2.5 leading-relaxed text-base flex-1">
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Unlimited connected social accounts</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Unlimited instant posts</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Unlimited scheduled posts</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Unlimited potential views</span>
                      </li>
                    </ul>
                    <div class="space-y-2">
                      <button class="btn btn-primary btn-block group">
                        <svg
                          class="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
                          viewBox="0 0 375 509"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z"></path>
                        </svg>
                        Get post bridge
                      </button>
                      <p class="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                        Start posting instantly. Go viral asap 📈
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-20">
                <h3 class="text-2xl font-bold text-center mb-8">
                  Frequently Asked Questions
                </h3>
                <div class="space-y-4">
                  <div class="collapse collapse-plus bg-base-100">
                    <input type="radio" name="my-accordion-3" />
                    <div class="collapse-title text-xl font-medium">
                      How many posts can I post and schedule?
                    </div>
                    <div class="collapse-content">
                      <p>
                        Unlimited posts and scheduled posts on all paid plans. 5
                        posts free /month for free users.
                      </p>
                    </div>
                  </div>
                  <div class="collapse collapse-plus bg-base-100">
                    <input type="radio" name="my-accordion-3" />
                    <div class="collapse-title text-xl font-medium">
                      How can I request a new feature?
                    </div>
                    <div class="collapse-content">
                      <p>
                        Add it to our public suggestion board:{" "}
                        <Link
                          href="https://insigh.to/b/post-bridge"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-primary hover:underline"
                          previewlistener="true"
                        >
                          https://insigh.to/b/post-bridge
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div class="collapse collapse-plus bg-base-100">
                    <input type="radio" name="my-accordion-3" />
                    <div class="collapse-title text-xl font-medium">
                      Can I cancel my subscription anytime?
                    </div>
                    <div class="collapse-content">
                      <p>
                        Yes, you can cancel your Pro subscription at any time.
                        You will continue to have Pro access until the end of
                        your current billing period.
                      </p>
                    </div>
                  </div>
                  <div class="collapse collapse-plus bg-base-100">
                    <input type="radio" name="my-accordion-3" />
                    <div class="collapse-title text-xl font-medium">
                      How many accounts can I have connected to post bridge?
                    </div>
                    <div class="collapse-content">
                      <p>
                        Starter plan: 5 accounts // Creator plan: 15 accounts //
                        Pro plan: Unlimited accounts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
