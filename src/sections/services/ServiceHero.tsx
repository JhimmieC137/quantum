// components/services/ServiceHero.tsx
'use client'

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
    return (
        <div className="relative h-[30rem] sm:h-[32rem] lg:h-[47rem] max-h-[47rem] overflow-hidden bg-zinc-950">
            <div className="absolute inset-0 bg-zinc-950/72 z-10"/>
            <img
                src={image}
                className="absolute inset-0 object-cover object-center w-full h-full"
                alt={`${titleWhite} ${titleAmber}`}
            />

            {/* Centering wrapper */}
            <div className="absolute inset-0 z-20 flex items-end">
                <div className="w-full max-w-7xl mx-auto px-6 pb-[8%]">
                    <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-white/20 rounded-sm bg-transparent mb-4">
                        <LayoutGrid size={14} className="text-zinc-300"/>
                        <p className={`${montserrat.className} text-zinc-300/80 text-[10px] tracking-[0.2em] uppercase`}>{category}</p>
                    </div>

                    <FadeUp>
                        <p className={`${montserrat.className} text-zinc-200 text-3xl sm:text-5xl lg:text-7xl font-semibold my-4 sm:my-7 max-w-[58rem] leading-tight`}>
                            {titleWhite}<br/>
                            <span className="text-amber-300 italic">{titleAmber}</span>
                        </p>
                    </FadeUp>

                    <div className="flex gap-x-5">
                        <div className="bg-amber-400 p-[3px] max-w-[10px] shrink-0 z-20"/>
                        <FadeRight>
                            <p className={`${garamond.className} text-zinc-300/90 text-sm sm:text-base lg:text-lg mb-5 max-w-[45rem]`}>
                                {description}
                            </p>
                        </FadeRight>
                    </div>
                </div>
            </div>
        </div>
    )
}
