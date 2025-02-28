import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div
        className={`flex flex-row justify-center w-full ${openSans.className}`}
      >
        <div className="text-tertiary w-full max-w-[800px] px-4 lg:px-10 py-24">
          {/* Hero */}
          <section className="overflow-hidden">
            <div className="mx-auto flex flex-col items-center pb-24 pt-16">
              <div className="text-center">
                <h1 className="text-4xl pb-16 font-light tracking-tight">
                  Terms and Conditions
                </h1>

                <p className="mt-2 font-light text-xl">
                  Understand the rules for using Resonate HQ services.
                </p>
                <p className="mt-2 font-light text-xl">
                  Last updated November 15, 2024
                </p>
              </div>
            </div>
          </section>

          {/* Terms and Conditions Content */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl flex">
              <div className="flex flex-col text-left w-full px-4">
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-3xl pb-2">
                    1. Introduction
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    These Terms and Conditions (&quot;Terms&quot;) govern your
                    use of the Resonate HQ website, software, and services. By
                    accessing or using our services, you agree to comply with
                    these Terms.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl pb-2">
                    2. Intellectual Property
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    All content, including text, graphics, and software, is the
                    property of Resonate HQ or its licensors. You may not use,
                    reproduce, or distribute our content without explicit
                    permission.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl pb-2">
                    3. User Conduct
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    You agree not to use our services for unlawful activities or
                    to violate the rights of others. This includes, but is not
                    limited to, engaging in activities such as hacking,
                    spamming, or infringing on intellectual property.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl pb-2">
                    4. Limitations of Liability
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    Resonate HQ is not liable for any damages arising from your
                    use of our services. Our services are provided &quot;as
                    is&quot; and without warranties of any kind.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl pb-2">
                    5. Termination
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    We reserve the right to suspend or terminate your access to
                    our services at our sole discretion if you violate these
                    Terms.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl  pb-2">
                    6. Changes to Terms
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    Resonate HQ may update these Terms from time to time. Any
                    changes will be posted on this page with an updated
                    effective date.
                  </p>
                </div>
                <div className="lg:pt-12 pb-8">
                  <h3 className="text-lg font-semibold md:text-2xl  pb-2">
                    7. Contact Us
                  </h3>
                  <p className="text-lg mt-3 font-light">
                    For questions or concerns about these Terms, please contact
                    us at{" "}
                    <span className="font-semibold">
                      contact@resonatehq.com
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
