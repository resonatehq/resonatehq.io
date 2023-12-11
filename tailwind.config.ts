import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // from docusaurus
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "Cantarell",
          "Noto Sans",
          "sans-serif",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        link: "#617196",
        "bright-gray": {
          "50": "#f6f7f9",
          "100": "#ebedf3",
          "200": "#d3d7e4",
          "300": "#adb6cc",
          "400": "#818faf",
          "500": "#617196",
          "600": "#4c597d",
          "700": "#3f4965",
          "800": "#373f56",
          "900": "#313749",
          "950": "#212430",
        },
        "dark-gray": {
          "600": "#444950",
          "700": "#242526",
          "800": "#1c1e21",
          "900": "#1b1b1d",
        },
      },
    },
  },
  plugins: [],
};

export default config;
