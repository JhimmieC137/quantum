'use client'

import FadeUp from "@/ui/FadeUp";
import { CgMenuGridO } from "react-icons/cg";

export default function Introduction() {
    return (
        <div>
            <div className="w-full py-28 bg-zinc-950">
                <FadeUp>
                    <div className="w-full max-w-[1400px] flex flex-col items-center m-auto relative py-20">
                        <div className="h-px bg-red-600 w-full m-auto rounded-lg"/>
                        {/* <div className="absolute top-[40%] left-0 flex gap-x-1.5 justify-center items-center p-2 border border-zinc-700/40 rounded-lg bg-zinc-900">
                            <CgMenuGridO className="size-4 text-zinc-200"/>
                            <p className="text-zinc-100/80 text-sm">About Us</p>
                        </div> */}
                    </div>
                </FadeUp>

                <div className="flex flex-row justify-between items-end max-w-[1400px] m-auto relative">
                    <div className="w-[55%]">

                        <FadeUp>
                            <p className="text-zinc-400/90 text-4xl font-medium leading-relaxed text-left">
                                <span className="text-amber-400">For years, architecture has been stuck in the past.</span> It’s time to redefine the future. <br/><br/>
                                At Quantum Homes, we don’t just design buildings, we craft experiences. Our innovative, human-centered approach blends aesthetics, sustainability, and functionality to shape spaces that inspire and endure. <br/><br/>
                                Design without limits. Cities without compromise. Welcome to the future of architecture.
                            </p>
                        </FadeUp>

                        {/* <FadeUp>
                            <div className="flex justify-start items-end gap-3 mt-10">
                                <div className="bg-zinc-200 p-3 rounded-full">
                                    <img src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67f4ebcce4ca40bd0427ebb1_Bank.svg" className="size-5"/>
                                </div>
                                <div className="bg-zinc-200 p-3 rounded-full">
                                    <img src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67f4ebcccdb11bbfd05e221e_BuildingOffice.svg" className="size-5"/>
                                </div>
                                <div className="bg-zinc-200 p-3 rounded-full">
                                    <img src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67f4ebccc96d0f68ab740e11_City.svg" className="size-5"/>
                                </div>
                                <div className="bg-zinc-200 p-3 rounded-full">
                                    <img src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67f4ebcc1f7788d35ec44a0c_Lighthouse.svg" className="size-5"/>
                                </div>
                            </div>
                        </FadeUp> */}

                    </div>

                    <div className="w-[40%]">
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