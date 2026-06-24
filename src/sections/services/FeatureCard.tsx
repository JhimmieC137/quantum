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
            {/* Icon */}
            <div className="mb-5 text-amber-400 [&>svg]:size-7">
                {icon}
            </div>
            <p className={`${montserrat.className} text-xl sm:text-2xl font-semibold text-zinc-100 mb-4 sm:mb-5`}>
                {titleWhite} <span className="text-amber-400 italic">{titleAmber}</span>
            </p>
            <p className={`${garamond.className} text-base sm:text-lg text-zinc-400`}>
                {description}
            </p>
        </div>
    )
}
