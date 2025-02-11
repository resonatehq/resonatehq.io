"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ReactNode } from "react";

interface DisplayItem {
  type: "link" | "text" | "ascii" | "social-profile" | "button" | "image";
  content: string;
  href?: string;
  iconClass?: string;
  textColor?: string;
  fontType?: string;
  fontSize?: string;
  onClick?: () => void;
  containerClass?: string; // Allow custom container styles
  imageWidth?: number; // Define width for the image
  imageHeight?: number; // Define height for the image
  component?: ReactNode;
}

interface TerminalProps {
  displayItems: DisplayItem[];
}

const Terminal: React.FC<TerminalProps> = ({ displayItems }) => {
  const [loadedItems, setLoadedItems] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadedItems((prev) => (prev < displayItems.length ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(interval);
  }, [displayItems]);

  return (
    <div className="flex bg-white flex-col w-full max-w-[800px] min-w-[300px] items-center mx-auto py-8 px-12 font-mono border border-1 border-muted mt-2 mb-2">
      <div className="flex flex-col space-y-2 w-full">
        {displayItems.slice(0, loadedItems).map((item, index) => (
          <div key={index} className="w-full min-h-[1rem]">
            {item.type === "text" && (
              <div
                className={`${item.fontSize} ${
                  item.containerClass ? item.containerClass : ""
                }`}
              >
                <p
                  className={`${item.textColor} whitespace-pre-wrap break-words ${item.fontType}`}
                >
                  {item.content}
                </p>
              </div>
            )}
            {item.type === "ascii" && (
              <pre className="text-tertiary leading-none whitespace-pre-wrap break-words">
                {item.content}
              </pre>
            )}
            {item.type === "link" && (
              <div
                className={`${item.fontSize} ${
                  item.containerClass ? item.containerClass : ""
                }`}
              >
                <p className="text-tertiary hover:text-gray-400 flex items-center gap-x-2 cursor-pointer whitespace-pre-wrap break-words">
                  <a href={item.href} className="flex items-center">
                    <i className="bx bx-sm bx-link mr-2"></i>
                    <span className="hover:underline">{item.content}</span>
                  </a>
                </p>
              </div>
            )}
            {item.type === "social-profile" && (
              <div className={`${item.containerClass} || ""`}>
                <p className="cursor-pointer flex items-center gap-x-2 text-tertiary hover:text-muted whitespace-pre-wrap break-words">
                  <a href={item.href} className="flex items-center">
                    <i className={`${item.iconClass} mr-2`}></i>
                    <span className="hover:underline">{item.content}</span>
                  </a>
                </p>
              </div>
            )}
            {item.type === "button" && (
              <div className={`${item.containerClass} || ""`}>
                <button
                  onClick={item.onClick}
                  className="mt-2 px-4 py-2 text-white bg-tertiary hover:bg-muted transition rounded-md"
                >
                  {item.content}
                </button>
              </div>
            )}
            {item.type === "image" && item.href && (
              <div
                className={`flex items-center justify-center ${
                  item.containerClass || ""
                }`}
              >
                <Image
                  src={item.href}
                  alt={item.content}
                  width={item.imageWidth || 100} // Default to 100px if not specified
                  height={item.imageHeight || 100} // Default to 100px if not specified
                />
              </div>
            )}
            {item.type === "component" && item.component && (
              <div className={item.containerClass || ""}>{item.component}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
