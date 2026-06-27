'use client'

import { useState } from "react"
import ProjCard from "@/sections/projects/ProjectCard"
import FadeUp from "@/ui/FadeUp"
import { montserrat, garamond } from "@/lib/fonts"
import { layout } from "@/lib/constants"

type Category = {
  id: number;
  name: string;
  description?: string;
};

type Project = {
  title: string;
  type: string;
  location: string;
  year: string;
  tag: string;
  img: string;
};

export default function ProjectGrid({ categories, projects }: { categories: Category[], projects: Project[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    return (
        <div className="bg-zinc-950">
            <div className={`${layout.container} ${layout.sectionPy}`}>

                {/* Section heading */}
                <FadeUp>
                    <p className={`${montserrat.className} text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-4`}>
                        Our Portfolio
                    </p>
                    <h2 className={`${montserrat.className} text-zinc-200 text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10`}>
                        All Projects
                    </h2>
                </FadeUp>

                {/* Category filter — scrollable on mobile */}
                <FadeUp>
                    <div className="w-full flex gap-x-2 sm:gap-x-3 overflow-x-auto pb-2 scrollbar-hide mb-2">
                        {categories.map((el) => (
                            <button
                                key={el.id}
                                onClick={() => setSelectedCategory(el.name)}
                                className={`flex-shrink-0 px-4 py-2 border-b-2 transition-all duration-200 whitespace-nowrap
                                    ${el.name === selectedCategory
                                        ? "border-[#6B7A3A] text-zinc-100"
                                        : "border-transparent text-zinc-500 hover:text-zinc-300"
                                    }`}
                            >
                                <p className={`${montserrat.className} font-semibold text-sm sm:text-base`}>{el.name}</p>
                            </button>
                        ))}
                    </div>

                    {/* Active category description */}
                    <p
                        key={selectedCategory}
                        className={`${garamond.className} mt-2 text-sm text-zinc-400 tracking-wide min-h-[1.25rem]`}
                        style={{ animation: "fadeIn 0.35s ease" }}
                    >
                        {categories.find(c => c.name === selectedCategory)?.description ?? ""}
                    </p>
                </FadeUp>

                <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }`}</style>

                {/* Project grid */}
                <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                    {projects.map((el, idx) => (
                        (el.tag === selectedCategory || selectedCategory === "All") && (
                            <ProjCard key={idx} p={projects[idx]} wide />
                        )
                    ))}
                </div>

            </div>
        </div>
    )
}
