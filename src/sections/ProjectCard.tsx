import { montserrat } from "@/app/(pages)/layout";
import FadeUp from "@/ui/FadeUp";
import React from "react";

type Project = {
  img: string;
  title: string;
  tag: string;
  location: string;
  year: string | number;
  type: string;
};

type ProjCardProps = {
  p: Project;
  wide?: boolean;
};

const ProjCard: React.FC<ProjCardProps> = ({ p, wide = false }) => {
  return (
    <FadeUp>
        <div
            className={`
                group relative overflow-hidden rounded-2xl cursor-pointer
                ${wide ? "h-[380px]" : "h-[260px]"}
        `}
        >
        {/* Image */}
        <img
            src={p.img}
            alt={p.title}
            className="
                w-full h-full object-cover
                transition-transform duration-[600ms] ease-[cubic-bezier(.25,.46,.45,.94)]
                group-hover:scale-105
            "
        />

        {/* Overlay */}
        <div
            className="
                absolute inset-0 transition-all duration-300
                bg-gradient-to-t from-black/75 via-black/20 to-black/5
                group-hover:from-black/90 group-hover:via-black/40 group-hover:to-black/15
            "
        />

        {/* Tag */}
        <div className="absolute top-4 left-4">
            <span className={`bg-[var(--R)] text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-3.5 py-1 rounded-full ${montserrat.className}`}>
                {p.tag}
            </span>
        </div>

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-5">
            <p className={`${montserrat.className} text-[11px] text-white/50 tracking-[0.12em] mb-1`}>
                {p.location} · {p.year}
            </p>

            <h3
                className={`
                    ${montserrat.className} font-bold text-white mb-1
                    ${wide ? "text-[26px]" : "text-[20px]"}
                `}
            >
                {p.title}
            </h3>

            <p className={`${montserrat.className} text-[13px] text-white/60`}>
                {p.type}
            </p>

            {/* Hover-only CTA */}
            {/* <div
            className="
                mt-2 opacity-0 translate-y-2
                transition-all duration-300
                group-hover:opacity-100 group-hover:translate-y-0
            "
            >
                <span className="font-[Outfit] text-[12px] font-bold text-[var(--Y)] tracking-[0.1em] uppercase">
                    View Project →
                </span>
            </div> */}
        </div>
        </div>
    </FadeUp>
  );
};

export default ProjCard;