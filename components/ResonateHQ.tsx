"use client";
import React from "react";
import Image from "next/image";
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

const ResonateHQ: React.FC = () => {
  return (
    <div
      className={`${openSans.className} flex bg-white flex-col w-full max-w-[800px] min-w-[300px] items-center mx-auto border-l border-r border-muted`}
    >
      <div className="bg-primary px-12 py-12 w-full border-b border-muted mt-12">
        <p className="text-2xl text-tertiary text-center">
          &quot;The question is no longer whether an application is concurrent
          and distributed, but only to what extent an application is concurrent
          and distributed.&quot;
        </p>
        <p className="text-tertiary text-2xl text-center italic font-bold mt-4">
          — Dominik Tornow
        </p>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-12 w-full py-8 px-12 mb-24">
        <div>
          <p className="text-tertiary text-md flex items-center">
            <Image
              src="/images/echo-logo.svg"
              alt="ResonateHQ Logo"
              width="40"
              height="40"
              className="mr-2" // Adds spacing between image and text
            />
            resonatehq.io proudly presents:
          </p>
        </div>
        {/* Text: Distributed */}
        <div className="text-center text-4xl md:text-6xl lg:text-8xl py-2 pt-16 font-light">
          <p className="text-tertiary">Distributed</p>
        </div>
        {/* Text: Async Await */}
        <div className="text-center text-4xl md:text-6xl lg:text-8xl py-2 pb-16 md:mb-16 font-light">
          <p className="text-tertiary">Async Await</p>
        </div>
        <div className="text-center">
          <p className="text-tertiary text-2xl">— an open specification,</p>
        </div>
        <div className="text-center">
          <p className="text-tertiary text-2xl">
            defining a holistic programming model for the cloud
          </p>
        </div>

        <div className="py-8 flex justify-center items-center">
          <button
            onClick={() => smoothScrollTo("start-with-distributed-async-await")}
            className="font-mono mt-2 mx-4 px-4 py-2 flex items-center text-tertiary hover:text-secondary transition"
          >
            Learn more
            <svg
              height="20"
              viewBox="0 0 64 64"
              fill="currentColor"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <g id="Glyph">
                <path d="m50.71 39.29-4.24-4.24a1 1 0 0 0 -1.42 0l-9.05 9.05v-38.1a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v38.1l-9-9.05a1 1 0 0 0 -1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42l18 18a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z" />
              </g>
            </svg>
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://resonatehq.io/discord")
            }
            className="font-mono flex items-center mt-2 mx-4 px-4 py-2 text-tertiary hover:text-secondary transition"
          >
            Join us
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
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div
          id="start-with-distributed-async-await"
          className="border border-muted flex flex-col items-center justify-center h-[150px] rounded-full"
        >
          <Image
            src="/images/start.svg"
            alt="down arrow"
            width={40}
            height={40}
          />
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-12 w-full px-12">
        <div className="grid grid-cols-[1fr,1fr] items-center text-center">
          <div className="pr-12 md:pr-0 text-2xl text-tertiary max-w-[300px]">
            <p className="font-bold py-6">Concurrency</p>
            <Image
              src="/images/lines.svg"
              alt="concurrency"
              width={40}
              height={40}
              className="mx-auto py-6"
            />
            <p className="py-6">introduces Partial Order</p>
          </div>
          <div className="border-l border-muted flex flex-col items-center justify-center h-[300px]"></div>
          <div></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="border border-muted  flex flex-col items-center justify-center h-[150px] rounded-full">
          <Image
            src="/images/swords.svg"
            alt="partial order"
            width={40}
            height={40}
          />
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="grid grid-cols-[1fr,1fr] items-center text-center">
        <div className="border-r border-muted flex flex-col items-center justify-center h-[300px]"></div>
        <div className="pl-12 text-2xl text-tertiary">
          <p className="font-bold py-6">Distribution</p>
          <Image
            src="/images/dots.svg"
            alt="distribution"
            width={40}
            height={40}
            className="mx-auto py-6"
          />
          <p className="py-6">introduces Partial Failure</p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="border border-muted  flex flex-col items-center justify-center h-[150px] rounded-full">
          <Image
            src="/images/swords.svg"
            alt="partial failure"
            width={40}
            height={40}
          />
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>

      <div className="flex flex-col py-12 my-12 w-full text-tertiary">
        <div className="leading-loose text-center items-center">
          <p className="text-2xl pt-12">Distributed Async Await</p>
          <p className="text-2xl pb-6">specifies how to implement</p>

          <p className="text-2xl font-bold py-6">Coordination</p>
          <Image
            src="/images/shield.svg"
            alt="coordination"
            width={40}
            height={40}
            className="mx-auto py-6"
          />
          <p className="text-2xl py-6">to combat Partial Order</p>

          <p className="text-2xl font-bold py-6">Recovery</p>
          <Image
            src="/images/shield.svg"
            alt="recovery"
            width={40}
            height={40}
            className="mx-auto py-6"
          />
          <p className="text-2xl py-6">to combat Partial Failure</p>
          <p className="text-2xl font-bold py-6 ">
            Sequential Programming Model
          </p>
          <Image
            src="/images/smile.svg"
            alt="programming model"
            width={40}
            height={40}
            className="mx-auto py-6"
          />
          <p className="text-2xl py-6">for a delightful developer experience</p>
        </div>
      </div>
      <div className="bg-primary px-12 py-12 mb-24 w-full border-b border-t border-muted">
        <Image
          src="/images/lamp.svg"
          alt="promise and function call graph"
          width={40}
          height={40}
          className="mx-auto mb-4"
        />
        <p className="text-tertiary text-2xl text-center">
          It is common to manage the complexity that Concurrency and
          Distribution introducem at the application level, resulting in an
          awful developer experience. Distributed Async Await pushes that
          complexity to the platform level, offering a delightful developer
          experience.
        </p>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="border border-muted flex flex-col items-center justify-center h-[150px] rounded-full">
          <Image src="/images/pin.svg" alt="pin" width={40} height={40} />
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-12 w-full px-12">
        <div className="grid grid-cols-[1fr,1fr] items-center text-center">
          <div className="pr-12 text-2xl text-tertiary">
            <p className="font-bold pt-6">Distributed</p>
            <p className="font-bold pb-6">Async Await</p>
            <p className="py-6">extends the Async Await programming model...</p>
          </div>
          <div className="border-l border-muted flex flex-col items-center justify-center h-[300px]"></div>
          <div></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="border border-muted flex flex-col items-center justify-center h-[150px] rounded-full">
          <Image
            src="/images/arrows.svg"
            alt="Echo Icon"
            width={40}
            height={40}
          />
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="grid grid-cols-[1fr,1fr] items-center text-center">
        <div className="border-r border-muted flex flex-col items-center justify-center h-[300px]"></div>
        <div className="pl-12 text-2xl text-tertiary">
          <p>...so Concurrency,</p>
          <p className="font-bold py-6">and Distribution,</p>
          <p>become first class citizens</p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="border border-muted flex flex-col items-center justify-center h-[150px] rounded-full">
          <Image
            src="/images/diamond.svg"
            alt="promises and functions"
            width={40}
            height={40}
          />
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>

      <div className="flex flex-col py-12 my-12 w-full text-tertiary">
        <div className="leading-loose text-center items-center">
          <p className="text-2xl pt-12">Distributed Async Await</p>
          <p className="text-2xl pb-6">asks developers to use just</p>

          <p className="text-2xl font-bold py-6">Promises and Functions</p>

          <div className="max-w-[300px] my-6  p-0 mx-auto">
            <Image
              src="/images/promise-function.svg"
              alt="promise and function call graph"
              width={722}
              height={322}
            />
          </div>
          <p className="text-2xl py-6">enabling...</p>
          <p className="text-2xl py-6 font-bold">Durable Execution</p>
          <p className="text-2xl py-6">without any proprietary primitives</p>
        </div>
      </div>
      <div className="bg-primary px-12 py-12 w-full border-b border-t border-muted">
        <Image
          src="/images/lamp.svg"
          alt="promise and function call graph"
          width={40}
          height={40}
          className="mx-auto mb-4"
        />
        <p className="text-tertiary text-2xl text-center">
          Async Await pushes Concurrency to the platform level, but does nothing
          to address Distribution. Unlike Async Await, Distributed Async Await
          addresses both Concurrency and Distribution at the platform level.
          Where many Durable Execution solutions force developers to work with
          proprietary primitives like workflows and activities, Distributed
          Async Await, like Async Await, uses just promises and functions.
        </p>
      </div>

      {/* <div className="bg-tertiary px-12 py-12 w-full">
        <p className="text-primary text-2xl text-center">
          &quot;Perfection is achieved, not when there is nothing more to add,
          but when there is nothing left to take away.&quot;
        </p>
        <p className="text-primary text-2xl text-center italic font-bold mt-4">
          — Antoine de Saint-Exupéry
        </p>
      </div> */}
      <div className="flex flex-col space-y-4 md:space-y-12 bg-primary px-12 py-8 w-full mb-24">
        <div>
          <p className="text-tertiary text-md flex items-center">
            <Image
              src="/images/echo-logo.svg"
              alt="ResonateHQ Logo"
              width="40"
              height="40"
              className="mr-2" // Adds spacing between image and text
            />
            resonatehq.io also proudly presents:
          </p>
        </div>
        <div className="text-center text-4xl md:text-6xl lg:text-8xl py-2 pt-16 font-light">
          <p className="text-tertiary">Resonate</p>
        </div>

        <div className="text-center">
          <p className="text-tertiary text-2xl">— an implementation</p>
        </div>
        <div className="text-center">
          <p className="text-tertiary text-2xl">
            of the Distributed Async Await specification
          </p>
        </div>

        <div className="py-8 flex justify-center items-center text-center">
          <button
            onClick={() => smoothScrollTo("start-with-resonate")}
            className="font-mono mt-2 mx-4 px-4 py-2 flex items-center text-tertiary hover:text-secondary transition"
          >
            Learn more
            <svg
              height="20"
              viewBox="0 0 64 64"
              fill="currentColor"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <g id="Glyph">
                <path d="m50.71 39.29-4.24-4.24a1 1 0 0 0 -1.42 0l-9.05 9.05v-38.1a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v38.1l-9-9.05a1 1 0 0 0 -1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42l18 18a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z" />
              </g>
            </svg>
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://docs.resonatehq.io/get-started/")
            }
            className="font-mono flex items-center mt-2 mx-4 px-4 py-2 text-tertiary hover:text-secondary transition"
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
        <div className="border border-muted border-dashed flex flex-col items-center justify-center h-[150px]">
          <Image
            src="/images/dependability.svg"
            alt="Echo Icon"
            width={40}
            height={40}
          />
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-12 w-full px-12">
        <div className="grid grid-cols-[1fr,1fr] items-center text-center">
          <div className="pr-12 md:pr-0 text-2xl text-tertiary max-w-[300px]">
            <p className="py-2">Bringing</p>
            <p className="font-bold py-6">reliability and scalability</p>
            <p className="py-2">to the language you love</p>
          </div>
          <div className="border-l border-muted border-dashed flex flex-col items-center justify-center h-[300px]"></div>
          <div></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="border border-muted border-dashed flex flex-col items-center justify-center h-[150px]">
          <Image
            src="/images/shield.svg"
            alt="Echo Icon"
            width={40}
            height={40}
          />
        </div>
        {/* Empty Third Column */}
        <div></div>
      </div>
      <div className="grid grid-cols-[1fr,1fr] items-center text-center">
        <div className="border-r border-muted border-dashed flex flex-col items-center justify-center h-[300px]"></div>
        <div className="pl-12 text-2xl text-tertiary">
          <p className="font-bold py-6">Currently available in</p>
          <HeroSection />
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="border border-muted border-dashed flex flex-col items-center justify-center h-[150px]">
          <Image
            src="/images/care.svg"
            alt="Echo Icon"
            width={40}
            height={40}
          />
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
      <div className="bg-primary px-12 py-12 w-full border-t border-muted mt-24">
        <Image
          src="/images/lamp.svg"
          alt="promise and function call graph"
          width={40}
          height={40}
          className="mx-auto mb-4"
        />
        <p className="text-tertiary text-2xl text-center">
          Resonate is dead simple, formally verified, and deterministically
          tested — the way all software should be.
        </p>
      </div>
    </div>
  );
};

export default ResonateHQ;
