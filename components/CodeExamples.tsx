"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const invokeHerePY = `# Run bar() here
@resonate.register
def foo(ctx):
    promise = yield ctx.lfi(bar)
    result = yield promise
    return result
`;

const invokeTherePY = `# Run bar() over there
@resonate.register
def foo(ctx):
    promise = yield ctx.rfi("bar").options(
        send_to=poll("service-bar")
    )
    result = yield promise
    return result
`;

const invokeDetachedPY = `# Run bar() detached
@resonate.register
def foo(ctx):
    yield ctx.detached("bar").options(
        send_to=poll("service-bar")
    )
    return
`;

const invokeHereTS = `// Run bar() here
export async function foo(ctx) {
    const result = await ctx.run(bar);
}
`;

const invokeThereTS = `// Coming soon...`;

const invokeDetachedTS = `// Coming soon...`;

const CodeExample = () => {
  const [selectedLangs, setSelectedLangs] = useState<{ [key: number]: string }>(
    {
      0: "python",
      1: "python",
      2: "python",
    }
  );

  const languages = [
    {
      name: "python",
      logo: (
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 17.056 17.056"
          enableBackground="new 0 0 17.056 17.056;"
          fill="currentColor"
          width={24}
          height={24}
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
      name: "typescript",
      logo: (
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          enableBackground="new 0 0 512 512;"
          width={24}
          height={24}
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

  const codeSnippets = [
    {
      title: "Local Function Invocation",
      python: invokeHerePY,
      typescript: invokeHereTS,
    },
    {
      title: "Remote Function Invocation",
      python: invokeTherePY,
      typescript: invokeThereTS,
    },
    {
      title: "Detached Function Invocation",
      python: invokeDetachedPY,
      typescript: invokeDetachedTS,
    },
  ];

  return (
    <section className="overflow-hidden py-10 mt-24 flex flex-col space-y-12 px-0 md:px-12 w-full">
      {codeSnippets.map((snippet, index) => (
        <div key={index} className="w-full">
          {/* Tabs for each code block */}
          <div className="flex flex-col text-center py-12">
            <p className="text-2xl">{snippet.title}</p>
          </div>
          <div className="flex bg-dark p-4">
            {languages.map((lang) => (
              <button
                key={lang.name}
                className={`flex items-center space-x-2 px-4 py-2 text-sm ${
                  selectedLangs[index] === lang.name
                    ? "bg-dark text-secondary"
                    : "text-tertiary hover:text-muted"
                }`}
                onClick={() =>
                  setSelectedLangs((prev) => ({ ...prev, [index]: lang.name }))
                }
              >
                {lang.logo}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="relative bg-dark text-white p-4">
            <SyntaxHighlighter
              language={selectedLangs[index]}
              style={vscDarkPlus}
              customStyle={{
                background: "#080A0E",
              }}
            >
              {snippet[selectedLangs[index] as "python" | "typescript"]}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CodeExample;
