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
            <div className="lg:w-1/2 w-full relative">
                <div className="rounded-2xl overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[28rem] img-zoom-wrap ring-1 ring-[#6B7A3A]/30">
                    <img
                        src={image}
                        className="absolute inset-0 object-cover size-full"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44]/40 to-transparent" />
                </div>
                {/* Gold accent corner */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6B7A3A] to-[#C9A84C] opacity-70 -z-10" />
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
