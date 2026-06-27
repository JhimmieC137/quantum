'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import InvestmentSection from "@/components/Investment"
import OurClients from "@/components/OurClients"
import { montserrat, garamond } from "@/lib/fonts"
import { pageRoutes } from "@/data/routes"
import MainLayout from "../(pages)/layout"
import FAQAccordion from "@/components/FAQ"
import TeamGrid from "@/components/TeamGrid"
import PageHero from "@/components/PageHero"
import HeroBanner from "@/components/HeroBanner"
import FadeUp from "@/ui/FadeUp"
import FadeLeft from "@/ui/FadeLeft"

const stats = [
    {
        value: "2+",
        label: "Years of",
        accent: "Experience",
        description: "In just over two years, Quantum Homes & Property has established itself as one of Ibadan's most trusted names in real estate.",
    },
    {
        value: "5K+",
        label: "Satisfied",
        accent: "Clients",
        description: "Over 5,000 individuals, families, and investors have trusted Quantum Homes & Property to guide them through property ownership.",
    },
    {
        value: "60+",
        label: "Plots",
        accent: "Sold",
        description: "Over 60 plots have been successfully sold across our active estates, reflecting the confidence buyers place in our work.",
    },
    {
        value: "8+",
        label: "Successful",
        accent: "Projects",
        description: "From land banking estates to buy-and-build communities, every project has been carefully planned and delivered with clear value.",
    },
]

const missionVision = [
    {
        accent: "Mission",
        icon: "◈",
        content: "At Quantum Homes & Property, our mission is to deliver magnificent real estate services that make homeownership and property investment achievable for everyone, irrespective of class or background.",
    },
    {
        accent: "Vision",
        icon: "◆",
        content: "To be the undisputed, prime, and dominant real estate development firm in the world, setting global standards in innovation, excellence, and customer satisfaction.",
    },
]

function StatCard({ value, label, accent, description, index }: {
    value: string; label: string; accent: string; description: string; index: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="group relative glass rounded-2xl p-8 border border-white/10 hover:border-[#6B7A3A]/50 transition-all duration-300 card-lift"
        >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
            <p className={`${montserrat.className} text-[4.5rem] leading-none font-bold text-gradient-gold mb-2`}>
                {value}
            </p>
            <p className={`${montserrat.className} text-zinc-100 text-lg font-semibold mb-3`}>
                {label} <em className="not-italic text-[#C9A84C]">{accent}</em>
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
    )
}

