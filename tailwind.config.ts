import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070D",
        panel: "#0E1322",
        ink: "#F8FAFC",
        mist: "#94A3B8",
        signal: "#2CE6C6",
        pulse: "#6E5BFF",
        aurora: "#38BDF8",
        amber: "#F59E0B",
      },
      fontFamily: {
        display: ["'Syne'", "'Space Grotesk'", "sans-serif"],
        body: ["'Space Grotesk'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "signal-gradient": "linear-gradient(135deg, #6E5BFF 0%, #9E8BFF 40%, #2CE6C6 100%)",
        "signal-gradient-soft": "linear-gradient(135deg, rgba(110,91,255,0.18) 0%, rgba(158,139,255,0.14) 40%, rgba(44,230,198,0.14) 100%)",
        "aurora-gradient": "linear-gradient(135deg, #38BDF8 0%, #6E5BFF 50%, #2CE6C6 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(110,91,255,0.25)",
        "glow-pulse": "0 0 40px rgba(110,91,255,0.22)",
        "glow-aurora": "0 0 40px rgba(56,189,248,0.2)",
        panel: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        "bento": "0 1px 2px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.25)",
        "bento-hover": "0 16px 48px rgba(110,91,255,0.12), 0 0 0 1px rgba(110,91,255,0.15)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "marquee": "marquee-scroll 40s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-ring": "pulseRing 2s ease-out infinite",
        "shimmer": "shimmer 2s infinite",
        "draw-line": "drawLine 1s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        drawLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
