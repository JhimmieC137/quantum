'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import FadeLeft from "@/ui/FadeLeft"
import FadeUp from "@/ui/FadeUp"
import { montserrat } from "@/lib/fonts"
import { pageRoutes } from "@/data/routes"
import { CiEdit } from "react-icons/ci"
import { GrUserManager } from "react-icons/gr"
import { HiOutlineBuildingOffice } from "react-icons/hi2"
import { LuLandPlot } from "react-icons/lu"
import { HiArrowRight } from "react-icons/hi"

const services = [
    {
        image: "/services/land_sales_narrow.jpg",
        title: "Land Sales",
        icon: LuLandPlot,
        description: "Our land sales service focuses on providing clients with genuine, well-verified lands in both prime and fast-developing locations.",
        link: pageRoutes.services.landSales,
    },
    {
        image: "/services/signing-papers.jpg",
        title: "Title Documentation & Legal Support",
        icon: CiEdit,
        description: "Our Title Documentation & Legal Support service is designed to protect our clients by ensuring that every property acquired is authentic, legally compliant, and properly registered.",
        link: pageRoutes.services.legalSupport,
    },
    {
        image: "/services/new-building.jpg",
        title: "Construction & Development",
        icon: HiOutlineBuildingOffice,
        description: "Our Construction and Development service is tailored for individuals, families, investors, and organizations who want to bring their real estate visions to life.",
        link: pageRoutes.services.construction,
    },
    {
        image: "/services/agents-in-meeting.jpg",
        title: "Real Estate Investment Advisory",
        icon: GrUserManager,
        description: "Our Investment Advisory service guides individuals, families, and corporate organizations in identifying, analyzing, and investing in high-value real estate opportunities.",
        link: pageRoutes.services.realEstateAdvisory,
    },
]

function ServiceCard({ svc, index }: { svc: typeof services[0], index: number }) {
    const Icon = svc.icon
    return (
        <motion.a
            href={svc.link}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex items-start gap-5 p-6 rounded-2xl border border-white/8 hover:border-[#6B7A3A]/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
        >
            {/* Icon box */}
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#6B7A3A]/20 flex items-center justify-center group-hover:bg-[#6B7A3A]/35 transition-colors duration-300">
                <Icon className="size-5 text-[#8a9c4a]" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
                <h3 className={`${montserrat.className} text-zinc-100 font-semibold text-lg mb-2 group-hover:text-[#C9A84C] transition-colors duration-200`}>
                    {svc.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{svc.description}</p>
            </div>

            {/* Arrow */}
            <HiArrowRight className="shrink-0 size-5 text-[#C9A84C] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 mt-1" />
        </motion.a>
    )
}

export default function OurServices() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
    const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

    return (
        <section ref={sectionRef} className="w-full bg-[#151d30] relative overflow-hidden">

            {/* Parallax decorative image */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: imgY }}
            >
                <img
                    src="/wallpapers/dwg_img_2.png"
                    className="absolute opacity-[0.04] -top-1/3 -right-1/4 w-[65%] select-none"
                    aria-hidden
                />
            </motion.div>

            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-transparent via-[#6B7A3A] to-transparent opacity-60" />

            <div className="w-full 2xl:max-w-[1400px] lg:max-w-[1200px] m-auto px-5 py-24 relative z-10">

                {/* Section header */}
                <div className="flex xl:flex-row flex-col gap-8 mb-16">
                    <div className="xl:w-[38%] w-full">
                        <FadeLeft>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-px w-10 bg-[#C9A84C]" />
                                <p className={`${montserrat.className} text-[11px] font-bold text-[#C9A84C] tracking-[0.22em] uppercase`}>
                                    What We Do
                                </p>
                            </div>
                        </FadeLeft>
                        <FadeLeft>
                            <h2 className={`${montserrat.className} text-zinc-100 text-4xl xl:text-5xl font-semibold leading-tight mb-6`}>
                                Our <em className="not-italic text-gradient-olive">Services</em>
                            </h2>
                        </FadeLeft>
                        <FadeUp>
                            <p className="text-zinc-400 text-sm leading-relaxed xl:max-w-[28rem]">
                                We handle the full lifecycle — from the first survey peg in the ground to the final key handover. Our teams bring deep technical expertise to every discipline.
                            </p>
                        </FadeUp>

                        {/* Parallax feature image */}
                        <FadeUp>
                            <div className="mt-10 rounded-2xl overflow-hidden img-zoom-wrap">
                                <img
                                    src="/services/professionals-preparing-presentation.jpg"
                                    alt="Our team"
                                    className="w-full h-52 object-cover"
                                />
                            </div>
                        </FadeUp>
                    </div>

                    {/* Services list */}
                    <div className="xl:w-[62%] w-full flex flex-col gap-3">
                        {services.map((svc, i) => (
                            <ServiceCard key={svc.title} svc={svc} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
