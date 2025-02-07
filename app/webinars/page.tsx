import NavBar from "@/components/ResonateHQ";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Features() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[800px] lg:px-10">
          {/* Hero */}

          <section className="overflow-hidden">
            <div className="mx-auto flex flex-col items-center px-4 pb-24 pt-16">
              <div className="text-center text-slate-700">
                <h1 className="text-4xl pb-16 font-light tracking-tight sm:text-8xl">
                  Webinars
                </h1>

                <p className="font-light text-xl sm:text-2xl">
                  RSVP to one of our upcoming webinars.
                </p>
              </div>
              <div className="mx-auto flex flex-col items-center"></div>
              <Image
                src="/images/broadcast-mic.svg"
                alt="Icon"
                className="w-10 h-10 mx-auto my-4"
                width="512"
                height="512"
              />
            </div>
          </section>
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex mb-24">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12 text-slate-700">
                  <h2 className="text-2xl sm:text-4xl pb-2">
                    February 6th 2025
                  </h2>

                  <p className="text-xl sm:text-2xl mt-3 font-light">
                    DST & Distributed Systems w/ Dominik and Joran.
                  </p>

                  <p className="text-xl sm:text-2xl mt-6 font-light">
                    09:00 AM - 10:00 AM <span className="font-bold">PT</span>
                  </p>

                  <div className="container mx-auto py-8 text-center">
                    <iframe
                      className="mx-auto"
                      src="https://docs.google.com/forms/d/e/1FAIpQLSewN2aRdGr8SOlOcpx6OIC5XcpgeOEIrr7Wy8q4OsPjWf7ykg/viewform?embedded=true"
                      width="100%"
                      height="900px"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex mb-24">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12 text-slate-700">
                  <h2 className="text-2xl sm:text-4xl pb-2">
                    December <span className="font-bold">18th</span> 2024
                  </h2>

                  <p className="text-xl sm:text-2xl mt-3 font-light">
                    Explore a use case and Resonate protocols.
                  </p>

                  <p className="text-xl sm:text-2xl mt-6 font-light">
                    10:00 AM - 11:00 AM <span className="font-bold">PST</span>
                  </p>
                </div>
                <div className="container mx-auto py-8 text-center">
                  {/* YouTube Video Embed */}
                  <div className="relative overflow-hidden pb-[56.25%] mb-8">
                    <iframe
                      src="https://www.youtube.com/embed/X1iGwYSocq0?si=ro2rzUJFQvuYUy15"
                      title="YouTube video player"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex mb-24">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center text-slate-700">
                <div className="lg:pt-24 md:pt-24 pb-12">
                  <h2 className="text-2xl sm:text-4xl pb-2">
                    November <span className="font-bold">6th</span> 2024
                  </h2>

                  <p className="text-xl sm:text-2xl mt-3 font-light">
                    An hour long deep dive into the Resonate Python SDK.
                  </p>

                  <p className="text-xl sm:text-2xl mt-6 font-light">
                    10:00 AM - 11:00 AM <span className="font-bold">PST</span>
                  </p>
                </div>
                <div className="container mx-auto px-4 py-8 text-center">
                  {/* YouTube Video Embed */}
                  <div className="relative overflow-hidden pb-[56.25%] mb-8">
                    <iframe
                      src="https://www.youtube.com/embed/90De4NuagzQ"
                      title="YouTube video player"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="lg:pt-48 md:pt-24 pb-12"></div>
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
