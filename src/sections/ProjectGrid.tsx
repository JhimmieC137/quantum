'use client'

import { useState } from "react"
import ProjCard from "@/sections/ProjectCard"
import { Montserrat } from "next/font/google"


const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

type Category = {
  id: number;
  name: string;
};

type Project = {
  title: string;
  type: string;
  location: string;
  year: string;
  tag: string;
  img: string;
};

export default function ProjectGrid({ categories, projects, maxWidth = "1400px" }: { categories: Category[], projects: Project[], maxWidth?: string }) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    return (
        <div className="bg-[#F4F2EC]">
            <div className={`max-w-[${maxWidth}] m-auto py-32`}>

                <div className="w-full flex gap-x-8">
                    {
                        categories.map((el) => (
                            <div onClick={() => setSelectedCategory(el.name)} className={`px-4 py-2 border border-zinc-400/50 hover:border-zinc-[#F4F2EC] hover:bg-red-700  hover:text-zinc-200 ${el.name === selectedCategory ? "bg-red-700 text-zinc-200" : "bg-transparent text-zinc-800"} rounded-xl cursor-pointer ease-in-out duration-300`}>
                                <p>{el.name}</p>
                            </div>  
                        ))
                    }

                </div>

                <div className="my-16 grid grid-cols-[1fr_1fr] gap-10">
                    {
                        projects.map((el, idx) => (
                            (el.tag === selectedCategory || selectedCategory === "All") && <ProjCard p={projects[idx]} wide />
                        ))
                    }
                </div>
            </div>
        </div>
    ) 
}