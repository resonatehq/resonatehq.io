"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const DistributionGrid = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const cards = [
    {
      title: "Distribution",
      icon: "/images/dots.svg",
      icon2: "/images/dots.svg",
      isCircular: true,
    },
    {
      title: null,
      icon: "/images/right-arrow.svg",
      icon2: "/images/down-arrow.svg",
      isCircular: false,
    },
    {
      title: "Partial Failure",
      icon: "/images/swords.svg",
      icon2: "images/swords.svg",
      isCircular: true,
    },
    {
      title: null,
      icon: "images/left-arrow.svg",
      icon2: "images/up-arrow.svg",
      isCircular: false,
    },
    {
      title: "Recovery",
      icon: "/images/shield.svg",
      icon2: "/images/shield.svg",
      isCircular: true,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // Set to `true` if screen width is less than 640px
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Listen for resize events
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <div className="container w-full justify-center items-center mx-auto my-24">
      <div className="grid grid-cols-1">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-2 my-2 text-center text-tertiary h-30 w-30 flex flex-col items-center justify-center mx-auto"
          >
            {/* Title */}
            {card.title && (
              <div className="text-md font-light mb-2">{card.title}</div>
            )}

            {/* Image */}
            <div className="p-1 flex items-center justify-center">
              <Image
                src={card.icon2}
                alt={`${card.title || "Icon"}`}
                width="24"
                height="24"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistributionGrid;
