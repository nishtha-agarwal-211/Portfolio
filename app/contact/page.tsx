import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nishtha Agarwal — open to internships, collaborations, and interesting engineering problems.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <Nav />
      <Contact />
      <Footer />
    </main>
  );
}
