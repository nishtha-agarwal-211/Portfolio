"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { index: "00", label: "Home", href: "#home" },
  { index: "01", label: "About", href: "#about" },
  { index: "02", label: "Exp", href: "#experience" },
  { index: "03", label: "Work", href: "#work" },
  { index: "04", label: "Skills", href: "#skills" },
  { index: "05", label: "Log", href: "#log" },
  { index: "06", label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`glass flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-3 transition-shadow duration-300 ${
          scrolled ? "shadow-glow" : ""
        }`}
      >
        <a href="#home" className="font-display text-sm font-medium tracking-wide text-ink">
          <span className="text-gradient">NA</span>
          <span className="ml-2 hidden font-mono text-xs text-mist sm:inline">/nishtha-agarwal</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-1.5 rounded-full px-3 py-2 font-mono text-xs text-mist transition-colors hover:text-pulse"
              >
                <span className="text-[10px] text-signal">{link.index}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-signal-gradient px-4 py-2 font-mono text-xs font-medium text-void md:inline-block"
        >
          Say hi
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute left-4 right-4 top-[72px] rounded-2xl p-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-3 py-3 font-mono text-sm text-ink"
                >
                  <span className="text-signal">{link.index}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
