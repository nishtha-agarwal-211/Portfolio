"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Built, not just scoped."
          description="A curated collection of production builds, internship engineering assignments, AI applications, and hackathon winners."
        />

        {/* Bento Masonry Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              transition={{
                duration: 0.5,
                delay: (i % 2) * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className={p.featured ? "md:col-span-2" : ""}
            >
              <TiltCard>
                <div
                  className={`glass glow-border group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-void/80 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-signal/40 hover:shadow-glow sm:p-8 ${
                    p.featured ? "md:flex-row md:items-start md:gap-10" : ""
                  }`}
                >
                  {/* Featured Badge */}
                  {p.featured && (
                    <div className="absolute right-6 top-6 hidden md:flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-[11px] font-semibold text-signal">
                      <Sparkles className="h-3 w-3" /> Flagship Build
                    </div>
                  )}

                  <div className={p.featured ? "md:w-1/2" : ""}>
                    {/* Header */}
                    <div className="mb-3 flex items-center justify-between font-mono text-xs text-mist">
                      <span className="text-pulse font-medium">{p.period}</span>
                      {p.kind === "internship" && (
                        <span className="rounded-full border border-signal/40 bg-signal/10 px-2.5 py-1 text-signal font-semibold">
                          Internship Assignment
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl transition-colors group-hover:text-pulse">
                      {p.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-pulse font-medium">{p.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-mist">{p.description}</p>
                  </div>

                  <div className={p.featured ? "mt-6 md:mt-0 md:w-1/2" : "mt-6"}>
                    {/* Bullets */}
                    <ul className="space-y-2">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-xs leading-relaxed text-mist">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-mist transition-all duration-300 hover:border-signal/40 hover:text-ink"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                      <div className="flex gap-4">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor-label="open"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink transition-all hover:text-pulse"
                          >
                            <Github className="h-3.5 w-3.5" /> Source
                          </a>
                        )}
                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor-label="open"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink transition-all hover:text-pulse"
                          >
                            <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                          </a>
                        )}
                      </div>

                      <a
                        href={`/projects/${p.slug}`}
                        data-cursor-label="view"
                        className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-signal hover:underline"
                      >
                        Read Case Study <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <a
            href="/projects"
            data-cursor-label="explore"
            className="glass inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-mono text-xs font-semibold text-ink transition-all hover:border-signal/40 hover:text-pulse hover:shadow-glow"
          >
            Explore Full Projects Archive &amp; Tech Specs →
          </a>
        </div>
      </div>
    </section>
  );
}
