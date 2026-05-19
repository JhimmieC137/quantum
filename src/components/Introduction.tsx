'use client'

import FadeUp from "@/ui/FadeUp";

export default function Introduction() {
    return (
        <div>
            <div className="w-full py-28 bg-zinc-950">
                <FadeUp>
                    <div className="w-full 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] flex flex-col items-center m-auto relative lg:py-20 py-7 px-5">
                        <div className="h-px bg-red-600 w-full m-auto rounded-lg"/>
                    </div>
                </FadeUp>

                <div className="flex lg:flex-row flex-col justify-between items-end 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] px-5 m-auto relative">
                    <div className="lg:w-[55%] w-full">

                        <FadeUp>
                            <p className="text-zinc-400/90 2xl:text-4xl xl:text-3xl md:text-3xl text-lg font-medium 2xl:leading-relaxed xl:leading-[3rem] lg:leading-relaxed text-left">
                                <span className="text-amber-400">For years, real estate has been driven by speed over substance. </span> 
                                It's time to build with intention. <br/><br/>
                                At Quantum Homes & Property, we don't just erect structures, we create landmarks. Our disciplined, client-first approach weaves craftsmanship, durability, and intelligent design into spaces that hold their value and their meaning. <br/><br/>
                                Develop without compromise. Deliver without shortcuts. Welcome to the future of construction.
                            </p>
                        </FadeUp>

                    </div>

                    <div className="lg:w-[40%] w-full lg:mt-0 mt-16">
                        <FadeUp>
                            <p className="text-zinc-400/90 text-lg">
                                Driven by a passion for exceptional real estate, we create homes and developments that blend elegance, comfort, and lasting value into one seamless experience. Every project is approached with intention, from the first sketch to the final detail, ensuring each space feels timeless, refined, and truly extraordinary.<br/><br/>
                                We believe exceptional real estate should do more than fill spaces, it should spark emotion, create opportunity, and leave a lasting impression. From beautifully crafted homes to high-value investment properties, every development is designed to feel timeless, refined, and deeply connected to modern living.
                            </p>
                        </FadeUp>
                    </div>

                </div>

                <FadeUp>
                    <div className="w-full max-w-[1400px] flex flex-col items-center m-auto relative py-20">
                        {/* <div className="h-px bg-red-600 w-full m-auto rounded-lg"/> */}
                    </div>
                </FadeUp>
            </div> 
            <div className="">

            </div>
        </div>
    )
}