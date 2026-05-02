"use client"

import FadeUp from "@/ui/FadeUp"
import ProjCard from "@/sections/projects/ProjectCard"
import { Montserrat } from "next/font/google"
import { availableProjects } from "@/data/projects";


const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});


export default function Properties()  {

    return (
        <div className="w-full py-24 relative ">
            {/* <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950/50 z-10" /> */}
            {/* <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.07] -top-[40%] -left-[10%] scale-150" /> */}

            <div className="w-full 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] px-2 relative z-20 m-auto mt-24 mb-10">
                <div className="w-full flex lg:flex-row flex-col justify-between z-40">
                    <div className="lg:w-[80%] w-full">
                        <FadeUp>
                            <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-2 pl-1`}>
                                <div className="h-px xl:w-16 lg:w-10 w-7 bg-red-500"/>
                                <p className={`${montserrat.className} text-xs font-bold text-amber-500 tracking-widest`}>PROPERTIES</p>
                            </div>
                        </FadeUp>

                        <FadeUp>
                            <p className={`${montserrat.className} text-zinc-900 text-left lg:text-5xl text-3xl font-semibold my-3`}>
                                Our Favourite<span className="text-amber-500 italic"> Properties</span>
                            </p>
                        </FadeUp>
                        
                        <FadeUp>
                            <p className="text-zinc-900 text-left text-md lg:pr-10 pr-5 my-5 xl:max-w-[60rem] lg:max-w-[60rem] w-full">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, in aperiam assumenda nam earum vel deserunt?
                            </p>
                        </FadeUp>
                    </div>
                    <div className="lg:w-[20%] w-full flex items-end lg:justify-end justify-start ">
                        {/* <FadeRight> */}
                            <a href="/properties" className="max-w-fit lg:py-2 lg:px-4 px-2 py-2 rounded-lg bg-red-700 text-white lg:text-md text-[0.85rem] hover:bg-red-600 hover:shadow-xl hover:text-zinc-200 duration-150 ease-in-out cursor-pointer shadow-lg">
                                <p>
                                    See more
                                </p>
                            </a>
                        {/* </FadeRight> */}
                    </div>
                </div>
            </div>


            <div className={`w-full 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] m-auto px-2`}>
                {/* Top row (2 columns, wide cards) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                    <ProjCard p={availableProjects[0]} wide />
                    <ProjCard p={availableProjects[1]} wide />
                </div>

                {/* Bottom row (3 columns) */}
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-10">
                    <ProjCard p={availableProjects[2]} />
                    <ProjCard p={availableProjects[3]} />
                    <ProjCard p={availableProjects[4]} />
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
        </div>
    )
}