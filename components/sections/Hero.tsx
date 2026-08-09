"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Sparkles, Terminal, Award, Zap, HeartHandshake } from "lucide-react";
import HeroScene from "@/components/three/HeroScene";
import GradientButton from "@/components/ui/GradientButton";
import TextReveal from "@/components/ui/TextReveal";
import { profile } from "@/lib/data";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 pb-16 sm:px-10"
    >
      <HeroScene />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        {/* Badges Bar */}
        <motion.div variants={item} className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-pulse shadow-glow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pulse" />
            </span>
            nishtha@newton:~$ whoami
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 font-mono text-xs text-signal font-medium">
            <Sparkles className="h-3.5 w-3.5" /> Open for Internships (2026/2027)
          </span>
        </motion.div>

        {/* Clean Massive Display Title */}
        <div className="mt-2">
          <TextReveal
            as="h1"
            className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-7xl md:text-8xl lg:text-[6.5rem]"
            delay={0.3}
          >
            {profile.name.split(" ")[0]}
          </TextReveal>
          <TextReveal
            as="h1"
            className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-gradient sm:text-7xl md:text-8xl lg:text-[6.5rem]"
            delay={0.4}
          >
            {profile.name.split(" ")[1]}
          </TextReveal>
        </div>

        {/* Tagline & Summary */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl"
        >
          <span className="font-semibold text-ink">{profile.role}</span> &amp; CSE student at{" "}
          <span className="text-pulse font-medium">Newton School of Technology</span> (CGPA 9.47). I build fast, accessible web products, AI tools, and scalable backend systems.
        </motion.p>

        {/* Highlights Grid */}
        <motion.div variants={item} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="glass glow-border rounded-2xl p-4 border border-white/10 transition-all hover:border-signal/40">
            <div className="flex items-center gap-2 font-mono text-xs text-signal font-semibold">
              <Award className="h-4 w-4" /> 120+ PRs
            </div>
            <p className="mt-1 text-xs text-mist">Merged in GSSoC '26</p>
          </div>

          <div className="glass glow-border rounded-2xl p-4 border border-white/10 transition-all hover:border-pulse/40">
            <div className="flex items-center gap-2 font-mono text-xs text-pulse font-semibold">
              <Zap className="h-4 w-4" /> &lt;50ms Latency
            </div>
            <p className="mt-1 text-xs text-mist">200K Products Catalog</p>
          </div>

          <div className="glass glow-border rounded-2xl p-4 border border-white/10 transition-all hover:border-signal/40">
            <div className="flex items-center gap-2 font-mono text-xs text-signal font-semibold">
              <Sparkles className="h-4 w-4" /> 9.47 CGPA
            </div>
            <p className="mt-1 text-xs text-mist">Newton School of Tech</p>
          </div>

          <div className="glass glow-border rounded-2xl p-4 border border-white/10 transition-all hover:border-pulse/40">
            <div className="flex items-center gap-2 font-mono text-xs text-pulse font-semibold">
              <HeartHandshake className="h-4 w-4" /> 2,500 Meals
            </div>
            <p className="mt-1 text-xs text-mist">Weekly via NGO</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <GradientButton href="/projects">
            Explore Selected Work
            <ArrowDown className="h-4 w-4" />
          </GradientButton>
          <GradientButton href={profile.resumeFile} variant="ghost" download>
            <Download className="h-4 w-4" />
            Resume
          </GradientButton>
          <GradientButton href={profile.social.github} variant="ghost" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            GitHub
          </GradientButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <Link
        href="/about"
        aria-label="Go to about page"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ delay: 1.2, duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-mist"
        >
          explore
          <span className="h-8 w-px bg-gradient-to-b from-pulse to-transparent" />
        </motion.span>
      </Link>
    </section>
  );
}
