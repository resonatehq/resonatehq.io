"use client";

import { useState, useEffect } from "react";
import Directory from "@/components/Directory";
import Social from "@/components/Social";
import Header from "@/components/Header";

export default function Echo() {
  const [messages, setMessages] = useState([
    "> Loading ResonateHQ environment...",
    "✅ Distributed Async Await ready",
    "✅ Concurrency Engine initialized",
    "✅ Event-driven architecture enabled",
    "I am Echo, the Resonate developer assistant. How can I help you?",
    "Here are some recommended questions to get started:",
  ]);

  const recommendedQuestions = [
    "How do I use Resonate?",
    "What is distributed async/await?",
    "Show me an example of durable promises.",
    "How does Resonate compare to Temporal?",
  ];

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, `$ ${input}`]);
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.kapa.ai/query/v1/projects/d33c5fc4-c9aa-4985-b545-cdde14de2111/chat/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "InQVpzgd.GdtYb8S2C2Cn5XiuWHhlFNSvABQguns7",
          },
          body: JSON.stringify({
            integration_id: "0f3cf17e-47fa-427a-b0fd-464d33f0bb16",
            query: input,
          }),
        }
      );

      const data = await response.json();
      setMessages((prev) => [...prev, data.answer]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        "⚠️ Error connecting to kapa.ai. Try again later.",
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col grid call-graph max-w-screen h-screen overflow-hidden">
      <Header />
      <Directory />
      {/* Terminal Window */}
      <div className="flex bg-white flex-col w-full max-w-[800px] min-w-[300px] mx-auto font-mono border border-muted mt-4">
        {/* Fake Terminal Header */}
        <div className="flex items-center px-6 py-4">
          <span className="w-3 h-3 bg-red-400 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full ml-2"></span>
          <span className="w-3 h-3 bg-green-400 rounded-full ml-2"></span>
          <span className="ml-auto text-secondary">echo@resonatehq.io:~$</span>
        </div>

        {/* Terminal Output (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-3 border-t border-b border-muted bg-primary p-6">
          {messages.map((msg, index) => (
            <p key={index} className="whitespace-pre-line">
              {msg}
            </p>
          ))}

          {/* Recommended Questions */}
          <div className="mt-3">
            {recommendedQuestions.map((question, index) => (
              <button
                key={index}
                className="block text-customBlue hover:text-blue-100 cursor-pointer mt-1"
                onClick={() => setInput(question)}
              >
                {`> ${question}`}
              </button>
            ))}
          </div>
        </div>

        {/* Input Field */}
        <div className="flex items-center px-6 py-4 bg-primary">
          <span className="mr-2 text-secondary">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="bg-transparent border-none outline-none text-secondary w-full"
            autoFocus
          />
        </div>
      </div>
      <Social />
    </div>
  );
}
