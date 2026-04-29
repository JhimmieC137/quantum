// components/services/ServiceSectionHeading.tsx
'use client'

import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
    weight: ['600'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export default function ServiceSectionHeading({
    white,
    amber,
}: {
    white: string
    amber: string
}) {
    return (
        <div className="w-full mt-24 sm:mt-32 lg:mt-[15rem] px-4 sm:px-6 lg:px-8">
            <p className={`${montserrat.className} text-center text-zinc-900 text-4xl sm:text-5xl lg:text-7xl font-semibold max-w-[50rem] m-auto leading-tight`}>
                {white}<br/>
                <span className="text-amber-500 italic">{amber}</span>
            </p>
        </div>
    )
}