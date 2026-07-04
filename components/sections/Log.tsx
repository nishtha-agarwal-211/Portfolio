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

        <div className="relative border-l border-white/10 pl-8">
          {log.map((entry, i) => (
            <motion.div
              key={entry.tag}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-pulse shadow-[0_0_10px_#2CE6C6]" />
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="rounded-full border border-signal/40 bg-signal/10 px-2.5 py-1 text-signal">
                  {entry.tag}
                </span>
                <span className="text-mist">{entry.date}</span>
              </div>
              <h3 className="mt-3 font-display text-xl text-ink">{entry.title}</h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-mist">{entry.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
