'use client'

import MainLayout from "../(pages)/layout"
import InvestmentSection from "@/components/Investment"
import ProjectGrid from "@/sections/projects/ProjectGrid"
import { availableProjects, projectCategories } from "@/data/projects"
import { Montserrat } from "next/font/google"


const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export default function Projects() {
    return (
        <MainLayout>
            <div className="relative h-[14rem] sm:h-[18rem] lg:h-[23rem] overflow-hidden">
                <div className="absolute inset-0 bg-black/70 z-10"/>
                <img src="/wallpapers/construction_1.jpg" className="absolute inset-0 object-cover object-center w-full h-full"/>
                <p className="absolute inset-0 flex items-center justify-center text-zinc-200 text-5xl sm:text-7xl lg:text-[7.5rem] font-semibold z-20">
                    Our <span className="text-amber-500 italic ml-4">Projects</span>
                </p>
            </div>
            <ProjectGrid categories={projectCategories} projects={availableProjects}/>
            <InvestmentSection />
        </MainLayout>
    ) 
}