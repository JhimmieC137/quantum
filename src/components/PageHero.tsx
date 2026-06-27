'use client'

import { motion } from "motion/react"
import FadeRight from "@/ui/FadeRight"
import FadeUp from "@/ui/FadeUp"
import { montserrat, garamond } from "@/lib/fonts"

interface PageHeroProps {
    CTAMain?: string
    CTAAccent?: string
    paragraphs: string[]
}

export default function PageHero({ CTAMain, CTAAccent, paragraphs }: PageHeroProps) {
    return (
        <div className="bg-[#1F2A44] relative overflow-hidden">

            {/* Decorative orb */}
            <div className="orb absolute top-0 right-0 w-[400px] h-[400px] bg-[#6B7A3A]/10 pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#C9A84C]/60 to-transparent" />

            <div className="xl:max-w-[1400px] lg:max-w-[1200px] md:max-w-full m-auto py-20 px-6 relative z-10">

                {(CTAMain || CTAAccent) && (
                    <FadeUp>
                        <h2 className={`${montserrat.className} text-zinc-100 text-4xl lg:text-5xl font-semibold mb-8 leading-tight`}>
                            {CTAMain}{" "}
                            <em className="not-italic text-gradient-gold">{CTAAccent}</em>
                        </h2>
                    </FadeUp>
                )}

                {/* Gold bar + paragraphs */}
                <div className="flex lg:gap-x-8 gap-x-5">
                    <div className="bg-gradient-to-b from-[#C9A84C] to-[#6B7A3A] lg:w-[4px] w-[3px] flex-shrink-0 rounded-full" />

                    <FadeRight>
                        <div>
                            {paragraphs.map((text, i) => (
                                <p
                                    key={i}
                                    className={`${garamond.className} text-zinc-300/90 lg:text-3xl md:text-2xl text-xl lg:pr-10 p-0 mb-5 max-w-[80rem] leading-relaxed`}
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                    </FadeRight>
                </div>
            </div>
        </div>
    )
}
