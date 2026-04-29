import FadeUp from "@/ui/FadeUp"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function CoreValues() {
    const VALUES = [
    { num: "01", title: "Integrity", desc: "Transparent dealings and unwavering ethical standards in every project." },
    { num: "02", title: "Innovation", desc: "Cutting-edge design and technology that redefines what's possible." },
    { num: "03", title: "Excellence", desc: "Every detail deliberate. Perfection from blueprint to final finish." },
    { num: "04", title: "Sustainability", desc: "Building for today without compromising the world of tomorrow." },
    ];


    return (
        <div className="w-full py-24 relative">
            {/* <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950/50 z-10" /> */}
            <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.07] -top-[110%] -left-[20%]" />

            <div className="w-full 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] relative z-20 m-auto mt-10 px-2">
                <div className="w-full flex justify-between z-40">
                    <div className="w-full">
                        <FadeUp>
                            <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-2 pl-1`}>
                                <div className="h-px xl:w-16 lg:w-10 w-7 bg-red-500"/>
                                <p className={`${montserrat.className} text-xs font-bold text-amber-500 tracking-widest`}>WHAT WE OFFER</p>
                            </div>
                        </FadeUp>
                        <FadeUp>
                            <p className={`${montserrat.className} text-zinc-800 text-left lg:text-5xl text-3xl font-semibold my-3`}>
                                Our Core <span className="text-amber-500 italic">Values</span>
                            </p>
                        </FadeUp>
                        <FadeUp>
                            <p className="text-zinc-600 text-left lg:text-md text-sm pr-10 my-5 max-w-[40rem]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, in aperiam assumenda nam earum vel deserunt?
                            </p>
                        </FadeUp>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                    {VALUES.map((v, i) => (
                        <div key={v.title}>
                            <div
                                className="relative overflow-hidden cursor-pointer rounded-xl border border-amber-400 bg-red-700 px-7 py-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl h-full"
                            >
                                {/* Top gradient bar */}
                                {/* <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 to-amber-300 z-50" /> */}

                                {/* Number */}
                                {/* <span className={`${montserrat.className} text-[48px] font-extrabold leading-none text-red-500`}>
                                    {v.num}
                                </span> */}

                                {/* Title */}
                                <h3 className={`${montserrat.className} mt-3 mb-3 text-2xl font-semibold text-amber-300 italic`}>
                                    {v.title}
                                </h3>

                                {/* Description */}
                                <p className={`${montserrat.className} text-sm leading-[1.7] text-zinc-200`}>
                                    {v.desc}
                                </p>


                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}