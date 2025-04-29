"use client";
import React from "react";
import { Open_Sans } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import CodeExamples from "@/components/CodeExamples";

const openSans = Open_Sans({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Resonate: React.FC = () => {
  return (
    <div
      className={`${openSans.className} flex bg-white flex-col w-full max-w-[1200px] min-w-[300px] items-center mx-auto border-l border-r border-muted`}
    >
      <div className="bg-primary flex flex-col space-y-4 md:space-y-12 bg-primary px-12 py-8 w-full mt-12 mb-24">
        <div className="text-center text-4xl md:text-6xl lg:text-8xl py-2 pt-16 font-light">
          <p className="text-tertiary border-l-8 border-r-8 border-secondary">
            Resonate
          </p>
        </div>

        <div className="text-center">
          <p className="text-tertiary text-2xl">— an implementation</p>
        </div>
        <div className="text-center">
          <p className="text-tertiary text-2xl">
            of the{" "}
            <a
              className="hover:text-muted transition"
              href="/distributed-async-await"
            >
              Distributed Async Await specification
            </a>
          </p>
        </div>

        <div className="py-8 flex justify-center items-center text-center">
          <button
            onClick={() => smoothScrollTo("start-with-resonate")}
            className="font-mono mt-2 mx-2 md:mx-4 px-2 md:px-4 py-2 flex items-center text-tertiary hover:text-muted transition"
          >
            <svg
              height="20"
              viewBox="0 0 64 64"
              fill="currentColor"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <g id="Glyph">
                <path d="m50.71 39.29-4.24-4.24a1 1 0 0 0 -1.42 0l-9.05 9.05v-38.1a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v38.1l-9-9.05a1 1 0 0 0 -1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42l18 18a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z" />
              </g>
            </svg>
            Learn more
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://docs.resonatehq.io/get-started/")
            }
            className="font-mono flex items-center mt-2 mx-2 md:mx-4 px-2 md:px-4 py-2 text-tertiary hover:text-muted transition"
          >
            Try it
            <svg
              height="20"
              viewBox="0 0 64 64"
              width="20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <g id="Glyph">
                <path d="m58.71 31.29-18-18a1 1 0 0 0 -1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42l9.05 9.05h-38.1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h38.1l-9.05 9a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.37z" />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div
        id="start-with-resonate"
        className="grid grid-cols-[1fr,150px,1fr] items-center text-center"
      >
        <div></div>
        <div className="text-secondary bg-dark flex flex-col items-center justify-center h-[150px]">
          <svg
            id="Layer_1"
            enableBackground="new 0 0 500 500"
            viewBox="0 0 500 500"
            height="40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path
              clipRule="evenodd"
              d="m469.845 183.992c-8.426-87.686-80.57-155.931-168.52-159.737v50.207h21.342c19.743 0 35.795 16.063 35.795 35.815 0 19.751-16.052 35.821-35.795 35.821h-21.342v47.288h55.107c4.367 0 7.811 3.495 7.811 7.786v29.067c0 11.165 9.103 20.237 20.235 20.246 11.132-.009 20.235-9.081 20.235-20.246v-29.067c0-4.291 3.444-7.786 7.811-7.786h57.936zm-390.118 85.778c0-19.751 16.052-35.821 35.857-35.821 19.743 0 35.795 16.07 35.795 35.821v21.269l47.296.01v-55.087c0-4.303 3.444-7.786 7.811-7.786h29.03c11.132 0 20.296-9.082 20.296-20.248 0-11.155-9.164-20.236-20.296-20.236h-29.03c-4.367 0-7.811-3.486-7.811-7.789v-57.996c-91.517 3.973-165.138 77.622-169.135 169.142l50.187-.01zm253.457 58.121c0 19.751-16.052 35.814-35.857 35.823-19.681 0-35.734-16.073-35.734-35.823v-21.269h-47.296v55.077c0 4.303-3.506 7.786-7.811 7.786h-29.091c-11.132 0-20.173 9.083-20.173 20.238 0 11.164 9.041 20.246 20.173 20.246h29.091c4.305 0 7.811 3.486 7.811 7.789v57.898l9.348-.565c87.704-8.428 155.974-80.589 159.725-168.47l-50.187-.01v21.28zm-155.789 97.654h21.28v50.2c-87.827-3.818-160.033-72.043-168.459-159.739l-.554-9.384 57.875-.01c4.305 0 7.749-3.484 7.749-7.786v-29.056c0-11.167 9.164-20.248 20.296-20.248s20.235 9.082 20.235 20.248v29.056c0 4.303 3.444 7.786 7.749 7.786l55.107.01v47.29h-21.28c-19.743 0-35.795 16.07-35.795 35.822.002 19.751 16.054 35.811 35.797 35.811z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-12 w-full px-12">
        <div className="grid grid-cols-[1fr,1fr] items-center text-center">
          <div className="pr-2 md:pr-6 lg:pr-12 text-sm md:text-lg lg:text-2xl text-tertiary">
            <p className="py-2">Resonate brings</p>
            <p className="font-bold py-6">reliability and scalability</p>
            <p className="py-2">to the language you love</p>
          </div>
          <div className="border-l border-dark flex flex-col items-center justify-center h-[300px]"></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="text-secondary bg-dark flex flex-col items-center justify-center h-[150px]">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 285.296 285.296"
            height="40"
            width="40"
            enableBackground="new 0 0 285.296 285.296"
            fill="currentColor"
            stroke="currentColor"
          >
            <g>
              <path d="m188.717,68.687c-17.697-2.229-34.128-7.851-46.069-15.662-11.939,7.811-28.371,13.434-46.068,15.662-14.084,1.773-27.714,1.31-39.525-1.263 0.624,5.411 1.202,11.033 1.799,16.841 3.195,31.091 6.816,66.33 20.302,91.096 16.569,30.431 48.019,60.297 63.493,60.297 15.475,0 46.925-29.866 63.493-60.297 13.486-24.767 17.107-60.006 20.303-91.097 0.597-5.808 1.175-11.429 1.799-16.84-11.814,2.572-25.441,3.035-39.527,1.263z" />
              <path d="m276.701,23.372c-2.271-2.026-5.389-2.818-8.35-2.118-16.156,3.819-35.775,4.819-56.576,2.2-25.685-3.234-48.261-11.367-63.932-21.875-3.142-2.107-7.249-2.106-10.39,0-15.67,10.508-38.246,18.641-63.931,21.875-20.801,2.619-40.42,1.619-56.576-2.2-2.962-0.7-6.079,0.09-8.351,2.115-2.272,2.026-3.411,5.033-3.053,8.056 6.163,52.153 9.006,119.125 34.05,165.118 23.546,43.242 72.318,88.752 103.058,88.752 30.74,0 79.512-45.51 103.058-88.752 25.043-45.993 27.887-112.965 34.05-165.118 0.355-3.021-0.786-6.027-3.057-8.053zm-32.143,34.677c-1.216,8.511-2.176,17.855-3.193,27.749-3.339,32.494-7.124,69.325-22.05,96.736-15.551,28.56-50.845,68.123-76.667,68.123-25.82,0-61.115-39.563-76.667-68.123-14.925-27.411-18.71-64.241-22.049-96.735-1.018-9.894-1.978-19.239-3.193-27.75-0.376-2.637 0.674-5.275 2.759-6.933 2.087-1.658 4.895-2.083 7.377-1.121 11.542,4.475 27.515,5.865 43.831,3.809 17.491-2.202 33.274-7.994 43.303-15.89 2.723-2.143 6.557-2.143 9.279,0 10.028,7.896 25.813,13.688 43.305,15.89 16.313,2.058 32.288,0.666 43.83-3.809 2.483-0.962 5.29-0.537 7.377,1.121 2.084,1.658 3.135,4.296 2.758,6.933z" />
            </g>
          </svg>
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-12 w-full px-12">
        <div className="grid grid-cols-[1fr,1fr] items-center text-center">
          <div className="border-r border-dark flex flex-col items-center justify-center h-[300px]"></div>

          <div className="pl-2 md:pl-6 lg:pl-12 text-sm md:text-lg lg:text-2xl text-tertiary">
            <p>
              <span className="font-bold py-6">Currently available</span> in
            </p>
            <HeroSection />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="text-secondary bg-dark flex flex-col items-center justify-center h-[150px]">
          <svg
            id="Glyph"
            height="40"
            viewBox="0 0 64 64"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="m58.28038 24.9022a4.65425 4.65425 0 0 0 -8.07946.01016c-2.41191 3.75125-4.8933 7.47575-7.26966 11.23917a6.91668 6.91668 0 0 1 -4.04975 3.18981c-3.38981 1.04-7.37956 2.27989-11.2193 3.66983a1.94193 1.94193 0 0 1 -2.00989-.3 1.75012 1.75012 0 0 1 .97994-2.99977c3.36828-1.17241 6.86814-2.3497 10.18938-3.52981 3.40947-.83568 4.1473-5.60535 1.03979-7.2596a3.60672 3.60672 0 0 0 -3.08966-.36988c-3.89222 1.16124-7.72327 2.34031-11.63932 3.49972-6.0425 1.72141-11.41175 2.68589-13.719 9.35962-1.33145 3.95461-2.69963 8.13925-4.0899 12.09909a1.00962 1.00962 0 0 0 .61994 1.27989l14.76912 5.14972a1 1 0 0 0 1.22991-.5 3.84059 3.84059 0 0 1 2.46989-1.7499c5.87278-2.06825 12.00375-4.24225 17.92892-6.26963a10.6704 10.6704 0 0 0 6.12967-5.11962c2.05987-3.68978 4.1997-7.39958 6.26958-10.99935 1.43768-3.10957 5.30642-6.95174 3.5398-10.39945z" />
            <path d="m18.31273 31.38186c3.55684-1.01951 7.13475-2.12242 10.66935-3.16987 2.44345-.62523 4.44207-1.64636 7.03957-1.86005a6.10479 6.10479 0 0 1 4.86977 2.73 32.535 32.535 0 0 0 2.64985-2.4198c2.29985-2.32988 5.00965-6.10962 4.87965-10.84933a12.1356 12.1356 0 0 0 -11.79928-11.78937 11.93292 11.93292 0 0 0 -8.32946 2.87984c-.21456.23609-.20875.18081-.44-.03a12.04281 12.04281 0 0 0 -12.91925-1.74986 11.82738 11.82738 0 0 0 -7.16955 10.61936c-.37193 6.20984 5.1828 12.07702 10.54935 15.63908z" />
          </svg>
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>

      <CodeExamples />
      <div className="text-center my-24 space-y-4">
        <p className="text-tertiary text-2xl">Run here</p>
        <p className="text-tertiary text-2xl">Run over there</p>
        <p className="text-tertiary text-2xl">Sequential code</p>
        <p className="text-tertiary text-2xl">
          Concurrent, distributed, and durable executions
        </p>
      </div>

      <div className="bg-primary text-tertiary px-12  w-full mb-24 w-full">
        <div className="border-l-8 border-r-8 border-secondary py-12 flex flex-col items-center text-center">
          <p className="text-2xl text-center px-2 md:px-6">
            Resonate is dead simple, formally verified, and deterministically
            tested
          </p>
          <div className="w-20 h-20 text-secondary flex items-center justify-center bg-dark my-12">
            {/* Lamp SVG */}
            <svg
              id="bold"
              enableBackground="new 0 0 24 24"
              height={40}
              viewBox="0 0 24 24"
              width={40}
              fill="currentColor"
            >
              <path d="m12 3.457c-.414 0-.75-.336-.75-.75v-1.957c0-.414.336-.75.75-.75s.75.336.75.75v1.957c0 .414-.336.75-.75.75z" />
              <path d="m18.571 6.179c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.146-.339.22-.531.22z" />
              <path d="m23.25 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z" />
              <path d="m19.955 20.705c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z" />
              <path d="m4.045 20.705c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l1.384-1.384c.293-.293.768-.293 1.061 0s.293.768 0 1.061l-1.384 1.384c-.147.147-.339.22-.531.22z" />
              <path d="m2.707 12.75h-1.957c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.957c.414 0 .75.336.75.75s-.336.75-.75.75z" />
              <path d="m5.429 6.179c-.192 0-.384-.073-.53-.22l-1.384-1.384c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l1.384 1.384c.293.293.293.768 0 1.061-.148.146-.339.22-.531.22z" />
              <path d="m15 21v1.25c0 .96-.79 1.75-1.75 1.75h-2.5c-.84 0-1.75-.64-1.75-2.04v-.96z" />
              <path d="m16.41 6.56c-1.64-1.33-3.8-1.85-5.91-1.4-2.65.55-4.8 2.71-5.35 5.36-.56 2.72.46 5.42 2.64 7.07.59.44 1 1.12 1.14 1.91v.01c.02-.01.05-.01.07-.01h6c.02 0 .03 0 .05.01v-.01c.14-.76.59-1.46 1.28-2 1.69-1.34 2.67-3.34 2.67-5.5 0-2.12-.94-4.1-2.59-5.44zm-.66 5.94c-.41 0-.75-.34-.75-.75 0-1.52-1.23-2.75-2.75-2.75-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.34 0 4.25 1.91 4.25 4.25 0 .41-.34.75-.75.75z" />
              <path d="m8.93 19.5h.07c-.02 0-.05 0-.07.01z" />
              <path d="m15.05 19.5v.01c-.02-.01-.03-.01-.05-.01z" />
            </svg>
          </div>

          <p className="text-2xl text-center">
            — the way all software should be.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resonate;
