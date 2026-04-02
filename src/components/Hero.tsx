import { useState, useRef, useEffect } from "react";
import { montserrat } from "@/app/(pages)/layout";
import FadeUp from "@/ui/FadeUp";

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
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/70 to-zinc-950" />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex justify-center items-center">
                <div className="max-w-[1400px] w-full">
                    <div className="flex justify-start -mt-24">
                        <div className="w-full">
                            <FadeUp>
                                <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-5 pl-1`}>
                                    <div className="h-px w-16 bg-[#C4161C]"/>
                                    <p className={`${montserrat.className} text-xs font-bold text-amber-400 tracking-widest`}>PREMIUM REAL ESTATE · LAGOS · IBADAN</p>
                                </div>
                            </FadeUp>

                            <FadeUp>
                                <p className={`${montserrat.className} text-[6rem] leading-[7.5rem] font-semibold max-w-[55rem] text-zinc-200 mb-5`}>
                                    Where Land Meets <span className="text-amber-400">Legacy.</span>
                                </p>
                            </FadeUp>

                            <FadeUp>
                                <div className="flex-row text-left items-end">
                                    <p className="text-[15px] max-w-[50rem] text-zinc-200">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repellat, laudantium 
                                        doloremque, similique dolores inventore incidunt eveniet quae iure dicta, pariatur aut.
                                    </p>
                                </div>
                            </FadeUp>

                            <FadeUp>
                                <div className="flex gap-5 mt-10">
                                    <div className="py-4 px-10 bg-red-600 text-zinc-100 rounded-xl hover:bg-zinc-200 hover:text-zinc-900 ease-in-out duration-300 cursor-pointer">
                                        <p className="text-md">Explore properties</p>
                                    </div>
                                    <div className="py-4 px-10 border border-zinc-200 rounded-xl hover:bg-zinc-200 hover:text-zinc-900 text-zinc-300 ease-in-out duration-300 cursor-pointer">
                                        <p className="text-md">Our services</p>
                                    </div>
                                </div>
                            </FadeUp>


                            <FadeUp>
                                <div className="flex divide-x divide-amber-400 divide-opacity-50 mt-10 tracking-widest">
                                    <div className="pr-8">
                                        <p className={`${montserrat.className} text-5xl mb-px text-amber-400 font-semibold`}>500+</p>
                                        <p className="text-sm text-zinc-100/60">Land plots sold</p>
                                    </div>
                                
                                    <div className="px-8">
                                        <p className={`${montserrat.className} text-5xl mb-px text-amber-400 font-semibold`}>120+</p>
                                        <p className="text-sm text-zinc-100/60">Structures built</p>
                                    </div>
                                    
                                    <div className="pl-8">
                                        <p className={`${montserrat.className} text-5xl mb-px text-amber-400 font-semibold`}>10+</p>
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