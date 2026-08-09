"use client";

import { motion } from "framer-motion";

type Props = {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  once = true,
  as: Tag = "span",
}: Props) {
  const words = children.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
