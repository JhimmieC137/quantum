"use client";

import FadeUp from "@/ui/FadeUp";
import { motion, AnimatePresence } from "motion/react";
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
    question: "Do you work with government and institutional clients?",
    answer:
      "Yes. We have a strong track record delivering infrastructure and public-sector projects across Nigeria. Our team is experienced in procurement compliance, regulatory requirements, and the reporting standards institutional clients require.",
  },
];

function FAQRow({ item, index, open, onToggle }: {
  item: FAQItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`my-2 rounded-2xl overflow-hidden border transition-all duration-300 ${
      open
        ? 'border-[#6B7A3A]/50 bg-[#1F2A44]/8'
        : 'border-[#E0DDD4] bg-white hover:border-[#6B7A3A]/30'
    }`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-5 px-6 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className={`text-sm font-bold min-w-[28px] tabular-nums transition-colors duration-200 ${open ? 'text-[#6B7A3A]' : 'text-zinc-300'}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`flex-1 font-medium transition-colors duration-200 ${open ? 'text-[#6B7A3A]' : 'text-[#1F2A44]'}`}>
          {item.question}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
          open ? 'bg-[#6B7A3A] text-white rotate-180' : 'bg-[#F5F3ED] text-[#1F2A44]'
        }`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 flex gap-4">
              <div className="min-w-[28px]" />
              <p className="text-zinc-500 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-[#F5F3ED] relative">
      <div className="max-w-[1400px] mx-auto px-5 py-16 sm:py-24">
        <FadeUp>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#6B7A3A]" />
            <p className={`${montserrat.className} text-[11px] font-bold text-[#6B7A3A] tracking-[0.22em] uppercase`}>FAQ</p>
          </div>
        </FadeUp>

        <div className="flex lg:flex-row flex-col gap-16 items-start">
          <div className="lg:w-[38%] w-full lg:sticky lg:top-28">
            <FadeUp>
              <h2 className={`${montserrat.className} text-[#1F2A44] text-4xl xl:text-5xl font-semibold mb-4`}>
                Frequently Asked{" "}
                <em className="not-italic text-gradient-gold">Questions</em>
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-[40rem]">
                Find answers to common questions about our services, construction
                process, property options, project timelines, and real estate expertise.
              </p>
            </FadeUp>
          </div>

          <div className="lg:w-[62%] w-full">
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
        </div>
      </div>
    </section>
  );
}
