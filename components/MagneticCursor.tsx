"use client";

import { useEffect, useRef, useState } from "react";

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotInnerRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
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
    let currentLabel = "";

    function onMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;

      const target = e.target as HTMLElement;

      // Check for cursor label first
      const labelEl = target?.closest("[data-cursor-label]") as HTMLElement | null;
      const label = labelEl?.getAttribute("data-cursor-label") || "";

      // Check for general interactive elements
      const interactive = !!target?.closest("a, button, input, textarea, [role='button'], .magnetic-target");

      // Handle label state
      if (label !== currentLabel) {
        currentLabel = label;

        if (label && labelRef.current && ringInnerRef.current && dotInnerRef.current) {
          // Morph into label pill
          labelRef.current.textContent = `[${label}]`;
          labelRef.current.style.opacity = "1";
          labelRef.current.style.transform = "scale(1)";

          dotInnerRef.current.style.opacity = "0";
          dotInnerRef.current.style.transform = "scale(0)";

          ringInnerRef.current.style.width = "auto";
          ringInnerRef.current.style.height = "auto";
          ringInnerRef.current.style.padding = "6px 14px";
          ringInnerRef.current.style.borderRadius = "20px";
          ringInnerRef.current.style.borderColor = "rgba(110,91,255,0.5)";
          ringInnerRef.current.style.background = "rgba(14,19,34,0.85)";
          ringInnerRef.current.style.marginLeft = "-36px";
          ringInnerRef.current.style.marginTop = "-16px";
        } else if (!label && labelRef.current && ringInnerRef.current && dotInnerRef.current) {
          // Revert from label pill
          labelRef.current.style.opacity = "0";
          labelRef.current.style.transform = "scale(0.8)";

          dotInnerRef.current.style.opacity = "1";
          dotInnerRef.current.style.transform = "scale(1)";

          ringInnerRef.current.style.padding = "0px";
          ringInnerRef.current.style.borderRadius = "9999px";
          ringInnerRef.current.style.marginLeft = "0px";
          ringInnerRef.current.style.marginTop = "0px";

          // Let the hover state below handle the rest
        }
      }

      // Handle general hover state (only when no label is active)
      if (!currentLabel) {
        if (interactive !== isHovering) {
          isHovering = interactive;
          if (dotInnerRef.current) {
            dotInnerRef.current.style.background = isHovering
              ? "linear-gradient(135deg, #6E5BFF, #2CE6C6)"
              : "#F1F5F9";
            dotInnerRef.current.style.boxShadow = isHovering
              ? "0 0 16px rgba(110,91,255,0.5)"
              : "0 0 6px rgba(241,245,249,0.3)";
          }
          if (ringInnerRef.current) {
            ringInnerRef.current.style.width = isHovering ? "56px" : "40px";
            ringInnerRef.current.style.height = isHovering ? "56px" : "40px";
            ringInnerRef.current.style.marginLeft = isHovering ? "-8px" : "0px";
            ringInnerRef.current.style.marginTop = isHovering ? "-8px" : "0px";
            ringInnerRef.current.style.borderColor = isHovering
              ? "rgba(110,91,255,0.5)"
              : "rgba(241,245,249,0.15)";
            ringInnerRef.current.style.background = isHovering
              ? "rgba(110,91,255,0.06)"
              : "transparent";
          }
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

      {/* Outer ring — also hosts the label pill */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] will-change-transform"
        style={{ marginLeft: "-20px", marginTop: "-20px" }}
      >
        <div
          ref={ringInnerRef}
          className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ease-out"
          style={{
            borderColor: "rgba(241,245,249,0.15)",
            background: "transparent",
          }}
        >
          {/* Cursor label text — hidden by default */}
          <span
            ref={labelRef}
            className="whitespace-nowrap font-mono text-[11px] font-medium text-signal transition-all duration-200 ease-out"
            style={{
              opacity: 0,
              transform: "scale(0.8)",
            }}
          />
        </div>
      </div>
    </>
  );
}
