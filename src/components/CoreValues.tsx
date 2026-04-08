import FadeUp from "@/ui/FadeUp"
import { montserrat } from "@/app/(pages)/layout";

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

            <div className="w-full max-w-[1400px] relative z-20 m-auto mt-10">
                <div className="w-full flex justify-between z-40">
                    <div className="w-full">
                        <FadeUp>
                            <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-2 pl-1`}>
                                <div className="h-px w-16 bg-red-500"/>
                                <p className={`${montserrat.className} text-xs font-bold text-amber-500 tracking-widest`}>WHAT WE OFFER</p>
                            </div>
                        </FadeUp>
                        <FadeUp>
                            <p className={`${montserrat.className} text-zinc-800 text-left text-5xl font-semibold my-3`}>
                                Our Core <span className="text-amber-500 italic">Values</span>
                            </p>
                        </FadeUp>
                        <FadeUp>
                            <p className="text-zinc-600 text-left text-md pr-10 my-5 max-w-[40rem]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, in aperiam assumenda nam earum vel deserunt?
                            </p>
                        </FadeUp>
                    </div>
                    {/* <div className="w-full flex items-end justify-end">
                        <div className="max-w-fit py-2 px-4 rounded-lg bg-transparent border border-zinc-700/20 text-zinc-700/80 text-md hover:bg-transparent hover:border-red-500 hover:text-red-500 duration-150 ease-in-out shadow-md hover:shadow-none cursor-pointer">
                            <p>
                                Learn more
                            </p>
                        </div>
                    </div> */}
                </div>
                
                {/* <FadeUp>
                    <div className="w-full">
                        <img src="/wallpapers/dwg_img.svg" className="w-full bg-cover" />
                    </div>
                </FadeUp>

                <div className="w-full max-w-[1400px] mt-20">
                    <FadeUp>
                        <div className="m-auto w-full flex justify-between items-center relative gap-x-5">
                            <div className="relative flex gap-x-5 items-center p-9 bg-red-600 border border-zinc-100 rounded-[20em] w-full">
                                <div className="size-14 flex justify-center items-center rounded-full border-2 border-zinc-100/70">
                                    <img src="/quantum_logo.png" className="p-2" />
                                </div>
                                <div className={`${montserrat.className} text-3xl text-yellow-300 font-semibold`}>
                                    <p>Construction</p>
                                </div>
                            </div>
                            <div className="flex gap-x-5 items-center p-9 bg-red-600 border border-zinc-100 rounded-[20em] w-full">
                                <div className="size-14 flex justify-center items-center rounded-full border-2 border-zinc-100/70">
                                    <img src="/quantum_logo.png" className="p-2" />
                                </div>
                                <div className={`${montserrat.className} text-3xl text-yellow-300 font-semibold`}>
                                    <p>Construction</p>
                                </div>

                            </div>
                            <div className="flex gap-x-5 items-center p-9 bg-red-600 border border-zinc-100 rounded-[20em] w-full">
                                <div className="size-14 flex justify-center items-center rounded-full border-2 border-zinc-100/70">
                                    <img src="/quantum_logo.png" className="p-2" />
                                </div>
                                <div className={`${montserrat.className} text-3xl text-yellow-300 font-semibold`}>
                                    <p>Construction</p>
                                </div>

                            </div>
                        </div>
                    </FadeUp>
                </div> */}

                <div className="grid grid-cols-4 gap-5 mt-8">
                    {VALUES.map((v, i) => (
                        <div key={v.title}>
                            <div
                                className="relative overflow-hidden cursor-pointer rounded-xl border border-[#E0DDD4] bg-white px-7 py-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(208,33,28,0.12)]"
                            >
                                {/* Top gradient bar */}
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 to-amber-300 z-50" />

                                {/* Number */}
                                {/* <span className={`${montserrat.className} text-[48px] font-extrabold leading-none text-red-500`}>
                                    {v.num}
                                </span> */}

                                {/* Title */}
                                <h3 className={`${montserrat.className} mt-3 mb-3 text-2xl font-bold`}>
                                    {v.title}
                                </h3>

                                {/* Description */}
                                <p className={`${montserrat.className} text-sm leading-[1.7] text-[#777]`}>
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