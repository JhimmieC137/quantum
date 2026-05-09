import FadeRight from "@/ui/FadeRight";
import FadeUp from "@/ui/FadeUp";
import { CgMenuGridO } from "react-icons/cg";
import { montserrat } from "@/lib/fonts";
import { brand } from "@/lib/constants";

interface PageHeroProps {
    CTAMain?: string
    CTAAccent?: string
  paragraphs: string[];
}

export default function PageHero({
  CTAMain,
  CTAAccent,
  paragraphs,
}: PageHeroProps) {
  return (
    <div className={brand.redBg}>

      {/* ── Body content ────────────────────────────────────────── */}
      <div className="xl:max-w-[1400px] lg:max-w-[1200px] md:max-w-full m-auto py-20 px-2">

        {
            (CTAMain || CTAAccent ) &&
            <FadeUp>
                <p className={`${montserrat.className} text-zinc-200 text-4xl lg:text-5xl font-semibold md:my-7 my-px`}>
                  {CTAMain} <span className={`${brand.amberLightText} italic`}>{CTAAccent}</span>
                </p>
            </FadeUp>
        }

        {/* Amber bar + paragraphs */}
        <div className="flex lg:gap-x-5 gap-x-3 my-10">
          <div className={`${brand.amberBg} lg:p-[3px] p-[2px] lg:max-w-[10px] max-w-[5px] z-20 flex-shrink-0`} />

          <FadeRight>
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-zinc-200/90 lg:text-3xl md:text-2xl text-md lg:pr-10 p-0 mb-5 max-w-[80rem]"
              >
                {text}
              </p>
            ))}
          </FadeRight>
        </div>
      </div>
    </div>
  );
}