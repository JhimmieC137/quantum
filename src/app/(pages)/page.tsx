'use client'

import CoreValues from "@/components/CoreValues";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import InvestmentSection from "@/components/Investment";
import OurClients from "@/components/OurClients";
import OurServices from "@/components/OurServices";
import Properties from "@/components/Properties";
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
      <div className="bg-[#F4F2EC]">
        <CoreValues />
        <Properties />
      </div>
      <InvestmentSection />
    </div>
  );
}
