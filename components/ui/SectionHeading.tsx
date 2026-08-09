"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16 max-w-2xl"
    >
      <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-pulse">
        <span className="text-mist">{index}</span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="h-px w-10 origin-left bg-gradient-to-r from-pulse to-transparent"
        />
        <span>{eyebrow}</span>
      </div>
      <TextReveal
        as="h2"
        className="font-display text-3xl font-semibold text-ink sm:text-4xl md:text-5xl leading-[1.1]"
        delay={0.1}
      >
        {title}
      </TextReveal>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-base leading-relaxed text-mist sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
