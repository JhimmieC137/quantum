// components/services/FeatureCard.tsx
'use client'

import { montserrat, garamond } from "@/lib/fonts"
import { ReactNode } from "react"

export default function FeatureCard({
    icon,
    titleWhite,
    titleAmber,
    description,
}: {
    icon: ReactNode
    titleWhite: string
    titleAmber: string
    description: string
}) {
    return (
        <div className="glass glass-hover rounded-sm p-6 sm:p-7 py-8 sm:py-10 relative h-full">
            {/* Top gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6B7A3A] to-[#C9A84C] rounded-t-sm" />

            {/* Icon */}
            <div className="mb-5 text-[#C9A84C] [&>svg]:size-7">
                {icon}
            </div>
            <p className={`${montserrat.className} text-xl sm:text-2xl font-semibold text-zinc-100 mb-4 sm:mb-5`}>
                {titleWhite} <em className="not-italic text-gradient-gold">{titleAmber}</em>
            </p>
            <p className={`${garamond.className} text-base sm:text-lg text-zinc-400`}>
                {description}
            </p>
        </div>
    )
}
