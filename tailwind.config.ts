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
        main: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        default: "var(--text-color)",
      },
      dropShadow: {
        md: "0 4px 3px var(--drop-shadow-color)",
      },
      screens: {
        nav: "1080px",
      }
    },
  },
  plugins: [],
};
export default config;
