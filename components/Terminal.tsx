"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { TerminalSquare, X } from "lucide-react";
import { profile, projects } from "@/lib/data";

type Line = { type: "input" | "output" | "error"; text: string };

const HELP_TEXT = [
  "available commands:",
  "  whoami            show a quick bio",
  "  projects          list all projects",
  "  open <slug>       open a project's live demo",
  "  code <slug>       open a project's github repo",
  "  resume            open resume pdf",
  "  ping <host>       check if a host is reachable (flavor)",
  "  traceroute        trace the route to nishtha.dev (flavor)",
  "  sudo hire me      ...worth a shot",
  "  clear             clear the terminal",
  "  exit              close this window",
];

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: `nishtha@newton:~$ welcome. type 'help' to get started.` },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const push = useCallback((newLines: Line[]) => {
    setLines((prev) => [...prev, ...newLines]);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isTyping = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
      if (e.key === "`" && !isTyping) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function runFakeTrace(hops: string[], onLine: (h: string, i: number) => Line) {
    hops.forEach((hop, i) => {
      setTimeout(() => {
        push([onLine(hop, i)]);
      }, 260 * (i + 1));
    });
  }

  function handleCommand(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;

    push([{ type: "input", text: cmd }]);
    setHistory((h) => [...h, cmd]);
    setHistoryIdx(null);

    const [base, ...args] = cmd.split(" ");
    const arg = args.join(" ").trim();

    switch (base.toLowerCase()) {
      case "help": {
        push(HELP_TEXT.map((t) => ({ type: "output", text: t })));
        break;
      }
      case "whoami": {
        push([
          { type: "output", text: `${profile.name} — ${profile.role}` },
          { type: "output", text: profile.summary },
        ]);
        break;
      }
      case "projects": {
        push(
          projects.map((p) => ({
            type: "output" as const,
            text: `  ${p.slug.padEnd(20)} ${p.tagline}`,
          }))
        );
        push([{ type: "output", text: "run 'open <slug>' or 'code <slug>' for any of these." }]);
        break;
      }
      case "open": {
        const p = projects.find((p) => p.slug === arg);
        if (!p) {
          push([{ type: "error", text: `no project matching '${arg}'. try 'projects'.` }]);
        } else if (p.demo) {
          push([{ type: "output", text: `opening ${p.demo} ...` }]);
          window.open(p.demo, "_blank", "noopener,noreferrer");
        } else {
          push([{ type: "error", text: `${p.name} has no live demo linked.` }]);
        }
        break;
      }
      case "code": {
        const p = projects.find((p) => p.slug === arg);
        if (!p) {
          push([{ type: "error", text: `no project matching '${arg}'. try 'projects'.` }]);
        } else if (p.github) {
          push([{ type: "output", text: `opening ${p.github} ...` }]);
          window.open(p.github, "_blank", "noopener,noreferrer");
        } else {
          push([{ type: "error", text: `${p.name} has no repo linked.` }]);
        }
        break;
      }
      case "resume": {
        push([{ type: "output", text: "opening resume.pdf ..." }]);
        window.open(profile.resumeFile, "_blank", "noopener,noreferrer");
        break;
      }
      case "ping": {
        const host = arg || "nishtha.dev";
        push([{ type: "output", text: `PING ${host}: 3 packets` }]);
        [8, 11, 9].forEach((ms, i) => {
          setTimeout(() => {
            push([{ type: "output", text: `  64 bytes from ${host}: seq=${i} time=${ms}ms` }]);
          }, 200 * (i + 1));
        });
        setTimeout(() => {
          push([{ type: "output", text: `${host} is reachable. she's online and building.` }]);
        }, 750);
        break;
      }
      case "traceroute": {
        const hops = ["newton-school.edu", "gssoc-26.gateway", "vercel.edge", "nishtha.dev"];
        push([{ type: "output", text: `traceroute to nishtha.dev, ${hops.length} hops max` }]);
        runFakeTrace(hops, (hop, i) => ({
          type: "output",
          text: `  ${i + 1}  ${hop}  ${8 + i * 6}ms`,
        }));
        break;
      }
      case "sudo": {
        if (arg.toLowerCase() === "hire me") {
          push([
            { type: "output", text: "[sudo] password for recruiter: ****************" },
            { type: "output", text: "permission granted." },
            { type: "output", text: `opening mailto:${profile.email} ...` },
          ]);
          window.open(`mailto:${profile.email}`, "_self");
        } else {
          push([{ type: "error", text: "nice try. this terminal doesn't have root." }]);
        }
        break;
      }
      case "clear": {
        setLines([]);
        break;
      }
      case "exit": {
        setOpen(false);
        break;
      }
      default: {
        push([{ type: "error", text: `command not found: ${base}. type 'help' for a list.` }]);
      }
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIdx === null ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInput(history[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === null) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= history.length) {
        setHistoryIdx(null);
        setInput("");
      } else {
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx]);
      }
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close terminal" : "Open terminal"}
        className="glass fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:shadow-glow-pulse hover:-translate-y-1"
      >
        {open ? (
          <X className="h-4 w-4 text-pulse" />
        ) : (
          <TerminalSquare className="h-4 w-4 text-pulse" />
        )}
      </button>
      
      {!open && (
       <span className="fixed bottom-[4.7rem] left-6 z-40 hidden font-mono text-[10px] text-mist/60 sm:block">
         press <kbd className="rounded border border-white/10 px-1">`</kbd> to open
       </span>
     )}

      {open && (
        <div
          role="dialog"
          aria-label="Interactive terminal"
          className="glass fixed bottom-20 left-6 z-40 flex h-[420px] w-[92vw] max-w-md flex-col overflow-hidden rounded-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 font-mono text-xs text-mist">
            <span className="h-2.5 w-2.5 rounded-full bg-pulse/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
            <span className="ml-2">~/console</span>
          </div>

          <div
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
            className="flex-1 space-y-1 overflow-y-auto px-4 py-3 font-mono text-xs leading-relaxed"
          >
            {lines.map((line, i) => (
              <p
                key={i}
                className={
                  line.type === "input"
                    ? "text-ink"
                    : line.type === "error"
                    ? "text-red-400"
                    : "text-mist"
                }
              >
                {line.type === "input" ? (
                  <>
                    <span className="text-signal">nishtha@newton:~$</span> {line.text}
                  </>
                ) : (
                  line.text
                )}
              </p>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3 font-mono text-xs">
            <span className="text-signal">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete="off"
              spellCheck={false}
              placeholder="type a command..."
              className="flex-1 bg-transparent text-ink outline-none placeholder:text-mist/40"
            />
          </div>
        </div>
      )}
    </>
  );
}
