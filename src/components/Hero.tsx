import { useState, useRef, useEffect } from "react";
import FadeUp from "@/ui/FadeUp";
import { pageRoutes } from "@/data/routes";
import { montserrat } from "@/lib/fonts";
import { brand } from "@/lib/constants";

export default function Hero() {
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        // canplaythrough = fully buffered enough to play without stopping
        if (video.readyState >= 4) {
            setVideoReady(true);
        } else {
            video.addEventListener('canplaythrough', () => setVideoReady(true), { once: true });
        }
    }, []);

    return (
        <div className="max-w-screen min-h-screen w-full relative overflow-hidden">

            {/* Fallback background image — always mounted */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80')",
                    opacity: videoReady ? 0 : 1,
                }}
            />

            {/* Background video — preloads silently, fades in when ready */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                style={{ opacity: videoReady ? 1 : 0 }}
                src="/videos/quantum-v.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent md:from-zinc-950/50 via-zinc-950/50 md:via-zinc-950/70 to-zinc-950 md:to-zinc-950" />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex justify-center md:items-center md:pb-0 items-end pb-[3rem]">
                <div className="xl:max-w-[1200px] 2xl:max-w-[1400px] lg:max-w-[1000px] px-2 w-full">
                    <div className="flex">
                        <div className="w-full">
                            <FadeUp>
                                <p className={`${montserrat.className} 2xl:text-[6rem] xl:text-[5.2rem] sm:text-[4rem] text-[2.5rem] 2xl:leading-[7.5rem] xl:leading-[6rem] sm:leading-[4.5rem] leading-[2.8rem] font-semibold 2xl:max-w-[55rem] xl:max-w-[42rem] lg:max-w-[36rem] max-w-[26rem] text-zinc-200 mb-5 sm:text-left text-center sm:m-0 m-auto`}>
                                    A Call To Your <span className={`${brand.amberText} `}>Dream Home</span>
                                </p>
                            </FadeUp>

                            <FadeUp>
                                <div className="flex gap-5 mt-10 justify-start sm:flex-row flex-col md:w-full w-[70%] mx-auto">
                                    <a href={pageRoutes.projects} className={`sm:py-3 py-2 sm:px-8 px-3 ${brand.redBg} text-zinc-100 rounded-xl hover:bg-zinc-200 hover:text-zinc-900 ease-in-out duration-300 cursor-pointer`}>
                                        <p className={`${montserrat.className} text-md text-center`}>Explore projects</p>
                                    </a>
                                    <a href={pageRoutes.services.base} className="sm:py-3 py-2 sm:px-8 px-3 border border-zinc-200/60 rounded-xl hover:bg-zinc-200 hover:text-zinc-900 text-zinc-200 ease-in-out duration-300 cursor-pointer">
                                        <p className={`${montserrat.className} text-md text-center`}>Our services</p>
                                    </a>
                                </div>
                            </FadeUp>


                            <FadeUp>
                                <div className="hidden sm:flex divide-x divide-amber-400 divide-opacity-50 mt-10 tracking-widest justify-start text-left">
                                    <div className="pr-8">
                                        <p className={`${montserrat.className} xl:text-5xl text-4xl mb-px ${brand.amberText} font-semibold`}>58+</p>
                                        <p className="text-sm text-zinc-100/60">Land plots sold</p>
                                    </div>

                                    <div className="px-8">
                                        <p className={`${montserrat.className} xl:text-5xl text-4xl mb-px ${brand.amberText} font-semibold`}>17+</p>
                                        <p className="text-sm text-zinc-100/60">Structures built</p>
                                    </div>

                                    <div className="pl-8">
                                        <p className={`${montserrat.className} xl:text-5xl text-4xl mb-px ${brand.amberText} font-semibold`}>2+</p>
                                        <p className="text-sm text-zinc-100/60">Years experience</p>
                                    </div>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}