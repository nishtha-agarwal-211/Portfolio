"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { index: "~", label: "Home", href: "/" },
  { index: "~/about", label: "About", href: "/about" },
  { index: "~/work", label: "Work", href: "/projects" },
  { index: "~/tools", label: "Skills", href: "/skills" },
  { index: "~/log", label: "Log", href: "/log" },
  { index: "~/contact", label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`glass flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "shadow-glow bg-void/60" : ""
        }`}
      >
        <Link href="/" className="group font-display text-sm font-semibold tracking-wide text-ink">
          <span className="text-gradient transition-all duration-300 group-hover:brightness-125">NA</span>
          <span className="ml-2 hidden font-mono text-xs text-mist sm:inline">/nishtha</span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1.5 rounded-full px-3 py-2 font-mono text-xs transition-colors duration-200 ${
                    isActive ? "text-ink" : "text-mist hover:text-pulse"
                  }`}
                >
                  <span className={`text-[10px] transition-colors ${isActive ? "text-pulse" : "text-signal/60"}`}>
                    {link.index}
                  </span>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="shimmer hidden rounded-full bg-signal-gradient px-4 py-2 font-mono text-xs font-medium text-void md:inline-block cursor-pointer"
        >
          Say hi
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-all duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-all duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="glass absolute left-4 right-4 top-[72px] rounded-2xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 rounded-xl px-3 py-3 font-mono text-sm transition-colors ${
                      (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                        ? "text-ink bg-white/5"
                        : "text-mist"
                    }`}
                  >
                    <span className="text-signal">{link.index}</span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
