import { montserrat } from "@/app/(pages)/layout";
import FadeLeft from "@/ui/FadeLeft";
import FadeUp from "@/ui/FadeUp";
import React from "react";
import { CgMenuGridO } from "react-icons/cg";

type Props = {};

const InvestmentSection: React.FC<Props> = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4F2EC] p-20 w-full">
      {/* Background GOLD text */}
      <FadeUp>
        <div className="max-w-[85%] m-auto px-20 py-11 my-20 bg-red-700 rounded-[2rem] overflow-hidden relative">
            {/* <FadeLeft>
                <div className={`absolute -bottom-10 -right-10 ${montserrat.className} text-[clamp(120px,16vw,220px)] font-extrabold leading-none text-black/10`}>
                    GOLD
                </div>
            </FadeLeft> */}

            <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[32%] -right-[10%] -rotate-[38deg] w-[33rem]"/>
            <img src="/quantum_logo.png" className="absolute opacity-10 -top-[28%] -left-[18%] rotate-[138deg] w-[33rem]"/>

            {/* Content */}
            <div className="relative w-full">
                <div>
                {/* Subtitle */}
                    <FadeUp>
                        <div className="w-fit m-auto flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md">
                            <CgMenuGridO className="size-4 text-zinc-200"/>
                            <p className="text-zinc-100/80 text-sm">Investment Philosophy</p>
                        </div>
                    </FadeUp>

                {/* Heading */}
                <h2 className={`my-6 ${montserrat.className} text-center text-6xl font-semibold leading-[1.05] text-white`}>
                    A piece of land is
                    <br />
                    more<span className="text-amber-300 italic">than gold.</span>
                </h2>

                {/* Description */}
                <p className="mb-11 max-w-[70%] m-auto text-md text-center leading-[1.65] text-white/75">
                    Real estate isn't just property. it's legacy. We help you invest in
                    spaces that appreciate in value, culture, and meaning for generations
                    to come.
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                    <div className="max-w-fit m-auto py-2 px-4 rounded-lg border border-transparent bg-zinc-200 text-red-700 text-md hover:bg-transparent hover:border-zinc-200/20 hover:text-zinc-200 duration-150 ease-in-out hover:shadow-xl cursor-pointer shadow-lg">
                        <p>
                            Start Your Journey
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default InvestmentSection;