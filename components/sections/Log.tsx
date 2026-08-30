"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { log } from "@/lib/data";

export default function Log() {
  return (
    <section id="log" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="05"
          eyebrow="Changelog"
          title="A running log, not a resume."
          description="The story so far, in the order it happened."
        />

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="absolute left-[11px] top-0 bottom-0 w-px origin-top bg-gradient-to-b from-signal via-signal/20 to-transparent"
          />

          <div className="space-y-0">
            {log.map((entry, i) => (
              <motion.div
                key={entry.tag}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative pb-10 pl-10 last:pb-0"
              >
                {/* Timeline dot with ripple */}
                <div className="absolute left-0 top-1.5">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: i * 0.06 + 0.1,
                    }}
                    className="flex h-[22px] w-[22px] items-center justify-center"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-signal shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                    {/* Ripple ring */}
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 2.2, opacity: [0, 0.4, 0] }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.06 + 0.3,
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="absolute h-2.5 w-2.5 rounded-full border border-signal/50"
                    />
                  </motion.span>
                </div>

                {/* Content */}
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="rounded-full border border-pulse/30 bg-pulse/10 px-2.5 py-1 text-pulse">
                    {entry.tag}
                  </span>
                  <span className="text-mist">{entry.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{entry.title}</h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-mist">{entry.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
