import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import CampusInvolvement from "@/components/sections/CampusInvolvement";
import FAQ from "@/components/sections/FAQ";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <Nav />
      <About />
      <div className="section-divider mx-auto max-w-5xl" />
      <Experience />
      <div className="section-divider mx-auto max-w-5xl" />
      <Achievements />
      <div className="section-divider mx-auto max-w-5xl" />
      <CampusInvolvement />
      <div className="section-divider mx-auto max-w-5xl" />
      <FAQ />
      <Footer />
    </main>
  );
}
