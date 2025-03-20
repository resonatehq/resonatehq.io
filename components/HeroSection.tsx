"use client";
import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const languages = [
    {
      name: "Python",
      svg: (
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 17.056 17.056"
          enableBackground="new 0 0 17.056 17.056;"
          fill="currentColor"
          width={40}
          height={40}
        >
          <g>
            <g>
              <path
                d="M11.298,8.02c1.295-0.587,1.488-5.055,0.724-6.371c-0.998-1.718-5.742-1.373-7.24-0.145
			C4.61,2.114,4.628,3.221,4.636,4.101h4.702v0.412H4.637c0,0.006-2.093,0.013-2.093,0.013c-3.609,0-3.534,7.838,1.228,7.838
			c0,0,0.175-1.736,0.481-2.606C5.198,7.073,9.168,8.986,11.298,8.02z M6.375,3.465c-0.542,0-0.981-0.439-0.981-0.982
			c0-0.542,0.439-0.982,0.981-0.982c0.543,0,0.982,0.44,0.982,0.982C7.358,3.025,6.918,3.465,6.375,3.465z"
              />
              <path
                d="M13.12,4.691c0,0-0.125,1.737-0.431,2.606c-0.945,2.684-4.914,0.772-7.045,1.738
			C4.35,9.622,4.155,14.09,4.92,15.406c0.997,1.719,5.741,1.374,7.24,0.145c0.172-0.609,0.154-1.716,0.146-2.596H7.603v-0.412h4.701
			c0-0.006,2.317-0.013,2.317-0.013C17.947,12.53,18.245,4.691,13.12,4.691z M10.398,13.42c0.542,0,0.982,0.439,0.982,0.982
			c0,0.542-0.44,0.981-0.982,0.981s-0.981-0.439-0.981-0.981C9.417,13.859,9.856,13.42,10.398,13.42z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      svg: (
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          enableBackground="new 0 0 512 512;"
          width={40}
          height={40}
          fill="currentColor"
          stroke="currentColor"
        >
          <g>
            <path d="M462,0H50C22.39,0,0,22.39,0,50v412c0,27.61,22.39,50,50,50h412c27.61,0,50-22.39,50-50V50C512,22.39,489.61,0,462,0z    M297,284.08h-64.22V467h-50.87V284.08H118V243h179V284.08z M462.88,434.57c-9.958,17.82-28.27,27.843-47.74,31.99   c-22.61,4.816-46.651,4.556-69.33,0.31c-11.11-2.08-20.73-5.21-28.87-9.38v-50.07c9.08,7.62,18.94,13.33,29.58,17.13   c10.64,3.81,21.39,5.71,32.241,5.71c9.602,0,20.289-1.184,28.559-6.49c5.673-3.621,9.469-9.333,9.47-16.188   c0.001-9.325-6.745-16.372-14.01-21.271c-10.64-7.175-22.874-11.833-34.66-16.74c-17.53-7.3-30.6-16.22-39.21-26.75   c-14.981-18.322-17.434-47.602-5.87-68.29c9.869-17.655,28.07-28.085,47.27-32.7c20.937-5.033,43.645-5.038,64.87-1.72   c9.02,1.41,17.34,3.57,24.96,6.49v46.78c-3.76-2.61-7.85-4.9-12.29-6.88c-8.755-3.904-18.204-6.544-27.7-7.83   c-9.499-1.27-19.489-1.491-28.871,0.71c-7.39,1.714-15.153,5.131-19.409,11.73c-1.77,2.77-2.66,5.87-2.66,9.31   c0,3.75,0.99,7.119,2.969,10.089c5.022,7.534,13.835,12.384,21.761,16.271c13.902,6.818,28.492,11.951,41.86,19.87   c12.964,7.652,24.492,18.33,30.13,32.54c2.71,6.83,4.07,14.78,4.07,23.85C470,415.56,467.63,426.07,462.88,434.57z" />
          </g>
        </svg>
      ),
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
  }, [languages.length]);

  return (
    <div className="relative overflow-hidden pt-6 pb-6 flex justify-center">
      {/* Circle Container for SVG */}
      <div className="w-20 h-20 flex items-center justify-center text-secondary transition-opacity duration-1000">
        <div
          className={`transition-opacity duration-1000 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {languages[currentLang].svg}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
