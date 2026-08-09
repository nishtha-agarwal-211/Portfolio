"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Cpu, Terminal, Zap } from "lucide-react";

export default function TelemetryBar() {
  return (
    <div className="w-full border-y border-white/10 bg-white/[0.02] py-2.5 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 font-mono text-[11px] text-mist sm:px-10">
        {/* Telemetry Item 1 */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-pulse" />
          </span>
          <span className="text-ink font-medium">STATUS:</span>
          <span className="text-pulse">OPEN FOR INTERNSHIPS (2026/2027)</span>
        </div>

        {/* Telemetry Item 2 */}
        <div className="hidden sm:flex items-center gap-2">
          <Zap className="h-3.5 w-3.5 text-signal" />
          <span>PERFORMANCE:</span>
          <span className="text-signal"><span className="font-semibold">&lt;50ms</span> BACKEND LATENCY</span>
        </div>

        {/* Telemetry Item 3 */}
        <div className="hidden md:flex items-center gap-2">
          <Activity className="h-3.5 w-3.5 text-pulse" />
          <span>OPEN SOURCE:</span>
          <span className="text-ink font-semibold">120+ MERGED PRs</span>
        </div>

        {/* Telemetry Item 4 */}
        <div className="hidden lg:flex items-center gap-2">
          <Cpu className="h-3.5 w-3.5 text-signal" />
          <span>ACADEMIC:</span>
          <span className="text-ink font-semibold">9.47 CGPA</span>
        </div>

        {/* Telemetry Item 5 */}
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-signal" />
          <span className="text-mist/70">SYSTEM: STABLE_V2026</span>
        </div>
      </div>
    </div>
  );
}
