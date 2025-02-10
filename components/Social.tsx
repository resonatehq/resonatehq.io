"use client";
import React, { useState, useEffect } from "react";

interface DisplayItem {
  type: "link" | "text" | "ascii" | "social-profile" | "button" | "image";
  content: string;
  href?: string;
  iconClass?: string;
  textColor?: string;
  fontType: "mono" | "openSans";
  fontSize: string;
}

const ResonateHQ: React.FC = () => {
  const [loadedItems, setLoadedItems] = useState<number>(0);

  const displayItems: DisplayItem[] = [
    {
      type: "text",
      content: "social links:",
      textColor: "text-tertiary",
      fontType: "mono",
      fontSize: "text-md",
    },
    {
      type: "social-profile",
      content: "github",
      href: "https://github.com/resonatehq",
      iconClass: "bx bx-sm bxl-github",
      fontType: "mono",
      fontSize: "text-md",
    },
    {
      type: "social-profile",
      content: "linkedin",
      href: "https://www.linkedin.com/company/resonatehq",
      iconClass: "bx bx-sm bxl-linkedin",
      fontType: "mono",
      fontSize: "text-md",
    },
    {
      type: "social-profile",
      content: "twitter / x",
      href: "https://twitter.com/resonatehq",
      iconClass: "bx bx-sm bxl-twitter",
      fontType: "mono",
      fontSize: "text-md",
    },
    {
      type: "social-profile",
      content: "youtube",
      href: "https://www.youtube.com/@resonatehqio",
      iconClass: "bx bx-sm bxl-youtube",
      fontType: "mono",
      fontSize: "text-md",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadedItems((prev) => (prev < displayItems.length ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex bg-white flex-col w-full max-w-[800px] min-w-[300px] items-center mx-auto p-6 font-mono border border-muted mt-4 mb-4">
      <div className="flex flex-col space-y-2 w-full">
        {displayItems.slice(0, loadedItems).map((item, index) => (
          <div key={index} className="w-full min-h-[1rem]">
            {item.type === "text" && (
              <p
                className={`${item.textColor} whitespace-pre-wrap break-words`}
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
              <p className="cursor-pointer flex items-center gap-x-2 text-tertiary hover:text-muted whitespace-pre-wrap break-words ${item.fontSize} font-${item.fontType}">
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
