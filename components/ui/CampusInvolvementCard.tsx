"use client";

import { motion } from "framer-motion";
import type { CampusInvolvement } from "@/lib/data";

const ROLE_COLORS: Record<string, { border: string; text: string; bg: string }> = {
  Lead: {
    border: "border-amber/30",
    text: "text-amber",
    bg: "bg-amber/10",
  },
  Organizer: {
    border: "border-signal/30",
    text: "text-signal",
    bg: "bg-signal/10",
  },
  Volunteer: {
    border: "border-pulse/30",
    text: "text-pulse",
    bg: "bg-pulse/10",
  },
  Coordinator: {
    border: "border-aurora/30",
    text: "text-aurora",
    bg: "bg-aurora/10",
  },
};

const DEFAULT_COLORS = {
  border: "border-mist/30",
  text: "text-mist",
  bg: "bg-mist/10",
};

type Props = {
  involvement: CampusInvolvement;
  index: number;
};

export default function CampusInvolvementCard({ involvement, index }: Props) {
  const colors = ROLE_COLORS[involvement.role] || DEFAULT_COLORS;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
      whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{
        rotate: 0,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={`terminal-note group relative overflow-hidden rounded-xl border ${colors.border} bg-panel/80 backdrop-blur-md p-5 shadow-bento transition-colors duration-300 hover:border-opacity-60`}
    >
      {/* Corner accent */}
      <div
        className={`absolute right-0 top-0 h-6 w-6 ${colors.bg} opacity-40 transition-opacity duration-300 group-hover:opacity-70`}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        aria-hidden="true"
      />

      {/* Role tag */}
      <p className={`mb-2 font-mono text-[11px] font-medium tracking-wide ${colors.text} select-none`}>
        # {involvement.role.toLowerCase()}
      </p>

      {/* Event name */}
      <h4 className="font-display text-base font-semibold text-ink">
        {involvement.event}
      </h4>

      {/* Org & date */}
      <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-[11px] text-mist">
        {involvement.org && <span>{involvement.org}</span>}
        <span className="text-mist/50">·</span>
        <span>{involvement.date}</span>
      </div>

      {/* Description */}
      <p className="mt-2.5 text-sm leading-relaxed text-mist">
        {involvement.description}
      </p>

      {involvement.link && (
        <a
          href={involvement.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-3 inline-flex items-center gap-1 font-mono text-xs ${colors.text} hover:underline`}
        >
          View →
        </a>
      )}
    </motion.div>
  );
}
