"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  Download,
  Github,
  Mail,
  FileText,
  Folder,
  Command,
} from "lucide-react";
import { projects, profile } from "@/lib/data";

type PaletteItem = {
  id: string;
  label: string;
  section: string;
  icon: React.ElementType;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Build the item list
  const items: PaletteItem[] = useMemo(() => {
    const navItems: PaletteItem[] = [
      { id: "nav-home", label: "Home", section: "Navigation", icon: ArrowRight, action: () => router.push("/") },
      { id: "nav-about", label: "About", section: "Navigation", icon: ArrowRight, action: () => router.push("/about") },
      { id: "nav-projects", label: "Projects", section: "Navigation", icon: ArrowRight, action: () => router.push("/projects") },
      { id: "nav-skills", label: "Skills", section: "Navigation", icon: ArrowRight, action: () => router.push("/skills") },
      { id: "nav-log", label: "Changelog", section: "Navigation", icon: ArrowRight, action: () => router.push("/log") },
      { id: "nav-contact", label: "Contact", section: "Navigation", icon: ArrowRight, action: () => router.push("/contact") },
    ];

    const projectItems: PaletteItem[] = projects.map((p) => ({
      id: `project-${p.slug}`,
      label: p.name,
      section: "Projects",
      icon: Folder,
      action: () => router.push(`/projects/${p.slug}`),
    }));

    const actionItems: PaletteItem[] = [
      {
        id: "action-resume",
        label: "Download Resume",
        section: "Quick Actions",
        icon: Download,
        action: () => window.open(profile.resumeFile, "_blank", "noopener,noreferrer"),
      },
      {
        id: "action-github",
        label: "Open GitHub",
        section: "Quick Actions",
        icon: Github,
        action: () => window.open(profile.social.github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "action-email",
        label: `Email ${profile.name.split(" ")[0]}`,
        section: "Quick Actions",
        icon: Mail,
        action: () => window.open(`mailto:${profile.email}`, "_self"),
      },
    ];

    return [...navItems, ...projectItems, ...actionItems];
  }, [router]);

  // Simple fuzzy filter
  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const lower = query.toLowerCase();
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(lower) ||
        item.section.toLowerCase().includes(lower)
    );
  }, [query, items]);

  // Reset active index when results change
  useEffect(() => {
    setActiveIdx(0);
  }, [filtered.length]);

  // Keyboard shortcut: ⌘K / Ctrl+K
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${activeIdx}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIdx]);

  const execute = useCallback(
    (item: PaletteItem) => {
      setOpen(false);
      item.action();
    },
    []
  );

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[activeIdx]) {
      e.preventDefault();
      execute(filtered[activeIdx]);
    }
  }

  // Group by section for rendering
  const grouped = useMemo(() => {
    const groups: { section: string; items: (PaletteItem & { globalIdx: number })[] }[] = [];
    let globalIdx = 0;
    const sectionMap = new Map<string, (PaletteItem & { globalIdx: number })[]>();

    filtered.forEach((item) => {
      if (!sectionMap.has(item.section)) {
        const arr: (PaletteItem & { globalIdx: number })[] = [];
        sectionMap.set(item.section, arr);
        groups.push({ section: item.section, items: arr });
      }
      sectionMap.get(item.section)!.push({ ...item, globalIdx });
      globalIdx++;
    });

    return groups;
  }, [filtered]);

  // Check for reduced motion
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.96, y: -8 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.96, y: -8 },
        transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] },
      };

  return (
    <>
      {/* Mobile tap target — visible on small screens */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="glass fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:shadow-glow hover:-translate-y-1 cursor-pointer md:hidden"
      >
        <Search className="h-4 w-4 text-signal" />
      </button>

      {/* Desktop hint — hidden on mobile */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-mist/60 transition-all duration-300 hover:border-signal/30 hover:text-mist cursor-pointer md:flex"
      >
        <Command className="h-3 w-3" />
        <span>K</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[9990] bg-void/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Palette */}
            <motion.div
              {...motionProps}
              className="fixed left-1/2 top-[15vh] z-[9991] w-[calc(100vw-32px)] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-panel/95 shadow-2xl backdrop-blur-xl"
              role="dialog"
              aria-label="Command palette"
            >
              {/* Search input */}
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
                <Search className="h-4 w-4 shrink-0 text-signal" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Search pages, projects, actions…"
                  className="flex-1 bg-transparent font-mono text-sm text-ink placeholder:text-mist/40 focus:outline-none"
                  autoComplete="off"
                  spellCheck={false}
                />
                <kbd className="hidden shrink-0 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-mist/50 sm:inline">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-[50vh] overflow-y-auto p-2">
                {filtered.length === 0 && (
                  <p className="px-3 py-8 text-center font-mono text-xs text-mist/50">
                    No results for &ldquo;{query}&rdquo;
                  </p>
                )}

                {grouped.map((group) => (
                  <div key={group.section} className="mb-1">
                    <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-wider text-mist/40">
                      {group.section}
                    </p>
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = item.globalIdx === activeIdx;
                      return (
                        <button
                          key={item.id}
                          data-idx={item.globalIdx}
                          onClick={() => execute(item)}
                          onMouseEnter={() => setActiveIdx(item.globalIdx)}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left font-mono text-sm transition-colors cursor-pointer ${
                            isActive
                              ? "bg-white/[0.06] text-ink"
                              : "text-mist hover:bg-white/[0.03]"
                          }`}
                        >
                          <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-signal" : "text-mist/50"}`} />
                          <span className="flex-1 truncate">{item.label}</span>
                          {isActive && (
                            <span className="text-[10px] text-mist/40">↵</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Footer hint */}
              <div className="flex items-center gap-3 border-t border-white/10 px-4 py-2.5 font-mono text-[10px] text-mist/40">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
