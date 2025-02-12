"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const PythonGrid = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const cards = [
    {
      title: "TypeScript",
      icon: "/images/typescript-solid.svg",
      animation: "slide-in-left",
      isCircular: true,
    },
    {
      title: null,
      icon: "/images/plus.svg",
      animation: null,
      isCircular: false,
    },
    {
      title: "Resonate",
      icon: "/images/echo-logo.svg",
      animation: "slide-in-bottom",
      isCircular: true,
    },
    {
      title: null,
      icon: "/images/equals.svg",
      animation: null,
      isCircular: false,
    },
    {
      title: "Unstoppable",
      icon: "/images/rocket.svg",
      animation: "slide-in-right",
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
    <div className="container mx-auto py-10 mb-24 lg:mb-36">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-2 text-center animate-${card.animation} ${
              card.isCircular
                ? "bg-white border border-slate-700 text-slate-700 rounded-full h-48 w-48 flex flex-col items-center justify-center mx-auto"
                : "bg-white text-white flex items-center justify-center"
            }`}
          >
            {/* Title */}
            <div className="text-xl font-light mb-2">{card.title}</div>
            {/* Image */}
            <div className="p-1 flex items-center justify-center">
              {card.isCircular ? (
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width="36"
                  height="36"
                />
              ) : (
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width="36"
                  height="36"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-top {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-bottom {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 1.5s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 1.5s ease-out;
        }
        .animate-slide-in-top {
          animation: slide-in-top 1.5s ease-out;
        }
        .animate-slide-in-bottom {
          animation: slide-in-bottom 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PythonGrid;
