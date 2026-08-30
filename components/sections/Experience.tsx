"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TerminalNote from "@/components/ui/TerminalNote";
import { experience, extras } from "@/lib/data";

const EXTRAS_ROTATIONS = [-1.5, 1, -0.8];
const EXTRAS_ACCENTS: ("signal" | "pulse" | "aurora")[] = ["signal", "pulse", "aurora"];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="~/exp"
          eyebrow="Experience"
          title="Beyond the codebase."
          description="Community leadership and open-source contribution — running in parallel with the shipping above."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Glowing vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute left-4 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-signal via-pulse/30 to-transparent md:left-1/2"
          />

          <div className="space-y-12">
            {experience.map((e, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={e.org}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className={`relative pl-12 md:w-[calc(50%-24px)] md:pl-0 ${
                    isLeft ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute top-6 left-[10px] md:left-auto ${
                      isLeft ? "md:-right-[8px]" : "md:-left-[8px]"
                    }`}
                  >
                    <span className="relative flex h-4 w-4">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-30" />
                      <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-signal bg-void" />
                    </span>
                  </div>

                  <GlassCard className="p-7 transition-transform duration-400 hover:-translate-y-1 sm:p-8">
                    <div className={`mb-4 flex flex-wrap items-baseline justify-between gap-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <div className={isLeft ? "md:text-left" : ""}>
                        <h3 className="font-display text-xl font-semibold text-ink">{e.role}</h3>
                        <p className="text-sm text-pulse">{e.org}</p>
                      </div>
                      <div className={`font-mono text-xs text-mist ${isLeft ? "md:text-left" : "text-right"}`}>
                        <p>{e.period}</p>
                        {e.location && <p>{e.location}</p>}
                      </div>
                    </div>
                    <ul className={`space-y-2.5 ${isLeft ? "md:text-left" : ""}`}>
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-mist">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pulse" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Extras as TerminalNote cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {extras.map((e, i) => (
            <TerminalNote
              key={e}
              tag="# extra"
              rotation={EXTRAS_ROTATIONS[i % EXTRAS_ROTATIONS.length]}
              accent={EXTRAS_ACCENTS[i % EXTRAS_ACCENTS.length]}
            >
              <p className="text-sm leading-relaxed text-mist">{e}</p>
            </TerminalNote>
          ))}
        </div>
      </div>
    </section>
  );
}
