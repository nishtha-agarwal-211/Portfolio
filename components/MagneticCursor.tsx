"use client";

import { useEffect, useRef, useState } from "react";

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotInnerRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.matchMedia("(max-width: 767px)").matches;
    setEnabled(isFine && !reduced && !isSmall);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let x = 0, y = 0, tx = 0, ty = 0;
    let raf = 0;
    let isHovering = false;

    function onMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;

      const target = e.target as HTMLElement;
      const interactive = !!target?.closest("a, button, input, textarea, [role='button'], .magnetic-target");
      if (interactive !== isHovering) {
        isHovering = interactive;
        if (dotInnerRef.current) {
          dotInnerRef.current.style.background = isHovering
            ? "linear-gradient(135deg, #7C3AED, #06D6A0)"
            : "#F1F5F9";
          dotInnerRef.current.style.boxShadow = isHovering
            ? "0 0 16px rgba(124,58,237,0.5)"
            : "0 0 6px rgba(241,245,249,0.3)";
        }
        if (ringInnerRef.current) {
          ringInnerRef.current.style.width = isHovering ? "56px" : "40px";
          ringInnerRef.current.style.height = isHovering ? "56px" : "40px";
          ringInnerRef.current.style.marginLeft = isHovering ? "-8px" : "0px";
          ringInnerRef.current.style.marginTop = isHovering ? "-8px" : "0px";
          ringInnerRef.current.style.borderColor = isHovering
            ? "rgba(124,58,237,0.5)"
            : "rgba(241,245,249,0.15)";
          ringInnerRef.current.style.background = isHovering
            ? "rgba(124,58,237,0.06)"
            : "transparent";
        }
      }
    }

    function tick() {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        const rx = x + (tx - x) * -0.05;
        const ry = y + (ty - y) * -0.05;
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
        style={{ marginLeft: "-4px", marginTop: "-4px" }}
      >
        <div
          ref={dotInnerRef}
          className="h-2 w-2 rounded-full transition-all duration-200 ease-out"
          style={{
            background: "#F1F5F9",
            boxShadow: "0 0 6px rgba(241,245,249,0.3)",
          }}
        />
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] will-change-transform"
        style={{ marginLeft: "-20px", marginTop: "-20px" }}
      >
        <div
          ref={ringInnerRef}
          className="h-10 w-10 rounded-full border transition-all duration-300 ease-out"
          style={{
            borderColor: "rgba(241,245,249,0.15)",
            background: "transparent",
          }}
        />
      </div>
    </>
  );
}
