// components/services/ServiceIntro.tsx
'use client'

import { garamond } from "@/lib/fonts"

export default function ServiceIntro({
    image,
    text,
}: {
    image: string
    text: string
}) {
    return (
        <div className="max-w-7xl m-auto flex lg:flex-row flex-col gap-y-8 lg:gap-x-20 relative px-4 sm:px-6 lg:px-8">
            {/* Image side */}
            <div className="lg:w-1/2 w-full relative pt-3 pr-3">
                <div className="bg-[#b91c1c] absolute top-0 right-0 bottom-3 left-3 rounded-sm z-0" />
                <div className="rounded-sm overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[28rem]">
                    <img
                        src={image}
                        className="absolute inset-0 object-cover size-full"
                        alt=""
                    />
                    <div className="absolute bg-[#b91c1c]/20 inset-0"/>
                </div>
            </div>

            {/* Text side */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center">
                <p className={`${garamond.className} text-xl sm:text-2xl lg:text-4xl text-zinc-300 leading-relaxed`}>
                    {text}
                </p>
            </div>
        </div>
    )
}
