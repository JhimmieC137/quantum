'use client'

import CoreServices from "@/components/CoreServices";
import Hero from "@/components/Hero";
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
      <CoreServices />
    </div>
  );
}
