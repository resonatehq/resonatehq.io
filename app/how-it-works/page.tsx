import VideoEmbed from "@/components/VideoEmbed";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ComparisonGrid from "@/components/ComparisonGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[800px] px-4 lg:px-10">
          <section className="overflow-hidden">
            <div className="mx-auto flex flex-col items-center pb-24 pt-16">
              <div className="text-center text-slate-700">
                <h1 className="text-6xl pb-16 font-light tracking-tight sm:text-8xl">
                  How it works
                </h1>

                <p className="font-light text-2xl">
                  Resonate is built on the Distributed Async Await open
                  specification.
                </p>
                <Image
                  src="/images/compass.svg"
                  alt="Icon"
                  className="w-10 h-10 mx-auto my-4"
                  height="512"
                  width="512"
                />
              </div>
            </div>
          </section>

          <ComparisonGrid />
          {/* Video */}

          <section>
            <VideoEmbed />
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
