import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          DEFAULT: "#c9a96e",
          light: "#dfc08a",
          dark: "#a88a55",
        },
        glass: {
          light: "rgba(255,255,255,0.6)",
          dark: "rgba(255,255,255,0.05)",
          border: {
            light: "rgba(0,0,0,0.06)",
            dark: "rgba(255,255,255,0.08)",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 300ms cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-up": "slideUp 300ms cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "clip-reveal":
          "clipReveal 800ms cubic-bezier(0.77, 0, 0.175, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        clipReveal: {
          from: { clipPath: "inset(0 0 100% 0)" },
          to: { clipPath: "inset(0 0 0 0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
