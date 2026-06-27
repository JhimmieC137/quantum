'use client'

import CoreValues from "@/components/CoreValues";
import FAQAccordion from "@/components/FAQ";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import InvestmentSection from "@/components/Investment";
import OurClients from "@/components/OurClients";
import OurServices from "@/components/OurServices";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Introduction />
      <OurClients />
      <OurServices />
      <CoreValues />
      <Projects />
      <FAQAccordion />
      <InvestmentSection />
    </div>
  );
}
