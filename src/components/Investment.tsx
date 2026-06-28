import FadeLeft from "@/ui/FadeLeft";
import FadeUp from "@/ui/FadeUp";
import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { montserrat } from "@/lib/fonts";
import { brand } from "@/lib/constants";

type Props = {};

const InvestmentSection: React.FC<Props> = () => {

  return (
    <section className={`relative overflow-hidden ${brand.pageBg} xl:p-20 md:p-5 p-2 w-full`}>
      <FadeUp>
        <div className="max-w-[1400px] m-auto xl:px-20 md:px-10 px-5 py-11 my-20 bg-white border border-zinc-200 rounded-[2rem] overflow-hidden relative">
            <img src="/quantum_logo.png" className="absolute opacity-[0.04] lg:-bottom-[32%] -bottom-[50%] lg:-right-[10%] -right-[30%] -rotate-[38deg] w-[33rem]"/>
            <img src="/quantum_logo.png" className="absolute opacity-[0.04] lg:-top-[28%] -top-[35%] lg:-left-[18%] -left-[34%] rotate-[138deg] w-[33rem]"/>

            {/* Content */}
            <div className="relative w-full">
                <div>
                {/* Subtitle */}
                    <FadeUp>
                        <div className="w-fit m-auto flex gap-x-1.5 justify-center items-center p-2 border border-zinc-300 rounded-lg bg-transparent shadow-sm">
                            <CgMenuGridO className="size-4 text-zinc-500"/>
                            <p className="text-zinc-600 text-sm">Investment Philosophy</p>
                        </div>
                    </FadeUp>

                {/* Heading */}
                <h2 className={`my-6 ${montserrat.className} text-center lg:text-6xl md:text-5xl text-4xl font-semibold leading-[1.05] text-zinc-900`}>
                    A piece of land is
                    <br />
                    more<span className={`${brand.amberAltText} italic`}> than gold.</span>
                </h2>

                {/* Buttons */}
                <div className="flex gap-4">
                    <a href="/contact" className="max-w-fit m-auto py-2 px-4 rounded-lg bg-zinc-900 text-zinc-100 text-md hover:bg-zinc-700 duration-150 ease-in-out hover:shadow-xl cursor-pointer shadow-lg">
                        <p className={montserrat.className}>
                            Start Your Journey
                        </p>
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
