'use client'

import { useState } from "react"
import ProjCard from "@/sections/projects/ProjectCard"
import FadeUp from "@/ui/FadeUp"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

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

export default function ProjectGrid({ categories, projects, maxWidth = "1400px" }: { categories: Category[], projects: Project[], maxWidth?: string }) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    return (
        <div className="bg-[#F4F2EC]">
            <div className="max-w-[1400px] m-auto py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">

                {/* Category filter — scrollable on mobile */}
                <FadeUp>
                    <div className="w-full flex gap-x-3 sm:gap-x-4 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((el) => (
                            <div
                                key={el.id}
                                onClick={() => setSelectedCategory(el.name)}
                                className={`flex-shrink-0 px-3 sm:px-4 py-2 border border-zinc-400/50 hover:border-transparent hover:bg-red-700 hover:text-zinc-200
                                    ${el.name === selectedCategory ? "bg-red-700 text-zinc-200 border-transparent" : "bg-transparent text-zinc-800"}
                                    rounded-xl cursor-pointer ease-in-out duration-300 text-sm sm:text-base whitespace-nowrap`}
                            >
                                <p className="font-semibold">{el.name}</p>
                            </div>
                        ))}
                    </div>

                    {/* Active category description */}
                    <p
                        key={selectedCategory}
                        className={`${montserrat.className} mt-4 text-sm text-zinc-500 tracking-wide transition-opacity duration-300 ease-in-out min-h-[1.25rem]`}
                        style={{ animation: "fadeIn 0.35s ease" }}
                    >
                        {categories.find(c => c.name === selectedCategory)?.description ?? ""}
                    </p>
                </FadeUp>

                <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }`}</style>

                {/* Project grid */}
                <div className="my-10 sm:my-12 lg:my-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
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