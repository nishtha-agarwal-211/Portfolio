"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Heart, Code2, Trophy, Sparkles, GitPullRequest } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { profile, stats, education } from "@/lib/data";

const STAT_ICONS = [
  Award,
  GitPullRequest,
  Trophy,
  Sparkles,
  GraduationCap,
  Heart,
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="~/about" eyebrow="About" title="Building things that hold up." />

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
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:col-span-2">
            {stats.map((s, i) => {
              const IconComp = STAT_ICONS[i] || Code2;

              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 + i * 0.06,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="h-full"
                >
                  <GlassCard className="group relative flex h-full flex-col justify-between overflow-hidden p-5 border border-white/10 transition-all duration-300 hover:border-signal/40 hover:shadow-glow">
                    {/* Top Row: Icon badge + Index */}
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-signal transition-all duration-300 group-hover:border-signal/40 group-hover:bg-signal/10 group-hover:text-pulse">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-[10px] text-mist/50 group-hover:text-signal transition-colors">
                        #{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Stat Value & Label */}
                    <div>
                      <div className="font-display text-2xl font-extrabold tracking-tight text-gradient whitespace-nowrap xl:text-3xl">
                        <AnimatedCounter value={s.value} />
                      </div>
                      <p className="mt-1.5 font-mono text-[11px] leading-snug text-mist transition-colors group-hover:text-ink">
                        {s.label}
                      </p>
                    </div>
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
