'use client'

import FadeUp from "@/ui/FadeUp"
import { Montserrat } from "next/font/google";
import { CgMenuGridO } from "react-icons/cg"


const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export default function OurClients() {

    const logos = Array.from({ length: 12 }, (_, i) => `/clients/client_${i + 1}.png`);
    const doubled = [...logos, ...logos];


    return (
        <div className="w-full relative my-20">
            <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md m-auto">
                <CgMenuGridO className="size-4 text-zinc-200"/>
                <p className="text-zinc-100/80 text-sm">Our Clients</p>
            </div>

            <FadeUp>
                <p className={`${montserrat.className} text-zinc-200 text-center text-5xl font-semibold my-7`}>
                    Esteemed Clients <span className="text-amber-300 italic">Over the Years</span>
                </p>
            </FadeUp>

            <FadeUp>
                <p className="text-zinc-200 text-center text-md pr-10 my-5 max-w-[50rem] m-auto">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error. Quibusdam, iure? Consequatur sunt, in aperiam assumenda nam earum vel deserunt?
                </p>
            </FadeUp>

            <FadeUp>
                <section className="mt-10">
                    <div id="infinite" className="flex justify-center w-full h-[80px] relative">
                        <div className="highway-barrier overflow-hidden relative w-full bg-transparent">
                            <ul className="animate-marquee flex h-full w-max" style={{ willChange: "transform", transform: "translateZ(0)" }}>
                                {doubled.map((logo, i) => (
                                    <li 
                                        key={i} 
                                        className="flex justify-center items-center w-[180px] shrink-0"
                                    >
                                        <img 
                                            src={logo} 
                                            alt={`client ${i % 12 + 1}`} 
                                            // className="w-[170px]" 
                                            className="w-[170px] grayscale hover:grayscale-0 transition-all duration-500 ease-in-out opacity-60 hover:opacity-100"
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