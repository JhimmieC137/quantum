'use client'
import FadeLeft from "@/ui/FadeLeft";
import { Montserrat } from "next/font/google";
import { ReactNode, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";


const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export default function SeviceSection(props: { 
    image: string,
    headerWhite: string,
    headerAmber: string,
    icon: ReactNode,
    description: string,
    link?: string,
}) {

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    return (
        <div 
            onClick={() => {
                setOpenDrawer(!openDrawer)
            }}
            style={{
                maxHeight: openDrawer ? "50rem" : "14rem",
                transitionDuration: "0.5s",
                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
            }}
            className={`w-full cursor-pointer hover:bg-zinc-950/10 border-t border-zinc-950/20 py-10 transition-all ease-in-out duration-300`}
        >
            <div className="flex items-center justify-between gap-7">
                <div className="flex justify-end items-center w-full">
                    <img
                        style={{
                            // maxWidth: openDrawer ? "27em" : "0",
                            // width: openDrawer ? "27em" : "0",
                            // height:  openDrawer ? "100%" : "0",
                            opacity: openDrawer ? 1 : 0,
                            transitionDuration: "0.8s"
                        }} 
                        src={props.image} 
                        className={`rounded-2xl transition-all ease-in-out duration-300 overflow-hidden w-full max-w-[27em]`} 
                    />
                </div>

                <FadeLeft>
                    <div className="w-full cursor-pointer flex justify-between items-center ">
                        <div className="flex flex-col justify-center items-left w-full cursor-pointer">
                            {props.icon}
                            <p className={`${montserrat.className} text-zinc-200 text-xl font-semibold my-3`}>
                                {props.headerWhite} <span className="text-amber-300">{props.headerAmber}</span>
                            </p>
                            <p 
                                style={{
                                    opacity: openDrawer ? 1 : 0,
                                    transitionDuration: "0.5s"
                                }}
                                className="text-zinc-200/80 pr-[10em] text-md transition-all ease-in-out duration-300"
                            >
                                {props.description}
                            </p>
                        </div>
                        <div
                            className={`w-1/3 flex items-center`}
                        >
                            <div  
                                style={{
                                    opacity: openDrawer ? 1 : 0,
                                    transitionDuration: "0.8s"
                                }}
                                className="bg-zinc-200 size-16 flex items-center justify-center rounded-full transition-all ease-in-out duration-300"
                            >
                                <HiArrowRight className="size-7 text-red-700 -rotate-45"/>
                            </div>
                        </div>
                    </div>
                </FadeLeft>
            </div>

        </div>
    )
}