function MissionVisionCard({ accent, icon, content, index }: {
    accent: string; icon: string; content: string; index: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#6B7A3A]/40 transition-all duration-300"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F2A44]/80 to-[#0e1520]/90" />
            <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#6B7A3A] to-[#C9A84C]" />

            <div className="relative z-10 p-10">
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl text-[#C9A84C]">{icon}</span>
                    <h3 className={`${montserrat.className} text-2xl font-semibold text-zinc-100`}>
                        Our <em className="not-italic text-[#C9A84C]">{accent}</em>
                    </h3>
                </div>
                <p className={`${garamond.className} text-xl text-zinc-300 leading-relaxed`}>
                    {content}
                </p>
            </div>
        </motion.div>
    )
}

export default function About() {
    const storyRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start end", "end start"] })
    const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])
    const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

    const paragraphList = [
        "Quantum Homes & Property is a trusted real estate company committed to bridging the gap between property ownership dreams and reality. Since our founding, we have helped thousands of individuals, families, and organizations acquire genuine properties with peace of mind.",
        "We pride ourselves on integrity, professionalism, and innovation in the real estate sector. At Quantum Homes & Property, we don't just sell properties — we build trust, create value, and ensure long-term satisfaction.",
    ]

    return (
        <MainLayout>
            <HeroBanner
                image="/wallpapers/construction_1.jpg"
                title="About"
                titleAccent="Us"
            />

            <PageHero paragraphs={paragraphList} />

            {/* ── Stats Grid ─────────────────────────────────────── */}
            <section className="w-full py-24 bg-[#0e1520] relative overflow-hidden">
                <div className="orb absolute top-0 right-0 w-[500px] h-[500px] bg-[#6B7A3A]/12 pointer-events-none" />
                <div className="orb absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C9A84C]/8 pointer-events-none" style={{ animationDelay: '3s' }} />

                <div className="max-w-[1400px] mx-auto px-5 relative z-10">
                    <FadeUp>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-10 bg-[#C9A84C]" />
                            <p className={`${montserrat.className} text-[11px] font-bold text-[#C9A84C] tracking-[0.22em] uppercase`}>
                                Our Numbers
                            </p>
                        </div>
                        <h2 className={`${montserrat.className} text-zinc-100 text-4xl xl:text-5xl font-semibold mb-12`}>
                            Our Impact <em className="not-italic text-gradient-gold">Over The Years</em>
                        </h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {stats.map((s, i) => (
                            <StatCard key={s.accent} {...s} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Story + Mission/Vision ──────────────────────────── */}
            <section ref={storyRef} className="w-full py-28 bg-[#F5F3ED] relative overflow-hidden">
                <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
                    <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.05] -top-1/4 -right-1/4 w-[65%] select-none" aria-hidden />
                </motion.div>

                <div className="max-w-[1400px] mx-auto px-5 relative z-10">

                    {/* Story headline */}
                    <FadeUp>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-10 bg-[#6B7A3A]" />
                            <p className={`${montserrat.className} text-[11px] font-bold text-[#6B7A3A] tracking-[0.22em] uppercase`}>
                                Our Story
                            </p>
                        </div>
                        <h2 className={`${montserrat.className} text-[#1F2A44] text-4xl xl:text-5xl font-semibold mb-14 max-w-[52rem] leading-tight`}>
                            We believe in the transformative{" "}
                            <em className="not-italic text-gradient-olive">power of construction</em>
                        </h2>
                    </FadeUp>

                    {/* Story image + copy */}
                    <div className="flex lg:flex-row flex-col gap-16 items-start mb-20">
                        <FadeLeft>
                            <div className="lg:w-[48%] w-full relative">
                                {/* Olive accent behind image */}
                                <div className="absolute -inset-3 bg-gradient-to-br from-[#6B7A3A]/30 to-[#1F2A44]/20 rounded-2xl -z-10" />
                                <div className="rounded-2xl overflow-hidden img-zoom-wrap shadow-2xl">
                                    <motion.img
                                        src="/wallpapers/planners.png"
                                        alt="Planners at work"
                                        className="w-full h-[26rem] object-cover"
                                        style={{ y: imgY }}
                                    />
                                </div>
                                {/* Gold accent bar */}
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#6B7A3A] to-[#C9A84C] opacity-80 -z-10" />
                            </div>
                        </FadeLeft>

                        <div className="lg:w-[52%] w-full flex flex-col justify-center">
                            <FadeUp>
                                <p className={`${garamond.className} text-[#1F2A44] xl:text-2xl text-xl leading-[1.8] mb-8`}>
                                    Through our work, our goal is to spark possibility, provoke ambition, and erase geographical boundaries. Drawing inspiration from Ibadan's rich urban fabric, we blend bold vision with rigorous craftsmanship to build spaces that define how people live and invest.
                                </p>
                            </FadeUp>
                            <FadeUp>
                                <a
                                    href={pageRoutes.projects}
                                    className="btn-shimmer text-white py-3 px-8 rounded-full font-semibold text-sm tracking-wide w-fit inline-block shadow-lg"
                                >
                                    Explore Projects
                                </a>
                            </FadeUp>
                        </div>
                    </div>

                    {/* Mission / Vision */}
                    <FadeUp>
                        <h3 className={`${montserrat.className} text-[#1F2A44] text-2xl font-semibold mb-6`}>
                            Our <em className="not-italic text-gradient-olive">Purpose</em>
                        </h3>
                    </FadeUp>
                    <div className="grid lg:grid-cols-2 gap-6">
                        {missionVision.map((item, i) => (
                            <MissionVisionCard key={item.accent} {...item} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Team ───────────────────────────────────────────── */}
            <TeamGrid />

            {/* ── Clients ────────────────────────────────────────── */}
            <OurClients />

            <FAQAccordion />
            <InvestmentSection />
        </MainLayout>
    )
}
