'use client'

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { montserrat, garamond } from "@/lib/fonts";
import { pageRoutes } from "@/data/routes";

const stats = [
    { value: "58+", label: "Land plots sold" },
    { value: "17+", label: "Structures built" },
    { value: "2+",  label: "Years experience" },
]

export default function Hero() {
    const [videoReady, setVideoReady] = useState(false);
    const videoRef   = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
    const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
    const textY    = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
    const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity  = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        if (v.readyState >= 4) setVideoReady(true);
        else v.addEventListener("canplaythrough", () => setVideoReady(true), { once: true });
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full bg-[#FAF9F6] overflow-hidden">

            {/* ── Full-bleed image / video panel ─────────────────────── */}
            <div className="relative w-full h-[90vh] min-h-[560px] overflow-hidden">

                <motion.div className="absolute inset-0 w-full h-full scale-110" style={{ y: bgY }}>
                    {/* Fallback image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/wallpapers/mansion_a.png')",
                            opacity: videoReady ? 0 : 1,
                            transition: "opacity 1.2s ease",
                        }}
                    />
                    {/* Video */}
                    <video
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ opacity: videoReady ? 1 : 0, transition: "opacity 1.2s ease" }}
                        src="/videos/quantum-v.mp4"
                        autoPlay muted loop playsInline preload="auto"
                    />
                </motion.div>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/85 via-[#111110]/25 to-[#111110]/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/40 to-transparent" />

                {/* Eyebrow label */}
                <motion.div
                    className="absolute top-32 sm:top-36 left-0 right-0 flex justify-center z-10"
                    style={{ opacity }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className={`${montserrat.className} flex items-center gap-4`}>
                        <div className="w-8 h-px bg-[#b91c1c]" />
                        <span className="section-label text-[#b91c1c]">
                            (Premium Real Estate · Ibadan)
                        </span>
                        <div className="w-8 h-px bg-[#b91c1c]" />
                    </div>
                </motion.div>

                {/* Big editorial headline — overlaps image + cream */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 z-10 px-5 sm:px-10 lg:px-16 pb-10 sm:pb-16"
                    style={{ y: headingY, opacity }}
                >
                    <motion.h1
                        className={`${garamond.className} text-white leading-none font-normal tracking-tight`}
                        style={{ fontSize: "clamp(3.4rem, 8.5vw, 9.5rem)" }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.15 }}
                    >
                        A Call To<br />
                        Your{" "}
                        <em className="italic text-[#b91c1c]">Dream Home</em>
                    </motion.h1>
                </motion.div>

                {/* Scroll indicator */}
                <div className="absolute bottom-6 right-8 z-10 hidden md:flex flex-col items-center gap-2">
                    <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
                    <p className={`${montserrat.className} text-[9px] text-white/50 tracking-[0.28em] uppercase`}>Scroll</p>
                </div>
            </div>

            {/* ── Cream band — sub-copy + stats + CTAs ───────────────── */}
            <motion.div
                className="bg-[#FAF9F6] relative z-10"
                style={{ y: textY }}
            >
                {/* Red top accent line */}
                <div className="rule-red w-24 mx-auto" style={{ marginTop: "-1px" }} />

                <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-14 md:py-20">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-0">

                        {/* Left: para + CTAs */}
                        <motion.div
                            className="lg:w-[50%]"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <p className={`${garamond.className} text-[#555550] text-xl md:text-2xl leading-[1.7] mb-10 max-w-[40rem]`}>
                                We develop verified, well-located estates across Ibadan&apos;s fastest-growing corridors.
                                Every property is properly documented and built to deliver real, lasting value.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href={pageRoutes.projects}      className={`${montserrat.className} btn-red py-3 px-8 rounded-full text-[11px] font-bold tracking-widest uppercase`}>
                                    Explore Projects
                                </a>
                                <a href={pageRoutes.services.base} className={`${montserrat.className} btn-ghost py-3 px-8 rounded-full text-[11px] font-bold tracking-widest uppercase`}>
                                    Our Services
                                </a>
                            </div>
                        </motion.div>

                        {/* Right: Stats */}
                        <motion.div
                            className="lg:w-[44%] grid grid-cols-3 divide-x divide-[#111110]/12"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            {stats.map((s) => (
                                <div key={s.label} className="px-4 sm:px-7 first:pl-0 last:pr-0 flex flex-col justify-end">
                                    <p className={`stat-num text-[#b91c1c] mb-1`}>{s.value}</p>
                                    <p className={`${montserrat.className} text-[10px] text-[#888880] tracking-[0.14em] uppercase`}>{s.label}</p>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                </div>

                {/* Bottom thin rule */}
                <div className="rule max-w-[1400px] mx-auto" />
            </motion.div>
        </section>
    )
}
