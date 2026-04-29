// components/services/ServiceCTA.tsx
'use client'

import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
    weight: ['400', '600'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

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
        <div className="w-full mt-24 sm:mt-32 lg:mt-[15rem] px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] m-auto flex flex-col sm:flex-row justify-between items-start sm:items-center bg-red-700 px-6 sm:px-10 lg:px-14 py-8 sm:py-10 rounded-2xl sm:rounded-3xl gap-8 sm:gap-6">
                <div className="w-full sm:max-w-[60%]">
                    <p className={`${montserrat.className} text-zinc-200 text-2xl sm:text-4xl lg:text-[3rem] font-semibold leading-tight sm:leading-[3.5rem] mb-3 sm:mb-4`}>
                        {headingWhite} <span className="text-amber-400 italic">{headingAmber}</span>
                    </p>
                    <p className="text-zinc-200 text-base sm:text-lg lg:text-xl">
                        {subtext}
                    </p>
                </div>

                <div className="w-full sm:w-auto flex sm:justify-end">
                    <a href={href}>
                        <div className="w-fit py-2 px-5 rounded-lg border border-transparent bg-zinc-200 text-red-700 text-sm sm:text-base hover:text-zinc-200 hover:bg-transparent hover:border-zinc-200/40 duration-150 ease-in-out hover:shadow-xl cursor-pointer shadow-lg">
                            {buttonLabel}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}