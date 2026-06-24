'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { montserrat } from "@/lib/fonts"

interface HeroBannerProps {
  /** Background image path e.g. "/wallpapers/construction_1.jpg" */
  image: string;
  /** Main hero heading — plain portion */
  title: string;
  /** Highlighted (amber italic) portion of the heading */
  titleAccent: string;
}

export default function HeroBanner({
  image,
  title,
  titleAccent,
}: HeroBannerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const bgY = useTransform(scrollYProgress, [0, 1], ["-22%", "22%"])

    return (
        <div ref={ref} className="relative h-[14rem] sm:h-[18rem] lg:h-[23rem] overflow-hidden bg-zinc-950">
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ y: bgY }}
            >
                <img
                    src={image}
                    alt={`${title} ${titleAccent}`}
                    className="absolute inset-0 object-cover object-center w-full h-full"
                />
            </motion.div>
            <div className="absolute inset-0 bg-zinc-950/82 z-10" />
            <p className={`${montserrat.className} absolute inset-0 flex items-center justify-center text-zinc-200 text-5xl sm:text-7xl lg:text-[7.5rem] font-semibold z-20`}>
                {title}
                <span className="text-amber-500 italic ml-4">{titleAccent}</span>
            </p>
        </div>
    )
}
