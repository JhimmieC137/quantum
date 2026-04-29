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
            onClick={() => setOpenDrawer(!openDrawer)}
            style={{
                maxHeight: openDrawer ? "70rem" : "14rem",
                transitionDuration: "0.5s",
                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
            }}
            className="w-full cursor-pointer hover:bg-zinc-950/10 border-t border-zinc-950/20 py-14 transition-all ease-in-out duration-300"
        >
            <div className={`flex lg:flex-row flex-col items-center justify-between gap-7 xl:max-w-[1400px] lg:max-w-[1000px] m-auto ${openDrawer ? 'max-h-[40rem]' : 'max-h-[6rem]'} transition-all ease-in-out duration-300 h-full px-5`}>
                <div className="flex xl:justify-end lg:justify-start items-center w-full">
                    <img
                        style={{
                            opacity: openDrawer ? 1 : 0,
                            transitionDuration: "0.8s"
                        }} 
                        src={props.image} 
                        className={`rounded-2xl transition-all ease-in-out duration-300 overflow-hidden w-full lg:max-w-[27em] ${openDrawer ? '' : 'hidden'}`} 
                    />
                </div>

                <FadeLeft>
                    <div className="w-full cursor-pointer flex justify-between items-center sm:flex-row flex-col h-full">
                        <div className="flex flex-col justify-center items-left w-full cursor-pointer">
                            {props.icon}
                            <p className={`${montserrat.className} text-zinc-200 lg:text-xl text-md font-semibold my-3`}>
                                {props.headerWhite} <span className="text-amber-300 italic">{props.headerAmber}</span>
                            </p>
                            <div
                                style={{
                                    opacity: openDrawer ? 1 : 0,
                                    transitionDuration: "0.5s",
                                    maxHeight: openDrawer ? "24rem" : "0rem"
                                }}
                                className="transition-all ease-in-out duration-300"
                            >
                                <p className="text-zinc-200/80 lg:text-md text-sm p-0 m-0 w-full">
                                    {props.description}
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 sm:w-[18%] w-full flex md:items-center md:justify-end sm:items-center sm:justify-center xl:pr-5 lg:pr-3 sm:px-3 sm:pt-0 pt-5 px-0">
                            <a
                                href={props.link}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div  
                                    style={{
                                        opacity: openDrawer ? 1 : 0,
                                        transitionDuration: "0.8s"
                                    }}
                                    className="bg-zinc-200 lg:size-16 size-12 flex items-center justify-center rounded-full border border-transparent transition-all ease-out duration-75 group hover:shadow-xl"
                                >
                                    <HiArrowRight className="lg:size-7 size-5 text-red-700 -rotate-45"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </FadeLeft>
            </div>
        </div>
    );
}