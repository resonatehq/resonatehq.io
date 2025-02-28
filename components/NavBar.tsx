"use client";
import React, { useState } from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed w-full z-50">
      {/* Navbar */}
      <nav className="bg-primary border-b-2 border-muted">
        <div className="flex justify-between items-center px-6 lg:px-12 py-3">
          {/* Logo - Now inline with menu */}
          <a href="/" className="flex items-center">
            <Image
              src="/images/echo-logo.svg"
              alt="Resonate Logo"
              height={32}
              width={32}
              className="max-h-[32px]"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="xl:hidden text-tertiary hover:text-secondary text-3xl font-bold"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex xl:space-x-6 text-md font-light">
            <a
              href="https://journal.resonatehq.io"
              className="flex items-center gap-x-2 text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bx-pen"></i> journal
            </a>
            <a
              href="https://docs.resonatehq.io"
              className="flex items-center gap-x-2 text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bx-code-block"></i> documentation
            </a>
            <a
              href="/rsvp"
              className="flex items-center gap-x-2 text-tertiary hover:text-secondary"
            >
              <i className="bx bx-sm bx-calendar-event"></i> rsvp
            </a>
            {/* Custom Echo button (not a link) */}
            <button className="flex items-center gap-x-2 text-tertiary hover:text-secondary ask-echo">
              <i className="bx bx-sm bx-chat"></i> echo
            </button>
            <a
              href="https://resonatehq.io/discord"
              className="flex items-center gap-x-2 text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-discord"></i> discord
            </a>
            <a
              href="https://github.com/resonatehq"
              className="flex items-center gap-x-2 text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-github"></i> github
            </a>
            <a
              href="https://www.linkedin.com/company/resonatehq"
              className="flex items-center gap-x-2 text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-linkedin"></i> linkedin
            </a>
            <a
              href="https://twitter.com/resonatehq"
              className="flex items-center gap-x-2 text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-twitter"></i> twitter
            </a>
            <a
              href="https://www.youtube.com/@resonatehqio"
              className="flex items-center gap-x-2 text-tertiary hover:text-secondary"
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
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bx-pen"></i> journal
            </a>
            <a
              href="https://docs.resonatehq.io"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bx-code-block"></i> documentation
            </a>
            <a
              href="/rsvp"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-secondary"
            >
              <i className="bx bx-sm bx-calendar-event"></i> rsvp
            </a>
            {/* Custom Echo button (not a link) */}
            <button className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-secondary ask-echo">
              <i className="bx bx-sm bx-chat"></i> echo
            </button>
            <a
              href="https://resonatehq.io/discord"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-discord"></i> discord
            </a>
            <a
              href="https://github.com/resonatehq"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-github"></i> github
            </a>
            <a
              href="https://www.linkedin.com/company/resonatehq"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-linkedin"></i> linkedin
            </a>
            <a
              href="https://twitter.com/resonatehq"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-sm bxl-twitter"></i> twitter
            </a>
            <a
              href="https://www.youtube.com/@resonatehqio"
              className="py-2 flex items-center justify-center gap-x-2 text-md font-light text-tertiary hover:text-secondary"
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
