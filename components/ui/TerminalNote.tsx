"use client";

import { motion } from "framer-motion";

type Accent = "signal" | "pulse" | "aurora";

const ACCENT_COLORS: Record<Accent, { border: string; text: string; bg: string; glow: string }> = {
  signal: {
    border: "border-signal/30",
    text: "text-signal",
    bg: "bg-signal/10",
    glow: "rgba(124,58,237,0.15)",
  },
  pulse: {
    border: "border-pulse/30",
    text: "text-pulse",
    bg: "bg-pulse/10",
    glow: "rgba(6,214,160,0.15)",
  },
  aurora: {
    border: "border-aurora/30",
    text: "text-aurora",
    bg: "bg-aurora/10",
    glow: "rgba(56,189,248,0.15)",
  },
};

type Props = {
  /** Monospace tag header, displayed as-is (e.g. "# extras", "// stat") */
  tag: string;
  /** Slight rotation in degrees, -3 to 3 range for "pinned" look */
  rotation?: number;
  /** Accent color from the existing palette */
  accent?: Accent;
  children: React.ReactNode;
  className?: string;
};

export default function TerminalNote({
  tag,
  rotation = 0,
  accent = "signal",
  children,
  className = "",
}: Props) {
  const colors = ACCENT_COLORS[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{
        rotate: 0,
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={`terminal-note group relative overflow-hidden rounded-xl border ${colors.border} bg-panel/80 backdrop-blur-md p-5 shadow-bento transition-colors duration-300 hover:border-opacity-60 ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Corner accent — tape/pin triangle */}
      <div
        className={`absolute right-0 top-0 h-6 w-6 ${colors.bg} opacity-40 transition-opacity duration-300 group-hover:opacity-70`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%)",
        }}
        aria-hidden="true"
      />

      {/* Monospace tag header */}
      <p
        className={`mb-2.5 font-mono text-[11px] font-medium tracking-wide ${colors.text} select-none`}
      >
        {tag}
      </p>

      {/* Content */}
      <div className="relative z-[1]">{children}</div>

      {/* Subtle bottom-left glow on hover */}
      <div
        className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: colors.glow }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
