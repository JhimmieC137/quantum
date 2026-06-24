// components/services/ServiceSectionHeading.tsx
'use client'

import { montserrat } from "@/lib/fonts"

export default function ServiceSectionHeading({
    white,
    amber,
}: {
    white: string
    amber: string
}) {
    return (
        <div className="w-full mt-16 sm:mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
            <p className={`${montserrat.className} text-center text-zinc-200 text-4xl sm:text-5xl lg:text-7xl font-semibold max-w-[50rem] m-auto leading-tight`}>
                {white}<br/>
                <span className="text-amber-400 italic">{amber}</span>
            </p>
        </div>
    )
}
