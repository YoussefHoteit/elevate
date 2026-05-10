import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#101415",
        foreground: "#e0e3e5",
        primary: {
          DEFAULT: "#c6c6cc",
          foreground: "#1a1c20",
        },
        secondary: {
          DEFAULT: "#bbc3ff",
          foreground: "#000f5d",
        },
        "secondary-container": "#0231de",
        "on-secondary": "#ffffff",
        "on-surface-variant": "#c6c6cb",
        surface: "#101415",
        "surface-container": "#1d2022",
        "surface-container-low": "#191c1e",
        "surface-container-lowest": "#0b0f10",
        accent: {
          DEFAULT: "#bbc3ff",
          foreground: "#000f5d",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;