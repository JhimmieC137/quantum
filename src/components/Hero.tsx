'use client'

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import FadeUp from "@/ui/FadeUp";
import { pageRoutes } from "@/data/routes";
import { montserrat } from "@/lib/fonts";

export default function Hero() {
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Parallax scroll
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (video.readyState >= 4) {
            setVideoReady(true);
        } else {
            video.addEventListener('canplaythrough', () => setVideoReady(true), { once: true });
        }
    }, []);

    const stats = [
        { value: "58+", label: "Land plots sold" },
        { value: "17+", label: "Structures built" },
        { value: "2+",  label: "Years experience" },
    ];

    return (
        <div ref={sectionRef} className="max-w-screen min-h-screen w-full relative overflow-hidden bg-[#0e1520]">

            {/* Parallax background layer */}
            <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
                {/* Fallback image */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-110 transition-opacity duration-1000"
                    style={{
                        backgroundImage: "url('/wallpapers/mansion_a.png')",
                        opacity: videoReady ? 0 : 0.45,
                    }}
                />

                {/* Video */}
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-1000"
                    style={{ opacity: videoReady ? 0.42 : 0 }}
                    src="/videos/quantum-v.mp4"
                    autoPlay muted loop playsInline preload="auto"
                />
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0e1520]/90 via-[#1F2A44]/70 to-[#0e1520]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1520] via-transparent to-transparent" />

            {/* Decorative orbs */}
            <div className="orb absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#6B7A3A]/20 opacity-60" />
            <div className="orb absolute bottom-10 -left-10 w-[300px] h-[300px] bg-[#C9A84C]/10 opacity-40" style={{ animationDelay: '3s' }} />

            {/* Vertical gold accent bar */}
            <div className="absolute left-0 top-24 w-[3px] h-28 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent" />

            {/* Content */}
            <motion.div
                className="relative z-10 min-h-screen flex justify-center md:items-center md:pb-0 items-end pb-[5rem]"
                style={{ y: textY, opacity }}
            >
                <div className="xl:max-w-[1200px] 2xl:max-w-[1400px] lg:max-w-[1000px] px-5 w-full">

                    <FadeUp>
                        <div className={`${montserrat.className} flex items-center gap-4 mb-6 sm:flex hidden`}>
                            <div className="h-px w-12 bg-[#C9A84C]" />
                            <p className="text-xs font-bold text-[#C9A84C] tracking-[0.22em] uppercase">
                                Premium Real Estate · Ibadan
                            </p>
                        </div>
                    </FadeUp>

                    <FadeUp>
                        <h1 className={`${montserrat.className} 2xl:text-[5.8rem] xl:text-[5rem] sm:text-[3.8rem] text-[2.4rem] 2xl:leading-[6.8rem] xl:leading-[5.8rem] sm:leading-[4.4rem] leading-[2.8rem] font-semibold text-zinc-100 mb-6 sm:text-left text-center`}>
                            A Call To Your{" "}
                            <em className="not-italic text-gradient-gold font-bold">Dream Home</em>
                        </h1>
                    </FadeUp>

                    <FadeUp>
                        <p className="hidden md:block text-[15px] xl:max-w-[46rem] lg:max-w-[38rem] text-zinc-300/80 leading-relaxed mb-10">
                            We develop verified, well-located estates across Ibadan's
                            fastest-growing corridors. Every property is properly documented
                            and built to deliver real, lasting value.
                        </p>
                    </FadeUp>

                    <FadeUp>
                        <div className="flex gap-4 mt-8 sm:flex-row flex-col sm:w-auto w-[72%] mx-auto sm:mx-0">
                            <a
                                href={pageRoutes.projects}
                                className="btn-shimmer text-white py-3 px-8 rounded-full font-semibold text-sm tracking-wide text-center shadow-lg"
                            >
                                Explore Projects
                            </a>
                            <a
                                href={pageRoutes.services.base}
                                className="py-3 px-8 border border-white/25 rounded-full text-zinc-200 hover:border-[#C9A84C] hover:text-[#C9A84C] text-sm font-medium transition-all duration-300 text-center backdrop-blur-sm"
                            >
                                Our Services
                            </a>
                        </div>
                    </FadeUp>

                    {/* Stats */}
                    <FadeUp>
                        <div className="hidden sm:flex gap-0 mt-14">
                            {stats.map((s, i) => (
                                <div
                                    key={s.label}
                                    className={`pr-10 ${i > 0 ? 'pl-10 border-l border-[#C9A84C]/30' : ''}`}
                                >
                                    <p className={`${montserrat.className} xl:text-5xl text-4xl font-bold text-gradient-gold mb-1`}>
                                        {s.value}
                                    </p>
                                    <p className="text-xs text-zinc-400 tracking-[0.1em] uppercase">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </div>
            </motion.div>

            {/* Scroll cue */}
            <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
                <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#C9A84C]" />
                <p className="text-[9px] text-zinc-500 tracking-[0.18em] uppercase">scroll</p>
            </div>
        </div>
    )
}
