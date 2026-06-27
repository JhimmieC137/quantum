"use client"

import { motion } from "motion/react"
import FadeUp from "@/ui/FadeUp"
import { montserrat } from "@/lib/fonts"
import { availableProjects } from "@/data/projects"
import { HiArrowRight } from "react-icons/hi"

function ProjectCard({ p, wide, index }: { p: typeof availableProjects[0], wide?: boolean, index: number }) {
    return (
        <motion.a
            href="/projects"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative rounded-2xl overflow-hidden block img-zoom-wrap ${wide ? 'h-[380px]' : 'h-[260px]'}`}
        >
            {/* Background image with zoom */}
            <div
                className="bg-img absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${p.img}')` }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1520]/90 via-[#0e1520]/30 to-transparent group-hover:from-[#0e1520]/95 transition-all duration-500" />

            {/* Tag badge */}
            <div className="absolute top-4 left-4">
                <span className="bg-[#6B7A3A] text-white text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full">
                    {p.tag}
                </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-zinc-400 text-[10px] tracking-[0.12em] uppercase mb-1.5">{p.location}</p>
                <h3 className={`${montserrat.className} text-white font-semibold ${wide ? 'text-2xl' : 'text-lg'} leading-snug mb-1`}>
                    {p.title}
                </h3>
                <p className="text-zinc-400 text-xs">{p.type}</p>

                {/* Hover CTA */}
                <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-[#C9A84C] text-xs font-bold tracking-[0.1em] uppercase">View Project</span>
                    <HiArrowRight className="size-3.5 text-[#C9A84C]" />
                </div>
            </div>
        </motion.a>
    )
}

export default function Projects() {
    return (
        <section className="w-full py-28 bg-[#0e1520] relative overflow-hidden">

            {/* Orb accent */}
            <div className="orb absolute top-10 right-0 w-[400px] h-[400px] bg-[#6B7A3A]/10 pointer-events-none" />

            <div className="w-full 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] px-5 m-auto relative z-10">

                {/* Header */}
                <div className="flex lg:flex-row flex-col justify-between lg:items-end gap-6 mb-14">
                    <div>
                        <FadeUp>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px w-10 bg-[#C9A84C]" />
                                <p className={`${montserrat.className} text-[11px] font-bold text-[#C9A84C] tracking-[0.22em] uppercase`}>
                                    Portfolio
                                </p>
                            </div>
                        </FadeUp>
                        <FadeUp>
                            <h2 className={`${montserrat.className} text-zinc-100 text-4xl xl:text-5xl font-semibold`}>
                                Our Favourite{" "}
                                <em className="not-italic text-gradient-gold">Projects</em>
                            </h2>
                        </FadeUp>
                        <FadeUp>
                            <p className="text-zinc-400 text-sm leading-relaxed mt-4 max-w-[56rem]">
                                Step into our finest real estate offerings — where each property reflects superior construction standards, contemporary design, and carefully chosen locations.
                            </p>
                        </FadeUp>
                    </div>

                    <FadeUp>
                        <a
                            href="/projects"
                            className="shrink-0 flex items-center gap-2 border border-white/20 text-zinc-200 hover:border-[#6B7A3A] hover:text-[#C9A84C] px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200"
                        >
                            See All Projects
                            <HiArrowRight className="size-4" />
                        </a>
                    </FadeUp>
                </div>

                {/* Top row (2 wide) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                    <ProjectCard p={availableProjects[0]} wide index={0} />
                    <ProjectCard p={availableProjects[1]} wide index={1} />
                </div>

                {/* Bottom row (3 shorter) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <ProjectCard p={availableProjects[2]} index={2} />
                    <ProjectCard p={availableProjects[3]} index={3} />
                    <ProjectCard p={availableProjects[4]} index={4} />
                </div>
            </div>
        </section>
    )
}
