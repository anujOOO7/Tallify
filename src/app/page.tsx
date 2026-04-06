import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FeatureShowcase from "@/components/FeatureShowcase";
import Security from "@/components/Security";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FeatureShowcase />
      <Security />
      <Pricing />
      <Testimonials />
      <FAQ />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}
