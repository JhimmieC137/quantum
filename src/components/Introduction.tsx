'use client'

import FadeUp from "@/ui/FadeUp";

export default function Introduction() {
    return (
        <div>
            <div className="w-full py-28 bg-zinc-950">
                <FadeUp>
                    <div className="w-full 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] flex flex-col items-center m-auto relative py-20 px-5">
                        <div className="h-px bg-red-600 w-full m-auto rounded-lg"/>
                    </div>
                </FadeUp>

                <div className="flex lg:flex-row flex-col justify-between items-end 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] px-5 m-auto relative">
                    <div className="lg:w-[55%] w-full">

                        <FadeUp>
                            <p className="text-zinc-400/90 2xl:text-4xl xl:text-3xl text-3xl font-medium 2xl:leading-relaxed xl:leading-[3rem] lg:leading-relaxed text-left">
                                <span className="text-amber-400">For years, architecture has been stuck in the past. </span> 
                                It’s time to redefine the future. <br/><br/>
                                At Quantum Homes, we don’t just design buildings, we craft experiences. Our innovative, human-centered approach blends aesthetics, sustainability, and functionality to shape spaces that inspire and endure. <br/><br/>
                                Design without limits. Cities without compromise. Welcome to the future of architecture.
                            </p>
                        </FadeUp>

                    </div>

                    <div className="lg:w-[40%] w-full lg:mt-0 mt-16">
                        <FadeUp>
                            <p className="text-zinc-400/90 text-lg">
                                We merge innovation with timeless design to create spaces that inspire and endure. Our architecture balances aesthetics, functionality, and sustainability for a better future.<br /><br />
                                With a passion for pushing boundaries, we embrace cutting-edge technology and visionary thinking. Every project we design transforms the way people live, work, and connect.
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