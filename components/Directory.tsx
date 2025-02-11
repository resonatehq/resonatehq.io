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
      textColor: "text-secondary",
      fontType: "mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },
    {
      type: "link",
      content: "published articles",
      href: "https://journal.resonatehq.io",
      fontType: "mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },
    {
      type: "link",
      content: "software documentation",
      href: "https://docs.resonatehq.io",
      fontType: "mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },
    {
      type: "link",
      content: "webinar rsvp form",
      href: "/webinars",
      fontType: "mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },

    {
      type: "link",
      content: "chat with echo",
      href: "/echo",
      fontType: "mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },
  ];
  return <Terminal displayItems={displayItems} />;
};

export default Directory;
