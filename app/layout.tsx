import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import ScrollField from "@/components/three/ScrollField";
import Terminal from "@/components/Terminal";
import { profile } from "@/lib/data";

const siteUrl = "https://nishtha-agarwal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nishtha Agarwal — Frontend Developer",
    template: "%s — Nishtha Agarwal",
  },
  description:
    "Portfolio of Nishtha Agarwal — frontend developer with 80+ merged open-source PRs, building accessible web apps, AI-powered tools, and backend systems.",
  keywords: [
    "Nishtha Agarwal",
    "Frontend Developer",
    "React Developer",
    "Web Accessibility",
    "Open Source Contributor",
    "GirlScript Summer of Code",
    "Newton School of Technology",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.social.github }],
  creator: profile.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Nishtha Agarwal — Frontend Developer",
    description:
      "Frontend developer with 80+ merged open-source PRs, building accessible web apps, AI-powered tools, and backend systems.",
    siteName: "Nishtha Agarwal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishtha Agarwal — Frontend Developer",
    description:
      "Frontend developer with 80+ merged open-source PRs, building accessible web apps, AI-powered tools, and backend systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.role,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Newton School of Technology",
  },
  sameAs: [profile.social.github, profile.social.linkedin],
  knowsLanguage: profile.languages,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-void text-ink antialiased">
        <Preloader />
        <div className="ambient-glow" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        <ScrollField />
        <CursorGlow />
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
        <BackToTop />
        <Terminal />
      </body>
    </html>
  );
}
