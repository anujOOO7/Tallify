"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    const section = sessionStorage.getItem("scrollTo");
    if (!section) return;
    sessionStorage.removeItem("scrollTo");
    const pathMap: Record<string, string> = { features: "/features", pricing: "/pricing" };
    const el = document.getElementById(section);
    if (el) {
      setTimeout(() => {
        const top = el.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: "smooth" });
        // Update URL without hash
        if (pathMap[section]) history.replaceState(null, "", pathMap[section]);
      }, 100);
    }
  }, []);

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
