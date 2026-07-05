<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:6E5BFF,50:A855F7,100:2CE6C6&height=220&section=header&text=Nishtha%20Agarwal&fontSize=48&fontColor=F3F2F8&fontAlignY=36&desc=Frontend%20Developer%20%E2%80%A2%20Open%20Source%20Contributor%20%E2%80%A2%20Community%20Builder&descSize=16&descAlignY=56&animation=fadeIn" width="100%"/>
</p>

<p align="center">
  <a href="https://nishtha-agarwal.vercel.app"><img src="https://img.shields.io/badge/🌐_Live_Portfolio-6E5BFF?style=for-the-badge&logoColor=white" alt="Live Portfolio"/></a>
  <a href="https://github.com/nishtha-agarwal-211"><img src="https://img.shields.io/badge/GitHub-0F0F18?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></a>
  <a href="https://www.linkedin.com/in/nishtha-agarwal211/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="mailto:nishthaagarwal937@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white" alt="Three.js"/>
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
</p>

---

## ✦ Overview

A dark, glassmorphic developer portfolio — not a template, but a ground-up build with a live **3D network graph**, **terminal boot sequence**, and **changelog-style timeline**. Every design choice maps to something real: the graph echoes competitive programming, the mono type echoes the CLI, and the log section reads like `git log`.

<br/>

<table>
<tr>
<td width="50%">

### 🎨 Design DNA

| Element | Detail |
|---|---|
| **Background** | Void `#07070C` |
| **Primary accent** | Signal `#6E5BFF` (indigo) |
| **Secondary accent** | Pulse `#2CE6C6` (teal) |
| **Display font** | Space Grotesk |
| **Body font** | Inter |
| **Mono font** | JetBrains Mono |
| **Aesthetic** | Glassmorphism + noise grain |

</td>
<td width="50%">

### ⚡ Key Numbers

| Stat | Value |
|---|---|
| **Open Source PRs** | 80+ merged |
| **CGPA** | 9.24 / 10.0 |
| **Meals served weekly** | 2,500+ via NGO |
| **Hackathon podiums** | 3 |
| **Projects shipped** | 8 |
| **Cities covered (SOS)** | 7 |

</td>
</tr>
</table>

---

## ✦ What Makes This Different

<table>
<tr>
<td width="60">🌐</td>
<td><strong>Live Network Graph</strong> — The hero background is a real-time Three.js particle system where nodes drift and connect like a graph algorithm. Not a generic blob — a direct nod to competitive programming and backend systems thinking.</td>
</tr>
<tr>
<td>⌨️</td>
<td><strong>Terminal Boot Sequence</strong> — A CLI-style preloader animates on first visit (once per session). <code>prefers-reduced-motion</code> respected.</td>
</tr>
<tr>
<td>📜</td>
<td><strong>Git Changelog Timeline</strong> — The "Log" section uses semantic versioning tags (<code>v2026.06</code>, <code>v2023.02</code>) instead of a generic timeline, running from the NGO founding to the latest project.</td>
</tr>
<tr>
<td>🖱️</td>
<td><strong>Ambient Cursor Glow</strong> — A soft radial glow follows the cursor on desktop, reinforcing the dark atmospheric aesthetic.</td>
</tr>
<tr>
<td>🎯</td>
<td><strong>Honest Skills Display</strong> — Grouped chips, not fake percentage bars. No proficiency numbers were invented.</td>
</tr>
<tr>
<td>♿</td>
<td><strong>Accessibility-First</strong> — Full keyboard navigation, visible focus states, and <code>prefers-reduced-motion</code> support across all animations.</td>
</tr>
</table>

---

## ✦ Architecture

