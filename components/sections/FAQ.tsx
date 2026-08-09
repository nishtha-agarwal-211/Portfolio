"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-pulse">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>RECRUITER &amp; COLLABORATOR Q&amp;A</span>
          </div>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-mist sm:text-base">
            Quick context on engineering focus, open-source work, and internship availability.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass glow-border overflow-hidden rounded-2xl border border-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="font-display text-base font-medium text-ink sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-mist transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-pulse bg-white/10" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="border-t border-white/5 px-6 py-5 text-sm leading-relaxed text-mist">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
