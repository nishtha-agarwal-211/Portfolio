"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  value: string;
  className?: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  className = "",
  duration = 2,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    // Parse the numeric portion and any suffix (e.g., "80+" → 80, "+")
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const numStr = match[1].replace(/,/g, "");
    const suffix = match[2];
    const target = parseFloat(numStr);
    const isDecimal = numStr.includes(".");
    const hasComma = match[1].includes(",");
    const startTime = performance.now();

    function tick() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * target;

      let formatted: string;
      if (isDecimal) {
        formatted = current.toFixed(2);
      } else {
        const rounded = Math.round(current);
        formatted = hasComma ? rounded.toLocaleString() : String(rounded);
      }

      setDisplay(formatted + suffix);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {display}
    </motion.span>
  );
}
