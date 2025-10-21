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

export default function TermOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto py-8">
        <div className="rounded-lg m-1 border bg-[#ffffff] text-card-foreground w-full max-w-4xl mx-auto">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-l text-3xl font-bold">Terms of Service</h3>
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
                      1. Acceptance of Terms
                    </h2>
                    <p>
                      By using our service, you agree to these Terms of Service
                      and our Privacy Policy.
                    </p>
                    <h2 className="text-2xl font-semibold">
                      2. Description of Service
                    </h2>
                    <p>
                      Our service provides social media management and
                      scheduling tools for platforms including but not limited
                      to Twitter/X, LinkedIn, Bluesky, Threads, Pinterest,
                      Instagram, Facebook, TikTok, and YouTube.
                    </p>
                    <h2 className="text-2xl font-semibold">
                      3. Account Registration
                    </h2>
                    <p>
                      You must create an account and provide accurate
                      information to use our service. You are responsible for
                      maintaining the security of your account.
                    </p>
                    <h2 className="text-2xl font-semibold">
                      4. Social Media Connections
                    </h2>
                    <p>
                      By connecting your social media accounts, you authorize us
                      to access, store, and use your account information as
                      described in our Privacy Policy.
                    </p>
                    <h2 className="text-2xl font-semibold">5. User Content</h2>
                    <p>
                      You retain ownership of the content you post through our
                      service. By uploading or creating content through our
                      service, you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Confirm that you own or have the necessary rights and
                        permissions to use all content you upload
                      </li>
                      <li>
                        Grant us a worldwide, non-exclusive, royalty-free
                        license to use, modify, and distribute your content as
                        necessary to provide the service
                      </li>
                      <li>
                        Understand that we do not permit uploading of
                        copyrighted content without proper authorization
                      </li>
                      <li>
                        Agree that we reserve the right to remove any content
                        that infringes on intellectual property rights or
                        violates our terms
                      </li>
                      <li>
                        Accept responsibility for any claims resulting from your
                        content
                      </li>
                    </ul>
                    <h2 className="text-2xl font-semibold">6. DMCA Policy</h2>
                    <p>
                      We respect intellectual property rights and comply with
                      the Digital Millennium Copyright Act (DMCA). If you
                      believe your copyrighted work has been used without
                      authorization:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Send DMCA takedown notices to: dmca@postsbridge.com
                      </li>
                      <li>
                        Include: description of work, location on our service,
                        your contact information, and statement of good faith
                        belief
                      </li>
                      <li>
                        We will respond to legitimate requests by removing or
                        disabling access to the content
                      </li>
                      <li>
                        Users may submit counter-notices if content was removed
                        in error
                      </li>
                    </ul>
                    <h2 className="text-2xl font-semibold">
                      7. Prohibited Activities
                    </h2>
                    <p>
                      You agree not to use our service for any unlawful purpose
                      or in violation of any social media platform&lsquo;s terms
                      of service.
                    </p>
                    <h2 className="text-2xl font-semibold">
                      8. Payment and Subscription
                    </h2>
                    <p>
                      We offer various subscription plans. You agree to pay all
                      fees associated with your chosen plan. Fees are
                      non-refundable except as required by law.
                    </p>
                    <h2 className="text-2xl font-semibold">
                      9. Cancellation and Termination
                    </h2>
                    <p>
                      You may cancel your subscription at any time. We reserve
                      the right to terminate or suspend your account for
                      violations of these Terms.
                    </p>
                    <h2 className="text-2xl font-semibold">
                      10. Limitation of Liability
                    </h2>
                    <p>
                      We are not responsible for the content you post or any
                      consequences resulting from your use of social media
                      platforms through our service.
                    </p>
                    <h2 className="text-2xl font-semibold">
                      11. Changes to Terms
                    </h2>
                    <p>
                      We may modify these Terms of Service at any time.
                      Continued use of the service constitutes acceptance of the
                      modified terms.
                    </p>
                    <h2 className="text-2xl font-semibold">12. Contact</h2>
                    <p>
                      If you have any questions about these Terms, please
                      contact us at contact@postsbridge.com.
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
