"use client";

import { motion } from "framer-motion";

const MARQUEE_ITEMS_1 = [
  "React 19",
  "Next.js 16",
  "TypeScript",
  "Tailwind CSS v4",
  "Node.js",
  "PostgreSQL",
  "Gemini API",
  "FastAPI",
  "Qdrant Vector DB",
  "Framer Motion",
];

const MARQUEE_ITEMS_2 = [
  "120+ Open Source PRs Merged",
  "Sub-50ms Catalog API",
  "3rd Place Campfire Bengaluru",
  "Google Gemini Hackathon",
  "DevForge Hackathon Winner",
  "Newton School CGPA 9.47",
  "Shree Shyam Seva Samiti Co-Founder",
];

export default function MarqueeTicker() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-white/[0.015] py-4 backdrop-blur-sm">
      {/* Top Ribbon */}
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex shrink-0 items-center gap-8 font-display text-xs tracking-wider uppercase text-mist"
        >
          {MARQUEE_ITEMS_1.concat(MARQUEE_ITEMS_1).map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span className="hover:text-pulse transition-colors font-medium">{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-signal/60" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom Reverse Ribbon */}
      <div className="mt-2.5 flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex shrink-0 items-center gap-8 font-mono text-[11px] uppercase text-pulse"
        >
          {MARQUEE_ITEMS_2.concat(MARQUEE_ITEMS_2).map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span className="font-semibold text-gradient">{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-pulse/60" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
