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
        <div className="flex flex-col justify-center items-center my-24">
          <h2 className="text-2xl md:text-4xl lg:text-6xl py-12 text-tertiary">
            Complexity is dead.
          </h2>

          {/* Centered SVG inside a circle */}
          <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-primary text-tertiary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={120}
              height={120}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 432 472"
            >
              <g>
                <path
                  strokeWidth="30"
                  d="M218.632,60C107.088,60,15.374,138.248,15.374,236.252C15.374,292.38,39.0338,336.722,75.978,366.934C112.825,397.067,162.68,413,215.11,413C266.913,413,316.754,397.512,353.75,367.861C390.854,338.124,414.845,294.27,414.845,238.237C414.845,140.526,330.503,60,218.632,60Z"
                />
                <ellipse
                  cx="109"
                  cy="236"
                  fill="currentColor"
                  rx="50"
                  ry="55"
                />
                <ellipse
                  cx="321"
                  cy="234"
                  fill="currentColor"
                  rx="50"
                  ry="55"
                />
                <rect
                  width="8"
                  height="16"
                  x="204"
                  y="282"
                  fill="currentColor"
                  rx="4"
                  transform="rotate(25 204 282)"
                />
                <rect
                  width="8"
                  height="16"
                  x="217"
                  y="285"
                  fill="currentColor"
                  rx="4"
                  transform="rotate(-25 217 285)"
                />
              </g>
            </svg>
          </div>

          <p className="text-tertiary text-md flex items-center mt-12">
            resonatehq.io proudly presents:
          </p>
        </div>
        <FeatureCards />
        <div className="my-48">
          <p className="text-tertiary text-2xl text-center italic">
            &quot;Perfection is achieved, not when there is nothing more to add,
          </p>
          <p className="text-tertiary text-2xl text-center italic">
            but when there is nothing left to take away.&quot;
          </p>
          <p className="text-tertiary text-2xl text-center font-bold mt-6">
            — Antoine de Saint-Exupéry
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResonateHQ;
