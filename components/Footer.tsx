"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import MagneticWrap from "@/components/ui/MagneticWrap";

const TICKER_ITEMS = [
  "React", "Next.js", "TypeScript", "Three.js", "Framer Motion",
  "Open Source", "Accessibility", "AI/ML", "FastAPI", "PostgreSQL",
  "Frontend", "Backend", "UI/UX", "Performance", "PWA",
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: profile.social.github },
  { label: "LinkedIn", href: profile.social.linkedin },
  { label: "LeetCode", href: profile.social.leetcode },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-6 sm:px-10">
      {/* Marquee ticker */}
      <div className="overflow-hidden py-8">
        <div className="marquee-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-4 whitespace-nowrap font-display text-3xl font-semibold text-white/[0.04] sm:text-5xl"
            >
              {item}
              <span className="mx-6 text-signal/20">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Gradient divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto h-px max-w-6xl origin-left bg-gradient-to-r from-transparent via-signal/25 to-transparent"
      />

      {/* Bottom row */}
      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Copyright */}
        <p className="font-mono text-xs text-mist">
          © {new Date().getFullYear()} {profile.name}.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((s) => (
            <MagneticWrap key={s.label} strength={0.25}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs text-mist transition-all duration-300 hover:border-signal/40 hover:text-ink hover:shadow-glow cursor-pointer"
              >
                {s.label}
              </a>
            </MagneticWrap>
          ))}
        </div>

        {/* Status */}
        <p className="flex items-center gap-2 font-mono text-xs text-mist">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse shadow-[0_0_8px_#06D6A0]" />
          Available for work
        </p>
      </div>
    </footer>
  );
}