```
nishtha-portfolio/
│
├── app/
│   ├── layout.tsx              # Root layout · SEO metadata · JSON-LD Person schema
│   ├── page.tsx                # Assembles all sections
│   ├── globals.css             # Design tokens · glass/gradient utilities
│   ├── robots.ts               # Generated robots.txt
│   └── sitemap.ts              # Generated sitemap.xml
│
├── components/
│   ├── Nav.tsx                 # Numbered navigation with mono accents
│   ├── Footer.tsx              # Minimal footer
│   ├── SmoothScroll.tsx        # Lenis provider + anchor-click interception
│   ├── CursorGlow.tsx          # Ambient radial cursor glow (desktop)
│   ├── Preloader.tsx           # Terminal boot-sequence animation
│   ├── ScrollProgress.tsx      # Gradient scroll progress bar
│   ├── BackToTop.tsx           # Floating back-to-top (appears after hero)
│   ├── Terminal.tsx            # Interactive terminal component
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # whoami headline + network graph
│   │   ├── About.tsx           # Bio + stats
│   │   ├── Experience.tsx      # NGO + GSSoC + ECWoC
│   │   ├── Projects.tsx        # Featured project cards
│   │   ├── Skills.tsx          # Grouped skill chips
│   │   ├── Log.tsx             # Git-changelog timeline
│   │   └── Contact.tsx         # Contact form
│   │
│   ├── three/
│   │   ├── NetworkGraph.tsx    # R3F particle network simulation
│   │   ├── HeroScene.tsx       # Scene wrapper
│   │   └── ScrollField.tsx     # Scroll-reactive 3D field
│   │
│   └── ui/
│       ├── GlassCard.tsx       # Frosted glass container
│       ├── GradientButton.tsx  # Signal-gradient CTA button
│       └── SectionHeading.tsx  # Numbered section headers
│
├── lib/
│   └── data.ts                 # All portfolio content — single source of truth
│
└── public/
    └── resume-nishtha-agarwal.pdf
```

---

## ✦ Tech Stack

<table>
<tr>
<th>Layer</th>
<th>Technology</th>
<th>Purpose</th>
</tr>
<tr>
<td><strong>Framework</strong></td>
<td>Next.js 14 (App Router)</td>
<td>SSR, routing, metadata API</td>
</tr>
<tr>
<td><strong>UI</strong></td>
<td>React 18 + TypeScript</td>
<td>Component architecture</td>
</tr>
<tr>
<td><strong>3D</strong></td>
<td>Three.js via React Three Fiber + Drei</td>
<td>Live network graph, scroll-reactive field</td>
</tr>
<tr>
<td><strong>Animation</strong></td>
<td>Framer Motion</td>
<td>Scroll-triggered reveals, micro-interactions</td>
</tr>
<tr>
<td><strong>Smooth Scroll</strong></td>
<td>Lenis</td>
<td>Buttery anchor navigation</td>
</tr>
<tr>
<td><strong>Styling</strong></td>
<td>Tailwind CSS 3.4</td>
<td>Utility-first with custom design tokens</td>
</tr>
<tr>
<td><strong>Icons</strong></td>
<td>Lucide React</td>
<td>Consistent icon system</td>
</tr>
<tr>
<td><strong>SEO</strong></td>
<td>Next.js Metadata API</td>
<td>OG tags, Twitter cards, JSON-LD, sitemap</td>
</tr>
</table>

---

## ✦ Getting Started

> **Prerequisites:** Node.js 18+ and npm

```bash
# 1 · Clone the repository
git clone https://github.com/nishtha-agarwal-211/Portfolio.git
cd Portfolio

# 2 · Install dependencies
npm install

# 3 · Start the dev server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — the site loads with a terminal boot sequence, then reveals the full portfolio.

---

## ✦ Deployment

### Vercel (Recommended)

The fastest path — zero config for Next.js:

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo directly from the [Vercel Dashboard](https://vercel.com/dashboard).

### Pre-Deploy Checklist

| # | Task | File(s) |
|---|------|---------|
| 1 | **Wire the contact form** to a real backend (Resend API route or Formspree) | `components/sections/Contact.tsx` |
| 2 | **Update the site URL** once you have your real domain | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` |
| 3 | **Add real profile links** for LeetCode / Codeforces / CodeChef | `lib/data.ts` → `profile.social` |
| 4 | **Replace the resume** whenever it's updated | `public/resume-nishtha-agarwal.pdf` |
| 5 | **Add a favicon** — drop `icon.png` and Next.js auto-detects it | `app/icon.png` |

