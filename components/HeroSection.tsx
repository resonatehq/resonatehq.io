"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const languages = [
    { name: "Python", logo: "/images/python.svg", link: "/python-sdk" },
    {
      name: "TypeScript",
      logo: "/images/typescript.svg",
      link: "typescript-sdk",
    },
  ];
  const [currentLang, setCurrentLang] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Change language every 3 seconds with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Trigger fade out
      setTimeout(() => {
        setCurrentLang((prevLang) => (prevLang + 1) % languages.length);
        setIsFading(false); // Trigger fade in
      }, 1000); // Duration of the fade-out effect
    }, 6000);
    return () => clearInterval(interval); // Cleanup on unmount
  });

  return (
    <div className="relative overflow-hidden pt-6 pb-6 md:pt-12 md:pb-12">
      <div className="text-center">
        <div className="relative inline-block">
          <h1 className="text-4xl tracking-tight text-tertiary">
            <span
              className={`transition-opacity duration-1000 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              <a href={languages[currentLang].link}>
                {languages[currentLang].name}
              </a>
            </span>
          </h1>
          {/* Logo positioned at the bottom right */}
          <Image
            src={languages[currentLang].logo}
            alt={`${languages[currentLang].name} Logo`}
            className={`absolute bottom-[-10px] right-[-40px] w-8 transition-opacity duration-1000 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            width="512"
            height="512"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
