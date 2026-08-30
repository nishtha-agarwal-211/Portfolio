"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AchievementCard from "@/components/ui/AchievementCard";
import { achievements, type Achievement } from "@/lib/data";

const CATEGORIES: { key: Achievement["category"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "hackathon", label: "Hackathons" },
  { key: "competitive-programming", label: "CP" },
  { key: "academic", label: "Academic" },
  { key: "open-source", label: "Open Source" },
];

export default function Achievements() {
  const [filter, setFilter] = useState<Achievement["category"] | "all">("all");

  const filtered =
    filter === "all"
      ? achievements
      : achievements.filter((a) => a.category === filter);

  return (
    <section id="achievements" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="~/achievements"
          eyebrow="Achievements"
          title="Verified results, not claims."
          description="Hackathon placements, CP contest results, and academic honors — only what's confirmed."
        />

        {/* Category filter bar */}
        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-all duration-200 cursor-pointer ${
                filter === cat.key
                  ? "border-signal/50 bg-signal/10 text-signal"
                  : "border-white/10 bg-white/5 text-mist hover:border-signal/30 hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Commit graph */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="absolute left-[11px] top-0 bottom-0 w-px origin-top bg-gradient-to-b from-signal via-signal/20 to-transparent"
          />

          <div className="space-y-0">
            {filtered.map((achievement, i) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
