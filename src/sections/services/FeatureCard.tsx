// components/services/FeatureCard.tsx
'use client'

import { Montserrat } from "next/font/google"
import { ReactNode } from "react"

const montserrat = Montserrat({
    weight: ['600'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

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
        <div className="relative mt-8 sm:mt-10">
            <div className="p-[2px] bg-gradient-to-br from-red-700 via-amber-400 to-transparent rounded-[1.7rem] overflow-hidden relative h-full">
                <div className="bg-[#F4F2EC] p-6 sm:p-7 py-8 sm:py-10 rounded-[1.5rem] relative h-full">
                    <p className={`${montserrat.className} text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-900 mb-4 sm:mb-5`}>
                        {titleWhite} <span className="text-amber-400 italic">{titleAmber}</span>
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl text-zinc-900">
                        {description}
                    </p>
                </div>
            </div>
            <div className="absolute -top-4 sm:-top-[10%] left-3 sm:-left-[8%] bg-red-700 rounded-full flex justify-center items-center p-3 sm:p-4">
                <span className="text-zinc-200 [&>svg]:size-6 sm:[&>svg]:size-10">
                    {icon}
                </span>
            </div>
        </div>
    )
}