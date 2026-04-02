"use client"

import { montserrat } from "@/app/(pages)/layout"
import FadeUp from "@/ui/FadeUp"
import { CgMenuGridO } from "react-icons/cg"
// import ProjectSection from "@/sections/ProjectSection"
import FadeLeft from "@/ui/FadeLeft"
import ProjCard from "@/sections/ProjectCard"

export default function Projects()  {
    const PROJECTS = [
        { title: "Emerald Residences", type: "Luxury Duplex", location: "Lekki Phase 1", year: "2024", tag: "Residential", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
        { title: "The Ashford Estate", type: "Detached Villa", location: "Ikoyi", year: "2023", tag: "Premium", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" },
        { title: "Horizon Court", type: "Mixed-Use Complex", location: "Victoria Island", year: "2024", tag: "Commercial", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80" },
        { title: "Sapphire Heights", type: "Penthouse", location: "Eko Atlantic", year: "2023", tag: "Luxury", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" },
        { title: "Coral Gardens", type: "Terrace Housing", location: "Magodo GRA", year: "2024", tag: "Residential", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
    ];


    return (
        <div className="w-full py-24 relative bg-black">
            {/* <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950/50 z-10" /> */}
            {/* <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.07] -top-[40%] -left-[10%] scale-150" /> */}

            <div className="w-full max-w-[1400px] relative z-20 m-auto mt-24 mb-10">
                <div className="w-full flex justify-between z-40">
                    <div className="w-full">
                        <FadeUp>
                            <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-2 pl-1`}>
                                <div className="h-px w-16 bg-red-500"/>
                                <p className={`${montserrat.className} text-xs font-bold text-amber-500 tracking-widest`}>PROJECTS</p>
                            </div>
                        </FadeUp>
                        {/* <div className="w-1/2">
                            <FadeLeft>
                                <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md">
                                    <CgMenuGridO className="size-4 text-zinc-200"/>
                                    <p className="text-zinc-100/80 text-sm">Our Services</p>
                                </div>
                            </FadeLeft>
                        </div> */}

                        <FadeUp>
                            <p className={`${montserrat.className} text-zinc-200 text-left text-5xl font-semibold my-3`}>
                                Our <span className="text-amber-500">Favourite Projects</span>
                            </p>
                        </FadeUp>
                        <FadeUp>
                            <p className="text-zinc-200 text-left text-md pr-10 my-5 max-w-[40rem]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, in aperiam assumenda nam earum vel deserunt?
                            </p>
                        </FadeUp>
                    </div>
                    <div className="w-full flex items-end justify-end">
                        {/* <FadeRight> */}
                            <div className="max-w-fit py-2 px-4 rounded-lg bg-red-600 text-white text-md hover:bg-white hover:text-zinc-900 duration-150 ease-in-out shadow-md hover:shadow-none cursor-pointer">
                                <p>
                                    See more
                                </p>
                            </div>
                        {/* </FadeRight> */}
                    </div>
                </div>
            </div>


            <div className={`w-full max-w-[1400px] m-auto`}>
                {/* Top row (2 columns, wide cards) */}
                <div className="grid grid-cols-2 gap-10 mb-10">
                    <ProjCard p={PROJECTS[0]} wide />
                    <ProjCard p={PROJECTS[1]} wide />
                </div>

                {/* Bottom row (3 columns) */}
                <div className="grid grid-cols-3 gap-10">
                    <ProjCard p={PROJECTS[2]} />
                    <ProjCard p={PROJECTS[3]} />
                    <ProjCard p={PROJECTS[4]} />
                </div>
            </div>



            {/* <FadeUp>
                <ProjectSection
                    label={"Lagos"}
                    date={"April 11, 2025"}
                    image={"/wallpapers/mansion_b.png"}
                    titleWhite={"Harmony"}
                    titleAmber={"Pavilion"}
                    description={"A cultural center combining minimalist aesthetics, natural materials, and innovative design to foster community and creativity."}
                    // link?: string,
                />
            </FadeUp>

            <FadeUp>
                <ProjectSection
                    label={"Lagos"}
                    date={"April 11, 2025"}
                    image={"/wallpapers/mansion_a.png"}
                    titleWhite={"Harmony"}
                    titleAmber={"Pavilion"}
                    description={"A cultural center combining minimalist aesthetics, natural materials, and innovative design to foster community and creativity."}
                    // link?: string,
                />
            </FadeUp>

            <FadeUp>
                <ProjectSection
                    label={"Lagos"}
                    date={"April 11, 2025"}
                    image={"/wallpapers/mansion_c.webp"}
                    titleWhite={"Harmony"}
                    titleAmber={"Pavilion"}
                    description={"A cultural center combining minimalist aesthetics, natural materials, and innovative design to foster community and creativity."}
                    // link?: string,
                />
            </FadeUp>

            <FadeUp>
                <ProjectSection
                    label={"Lagos"}
                    date={"April 11, 2025"}
                    image={"/wallpapers/mansion_d.webp"}
                    titleWhite={"Harmony"}
                    titleAmber={"Pavilion"}
                    description={"A cultural center combining minimalist aesthetics, natural materials, and innovative design to foster community and creativity."}
                    // link?: string,
                />
            </FadeUp>

            <FadeUp>
                <ProjectSection
                    label={"Lagos"}
                    date={"April 11, 2025"}
                    image={"/wallpapers/mansion_e.png"}
                    titleWhite={"Harmony"}
                    titleAmber={"Pavilion"}
                    description={"A cultural center combining minimalist aesthetics, natural materials, and innovative design to foster community and creativity."}
                    // link?: string,
                />
            </FadeUp> */}

            {/* <div className="w-full max-w-[1400px] m-auto rounded-2xl overflow-hidden relative px-12 py-16 group">
                <img src="/wallpapers/mansion_b.png" className="w-full absolute inset-0 bg-cover group-hover:scale-125 ease-in-out duration-500" />
                <div className="absolute z-10 bg-red-600/70 inset-0 w-full"/>

                <div className="w-full flex justify-start">
                    <div className="w-[31%] bg-slate-200 rounded-2xl p-6 z-30">
                        <div className="w-full flex justify-between items-center my-3">
                            <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md">
                                <CgMenuGridO className="size-4 text-zinc-900"/>
                                <p className="text-zinc-900/80 text-sm">Lagos</p>
                            </div>
                            <p className="text-red-600">
                                April 11, 2025
                            </p>
                        </div>

                        <div className="w-full rounded-xl overflow-hidden my-5 max-h-[10em]">
                            <img src="/wallpapers/mansion_b.png" alt="" className="w-full"/>
                        </div>

                        <div className="w-full mb-7">
                            <p className={`${montserrat.className} text-xl text-zinc-900 font-semibold`}>
                                Harmony <span className="text-red-600">Pavilion</span>
                            </p>
                            <p className="text-sm text-zinc-900 mt-2">
                                A cultural center combining minimalist aesthetics, natural materials, and innovative design to foster community and creativity.
                            </p>
                        </div>

                        <div className="max-w-fit py-2 px-4 rounded-lg bg-slate-200 text-zinc-700/80 text-md hover:bg-transparent border hover:border-slate-200/50 hover:text-zinc-200 duration-150 ease-in-out shadow-md hover:shadow-none cursor-pointer">
                            <p>
                                Check Project
                            </p>
                        </div>

                    </div>
                </div>               

            </div> */}

        </div>
    )
}