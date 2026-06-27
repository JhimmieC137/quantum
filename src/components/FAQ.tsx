"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { montserrat, garamond } from "@/lib/fonts"
import FadeUp from "@/ui/FadeUp"

const faqs = [
    {
        q: "What types of properties do you develop?",
        a: "We develop a wide range of properties including residential estates, luxury homes, commercial buildings, mixed-use complexes, and land banking schemes. Every project is tailored to the client's brief and the demands of its environment.",
    },
    {
        q: "What services does your firm offer?",
        a: "Our services span real estate development, building construction, civil and infrastructure works, architectural consultancy, project management, and property sales — covering the full lifecycle of any project from conception to handover.",
    },
    {
        q: "How do you handle project timelines and delivery?",
        a: "We set realistic milestones from the outset, assign dedicated project managers to each site, and provide clients with regular progress updates. Our in-house teams reduce reliance on third-party contractors, significantly reducing delays.",
    },
    {
        q: "Can designs be customised to my specifications?",
        a: "Absolutely. Our design and construction teams work collaboratively with each client from the concept stage. Whether you have detailed drawings or just a vision, we develop a design brief that reflects your goals, budget, and site conditions.",
    },
    {
        q: "How long does a typical construction project take?",
        a: "Timelines vary by project scale. A standard residential build typically takes 9–18 months. Large commercial projects may run 2–4 years. We provide a detailed schedule at the outset, with defined milestones and buffer periods.",
    },
    {
        q: "Do you work with diaspora and overseas investors?",
        a: "Yes. We have a growing client base among Nigerians in the diaspora looking to invest in Ibadan real estate. We offer remote consultation, virtual site visits, and handle all documentation remotely so you can invest with confidence from anywhere.",
    },
]

function FAQRow({ item, index, open, onToggle }: {
    item: typeof faqs[0]; index: number; open: boolean; onToggle: () => void
}) {
    return (
        <div className={`border-b transition-colors duration-300 ${open ? "border-white/20" : "border-white/10"}`}>
            <button
                onClick={onToggle}
                className="w-full flex items-start gap-6 py-7 text-left group cursor-pointer"
                aria-expanded={open}
            >
                <span className={`${montserrat.className} text-[11px] font-bold tracking-widest min-w-[28px] pt-1 transition-colors duration-200 ${open ? "text-[#b91c1c]" : "text-[#888880]"}`}>
                    {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`${montserrat.className} flex-1 font-semibold text-base sm:text-lg transition-colors duration-200 ${open ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                    {item.q}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 ${open ? "bg-[#b91c1c] text-white rotate-180" : "bg-white/10 text-zinc-400"}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pl-[52px] pb-7">
                            <p className={`${garamond.className} text-[#555550] text-lg leading-[1.8]`}>{item.a}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FAQAccordion() {
    const [open, setOpen] = useState<number | null>(null)

    return (
        <section className="w-full bg-[#111110] overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-24 lg:py-32">

                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left — sticky heading */}
                    <div className="lg:w-[36%] lg:sticky lg:top-28">
                        <FadeUp>
                            <p className={`${montserrat.className} section-label mb-6`}>(FAQ)</p>
                        </FadeUp>
                        <FadeUp>
                            <h2
                                className={`${garamond.className} text-white font-normal leading-none tracking-tight mb-6`}
                                style={{ fontSize: "clamp(2.4rem, 4.5vw, 5rem)" }}
                            >
                                Frequently<br />
                                Asked <em className="italic text-[#b91c1c]">Questions</em>
                            </h2>
                        </FadeUp>
                        <FadeUp>
                            <p className={`${garamond.className} text-zinc-400 text-lg leading-relaxed mb-10`}>
                                Answers to common questions about our process, properties, timelines, and expertise.
                            </p>
                        </FadeUp>
                        <FadeUp>
                            <a
                                href="/contact"
                                className={`${montserrat.className} inline-flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#b91c1c] group`}
                            >
                                Ask Us Directly
                                <span className="w-6 h-px bg-[#b91c1c] group-hover:w-12 transition-all duration-300" />
                            </a>
                        </FadeUp>
                    </div>

                    {/* Right — accordion */}
                    <div className="lg:w-[64%] w-full">
                        <div className="border-t border-white/10">
                            {faqs.map((item, i) => (
                                <FAQRow
                                    key={i}
                                    item={item}
                                    index={i}
                                    open={open === i}
                                    onToggle={() => setOpen(open === i ? null : i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
