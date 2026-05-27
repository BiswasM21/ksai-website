import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        dark: {
          bg: "#030712",
          surface: "#0F172A",
          surface2: "#1E293B",
          border: "#334155",
          "border-strong": "#475569",
          text: "#F8FAFC",
          "text-secondary": "#94A3B8",
          "text-muted": "#64748B",
        },
        // Light theme colors
        light: {
          bg: "#FFFFFF",
          surface: "#F8FAFC",
          surface2: "#F1F5F9",
          border: "#E2E8F0",
          "border-strong": "#CBD5E1",
          text: "#0F172A",
          "text-secondary": "#475569",
          "text-muted": "#94A3B8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
