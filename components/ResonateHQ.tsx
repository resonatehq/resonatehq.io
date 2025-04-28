"use client";
import React from "react";
import FeatureCards from "./FeatureCards";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ResonateHQ: React.FC = () => {
  return (
    <div
      className={`${openSans.className} flex min-h-screen bg-white flex-col w-full max-w-[1200px] min-w-[300px] items-center mx-auto border-l border-r border-muted`}
    >
      <div className="bg-primary px-12 w-full">
        <div className="mt-48 mb-24 flex flex-col justify-center text-center items-center mt-48 mb-24">
          <h1 className="text-3xl md:text-4xl lg:text-6xl py-12 text-tertiary">
            Distributed System Software
          </h1>
          <p className="text-2xl">
            Resonate HQ designs Dead Simple software for distributed system
            software engineers.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center my-24">
          <div className="my-24 w-120 h-120 flex items-center justify-center bg-primary text-tertiary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="{120}"
              height="{120}"
              viewBox="0 0 805 565"
            >
              <g stroke="currentColor">
                {/* node */}
                <path
                  d="M82.5 42.5c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z"
                  strokeWidth="5"
                  fill="currentColor"
                  className="pulse-1"
                />

                {/* edge */}
                <path
                  d="M79.9 67.43l165.2 110.14"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-2"
                />

                {/* node */}
                <path
                  d="M322.5 202.5c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z"
                  strokeWidth="5"
                  fill="currentColor"
                  className="pulse-3"
                />
                <path
                  d="M82.5 362.5c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z"
                  strokeWidth="5"
                  fill="currentColor"
                  className="pulse-3"
                />
                {/* edge */}
                <path
                  d="M319.92 177.56L485.08 67.44"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-4"
                />
                {/* edge */}
                <path
                  d="M319.9 227.43l165.2 110.14"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-4"
                />
                {/* node */}
                <path
                  d="M562.5 362.5c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z"
                  strokeWidth="5"
                  fill="currentColor"
                  className="pulse-3"
                />
                {/* edge */}
                <path
                  d="M42.5 317.5v-230"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-2"
                />
                {/* node */}
                <path
                  d="M802.5 522.5c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z"
                  strokeWidth="5"
                  fill="currentColor"
                  className="pulse-1"
                />

                {/* edge */}
                <path
                  d="M559.9 387.43l165.2 110.14"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-2"
                />
                {/* node */}
                <path
                  d="M802.5 202.5c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z"
                  strokeWidth="5"
                  fill="currentColor"
                  className="pulse-3"
                />
                <path
                  d="M87.5 362.5h390"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-4"
                />
                <path
                  d="M327.5 202.5h390"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-4"
                />
                <path
                  d="M762.5 247.5v230"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-2"
                />
                {/* node */}
                <path
                  d="M562.5 42.5c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z"
                  strokeWidth="5"
                  fill="currentColor"
                  className="pulse-1"
                />
                {/* edge */}
                <path
                  d="M319.92 177.56L485.08 67.44"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-2"
                />
                {/* edge */}
                <path
                  d="M79.92 337.56l165.16-110.12"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-4"
                />
                {/* edge */}
                <path
                  d="M560.9 339.13l164.2-111.67"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-4"
                />
                {/* edge */}
                <path
                  d="M522.5 87.5v230"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-2"
                />
                {/* node */}
                <path
                  d="M322.5 522.5c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40z"
                  strokeWidth="5"
                  fill="currentColor"
                  className="pulse-5"
                />
                <path
                  d="M282.5 247.5v230"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-6"
                />

                <path
                  d="M320.1 497.82l165.23-110.04"
                  strokeWidth="5"
                  fill="none"
                  className="pulse-6"
                />
                {/* connector dots */}
                <path
                  d="M81.34 339.58l-2.22 1.48-.83-1.5-1.93-2.6 2.23-1.5zM246.7 225.44l1.93 2.6-2.23 1.5-2.74-4.12 2.22-1.48z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M762.47 245l2.5-.1v2.67h-4.94v-2.72zM764.97 480.15l-2.44-.15-2.5.1v-2.67h4.94z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M762.47 245l2.5-.1v2.67h-4.94v-2.72zM764.97 480.15l-2.44-.15-2.5.1v-2.67h4.94z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M327.57 204.97h-2.72l.15-2.44-.1-2.5h2.67zM720 202.47l.1 2.5h-2.67v-4.94h2.72z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M44.97 320.15l-2.44-.15-2.5.1v-2.67h4.94zM42.47 85l2.5-.1v2.67h-4.94v-2.72z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M44.97 320.15l-2.44-.15-2.5.1v-2.67h4.94zM42.47 85l2.5-.1v2.67h-4.94v-2.72z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M321.32 225.4l-2.75 4.12-2.18-1.45.6-.72 2.13-3.4zM488.6 336.93l-.6.72-2.13 3.4-2.2-1.46 2.76-4.12z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M561.32 385.4l-2.75 4.12-2.18-1.45.6-.72 2.13-3.4zM728.6 496.93l-.6.72-2.13 3.4-2.2-1.45 2.76-4.12z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M87.57 364.98h-2.72l.15-2.45-.1-2.5h2.67zM480 362.47l.1 2.5h-2.67v-4.94h2.72z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M81.32 65.4l-2.75 4.12-2.18-1.45.6-.72 2.13-3.4zM248.6 176.93l-.6.72-2.13 3.4-2.2-1.46 2.76-4.12z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M562.35 341.14l-2.3 1.57-1.76-3.14-.8-1.1 2.06-1.4zM726.7 225.44l1.93 2.6-2.2 1.5-2.78-4.1 2.23-1.5z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M321.34 179.58l-2.22 1.48-.83-1.5-1.93-2.6 2.23-1.5zM486.7 65.44l1.93 2.6-2.23 1.5-2.74-4.12 2.22-1.48z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M282.47 245l2.5-.1v2.67h-4.94v-2.72zM284.97 480.15l-2.44-.15-2.5.1v-2.67h4.94z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M522.47 85l2.5-.1v2.67h-4.94v-2.72zM524.97 320.15l-2.44-.15-2.5.1v-2.67h4.94z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
                {/* connector dots */}
                <path
                  d="M321.53 499.84l-2.25 1.5-1-1.78-1.72-2.35 2.23-1.48zM486.7 385.44l2.18 2.95-2.23 1.48-2.74-4.13 2.18-1.44z"
                  strokeWidth=".05"
                  fill="currentColor"
                  className="pulse-path"
                />
                {/* connector dots */}
                <path
                  d="M522.47 85l2.5-.1v2.67h-4.94v-2.72zM524.97 320.15l-2.44-.15-2.5.1v-2.67h4.94z"
                  strokeWidth=".05"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-24">
          <p className="text-tertiary text-2xl text-center italic">
            &quot;The question is no longer whether an application is
            distributed,
          </p>
          <p className="text-tertiary text-2xl text-center italic">
            but only to what extent an application is distributed.&quot;
          </p>
          <p className="text-tertiary text-2xl text-center font-bold mt-6">
            — Dominik Tornow
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center my-24">
          <h2 className="mt-12 text-3xl md:text-4xl lg:text-6xl py-12 text-tertiary">
            Complexity is dead
          </h2>
          <p className="text-2xl">
            Dead Simple to use, Dead Simple to understand, Dead Simple to
            operate.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center my-24">
          <div className="my-24 relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-primary text-tertiary overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={120}
              height={120}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 432 472"
              className="relative z-10"
            >
              <g>
                <path
                  className="echo-stroke-fade"
                  strokeWidth="30"
                  d="M218.632,60C107.088,60,15.374,138.248,15.374,236.252C15.374,292.38,39.0338,336.722,75.978,366.934C112.825,397.067,162.68,413,215.11,413C266.913,413,316.754,397.512,353.75,367.861C390.854,338.124,414.845,294.27,414.845,238.237C414.845,140.526,330.503,60,218.632,60Z"
                />
                <ellipse
                  className="echo-fill-fade"
                  cx="109"
                  cy="236"
                  rx="50"
                  ry="55"
                  fill="currentColor"
                  strokeWidth="0"
                />
                <ellipse
                  className="echo-fill-fade"
                  cx="321"
                  cy="234"
                  rx="50"
                  ry="55"
                  fill="currentColor"
                  strokeWidth="0"
                />
                <rect
                  className="echo-fill-fade"
                  width="8"
                  height="16"
                  x="204"
                  y="282"
                  rx="4"
                  fill="currentColor"
                  strokeWidth="0"
                  transform="rotate(25 204 282)"
                />
                <rect
                  className="echo-fill-fade"
                  width="8"
                  height="16"
                  x="217"
                  y="285"
                  rx="4"
                  fill="currentColor"
                  strokeWidth="0"
                  transform="rotate(-25 217 285)"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center items-center my-24">
          <p className="text-tertiary text-2xl italic">
            &quot;Perfection is achieved, not when there is nothing more to add,
          </p>
          <p className="text-tertiary text-2xl italic">
            but when there is nothing left to take away.&quot;
          </p>
          <p className="text-tertiary text-2xl font-bold mt-6">
            — Antoine de Saint-Exupéry
          </p>
        </div>
        <div className="flex flex-col justify-center text-center items-center my-24">
          <h2 className="mt-12 text-3xl md:text-4xl lg:text-6xl py-12 text-tertiary">
            Our Products
          </h2>
          <p className="text-2xl">Resonate HQ proudly presents</p>
        </div>
        <div className="flex flex-col justify-center items-center my-48">
          <FeatureCards />
        </div>
      </div>
    </div>
  );
};

export default ResonateHQ;
