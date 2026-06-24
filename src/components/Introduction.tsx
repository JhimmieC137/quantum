'use client'

import FadeUp from "@/ui/FadeUp";

export default function Introduction() {
    return (
        <div>
            <div className="w-full py-28 bg-zinc-950">
                <FadeUp>
                    <div className="w-full 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] flex flex-col items-center m-auto relative lg:py-10 py-6 px-5">
                        <div className="h-px bg-[#b91c1c] w-full m-auto rounded-lg"/>
                    </div>
                </FadeUp>

                <div className="flex lg:flex-row flex-col justify-between items-end 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] px-5 m-auto relative">
                    <div className="lg:w-[55%] w-full">

                        <FadeUp>
                            <p className="text-zinc-400/90 2xl:text-4xl xl:text-3xl md:text-3xl text-lg font-medium 2xl:leading-relaxed xl:leading-[3rem] lg:leading-relaxed text-left">
                                There is something unforgettable about watching a vision rise from the ground up.<br/><br/>
                                The excitement of possibility. The beauty of thoughtful design. The confidence that comes from knowing every detail was created with intention.<br/><br/>
                                That feeling is what defines <span className="text-amber-400 font-semibold">OYO REALTY &amp; CONSTRUCTION.</span>
                            </p>
                        </FadeUp>

                    </div>

                    <div className="lg:w-[40%] w-full lg:mt-0 mt-16">
                        <FadeUp>
                            <p className="text-zinc-400/90 text-lg leading-relaxed">
                                We believe exceptional real estate should do more than fill spaces, it should spark emotion, create opportunity, and leave a lasting impression.<br/><br/>
                                From beautifully crafted homes to high-value investment properties, every development is designed to feel timeless, refined, and deeply connected to modern living.<br/><br/>
                                With a passion for excellence and an eye for enduring value, we create spaces where luxury meets purpose, where comfort meets sophistication, and where every corner reflects quality without compromise.
                            </p>
                        </FadeUp>
                    </div>

                </div>

            </div>
        </div>
    )
}
