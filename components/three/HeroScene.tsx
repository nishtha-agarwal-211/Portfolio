"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GradientOrb = dynamic(() => import("./GradientOrb"), { ssr: false });

export default function HeroScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.matchMedia("(max-width: 767px)").matches;
    setEnabled(!prefersReduced && !isSmall);
  }, []);

  if (!enabled) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-signal-gradient-soft opacity-50 pointer-events-none"
      />
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <GradientOrb />
    </div>
  );
}
