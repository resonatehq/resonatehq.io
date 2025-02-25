"use client";
import React, { useState, useEffect } from "react";
import Terminal from "@/components/Terminal";
import Image from "next/image";

const Directory: React.FC = () => {
  const [loadedItems, setLoadedItems] = useState<number>(0);

  const displayItems = [
    {
      type: "text",
      content: "directory:",
      contentClass: "font-mono text-md text-tertiary",
      containerClass: "border-l-4 border-muted pl-4",
    },
    {
      type: "link",
      content: "journal",
      href: "https://journal.resonatehq.io",
      contentClass: "font-mono text-md text-tertiary",
      containerClass: "border-l-4 border-muted pl-4",
    },
    {
      type: "link",
      content: "documentation",
      href: "https://docs.resonatehq.io",
      contentClass: "font-mono text-md text-tertiary",
      containerClass: "border-l-4 border-muted pl-4",
    },
    {
      type: "link",
      content: "rsvp",
      href: "/rsvp",
      contentClass: "font-mono text-md text-tertiary",
      containerClass: "border-l-4 border-muted pl-4",
    },

    {
      type: "link",
      content: "echo",
      href: "/echo",
      contentClass: "font-mono text-md text-tertiary",
      containerClass: "border-l-4 border-muted pl-4",
    },
    {
      type: "social-profile",
      content: "discord",
      href: "https://resonatehq.io/discord",
      iconClass: "bx bx-sm bxl-discord",
      contentClass: "text-tertiary text-md font-mono",
      containerClass: "border-l-4 border-muted pl-4",
    },
    {
      type: "social-profile",
      content: "github",
      href: "https://github.com/resonatehq",
      iconClass: "bx bx-sm bxl-github",
      contentClass: "text-tertiary text-md font-mono",
      containerClass: "border-l-4 border-muted pl-4",
    },
    {
      type: "social-profile",
      content: "linkedin",
      href: "https://www.linkedin.com/company/resonatehq",
      iconClass: "bx bx-sm bxl-linkedin",
      contentClass: "text-tertiary text-md font-mono",
      containerClass: "border-l-4 border-muted pl-4",
    },
    {
      type: "social-profile",
      content: "twitter / x",
      href: "https://twitter.com/resonatehq",
      iconClass: "bx bx-sm bxl-twitter",
      contentClass: "text-tertiary text-md font-mono",
      containerClass: "border-l-4 border-muted pl-4",
    },
    {
      type: "social-profile",
      content: "youtube",
      href: "https://www.youtube.com/@resonatehqio",
      iconClass: "bx bx-sm bxl-youtube",
      contentClass: "text-tertiary text-md font-mono",
      containerClass: "border-l-4 border-muted pl-4",
    },
  ];
  return <Terminal displayItems={displayItems} />;
};

export default Directory;
