"use client"

import { motion } from "motion/react"
import { montserrat, garamond } from "@/lib/fonts"
import { availableProjects } from "@/data/projects"
import { HiArrowRight } from "react-icons/hi"
import FadeUp from "@/ui/FadeUp"

function ProjectCard({
    p,
    className = "",
    index,
}: {
    p: typeof availableProjects[0]
    className?: string
    index: number
}) {
    return (
        <motion.a
            href="/projects"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.1 }}
            className={`group relative overflow-hidden block img-zoom rounded-2xl ${className}`}
        >
            {/* Background image */}
            <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover bg-img"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/90 via-[#111110]/20 to-transparent" />

            {/* Status tag */}
            <div className="absolute top-5 left-5">
                <span className={`${montserrat.className} text-[9px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full ${
                    p.tag === "Completed" ? "bg-[#b91c1c] text-white" :
                    p.tag === "Ongoing"   ? "bg-white/15 text-white backdrop-blur-sm border border-white/20" :
                    "bg-[#6B7A3A] text-white"
                }`}>
                    {p.tag}
                </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className={`${montserrat.className} text-[9px] tracking-[0.18em] uppercase text-white/50 mb-2`}>
                    {p.location}
                </p>
                <h3 className={`${montserrat.className} text-white font-semibold text-lg leading-snug mb-1`}>
                    {p.title}
                </h3>
                <p className={`${garamond.className} text-white/50 text-sm`}>{p.type}</p>

                {/* Hover CTA */}
                <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-350">
                    <span className={`${montserrat.className} text-[#b91c1c] text-[10px] font-bold tracking-[0.16em] uppercase`}>
                        View Project
                    </span>
                    <HiArrowRight className="size-3.5 text-[#b91c1c]" />
                </div>
            </div>

            {/* Red corner accent */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[#b91c1c] border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
    )
}

export default function Projects() {
    return (
        <section className="w-full bg-[#FAF9F6] overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-24 lg:py-32">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
                    <div>
                        <FadeUp>
                            <p className={`${montserrat.className} section-label mb-6`}>(Portfolio)</p>
                        </FadeUp>
                        <FadeUp>
                            <h2
                                className={`${garamond.className} text-[#111110] font-normal leading-none tracking-tight`}
                                style={{ fontSize: "clamp(2.6rem, 5vw, 5.5rem)" }}
                            >
                                Our Favourite <em className="italic text-[#b91c1c]">Projects</em>
                            </h2>
                        </FadeUp>
                    </div>

                    <FadeUp>
                        <a
                            href="/projects"
                            className={`${montserrat.className} inline-flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#111110] group shrink-0`}
                        >
                            See All Projects
                            <span className="w-8 h-px bg-[#111110] group-hover:w-14 transition-all duration-300 group-hover:bg-[#b91c1c]" />
                        </a>
                    </FadeUp>
                </div>

                {/* Bento-style asymmetric grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

                    {/* Large hero card */}
                    <div className="lg:col-span-7">
                        <ProjectCard p={availableProjects[0]} className="h-[420px] sm:h-[520px] lg:h-[580px]" index={0} />
                    </div>

                    {/* Right column — two stacked */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <ProjectCard p={availableProjects[1]} className="h-[260px] sm:h-[280px]" index={1} />
                        <ProjectCard p={availableProjects[2]} className="h-[260px] sm:h-[280px]" index={2} />
                    </div>

                    {/* Bottom row — three equal */}
                    <div className="lg:col-span-4">
                        <ProjectCard p={availableProjects[3]} className="h-[240px]" index={3} />
                    </div>
                    <div className="lg:col-span-4">
                        <ProjectCard p={availableProjects[4]} className="h-[240px]" index={4} />
                    </div>
                    <div className="lg:col-span-4">
                        <ProjectCard p={availableProjects[5]} className="h-[240px]" index={5} />
                    </div>
                </div>
            </div>

            <div className="rule max-w-[1400px] mx-auto" />
        </section>
    )
}
