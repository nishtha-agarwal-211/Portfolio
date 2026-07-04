"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const NetworkGraph = dynamic(() => import("./NetworkGraph"), { ssr: false });

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
        className="absolute inset-0 bg-signal-gradient-soft opacity-60"
      />
    );
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <NetworkGraph />
    </div>
  );
}
