'use client'

import CoreValues from "@/components/CoreValues";
import FAQAccordion from "@/components/FAQ";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import InvestmentSection from "@/components/Investment";
import OurClients from "@/components/OurClients";
import OurServices from "@/components/OurServices";
import Projects from "@/components/Projects";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setDisplay = () => {
    setTimeout(() => setIsLoading(false), 1000);
  }

  useEffect(() => {
    setDisplay();
  }, [])

  return (
    <div className={`w-full`}>
      <Hero />
      <Introduction />
      <OurClients />
      <OurServices />
      <div className="bg-zinc-950">
        <CoreValues />
        <Projects />
        <FAQAccordion />
      </div>
      <InvestmentSection />
    </div>
  );
}
