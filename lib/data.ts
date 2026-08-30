export const profile = {
  name: "Nishtha Agarwal",
  role: "Frontend Developer",
  tagline: "React, Next.js & TypeScript · Top 1% (Rank #35) in GSSoC '26 · Codeforces Pupil · Algo Queen '26 Top 500 · B.Tech CSE @ Newton School of Technology",
  location: "Bengaluru, Karnataka, India",
  email: "nishthaagarwal937@gmail.com",
  phone: "+91 7284853923",
  summary:
    "Frontend developer and CSE student at Newton School of Technology (CGPA: 9.47), focused on building accessible, high-performance web applications, AI-powered tools, and offline-first systems. Ranked #35 globally out of 43,587 participants (Top 1% S-Tier) in GirlScript Summer of Code '26 with 144+ merged pull requests across open-source repositories. Active competitive programmer — Codeforces Pupil (1271 rating), 494th Global Rank in Algo Queen 2026 (The ICPC Girls' Programming Cup), 100-Day LeetCode Badge (32 Hard solved), and ICPC Online Prelims '25 participant. Co-Founder of Shree Shyam Seva Samiti. Currently seeking frontend and full-stack software engineering internships.",
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
  { value: "Top 1%", label: "Rank #35 / 43,587 in GSSoC '26" },
  { value: "144+", label: "PRs merged in open source" },
  { value: "Top 500", label: "Global rank (494th) Algo Queen '26" },
  { value: "Pupil", label: "Codeforces rating (1271 max)" },
  { value: "9.47", label: "CGPA / 10.0 @ Newton School" },
  { value: "2,500", label: "meals served weekly via NGO" },
];

