"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects, Project } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Filter, Sparkles } from "lucide-react";

const CATEGORIES = ["All", "AI & Web Apps", "Backend & Systems", "Hackathons", "Open Source & PWAs"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Backend & Systems")
      return p.slug === "product-browser" || p.slug === "ctrl-alt-elite-pcam" || p.stack.includes("Node.js") || p.stack.includes("PostgreSQL") || p.stack.includes("Python");
    if (selectedCategory === "AI & Web Apps")
      return p.slug === "smartmedicines" || p.slug === "memoria" || p.slug === "andaz" || p.slug === "spendwise" || p.slug === "spotify-clone" || p.slug === "smart-tip-calculator";
    if (selectedCategory === "Hackathons")
      return p.slug === "beyond-the-reality" || p.slug === "system-of-support" || p.slug === "memoria" || p.slug === "smartmedicines" || p.slug === "ctrl-alt-elite-pcam";
    if (selectedCategory === "Open Source & PWAs")
      return p.slug === "system-of-support" || p.slug === "smartacres" || p.slug === "stepthrough" || p.slug === "spendwise" || p.slug === "student-admission-portal";
    return true;
  });

  return (
    <main className="relative min-h-screen pt-24">
      <Nav />

      <section className="px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-pulse">
              <Sparkles className="h-3.5 w-3.5" />
              <span>PROJECTS ARCHIVE &amp; CASE STUDIES</span>
            </div>
            <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl md:text-6xl">
              Architected &amp; Built.
            </h1>
            <p className="mt-4 text-lg text-mist sm:text-xl">
              A comprehensive showcase of production builds, full-stack systems, AI products, and hackathon-winning solutions.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-xs text-mist flex items-center gap-1.5">
              <Filter className="h-3.5 w-3.5" /> Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-signal-gradient text-void shadow-glow font-semibold"
                    : "glass text-mist hover:text-ink border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="glass glow-border group relative flex flex-col justify-between rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between font-mono text-xs text-mist">
                    <span className="text-pulse">{p.period}</span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-pulse">
                    {p.name}
                  </h2>
                  <p className="mt-1 font-mono text-xs text-pulse">{p.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-mist">{p.description}</p>

                  <ul className="mt-5 space-y-2">
                    {p.bullets.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="flex gap-2 text-xs leading-relaxed text-mist">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-mist"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
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
                          <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-1 font-mono text-xs text-signal hover:underline"
                    >
                      Case Study <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
