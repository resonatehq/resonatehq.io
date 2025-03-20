"use client";
import React, { useState } from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed w-full z-50">
      {/* Navbar */}
      <nav className="bg-primary border-b border-muted">
        <div className="flex justify-between items-center px-6 lg:px-12 py-3">
          {/* Logo - Now inline with menu */}
          <a
            href="/"
            className="flex items-center text-tertiary hover:text-muted"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 432 472"
            >
              <g>
                <path
                  strokeWidth="30"
                  d="M218.632,60C107.088,60,15.374,138.248,15.374,236.252C15.374,292.38,39.0338,336.722,75.978,366.934C112.825,397.067,162.68,413,215.11,413C266.913,413,316.754,397.512,353.75,367.861C390.854,338.124,414.845,294.27,414.845,238.237C414.845,140.526,330.503,60,218.632,60Z"
                />
                <ellipse
                  cx="109"
                  cy="236"
                  fill="currentColor"
                  rx="50"
                  ry="55"
                />
                <ellipse
                  cx="321"
                  cy="234"
                  fill="currentColor"
                  rx="50"
                  ry="55"
                />
                <rect
                  width="8"
                  height="16"
                  x="204"
                  y="282"
                  fill="currentColor"
                  rx="4"
                  transform="rotate(25 204 282)"
                />
                <rect
                  width="8"
                  height="16"
                  x="217"
                  y="285"
                  fill="currentColor"
                  rx="4"
                  transform="rotate(-25 217 285)"
                />
              </g>
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="xl:hidden text-tertiary hover:text-muted text-3xl font-bold"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex xl:space-x-6 text-md font-light">
            <a
              href="https://journal.resonatehq.io"
              className="flex items-center gap-x-2 text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bx-pen"></i> journal
            </a>
            <a
              href="https://docs.resonatehq.io"
              className="flex items-center gap-x-2 text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bx-code-block"></i> documentation
            </a>
            <a
              href="/rsvp"
              className="flex items-center gap-x-2 text-tertiary hover:text-muted"
            >
              <i className="bx bx-sm bx-calendar-event"></i> rsvp
            </a>
            {/* Custom Echo button (not a link) */}
            <button className="flex items-center gap-x-2 text-tertiary hover:text-muted ask-echo">
              <i className="bx bx-sm bx-chat"></i> echo
            </button>
            <a
              href="https://resonatehq.io/discord"
              className="flex items-center gap-x-2 text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-discord"></i> discord
            </a>
            <a
              href="https://github.com/resonatehq"
              className="flex items-center gap-x-2 text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-github"></i> github
            </a>
            <a
              href="https://www.linkedin.com/company/resonatehqio"
              className="flex items-center gap-x-2 text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-linkedin"></i> linkedin
            </a>
            <a
              href="https://twitter.com/resonatehqio"
              className="flex items-center gap-x-2 text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-twitter"></i> twitter
            </a>
            <a
              href="https://www.youtube.com/@resonatehqio"
              className="flex items-center gap-x-2 text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-youtube"></i> youtube
            </a>
          </div>
        </div>

        {/* Mobile Menu - Display when toggled */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col text-center py-4">
            <a
              href="https://journal.resonatehq.io"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bx-pen"></i> journal
            </a>
            <a
              href="https://docs.resonatehq.io"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bx-code-block"></i> documentation
            </a>
            <a
              href="/rsvp"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-muted"
            >
              <i className="bx bx-sm bx-calendar-event"></i> rsvp
            </a>
            {/* Custom Echo button (not a link) */}
            <button className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-muted ask-echo">
              <i className="bx bx-sm bx-chat"></i> echo
            </button>
            <a
              href="https://resonatehq.io/discord"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-discord"></i> discord
            </a>
            <a
              href="https://github.com/resonatehq"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-github"></i> github
            </a>
            <a
              href="https://www.linkedin.com/company/resonatehqio"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-linkedin"></i> linkedin
            </a>
            <a
              href="https://twitter.com/resonatehqio"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-twitter"></i> twitter
            </a>
            <a
              href="https://www.youtube.com/@resonatehqio"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-youtube"></i> youtube
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