export const education = [
  {
    degree: "B.Tech, Computer Science",
    school: "Newton School of Technology x S-Vyasa University",
    period: "2025 — 2029",
    detail: "CGPA 9.47 / 10.0",
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
    org: "NGO: Shree Shyam Seva Samiti",
    role: "Co-Founder & Operations Lead",
    period: "February 2023 — Present",
    location: "Vapi, Gujarat, India",
    bullets: [
      "Co-founded a grassroots NGO focused on food security, education, and healthcare for underserved communities in Vapi, Gujarat.",
      "Run supply chain and logistics for a weekly community food drive, serving 2,000–2,500 underserved individuals every Wednesday.",
      "Designed educational outreach initiatives and coordinated sponsorship funding covering annual education costs for 30+ children every year.",
      "Oversee community healthcare initiatives — organizing medical camps and sponsoring critical treatment for 50+ individuals annually.",
      "Manage project logistics, volunteer teams, donor relationships, and community outreach campaigns.",
    ],
  },
  {
    org: "Elite Coders",
    role: "Open Source Contributor",
    period: "July 2026 — Present",
    location: "Remote",
    bullets: [
      "Contribute to real-world open-source projects under ECSoC '26, collaborating with project maintainers and global developer communities on GitHub.",
      "Develop accessible UI components, fix state management bugs, and optimize frontend web applications.",
    ],
  },
  {
    org: "GirlScript Summer of Code",
    role: "Open Source Contributor (S-Tier | Top 1%)",
    period: "May 2026 — Present",
    location: "Remote",
    bullets: [
      "Secured Global Rank #35 out of 43,587 participants (Top 1% S-Tier) with 35,254 leaderboard points, a 13-week consecutive active streak, and 21 badges earned.",
      "Merged 124+ pull requests across 9 open-source projects including BlockForge-AI, Checkora, commitpulse, and CampusConnect.",
      "Engineered touch screen event handling, dynamic canvas scaling, keyboard shortcuts modal, 10-level undo history, and ARIA accessibility.",
      "Collaborated actively with maintainers (Anuj Kulkarni, Dhairya Gothi) and received guidance from mentor Shubham Sagar on production-grade code reviews.",
    ],
  },
  {
    org: "Elite Coders Winter of Code (ECWoC)",
    role: "Open Source Contributor",
    period: "December 2025 — February 2026",
    bullets: [
      "Contributed to open source projects as part of ECWoC 2025, among 5,000+ participants worldwide.",
      "Demonstrated dedication to the developer community through consistent, quality code contributions and documentation improvements.",
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
    slug: "globetrotter",
    name: "GlobeTrotter",
    period: "August 2026",
    tagline: "Intelligent multi-city travel planning platform with live budget forecasting",
    description:
      "An intelligent, multi-city travel planning web platform built for the Odoo x LDCE Ahmedabad Hackathon 2026. Features 13 interactive views, multi-stop itinerary builder, live expense analytics with Chart.js, public link sharing, and trip duplication.",
    bullets: [
      "Built a zero-latency Single Page Application (SPA) architecture across 13 modular views with dark glassmorphism styling and custom CSS custom properties.",
      "Engineered multi-city chronological stop management with 33+ seeded world cities and 51+ curated activity recommendations.",
      "Integrated real-time Chart.js doughnut and bar charts for budget vs. actual cost tracking across 4 spending categories.",
      "Implemented 1-click public itinerary sharing and trip cloning without authentication overhead.",
    ],
    stack: ["JavaScript", "Vite", "Chart.js", "Vanilla CSS", "localStorage"],
    github: "https://github.com/nishtha-agarwal-211/GlobeTrotter",
    demo: "https://globe-trotter-tau.vercel.app",
    kind: "personal",
    featured: true,
  },
  {
    slug: "ngo-manager",
    name: "NGO Manager",
    period: "August 2026",
    tagline: "All-in-one operating system & media archive for non-profit organizations",
    description:
      "A cross-platform mobile and web operating system built with Flutter and Supabase for Shree Shyam Seva Samiti. Manages weekly food drives (2,500 meals/week), donor ledgers, offline SQLite event caching, automated WhatsApp outreach, and media archives at $0 monthly infrastructure cost.",
    bullets: [
      "Architected cross-platform Flutter application with Material Design 3 and Riverpod state management for end-to-end NGO operations.",
      "Integrated Supabase PostgreSQL cloud backend with single-trip RPC query optimization (`get_dashboard_stats`) and Drift SQLite offline synchronization.",
      "Built client-side media compression pipeline supporting photo galleries and press coverage video archives.",
      "Implemented automated WhatsApp and SMS communication utility for donor receipts, birthday wishes, and anniversary greetings.",
    ],
    stack: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Drift (SQLite)", "Riverpod"],
    github: "https://github.com/nishtha-agarwal-211/NGO",
    kind: "personal",
    featured: true,
  },
  {
    slug: "spendwise",
    name: "SpendWise",
    period: "July 2026",
    tagline: "Client-side personal finance tracker with Chart.js analytics & smart insights",
    description:
      "A feature-packed client-side personal finance app built with vanilla HTML, CSS, and JavaScript featuring 12 transaction categories, monthly budget caps, spending limits, Chart.js analytics, and 1-click CSV export.",
    bullets: [
      "Built client-side transaction logging with inline editing, 5-second undo toast, and real-time category & keyword search.",
      "Integrated Chart.js for doughnut expense distribution and line chart spending trends alongside auto-calculated smart insights.",
      "Implemented monthly budget caps, category spending limits, recurring transaction auto-posting, and localStorage data persistence.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Chart.js", "localStorage"],
    github: "https://github.com/nishtha-agarwal-211/SpendWise",
    demo: "https://spend-wise-lyart-seven.vercel.app",
    kind: "personal",
    featured: true,
  },
  {
    slug: "andaz",
    name: "EduPulse — Learning Dashboard",
    period: "June 2026",
    tagline: "A futuristic, server-streamed student dashboard",
    description:
      "A high-fidelity student dashboard built on Next.js 16 Server Components and React 19, streaming course data in via granular Suspense boundaries for zero layout shift.",
    bullets: [
      "Architected server/client component boundaries so the hero and analytics render instantly while course data streams in separately.",
      "Built a bento-grid layout with mesh gradients, grain texture, and CSS `@property`-driven animated conic borders.",
      "Used Framer Motion spring physics for hardware-accelerated animation, with full `prefers-reduced-motion` support.",
    ],
    stack: ["Next.js 16", "React 19", "Supabase", "Framer Motion", "Tailwind CSS v4", "TypeScript"],
    github: "https://github.com/nishtha-agarwal-211/Next-Gen-Learning-Dashboard",
    demo: "https://next-gen-learning-dashboard-navy.vercel.app",
    kind: "personal",
    featured: true,
  },
  {
    slug: "product-browser",
    name: "ProductBrowser",
    period: "March 2026",
    tagline: "Backend for browsing 200,000 products at sub-50ms",
    description:
      "A high-performance catalog API built to stay fast and consistent under concurrent writes at scale, handling 200,000+ products with cursor-based (keyset) pagination.",
    bullets: [
      "Solved consistent pagination under concurrent inserts with keyset (cursor-based) pagination on a composite (created_at, id) cursor.",
      "Beat the 100ms target with sub-50ms response times across ~200K products, backed by four composite indexes.",
      "Verified correctness with integration tests proving zero duplicate or skipped records under concurrent writes.",
      "Shipped an optional React frontend on Vercel alongside the Node.js + PostgreSQL (Neon) API on Render.",
    ],
    stack: ["Node.js", "PostgreSQL", "Neon", "Render", "React", "Vercel"],
    github: "https://github.com/nishtha-agarwal-211/ProductBrowser",
    demo: "https://product-browser-beta.vercel.app",
    kind: "personal",
    featured: true,
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
    slug: "ctrl-alt-elite-pcam",
    name: "PCAM Precision Agent",
    period: "May 2026",
    tagline: "Soft-consensus residual filtering for PCAM dynamics",
    description:
      "An inference-time precision agent using soft-consensus residual filtering and rank-based scaling to detect corrupted query dimensions under PCAM noise and steer model convergence.",
    bullets: [
      "Engineered a 3-step inference algorithm: soft-consensus expected pattern matching, rank-based residual scoring, and affine precision mapping.",
      "Achieved +0.146 mean accuracy boost on 5-seed benchmark evaluations (+0.101 on 7-seed evaluation) without model retraining.",
      "Designed distribution-free rank scoring invariant to scale and Gaussian noise corruptions.",
    ],
    stack: ["Python", "NumPy"],
    github: "https://github.com/nishtha-agarwal-211/ctrl-alt-elite-pcam",
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
    slug: "spotify-clone",
    name: "Spotify Web Player",
    period: "April 2026",
    tagline: "Pixel-perfect, interactive Spotify web player clone",
    description:
      "A responsive, dark-themed clone of the Spotify web player featuring custom audio playback controls, seeking, volume adjustment, keyboard shortcuts, glassmorphism cards, and live search filtering.",
    bullets: [
      "Built custom audio player controls with real-time seeking, volume slider, shuffle/repeat toggles, and keyboard shortcut navigation.",
      "Crafted a dark-themed glassmorphism interface with dynamic greetings based on local time and micro-animations.",
      "Added live search filtering across playlist cards and dynamic track loading.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Web Audio"],
    github: "https://github.com/nishtha-agarwal-211/Spotify-Clone",
    demo: "https://spotify-clone-liart-sigma.vercel.app",
    kind: "personal",
  },
  {
    slug: "smart-tip-calculator",
    name: "Smart Tip Calculator",
    period: "March 2026",
    tagline: "Tip calculator & bill splitter with glassmorphism UI",
    description:
      "A responsive tip calculator featuring instant percentage quick-select presets, custom tip ratios, bill splitting, per-person share calculations, and glassmorphism styling.",
    bullets: [
      "Built quick-select tip presets (5%, 10%, 15%, 20%) and custom tip percentage inputs with real-time calculations.",
      "Added multi-person bill splitting with live per-person share calculations.",
      "Styled with modern CSS glassmorphism, backdrop filters, and responsive mobile-first layouts.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/nishtha-agarwal-211/smart-tip-calculator",
    demo: "https://smart-tip-calculator-six.vercel.app",
    kind: "personal",
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
    slug: "student-admission-portal",
    name: "Student Admission Portal",
    period: "2025",
    tagline: "Newton School of Technology admission form mockup",
    description:
      "A clean, structured static admission form simulating the student portal for Newton School of Technology, with multi-section inputs and form styling.",
    bullets: [
      "Built semantic form fields covering student details, course dropdowns, gender radios, and file uploads.",
      "Styled with clean CSS card layouts, hover transitions, and responsive input boundaries.",
    ],
    stack: ["HTML5", "CSS3"],
    github: "https://github.com/nishtha-agarwal-211/Student-Admission-Portal",
    demo: "https://student-admission-portal-sandy.vercel.app",
    kind: "personal",
  },
];

export const skillGroups = [
  { label: "Frontend", items: ["React 19", "Next.js 16", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS v4", "HTML5 & CSS3", "Framer Motion"] },
  { label: "AI & ML", items: ["Gemini API", "RAG Pipelines", "Qdrant Vector DB", "LangChain", "OpenAI"] },
  { label: "Mobile & Cross-Platform", items: ["Flutter", "Dart", "Riverpod", "Material Design 3", "Drift (SQLite)"] },
  { label: "Backend & Systems", items: ["Node.js", "FastAPI", "PostgreSQL", "Supabase", "REST APIs", "Docker"] },
  { label: "Cloud & DevOps", items: ["Git & GitHub", "Vercel", "Render", "Postman", "CLI Shell"] },
  { label: "Domain & Engineering", items: ["UI/UX Architecture", "Accessibility (ARIA)", "Offline-First PWAs", "Keyset Pagination", "Data Structures & Algorithms"] },
  { label: "Leadership & Impact", items: ["Operations Leadership", "Supply Chain Logistics", "Community Outreach", "Volunteer Management"] },
  { label: "Languages", items: profile.languages },
];

export type LogEntry = {
  tag: string;
  date: string;
  title: string;
  detail: string;
};

export const log: LogEntry[] = [
  {
    tag: "v2026.08.4",
    date: "August 2026",
    title: "Ranked 494th Globally in Algo Queen 2026",
    detail: "Secured Top 500 spot (494th) in Round 1 of Algo Queen 2026: The ICPC Girls' Programming Cup out of thousands of global participants.",
  },
  {
    tag: "v2026.08.3",
    date: "August 2026",
    title: "Achieved Pupil on Codeforces",
    detail: "Crossed into the green tier on Codeforces reaching a 1271 rating following Educational Codeforces Round (Div. 2).",
  },
  {
    tag: "v2026.08.2",
    date: "August 2026",
    title: "Shipped NGO Manager",
    detail: "Built a cross-platform operations OS with Flutter, Supabase, and Drift SQLite for Shree Shyam Seva Samiti to manage weekly food drives and donor ledgers.",
  },
  {
    tag: "v2026.08.1",
    date: "August 2026",
    title: "Built GlobeTrotter — Odoo x LDCE Hackathon",
    detail: "Developed an intelligent multi-city travel planning platform featuring 13 interactive views, dynamic Chart.js budget breakdowns, and 1-click public itinerary sharing.",
  },
  {
    tag: "v2026.07.2",
    date: "July 2026",
    title: "GSSoC '26 S-Tier Finish (Global Rank #35)",
    detail: "Ranked #35 globally out of 43,587 participants (Top 1% S-Tier) in GirlScript Summer of Code with 124 PRs merged across 9 repos and 35,254 points.",
  },
  {
    tag: "v2026.07.1",
    date: "July 2026",
    title: "Unlocked 100-Day Badge on LeetCode",
    detail: "160+ problems solved, 110 active days, 32 Hard problems cracked, and a max 48-day streak on LeetCode.",
  },
  {
    tag: "v2026.06.2",
    date: "June 2026",
    title: "Industry Connect Day @ Procore Technologies",
    detail: "Participated in Industry Connect Day at Procore Technologies, Bangalore — exploring large-scale systems engineering and product architecture.",
  },
  {
    tag: "v2026.06.1",
    date: "June 2026",
    title: "Built EduPulse",
    detail: "A server-streamed student learning dashboard built on Next.js 16 Server Components with zero layout shift.",
  },
  {
    tag: "v2026.05.4",
    date: "May 2026",
    title: "Built PCAM Precision Agent",
    detail: "Soft-consensus residual filtering and rank-based scaling algorithm boosting PCAM dynamics accuracy by +14.6%.",
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
    detail: "Started contributing to open source under GSSoC '26 — reached 144+ merged pull requests across global projects.",
  },
  {
    tag: "v2026.04.3",
    date: "April 2026",
    title: "Built Spotify Web Player Clone",
    detail: "A pixel-perfect, dark-themed clone of Spotify Web Player featuring custom audio controls, seeking, volume slider, and keyboard shortcuts.",
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
    tag: "v2026.03.3",
    date: "March 2026",
    title: "Built Smart Tip Calculator",
    detail: "A glassmorphism tip calculator & bill splitter with quick-select tip presets and per-person breakdown.",
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
    detail: "A high-performance catalog API handling sub-50ms responses across 200K products with cursor-based pagination.",
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
    detail: "Newton School of Technology (S-Vyasa) — currently at 9.47 CGPA.",
  },
  {
    tag: "v2023.02",
    date: "February 2023",
    title: "Co-founded Shree Shyam Seva Samiti",
    detail: "Started a community welfare NGO in Vapi, Gujarat — now coordinating 2,000+ meals weekly and sponsoring education for 30 children.",
  },
];

export const extras = [
  "Participant, ICPC 2025 Online Prelims",
  "Odoo x LDCE Ahmedabad Hackathon 2026 Participant (GlobeTrotter)",
  "Volunteered in SheBuilds and BugBash hackathons at Aayam Tech Fest — participant support, coordination, event execution",
  "9+ social service and donation drives as a Social Committee Member, with Robin Hood Army",
];

export const faqs = [
  {
    q: "What is your main area of focus and expertise?",
    a: "I specialize in Frontend Development (React, Next.js, TypeScript, Tailwind CSS) with strong cross-platform & backend fundamentals (Flutter, Node.js, PostgreSQL, Supabase, FastAPI) and AI API integration (Gemini, LangChain). I have 144+ merged open-source PRs across GSSoC '26 and competitive hackathon awards.",
  },
  {
    q: "Are you currently available for frontend/full-stack internships?",
    a: "Yes! I am actively looking for Frontend and Full-Stack Software Engineering internships where I can contribute to production-grade applications, accessible UI design systems, or AI-powered tools.",
  },
  {
    q: "What open-source contributions have you completed?",
    a: "I have merged 144+ pull requests across projects like BlockForge-AI, Checkora, commitpulse, CampusConnect, and more under GirlScript Summer of Code (GSSoC '26) and Elite Coders (ECSoC/ECWoC). Contributions span accessible UI components, touch gestures, canvas scaling, state management fixes, performance optimizations, and documentation.",
  },
  {
    q: "How do you handle high-load backend performance?",
    a: "In my ProductBrowser project, I architected a catalog API handling ~200,000 products with sub-50ms query response times. I used composite indexes in PostgreSQL and keyset (cursor-based) pagination to guarantee zero duplicated/skipped items under concurrent writes.",
  },
  {
    q: "What community leadership experience do you have?",
    a: "I am the Co-Founder & Operations Lead at Shree Shyam Seva Samiti (operating since Feb 2023). I run logistics for weekly food drives serving 2,000–2,500 meals every Wednesday, sponsor education for 30+ children annually, organize healthcare camps, and developed the custom NGO Manager platform.",
  },
];

export type ProjectCaseStudy = {
  slug: string;
  architecture: string;
  challenges: string[];
  metrics: { label: string; value: string }[];
  chronicles: string;
};

export const caseStudies: Record<string, ProjectCaseStudy> = {
  globetrotter: {
    slug: "globetrotter",
    architecture: "Vanilla ES6+ JavaScript + Vite + Chart.js + CSS Glassmorphism + Reactive LocalStore",
    metrics: [
      { label: "Views", value: "13 Unique Screens" },
      { label: "Cities", value: "33+ World Cities" },
      { label: "Analytics", value: "Real-Time Chart.js" },
    ],
    challenges: [
      "Architecting a zero-latency Single Page Application across 13 modular views without frontend framework overhead",
      "Building reactive budget forecasting with category breakdowns and live over-budget alerts",
      "Implementing 1-click shareable public URLs and itinerary cloning mechanisms",
    ],
    chronicles: "Built for the Odoo x LDCE Ahmedabad Hackathon 2026. Features multi-stop journey planning, chronological stop managers, activity recommendation libraries, and financial intelligence visualizers.",
  },
  "ngo-manager": {
    slug: "ngo-manager",
    architecture: "Flutter 3.x + Dart 3.x + Supabase PostgreSQL + Drift SQLite + Riverpod",
    metrics: [
      { label: "Cost", value: "$0 Monthly Overhead" },
      { label: "Impact", value: "2,500 Meals / Wk" },
      { label: "Sync", value: "Offline SQLite Cache" },
    ],
    challenges: [
      "Optimizing query roundtrips with a custom single Postgres RPC function (`get_dashboard_stats`)",
      "Ensuring offline-first resilience for in-field event tracking using Drift SQLite and background work queues",
      "Building client-side media compression to keep storage within free tier limits",
    ],
    chronicles: "Engineered as an all-in-one operating system for Shree Shyam Seva Samiti to manage volunteer directories, donor ledgers, weekly food distribution drives, and automated WhatsApp outreach.",
  },
  spendwise: {
    slug: "spendwise",
    architecture: "Vanilla JavaScript (ES6+) + HTML5 + CSS3 Custom Properties + Chart.js + localStorage",
    metrics: [
      { label: "Data State", value: "100% Client-Side" },
      { label: "Categories", value: "12 Custom Categories" },
      { label: "Analytics", value: "Real-Time Chart.js" },
    ],
    challenges: [
      "Managing state transitions and zero-dependency inline editing for ~1,000 DOM interactions in vanilla JS",
      "Implementing dynamic budget progress calculations and 5-second undo toast timeouts",
    ],
    chronicles: "Built as a comprehensive personal finance tracking suite with budget caps, smart spending recommendations, and recurring transaction automation.",
  },
  andaz: {
    slug: "andaz",
    architecture: "Next.js 16 (App Router) + Supabase + React Server Components + Framer Motion",
    metrics: [
      { label: "Rendering", value: "Streaming Suspense" },
      { label: "Layout Shift", value: "0 CLS Score" },
      { label: "Styling", value: "Tailwind CSS v4" },
    ],
    challenges: [
      "Structuring server component boundaries so analytics load instantly while course data streams separately",
      "Implementing hardware-accelerated conic border animations with CSS @property",
    ],
    chronicles: "High-fidelity student learning dashboard (EduPulse) leveraging Next.js 16 server-streaming capabilities for ultra-fast load times and smooth layout stability.",
  },
  "product-browser": {
    slug: "product-browser",
    architecture: "Node.js Express + PostgreSQL (Neon Serverless) + React Frontend on Vercel",
    metrics: [
      { label: "Target Latency", value: "< 50 ms" },
      { label: "Dataset Scale", value: "200,000 Items" },
      { label: "Indexing", value: "4 Composite Indexes" },
    ],
    challenges: [
      "Preventing duplicate or missing items during page navigation when concurrent writes occur",
      "Optimizing query performance across 200,000 product rows without memory overflow",
      "Ensuring clean separation between Neon PostgreSQL backend and Vercel React frontend",
    ],
    chronicles: "Built as a high-performance backend catalog API handling 200,000+ products. Keyset pagination on (created_at, id) ensured deterministic results during continuous product inserts.",
  },
  memoria: {
    slug: "memoria",
    architecture: "FastAPI + Qdrant Vector Store + React TypeScript + Tailwind CSS",
    metrics: [
      { label: "Hackathon", value: "Ascent (Scalar School)" },
      { label: "Retrieval", value: "Hybrid Vector + Keyword" },
      { label: "Consistency", value: "Multi-factor Adaptive Ranking" },
    ],
    challenges: [
      "Resolving contradictory agent memory entries without model retraining",
      "Balancing vector search latency with BM25 keyword precision",
    ],
    chronicles: "Agent-native memory orchestration layer built at Ascent Hackathon (Scalar School of Technology). Allows LLM agents to maintain structured, explainable long-term context.",
  },
  "ctrl-alt-elite-pcam": {
    slug: "ctrl-alt-elite-pcam",
    architecture: "Python 3 + NumPy + PCAM Residual Eigen-Analysis Engine",
    metrics: [
      { label: "Accuracy Boost", value: "+14.6% Mean Δ" },
      { label: "Scoring", value: "Distribution-Free" },
      { label: "Score", value: "70 / 90 (7 seeds)" },
    ],
    challenges: [
      "Overcoming PCAM Hessian rank-1 noise domination without computationally heavy matrix inverse",
      "Designing scale-invariant rank-based residual scoring across arbitrary noise distributions",
    ],
    chronicles: "Engineered soft-consensus residual filtering and affine precision mapping for PCAM dynamics, achieving significant accuracy improvements over standard identity baseline.",
  },
  stepthrough: {
    slug: "stepthrough",
    architecture: "Next.js 16 + TypeScript + Zustand + Framer Motion + Recharts",
    metrics: [
      { label: "Matching", value: "Live Match Engine" },
      { label: "State", value: "Zustand Store" },
      { label: "Domain", value: "Civic Tech Platform" },
    ],
    challenges: [
      "Building a deterministic scheme eligibility calculation engine across diverse citizen profiles",
      "Designing a step-by-step trackable action roadmap with real-time progress visualization",
    ],
    chronicles: "Civic-tech platform helping citizens discover, understand, and apply for government schemes with personalized eligibility match scores.",
  },
  "spotify-clone": {
    slug: "spotify-clone",
    architecture: "Vanilla JavaScript + HTML5 Audio API + CSS Glassmorphism",
    metrics: [
      { label: "Dependencies", value: "Zero Frameworks" },
      { label: "Theme", value: "Spotify Dark Aesthetic" },
      { label: "Shortcuts", value: "Keyboard Hotkeys" },
    ],
    challenges: [
      "Synchronizing custom HTML5 audio range inputs with real-time audio playback events",
      "Implementing smooth glassmorphism rendering and responsive dynamic greeting logic",
    ],
    chronicles: "A high-fidelity clone of Spotify's Web Player showcasing modern CSS visual design, interactive audio controls, and keyboard hotkeys.",
  },
  "smart-tip-calculator": {
    slug: "smart-tip-calculator",
    architecture: "HTML5 + CSS3 Glassmorphism + Vanilla JS DOM Engine",
    metrics: [
      { label: "Presets", value: "4 Quick Buttons" },
      { label: "Splitting", value: "Dynamic Per-Person" },
      { label: "UI Style", value: "Glassmorphism" },
    ],
    challenges: [
      "Real-time reactive calculation without client framework overhead",
      "Ensuring robust input validation for split counts and custom percentage entries",
    ],
    chronicles: "Created as part of JavaScript projects collection, focusing on reactive user interface controls and dynamic mathematical calculations.",
  },
  smartmedicines: {
    slug: "smartmedicines",
    architecture: "React 19 + Vite + Google Gemini API + Web Speech API",
    metrics: [
      { label: "Hackathon", value: "Google Gemini Hackathon" },
      { label: "Safety Checks", value: "Real-time Interaction Detection" },
      { label: "Accessibility", value: "Voice-driven Guidance" },
    ],
    challenges: [
      "Extracting noisy text from handwritten prescription scans with low error rates",
      "Cross-referencing drug interactions dynamically using Gemini LLM prompt chains",
      "Designing an accessible UI for elderly users with voice feedback",
    ],
    chronicles: "Built at Google Gemini Hackathon. Features instant prescription OCR parsing, dangerous drug interaction warnings, and voice-assisted medicine schedules.",
  },
  "beyond-the-reality": {
    slug: "beyond-the-reality",
    architecture: "HTML5 + Canvas2D + Web Audio API + Modular Vanilla JS",
    metrics: [
      { label: "Award", value: "3rd Place & Best Ideation" },
      { label: "Event", value: "Campfire Bengaluru (Hack Club)" },
      { label: "Genre", value: "Psychological Thriller Game" },
    ],
    challenges: [
      "Designing responsive 2D reality-switch puzzle mechanics",
      "Creating atmospheric soundscapes and dark aesthetics in browser Canvas",
    ],
    chronicles: "Award-winning narrative browser game created at Campfire Bengaluru Hackathon by Hack Club.",
  },
  "system-of-support": {
    slug: "system-of-support",
    architecture: "React + TypeScript + Service Workers + IndexedDB/localStorage PWA",
    metrics: [
      { label: "Coverage", value: "7 Major Indian Cities" },
      { label: "Network State", value: "100% Offline Capability" },
      { label: "Hackathon", value: "DevForge Hackathon" },
    ],
    challenges: [
      "Caching emergency shelter and hospital data locally for offline zero-connectivity situations",
      "Multi-lingual UI switching without loading external network assets",
      "High contrast Emergency Mode UI for outdoor crisis visibility",
    ],
    chronicles: "Privacy-first PWA created at DevForge Hackathon. Guarantees immediate access to critical crisis hotlines and shelter maps even without mobile signal.",
  },
  smartacres: {
    slug: "smartacres",
    architecture: "HTML5 + CSS3 + Vanilla JavaScript + Lightbox Engine",
    metrics: [
      { label: "Tools", value: "EMI Calculator & Search Filters" },
      { label: "SEO Score", value: "100 LightHouse" },
    ],
    challenges: [
      "Building reactive multi-filter logic without heavy client frameworks",
      "Designing responsive real estate detail modals and lightbox galleries",
    ],
    chronicles: "Multi-page real estate showcase with dynamic property search, mortgage calculator, and full SEO metadata.",
  },
  "student-admission-portal": {
    slug: "student-admission-portal",
    architecture: "HTML5 + CSS3 Form Validation Engine",
    metrics: [
      { label: "Structure", value: "Semantic HTML5" },
      { label: "Styling", value: "Responsive CSS3 Cards" },
      { label: "Type", value: "Admission Portal Mockup" },
    ],
    challenges: [
      "Designing accessible form controls with custom CSS focus states and file upload inputs",
      "Creating responsive mobile-friendly input spacing without external framework overhead",
    ],
    chronicles: "A clean, structured static admission portal created for Newton School of Technology, showcasing foundational web form design.",
  },
};

// ─── Achievements ───────────────────────────────────────────────────────────

export type Achievement = {
  title: string;
  org: string;
  date: string;
  category: "hackathon" | "competitive-programming" | "academic" | "open-source";
  result?: string;
  detail: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Global Rank #35 (Top 1% S-Tier) — GSSoC '26",
    org: "GirlScript Foundation",
    date: "July 2026",
    category: "open-source",
    result: "Rank #35 / 43,587 (Top 1%)",
    detail:
      "Ranked #35 globally out of 43,587 participants in GirlScript Summer of Code '26 with 35,254 points, 124 PRs merged across 9 repos, 21 badges, and 13-week consecutive streak.",
    link: "https://github.com/nishtha-agarwal-211",
  },
  {
    title: "494th Global Rank — Algo Queen 2026",
    org: "ICPC Foundation & Amrita Vishwa Vidyapeetham",
    date: "August 2026",
    category: "competitive-programming",
    result: "Top 500 (494th Globally)",
    detail:
      "Secured 494th place in Round 1 of Algo Queen 2026: The ICPC Girls' Programming Cup out of thousands of participants worldwide.",
  },
  {
    title: "Codeforces Pupil (Max Rating: 1271)",
    org: "Codeforces",
    date: "August 2026",
    category: "competitive-programming",
    result: "Pupil (Rating 1271)",
    detail:
      "Achieved Pupil rank in the green tier (+49 rating bump in Educational Codeforces Round Div. 2). Active competitive programmer targeting Specialist (1400+).",
    link: "https://codeforces.com/profile/nishtha.agarwal.211",
  },
  {
    title: "100-Day Consistency Badge — LeetCode",
    org: "LeetCode",
    date: "July 2026",
    category: "competitive-programming",
    result: "100-Day Badge & 32 Hard Solved",
    detail:
      "Unlocked 100-Day consistency badge with 160+ problems solved, 110 active days, 32 Hard problems cracked, and a max streak of 48 days.",
    link: "https://leetcode.com/u/nishtha_agarwal_211/",
  },
  {
    title: "Odoo x LDCE Ahmedabad Hackathon 2026",
    org: "Odoo & LDCE Ahmedabad",
    date: "August 2026",
    category: "hackathon",
    result: "Featured Hackathon Project",
    detail:
      "Built GlobeTrotter, an intelligent multi-city travel planning platform featuring 13 interactive views, dynamic expense analytics, and shareable public itineraries.",
    link: "https://github.com/nishtha-agarwal-211/GlobeTrotter",
  },
  {
    title: "3rd Place + Best Ideation — Campfire Bengaluru",
    org: "Hack Club",
    date: "February 2026",
    category: "hackathon",
    result: "3rd Place + Best Ideation",
    detail:
      "Built 'Beyond the Reality', an immersive psychological thriller game with reality-switch mechanics and puzzle-based progression.",
    link: "https://github.com/nishtha-agarwal-211/Beyond-The-Reality",
  },
  {
    title: "144+ Open Source PRs Merged",
    org: "GSSoC '26 & Elite Coders",
    date: "May 2026 — Present",
    category: "open-source",
    result: "144+ Merged PRs",
    detail:
      "Merged pull requests across real-world open-source repositories under GSSoC '26, ECSoC '26, and ECWoC including BlockForge-AI, Checkora, commitpulse, and CampusConnect.",
    link: "https://github.com/nishtha-agarwal-211",
  },
  {
    title: "ICPC 2025 — Online Prelims",
    org: "ICPC Foundation",
    date: "August 2025",
    category: "competitive-programming",
    detail:
      "Competed in the International Collegiate Programming Contest online preliminary round.",
  },
  {
    title: "5th Place — AAYAM CP Individuals",
    org: "Newton School of Technology",
    date: "April 2026",
    category: "competitive-programming",
    result: "5th Place",
    detail:
      "Competitive programming contest on algorithms and problem solving at Aayam Tech Fest.",
  },
  {
    title: "CGPA 9.47 / 10.0",
    org: "Newton School of Technology (S-Vyasa)",
    date: "2025 — Present",
    category: "academic",
    result: "9.47 / 10.0",
    detail: "B.Tech Computer Science — current CGPA.",
  },
  {
    title: "Smart India Hackathon 2025",
    org: "Government of India",
    date: "September 2025",
    category: "hackathon",
    detail:
      "Participated at national level, focused on innovation and real-world problem solving.",
  },
  {
    title: "Turing Cup 2K26 — National CP Contest",
    org: "VNR Vignana Jyothi Institute",
    date: "March 2026",
    category: "competitive-programming",
    detail: "National-level coding contest.",
  },
  {
    title: "AlgoStrike — Yugantar '25",
    org: "Scalar School of Technology",
    date: "October 2025",
    category: "competitive-programming",
    detail:
      "Team CP contest at Yugantar '25, organized by Scalar School of Technology, Bengaluru.",
  },
];

// ─── Campus Involvement / Volunteering ──────────────────────────────────────

export type CampusInvolvement = {
  event: string;
  role: string;
  org?: string;
  date: string;
  description: string;
  link?: string;
};

export const campusInvolvement: CampusInvolvement[] = [
  {
    event: "Orientation 2026",
    role: "Lead",
    org: "Newton School of Technology",
    date: "August 2026",
    description:
      "Led the 1-week freshman orientation program for the incoming junior batch — coordinating logistics, mentoring new students, running interactive icebreakers, and guiding campus acclimatization.",
  },
  {
    event: "Industry Connect Day @ Procore Technologies",
    role: "Student Delegate",
    org: "Procore Technologies & NST",
    date: "June 2026",
    description:
      "Explored real-world enterprise software architectures, system scaling, and product maintenance practices in Bangalore.",
  },
  {
    event: "SheBuilds Hackathon",
    role: "Volunteer",
    org: "Aayam Tech Fest",
    date: "2026",
    description:
      "Participant support, coordination, and event execution.",
  },
  {
    event: "BugBash Hackathon",
    role: "Volunteer",
    org: "Aayam Tech Fest",
    date: "2026",
    description:
      "Participant support, coordination, and event execution.",
  },
  {
    event: "Robin Hood Army Donation Drives",
    role: "Social Committee Member",
    org: "Robin Hood Army",
    date: "2025 — Present",
    description:
      "Participated in 9+ food distribution, community outreach, and donation drives across local areas.",
  },
];