---

## ✦ Performance & Accessibility

```
┌─────────────────────────────────────────────────────────────────┐
│  🟢  Three.js scene is lazy-loaded (next/dynamic, ssr: false)  │
│  🟢  Disabled on small screens & prefers-reduced-motion        │
│  🟢  Lenis, cursor glow, preloader respect reduced motion      │
│  🟢  All interactive elements have visible focus states         │
│  🟢  Full keyboard navigation support                          │
│  🟢  Semantic HTML + ARIA attributes throughout                 │
│  🟢  JSON-LD structured data for search engines                │
│  🟢  Generated robots.txt and sitemap.xml                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## ✦ Featured Projects

<table>
<tr>
<td align="center" width="33%">
<h4>🧪 ProductBrowser</h4>
<p><em>Sub-50ms catalog API across 200K products</em></p>
<p>
<a href="https://github.com/nishtha-agarwal-211/ProductBrowser">GitHub</a> · 
<a href="https://product-browser-beta.vercel.app">Demo</a>
</p>
</td>
<td align="center" width="33%">
<h4>🎮 Beyond the Reality</h4>
<p><em>3rd place + Best Ideation at Campfire Bengaluru</em></p>
<p>
<a href="https://github.com/nishtha-agarwal-211/Beyond-The-Reality">GitHub</a> · 
<a href="https://beyond-the-reality.vercel.app">Demo</a>
</p>
</td>
<td align="center" width="33%">
<h4>💊 SmartMedicines</h4>
<p><em>AI healthcare companion with Gemini API</em></p>
<p>
<a href="https://github.com/nishtha-agarwal-211/Smart-Medicines">GitHub</a> · 
<a href="https://smart-medicines.vercel.app">Demo</a>
</p>
</td>
</tr>
<tr>
<td align="center" width="33%">
<h4>🆘 System of Support</h4>
<p><em>Offline-first PWA across 7 Indian cities</em></p>
<p>
<a href="https://github.com/nishtha-agarwal-211/SOS_System-of-Support">GitHub</a> · 
<a href="https://sos-system-of-support.vercel.app">Demo</a>
</p>
</td>
<td align="center" width="33%">
<h4>🧠 Memoria</h4>
<p><em>Persistent memory layer for LLM agents</em></p>
<p>
<a href="https://github.com/nishtha-agarwal-211/memoria-ai-memory-intelligence">GitHub</a> · 
<a href="https://memoria-ai-memory-intelligence.vercel.app">Demo</a>
</p>
</td>
<td align="center" width="33%">
<h4>🏛️ StepThrough</h4>
<p><em>Navigate government schemes, step by step</em></p>
<p>
<a href="https://github.com/nishtha-agarwal-211/StepThrough">GitHub</a> · 
<a href="https://step-through.vercel.app">Demo</a>
</p>
</td>
</tr>
</table>

---

## ✦ Content Management

All portfolio content lives in a single file: **`lib/data.ts`**

To update the portfolio, edit this file:

| Export | What it controls |
|--------|-----------------|
| `profile` | Name, role, tagline, contact info, social links |
| `stats` | Hero stat counters |
| `education` | Education timeline |
| `experience` | Work & open-source experience |
| `projects` | Project cards (set `featured: true` to highlight) |
| `skillGroups` | Grouped skill chips |
| `log` | Git-changelog timeline entries |
| `extras` | Additional achievements |

---

## ✦ License

Built with ☕ by **[Nishtha Agarwal](https://github.com/nishtha-agarwal-211)**.

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:6E5BFF,50:A855F7,100:2CE6C6&height=120&section=footer" width="100%"/>
</p>
