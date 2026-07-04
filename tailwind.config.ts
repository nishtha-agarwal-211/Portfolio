import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#07070C",
        panel: "#0F0F18",
        ink: "#F3F2F8",
        mist: "#8B8B9E",
        signal: "#6E5BFF",
        pulse: "#2CE6C6",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "signal-gradient": "linear-gradient(135deg, #6E5BFF 0%, #A855F7 55%, #2CE6C6 100%)",
        "signal-gradient-soft": "linear-gradient(135deg, rgba(110,91,255,0.18) 0%, rgba(168,85,247,0.14) 55%, rgba(44,230,198,0.14) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(110,91,255,0.25)",
        "glow-pulse": "0 0 40px rgba(44,230,198,0.22)",
        panel: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
