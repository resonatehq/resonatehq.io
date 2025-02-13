import VideoEmbed from "@/components/VideoEmbed";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function RSVP() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[800px] px-4 lg:px-10">
          <section className="overflow-hidden">
            <div className="mx-auto flex flex-col items-center pb-24 pt-16">
              <div className="text-center text-slate-700">
                <h1 className="text-4xl pb-16 font-light tracking-tight sm:text-8xl">
                  RSVP
                </h1>

                <p className="font-light text-xl sm:text-2xl">
                  Répondez s'il vous plaît to the next community event
                </p>
                <Image
                  src="/images/broadcast-mic.svg"
                  alt="Icon"
                  className="w-10 h-10 mx-auto my-4"
                  height="512"
                  width="512"
                />
              </div>
              <iframe
                className="w-full h-[1250px]"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdn41RZfpCIPBWJufwZUEYROXEIj5Cf4cgRDoKUIVFyzr-60Q/viewform?embedded=true"
              >
                Loading…
              </iframe>
            </div>
          </section>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[1200px] px-4 lg:px-10">
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
