export const profile = {
  name: "Nishtha Agarwal",
  role: "Frontend Developer",
  tagline: "React & JavaScript · 80+ merged open-source PRs · building accessible web apps",
  location: "Bengaluru, Karnataka, India",
  email: "nishthaagarwal937@gmail.com",
  phone: "+91 7284853923",
  summary:
    "Frontend developer and CSE student at Newton School of Technology, focused on building accessible, high-performance web applications and AI-powered tools. 80+ merged pull requests across GirlScript Summer of Code '26 repositories — from accessible UI components to critical bug fixes — alongside independent projects spanning healthcare, civic tech, and backend systems. Currently seeking frontend development internships where I can contribute to impactful products.",
  resumeFile: "/resume-nishtha-agarwal.pdf",
  languages: ["English", "Hindi", "Gujarati", "Marwari"],
  social: {
    github: "https://github.com/nishtha-agarwal-211",
    linkedin: "https://www.linkedin.com/in/nishtha-agarwal211/",
    leetcode: "https://leetcode.com/u/nishtha_agarwal_211/",
    codeforces: "https://codeforces.com/profile/nishtha.agarwal.211",
    codechef: "https://www.codechef.com/users/nishtha_211",
  },
};

export const stats = [
  { value: "80+", label: "PRs merged in open source" },
  { value: "9.24", label: "CGPA / 10.0" },
  { value: "2,500", label: "meals served weekly via NGO" },
  { value: "200+", label: "CP problems solved" },
];

export const education = [
  {
    degree: "B.Tech, Computer Science",
    school: "Newton School of Technology (S-Vyasa)",
    period: "2025 — 2029",
    detail: "CGPA 9.24 / 10.0",
  },
  {
    degree: "Intermediate (Class XII)",
    school: "B.R. International School, Valsad, Gujarat",
    period: "2024 — 2025",
    detail: "90.6%",
  },
  {
    degree: "High School (Class X)",
    school: "Shree Krishna International School, Vapi, Gujarat",
    period: "2022 — 2023",
    detail: "92.4%",
  },
];

