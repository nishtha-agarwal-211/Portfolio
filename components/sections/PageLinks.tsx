"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User2, FolderKanban, Wrench, ScrollText, Mail, ArrowUpRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const PAGES = [
  {
    href: "/about",
    label: "About & Experience",
    description: "Who I am, my academic background, experience timeline, and FAQs for recruiters.",
    icon: User2,
    accent: "from-pulse to-emerald-400",
    span: "md:col-span-2",
  },
  {
    href: "/projects",
    label: "Selected Work",
    description: "Production builds, AI products, hackathon winners, and full case studies.",
    icon: FolderKanban,
    accent: "from-signal to-purple-400",
    span: "",
  },
  {
    href: "/skills",
    label: "Toolbox",
    description: "Frontend, backend, AI/ML, DevOps — everything I reach for.",
    icon: Wrench,
    accent: "from-aurora to-blue-400",
    span: "",
  },
  {
    href: "/log",
    label: "Changelog",
    description: "A running log of milestones, in the order they happened.",
    icon: ScrollText,
    accent: "from-amber to-orange-400",
    span: "",
  },
  {
    href: "/contact",
    label: "Get in Touch",
    description: "Open to internships, collaborations, and interesting problems.",
    icon: Mail,
    accent: "from-pink-500 to-rose-400",
    span: "",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function PageLinks() {
  return (
    <section className="relative px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-pulse" />
            EXPLORE
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Dive deeper.
          </h2>
          <p className="mt-3 text-sm text-mist sm:text-base">
            Each section lives on its own page — pick where you want to go.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
        >
          {PAGES.map((page) => (
            <motion.div key={page.href} variants={item} className={page.span}>
              <Link href={page.href} className="group block h-full">
                <GlassCard className="relative h-full overflow-hidden p-7 sm:p-8 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 cursor-pointer">
                  {/* Accent top bar */}
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${page.accent} opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-signal/40 group-hover:shadow-glow">
                      <page.icon className="h-5 w-5 text-pulse transition-colors duration-300 group-hover:text-signal" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-mist/40 transition-all duration-300 group-hover:text-pulse group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-pulse">
                    {page.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {page.description}
                  </p>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
