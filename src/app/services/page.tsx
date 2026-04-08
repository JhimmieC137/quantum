'use client'

import { CgMenuGridO } from "react-icons/cg"
import MainLayout, { montserrat } from "../(pages)/layout"
import FadeUp from "@/ui/FadeUp"
import FadeRight from "@/ui/FadeRight"
import InvestmentSection from "@/components/Investment"
import OurClients from "@/components/OurClients"
import { useState } from "react"
import ProjCard from "@/sections/ProjectCard"
import { HiOutlineBuildingOffice } from "react-icons/hi2"

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
                        <div className="flex w-full gap-20">
                            <div className="w-1/2 overflow-hidden rounded-xl relative">
                                <img className="absolute inset-0 bg-cover size-full" src="/wallpapers/arch_pov_1.png" />
                            </div>
                            <div className="w-1/2  pr-10">
                                <div>
                                    <HiOutlineBuildingOffice className="size-14 text-zinc-800 mb-3"/>
                                </div>
                                <p className={`${montserrat.className} text-zinc-800 text-3xl font-semibold my-3`}>
                                    Urban <span className="text-amber-400 italic">Planning</span>
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

                </div>

                <div className="bg-red-700 relative overflow-hidden">
                    <img src="/quantum_logo.png" className="absolute opacity-10 -top-[2%] -right-[12%] rotate-[228deg] w-[33rem] z-20"/>
                    <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[20%] -left-[8%] rotate-[38deg] w-[33rem] z-20"/>
                    <div className="max-w-[1400px] m-auto py-[12rem]">
                        <div className="flex flex-row-reverse w-full gap-20">
                            <div className="w-1/2 overflow-hidden rounded-xl relative">
                                <img className="absolute inset-0 bg-cover size-full" src="/wallpapers/arch_pov_1.png" />
                            </div>
                            <div className="w-1/2  pr-10">
                                <div>
                                    <HiOutlineBuildingOffice className="size-14 text-zinc-300 mb-3"/>
                                </div>
                                <p className={`${montserrat.className} text-zinc-200 text-3xl font-semibold my-3`}>
                                    Urban<span className="text-amber-300">Planning</span>
                                </p>
                                <p className="text-xl text-zinc-200">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa odit inventore ipsum ut molestiae asperiores reprehenderit molestias animi, magnam nihil vitae reiciendis sapiente non laborum ducimus harum voluptatibus, id quod?
                                    ipsum ut molestiae asperiores reprehenderit molestias animi, magnam nihil vitae reiciendis sapiente non laborum ducimus harum voluptatibus, id quod?
                                </p>

                                <div className="mt-10 py-4 px-10 bg-zinc-200 text-zinc-800 rounded-2xl ease-in-out duration-300 cursor-pointer max-w-[50%]">
                                    <p className="text-xl text-center">Learn more</p>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

                <div className="bg-[#F4F2EC]">
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
                                    Urban<span className="text-amber-400 italic">Planning</span>
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

                </div>

                <div className="bg-red-700 relative overflow-hidden">
                    <img src="/quantum_logo.png" className="absolute opacity-10 -top-[2%] -right-[12%] rotate-[228deg] w-[33rem] z-20"/>
                    <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[20%] -left-[8%] rotate-[38deg] w-[33rem] z-20"/>
                    <div className="max-w-[1400px] m-auto py-[12rem]">
                        <div className="flex flex-row-reverse w-full gap-20">
                            <div className="w-1/2 overflow-hidden rounded-xl relative">
                                <img className="absolute inset-0 bg-cover size-full" src="/wallpapers/arch_pov_1.png" />
                            </div>
                            <div className="w-1/2  pr-10">
                                <div>
                                    <HiOutlineBuildingOffice className="size-14 text-zinc-300 mb-3"/>
                                </div>
                                <p className={`${montserrat.className} text-zinc-200 text-3xl font-semibold my-3`}>
                                    Urban <span className="text-amber-400 Italic">Planning</span>
                                </p>
                                <p className="text-xl text-zinc-200">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa odit inventore ipsum ut molestiae asperiores reprehenderit molestias animi, magnam nihil vitae reiciendis sapiente non laborum ducimus harum voluptatibus, id quod?
                                    ipsum ut molestiae asperiores reprehenderit molestias animi, magnam nihil vitae reiciendis sapiente non laborum ducimus harum voluptatibus, id quod?
                                </p>

                                <div className="mt-10 py-4 px-10 bg-zinc-200 text-zinc-800 rounded-2xl ease-in-out duration-300 cursor-pointer max-w-[50%]">
                                    <p className="text-xl text-center">Learn more</p>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

                <div className="bg-[#F4F2EC]">
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

                </div>
            </div>
            <InvestmentSection />
        </MainLayout>
    ) 
}