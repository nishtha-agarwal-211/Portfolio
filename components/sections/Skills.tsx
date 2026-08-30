"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skillGroups } from "@/lib/data";

const GROUP_ACCENTS = [
  "from-signal to-purple-400",
  "from-pulse to-emerald-400",
  "from-aurora to-blue-400",
  "from-amber to-orange-400",
  "from-pink-500 to-rose-400",
  "from-signal to-pulse",
  "from-amber to-pulse",
  "from-aurora to-signal",
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Toolbox"
          title="What I reach for."
          description="Frontend-first, with backend fundamentals I'm actively deepening — plus the AI and DevOps tools I use to ship end to end."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <GlassCard className="group relative h-full overflow-hidden p-6">
                {/* Accent bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${GROUP_ACCENTS[i % GROUP_ACCENTS.length]} opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <p className="mb-5 font-mono text-xs uppercase tracking-wider text-signal">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      whileHover={{
                        scale: 1.08,
                        transition: { type: "spring", stiffness: 400, damping: 15 },
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.15 + j * 0.03,
                        ease: "easeOut",
                      }}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-sm text-ink transition-colors duration-300 hover:border-signal/40 hover:text-pulse hover:shadow-[0_0_16px_rgba(124,58,237,0.12)]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
