/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/sharedStyles.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        textDefault: "var(--text-default)",
        textLink: "var(--text-link)",

        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      dropShadow: {
        md: "0 4px 3px var(--drop-shadow-color)",
      },
      boxShadow: {
        "3xl":
          "0 20px 25px -5px var(--drop-shadow-color), 0 8px 10px -6px var(--drop-shadow-color)",
      },
      screens: {
        nav: "1080px",
      },
    },
  },
  plugins: [],
};
export default config;
