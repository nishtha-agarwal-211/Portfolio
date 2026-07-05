"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/lib/data";

const SOCIALS = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.social.github, icon: Github },
  { label: "LinkedIn", href: profile.social.linkedin, icon: Linkedin },
  { label: "LeetCode", href: profile.social.leetcode, icon: Code2 },
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
          index="06"
          eyebrow="Contact"
          title="Let's build something."
          description="Open to internships, collaborations, and interesting problems."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-7 sm:p-8">
              {status === "sent" ? (
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                  <span className="mb-4 h-2.5 w-2.5 rounded-full bg-pulse shadow-[0_0_10px_#2CE6C6]" />
                  <p className="font-display text-xl text-ink">Message sent.</p>
                  <p className="mt-2 text-sm text-mist">
                    Thanks for reaching out — I&apos;ll reply by email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      Something went wrong sending that — try again, or email me directly at{" "}
                      <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>.
                    </p>
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
                        className="glass-tight w-full rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-mist/50"
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
                        className="glass-tight w-full rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-mist/50"
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
                      className="glass-tight w-full resize-none rounded-xl px-4 py-3 text-sm text-ink outline-none placeholder:text-mist/50"
                      placeholder="What are you building?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass glow-border group flex items-center justify-between rounded-2xl px-5 py-4 transition-transform hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-3 text-sm text-ink">
                  <s.icon className="h-4 w-4 text-pulse" />
                  {s.label}
                </span>
                <span className="font-mono text-xs text-mist transition-colors group-hover:text-pulse">
                  →
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
