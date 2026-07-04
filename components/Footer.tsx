import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-6 sm:px-10">
      <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-mist sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <p className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse shadow-[0_0_8px_#2CE6C6]" />
          Available for work
        </p>
      </div>
    </footer>
  );
}
