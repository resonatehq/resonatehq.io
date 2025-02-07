import NavBar from "@/components/ResonateHQ";
import Footer from "@/components/Footer";
import TypeScriptCodeExample from "@/components/TypeScriptCodeExample";
import TypeScriptGrid from "@/components/TypeScriptGrid";

export default function Features() {
  return (
    <div className="flex flex-col max-w-screen bg-white overflow-hidden">
      {/* Nav */}
      <NavBar />

      <div className="flex flex-row justify-center w-full">
        <div className="text-zinc-900 w-full max-w-[1100px] px-4 lg:px-10">
          {/* Hero */}

          <section className="overflow-hidden">
            <div className="mx-auto flex flex-col items-center pb-24 pt-16">
              <div className="text-center text-slate-700">
                <h1 className="text-4xl pb-16 font-light tracking-tight sm:text-8xl">
                  TypeScript SDK
                </h1>

                <p className="font-light text-xl sm:text-2xl">
                  A modern, holistic, distributed application development
                  framework
                </p>
                <p className="font-light text-xl sm:text-2xl mb-12">
                  for folks who love{" "}
                  <span className="font-bold">TypeScript</span>.
                </p>
                <a href="https://docs.resonatehq.io/develop/typescript">
                  <button className="mt-4 inline-flex items-center justify-center rounded-md text-xl px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
                    Get started
                  </button>
                </a>
              </div>
            </div>
            <TypeScriptGrid />
          </section>

          <TypeScriptCodeExample />
          <section className="overflow-hidden pt-24 lg:pt-36 pb-12">
            <div className="relative overflow-hidden">
              <div className="text-slate-700 mx-auto flex flex-col items-center">
                <div className="text-center">
                  {/* Smaller text on one line */}
                  <p className="text-xl sm:text-3xl font-light tracking-tight pb-12">
                    The joy of TypeScript meets
                  </p>

                  {/* Language with fade effect */}
                  <h2 className="mb-12 text-3xl font-light tracking-tight sm:text-6xl">
                    cloud-scale power.
                  </h2>
                  <p className="mt-3 font-light text-xl sm:text-2xl">
                    The TypeScript developer’s toolkit for resilient cloud
                    systems.
                  </p>
                  <p className="mt-3 mb-12 font-light text-xl sm:text-2xl">
                    Your vision, our framework—together, unstoppable.
                  </p>
                  <a href="https://docs.resonatehq.io/develop/typescript">
                    <button className="mt-4 inline-flex items-center justify-center text-xl rounded-md px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
                      Learn more about the TypeScript SDK
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="lg:pt-48 md:pt-24 pb-12"></div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
