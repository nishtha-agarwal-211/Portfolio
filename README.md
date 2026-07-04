# Nishtha Agarwal — Portfolio

A dark, glassmorphic developer portfolio built with Next.js 14, Three.js (via React Three Fiber), Framer Motion, and Tailwind CSS.

## Design concept

- **Signature element:** the hero background is a live network graph (nodes drifting and connecting like a graph algorithm), a nod to competitive programming and backend systems work — not a generic distorted-blob visual.
- **Terminal/mono accents:** nav numbering, eyebrows, and the hero's `whoami` line use JetBrains Mono, echoing the CLI aesthetic of the System of Support project. The boot-sequence preloader extends this motif.
- **Changelog-style timeline:** the "Log" section reads like a git changelog (`v2026.04`, etc.) instead of a generic dotted timeline, running all the way back to the Feb 2023 founding of the NGO.
- **Beyond the codebase:** a dedicated Experience section covers the NGO co-founder role and GirlScript Summer of Code contributions — real leadership and open-source impact, not just shipped projects.
- **Honest skills section:** skills are shown as grouped chips, not fabricated percentage bars — no proficiency numbers were invented.
- **Palette:** void `#07070C` background, signal `#6E5BFF` (indigo) and pulse `#2CE6C6` (teal) as the two accent colors, blended into the gradient.

## Extra features

- **Boot-sequence preloader** — a terminal-style loading animation on first visit (once per session), respects `prefers-reduced-motion`.
- **Scroll progress indicator** — thin gradient bar fixed to the top of the viewport.
- **Back-to-top button** — appears after scrolling past the hero, routes through Lenis for a smooth scroll back up.
- **Real smooth scrolling** — all in-page anchor links (`nav`, hero's scroll cue) are intercepted and routed through Lenis, so section jumps are animated rather than instant.
- **SEO** — full Open Graph / Twitter card metadata, a JSON-LD `Person` schema, and generated `robots.txt` / `sitemap.xml` routes (`app/robots.ts`, `app/sitemap.ts`).
- **Project cards** — GitHub + live demo buttons, pointing to real repos and Vercel deployments.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before deploying

1. **Contact form:** `components/sections/Contact.tsx` currently just shows a success state on submit. Wire it to a real backend — a [Resend](https://resend.com) API route or [Formspree](https://formspree.io) both work well. Given your Node/Postgres background, a Next.js API route (`app/api/contact/route.ts`) calling Resend is a natural fit.
2. **Site URL:** `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` all reference a placeholder domain (`https://nishtha-agarwal.vercel.app`). Update the `siteUrl` constant / hardcoded URLs once you have your real deployed domain, so Open Graph, canonical, and sitemap URLs are correct.
3. **Remaining links:** `lib/data.ts` → `profile.social` has placeholder LeetCode/Codeforces/CodeChef URLs — swap in your real profile links.
4. **Resume file:** `public/resume-nishtha-agarwal.pdf` is your uploaded resume — replace it here whenever you update it.
5. **ProductBrowser:** included as a featured project with real GitHub/demo links, since it's a completed, reviewed piece of work. Remove it from `lib/data.ts` if it's under an NDA you'd rather not reference publicly.
6. **Favicon:** add `app/icon.png` and Next.js will pick it up automatically.

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo directly in the Vercel dashboard — zero config needed for Next.js.

## Performance notes

- The Three.js scene is lazy-loaded client-side only (`next/dynamic`, `ssr: false`) and is disabled automatically on small screens and when the user has `prefers-reduced-motion` on.
- Lenis smooth-scroll, the cursor glow, and the preloader all respect `prefers-reduced-motion`.
- All interactive elements have visible focus states for keyboard navigation.

## Project structure

```
app/
  layout.tsx           Root layout, SEO metadata, JSON-LD
  page.tsx             Assembles all sections
  robots.ts            Generated robots.txt
  sitemap.ts           Generated sitemap.xml
  globals.css          Design tokens, glass/gradient utility classes
components/
  Nav.tsx, Footer.tsx
  SmoothScroll.tsx      Lenis provider + global anchor-click smooth scroll
  CursorGlow.tsx        Ambient cursor glow (desktop only)
  Preloader.tsx         Terminal boot-sequence loading animation
  ScrollProgress.tsx    Top-of-page scroll progress bar
  BackToTop.tsx         Floating back-to-top button
  sections/             Hero, About, Experience, Projects, Skills, Log, Contact
  three/                NetworkGraph (R3F scene) + lazy-load wrapper
  ui/                   GlassCard, GradientButton, SectionHeading
lib/data.ts             All real content — edit this file to update copy
```
