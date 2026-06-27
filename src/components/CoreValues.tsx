'use client'

import { motion } from "motion/react"
import FadeUp from "@/ui/FadeUp"
import { montserrat } from "@/lib/fonts"

const VALUES = [
    {
        num: "01",
        title: "Transparency",
        desc: "Every transaction we handle is clear, straightforward, and honest. We provide clients with accurate information, verified properties, and open communication at every stage.",
        icon: "◈",
    },
    {
        num: "02",
        title: "Integrity",
        desc: "We uphold the highest ethical standards in our dealings, ensuring that our clients' trust is never compromised. Integrity is the foundation on which we build lasting relationships.",
        icon: "◆",
    },
    {
        num: "03",
        title: "Reliability",
        desc: "Our clients can count on us to consistently deliver on our promises. We ensure that every commitment made is fulfilled with professionalism, dedication, and excellence.",
        icon: "◉",
    },
]

const TAGS = ["Land Acquisition", "Construction", "Documentation", "Investment Advisory", "Estate Development", "Legal Support"]

export default function CoreValues() {
    return (
        <section className="w-full py-28 bg-[#F5F3ED] relative overflow-hidden">

            {/* Blueprint watermark */}
            <img
                src="/wallpapers/dwg_img_2.png"
                className="absolute opacity-[0.05] -top-[60%] -left-[15%] w-[70%] pointer-events-none select-none"
                aria-hidden
            />

            <div className="w-full 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] relative z-10 m-auto px-5">

                {/* Header */}
                <div className="flex lg:flex-row flex-col justify-between lg:items-end gap-8 mb-16">
                    <div>
                        <FadeUp>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px w-10 bg-[#6B7A3A]" />
                                <p className={`${montserrat.className} text-[11px] font-bold text-[#6B7A3A] tracking-[0.22em] uppercase`}>
                                    What We Stand For
                                </p>
                            </div>
                        </FadeUp>
                        <FadeUp>
                            <h2 className={`${montserrat.className} text-[#1F2A44] text-4xl xl:text-5xl font-semibold`}>
                                Our Core <em className="not-italic text-gradient-gold">Values</em>
                            </h2>
                        </FadeUp>
                    </div>
                    <FadeUp>
                        <p className="text-zinc-500 text-sm leading-relaxed lg:max-w-[360px] lg:text-right">
                            Through these values, we are committed to making the dream of homeownership a reality — providing affordable, secure, and sustainable housing solutions.
                        </p>
                    </FadeUp>
                </div>

                {/* Value cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {VALUES.map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className="group relative bg-white rounded-2xl border border-[#E0DDD4] p-8 card-lift overflow-hidden"
                        >
                            {/* Top accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#6B7A3A] to-[#C9A84C]" />

                            {/* Ghost number */}
                            <span className={`${montserrat.className} text-[56px] font-extrabold leading-none text-[#F0ECE4] select-none`}>
                                {v.num}
                            </span>

                            {/* Title */}
                            <h3 className={`${montserrat.className} mt-4 mb-3 text-xl font-semibold text-[#1F2A44] group-hover:text-[#6B7A3A] transition-colors duration-300`}>
                                {v.title}
                            </h3>

                            {/* Description */}
                            <p className="text-zinc-500 text-sm leading-[1.75]">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tags */}
                <FadeUp>
                    <div className="flex flex-wrap gap-3 mt-10">
                        {TAGS.map((tag) => (
                            <span
                                key={tag}
                                className="flex items-center gap-2 text-sm text-[#1F2A44] font-medium px-5 py-2 rounded-full border border-[#C8C4BA] hover:border-[#6B7A3A] hover:text-[#6B7A3A] transition-all duration-200 cursor-default"
                            >
                                <span className="size-2 rounded-full bg-[#6B7A3A]" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </FadeUp>

                {/* Quote bar */}
                <FadeUp>
                    <div className="mt-12 relative rounded-2xl overflow-hidden h-44">
                        <img
                            src="/wallpapers/female-engineers-working.jpg"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-[#1F2A44]/80" />
                        <div className="relative z-10 h-full flex items-center justify-center px-8">
                            <p className={`${montserrat.className} text-white font-semibold text-center text-xl md:text-2xl xl:text-3xl italic leading-snug max-w-[800px]`}>
                                "Building spaces where luxury meets purpose, and comfort meets lasting value."
                            </p>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    )
}
