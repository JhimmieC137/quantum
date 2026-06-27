'use client'

import { montserrat } from "@/lib/fonts"
import FadeUp from "@/ui/FadeUp"

export default function OurClients() {
    const logos  = Array.from({ length: 12 }, (_, i) => `/clients/client_${i + 1}.png`)
    const tripled = [...logos, ...logos, ...logos]

    return (
        <section className="w-full bg-[#FAF9F6] overflow-hidden py-20">

            <FadeUp>
                <div className={`${montserrat.className} flex items-center justify-center gap-4 mb-10`}>
                    <div className="w-8 h-px bg-[#b91c1c]" />
                    <p className="section-label">(Esteemed Clients)</p>
                    <div className="w-8 h-px bg-[#b91c1c]" />
                </div>
            </FadeUp>

            <FadeUp>
                <p
                    className={`${montserrat.className} text-center text-[#111110] font-semibold mb-12 leading-tight tracking-tight`}
                    style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)" }}
                >
                    Trusted by <em className="font-normal italic text-[#b91c1c]">thousands</em>
                    <br className="hidden sm:block" /> across Nigeria
                </p>
            </FadeUp>

            {/* Marquee — two rows, opposite directions */}
            <div className="flex flex-col gap-6">
                {/* Row 1 — left */}
                <div className="relative highway-barrier">
                    <ul className="animate-marquee flex h-[90px] w-max gap-8">
                        {tripled.map((logo, i) => (
                            <li key={i} className="flex items-center justify-center w-[200px] shrink-0">
                                <img
                                    src={logo}
                                    alt={`Client ${(i % 12) + 1}`}
                                    className="max-w-[180px] h-14 object-contain grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500"
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Row 2 — right (reverse) */}
                <div className="relative highway-barrier">
                    <ul
                        className="flex h-[90px] w-max gap-8"
                        style={{ animation: "marquee 32s linear infinite reverse" }}
                    >
                        {tripled.map((logo, i) => (
                            <li key={i} className="flex items-center justify-center w-[200px] shrink-0">
                                <img
                                    src={logo}
                                    alt={`Client ${(i % 12) + 1}`}
                                    className="max-w-[180px] h-14 object-contain grayscale hover:grayscale-0 opacity-30 hover:opacity-90 transition-all duration-500"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="rule max-w-[1400px] mx-auto mt-16" />
        </section>
    )
}
