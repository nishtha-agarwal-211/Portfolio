"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Achievement } from "@/lib/data";

const CATEGORY_COLORS: Record<
  Achievement["category"],
  { dot: string; badge: string; text: string; glow: string }
> = {
  hackathon: {
    dot: "bg-amber",
    badge: "border-amber/30 bg-amber/10 text-amber",
    text: "text-amber",
    glow: "rgba(245,158,11,0.2)",
  },
  "competitive-programming": {
    dot: "bg-signal",
    badge: "border-signal/30 bg-signal/10 text-signal",
    text: "text-signal",
    glow: "rgba(44,230,198,0.2)",
  },
  academic: {
    dot: "bg-aurora",
    badge: "border-aurora/30 bg-aurora/10 text-aurora",
    text: "text-aurora",
    glow: "rgba(56,189,248,0.2)",
  },
  "open-source": {
    dot: "bg-pulse",
    badge: "border-pulse/30 bg-pulse/10 text-pulse",
    text: "text-pulse",
    glow: "rgba(110,91,255,0.2)",
  },
};

const CATEGORY_LABELS: Record<Achievement["category"], string> = {
  hackathon: "hackathon",
  "competitive-programming": "cp",
  academic: "academic",
  "open-source": "oss",
};

type Props = {
  achievement: Achievement;
  index: number;
};

export default function AchievementCard({ achievement, index }: Props) {
  const colors = CATEGORY_COLORS[achievement.category];
  const label = CATEGORY_LABELS[achievement.category];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="relative pb-8 pl-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: index * 0.06 + 0.1,
          }}
          className="flex h-[22px] w-[22px] items-center justify-center"
        >
          <span
            className={`h-2.5 w-2.5 rounded-full ${colors.dot}`}
            style={{ boxShadow: `0 0 10px ${colors.glow}` }}
          />
        </motion.span>
      </div>

      {/* Content — git log style */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
        <span className={`rounded-full border px-2.5 py-1 ${colors.badge}`}>
          {label}
        </span>
        <span className="text-mist">{achievement.date}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-mist/70">
          {achievement.org}
        </span>
      </div>

      <h3 className="mt-2.5 font-display text-lg font-semibold text-ink sm:text-xl">
        {achievement.title}
        {achievement.link && (
          <a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex align-middle text-signal hover:text-signal/80 transition-colors"
            aria-label={`View ${achievement.title} on GitHub`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </h3>

      {achievement.result && (
        <span
          className={`mt-1.5 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs font-medium ${colors.badge}`}
        >
          ✦ {achievement.result}
        </span>
      )}

      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-mist">
        {achievement.detail}
      </p>
    </motion.div>
  );
}
