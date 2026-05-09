'use client'

import { brand } from "@/lib/constants";

interface HeroBannerProps {
  /** Background image path e.g. "/wallpapers/construction_1.jpg" */
  image: string;
  /** Main hero heading — plain portion */
  title: string;
  /** Highlighted (amber italic) portion of the heading */
  titleAccent: string;
}


export default function HeroBanner({
  image,
  title,
  titleAccent,
}: HeroBannerProps) {

    return (
        <div className="relative h-[14rem] sm:h-[18rem] lg:h-[23rem] overflow-hidden">
            <div className="absolute inset-0 bg-black/70 z-10" />
            <img
                src={image}
                alt={`${title} ${titleAccent}`}
                className="absolute inset-0 object-cover object-center w-full h-full"
            />
            <p className="absolute inset-0 flex items-center justify-center text-zinc-200 text-5xl sm:text-7xl lg:text-[7.5rem] font-semibold z-20">
                {title}
                <span className={`${brand.amberAltText} italic ml-4`}>{titleAccent}</span>
            </p>
        </div>
    )
};