'use client'

import MainLayout from "../(pages)/layout"
import InvestmentSection from "@/components/Investment"
import ProjectGrid from "@/sections/ProjectGrid"
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
            <div className="relative max-h-[23rem] overflow-hidden">
                <div className="absolute inset-0 bg-black/70"/>
                <img src="/wallpapers/construction_1.jpg" className="bg-cover -z-10 w-full -mt-32"/>
                <p className="absolute top-[25%] left-0 right-0 text-zinc-200 text-[7.5rem] font-semibold m-auto w-fit z-50">Our <span className="text-amber-500 italic">Projects</span></p>
            </div>
            <ProjectGrid categories={projectCategories} projects={availableProjects}/>
            <InvestmentSection />
        </MainLayout>
    ) 
}