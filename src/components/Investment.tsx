import FadeLeft from "@/ui/FadeLeft";
import FadeUp from "@/ui/FadeUp";
import { Montserrat } from "next/font/google";
import React from "react";
import { CgMenuGridO } from "react-icons/cg";

type Props = {};

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const InvestmentSection: React.FC<Props> = () => {
    
  return (
    <section className="relative overflow-hidden bg-[#F4F2EC] xl:p-20 md:p-5 p-2 w-full">
      {/* Background GOLD text */}
      <FadeUp>
        <div className="max-w-[1400px] m-auto xl:px-20 md:px-10 px-5 py-11 my-20 bg-red-700 rounded-[2rem] overflow-hidden relative">
            {/* <FadeLeft>
                <div className={`absolute -bottom-10 -right-10 ${montserrat.className} text-[clamp(120px,16vw,220px)] font-extrabold leading-none text-black/10`}>
                    GOLD
                </div>
            </FadeLeft> */}

            <img src="/quantum_logo.png" className="absolute opacity-10 lg:-bottom-[32%] -bottom-[50%] lg:-right-[10%] -right-[30%] -rotate-[38deg] w-[33rem]"/>
            <img src="/quantum_logo.png" className="absolute opacity-10 lg:-top-[28%] -top-[35%] lg:-left-[18%] -left-[34%] rotate-[138deg] w-[33rem]"/>

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
                <h2 className={`my-6 ${montserrat.className} text-center lg:text-6xl md:text-5xl text-4xl font-semibold leading-[1.05] text-white`}>
                    A piece of land is
                    <br />
                    more<span className="text-amber-300 italic">than gold.</span>
                </h2>

                {/* Description */}
                <p className="mb-11 xl:max-w-[70%] max-w-[90%] m-auto md:text-md text-sm text-center md:leading-[1.65] text-white/75">
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