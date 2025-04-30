import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const footerLinks = [
  {
    href: "https://journal.resonatehq.io",
    icon: "bx-pen",
    title: "journal",
    description: "Technical articles, announcements, and more",
  },
  {
    href: "https://docs.resonatehq.io",
    icon: "bx-code-block",
    title: "documentation",
    description: "How-to guides, references, and usage tutorials",
  },
  {
    href: "/rsvp",
    icon: "bx-calendar-event",
    title: "rsvp",
    description: "RSVP for our next online event",
  },
  {
    href: "#",
    icon: "bx-chat",
    title: "echo",
    description: "Ask our AI assistant (Echo) a question",
    extraClass: "ask-echo",
  },
  {
    href: "https://resonatehq.io/discord",
    icon: "bxl-discord",
    title: "discord",
    description: "Get support and chat with our community",
  },
  {
    href: "https://github.com/resonatehq",
    icon: "bxl-github",
    title: "github",
    description: "View and contribute to the source code",
  },
  {
    href: "https://www.linkedin.com/company/resonatehqio",
    icon: "bxl-linkedin",
    title: "linkedin",
    description: "Follow us on LinkedIn",
  },
  {
    href: "https://twitter.com/resonatehqio",
    icon: "bxl-twitter",
    title: "twitter",
    description: "Follow our updates on Twitter/X",
  },
  {
    href: "https://www.youtube.com/@resonatehqio",
    icon: "bxl-youtube",
    title: "youtube",
    description: "Demos, webinars, and unplugged sessions",
  },
  {
    href: "/privacy-policy",
    icon: "bx-info-circle",
    title: "privacy policy",
    description: "Your data rights and protections",
  },
  {
    href: "/terms-and-conditions",
    icon: "bx-info-circle",
    title: "terms & conditions",
    description: "Our legal terms and expectations",
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      className={`max-w-[1200px] min-w-[300px] bg-primary p-8 flex flex-col items-center w-full mx-auto border-l border-r border-muted ${openSans.className}`}
    >
      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-12 text-center">
        {footerLinks.map(({ href, icon, title, description, extraClass }) => (
          <a
            key={title}
            href={href}
            className={`group border border-tertiary p-4 transition-colors bg-primary hover:border-muted hover:text-muted text-tertiary ${
              extraClass ?? ""
            }`}
            target={href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <div className="flex flex-col justify-between h-full min-h-[140px] py-6">
              <div className="flex items-center justify-center gap-2 mb-2 text-lg font-semibold">
                <i className={`bx bx-sm ${icon}`}></i>
                <span>{title}</span>
              </div>
              <p className="text-sm opacity-80">{description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Copyright Section */}
      <p className="text-md text-tertiary text-center font-mono">
        &copy; {new Date().getFullYear()} Resonate HQ, Inc.
      </p>
    </footer>
  );
};

export default Footer;
