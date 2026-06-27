'use client'

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { montserrat, garamond } from "@/lib/fonts";
import { pageRoutes } from "@/data/routes";
import { HiArrowRight } from "react-icons/hi";
import FadeUp from "@/ui/FadeUp";

const services = [
    {
        num: "01",
        title: "Land Sales",
        short: "Verified plots in prime Ibadan corridors",
        description: "Genuine, well-documented lands in both prime and fast-developing locations — every property authenticated, every title clean.",
        image: "/services/land_sales_narrow.jpg",
        href: pageRoutes.services.landSales,
    },
    {
        num: "02",
        title: "Title Documentation & Legal Support",
        short: "Complete legal protection for your property",
        description: "End-to-end documentation ensuring every acquisition is authentic, legally compliant, and properly registered.",
        image: "/services/signing-papers.jpg",
        href: pageRoutes.services.legalSupport,
    },
    {
        num: "03",
        title: "Construction & Development",
        short: "From concept to keys, built to last",
        description: "Turning architectural dreams into durable realities — bespoke builds for individuals, families, investors, and organisations.",
        image: "/services/new-building.jpg",
        href: pageRoutes.services.construction,
    },
    {
        num: "04",
        title: "Real Estate Investment Advisory",
        short: "Data-led guidance for long-term returns",
        description: "Identifying, analysing, and securing high-value real estate opportunities that yield compounding long-term returns.",
        image: "/services/agents-in-meeting.jpg",
        href: pageRoutes.services.realEstateAdvisory,
    },
]

export default function OurServices() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

    return (
        <section ref={sectionRef} className="w-full bg-[#111110] overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-24 lg:py-32">

                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
                    <div>
                        <FadeUp>
                            <p className={`${montserrat.className} section-label mb-6`}>(What We Do)</p>
                        </FadeUp>
                        <FadeUp>
                            <h2
                                className={`${garamond.className} text-white font-normal leading-none tracking-tight`}
                                style={{ fontSize: "clamp(2.6rem, 5vw, 5.5rem)" }}
                            >
                                Our <em className="italic text-[#b91c1c]">Services</em>
                            </h2>
                        </FadeUp>
                    </div>
                    <FadeUp>
                        <p className={`${garamond.className} text-zinc-400 text-lg leading-relaxed lg:max-w-[32rem]`}>
                            We handle the full lifecycle — from the first survey peg to the final key handover.
                        </p>
                    </FadeUp>
                </div>

                {/* Two-column: list + image */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Service list */}
                    <div className="lg:w-[55%] w-full">
                        {services.map((svc, i) => (
                            <motion.div
                                key={svc.num}
                                className="service-row group cursor-pointer"
                                onClick={() => setActiveIndex(i)}
                                onHoverStart={() => setActiveIndex(i)}
                            >
                                <div className="flex items-start gap-6 py-7 px-2">
                                    {/* Number */}
                                    <span className={`${montserrat.className} text-[12px] font-bold tracking-widest mt-1 transition-colors duration-300 ${activeIndex === i ? "text-[#b91c1c]" : "text-zinc-600"}`}>
                                        {svc.num}
                                    </span>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className={`${montserrat.className} font-semibold text-lg sm:text-xl transition-colors duration-300 ${activeIndex === i ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                                                {svc.title}
                                            </h3>
                                            <HiArrowRight className={`size-4 shrink-0 transition-all duration-300 ${activeIndex === i ? "text-[#b91c1c] translate-x-0" : "text-zinc-700 -translate-x-1 opacity-0 group-hover:opacity-60 group-hover:translate-x-0"}`} />
                                        </div>
                                        <AnimatePresence>
                                            {activeIndex === i && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className={`${garamond.className} text-zinc-400 text-base leading-relaxed mt-3 mb-4`}>
                                                        {svc.description}
                                                    </p>
                                                    <a
                                                        href={svc.href}
                                                        className={`${montserrat.className} inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#b91c1c] group/link`}
                                                    >
                                                        Learn More
                                                        <span className="w-5 h-px bg-[#b91c1c] group-hover/link:w-8 transition-all duration-300" />
                                                    </a>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Featured image panel — updates on hover */}
                    <div className="lg:w-[45%] w-full lg:sticky lg:top-32">
                        <div className="relative overflow-hidden rounded-2xl h-[320px] sm:h-[400px] lg:h-[540px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, scale: 1.04 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <motion.img
                                        src={services[activeIndex].image}
                                        alt={services[activeIndex].title}
                                        className="w-full h-full object-cover"
                                        style={{ y: imgY }}
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/70 to-transparent" />

                            {/* Service label overlay */}
                            <div className="absolute bottom-6 left-6">
                                <span className={`${montserrat.className} text-[10px] font-bold tracking-widest uppercase text-white/60`}>
                                    {services[activeIndex].short}
                                </span>
                            </div>

                            {/* Red accent corner */}
                            <div className="absolute top-0 right-0 w-12 h-12 bg-[#b91c1c]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
