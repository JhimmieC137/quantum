import { useState, useRef, useEffect } from "react";
import FadeUp from "@/ui/FadeUp";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

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
                <div className="xl:max-w-[1200px] 2xl:max-w-[1400px] lg:max-w-[1000px] px-2 w-full">
                    <div className="flex -mt-24">
                        <div className="w-full">
                            <FadeUp>
                                <div className={`${montserrat.className} sm:flex justify-start gap-4 items-center mb-5 pl-1 hidden `}>
                                    <div className="h-px xl:w-16 lg:w-10 sm:w-7 w-0 bg-[#C4161C]"/>
                                    <p className={`${montserrat.className} text-xs font-bold text-amber-400 tracking-widest`}>PREMIUM REAL ESTATE · LAGOS · IBADAN</p>
                                </div>
                            </FadeUp>

                            <FadeUp>
                                <p className={`${montserrat.className} 2xl:text-[6rem] xl:text-[5.2rem] sm:text-[4rem] text-[3rem] 2xl:leading-[7.5rem] xl:leading-[6rem] sm:leading-[4.5rem] leading-[3rem] font-semibold 2xl:max-w-[55rem] xl:max-w-[42rem] lg:max-w-[36rem] max-w-[30rem] text-zinc-200 mb-5 sm:text-left text-center sm:m-0 m-auto`}>
                                    Where Land Meets <span className="text-amber-400">Legacy.</span>
                                </p>
                            </FadeUp>

                            <FadeUp>
                                <div className="flex-row text-left items-end">
                                    <p className="sm:text-[15px] text-sm xl:max-w-[50rem] lg:max-w-[40rem] max-w-[35rem] sm:m-0 m-auto text-zinc-200 sm:text-left text-center">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repellat, laudantium 
                                        doloremque, similique dolores inventore incidunt eveniet quae iure dicta, pariatur aut.
                                    </p>
                                </div>
                            </FadeUp>

                            <FadeUp>
                                <div className="flex gap-5 mt-10 justify-start sm:flex-row flex-col w-full">
                                    <div className="sm:py-3 py-2 sm:px-8 px-4 bg-red-600 text-zinc-100 rounded-xl hover:bg-zinc-200 hover:text-zinc-900 ease-in-out duration-300 cursor-pointer">
                                        <p className="text-md text-center">Explore properties</p>
                                    </div>
                                    <div className="sm:py-3 py-2 sm:px-8 px-4 border border-zinc-200 rounded-xl hover:bg-zinc-200 hover:text-zinc-900 text-zinc-300 ease-in-out duration-300 cursor-pointer">
                                        <p className="text-md text-center">Our services</p>
                                    </div>
                                </div>
                            </FadeUp>


                            <FadeUp>
                                <div className="hidden sm:flex divide-x divide-amber-400 divide-opacity-50 mt-10 tracking-widest justify-start text-left">
                                    <div className="pr-8">
                                        <p className={`${montserrat.className} xl:text-5xl text-4xl mb-px text-amber-400 font-semibold`}>500+</p>
                                        <p className="text-sm text-zinc-100/60">Land plots sold</p>
                                    </div>
                                
                                    <div className="px-8">
                                        <p className={`${montserrat.className} xl:text-5xl text-4xl mb-px text-amber-400 font-semibold`}>120+</p>
                                        <p className="text-sm text-zinc-100/60">Structures built</p>
                                    </div>
                                    
                                    <div className="pl-8">
                                        <p className={`${montserrat.className} xl:text-5xl text-4xl mb-px text-amber-400 font-semibold`}>10+</p>
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