// components/services/ServiceHero.tsx
'use client'

import { CgMenuGridO } from "react-icons/cg"
import FadeUp from "@/ui/FadeUp"
import FadeRight from "@/ui/FadeRight"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
    weight: ['400', '600', '700'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

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
        <div className="relative h-[22rem] sm:h-[32rem] lg:h-[47rem] max-h-[47rem] overflow-hidden">
            <div className="absolute inset-0 bg-black/70 z-10"/>
            <img
                src={image}
                className="absolute inset-0 object-cover object-center w-full h-full"
            />

            {/* Centering wrapper */}
            <div className="absolute inset-0 z-20 flex items-end">
                <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 pb-[8%]">
                    <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md mb-4">
                        <CgMenuGridO className="size-4 text-zinc-200"/>
                        <p className="text-zinc-100/80 text-xs sm:text-sm">{category}</p>
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
                            <p className="text-zinc-200/90 text-sm sm:text-base lg:text-lg mb-5 max-w-[45rem]">
                                {description}
                            </p>
                        </FadeRight>
                    </div>
                </div>
            </div>
        </div>
    )
}