'use client'

import FadeUp from "@/ui/FadeUp";
import { Montserrat } from "next/font/google";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";

type Project = {
    img: string;
    title: string;
    tag: string;
    location: string;
    year: string | number;
    type: string;
    slideShow?: string[];
    description?: string;
};

type ProjCardProps = {
    p: Project;
    wide?: boolean;
};

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const ProjCard: React.FC<ProjCardProps> = ({ p, wide = false }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const slides = p.slideShow?.length ? p.slideShow : [p.img];

    useEffect(() => {
        document.body.style.overflow = modalOpen ? "hidden" : "";
        return () => { document.body.style.overflow = "" };
    }, [modalOpen]);

    return (
        <>
            {/* Card */}
            <FadeUp>
                <div
                    onClick={() => setModalOpen(true)}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${wide ? "h-[480px] w-full" : "h-[460px] w-full"}`}
                >
                    <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-t from-black/75 via-black/20 to-black/5 group-hover:from-black/90 group-hover:via-black/40 group-hover:to-black/15" />

                    <div className="absolute top-4 left-4">
                        <span className={`bg-red-700 text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-3.5 py-1 rounded-full ${montserrat.className}`}>
                            {p.tag}
                        </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 px-5 py-5">
                        <p className={`${montserrat.className} text-[11px] text-white/50 tracking-[0.12em] mb-1`}>
                            {p.location} · {p.year}
                        </p>
                        <h3 className={`${montserrat.className} font-bold text-white mb-1 ${wide ? "text-[26px]" : "text-[20px]"}`}>
                            {p.title}
                        </h3>
                        <p className={`${montserrat.className} text-[13px] text-white/60`}>{p.type}</p>
                        {/* <div className="mt-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                            <span className={`${montserrat.className} text-[10px] font-semibold text-amber-300 tracking-[0.1em] uppercase`}>
                                Click to view Project
                            </span>
                        </div> */}
                    </div>
                </div>
            </FadeUp>

            {/* Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6"
                    onClick={() => setModalOpen(false)}
                >
                    <FadeUp>
                        <div className="w-full flex justify-center">
                            <div
                                className="relative bg-black rounded-3xl overflow-hidden w-full max-w-[77rem] h-[80vh] lg:h-[70vh] flex flex-col lg:flex-row"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="absolute top-4 right-4 z-20 size-9 flex items-center justify-center rounded-full border border-zinc-200/50 text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 ease-in-out duration-200"
                                >
                                    <HiX className="size-4" />
                                </button>

                                {/* Description */}
                                <div className="lg:w-[35%] w-full p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shrink-0 lg:h-full">
                                    <div>
                                        <h2 className={`${montserrat.className} text-white text-2xl sm:text-3xl font-bold mt-4 mb-1`}>
                                            {p.title.split(" ").slice(0, -1).join(" ")}{" "}
                                            <span className="text-amber-400 italic">
                                                {p.title.split(" ").at(-1)}
                                            </span>
                                        </h2>
                                        <p className={`${montserrat.className} text-zinc-400 text-sm mb-4`}>
                                            {p.location} · {p.year} · {p.type}
                                        </p>
                                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                            {p.description ?? "No description available for this project."}
                                        </p>
                                    </div>

                                    <a
                                        href="/contact"
                                        className="mt-8 py-3 px-6 bg-red-700 text-zinc-100 rounded-xl text-md font-semibold text-center hover:bg-red-600 ease-in-out duration-300 shrink-0 w-[80%]"
                                    >
                                        Contact Us
                                    </a>
                                </div>

                                {/* Slideshow */}
                                <div className="lg:w-3/5 w-full flex flex-col items-center justify-center lg:h-full min-h-[16rem] sm:min-h-[22rem] px-4 py-4 gap-6">

                                    <div className="w-full rounded-xl overflow-hidden" style={{ height: "70%" }}>
                                        <Swiper
                                            modules={[Navigation, Autoplay]}
                                            onSwiper={setSwiperInstance}
                                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                                            loop={slides.length > 1}
                                            className="w-full h-full"
                                        >
                                            {slides.map((src, i) => (
                                                <SwiperSlide key={i} className="w-full h-full">
                                                    <div className="w-full h-full">
                                                        <img
                                                            src={src}
                                                            alt={`${p.title} slide ${i + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>

                                    {/* Arrows call swiper instance directly */}
                                    {slides.length > 1 && (
                                        <div className="flex justify-center items-center gap-3 shrink-0">
                                            <button
                                                onClick={() => swiperInstance?.slidePrev()}
                                                className="size-10 flex items-center justify-center rounded-full border border-zinc-200/50 bg-transparent text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 ease-in-out duration-200"
                                            >
                                                <HiChevronLeft className="size-5" />
                                            </button>
                                            <button
                                                onClick={() => swiperInstance?.slideNext()}
                                                className="size-10 flex items-center justify-center rounded-full border border-zinc-200/50 bg-transparent text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 ease-in-out duration-200"
                                            >
                                                <HiChevronRight className="size-5" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            )}
        </>
    );
};

export default ProjCard;