"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14 max-w-2xl"
    >
      <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-pulse">
        <span className="text-mist">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-pulse to-transparent" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
