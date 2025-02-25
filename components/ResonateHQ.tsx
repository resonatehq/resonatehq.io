"use client";
import React from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import ConcurrencyGrid from "./ConcurrencyGrid";
import DistributionGrid from "./DistributionGrid";

const openSans = Open_Sans({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ResonateHQ: React.FC = () => {
  return (
    <div
      className={`${openSans.className} flex bg-white flex-col w-full max-w-[800px] min-w-[300px] items-center mx-auto border-l-2 border-r-2 border-muted`}
    >
      <div className="bg-black px-12 py-12 w-full">
        <p className="text-2xl text-primary text-center">
          "The question is no longer whether an application is concurrent and
          distributed, but only to what extent an application is concurrent and
          distributed."
        </p>
        <p className="text-primary text-2xl text-center italic font-bold mt-4">
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
            onClick={() => (window.location.href = "#start")}
            className="mt-2 mx-4 px-4 py-2 flex items-center text-white hover:bg-secondary bg-tertiary transition"
          >
            Learn more
            <Image
              src="/images/down-arrow-white.svg"
              alt="down arrow"
              width={20}
              height={20}
              className="ml-2"
            />
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://resonatehq.io/discord")
            }
            className="flex items-center mt-2 mx-4 px-4 py-2 text-white hover:bg-secondary bg-tertiary transition"
          >
            Join us
            <Image
              src="/images/right-arrow-white.svg"
              alt="down arrow"
              width={20}
              height={20}
              className="ml-2"
            />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div
          id="start"
          className="border-2 border-tertiary flex flex-col items-center justify-center h-[150px] rounded-full"
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
          <div className="border-l-2 border-tertiary flex flex-col items-center justify-center h-[300px]"></div>
          <div></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="border-2 border-tertiary  flex flex-col items-center justify-center h-[150px] rounded-full">
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
        <div className="border-r-2 border-tertiary flex flex-col items-center justify-center h-[300px]"></div>
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
        <div className="border-2 border-tertiary  flex flex-col items-center justify-center h-[150px] rounded-full">
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
      <div className="bg-black px-12 py-12 mb-24 w-full">
        <Image
          src="/images/lamp.svg"
          alt="promise and function call graph"
          width={40}
          height={40}
          className="mx-auto mb-4"
        />
        <p className="text-primary text-2xl text-center">
          It is common for the complexity that Concurrency and Distribution
          introduce to be managed at the application level, resulting in an
          awful developer experience. Distributed Async Await pushes that
          complexity to the platform level, offering a delightful developer
          experience.
        </p>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="border-2 border-tertiary flex flex-col items-center justify-center h-[150px] rounded-full">
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
          <div className="border-l-2 border-tertiary flex flex-col items-center justify-center h-[300px]"></div>
          <div></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="border-2 border-tertiary flex flex-col items-center justify-center h-[150px] rounded-full">
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
        <div className="border-r-2 border-tertiary flex flex-col items-center justify-center h-[300px]"></div>
        <div className="pl-12 text-2xl text-tertiary">
          <p>...so Concurrency,</p>
          <p className="font-bold py-6">and Distribution,</p>
          <p>become first class citizens</p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,150px,1fr] items-center text-center">
        <div></div>
        <div className="border-2 border-tertiary flex flex-col items-center justify-center h-[150px] rounded-full">
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
      <div className="bg-black px-12 py-12 mb-24 w-full">
        <Image
          src="/images/lamp.svg"
          alt="promise and function call graph"
          width={40}
          height={40}
          className="mx-auto mb-4"
        />
        <p className="text-primary text-2xl text-center">
          Async Await pushes Concurrency to the platform level, but does nothing
          to address Distribution. Distributed Async Await addresses both
          Concurrency and Distribution at the platform level. Where many Durable
          Execution platforms force developers to work with proprietary
          primitives like workflows and activities, Distributed Async Await
          still uses just promises and functions.
        </p>
      </div>
      <div className="bg-tertiary px-12 py-12 w-full">
        <p className="text-primary text-2xl text-center">
          "Perfection is achieved, not when there is nothing more to add, but
          when there is nothing left to take away."
        </p>
        <p className="text-primary text-2xl text-center italic font-bold mt-4">
          — Antoine de Saint-Exupéry
        </p>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-12 bg-primary px-12 py-8 w-full">
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
        <div className="py-8 flex justify-center items-center">
          <button
            onClick={() => (window.location.href = "#start")}
            className="mt-2 mx-4 px-4 py-2 flex items-center text-white hover:bg-secondary bg-tertiary transition"
          >
            Learn more
            <Image
              src="/images/down-arrow-white.svg"
              alt="down arrow"
              width={20}
              height={20}
              className="ml-2"
            />
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://resonatehq.io/discord")
            }
            className="flex items-center mt-2 mx-4 px-4 py-2 text-white hover:bg-secondary bg-tertiary transition"
          >
            Try it
            <Image
              src="/images/right-arrow-white.svg"
              alt="down arrow"
              width={20}
              height={20}
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResonateHQ;
