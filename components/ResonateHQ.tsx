"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface NavItem {
  type: "link" | "text" | "ascii" | "social-profile";
  content: string;
  href?: string;
  iconClass?: string;
  textColor?: string;
}

const ResonateHQ: React.FC = () => {
  const [loadedItems, setLoadedItems] = useState<number>(0);

  const navItems: NavItem[] = [
    {
      type: "text",
      content: "initializing resonatehq.io...",
      textColor: "text-green-400",
    },
    { type: "ascii", content: "                                             " },
    { type: "ascii", content: "                @@@@@@@@@@@@@                " },
    { type: "ascii", content: "            @@@@@@@@@@@@@@@@@@@@@            " },
    { type: "ascii", content: "         @@@@@@               @@@@@@         " },
    { type: "ascii", content: "       @@@@@                      @@@@       " },
    { type: "ascii", content: "     @@@@                           @@@@     " },
    { type: "ascii", content: "    @@@@                             @@@@    " },
    { type: "ascii", content: "   @@@@                               @@@@   " },
    { type: "ascii", content: "  @@@     @@@@@              .@@@@@@    @@@  " },
    { type: "ascii", content: "  @@@   @@@@@@@@@           @@@@@@@@@  @@@@  " },
    { type: "ascii", content: "  @@@   @@@@@@@@@           @@@@@@@@@   @@@  " },
    { type: "ascii", content: "  @@@   @@@@@@@@@           @@@@@@@@@   @@@  " },
    { type: "ascii", content: "  @@@   @@@@@@@@@           @@@@@@@@@   @@@  " },
    { type: "ascii", content: "   @@@    @@@@@      @ @      @@@@@    @@@   " },
    { type: "ascii", content: "   @@@@                               @@@@   " },
    { type: "ascii", content: "    @@@@                             @@@@    " },
    { type: "ascii", content: "     @@@@                           @@@@     " },
    { type: "ascii", content: "       @@@@                       @@@@       " },
    { type: "ascii", content: "         @@@@@@               @@@@@@         " },
    { type: "ascii", content: "            @@@@@@@@@@@@@@@@@@@@@            " },
    { type: "ascii", content: "                @@@@@@@@@@@@@                " },
    { type: "ascii", content: "                                             " },
    {
      type: "text",
      content: "mission:",
      textColor: "text-green-400",
    },
    {
      type: "text",
      content: "build oss software for distributed system developers",
      textColor: "text-gray-200",
    },
    {
      type: "text",
      content: "motto:",
      textColor: "text-green-400",
    },
    { type: "text", content: "dead simple", textColor: "text-gray-200" },
    { type: "text", content: "directory:", textColor: "text-green-400" },
    {
      type: "link",
      content: "published articles",
      href: "https://journal.resonatehq.io",
    },
    {
      type: "link",
      content: "software documentation",
      href: "https://docs.resonatehq.io",
    },
    { type: "link", content: "webinar rsvp form", href: "/webinars" },
    {
      type: "link",
      content: "discord server",
      href: "https://resonatehq.io/discord",
    },
    { type: "link", content: "chat with echo", href: "/echo" },
    { type: "text", content: "social links:", textColor: "text-green-400" },
    {
      type: "social-profile",
      content: "github",
      href: "https://github.com/resonatehq",
      iconClass: "bx bx-sm bxl-github",
    },
    {
      type: "social-profile",
      content: "linkedin",
      href: "https://www.linkedin.com/company/resonatehq",
      iconClass: "bx bx-sm bxl-linkedin",
    },
    {
      type: "social-profile",
      content: "twitter / x",
      href: "https://twitter.com/resonatehq",
      iconClass: "bx bx-sm bxl-twitter",
    },
    {
      type: "social-profile",
      content: "youtube",
      href: "https://www.youtube.com/@resonatehqio",
      iconClass: "bx bx-sm bxl-youtube",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadedItems((prev) => (prev < navItems.length ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full max-w-[500px] min-w-[300px] items-center mx-auto bg-slate-900 p-6 font-mono text-green-400">
      <div className="flex flex-col space-y-2 w-full">
        {navItems.slice(0, loadedItems).map((item, index) => (
          <div key={index} className="w-full min-h-[1rem]">
            {item.type === "text" && (
              <p
                className={`${item.textColor} whitespace-pre-wrap break-words`}
              >
                {item.content}
              </p>
            )}
            {item.type === "ascii" && (
              <pre className="text-gray-200 leading-none whitespace-pre-wrap break-words">
                {item.content}
              </pre>
            )}
            {item.type === "link" && (
              <p className="text-gray-200 hover:text-gray-400 flex items-center gap-x-2 cursor-pointer whitespace-pre-wrap break-words">
                <a href={item.href} className="flex items-center">
                  <i className="bx bx-sm bx-link mr-2"></i>
                  <span>{item.content}</span>
                </a>
              </p>
            )}
            {item.type === "social-profile" && (
              <p className="cursor-pointer flex items-center gap-x-2 text-gray-200 hover:text-gray-400 whitespace-pre-wrap break-words">
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
