import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-8 flex flex-col items-center">
      {/* Links section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mb-12 text-center">
        <div className="mx-auto">
          <a
            href="/features"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            Features
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="https://docs.resonatehq.io"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            Docs
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="https://resonatehqio.substack.com/s/blog"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            Blog
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="/python-sdk"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            Python SDK
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="/typescript-sdk"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            TypeScript SDK
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="https://github.com/resonatehq/resonate"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            Server
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="/webinars"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            Webinars
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="/how-it-works"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            How it works
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="https://github.com/resonatehq/durable-promise-specification"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            Durable Promise spec
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="/subscribe"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            Subscribe
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="/privacy-policy"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            Privacy Policy
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="/terms-and-conditions"
            className="text-slate-700 border-b border-transparent hover:border-slate-700 cursor-pointer hover:text-slate-500"
          >
            Terms and Conditions
          </a>
        </div>
      </div>

      {/* Social media icons */}
      <div className="flex justify-center py-6 space-x-4">
        <a
          href="https://twitter.com/resonatehqio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resonate HQ Twitter"
        >
          <i className="bx bx-sm bxl-twitter text-slate-700 hover:text-slate-500 cursor-pointer"></i>
        </a>
        <a
          href="https://resonatehq.io/discord"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resonate HQ Discord"
        >
          <i className="bx bx-sm bxl-discord text-slate-700 hover:text-slate-500 cursor-pointer"></i>
        </a>
        <a
          href="https://github.com/resonatehq/resonate"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resonate HQ GitHub"
        >
          <i className="bx bx-sm bxl-github text-slate-700 hover:text-slate-500 cursor-pointer"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/resonatehqio"
          rel="noopener noreferrer"
          aria-label="Resonate HQ LinkedIn"
        >
          <i className="bx bx-sm bxl-linkedin text-slate-700 hover:text-slate-500 cursor-pointer"></i>
        </a>
      </div>

      {/* Copyright section */}
      <p className="text-md text-center">
        Copyright &copy; {new Date().getFullYear()} Resonate HQ, Inc.
      </p>
    </footer>
  );
};

export default Footer;
