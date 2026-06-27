'use client'

import FadeUp from "@/ui/FadeUp";
import FadeLeft from "@/ui/FadeLeft";
import { montserrat } from "@/lib/fonts";

export default function Introduction() {
    return (
        <section className="w-full py-28 bg-[#1F2A44] relative overflow-hidden">

            {/* Decorative background orb */}
            <div className="orb absolute top-0 right-0 w-[600px] h-[600px] bg-[#6B7A3A]/10 pointer-events-none" />
            <div className="orb absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#C9A84C]/8 pointer-events-none" style={{ animationDelay: '2s' }} />

            {/* Blueprint watermark */}
            <img
                src="/wallpapers/dwg_img.svg"
                className="absolute opacity-[0.04] -top-1/4 -right-1/4 w-[60%] pointer-events-none select-none"
                aria-hidden
            />

            <div className="w-full 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] px-5 m-auto relative z-10">

                {/* Divider line */}
                <FadeUp>
                    <div className="divider-olive w-full mb-16" />
                </FadeUp>

                <div className="flex lg:flex-row flex-col justify-between items-start gap-16">

                    {/* Left: large quote */}
                    <div className="lg:w-[52%] w-full">
                        <FadeLeft>
                            <p className={`${montserrat.className} text-zinc-300/90 2xl:text-4xl xl:text-3xl md:text-3xl text-2xl font-medium 2xl:leading-relaxed xl:leading-[3rem] leading-relaxed`}>
                                There is something unforgettable about watching a vision rise from the ground up.
                                <br /><br />
                                The excitement of possibility. The beauty of thoughtful design. The confidence that comes from knowing every detail was created with intention.
                                <br /><br />
                                That feeling is what defines{" "}
                                <span className="text-gradient-gold font-bold">QUANTUM HOMES & PROPERTY.</span>
                            </p>
                        </FadeLeft>
                    </div>

                    {/* Right: body copy + glass card */}
                    <div className="lg:w-[43%] w-full lg:mt-0 mt-4">
                        <FadeUp>
                            <p className="text-zinc-400/90 text-lg leading-relaxed mb-10">
                                We believe exceptional real estate should do more than fill spaces — it should spark emotion, create opportunity, and leave a lasting impression.
                                <br /><br />
                                From beautifully crafted homes to high-value investment properties, every development is designed to feel timeless, refined, and deeply connected to modern living.
                            </p>
                        </FadeUp>

                        {/* Glass stat card */}
                        <FadeUp>
                            <div className="glass rounded-2xl p-6 flex gap-6">
                                <div className="flex-1 text-center border-r border-white/10 pr-6">
                                    <p className={`${montserrat.className} text-4xl font-bold text-gradient-gold`}>9+</p>
                                    <p className="text-xs text-zinc-400 tracking-widest uppercase mt-1">Estates</p>
                                </div>
                                <div className="flex-1 text-center border-r border-white/10 pr-6">
                                    <p className={`${montserrat.className} text-4xl font-bold text-gradient-gold`}>58+</p>
                                    <p className="text-xs text-zinc-400 tracking-widest uppercase mt-1">Plots Sold</p>
                                </div>
                                <div className="flex-1 text-center">
                                    <p className={`${montserrat.className} text-4xl font-bold text-gradient-gold`}>100%</p>
                                    <p className="text-xs text-zinc-400 tracking-widest uppercase mt-1">Verified</p>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </section>
    )
}
