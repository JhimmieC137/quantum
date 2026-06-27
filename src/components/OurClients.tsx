'use client'

import FadeUp from "@/ui/FadeUp"
import { montserrat } from "@/lib/fonts"

export default function OurClients() {
    const logos = Array.from({ length: 12 }, (_, i) => `/clients/client_${i + 1}.png`);
    const doubled = [...logos, ...logos, ...logos];

    return (
        <section className="w-full relative py-20 bg-[#F5F3ED] overflow-hidden">

            {/* Subtle olive tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B7A3A]/5 via-transparent to-[#1F2A44]/5 pointer-events-none" />

            {/* Top border */}
            <div className="divider-olive w-full mb-16" />

            <div className="relative z-10">
                <FadeUp>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-10 bg-[#6B7A3A]" />
                        <p className={`${montserrat.className} text-[11px] font-bold text-[#6B7A3A] tracking-[0.22em] uppercase`}>
                            Our Clients
                        </p>
                        <div className="h-px w-10 bg-[#6B7A3A]" />
                    </div>
                </FadeUp>

                <FadeUp>
                    <p className={`${montserrat.className} text-[#1F2A44] text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-10`}>
                        Esteemed Clients{" "}
                        <em className="not-italic text-gradient-gold">Over the Years</em>
                    </p>
                </FadeUp>

                <FadeUp>
                    <section className="mt-6">
                        <div id="infinite" className="flex justify-center w-full h-[110px] relative">
                            <div className="highway-barrier overflow-hidden relative w-full">
                                <ul className="animate-marquee flex h-full w-max" style={{ willChange: "transform" }}>
                                    {doubled.map((logo, i) => (
                                        <li
                                            key={i}
                                            className="flex justify-center items-center w-[230px] shrink-0"
                                        >
                                            <img
                                                src={logo}
                                                alt={`client ${i % 12 + 1}`}
                                                className="w-[200px] grayscale hover:grayscale-0 transition-all duration-500 ease-in-out opacity-50 hover:opacity-100"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </FadeUp>
            </div>

            <div className="divider-olive w-full mt-16" />
        </section>
    )
}
