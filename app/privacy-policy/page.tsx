import NavBar from "@/components/ResonateHQ";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-slate-700 w-full max-w-[1200px] px-4 lg:px-10">
          {/* Hero */}
          <section className="overflow-hidden">
            <div className="mx-auto flex flex-col items-center pb-24 pt-16">
              <div className="text-center">
                <h1 className="text-4xl pb-16 font-light tracking-tight sm:text-8xl">
                  Privacy Policy
                </h1>

                <p className="mt-2 font-light text-xl">
                  Learn how Resonate HQ protects your information.
                </p>
                <p className="mt-2 font-light text-xl">
                  Last updated November 15, 2024
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy Content */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl flex">
              <div className="flex flex-col text-left w-full px-4">
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl  pb-2">
                    1. Information We Collect
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    Currently, we only collect non-personal information such as
                    browser type, operating system, and website usage data to
                    improve our website. Personal information (e.g., name,
                    email) is only collected if you choose to provide it.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl  pb-2">
                    2. How We Use Your Information
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    Information is used to enhance functionality, respond to
                    inquiries, and send updates about Resonate HQ with your
                    consent.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl pb-2">
                    3. How We Share Your Information
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    Your information is not sold or rented. It may be shared
                    with service providers for business operations or when
                    required by law.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl  pb-2">
                    4. Cookies and Analytics
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    We use cookies and third-party analytics tools to improve
                    our website. These tools collect information anonymously and
                    do not identify individual users.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl  pb-2">
                    5. Future Data Practices
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    As Resonate HQ evolves, we may collect additional data for
                    hosted services. Updates to our practices will be reflected
                    in this policy.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl  pb-2">
                    6. Your Rights and Choices
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    You have the right to access, correct, or delete your
                    personal information. You can also opt-out of communications
                    at any time.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl  pb-2">
                    7. Data Security
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    We implement reasonable measures to protect your
                    information, but no method is 100% secure.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl  pb-2">
                    8. Updates to This Policy
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    We may update this policy as needed. Changes will be posted
                    on this page with an updated effective date.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl  pb-2">
                    9. Contact Us
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    For questions about this policy, email us at{" "}
                    <span className="font-semibold">
                      contact@resonatehq.com
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
