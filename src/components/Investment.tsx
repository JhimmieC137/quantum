import FadeUp from "@/ui/FadeUp";
import React from "react";
import { montserrat, garamond } from "@/lib/fonts";

type Props = {};

const InvestmentSection: React.FC<Props> = () => {

  return (
    <section className="relative overflow-hidden bg-zinc-900 xl:p-20 md:p-5 p-2 w-full">
      <FadeUp>
        <div className="max-w-7xl m-auto xl:px-20 md:px-10 px-5 py-11 my-20 glass rounded-sm overflow-hidden relative">

            {/* Content */}
            <div className="relative w-full">
                <div>
                {/* Subtitle */}
                    <FadeUp>
                        <div className="w-fit m-auto flex gap-x-1.5 justify-center items-center p-2 border border-white/20 rounded-sm bg-transparent shadow-md">
                            <p className={`${montserrat.className} text-zinc-300/80 text-[10px] tracking-[0.2em] uppercase`}>Investment Philosophy</p>
                        </div>
                    </FadeUp>

                {/* Heading */}
                <h2 className={`my-6 ${montserrat.className} text-center lg:text-6xl md:text-5xl text-4xl font-semibold leading-[1.05] text-zinc-100`}>
                    A piece of land is
                    <br />
                    more<span className="text-amber-300 italic"> than gold.</span>
                </h2>

                {/* Description */}
                <p className={`${garamond.className} mb-11 xl:max-w-[70%] max-w-[90%] m-auto md:text-lg text-base text-center md:leading-[1.65] text-zinc-400`}>
                    Real estate isn&apos;t just property — it&apos;s legacy. We help you invest in
                    spaces that appreciate in value, culture, and meaning for generations
                    to come.
                </p>

                {/* Button */}
                <div className="flex gap-4">
                    <a
                        href="/contact"
                        className={`${montserrat.className} max-w-fit m-auto py-3 px-6 rounded-sm border border-transparent bg-[#b91c1c] hover:bg-[#dc2626] text-white text-[10px] tracking-[0.25em] uppercase font-semibold transition-colors duration-200 cursor-pointer`}
                    >
                        Start Your Journey
                    </a>
                </div>
                </div>
            </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default InvestmentSection;
