"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
};

const INITIAL_SUGGESTIONS = [
  "What are Nishtha's primary technical skills?",
  "Tell me about her 120+ open-source PRs.",
  "What is the ProductBrowser sub-50ms latency project?",
  "What NGO community work does she do?",
  "Is Nishtha open for internships?",
];

const PREDEFINED_ANSWERS: Record<string, string> = {
  skills: "Nishtha specializes in **Frontend Engineering** (React 19, Next.js 16, TypeScript, Tailwind CSS) alongside strong backend fundamentals (Node.js, PostgreSQL with composite indexing, FastAPI) and AI APIs (Gemini API, LangChain, Qdrant).",
  prs: "Nishtha has merged **120+ pull requests** in real-world open-source repositories across **GirlScript Summer of Code '26** and **Elite Coders Winter of Code (ECWoC)** — contributing accessible UI components, bug fixes, and performance upgrades.",
  productbrowser: "ProductBrowser is a high-performance catalog API. Nishtha engineered keyset pagination on (created_at, id) and four composite Postgres indexes to achieve **sub-50ms query response times** across **200,000 products** under concurrent inserts.",
  ngo: "As Co-Founder & Community Lead at **Shree Shyam Seva Samiti** (since Feb 2023), Nishtha manages logistics for a weekly food drive serving **2,000–2,500 meals** every Wednesday, sponsors annual schooling for 30+ children, and organizes healthcare camps.",
  internships: "Yes! Nishtha is actively seeking **Frontend and Full-Stack Engineering internships for 2026/2027**. She is based in Bengaluru, Karnataka (Newton School of Technology, CGPA 9.47/10.0).",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: `Hi there! 👋 I'm **Nishtha's AI Assistant**. Ask me anything about her projects, 120+ open-source PRs, CGPA (9.47/10.0), or internship availability!`,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    setTimeout(() => {
      let botReply = "Nishtha is a Frontend Developer & CSE student at Newton School of Technology (CGPA 9.47) with 120+ merged open-source PRs. Feel free to contact her at nishthaagarwal937@gmail.com!";
      const lower = query.toLowerCase();

      if (lower.includes("skill") || lower.includes("stack") || lower.includes("tech")) {
        botReply = PREDEFINED_ANSWERS.skills;
      } else if (lower.includes("pr") || lower.includes("open source") || lower.includes("gssoc")) {
        botReply = PREDEFINED_ANSWERS.prs;
      } else if (lower.includes("product") || lower.includes("browser") || lower.includes("latency") || lower.includes("backend")) {
        botReply = PREDEFINED_ANSWERS.productbrowser;
      } else if (lower.includes("ngo") || lower.includes("community") || lower.includes("food") || lower.includes("shyam")) {
        botReply = PREDEFINED_ANSWERS.ngo;
      } else if (lower.includes("intern") || lower.includes("job") || lower.includes("hire") || lower.includes("contact") || lower.includes("available")) {
        botReply = PREDEFINED_ANSWERS.internships;
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 350);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open AI Assistant"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-signal-gradient p-3 text-void shadow-[0_0_25px_rgba(44,230,198,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(110,91,255,0.6)] cursor-pointer"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="glass fixed bottom-24 right-4 z-50 flex h-[520px] w-[calc(100vw-32px)] max-w-[380px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-void/90 shadow-2xl backdrop-blur-xl sm:right-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/15 text-signal border border-signal/30">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-ink">Nishtha AI Assistant</h3>
                  <p className="font-mono text-[11px] text-pulse flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-pulse animate-ping" /> Online · Instant Answers
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-mist hover:text-ink transition-colors p-1"
                aria-label="Close Assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.sender === "bot" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-pulse font-mono text-xs">
                      <Bot className="h-3.5 w-3.5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      m.sender === "user"
                        ? "bg-signal-gradient text-void font-medium rounded-br-none shadow-glow"
                        : "glass text-mist border border-white/10 rounded-bl-none"
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>
                    <span
                      className={`block mt-1 text-[10px] font-mono text-right ${
                        m.sender === "user" ? "text-void/70" : "text-mist/50"
                      }`}
                    >
                      {m.time}
                    </span>
                  </div>
                  {m.sender === "user" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-signal-gradient text-void font-mono text-xs">
                      <User className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="px-3 py-2 border-t border-white/5 bg-white/[0.01] flex gap-1.5 overflow-x-auto scrollbar-none">
              {INITIAL_SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(s)}
                  className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-mist transition-colors hover:border-signal/40 hover:text-pulse"
                >
                  {s}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 border-t border-white/10 bg-white/[0.02] px-3.5 py-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Nishtha's work..."
                className="flex-1 bg-transparent font-sans text-xs text-ink placeholder:text-mist/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-signal-gradient text-void transition-opacity disabled:opacity-40"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
