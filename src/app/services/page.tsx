'use client'

import { CgMenuGridO } from "react-icons/cg"
import MainLayout from "../(pages)/layout"
import FadeUp from "@/ui/FadeUp"
import FadeRight from "@/ui/FadeRight"
import InvestmentSection from "@/components/Investment"
import OurClients from "@/components/OurClients"
import { useState } from "react"
import ProjCard from "@/sections/projects/ProjectCard"
import { HiDocument, HiOutlineBuildingOffice } from "react-icons/hi2"
import { Montserrat } from "next/font/google"
import { LuLandPlot } from "react-icons/lu"
import { GrUserManager } from "react-icons/gr"

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export default function Services() {

    return (
        <MainLayout>
            <div className="relative h-[14rem] sm:h-[18rem] lg:h-[23rem] overflow-hidden">
                <div className="absolute inset-0 bg-black/70 z-10"/>
                <img src="/wallpapers/construction_1.jpg" className="absolute inset-0 object-cover object-center w-full h-full"/>
                <p className="absolute inset-0 flex items-center justify-center text-zinc-200 text-5xl sm:text-7xl lg:text-[7.5rem] font-semibold z-20">
                    Our <span className="text-amber-500 italic ml-4">Services</span>
                </p>
            </div>
            <div className="bg-red-700">
                <div className="xl:max-w-[1400px] lg:max-w-[1200px] md:max-w-full m-auto py-20 px-2">
                    <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md">
                        <CgMenuGridO className="size-4 text-zinc-200"/>
                        <p className="text-zinc-100/80 text-sm">About Us</p>
                    </div>
    
                    <FadeUp>
                        <p className={`${montserrat.className} text-zinc-200 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold my-7`}>
                            Innovative Designs, <br/>Urban <span className="text-amber-300 italic">Excellence</span>
                        </p>
                    </FadeUp>
    
                    <div className="flex lg:gap-x-5 gap-x-3 mb-10">
                        <div className="bg-amber-400 lg:p-[3px] p-[2px] lg:max-w-[10px] max-w-[5px] z-20" />
                        {/* <div className="max-w-[5px]">
                        </div> */}
    
                        <FadeRight>
                            <p className="text-zinc-200/90 lg:text-3xl md:text-2xl text-md lg:pr-10 p-0 mb-5 max-w-[80rem]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error. Quibusdam, iure? Consequatur sunt, in aperiam assumenda nam earum vel deserunt?
                            </p>
                            <p className="text-zinc-200/90 lg:text-3xl md:text-2xl text-md lg:pr-10 p-0 my-10 max-w-[80rem]">
                                Consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error. Quibusdam, iure? Consequatur sunt, in aperiam assumenda nam earum vel deserunt?
                            </p>
                        </FadeRight>         
                    </div>
    
                </div>

                <div className="bg-[#F4F2EC]">
                    <div className="max-w-[1400px] m-auto py-[12rem] px-2">
                        <div className="flex lg:flex-row flex-col w-full lg:min-h-[25rem] gap-y-8 lg:gap-y-0 lg:gap-x-20">

                        {/* Image side */}
                        <div className="lg:w-1/2 w-full relative pt-3 pr-3">
                            <div className="bg-red-700 absolute top-0 right-0 bottom-3 left-3 rounded-[1.7rem] z-0" />
                            <div className="rounded-[1.6rem] overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[25rem]">
                            <img className="absolute inset-0 object-cover size-full" src="/services/land_sales_narrow.jpg" />
                            <div className="absolute bg-red-700/10 inset-0" />
                            </div>
                        </div>

                        {/* Text side */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-center">
                            <p className={`${montserrat.className} text-zinc-800 text-4xl sm:text-5xl xl:text-6xl font-semibold mb-4`}>
                            Land <span className="text-amber-500 italic">Sales</span>
                            </p>
                            <p className="text-base sm:text-lg xl:text-xl">
                            Our land sales service focuses on providing clients with genuine,
                            well-verified lands in both prime and fast-developing locations.
                            </p>
                            <a href="/services/land-sales">
                            <div className="mt-8 py-3 px-8 bg-red-700 text-zinc-100 shadow-md hover:bg-red-600 hover:shadow-xl rounded-2xl ease-in-out duration-300 cursor-pointer w-fit">
                                <p className="text-base sm:text-lg text-center">Learn more</p>
                            </div>
                            </a>
                        </div>

                        </div>
                    </div>
                    </div>

                    <div className="bg-red-700 relative overflow-hidden">
                    <img src="/quantum_logo.png" className="absolute opacity-10 -top-[2%] -right-[12%] rotate-[228deg] w-[33rem]" />
                    <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[20%] -left-[8%] rotate-[38deg] w-[33rem]" />
                    <div className="max-w-[1400px] m-auto lg:py-[12rem] py-[6rem] px-2 relative">
                        <div className="flex lg:flex-row-reverse flex-col w-full lg:min-h-[25rem] gap-y-12 lg:gap-y-0 lg:gap-x-20">

                        {/* Image side */}
                        <div className="lg:w-1/2 w-full relative pt-3 pl-3">
                            {/* <div className="bg-zinc-200/20 absolute top-0 left-0 bottom-3 right-3 rounded-[1.7rem] z-0" /> */}
                            <div className="rounded-[1.6rem] overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[25rem]">
                            <img className="absolute inset-0 object-cover size-full" src="/services/signing-papers.jpg" />
                            <div className="absolute bg-red-800/10 inset-0 z-10" />
                            </div>
                        </div>

                        {/* Text side */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-center">
                            <p className={`${montserrat.className} text-zinc-200 text-4xl sm:text-5xl xl:text-6xl font-semibold mb-4`}>
                            Title Documentation and <span className="text-amber-300">Legal Support</span>
                            </p>
                            <p className="text-base sm:text-lg xl:text-xl text-zinc-200">
                            Our Title Documentation & Legal Support service is designed to protect our clients by ensuring
                            that every property acquired is authentic, legally compliant, and properly registered.
                            </p>
                            <a href="/services/legal-support">
                            <div className="mt-8 py-3 px-8 bg-zinc-200 border border-transparent text-red-700 hover:border-zinc-200/50 hover:bg-transparent hover:text-zinc-200 hover:shadow-xl rounded-2xl ease-in-out duration-300 cursor-pointer w-fit">
                                <p className="text-base sm:text-lg text-center">Learn more</p>
                            </div>
                            </a>
                        </div>

                        </div>
                    </div>
                    </div>

                    <div className="bg-[#F4F2EC]">
                    <div className="max-w-[1400px] m-auto py-[12rem] px-2">
                        <div className="flex lg:flex-row flex-col w-full lg:min-h-[25rem] gap-y-8 lg:gap-y-0 lg:gap-x-20">

                        {/* Image side */}
                        <div className="lg:w-1/2 w-full relative pt-3 pr-3">
                            <div className="bg-red-700 absolute top-0 right-0 bottom-3 left-3 rounded-[1.7rem] z-0" />
                            <div className="rounded-[1.6rem] overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[25rem]">
                            <img className="absolute inset-0 object-cover size-full" src="/services/new-building.jpg" />
                            <div className="absolute bg-red-700/10 inset-0" />
                            </div>
                        </div>

                        {/* Text side */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-center">
                            <p className={`${montserrat.className} text-zinc-800 text-4xl sm:text-5xl xl:text-6xl font-semibold mb-4`}>
                            Construction and <span className="text-amber-400 italic">Development</span>
                            </p>
                            <p className="text-base sm:text-lg xl:text-xl">
                            Our Construction and Development service is tailored for individuals, families, investors,
                            and organizations who want to bring their real estate visions to life.
                            </p>
                            <a href="/services/construction-and-development">
                            <div className="mt-8 py-3 px-8 bg-red-700 text-zinc-100 shadow-md hover:bg-red-600 hover:shadow-xl rounded-2xl ease-in-out duration-300 cursor-pointer w-fit">
                                <p className="text-base sm:text-lg text-center">Learn more</p>
                            </div>
                            </a>
                        </div>

                        </div>
                    </div>
                    </div>

                    <div className="bg-red-700 relative overflow-hidden">
                    <img src="/quantum_logo.png" className="absolute opacity-10 -top-[2%] -right-[12%] rotate-[228deg] w-[33rem]" />
                    <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[20%] -left-[8%] rotate-[38deg] w-[33rem]" />
                    <div className="max-w-[1400px] m-auto lg:py-[12rem] py-[6rem] px-2 relative">
                        <div className="flex lg:flex-row-reverse flex-col w-full lg:min-h-[25rem] gap-y-12 lg:gap-y-0 lg:gap-x-20">

                        {/* Image side */}
                        <div className="lg:w-[47%] w-full relative pt-3 pl-3">
                            {/* <div className="bg-zinc-200/30 absolute top-0 left-0 bottom-3 right-3 rounded-[1.7rem] z-0" /> */}
                            <div className="rounded-[1.6rem] overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[25rem]">
                            <img className="absolute inset-0 object-cover size-full" src="/services/agents-in-meeting.jpg" />
                            <div className="absolute bg-red-700/10 inset-0 z-10" />
                            </div>
                        </div>

                        {/* Text side */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-center">
                            <p className={`${montserrat.className} text-zinc-200 text-4xl sm:text-5xl xl:text-6xl font-semibold mb-4`}>
                            Real Estate <span className="text-amber-400 italic">Investment Advisory</span>
                            </p>
                            <p className="text-base sm:text-lg xl:text-xl text-zinc-200">
                            Our Investment Advisory service is designed to guide individuals, families, and corporate
                            organizations in identifying, analyzing, and investing in high-value real estate opportunities
                            that yield long-term returns.
                            </p>
                            <a href="/services/real-estate-investment-advisory">
                            <div className="mt-8 py-3 px-8 bg-zinc-200 border border-transparent text-red-700 hover:border-zinc-200/50 hover:bg-transparent hover:text-zinc-200 hover:shadow-xl rounded-2xl ease-in-out duration-300 cursor-pointer w-fit">
                                <p className="text-base sm:text-lg text-center">Learn more</p>
                            </div>
                            </a>
                        </div>

                        </div>
                    </div>
                </div>

            </div>
            <InvestmentSection />
        </MainLayout>
    ) 
}