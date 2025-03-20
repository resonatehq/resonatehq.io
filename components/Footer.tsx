import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Footer: React.FC = () => {
  return (
    <footer className="p-8 flex flex-col items-center w-full mx-auto bg-primary border-t border-muted">
      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mb-12 text-center">
        <div className="mx-auto">
          <a
            href="https://journal.resonatehq.io"
            className="text-tertiary border-b border-transparent cursor-pointer hover:text-muted flex items-center gap-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-sm bx-pen"></i> journal
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="https://docs.resonatehq.io"
            className="text-tertiary border-b border-transparent cursor-pointer hover:text-muted flex items-center gap-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-sm bx-code-block"></i> documentation
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="/rsvp"
            className="text-tertiary border-b border-transparent cursor-pointer hover:text-muted flex items-center gap-x-2"
          >
            <i className="bx bx-sm bx-calendar-event"></i> rsvp
          </a>
        </div>
        <div className="mx-auto">
          <button className="text-tertiary border-b border-transparent cursor-pointer hover:text-muted flex items-center gap-x-2 ask-echo">
            <i className="bx bx-sm bx-chat"></i> echo
          </button>
        </div>
        <div className="mx-auto">
          <a
            href="https://resonatehq.io/discord"
            className="text-tertiary border-b border-transparent cursor-pointer hover:text-muted flex items-center gap-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-sm bxl-discord"></i> discord
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="https://github.com/resonatehq"
            className="text-tertiary border-b border-transparent cursor-pointer hover:text-muted flex items-center gap-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-sm bxl-github"></i> github
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="https://www.linkedin.com/company/resonatehqio"
            className="text-tertiary border-b border-transparent cursor-pointer hover:text-muted flex items-center gap-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-sm bxl-linkedin"></i> linkedin
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="https://twitter.com/resonatehqio"
            className="text-tertiary border-b border-transparent cursor-pointer hover:text-muted flex items-center gap-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-sm bxl-twitter"></i> twitter
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="https://www.youtube.com/@resonatehqio"
            className="text-tertiary border-b border-transparent cursor-pointer hover:text-muted flex items-center gap-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-sm bxl-youtube"></i> youtube
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="/privacy-policy"
            className="text-tertiary border-b border-transparent cursor-pointer hover:text-muted flex items-center gap-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-sm bx-info-circle"></i> privacy policy
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="/terms-and-conditions"
            className="text-tertiary border-b border-transparent cursor-pointer hover:text-muted flex items-center gap-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-sm bx-info-circle"></i> terms and conditions
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <p className={`text-md text-tertiary text-center font-mono`}>
        Copyright &copy; {new Date().getFullYear()} Resonate HQ, Inc.
      </p>
    </footer>
  );
};

export default Footer;
