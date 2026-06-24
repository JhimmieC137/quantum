"use client"

import FadeUp from "@/ui/FadeUp"
import { montserrat } from "@/lib/fonts";
import { LayoutGrid } from "lucide-react"


export default function ProjectSection(props: {
    label: string,
    date: string,
    image: string,
    titleWhite: string,
    titleAmber: string,
    description: string,
    slideShow: string,
    link?: string,
 }) {

    return(
        <div className="w-full max-w-[1400px] m-auto rounded-2xl overflow-hidden relative px-12 py-16 group my-14">
            <img src={props.image} className="w-full absolute inset-0 bg-cover group-hover:scale-125 ease-in-out duration-500" />
            {/* <div className="absolute z-10 bg-red-600/60 inset-0 w-full"/> */}

            <div className="w-full flex justify-start">
                <div className="w-[31%] bg-red-700 rounded-2xl p-6 z-30">
                    <div className="w-full flex justify-between items-center my-3">
                        <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-sm bg-transparent shadow-md">
                            <LayoutGrid size={14} className="text-zinc-200"/>
                            <p className="text-zinc-100/80 text-sm">{props.label}</p>
                        </div>
                        <p className="text-amber-300">
                            {props.date}
                        </p>
                    </div>

                    <div className="w-full rounded-xl overflow-hidden my-5 max-h-[10em]">
                        <img src={props.image} alt="" className="w-full"/>
                    </div>

                    <div className="w-full mb-7">
                        <p className={`${montserrat.className} text-xl text-zinc-200 font-semibold`}>
                            {props.titleWhite} <span className="text-amber-300">{props.titleAmber}</span>
                        </p>
                        <p className="text-sm text-zinc-200/80 mt-2">
                            {props.description}
                        </p>
                    </div>

                    <div className="max-w-fit py-2 px-4 rounded-lg bg-slate-200 text-zinc-700/80 text-md hover:bg-transparent border hover:border-slate-200/50 hover:text-zinc-200 duration-150 ease-in-out shadow-md hover:shadow-none cursor-pointer">
                        <p>
                            Check Project
                        </p>
                    </div>

                </div>
            </div>               

        </div>
    )
}