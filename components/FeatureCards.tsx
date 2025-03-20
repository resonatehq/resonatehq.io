"use client";
import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  link: string;
  hoverColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  link,
  hoverColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={link}>
      <div
        className={`text-tertiary bg-primary border p-6 text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
          isHovered ? hoverColor : "border-muted"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1
          className={`text-lg md:text-2xl lg:text-4xl py-6 border-l-8 border-r-8 ${
            isHovered ? hoverColor : "border-muted"
          }`}
        >
          {title}
        </h1>
        <p className="text-md md:text-lg lg:text-xl px-4 py-4">{description}</p>
        <div className="py-8 flex justify-center items-center text-center">
          <button
            onClick={() => (window.location.href = link)}
            className="font-mono flex items-center mt-2 mx-2 md:mx-4 px-2 md:px-4 py-2"
          >
            Learn more
            <svg
              height="20"
              viewBox="0 0 64 64"
              width="20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <g id="Glyph">
                <path d="m58.71 31.29-18-18a1 1 0 0 0 -1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42l9.05 9.05h-38.1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h38.1l-9.05 9a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.37z" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </a>
  );
};

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <FeatureCard
        title="Resonate"
        description="Get started using an open-source implementation of Distributed Async Await."
        link="/resonate"
        hoverColor="border-secondary"
      />
      <FeatureCard
        title="Distributed Async Await"
        description="Use the open specification to craft your own distributed programming model."
        link="/distributed-async-await"
        hoverColor="border-accent"
      />
    </div>
  );
};

export default FeatureCards;
