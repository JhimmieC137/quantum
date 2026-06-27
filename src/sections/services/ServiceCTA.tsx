// components/services/ServiceCTA.tsx
'use client'

import { montserrat, garamond } from "@/lib/fonts"

export default function ServiceCTA({
    headingWhite,
    headingAmber,
    subtext,
    buttonLabel,
    href = "/contact",
}: {
    headingWhite: string
    headingAmber: string
    subtext: string
    buttonLabel: string
    href?: string
}) {
    return (
        <div className="w-full mt-16 sm:mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl m-auto glass rounded-sm flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 sm:px-10 lg:px-14 py-8 sm:py-10 gap-8 sm:gap-6">
                <div className="w-full sm:max-w-[60%]">
                    <p className={`${montserrat.className} text-zinc-200 text-2xl sm:text-4xl lg:text-[3rem] font-semibold leading-tight sm:leading-[3.5rem] mb-3 sm:mb-4`}>
                        {headingWhite} <em className="not-italic text-gradient-gold">{headingAmber}</em>
                    </p>
                    <p className={`${garamond.className} text-zinc-400 text-base sm:text-lg lg:text-xl`}>
                        {subtext}
                    </p>
                </div>

                <div className="w-full sm:w-auto flex sm:justify-end">
                    <a href={href}>
                        <div className={`${montserrat.className} w-fit py-3 px-8 rounded-full btn-shimmer text-white text-[10px] tracking-[0.25em] uppercase font-semibold transition-colors duration-200 cursor-pointer`}>
                            {buttonLabel}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
