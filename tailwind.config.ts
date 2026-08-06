import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#071F3F",
        "navy-mid": "#041528",
        ink: "#000000",
        accent: {
          DEFAULT: "#009CE3",
          soft: "rgba(0, 156, 227, 0.15)",
          glow: "rgba(0, 156, 227, 0.35)",
        },
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.04)",
          border: "rgba(255, 255, 255, 0.09)",
          hover: "rgba(255, 255, 255, 0.07)",
        },
        ink2: {
          primary: "#FFFFFF",
          secondary: "rgba(255, 255, 255, 0.75)",
          tertiary: "rgba(255, 255, 255, 0.45)",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
        "container-wide": "1440px",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 156, 227, 0.25)",
        card: "0 20px 60px -20px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(7,31,63,0.6), transparent)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
