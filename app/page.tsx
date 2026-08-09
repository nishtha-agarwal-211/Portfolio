import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import PageLinks from "@/components/sections/PageLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <MarqueeTicker />
      <PageLinks />
      <Footer />
    </main>
  );
}
