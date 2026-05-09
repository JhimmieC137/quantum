"use client";

import FadeUp from "@/ui/FadeUp";
import { useState } from "react";
import { montserrat } from "@/lib/fonts";
import { brand } from "@/lib/constants";

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
      "Our services span real estate development, building construction, civil and infrastructure works, architectural and design consultancy, project management, and property sales and lettings — covering the full lifecycle of any project from conception to handover.",
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
    question: "Do you work with government and institutional clients?",
    answer:
      "Yes. We have a strong track record delivering infrastructure and public-sector projects across Nigeria. Our team is experienced in procurement compliance, regulatory requirements, and the reporting standards institutional clients require.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ease-in-out ${
        open ? "rotate-180" : "rotate-0"
      }`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function FAQRow({ item, index, open, onToggle }: {
  item: FAQItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`${brand.redBg} my-3 rounded-xl px-3`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-5 px-1 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-lg text-amber-300/60 min-w-[28px] tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`flex-1 text-lg transition-colors duration-200 ${brand.amberLightText}`}
        >
          {item.question}
        </span>
        <span className={`${brand.amberLightText} flex-shrink-0`}>
          <ChevronIcon open={open} />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center gap-4 ${
          open ? "max-h-64 pb-5" : "max-h-0"
        }`}
      >
        <div className="min-w-[28px]"></div>
        <p className="text-md leading-relaxed text-zinc-200 rounded-lg">
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
    <FadeUp>
      <section className="w-full max-w-[1400px] mx-auto px-2 py-[16rem]">
        {/* Header */}
        <div className="flex items-end justify-between gap-8 mb-10">
          <div className="flex-1">
            <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-2 pl-1`}>
              <div className="h-px xl:w-16 lg:w-10 w-7 bg-red-500"/>
              <p className={`${montserrat.className} text-xs font-bold ${brand.amberText} tracking-widest`}>FAQ</p>
            </div>
            <p className={`${montserrat.className} text-zinc-900 text-left lg:text-5xl text-3xl font-semibold my-3`}>
                Frequently Asked<span className={`${brand.amberAltText} italic`}>Questions</span>
            </p>
              
            <p className="text-md text-zinc-900 leading-relaxed max-w-[50rem]">
              Find answers to common questions about our services, construction
              process, property options, project timelines, and real estate
              expertise.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((item, i) => (
            <FAQRow
              key={i}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </section>
    </FadeUp>
  );
}