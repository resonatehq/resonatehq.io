import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MailchimpForm from "@/components/MailchimpForm";
import Image from "next/image";

const benefits = [
  "Annoucements",
  "Blog posts",
  "Webinar notifications",
  "Tutorials",
  "And more!",
];

export default function Features() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[1600px] px-4 lg:px-10">
          {/* Hero */}
          <section className="overflow-hidden">
            <div className="mx-auto flex flex-col items-center pt-16 text-slate-700">
              <div className="text-center">
                <h1 className="text-4xl pb-16 font-light tracking-tight sm:text-8xl">
                  Subscribe
                </h1>

                <p className="mt-2 font-light text-xl sm:text-2xl">
                  What do you get when you subscribe to Resonate HQ ?
                </p>
                <Image
                  src="/images/mail.svg"
                  alt="Icon"
                  className="w-10 h-10 mx-auto my-4"
                  height="512"
                  width="512"
                />
                <div className="text-left mt-12 px-12 text-center">
                  {benefits.map((benefit, index) => (
                    <p
                      key={index}
                      className="text-xl sm:text-2xl mt-3 font-light"
                    >
                      {benefit}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <iframe
        className="border-1 border-gray-300 bg-white mx-auto"
        src="https://resonatehqio.substack.com/embed"
        width="480"
        height="320"
      ></iframe>

      <div className="lg:pt-48 md:pt-24 pb-12"></div>
      <Footer />
    </div>
  );
}
