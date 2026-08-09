import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Skills from "@/components/sections/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Toolbox",
  description:
    "Nishtha Agarwal's technical toolbox — frontend frameworks, backend systems, AI/ML tools, and DevOps technologies.",
};

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <Nav />
      <Skills />
      <Footer />
    </main>
  );
}
