"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github } from "lucide-react";
import HeroScene from "@/components/three/HeroScene";
import GradientButton from "@/components/ui/GradientButton";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-24 sm:px-10"
    >
      <HeroScene />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-4xl"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-pulse"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-pulse shadow-[0_0_8px_#2CE6C6]" />
          nishtha@newton:~$ whoami
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-medium leading-[1.08] text-ink sm:text-6xl md:text-7xl"
        >
          {profile.name.split(" ")[0]}{" "}
          <span className="text-gradient glitch-text" data-text={profile.name.split(" ")[1]}>
            {profile.name.split(" ")[1]}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-lg text-mist sm:text-xl"
        >
          {profile.role} based in {profile.location}. I build fast, accessible
          products — from AI-powered apps to backend systems that hold up
          under real load.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <GradientButton href="#work">
            View projects
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

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-mist"
      >
        <span className="flex flex-col items-center gap-2">
          scroll
          <span className="h-8 w-px animate-pulse bg-gradient-to-b from-pulse to-transparent" />
        </span>
      </motion.a>
    </section>
  );
}
