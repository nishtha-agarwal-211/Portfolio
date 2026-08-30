"use client";

import { useEffect, useRef, useState } from "react";

type Glyph = {
  char: string;
  top: string;
  left: string;
  size: string;
  opacity: number;
  speed: number; // parallax multiplier (0.1–0.4)
  color: string;
};

const GLYPHS: Glyph[] = [
  { char: "+",  top: "8%",  left: "4%",  size: "6rem",  opacity: 0.03, speed: 0.18, color: "var(--pulse, #6E5BFF)" },
  { char: "//", top: "35%", left: "7%",  size: "4rem",  opacity: 0.035, speed: 0.22, color: "var(--mist, #94A3B8)" },
  { char: "{}", top: "48%", left: "88%", size: "7rem",  opacity: 0.025, speed: 0.35, color: "var(--pulse, #6E5BFF)" },
  { char: "=>", top: "62%", left: "3%",  size: "4.5rem", opacity: 0.03, speed: 0.15, color: "var(--aurora, #38BDF8)" },
  { char: "0x", top: "15%", left: "90%", size: "4rem",  opacity: 0.025, speed: 0.4, color: "var(--signal, #2CE6C6)" },
  { char: "/*", top: "88%", left: "8%",  size: "4.5rem", opacity: 0.03, speed: 0.2, color: "var(--aurora, #38BDF8)" },
];

export default function DepthGlyphs() {
  const [enabled, setEnabled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const glyphRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const scrollY = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    setEnabled(!reduced && !small);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Subscribe to Lenis scroll if available, otherwise fall back to window scroll
    let cleanup: (() => void) | undefined;

    function applyParallax() {
      glyphRefs.current.forEach((el, i) => {
        if (!el) return;
        const glyph = GLYPHS[i];
        const offset = scrollY.current * glyph.speed;
        el.style.transform = `translateY(${offset}px) translateZ(0)`;
      });
    }

    function tick() {
      applyParallax();
      raf.current = requestAnimationFrame(tick);
    }

    // Try to hook into Lenis
    function tryLenis() {
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.on === "function") {
        const handler = ({ scroll }: { scroll: number }) => {
          scrollY.current = scroll;
        };
        lenis.on("scroll", handler);
        cleanup = () => lenis.off("scroll", handler);
      } else {
        // Fallback: native scroll
        const handler = () => {
          scrollY.current = window.scrollY;
        };
        window.addEventListener("scroll", handler, { passive: true });
        cleanup = () => window.removeEventListener("scroll", handler);
      }
    }

    // Lenis may not be initialized yet on first render, wait a tick
    const timer = setTimeout(tryLenis, 100);
    raf.current = requestAnimationFrame(tick);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf.current);
      cleanup?.();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[2] overflow-hidden"
      aria-hidden="true"
    >
      {GLYPHS.map((g, i) => (
        <span
          key={`${g.char}-${i}`}
          ref={(el) => { glyphRefs.current[i] = el; }}
          className="absolute select-none font-mono font-medium will-change-transform"
          style={{
            top: g.top,
            left: g.left,
            fontSize: g.size,
            opacity: g.opacity,
            color: g.color,
            lineHeight: 1,
          }}
        >
          {g.char}
        </span>
      ))}
    </div>
  );
}
