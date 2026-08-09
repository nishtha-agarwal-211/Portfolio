"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
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

    const start = performance.now();
    const duration = 1800;

    function tick() {
      const elapsed = performance.now() - start;
      const p = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setProgress(Math.round(eased * 100));

      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setHide(true);
          document.body.style.overflow = "";
        }, 300);
        setTimeout(() => setMounted(false), 900);
      }
    }

    requestAnimationFrame(tick);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          role="status"
          aria-label="Loading portfolio"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
        >
          {/* Handwritten SVG Signature / Welcome Draw Animation */}
          <div className="relative mb-6 flex items-center justify-center">
            <svg
              className="h-16 w-48 text-pulse sm:h-20 sm:w-64"
              viewBox="0 0 400 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                d="M 20 60 Q 60 10 100 60 T 180 60 T 260 60 T 340 60 M 70 30 Q 120 90 170 30 T 270 90 T 370 30"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Ring spinner */}
          <div className="relative mb-8">
            <div className="preloader-ring" />
            <div className="absolute inset-0 preloader-ring animate-pulse-ring opacity-30" />
          </div>

          {/* Progress number */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-semibold tabular-nums text-ink"
          >
            {progress}
            <span className="text-mist text-lg">%</span>
          </motion.p>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 font-mono text-xs tracking-[0.3em] text-mist uppercase"
          >
            nishtha agarwal
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

