import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import FAQ from "@/components/sections/FAQ";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <Nav />
      <About />
      <div className="section-divider mx-auto max-w-5xl" />
      <Experience />
      <div className="section-divider mx-auto max-w-5xl" />
      <FAQ />
      <Footer />
    </main>
  );
}
