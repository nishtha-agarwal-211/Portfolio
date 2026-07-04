"use client";

import { useEffect, useState } from "react";

const LINES = [
  "booting nishtha.dev",
  "loading projects: product-browser, smart-medicines, sos, smartacres",
  "connecting graph nodes",
  "ready",
];

export default function Preloader() {
  const [step, setStep] = useState(0);
  const [hide, setHide] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("na-preloader-seen");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) {
      setMounted(false);
      return;
    }
    sessionStorage.setItem("na-preloader-seen", "1");
    document.body.style.overflow = "hidden";

    const timers: ReturnType<typeof setTimeout>[] = [];
    LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 220 * (i + 1)));
    });
    timers.push(
      setTimeout(() => {
        setHide(true);
        document.body.style.overflow = "";
      }, 220 * LINES.length + 450)
    );
    timers.push(setTimeout(() => setMounted(false), 220 * LINES.length + 950));

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-void transition-opacity duration-500 ${
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-sm px-6 font-mono text-sm">
        {LINES.slice(0, step).map((line) => (
          <p key={line} className="mb-1.5 text-mist">
            <span className="text-signal">$</span> {line}
          </p>
        ))}
        {step < LINES.length && (
          <span className="inline-block h-4 w-2 animate-pulse bg-pulse" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
