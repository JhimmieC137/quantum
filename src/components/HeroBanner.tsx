'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { montserrat } from "@/lib/fonts"

interface HeroBannerProps {
    image: string
    title: string
    titleAccent: string
}

export default function HeroBanner({ image, title, titleAccent }: HeroBannerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const bgY = useTransform(scrollYProgress, [0, 1], ["-22%", "22%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

    return (
        <div ref={ref} className="relative h-[14rem] sm:h-[20rem] lg:h-[26rem] overflow-hidden bg-[#0e1520]">

            {/* Parallax background */}
            <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY }}>
                <img
                    src={image}
                    alt={`${title} ${titleAccent}`}
                    className="absolute inset-0 object-cover object-center w-full h-full scale-110"
                />
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e1520]/85 via-[#1F2A44]/60 to-[#0e1520]/75 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1520]/60 via-transparent to-transparent z-10" />

            {/* Decorative gold accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent z-20 opacity-80" />

            {/* Heading */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center z-20 px-6"
                style={{ y: textY }}
            >
                <h1 className={`${montserrat.className} text-zinc-100 text-5xl sm:text-7xl lg:text-[7.5rem] font-semibold tracking-tight text-center leading-none`}>
                    {title}
                    <em className="not-italic ml-4 text-gradient-gold">{titleAccent}</em>
                </h1>
            </motion.div>

            {/* Bottom olive divider line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B7A3A]/60 to-transparent z-20" />
        </div>
    )
}
