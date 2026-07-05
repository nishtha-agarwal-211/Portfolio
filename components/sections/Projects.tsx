"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Built, not just scoped."
          description="A mix of an internship engineering assignment and independent builds — spanning backend performance, AI product design, civic tech, and offline-first systems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className={p.featured ? "md:col-span-2" : ""}
            >
              <GlassCard
                className={`group flex h-full flex-col p-7 hover:-translate-y-1 sm:p-8 ${
                  p.featured ? "md:flex-row md:items-start md:gap-10" : ""
                }`}
              >
                <div className={p.featured ? "md:w-1/2" : ""}>
                  <div className="mb-3 flex items-center justify-between font-mono text-xs text-mist">
                    <span className="text-pulse">{p.period}</span>
                    {p.kind === "internship" && (
                      <span className="rounded-full border border-signal/40 bg-signal/10 px-2.5 py-1 text-signal">
                        Internship
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-pulse">{p.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-mist">{p.description}</p>
                </div>

                <div className={p.featured ? "mt-6 md:mt-0 md:w-1/2" : "mt-5"}>
                  <ul className="space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-mist">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-mist"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-ink transition-colors hover:text-pulse"
                      >
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-ink transition-colors hover:text-pulse"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
