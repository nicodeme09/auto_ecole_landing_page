import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SocialProof />
      <Features />
      <Benefits />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
