"use client";
import React from "react";
import Terminal from "@/components/Terminal";
import { Open_Sans } from "next/font/google";
import HeroSection from "@/components/HeroSection";

const openSans = Open_Sans({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ResonateHQ: React.FC = () => {
  const displayItems = [
    {
      type: "text",
      content: "initializing resonatehq.io...",
      textColor: "text-tertiary",
      fontType: "font-mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },
    {
      type: "text",
      content: "resonatehq.io proudly presents:",
      textColor: "text-secondary",
      fontType: "font-mono",
      fontSize: "text-md",
      containerClass: "border-l-4 border-secondary pl-4",
    },
    {
      type: "text",
      content: "Distributed",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-4xl",
      containerClass:
        "text-center md:text-6xl lg:text-8xl md:py-4 mt-4 md:mt-8 font-bold",
    },
    {
      type: "text",
      content: "Async Await",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-4xl",
      containerClass:
        "text-center md:text-6xl lg:text-8xl md:py-4 mb-4 md:mb-8 font-bold",
    },
    {
      type: "text",
      content: "— an open specification,",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-2xl",
      containerClass: "text-center",
    },
    {
      type: "text",
      content: "defining a holistic programming model for the cloud.",
      textColor: "text-tertiary",
      fontType: openSans.className,
      fontSize: "text-2xl",
      containerClass: "text-center",
    },
    {
      type: "button",
      content: "Read the spec",
      onClick: () => (window.location.href = "/"),
      containerClass:
        "mt-6 mb-6 md:mt-12 md:mb-12 flex justify-center items-center",
    },
    {
      type: "text",
      content:
        "Distributed Async Await, made possible by an Asynchronous RPC specification and a Sequential Programming specifiction, brings scalability and reliability to the language you love.",
      textColor: "text-tertiary",
      fontType: "mono",
      fontSize: "text-lg",
      containerClass:
        "mt-6 mb-6 md:mt-12 md:mb-12 leading-loose border-l-4 border-secondary pl-4",
    },
    {
      type: "component",
      component: <HeroSection />,
      containerClass: "font-mono",
    },
    {
      type: "text",
      content:
        "Distributed Async Await, extends the async await programming model, with concurrent, distributed, and durable promises and functions, making distributed computing a first-class citizen.",
      textColor: "text-tertiary",
      fontType: "mono",
      fontSize: "text-lg",
      containerClass:
        "mt-6 mb-6 md:mt-12 md:mb-12 leading-loose border-l-4 border-secondary pl-4",
    },
    {
      type: "image",
      content: "promise and function call graph",
      href: "/images/call-graph-5.svg",
      imageWidth: "722",
      imageHeight: "322",
      containerClass: "mt-6 mb-6 px-24",
    },
    {
      type: "text",
      content:
        "Resonate HQ's implementation, Resonate, is a free and open source implementation of the Distributed Async Await specification. It is fully decentralized, can be extended to any technology stack, and has no proprietary primitives.",
      textColor: "text-tertiary",
      fontType: "mono",
      fontSize: "text-lg",
      containerClass:
        "mt-6 mb-6 md:mt-12 md:mb-12 leading-loose border-l-4 border-secondary pl-4",
    },
    {
      type: "image",
      content: "promise and function call graph",
      href: "/images/connected-nodes.svg",
      imageWidth: "722",
      imageHeight: "322",
      containerClass: "mt-6 mb-6 px-24 md:px-48",
    },
    {
      type: "text",
      content:
        "Distributed Async Await is more than Durable Execution. Enjoy a dead simple programming model for the cloud.",
      textColor: "text-tertiary",
      fontType: "font-mono",
      fontSize: "text-lg",
      containerClass:
        "mt-6 mb-6 md:mt-12 md:mb-12 leading-loose border-l-4 border-secondary pl-4",
    },
  ];

  return <Terminal displayItems={displayItems} />;
};

export default ResonateHQ;