export type ExperienceEntry = {
  org: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    org: "Shree Shyam Seva Samiti",
    role: "Co-Founder & Community Lead",
    period: "February 2023 — Present · 3.5 years",
    location: "Vapi, Gujarat",
    bullets: [
      "Run supply chain and logistics for a weekly community food drive, serving 2,000–2,500 underserved individuals every Wednesday.",
      "Designed educational outreach initiatives and coordinated sponsorship funding covering annual education costs for 30+ underserved children every year.",
      "Oversee community healthcare initiatives — organizing medical camps and sponsoring critical treatment for 50+ individuals every year.",
      "Organize monthly cleanliness and sanitation drives, mobilizing community volunteers and local resources.",
      "Collaborate with local leaders, donors, and student volunteers to allocate budget and scale outreach.",
    ],
  },
  {
    org: "GirlScript Summer of Code",
    role: "Open Source Contributor",
    period: "May 2026 — Present",
    bullets: [
      "Merged 80+ pull requests across real-world open source projects under GSSoC '26, collaborating with maintainers globally.",
      "Write clean, production-ready code across diverse tech stacks while actively participating in code reviews.",
      "Identify issues and propose solutions under the guidance of experienced project mentors.",
    ],
  },
  {
    org: "Elite Coders Winter of Code (ECWoC)",
    role: "Open Source Contributor",
    period: "December 2025 — February 2026",
    bullets: [
      "Contributed to open source projects as part of ECWoC 2025, among 5,000+ participants worldwide.",
      "Demonstrated dedication to the developer community through consistent, quality contributions.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  period: string;
  tagline: string;
  description: string;
  bullets: string[];
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  kind: "personal" | "internship";
};

export const projects: Project[] = [
  {
    slug: "product-browser",
    name: "ProductBrowser",
    period: "2026 · CodeVector Internship",
    tagline: "Backend for browsing 200,000 products at sub-50ms",
    description:
      "A take-home backend engineering assignment for a CodeVector internship: a catalog API built to stay fast and consistent under concurrent writes at scale.",
    bullets: [
      "Solved consistent pagination under concurrent inserts with keyset (cursor-based) pagination on a composite (created_at, id) cursor.",
      "Beat the 100ms target with sub-50ms response times across ~200K products, backed by four composite indexes.",
      "Verified correctness with integration tests proving zero duplicate or skipped records under concurrent writes.",
      "Shipped an optional React frontend on Vercel alongside the Node.js + PostgreSQL (Neon) API on Render.",
    ],
    stack: ["Node.js", "PostgreSQL", "Neon", "Render", "React", "Vercel"],
    github: "https://github.com/nishtha-agarwal-211/ProductBrowser",
    demo: "https://product-browser-beta.vercel.app",
    kind: "internship",
    featured: true,
  },
  {
    slug: "beyond-the-reality",
    name: "Beyond the Reality",
    period: "February 2026",
    tagline: "A trauma-driven psychological thriller game",
    description:
      "An immersive, narrative-first browser game exploring reality-switch mechanics and puzzle-based progression — won 3rd place and Best Ideation at Campfire Bengaluru.",
    bullets: [
      "Designed reality-switch mechanics and puzzle-based progression around a trauma-driven narrative.",
      "Built stylised 2D interfaces and responsive gameplay screens for narrative-driven exploration.",
      "Won 3rd place and Best Ideation at the Campfire Bengaluru Hackathon (Hack Club).",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/nishtha-agarwal-211/Beyond-The-Reality",
    demo: "https://beyond-the-reality.vercel.app",
    kind: "personal",
    featured: true,
  },
  {
    slug: "smartmedicines",
    name: "SmartMedicines",
    period: "February 2026",
    tagline: "An AI-powered healthcare companion",
    description:
      "A medication-management app that scans prescriptions, explains them, and catches dangerous drug interactions before they happen. Built for the Google Gemini Hackathon.",
    bullets: [
      "Built at the Google Gemini Hackathon: prescription scanning, conversational medicine guidance, and drug interaction detection with the Gemini API.",
      "Added medication reminders, browser notifications, and one-tap emergency card generation.",
      "Layered in voice-assisted interaction and an accessibility-focused, fully responsive UI.",
    ],
    stack: ["React 19", "Vite", "JavaScript", "Gemini API", "CSS"],
    github: "https://github.com/nishtha-agarwal-211/Smart-Medicines",
    demo: "https://smart-medicines.vercel.app",
    kind: "personal",
    featured: true,
  },
  {
    slug: "system-of-support",
    name: "System of Support (SOS)",
    period: "December 2025",
    tagline: "An offline-first PWA for emergency access",
    description:
      "A privacy-first progressive web app surfacing emergency, shelter, healthcare, and community resources across 7 Indian cities — designed to work with zero connectivity. Built at the DevForge Hackathon.",
    bullets: [
      "Built at DevForge Hackathon: offline-first architecture with service workers and localStorage, functioning with zero network connectivity.",
      "Covered emergency, shelter, healthcare, and community resources across 7 Indian cities.",
      "Added multilingual support, smart search filters, full keyboard navigation, and a dedicated emergency mode.",
    ],
    stack: ["React", "TypeScript", "Service Workers", "CSS"],
    github: "https://github.com/nishtha-agarwal-211/SOS_System-of-Support",
    demo: "https://sos-system-of-support.vercel.app",
    kind: "personal",
    featured: true,
  },
  {
    slug: "smartacres",
    name: "SmartAcres",
    period: "November 2025",
    tagline: "A responsive real estate platform",
    description:
      "A multi-page property listing platform with advanced filtering, an EMI calculator, and SEO built in from the ground up.",
    bullets: [
      "Built advanced property filtering, dynamic listings, interactive modals, and EMI calculator functionality.",
      "Architected a responsive multi-page site with ARIA accessibility support and SEO-focused metadata.",
      "Added lazy loading and image lightbox navigation with reusable JavaScript-based rendering.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/nishtha-agarwal-211/SmartAcres",
    demo: "https://smart-acres.vercel.app",
    kind: "personal",
  },
  {
    slug: "memoria",
    name: "Memoria",
    period: "May 2026",
    tagline: "Persistent, explainable memory for LLM agents",
    description:
      "An agent-native memory orchestration layer that turns conversation and execution history into structured, persistent state — so LLM agents remember without retraining. Built at Ascent Hackathon, hosted by Scalar School of Technology, Bengaluru.",
    bullets: [
      "Built at Ascent Hackathon (Scalar School of Technology, Bengaluru): hybrid search combining vector similarity and keyword matching over a Qdrant vector store.",
      "Designed multi-factor adaptive ranking and conflict resolution to keep memory consistent across sessions.",
      "Shipped a FastAPI backend with a React + TypeScript frontend, styled with Tailwind CSS.",
    ],
    stack: ["Python", "FastAPI", "Qdrant", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/nishtha-agarwal-211/memoria-ai-memory-intelligence",
    demo: "https://memoria-ai-memory-intelligence.vercel.app",
    kind: "personal",
  },
  {
    slug: "stepthrough",
    name: "StepThrough",
    period: "May 2026",
    tagline: "Navigate life's paperwork, one step at a time",
    description:
      "A civic-tech platform that helps people discover, understand, and complete real-world government schemes and opportunities they're eligible for.",
    bullets: [
      "Built an eligibility engine surfacing personalized government schemes with a live match score.",
      "Designed a journey/roadmap system breaking eligibility into trackable next actions, plus a document center and an AI assistant guide.",
      "Built with Next.js 16, Zustand for state management, and Recharts for progress visualization.",
    ],
    stack: ["Next.js 16", "TypeScript", "Zustand", "Framer Motion", "Recharts"],
    github: "https://github.com/nishtha-agarwal-211/StepThrough",
    demo: "https://step-through.vercel.app",
    kind: "personal",
  },
  {
    slug: "andaz",
    name: "Andaz — Learning Dashboard",
    period: "June 2026",
    tagline: "A futuristic, server-streamed student dashboard",
    description:
      "A high-fidelity student dashboard built on Next.js 16 Server Components, streaming course data in via granular Suspense boundaries for zero layout shift.",
    bullets: [
      "Architected server/client component boundaries so the hero and analytics render instantly while course data streams in separately.",
      "Built a bento-grid layout with mesh gradients, grain texture, and CSS `@property`-driven animated conic borders.",
      "Used Framer Motion spring physics for hardware-accelerated animation, with full `prefers-reduced-motion` support.",
    ],
    stack: ["Next.js 16", "Supabase", "Framer Motion", "Tailwind CSS v4", "TypeScript"],
    github: "https://github.com/nishtha-agarwal-211/Next-Gen-Learning-Dashboard",
    demo: "https://next-gen-learning-dashboard-navy.vercel.app",
    kind: "personal",
  },
];

export const skillGroups = [
  { label: "AI / ML", items: ["RAG", "Gemini API", "LangChain", "OpenAI"] },
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"] },
  { label: "Frameworks & Libraries", items: ["React", "Next.js", "Vite", "Bootstrap", "Tailwind CSS"] },
  { label: "Backend (in progress)", items: ["Node.js", "FastAPI", "PostgreSQL", "Docker"] },
  { label: "Cloud & DevOps", items: ["Git & GitHub", "Vercel", "Render", "Postman", "CLI"] },
  { label: "Domain & Craft", items: ["UI/UX", "Accessibility (ARIA)", "SEO", "PWA", "Data Structures & Algorithms"] },
  { label: "Leadership & Community", items: ["Project Management", "Supply Chain Management", "Community Outreach", "Volunteer Management"] },
  { label: "Speaks", items: profile.languages },
];

export type LogEntry = {
  tag: string;
  date: string;
  title: string;
  detail: string;
};

export const log: LogEntry[] = [
  {
    tag: "v2026.06",
    date: "June 2026",
    title: "Built Andaz",
    detail: "A server-streamed student learning dashboard built on Next.js 16 Server Components with zero layout shift.",
  },
  {
    tag: "v2026.05.3",
    date: "May 2026",
    title: "Built StepThrough",
    detail: "A civic-tech platform helping people navigate government schemes and real-world opportunities.",
  },
  {
    tag: "v2026.05.2",
    date: "May 2026",
    title: "Built Memoria",
    detail: "A persistent, explainable memory orchestration layer for LLM agents, with hybrid vector + keyword search — built at Ascent Hackathon, Scalar School of Technology, Bengaluru.",
  },
  {
    tag: "v2026.05.1",
    date: "May 2026",
    title: "Joined GirlScript Summer of Code",
    detail: "Started contributing to open source under GSSoC '26 — now past 80 merged pull requests.",
  },
  {
    tag: "v2026.04.2",
    date: "April 2026",
    title: "5th place — AAYAM CP Individuals",
    detail: "Placed 5th in a competitive-programming contest on algorithms and problem solving, hosted by Newton School of Technology.",
  },
  {
    tag: "v2026.04.1",
    date: "April 2026",
    title: "NextTuring: Blindfolded — Aayam",
    detail: "Competed in the Blindfolded coding challenge at Aayam Tech Fest, Newton School of Technology.",
  },
  {
    tag: "v2026.03.2",
    date: "March 2026",
    title: "Turing Cup 2K26 — National CP Contest",
    detail: "Participated in the Turing Cup 2K26 national-level coding contest hosted by VNR Vignana Jyothi Institute of Engineering & Technology.",
  },
  {
    tag: "v2026.03.1",
    date: "March 2026",
    title: "NextTuring CP Individuals — Online Qualifiers",
    detail: "Qualified through online rounds of the NextTuring CP Individuals contest, organized by Newton School of Technology.",
  },
  {
    tag: "v2026.03",
    date: "March 2026",
    title: "Built ProductBrowser",
    detail: "A high-performance catalog API for a CodeVector internship — sub-50ms responses across 200K products with cursor-based pagination.",
  },
  {
    tag: "v2026.02.2",
    date: "February 2026",
    title: "Built Beyond the Reality",
    detail: "3rd place & Best Ideation at Campfire Bengaluru Hackathon (Hack Club) for an immersive psychological thriller game.",
  },
  {
    tag: "v2026.02.1",
    date: "February 2026",
    title: "Built SmartMedicines",
    detail: "An AI healthcare companion with prescription scanning and drug-interaction detection, built on the Gemini API at the Google Gemini Hackathon.",
  },
  {
    tag: "v2025.12",
    date: "December 2025",
    title: "Built System of Support",
    detail: "An offline-first PWA covering emergency resources across 7 Indian cities — built at the DevForge Hackathon.",
  },
  {
    tag: "v2025.11",
    date: "November 2025",
    title: "Built SmartAcres",
    detail: "A responsive real estate platform with EMI calculator and SEO-first architecture.",
  },
  {
    tag: "v2025.12.2",
    date: "December 2025",
    title: "Joined ECWoC 2025",
    detail: "Started contributing to open source under Elite Coders Winter of Code, among 5,000+ participants globally.",
  },
  {
    tag: "v2025.10",
    date: "October 2025",
    title: "AlgoStrike — Yugantar '25",
    detail: "Competed in the AlgoStrike CP team contest at Yugantar '25, organized by Scalar School of Technology, Bengaluru.",
  },
  {
    tag: "v2025.09",
    date: "September 2025",
    title: "Smart India Hackathon 2025",
    detail: "Participated at national level, focused on innovation and real-world problem solving.",
  },
  {
    tag: "v2025.08",
    date: "August 2025",
    title: "Participated in ICPC 2025",
    detail: "Competed in the International Collegiate Programming Contest — sharpening algorithmic thinking and team-based problem solving.",
  },
  {
    tag: "v2025.06",
    date: "2025",
    title: "Started B.Tech in Computer Science",
    detail: "Newton School of Technology (S-Vyasa) — currently at 9.24 CGPA.",
  },
  {
    tag: "v2023.02",
    date: "February 2023",
    title: "Co-founded Shree Shyam Seva Samiti",
    detail: "Started a community welfare NGO in Vapi, Gujarat — now coordinating 2,000+ meals weekly and sponsoring education for 30 children.",
  },
];

export const extras = [
  "Participant, ICPC 2025",
  "Volunteered in SheBuilds and BugBash hackathons at Aayam Tech Fest — participant support, coordination, event execution",
  "9+ social service and donation drives as a Social Committee Member, with Robin Hood Army",
];
