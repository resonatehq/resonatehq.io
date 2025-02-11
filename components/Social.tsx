"use client";
import React, { useState, useEffect } from "react";
import Terminal from "@/components/Terminal";

const ResonateHQ: React.FC = () => {
  const [loadedItems, setLoadedItems] = useState<number>(0);

  const displayItems = [
    {
      type: "text",
      content: "social links:",
      textColor: "text-secondary",
      fontType: "mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },
    {
      type: "social-profile",
      content: "github",
      href: "https://github.com/resonatehq",
      iconClass: "bx bx-sm bxl-github",
      fontType: "mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },
    {
      type: "social-profile",
      content: "linkedin",
      href: "https://www.linkedin.com/company/resonatehq",
      iconClass: "bx bx-sm bxl-linkedin",
      fontType: "mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },
    {
      type: "social-profile",
      content: "twitter / x",
      href: "https://twitter.com/resonatehq",
      iconClass: "bx bx-sm bxl-twitter",
      fontType: "mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },
    {
      type: "social-profile",
      content: "youtube",
      href: "https://www.youtube.com/@resonatehqio",
      iconClass: "bx bx-sm bxl-youtube",
      fontType: "mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },
  ];

  return (
    <div className="mb-6">
      <Terminal displayItems={displayItems} />
    </div>
  );
};

export default ResonateHQ;
