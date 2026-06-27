'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { montserrat, garamond } from "@/lib/fonts";
import FadeUp from "@/ui/FadeUp";
import FadeLeft from "@/ui/FadeLeft";

const stats = [
    { value: "9+",   label: "Active estates" },
    { value: "58+",  label: "Plots sold" },
    { value: "5K+",  label: "Happy clients" },
    { value: "100%", label: "Verified titles" },
]

export default function Introduction() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section ref={ref} className="w-full bg-[#FAF9F6] overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-24 lg:py-32">

                {/* Section label */}
                <FadeUp>
                    <p className={`${montserrat.className} section-label mb-16`}>(About)</p>
                </FadeUp>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left: large editorial quote */}
                    <div className="lg:w-[55%]">
                        <FadeLeft>
                            <h2
                                className={`${garamond.className} text-[#111110] font-normal leading-[1.12] tracking-tight`}
                                style={{ fontSize: "clamp(2rem, 3.8vw, 4rem)" }}
                            >
                                There is something unforgettable about watching a vision rise from the ground up — the excitement of possibility, the beauty of thoughtful design, the confidence that comes from knowing every detail was created with intention.
                            </h2>
                        </FadeLeft>

                        {/* Image with parallax */}
                        <FadeUp>
                            <div className="mt-14 relative overflow-hidden rounded-2xl img-zoom h-[320px] sm:h-[380px]">
                                <motion.img
                                    src="/wallpapers/planners.png"
                                    alt="Quantum Homes team at work"
                                    className="w-full h-full object-cover"
                                    style={{ y: imgY }}
                                />
                                {/* Red corner accent */}
                                <div className="absolute bottom-0 left-0 w-32 h-1 bg-[#b91c1c]" />
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right: copy + stats */}
                    <div className="lg:w-[45%] lg:pt-10 flex flex-col gap-12">

                        <FadeUp>
                            <p className={`${garamond.className} text-[#555550] text-xl leading-[1.8]`}>
                                That feeling is what defines <strong className="text-[#111110]">Quantum Homes &amp; Property.</strong>
                                <br /><br />
                                We believe exceptional real estate should do more than fill spaces — it should spark emotion, create opportunity, and leave a lasting impression on Ibadan&apos;s skyline and in the lives of our clients.
                            </p>
                        </FadeUp>

                        {/* Stats grid */}
                        <FadeUp>
                            <div className="grid grid-cols-2 gap-0">
                                {stats.map((s, i) => (
                                    <div
                                        key={s.label}
                                        className={`py-8 ${i % 2 === 0 ? "pr-8 border-r border-[#111110]/10" : "pl-8"} ${i < 2 ? "border-b border-[#111110]/10" : ""}`}
                                    >
                                        <p className={`${montserrat.className} stat-num text-[#b91c1c] mb-1`}>{s.value}</p>
                                        <p className={`${montserrat.className} text-[10px] text-[#888880] tracking-[0.16em] uppercase mt-1`}>{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeUp>

                        {/* CTA link */}
                        <FadeUp>
                            <a
                                href="/about"
                                className={`${montserrat.className} inline-flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#b91c1c] group`}
                            >
                                Our Story
                                <span className="w-8 h-px bg-[#b91c1c] group-hover:w-14 transition-all duration-300" />
                            </a>
                        </FadeUp>
                    </div>
                </div>
            </div>

            {/* Bottom rule */}
            <div className="rule max-w-[1400px] mx-auto" />
        </section>
    )
}
