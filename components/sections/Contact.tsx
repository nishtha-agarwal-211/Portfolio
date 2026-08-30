"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MagneticWrap from "@/components/ui/MagneticWrap";
import { profile } from "@/lib/data";

const SOCIALS = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail, accent: "hover:border-pulse/40" },
  { label: "GitHub", href: profile.social.github, icon: Github, accent: "hover:border-signal/40" },
  { label: "LinkedIn", href: profile.social.linkedin, icon: Linkedin, accent: "hover:border-aurora/40" },
  { label: "LeetCode", href: profile.social.leetcode, icon: Code2, accent: "hover:border-amber/40" },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="~/contact"
          eyebrow="Contact"
          title="Let's build something."
          description="Open to internships, collaborations, and interesting problems."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-7 sm:p-8">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex h-full min-h-[280px] flex-col items-center justify-center text-center"
                >
                  <span className="relative mb-6 flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse opacity-75" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-pulse" />
                  </span>
                  <p className="font-display text-xl font-semibold text-ink">Message sent.</p>
                  <p className="mt-2 text-sm text-mist">
                    Thanks for reaching out — I&apos;ll reply by email shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                    >
                      Something went wrong — try again, or email me at{" "}
                      <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>.
                    </motion.p>
                  )}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block font-mono text-xs text-mist">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="glass-tight w-full rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-mist/50 transition-all duration-300 focus:border-signal/40 focus:shadow-[0_0_16px_rgba(124,58,237,0.1)]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block font-mono text-xs text-mist">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="glass-tight w-full rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-mist/50 transition-all duration-300 focus:border-signal/40 focus:shadow-[0_0_16px_rgba(124,58,237,0.1)]"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block font-mono text-xs text-mist">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="glass-tight w-full resize-none rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-mist/50 transition-all duration-300 focus:border-signal/40 focus:shadow-[0_0_16px_rgba(124,58,237,0.1)]"
                      placeholder="What are you building?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    data-cursor-label="send"
                    className="shimmer inline-flex items-center gap-2 rounded-full bg-signal-gradient px-6 py-3 font-semibold text-void transition-all duration-300 hover:scale-105 hover:shadow-glow disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {SOCIALS.map((s, i) => (
              <MagneticWrap key={s.label} strength={0.2}>
                <motion.a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-cursor-label="open"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className={`bento-card group flex items-center justify-between px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${s.accent}`}
                >
                  <span className="flex items-center gap-3 text-sm text-ink">
                    <s.icon className="h-4 w-4 text-pulse" />
                    {s.label}
                  </span>
                  <span className="font-mono text-xs text-mist transition-all duration-200 group-hover:text-pulse group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>
              </MagneticWrap>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
