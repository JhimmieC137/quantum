'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import MainLayout from "../(pages)/layout"
import InvestmentSection from "@/components/Investment"
import HeroBanner from "@/components/HeroBanner"
import PageHero from "@/components/PageHero"
import FAQAccordion from "@/components/FAQ"
import FadeUp from "@/ui/FadeUp"
import { montserrat, garamond } from "@/lib/fonts"
import { pageRoutes } from "@/data/routes"
import { HiArrowRight } from "react-icons/hi"

const services = [
    {
        image: "/services/land_sales_narrow.jpg",
        title: "Land Sales",
        accentTitle: "Land",
        accent: "Sales",
        description:
            "Our land sales service focuses on providing clients with genuine, well-verified lands in both prime and fast-developing locations. We ensure every property is authentic, secure, and properly documented.",
        href: pageRoutes.services.landSales,
        flip: false,
    },
    {
        image: "/services/signing-papers.jpg",
        title: "Title Documentation & Legal Support",
        accentTitle: "Title Documentation &",
        accent: "Legal Support",
        description:
            "Our Title Documentation & Legal Support service is designed to protect our clients by ensuring that every property acquired is authentic, legally compliant, and properly registered.",
        href: pageRoutes.services.legalSupport,
        flip: true,
    },
    {
        image: "/services/new-building.jpg",
        title: "Construction and Development",
        accentTitle: "Construction and",
        accent: "Development",
        description:
            "Our Construction and Development service is tailored for individuals, families, investors, and organizations who want to bring their real estate visions to life with precision and excellence.",
        href: pageRoutes.services.construction,
        flip: false,
    },
    {
        image: "/services/agents-in-meeting.jpg",
        title: "Real Estate Investment Advisory",
        accentTitle: "Real Estate",
        accent: "Investment Advisory",
        description:
            "Our Investment Advisory service guides individuals, families, and corporate organizations in identifying, analyzing, and investing in high-value real estate opportunities that yield long-term returns.",
        href: pageRoutes.services.realEstateAdvisory,
        flip: true,
    },
]

function ServiceBlock({ svc, index }: { svc: typeof services[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"])

    return (
        <div
            ref={ref}
            className={`flex ${svc.flip ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col w-full lg:min-h-[28rem] gap-0`}
        >
            {/* Image side */}
            <div className="lg:w-1/2 w-full relative overflow-hidden">
                <motion.div className="absolute inset-0 w-full h-full" style={{ y: imgY }}>
                    <img
                        className="w-full h-full object-cover scale-110"
                        src={svc.image}
                        alt={svc.title}
                    />
                </motion.div>
                {/* Overlay tint */}
                <div className="absolute inset-0 bg-[#1F2A44]/40" />
                {/* Number badge */}
                <div className="absolute bottom-6 left-6 z-10">
                    <span className={`${montserrat.className} text-[5rem] font-extrabold leading-none text-white/10 select-none`}>
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>
            </div>

            {/* Text side */}
            <div className={`lg:w-1/2 w-full flex flex-col justify-center py-20 px-10 xl:px-16
                ${index % 2 === 0 ? "bg-[#1F2A44]" : "bg-[#0e1520]"}
            `}>
                <motion.div
                    initial={{ opacity: 0, x: svc.flip ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="h-px w-8 bg-[#C9A84C]" />
                        <p className={`${montserrat.className} text-[10px] font-bold text-[#C9A84C] tracking-[0.22em] uppercase`}>
                            Service {String(index + 1).padStart(2, "0")}
                        </p>
                    </div>

                    <h2 className={`${montserrat.className} text-zinc-100 text-4xl xl:text-5xl font-semibold mb-6 leading-tight`}>
                        {svc.accentTitle} <em className="not-italic text-gradient-gold">{svc.accent}</em>
                    </h2>

                    <p className={`${garamond.className} text-zinc-400 text-lg leading-relaxed mb-10`}>
                        {svc.description}
                    </p>

                    <a
                        href={svc.href}
                        className="group inline-flex items-center gap-3 btn-shimmer text-white py-3 px-7 rounded-full text-sm font-semibold tracking-wide w-fit shadow-lg"
                    >
                        Learn More
                        <HiArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default function Services() {
    const paragraphList = [
        "We deliver end-to-end real estate and construction solutions — from architectural design to final handover — built on precision, integrity, and a relentless commitment to exceeding every client's expectations.",
        "Every structure we raise is a statement of purpose. We blend intelligent design with durable craftsmanship to create spaces that serve communities, stand the test of time, and define skylines.",
    ]

    return (
        <MainLayout>
            <HeroBanner
                image="/wallpapers/construction_1.jpg"
                title="Our"
                titleAccent="Services"
            />

            <PageHero
                CTAMain="Innovative Designs,"
                CTAAccent="Urban Excellence"
                paragraphs={paragraphList}
            />

            {/* Service blocks */}
            <section className="w-full">
                {services.map((svc, i) => (
                    <ServiceBlock key={svc.title} svc={svc} index={i} />
                ))}
            </section>

            <FAQAccordion />
            <InvestmentSection />
        </MainLayout>
    )
}
