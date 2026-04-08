'use client'

import { CgMenuGridO } from "react-icons/cg"
import MainLayout, { montserrat } from "../(pages)/layout"
import FadeUp from "@/ui/FadeUp"
import FadeRight from "@/ui/FadeRight"
import InvestmentSection from "@/components/Investment"
import OurClients from "@/components/OurClients"
import { useState } from "react"
import ProjCard from "@/sections/ProjectCard"

export default function About() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    const categories = [
        {
           id: 1,
           name: "All" 
        },
        {
           id: 2,
           name: "Commercial" 
        },
        {
           id: 3,
           name: "Residential" 
        },
        {
           id: 4,
           name: "Luxury" 
        },
        {
           id: 5,
           name: "Premium" 
        },
    ]

    const PROJECTS = [
        { title: "Emerald Residences", type: "Luxury Duplex", location: "Lekki Phase 1", year: "2024", tag: "Residential", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
        { title: "The Ashford Estate", type: "Detached Villa", location: "Ikoyi", year: "2023", tag: "Premium", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" },
        { title: "Horizon Court", type: "Mixed-Use Complex", location: "Victoria Island", year: "2024", tag: "Commercial", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80" },
        { title: "Sapphire Heights", type: "Penthouse", location: "Eko Atlantic", year: "2023", tag: "Luxury", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" },
        { title: "Coral Gardens", type: "Terrace Housing", location: "Magodo GRA", year: "2024", tag: "Residential", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
    ];

    return (
        <MainLayout>
            <div className="relative max-h-[23rem] overflow-hidden">
                <div className="absolute inset-0 bg-black/70"/>
                <img src="/wallpapers/construction_1.jpg" className="bg-cover -z-10 w-full -mt-32"/>
                <p className="absolute top-[25%] left-0 right-0 text-zinc-200 text-[7.5rem] font-semibold m-auto w-fit z-50">Our <span className="text-amber-500 italic">Projects</span></p>
            </div>
            <div className="bg-[#F4F2EC]">
                <div className="max-w-[1400px] m-auto py-32">

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
                            PROJECTS.map((el, idx) => (
                                (el.tag === selectedCategory || selectedCategory === "All") && <ProjCard p={PROJECTS[idx]} wide />
                            ))
                        }
                    </div>
                </div>
            </div>
            <InvestmentSection />
        </MainLayout>
    ) 
}