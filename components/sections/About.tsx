"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Heart, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TerminalNote from "@/components/ui/TerminalNote";
import { profile, stats, education } from "@/lib/data";

const STAT_ICONS = [Award, GraduationCap, Heart, Code2];

// Stats at indices 0 ("120+ PRs") and 2 ("2,500 meals") get the TerminalNote treatment
const TERMINAL_NOTE_INDICES = new Set([0, 2]);
const NOTE_ROTATIONS = [-1.2, 1.5];
const NOTE_ACCENTS: ("signal" | "pulse")[] = ["signal", "pulse"];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" eyebrow="About" title="Building things that hold up." />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Main Bio & Education Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-3"
          >
            <GlassCard className="h-full p-7 sm:p-8">
              <p className="text-base leading-relaxed text-mist sm:text-lg">
                {profile.summary}
              </p>

              {/* Education Breakdown */}
              <div className="mt-8 space-y-4 pt-6 border-t border-white/10">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-pulse flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" /> Academic Background
                </h3>

                {education.map((ed, i) => (
                  <motion.div
                    key={ed.degree}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/[0.06] pb-3 last:border-0"
                  >
                    <div>
                      <p className="font-display text-base font-semibold text-ink">{ed.degree}</p>
                      <p className="text-xs text-mist">{ed.school}</p>
                    </div>
                    <div className="text-right font-mono text-xs text-signal">
                      <p>{ed.period}</p>
                      <p className="text-mist">{ed.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Stats Bento Grid */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((s, i) => {
              const IconComp = STAT_ICONS[i % STAT_ICONS.length];
              const isNote = TERMINAL_NOTE_INDICES.has(i);
              const noteIdx = [...TERMINAL_NOTE_INDICES].indexOf(i);

              if (isNote) {
                return (
                  <TerminalNote
                    key={s.label}
                    tag="// stat"
                    rotation={NOTE_ROTATIONS[noteIdx % NOTE_ROTATIONS.length]}
                    accent={NOTE_ACCENTS[noteIdx % NOTE_ACCENTS.length]}
                    className="flex flex-col justify-between"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <IconComp className="h-5 w-5 text-signal" />
                      <span className="font-mono text-[10px] text-mist/60">#0{i + 1}</span>
                    </div>
                    <AnimatedCounter
                      value={s.value}
                      className="font-display text-3xl font-extrabold text-gradient"
                    />
                    <p className="mt-2 font-mono text-xs leading-snug text-mist">{s.label}</p>
                  </TerminalNote>
                );
              }

              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  <GlassCard className="group relative overflow-hidden p-6 border border-white/10 transition-all hover:border-signal/40 hover:shadow-glow">
                    <div className="mb-3 flex items-center justify-between">
                      <IconComp className="h-5 w-5 text-signal" />
                      <span className="font-mono text-[10px] text-mist/60">#0{i + 1}</span>
                    </div>

                    <AnimatedCounter
                      value={s.value}
                      className="font-display text-3xl font-extrabold text-gradient"
                    />
                    <p className="mt-2 font-mono text-xs leading-snug text-mist">{s.label}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
