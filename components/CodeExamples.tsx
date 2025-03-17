"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const invokeHerePY = `@resonate.register
def foo(ctx):
    promise = yield ctx.lfi(bar)
    result = yield promise
    return result
`;

const invokeTherePY = `@resonate.register
def foo(ctx):
    promise = yield ctx.rfi("bar").options(
        send_to=poll("service-bar")
    )
    result = yield promise
    return result
`;

const invokeHereTS = `
export async function foo(ctx) {
    const result = await ctx.run(bar);
}
`;

const invokeThereTS = `
// Coming soon...
`;

const CodeExample = () => {
  const [selectedTab, setSelectedTab] = useState("python");

  return (
    <section className="overflow-hidden py-10 mt-24 flex-col space-y-12 md:space-y-24">
      {/* Language Tabs */}
      <div className="flex justify-center space-x-4">
        {["python", "typescript"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              selectedTab === tab ? "text-secondary" : "text-tertiary"
            } font-mono text-tertiart hover:text-secondary`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Code Example Section */}
      <div className="mx-auto max-w-[800px] px-4 lg:px-10 space-y-12 md:space-y-24">
        <p className="text-tertiary font-light text-center text-2xl">
          Run <span className="font-mono text-dark font-bold">bar()</span> here
        </p>

        <div className="relative bg-dark text-white p-4">
          <button
            className="absolute top-4 right-4 px-2 py-2 text-white hover:text-secondary"
            onClick={() =>
              navigator.clipboard.writeText(
                selectedTab === "python" ? invokeHerePY : invokeHereTS
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M4 20V10h10l.002 10zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10z" />
            </svg>
          </button>

          <div className="w-full">
            <SyntaxHighlighter
              language={selectedTab}
              style={tomorrow}
              showLineNumbers={false}
              customStyle={{
                background: "#080A0E",
                padding: "0px",
                borderRadius: 0,
                overflow: "scroll",
              }}
            >
              {selectedTab === "python" ? invokeHerePY : invokeHereTS}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[800px] px-4 lg:px-10 space-y-12 md:space-y-24">
        <p className="text-tertiary font-light text-center text-2xl">
          Run <span className="font-mono text-dark font-bold">bar()</span> over
          there
        </p>

        <div className="relative bg-dark text-white p-4">
          <button
            className="absolute top-4 right-4 px-2 py-2 text-white hover:text-secondary"
            onClick={() =>
              navigator.clipboard.writeText(
                selectedTab === "python" ? invokeTherePY : invokeThereTS
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M4 20V10h10l.002 10zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10z" />
            </svg>
          </button>

          <div className="overflow-auto w-full">
            <SyntaxHighlighter
              language={selectedTab}
              style={tomorrow}
              showLineNumbers={false}
              customStyle={{
                background: "#080A0E",
                padding: "0px",
                borderRadius: 0,
              }}
            >
              {selectedTab === "python" ? invokeTherePY : invokeThereTS}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
