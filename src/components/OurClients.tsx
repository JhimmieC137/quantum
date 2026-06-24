'use client'

import FadeUp from "@/ui/FadeUp"
import { CgMenuGridO } from "react-icons/cg"
import { montserrat } from "@/lib/fonts";
import { brand } from "@/lib/constants";

export default function OurClients() {

    const logos = Array.from({ length: 12 }, (_, i) => `/clients/client_${i + 1}.png`);
    const doubled = [...logos, ...logos, ...logos];


    return (
        <div className={`w-full relative py-20 ${brand.redBg}`}>
            <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md m-auto">
                <CgMenuGridO className="size-4 text-zinc-200"/>
                <p className="text-zinc-100/80 text-sm">Our Clients</p>
            </div>

            <FadeUp>
                <p className={`${montserrat.className} text-zinc-200 text-center text-3xl sm:text-4xl md:text-5xl lg:max-w-full px-2 lg:m-0 m-auto font-semibold lg:my-7 my-3`}>
                    Esteemed Clients<br className="sm:hidden" /> <span className={`${brand.amberLightText} italic`}>Over the Years</span>
                </p>
            </FadeUp>

            <FadeUp>
                <section className="mt-10">
                    <div id="infinite" className="flex justify-center w-full h-[110px] relative">
                        <div className="highway-barrier overflow-hidden relative w-full bg-transparent">
                            <ul className="animate-marquee flex h-full w-max" style={{ willChange: "transform", transform: "translateZ(0)" }}>
                                {doubled.map((logo, i) => (
                                    <li
                                        key={i}
                                        className="flex justify-center items-center w-[230px] shrink-0"
                                    >
                                        <img
                                            src={logo}
                                            alt={`client ${i % 12 + 1}`}
                                            className="w-[220px] grayscale hover:grayscale-0 transition-all duration-500 ease-in-out opacity-60 hover:opacity-100"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </FadeUp>
        </div>
    )
}