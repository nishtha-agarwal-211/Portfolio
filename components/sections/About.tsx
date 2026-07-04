"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { profile, stats, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" eyebrow="About" title="Building things that hold up." />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-mist sm:text-xl">
              {profile.summary}
            </p>

            <div className="mt-8 space-y-4">
              {education.map((ed) => (
                <div key={ed.degree} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <p className="font-display text-base text-ink">{ed.degree}</p>
                    <p className="text-sm text-mist">{ed.school}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-pulse">
                    <p>{ed.period}</p>
                    <p className="text-mist">{ed.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 lg:col-span-2"
          >
            {stats.map((s) => (
              <GlassCard key={s.label} className="p-5">
                <p className="font-display text-3xl text-gradient">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-mist">{s.label}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
