'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { LayoutGrid } from "lucide-react"
import FadeUp from "@/ui/FadeUp"
import FadeRight from "@/ui/FadeRight"
import { montserrat, garamond } from "@/lib/fonts"

export default function ServiceHero({
    image,
    category,
    titleWhite,
    titleAmber,
    description,
}: {
    image: string
    category: string
    titleWhite: string
    titleAmber: string
    description: string
}) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"])
    const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

    return (
        <div ref={ref} className="relative h-[30rem] sm:h-[34rem] lg:h-[50rem] overflow-hidden bg-[#0e1520]">

            {/* Parallax background */}
            <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY }}>
                <img
                    src={image}
                    className="absolute inset-0 object-cover object-center w-full h-full scale-110"
                    alt={`${titleWhite} ${titleAmber}`}
                />
            </motion.div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e1520]/90 via-[#1F2A44]/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1520]/80 via-transparent to-transparent z-10" />

            {/* Olive accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-transparent via-[#6B7A3A] to-transparent z-20 opacity-80" />

            {/* Decorative orb */}
            <div className="orb absolute top-0 right-0 w-[400px] h-[400px] bg-[#6B7A3A]/15 pointer-events-none z-10" />

            {/* Content */}
            <motion.div className="absolute inset-0 z-20 flex items-end" style={{ opacity: textOpacity }}>
                <div className="w-full max-w-7xl mx-auto px-6 pb-[8%]">
                    <div className="w-fit flex gap-x-2 justify-center items-center p-2.5 border border-[#C9A84C]/30 rounded-full bg-[#C9A84C]/10 mb-6 backdrop-blur-sm">
                        <LayoutGrid size={12} className="text-[#C9A84C]" />
                        <p className={`${montserrat.className} text-[#C9A84C] text-[10px] tracking-[0.22em] uppercase font-bold`}>
                            {category}
                        </p>
                    </div>

                    <FadeUp>
                        <h1 className={`${montserrat.className} text-zinc-100 text-3xl sm:text-5xl lg:text-7xl font-semibold my-4 sm:my-6 max-w-[58rem] leading-tight`}>
                            {titleWhite}<br />
                            <em className="not-italic text-gradient-gold">{titleAmber}</em>
                        </h1>
                    </FadeUp>

                    <div className="flex gap-x-6">
                        <div className="bg-gradient-to-b from-[#C9A84C] to-[#6B7A3A] w-[4px] shrink-0 rounded-full" />
                        <FadeRight>
                            <p className={`${garamond.className} text-zinc-300/90 text-sm sm:text-base lg:text-lg mb-5 max-w-[48rem] leading-relaxed`}>
                                {description}
                            </p>
                        </FadeRight>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
