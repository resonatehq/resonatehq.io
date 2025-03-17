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
            className="font-mono mt-2 mx-4 lg:px-4 py-2 flex items-center text-tertiary hover:text-secondary transition"
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
          <div className="pr-2 md:pr-6 lg:pr-12 text-sm md:text-lg lg:text-2xl text-tertiary max-w-[300px]">
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
        <div className="pl-2 md: pl-6 lg:pl-12 text-sm md:text-lg lg:text-2xl text-tertiary">
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
          Distribution introduce at the application level, resulting in an awful
          developer experience. Distributed Async Await pushes that complexity
          to the platform level, offering a delightful developer experience.
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
          <div className="pr-2 md:pr-6 lg:pr-12 text-sm md:text-lg lg:text-2xl text-tertiary">
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
        <div className="pl-2 md: pl-6 lg:pl-12 text-sm md:text-lg lg:text-2xl text-tertiary">
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
            className="font-mono mt-2 mx-2 md:mx-4 px-2 md:px-4 py-2 flex items-center text-tertiary hover:text-secondary transition"
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
            className="font-mono flex items-center mt-2 mx-2 md:mx-4 px-2 md:px-4 py-2 text-tertiary hover:text-secondary transition"
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
          <div className="pr-2 md:pr-6 lg:pr-12 text-sm md:text-lg lg:text-2xl text-tertiary max-w-[300px]">
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
        <div className="pl-2 md: pl-6 lg:pl-12 text-sm md:text-lg lg:text-2xl text-tertiary">
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
      <div className="bg-primary text-tertiary px-12 py-12 w-full border-t border-muted mt-24">
        <svg
          id="bold"
          enableBackground="new 0 0 24 24"
          height="40"
          viewBox="0 0 24 24"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="mx-auto mb-4"
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
        <p className="text-2xl text-center">
          Resonate is dead simple, formally verified, and deterministically
          tested — the way all software should be.
        </p>
      </div>
    </div>
  );
};

export default ResonateHQ;
