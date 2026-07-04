"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { experience, extras } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Beyond the codebase."
          description="Community leadership and open-source contribution — running in parallel with the shipping above."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((e, i) => (
            <motion.div
              key={e.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <GlassCard className="flex h-full flex-col p-7 hover:-translate-y-1 sm:p-8">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl text-ink">{e.role}</h3>
                    <p className="text-sm text-pulse">{e.org}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-mist">
                    <p>{e.period}</p>
                    {e.location && <p>{e.location}</p>}
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-mist">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {b}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-wrap gap-3 font-mono text-xs text-mist"
        >
          {extras.map((e) => (
            <span
              key={e}
              className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2"
            >
              {e}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
