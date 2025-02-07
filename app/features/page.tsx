import NavBar from "@/components/ResonateHQ";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Features() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[1200px] px-4 lg:px-10">
          {/* Hero */}

          <section className="overflow-hidden">
            <div className="mx-auto flex flex-col items-center pb-24 pt-16">
              <div className="text-center text-slate-700">
                <h1 className="text-4xl pb-16 font-light tracking-tight sm:text-8xl">
                  Features
                </h1>

                <p className="font-light text-xl sm:text-2xl">
                  What you get when you use{" "}
                  <span className="font-bold">Resonate</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Sequential programming model */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12 text-slate-700">
                  <Image
                    src="/images/star.svg"
                    alt="Icon"
                    className="w-10 h-10 mx-auto my-4"
                    height="512"
                    width="512"
                  />
                  <h2 className="text-3xl sm:text-5xl pb-2 font-light items-center">
                    Sequential programming model
                  </h2>

                  <p className="text-xl sm:text-2xl mt-3 font-light">
                    Write <span className="font-bold">linear code</span> that
                    directly maps to your business logic.
                  </p>

                  <p className="text-xl sm:text-2xl mt-3 font-light">
                    Distribute functions to{" "}
                    <span className="font-bold">scale</span> with throughput.
                  </p>
                  <a href="https://docs.resonatehq.io/evaluate/developer-experience/sequential-programming-model">
                    <button className="mt-12 inline-flex items-center justify-center rounded-md text-xl px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Incremental adoption */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12 text-slate-700">
                  <Image
                    src="/images/star.svg"
                    alt="Icon"
                    className="w-10 h-10 mx-auto my-4"
                    height="512"
                    width="512"
                  />
                  <h2 className="text-3xl sm:text-5xl pb-2 font-light items-center">
                    Incremental adoption
                  </h2>

                  <p className="text-xl sm:text-2xl mt-3 font-light">
                    Low latecy <span className="font-bold">local storage</span>{" "}
                    by default.
                  </p>

                  <p className="text-xl sm:text-2xl mt-3 font-light">
                    Configurable{" "}
                    <span className="font-bold">remote storage</span> to survive
                    hard crashes.
                  </p>
                  <a href="https://docs.resonatehq.io/evaluate/developer-experience/incremental-adoption">
                    <button className="mt-12 inline-flex items-center justify-center rounded-md text-xl px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Failure detection and recovery */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12 text-slate-700">
                  <Image
                    src="/images/star.svg"
                    alt="Icon"
                    className="w-10 h-10 mx-auto my-4"
                    height="512"
                    width="512"
                  />
                  <h2 className="text-3xl sm:text-5xl pb-2 font-light">
                    Failure detection and recovery
                  </h2>

                  <p className="text-xl sm:text-2xl mt-3 font-light">
                    Configurable <span className="font-bold">retries</span> for
                    execution failures.
                  </p>

                  <p className="text-xl sm:text-2xl mt-3 font-light">
                    Distributed <span className="font-bold">resume</span> for
                    process crashes.
                  </p>

                  <a href="https://docs.resonatehq.io/evaluate/features/execution-retries">
                    <button className="mt-12 inline-flex items-center justify-center rounded-md text-xl px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Transparent batching */}
          <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12 text-slate-700">
                  <Image
                    src="/images/star.svg"
                    alt="Icon"
                    className="w-10 h-10 mx-auto my-4"
                    height="512"
                    width="512"
                  />
                  <h2 className="text-3xl sm:text-5xl pb-2">
                    Built in transparent batching
                  </h2>

                  <p className="text-xl sm:text-2xl mt-3 font-light">
                    Take advantage of{" "}
                    <span className="font-bold">bulk operations</span>
                    {"  "}.
                  </p>

                  <p className="text-xl sm:text-2xl mt-3 font-light">
                    Define a{" "}
                    <span className="font-bold">
                      data structure and handler
                    </span>{" "}
                    and let Resonate do the rest.
                  </p>
                  <a href="https://docs.resonatehq.io/evaluate/features/transparent-batching">
                    <button className="mt-12 inline-flex items-center justify-center rounded-md text-xl px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Test suite */}
          {/* <section>
            <div className="w-full max-w-screen sm:max-w-screen-2xl  flex">
              <div className="flex flex-col text-center w-full px-4 lg:space-x-10 items-center">
                <div className="lg:pt-24 md:pt-24 pb-12">
                  <h2 className="text-3xl md:text-5xl pb-2">
                    System{" "}
                    <span className="font-bold">behavior tests</span>
                  </h2>

                  <p className="text-xl mt-3 font-light">
                    Standard component
                    <span className="mx-2 font-bold">
                      mockability.
                    </span>
                  </p>
                  <p className="text-xl mt-3 font-light">
                    Verifiable system behavior with
                    <span className="mx-2 font-bold">
                      Deterministic Simulation Testing.
                    </span>
                  </p>

                  <a href="https://docs.resonatehq.io/">
                    <button className="mt-6 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
                      Learn more
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section> */}
          <div className="lg:pt-48 md:pt-24 pb-12"></div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
