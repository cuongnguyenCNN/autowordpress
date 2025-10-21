//import Link from "next/link";

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

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto py-8">
        <div className="rounded-lg m-1 border bg-[#ffffff] text-card-foreground w-full max-w-4xl mx-auto">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-l text-3xl font-bold">Privacy Policy</h3>
          </div>
          <div className="p-6 pt-0">
            <div
              dir="ltr"
              className="relative overflow-hidden h-[200vh]"
              style={convertStyleStringToObject(
                "position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
              )}
            >
              <div
                data-radix-scroll-area-viewport=""
                className="h-full w-full rounded-[inherit]"
                style={convertStyleStringToObject("overflow: hidden scroll;")}
              >
                <div
                  style={convertStyleStringToObject(
                    "min-width: 100%; display: table;"
                  )}
                >
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      1. Information We Collect
                    </h2>
                    <p>
                      We collect information you provide directly to us,
                      including personal information and social media account
                      access tokens when you connect your accounts (Twitter/X,
                      LinkedIn, Bluesky, Threads, Pinterest, Instagram,
                      Facebook, TikTok, and YouTube). For Google accounts, we
                      collect basic profile information and access tokens
                      required for authentication.
                    </p>
                    <h3 className="text-xl font-semibold mt-4">
                      Analytics and Usage Data
                    </h3>
                    <p>
                      We use analytics services to understand how users interact
                      with our service:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Microsoft Clarity: Tracks user interactions, heatmaps,
                        and session recordings to improve user experience
                      </li>
                      <li>
                        Google Analytics: Collects anonymous usage data,
                        including page views, time spent on site, and user
                        behavior patterns
                      </li>
                      <li>
                        These services may use cookies and similar tracking
                        technologies to collect this information
                      </li>
                      <li>
                        You can opt out of analytics tracking through your
                        browser settings or using available opt-out tools
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-4">
                      User-Generated Content
                    </h3>
                    <p>When you upload content to our service:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        We collect and store the content you upload, including
                        images, videos, and audio files
                      </li>
                      <li>
                        We maintain logs of content uploads and modifications
                        for security and compliance purposes
                      </li>
                      <li>
                        Content metadata may be analyzed to improve our services
                        and ensure compliance with our terms
                      </li>
                      <li>
                        You can delete your uploaded content at any time through
                        your account settings
                      </li>
                    </ul>
                    <h2 className="text-2xl font-semibold">
                      2. Use of Information
                    </h2>
                    <p>
                      We use the collected information to provide our social
                      media management services, including viewing and posting
                      content on your behalf. For Google services, we use your
                      information strictly for authentication purposes and to
                      maintain your account security.
                    </p>
                    <h2 className="text-2xl font-semibold">
                      3. Data Storage and Sharing
                    </h2>
                    <p>We store user data securely in the following ways:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Non-sensitive user data is stored in our Supabase
                        database infrastructure
                      </li>
                      <li>
                        All access tokens and sensitive data are encrypted
                        before being stored in Supabase
                      </li>
                      <li>
                        Data is hosted on servers located in the United States
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-4">
                      Google User Data Handling
                    </h3>
                    <p>For Google/YouTube user data specifically:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        We explicitly affirm that we do not use any data
                        obtained through Google Workspace APIs to develop,
                        improve, or train generalized AI and/or machine learning
                        models
                      </li>
                      <li>
                        We store only basic profile information and encrypted
                        access tokens in Supabase, our database provider
                      </li>
                      <li>
                        We share, transfer, or disclose Google user data only
                        with the following parties and under these
                        circumstances:
                        <ul className="list-disc pl-6 mt-2">
                          <li>
                            Supabase (our database provider)
                            <ul className="list-disc pl-6 mt-1">
                              <li>
                                Purpose: Stores encrypted tokens and basic
                                profile data
                              </li>
                              <li>
                                Data shared: Encrypted access tokens, basic
                                profile information
                              </li>
                            </ul>
                          </li>
                          <li>
                            Cloudflare (our infrastructure provider)
                            <ul className="list-disc pl-6 mt-1">
                              <li>
                                Purpose: Processes authentication requests and
                                hosts our application
                              </li>
                              <li>
                                Data shared: Temporary access to user data
                                during request processing
                              </li>
                            </ul>
                          </li>
                          <li>
                            YouTube API Services
                            <ul className="list-disc pl-6 mt-1">
                              <li>
                                Purpose: To facilitate YouTube integration and
                                functionality
                              </li>
                              <li>
                                Data shared: Access tokens and necessary profile
                                data for API interactions
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        We do not sell, rent, or otherwise commercially transfer
                        Google user data to any third parties
                      </li>
                      <li>
                        Access to Google user data is strictly limited to
                        essential personnel for maintenance and support purposes
                      </li>
                      <li>
                        All third-party service providers are bound by strict
                        confidentiality obligations and data protection
                        requirements
                      </li>
                      <li>
                        Any additional sharing of Google user data will only
                        occur:
                        <ul className="list-disc pl-6 mt-2">
                          <li>With your explicit consent</li>
                          <li>When required by law or valid legal process</li>
                          <li>
                            To protect our rights, privacy, safety, or property
                          </li>
                          <li>
                            In connection with a business transfer or
                            acquisition (with notice to users)
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <h2 className="text-2xl font-semibold">
                      4. Data Sharing and Disclosure
                    </h2>
                    <p>
                      We may share your information in the following
                      circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        With third-party service providers who assist in
                        operating our service and require access to your
                        information to provide their services (such as hosting
                        providers and analytics services)
                      </li>
                      <li>
                        With social media platforms when you choose to connect
                        your accounts
                      </li>
                      <li>When required by law or to protect our rights</li>
                      <li>
                        In connection with a business transfer or acquisition
                      </li>
                    </ul>
                    <h2 className="text-2xl font-semibold">
                      5. Third-Party Services
                    </h2>
                    <p>
                      We integrate with various social media platforms. Your use
                      of these platforms through our service is subject to their
                      respective privacy policies.
                    </p>
                    <h2 className="text-2xl font-semibold">
                      6. Data Retention
                    </h2>
                    <p>
                      We retain your data for as long as your account is active
                      or as needed to provide you services. You can request data
                      deletion at any time.
                    </p>
                    <h2 className="text-2xl font-semibold">
                      7. Payment Information
                    </h2>
                    <p>
                      Payment details are processed securely by our payment
                      processor. We do not store complete credit card
                      information on our servers.
                    </p>
                    <h2 className="text-2xl font-semibold">8. Your Rights</h2>
                    <p>
                      You have the right to access, correct, or delete your
                      personal information and social media connections at any
                      time through your account settings.
                    </p>
                    <h2 className="text-2xl font-semibold">
                      9. Changes to This Policy
                    </h2>
                    <p>
                      We may update this privacy policy from time to time. We
                      will notify you of any changes by posting the new privacy
                      policy on this page.
                    </p>
                    <h2 className="text-2xl font-semibold">10. Contact Us</h2>
                    <p>
                      If you have any questions about this Privacy Policy,
                      please contact us at contact@postsbridge.com.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <Link className="text-blue-500 hover:underline" href="/">
            Back to Home
          </Link>
        </div>
      </div>
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
