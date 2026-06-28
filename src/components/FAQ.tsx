"use client";

import { useState } from "react";
import { montserrat } from "@/lib/fonts";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of properties do you develop?",
    answer:
      "We develop a wide range of properties including residential estates, luxury homes, commercial buildings, mixed-use complexes, and government-grade infrastructure. Every project is tailored to the client's brief and the demands of its environment.",
  },
  {
    question: "What services does your firm offer?",
    answer:
      "Our services span real estate development, building construction, civil and infrastructure works, architectural and design consultancy, project management, and property sales and lettings, covering the full lifecycle of any project from conception to handover.",
  },
  {
    question: "How do you handle project timelines and delivery?",
    answer:
      "We set realistic milestones from the outset, assign dedicated project managers to each site, and provide clients with regular progress updates. Our in-house teams reduce reliance on third-party contractors, which significantly reduces delays.",
  },
  {
    question: "Can designs be customised to my specifications?",
    answer:
      "Absolutely. Our design and construction teams work collaboratively with each client from the concept stage. Whether you have detailed drawings or just a vision, we develop a design brief that reflects your goals, budget, and site conditions.",
  },
  {
    question: "How long does a typical construction project take?",
    answer:
      "Timelines vary by project scale. A standard residential build typically takes 9–18 months. Large commercial or infrastructure projects may run 2–4 years. We provide a detailed project schedule at the outset, with defined milestones and buffer periods.",
  },
  {
    question: "Do you work with diaspora and overseas investors?",
    answer:
      "Yes. We actively support Nigerians in the diaspora and international investors looking to acquire property in Ibadan. We handle everything remotely — from site inspections and documentation to construction updates — so you can invest with full confidence from anywhere in the world.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function FAQRow({
  item,
  open,
  onToggle,
}: {
  item: FAQItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <div className="h-px bg-zinc-300 w-full" />
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-5 sm:gap-6 py-5 sm:py-6 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="flex-1 text-amber-500 text-sm sm:text-base lg:text-lg group-hover:text-amber-400 transition-colors duration-200">
          {item.question}
        </span>
        <span className="size-8 sm:size-9 flex items-center justify-center rounded-full border border-amber-500 text-amber-500 group-hover:border-amber-400 group-hover:text-amber-400 transition-all duration-200 shrink-0">
          <ChevronIcon open={open} />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-64 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pr-12 sm:pr-16">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:gap-28">

          {/* Left column */}
          <div className="lg:w-[36%] shrink-0 lg:pt-1">
            <h2 className={`${montserrat.className} text-zinc-900 text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05]`}>
              Frequently<br />Asked<br />
              <span className="text-amber-400 italic">Questions</span>
            </h2>
          </div>

          {/* Right column */}
          <div className="flex-1 min-w-0">
            {faqs.map((item, i) => (
              <FAQRow
                key={i}
                item={item}
                open={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
            <div className="h-px bg-zinc-300 w-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
