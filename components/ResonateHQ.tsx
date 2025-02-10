"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface DisplayItem {
  type: "link" | "text" | "ascii" | "social-profile" | "button" | "image";
  content: string;
  href?: string;
  iconClass?: string;
  textColor?: string;
  fontType: string;
  fontSize: string;
}

const ResonateHQ: React.FC = () => {
  const [loadedItems, setLoadedItems] = useState<number>(0);

  const displayItems: DisplayItem[] = [
    {
      type: "text",
      content: "initializing resonatehq.io...",
      textColor: "text-tertiary",
      fontType: "font-mono",
      fontSize: "text-md",
    },
    {
      type: "text",
      content: "resonatehq.io proudly presents:",
      textColor: "text-accent",
      fontType: "font-mono",
      fontSize: "text-md",
    },
    {
      type: "text",
      content: "Distributed Async Await",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-4xl",
    },
    {
      type: "text",
      content: "A holistic programming model for the cloud.",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-lg",
    },
    {
      type: "text",
      content:
        "Build with the language you love. ♥️ Adopt platform-level recovery and coordination.",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-lg",
    },
    {
      type: "text",
      content: "Concurrent, distributed, and durable promises and functions.",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-lg",
    },
    {
      type: "text",
      content: "No proprietary primitives. Extend it to any technology stack.",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-lg",
    },
    {
      type: "text",
      content:
        "Fully decentralized. No central element in the technology stack.",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-lg",
    },
    {
      type: "text",
      content: "Free and open source. Don't worry about vendor lock-in.",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-lg",
    },
    {
      type: "text",
      content: "More than Durable Execution.",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-lg",
    },
    {
      type: "text",
      content:
        "Durability without the complexity. Enjoy a dead simple programming model for the cloud.",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-lg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadedItems((prev) => (prev < displayItems.length ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex bg-white flex-col w-full max-w-[800px] min-w-[300px] items-center mx-auto p-6 font-mono border border-muted mt-4">
      <div className="flex flex-col space-y-2 w-full">
        {displayItems.slice(0, loadedItems).map((item, index) => (
          <div key={index} className="w-full min-h-[1rem]">
            {item.type === "text" && (
              <p
                className={`${item.textColor} whitespace-pre-wrap break-words ${item.fontType} ${item.fontSize}`}
              >
                {item.content}
              </p>
            )}
            {item.type === "ascii" && (
              <pre className="text-tertiary leading-none whitespace-pre-wrap break-words">
                {item.content}
              </pre>
            )}
            {item.type === "link" && (
              <p className="text-tertiary hover:text-gray-400 flex items-center gap-x-2 cursor-pointer whitespace-pre-wrap break-words">
                <a href={item.href} className="flex items-center">
                  <i className="bx bx-sm bx-link mr-2"></i>
                  <span>{item.content}</span>
                </a>
              </p>
            )}
            {item.type === "social-profile" && (
              <p className="cursor-pointer flex items-center gap-x-2 text-gray-200 hover:text-tertiary whitespace-pre-wrap break-words">
                <a href={item.href} className="flex items-center">
                  <i className={`${item.iconClass} mr-2`}></i>
                  <span>{item.content}</span>
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResonateHQ;
