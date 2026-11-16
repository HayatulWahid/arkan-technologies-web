import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        arkan: {
          bg: "#050914",
          card: "#0b1220",
          border: "#1e293b",
          emerald: "#10b981",
          cyan: "#06b6d4",
          muted: "#94a3b8",
        },
      },
    },
  },
  plugins: [],
};

export default config;