'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import FadeUp from "@/ui/FadeUp"
import { montserrat } from "@/lib/fonts"

export default function InvestmentSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
    const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-[#F5F3ED] px-4 sm:px-8 xl:px-20 py-16">

            <FadeUp>
                <div className="max-w-[1400px] m-auto">
                    <div className="relative rounded-3xl overflow-hidden">

                        {/* Parallax background image */}
                        <motion.div className="absolute inset-0" style={{ y: bgY }}>
                            <img
                                src="/wallpapers/mansion_b.png"
                                alt=""
                                className="w-full h-full object-cover scale-110 opacity-20"
                            />
                        </motion.div>

                        {/* Navy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1F2A44] via-[#1F2A44]/95 to-[#151d30]" />

                        {/* Decorative logo watermarks */}
                        <img src="/quantum_logo.png" className="absolute opacity-[0.06] lg:-bottom-[32%] -bottom-[50%] lg:-right-[10%] -right-[30%] -rotate-[38deg] w-[33rem] pointer-events-none select-none" aria-hidden />
                        <img src="/quantum_logo.png" className="absolute opacity-[0.06] lg:-top-[28%] -top-[35%] lg:-left-[18%] -left-[34%] rotate-[138deg] w-[33rem] pointer-events-none select-none" aria-hidden />

                        {/* Orb accent */}
                        <div className="orb absolute top-0 right-0 w-[350px] h-[350px] bg-[#6B7A3A]/20 pointer-events-none" />

                        {/* Gold vertical accent */}
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 xl:px-20 md:px-12 px-6 py-16 md:py-20">

                            <FadeUp>
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <div className="h-px w-10 bg-[#C9A84C]" />
                                    <p className={`${montserrat.className} text-[11px] font-bold text-[#C9A84C] tracking-[0.22em] uppercase`}>
                                        Investment Philosophy
                                    </p>
                                    <div className="h-px w-10 bg-[#C9A84C]" />
                                </div>
                            </FadeUp>

                            <FadeUp>
                                <h2 className={`${montserrat.className} text-center text-white font-semibold leading-[1.05] text-4xl md:text-5xl lg:text-6xl mb-6`}>
                                    A piece of land is<br />
                                    more <em className="not-italic text-gradient-gold">than gold.</em>
                                </h2>
                            </FadeUp>

                            <FadeUp>
                                <p className="mb-12 xl:max-w-[60%] max-w-[90%] mx-auto text-center text-zinc-400 text-sm md:text-base leading-[1.75]">
                                    Real estate isn't just property — it's legacy. We help you invest in
                                    spaces that appreciate in value, culture, and meaning for generations
                                    to come.
                                </p>
                            </FadeUp>

                            <FadeUp>
                                <div className="flex gap-4 justify-center flex-wrap">
                                    <a
                                        href="/contact"
                                        className="btn-shimmer text-white py-3 px-8 rounded-full font-semibold text-sm tracking-wide shadow-lg"
                                    >
                                        Start Your Journey
                                    </a>
                                    <a
                                        href="/projects"
                                        className="py-3 px-8 border border-white/20 text-zinc-200 hover:border-[#C9A84C] hover:text-[#C9A84C] rounded-full text-sm font-medium transition-all duration-300"
                                    >
                                        View Projects
                                    </a>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </FadeUp>
        </section>
    )
}
