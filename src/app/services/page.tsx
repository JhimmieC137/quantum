'use client'

import { CgMenuGridO } from "react-icons/cg"
import MainLayout from "../(pages)/layout"
import FadeUp from "@/ui/FadeUp"
import FadeRight from "@/ui/FadeRight"
import InvestmentSection from "@/components/Investment"
import OurClients from "@/components/OurClients"
import { useState } from "react"
import ProjCard from "@/sections/ProjectCard"
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
            <div className="relative max-h-[23rem] overflow-hidden">
                <div className="absolute inset-0 bg-black/70"/>
                <img src="/wallpapers/construction_1.jpg" className="bg-cover -z-10 w-full -mt-32"/>
                <p className="absolute top-[25%] left-0 right-0 text-zinc-200 text-[7.5rem] font-semibold m-auto w-fit z-50">Our <span className="text-amber-500 italic">Services</span></p>
            </div>
            <div className="bg-red-700">
                <div className="max-w-[1400px] m-auto py-32">
                    <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md">
                        <CgMenuGridO className="size-4 text-zinc-200"/>
                        <p className="text-zinc-100/80 text-sm">Our Services</p>
                    </div>
    
                    <FadeUp>
                        <p className={`${montserrat.className} text-zinc-200 text-6xl font-semibold my-7`}>
                            Innovative Designs, <br/>Urban <span className="text-amber-300 italic">Excellence</span>
                        </p>
                    </FadeUp>   
    
                    <div className="flex gap-x-5 mb-10">
                        <div className="bg-amber-400 p-[3px] max-w-[10px] z-20" />
                        {/* <div className="max-w-[5px]">
                        </div> */}
    
                        <FadeRight>
                            <p className="text-zinc-200/90 text-3xl pr-10 mb-5 max-w-[80rem]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error. Quibusdam, iure? Consequatur sunt, in aperiam assumenda nam earum vel deserunt?
                            </p>
                            <p className="text-zinc-200/90 text-3xl pr-10 my-10 max-w-[80rem]">
                                Consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error. Quibusdam, iure? Consequatur sunt, in aperiam assumenda nam earum vel deserunt?
                            </p>
                            <p className="text-zinc-200/90 text-3xl pr-10 mt-5 max-w-[80rem]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error. Quibusdam, iure? Consequatur sunt, in aperiam assumenda nam earum vel deserunt?
                            </p>
                        </FadeRight>         
                    </div>                   
                </div>

                <div className="bg-[#F4F2EC]">
                    <div className="max-w-[1400px] m-auto py-[12rem]">
                        <div className="flex w-full min-h-[25rem] gap-20">
                            <div className="w-1/2 relative">
                                <div className="rounded-[1.6rem] overflow-hidden relative size-full z-10">
                                    <img className="absolute inset-0 bg-cover size-full" src="/services/land_sales_narrow.jpg" />
                                    <div className="absolute bg-red-700/10 bg-cover inset-0 size-full"/>
                                </div>
                                <div className="bg-red-700 size-full bg-cover absolute -top-3 -right-3 rounded-[1.7rem] "/>
                            </div>
                            <div className="w-1/2 flex flex-col justify-center">
                                <div className="w-full">
                                    {/* <div>
                                        <LuLandPlot  className="size-12 text-zinc-900 mb-3"/>
                                    </div> */}
                                    <p className={`${montserrat.className} text-zinc-800 text-6xl font-semibold mb-4`}>
                                        Land <span className="text-amber-500 italic">Sales</span>
                                    </p>
                                    <p className="text-xl pr-24">
                                        Our land sales service focuses on providing clients with genuine, well-verified lands in
                                        both prime and fast-developing locations. 
                                        {/* We understand that buying land is one of the
                                        most significant investments an individual or business can make, so we ensure that every
                                        property we offer is authentic, secure, and properly documented. */}
                                    </p>
                                    <a href="/services/land-sales">
                                        <div className="mt-10 py-4 px-10 bg-red-700 text-zinc-100 shadow-md hover:bg-red-600 hover:shadow-xl rounded-2xl ease-in-out duration-300 cursor-pointer max-w-[37%]">
                                            <p className="text-xl text-center">Learn more</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

                <div className="bg-red-700 relative overflow-hidden">
                    <img src="/quantum_logo.png" className="absolute opacity-10 -top-[2%] -right-[12%] rotate-[228deg] w-[33rem] "/>
                    <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[20%] -left-[8%] rotate-[38deg] w-[33rem] "/>
                    <div className="max-w-[1400px] m-auto py-[12rem] relative">
                        <div className="flex flex-row-reverse w-full min-h-[25rem] gap-20">
                            <div className="w-1/2 relative">
                                <div className="w-full overflow-hidden rounded-[1.6rem] relative size-full">
                                    <img className="absolute inset-0 bg-cover size-full" src="/services/signing-papers.jpg" />
                                    <div className="absolute bg-red-700/20 bg-cover inset-0 size-full z-10"/>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col justify-center">
                                <div className="w-full">
                                    {/* <div>
                                        <HiDocument  className="size-14 text-zinc-300 mb-3"/>
                                    </div> */}
                                    <p className={`${montserrat.className} text-zinc-200 text-6xl font-semibold mb-4`}>
                                        Title Documention and <span className="text-amber-300">Legal Support</span>
                                    </p>
                                    <p className="text-xl text-zinc-200 pr-24">
                                        Our Title Documentation & Legal Support service is designed to protect our clients by ensuring that every property acquired is authentic,
                                        legally compliant, and properly registered.
                                    </p>
                                    <a href="/services/legal-support">
                                        <div className="mt-10 py-4 px-10 bg-zinc-200 border border-transparent text-red-700 hover:border-zinc-200/50 hover:bg-transparent hover:text-zinc-200 hover:shadow-xl  rounded-2xl ease-in-out duration-300 cursor-pointer max-w-[37%]">
                                            <p className="text-xl text-center">Learn more</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

                <div className="bg-[#F4F2EC]">
                    <div className="max-w-[1400px] m-auto py-[12rem]">
                        <div className="flex w-full min-h-[25rem] gap-20">
                            <div className="w-1/2 relative">
                                <div className="rounded-[1.6rem] overflow-hidden relative size-full z-10">
                                    <img className="absolute inset-0 bg-cover size-full" src="/services/new-building.jpg" />    <div className="absolute bg-red-700/10 bg-cover inset-0 size-full"/>
                                    <div className="absolute bg-red-700/10 bg-cover inset-0 size-full"/>
                                </div>
                                <div className="bg-red-700 size-full bg-cover absolute -top-3 -right-3 rounded-[1.7rem] "/>
                            </div>
                            <div className="w-1/2 flex flex-col justify-center">
                                <div className="w-full ">
                                    {/* <div>
                                        <HiOutlineBuildingOffice className="size-14 text-zinc-800 mb-3"/>
                                    </div> */}
                                    <p className={`${montserrat.className} text-zinc-800 text-6xl font-semibold mb-4`}>
                                        Construction and <span className="text-amber-400 italic">Development</span>
                                    </p>
                                    <p className="text-xl pr-24">
                                        Our Construction and Development service is tailored for individuals, families, investors, and organizations who want to bring their real estate visions to life.
                                    </p>
                                    <a href="/services/construction-and-development">
                                        <div className="mt-10 py-4 px-10 bg-red-700 text-zinc-100 shadow-md hover:bg-red-600 hover:shadow-xl rounded-2xl ease-in-out duration-300 cursor-pointer max-w-[37%]">
                                            <p className="text-xl text-center">Learn more</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

                <div className="bg-red-700 relative overflow-hidden">
                    <img src="/quantum_logo.png" className="absolute opacity-10 -top-[2%] -right-[12%] rotate-[228deg] w-[33rem]"/>
                    <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[20%] -left-[8%] rotate-[38deg] w-[33rem]"/>
                    <div className="max-w-[1400px] m-auto py-[12rem] relative">
                        <div className="flex flex-row-reverse w-full min-h-[25rem] gap-20">
                            <div className="w-[47%] relative">
                                <div className="w-full overflow-hidden rounded-[1.6rem] relative size-full">
                                    <img className="absolute inset-0 bg-cover size-full" src="/services/agents-in-meeting.jpg" />
                                    <div className="absolute bg-red-700/10 bg-cover inset-0 size-full z-10"/>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col justify-center">
                                <div className="max-w-full">
                                    {/* <div>
                                        <GrUserManager className="size-14 text-zinc-300 mb-3"/>
                                    </div> */}
                                    <p className={`${montserrat.className} text-zinc-200 text-6xl font-semibold mb-4`}>
                                        Real Estate <span className="text-amber-400 italic">Investment Advisory</span>
                                    </p>
                                    <p className="text-xl text-zinc-200 pr-24">
                                        Our Investment Advisory service is designed to guide individuals, families, and corporate organizations in identifying, analyzing, and investing in high-value real estate opportunities that yield long-term returns.
                                    </p>
                                    <a href="/services/real-estate-investment-advisory">
                                        <div className="mt-10 py-4 px-10 bg-zinc-200 border border-transparent text-red-700 hover:border-zinc-200/50 hover:bg-transparent hover:text-zinc-200 hover:shadow-xl  rounded-2xl ease-in-out duration-300 cursor-pointer max-w-[37%]">
                                            <p className="text-xl text-center">Learn more</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

                {/* <div className="bg-[#F4F2EC]">
                    <div className="max-w-[1400px] m-auto py-[12rem]">
                        <div className="flex w-full gap-20">
                            <div className="w-1/2 overflow-hidden rounded-xl relative">
                                <img className="absolute inset-0 bg-cover size-full" src="/wallpapers/arch_pov_1.png" />
                            </div>
                            <div className="w-1/2  pr-10">
                                <div>
                                    <HiOutlineBuildingOffice className="size-14 text-zinc-800 mb-3"/>
                                </div>
                                <p className={`${montserrat.className} text-zinc-800 text-3xl font-semibold my-3`}>
                                    Urban <span className="text-amber-500 italic">Planning</span>
                                </p>
                                <p className="text-xl">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa odit inventore ipsum ut molestiae asperiores reprehenderit molestias animi, magnam nihil vitae reiciendis sapiente non laborum ducimus harum voluptatibus, id quod?
                                     odit inventore ipsum ut molestiae asperiores reprehenderit molestias animi, magnam nihil vitae reiciendis sapiente non laborum ducimus harum voluptatibus, id quod?
                                </p>

                                <div className="mt-10 py-4 px-10 bg-red-700 text-zinc-100 rounded-2xl ease-in-out duration-300 cursor-pointer max-w-[50%]">
                                    <p className="text-xl text-center">Learn more</p>
                                </div>
                            </div>

                        </div>


                    </div>

                </div> */}
            </div>
            <InvestmentSection />
        </MainLayout>
    ) 
}