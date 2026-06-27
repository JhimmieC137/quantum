'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { montserrat, garamond } from "@/lib/fonts"
import FadeUp from "@/ui/FadeUp"

export default function InvestmentSection() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"])

    return (
        <section ref={ref} className="w-full bg-[#b91c1c] relative overflow-hidden">

            {/* Parallax texture image */}
            <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
                <img
                    src="/wallpapers/mansion_b.png"
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover object-center scale-110 opacity-10 mix-blend-luminosity"
                />
            </motion.div>

            {/* Decorative logo watermarks */}
            <img
                src="/quantum_logo.png"
                className="absolute opacity-[0.07] -bottom-[30%] -right-[8%] -rotate-[20deg] w-[28rem] pointer-events-none select-none"
                aria-hidden
            />
            <img
                src="/quantum_logo.png"
                className="absolute opacity-[0.07] -top-[25%] -left-[14%] rotate-[130deg] w-[28rem] pointer-events-none select-none"
                aria-hidden
            />

            <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-24 lg:py-32 text-center">

                <FadeUp>
                    <div className={`${montserrat.className} flex items-center justify-center gap-4 mb-8`}>
                        <div className="w-8 h-px bg-white/50" />
                        <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-white/70">
                            (Investment Philosophy)
                        </p>
                        <div className="w-8 h-px bg-white/50" />
                    </div>
                </FadeUp>

                <FadeUp>
                    <h2
                        className={`${garamond.className} text-white font-normal leading-none tracking-tight mx-auto`}
                        style={{ fontSize: "clamp(3rem, 7vw, 8rem)", maxWidth: "900px" }}
                    >
                        A piece of land<br />
                        is more than{" "}
                        <em className="italic text-[#FAF9F6]/80">gold.</em>
                    </h2>
                </FadeUp>

                <FadeUp>
                    <p className={`${garamond.className} text-white/70 text-xl md:text-2xl leading-[1.7] mx-auto mt-8 mb-12`} style={{ maxWidth: "640px" }}>
                        Real estate isn&apos;t just property — it&apos;s legacy.
                        We help you invest in spaces that appreciate in value, culture, and meaning for generations to come.
                    </p>
                </FadeUp>

                <FadeUp>
                    <div className="flex justify-center flex-wrap gap-4">
                        <a
                            href="/contact"
                            className={`${montserrat.className} bg-white text-[#b91c1c] hover:bg-white/90 transition-colors py-3 px-8 rounded-full text-[11px] font-bold tracking-widest uppercase`}
                        >
                            Start Your Journey
                        </a>
                        <a
                            href="/projects"
                            className={`${montserrat.className} btn-ghost-white py-3 px-8 rounded-full text-[11px] font-bold tracking-widest uppercase`}
                        >
                            View Projects
                        </a>
                    </div>
                </FadeUp>
            </div>
        </section>
    )
}
