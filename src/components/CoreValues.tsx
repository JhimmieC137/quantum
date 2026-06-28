import FadeUp from "@/ui/FadeUp"
import { garamond, montserrat } from "@/lib/fonts";
import { brand } from "@/lib/constants";

export default function CoreValues() {
    const VALUES = [
        {
            num: "1",
            title: "Transparency",
            desc: "Every transaction we handle is clear, straightforward, and honest. We provide clients with accurate information, verified properties, and open communication at every stage.",
        },
        {
            num: "2",
            title: "Integrity",
            desc: "We uphold the highest ethical standards in our dealings, ensuring that our clients' trust is never compromised. Integrity is the foundation on which we build lasting relationships.",
        },
        {
            num: "3",
            title: "Reliability",
            desc: "Our clients can count on us to consistently deliver on our promises. We ensure that every commitment made is fulfilled with professionalism, dedication, and excellence — every single time.",
        },
    ];

    return (
        <div className="w-full py-20 lg:py-28 relative">
            <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.04] -top-[60%] -left-[10%] pointer-events-none" />

            <div className="w-full 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] relative z-10 m-auto px-4 sm:px-6 lg:px-2">

                {/* Header */}
                <FadeUp>
                    <div className="mb-16 lg:mb-24">
                        <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-2 pl-1`}>
                            <div className="h-px xl:w-16 lg:w-10 w-7 bg-red-500" />
                            <p className={`${montserrat.className} text-xs font-bold ${brand.amberAltText} tracking-widest`}>WHAT WE OFFER</p>
                        </div>
                        <p className={`${montserrat.className} text-zinc-800 text-left lg:text-5xl text-3xl font-semibold my-3`}>
                            Our Core <span className={`${brand.amberAltText} italic`}>Values</span>
                        </p>
                    </div>
                </FadeUp>

                {/* Values grid */}
                <FadeUp>
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-300">
                        {VALUES.map((v) => (
                            <div key={v.title} className="group md:px-10 lg:px-12 first:md:pl-0 last:md:pr-0 py-10 md:py-0">
                                <p className={`${garamond.className} text-7xl lg:text-8xl font-bold text-amber-600/30 leading-none mb-4`}>
                                    {v.num}
                                </p>
                                <div className="h-[2px] w-7 group-hover:w-16 bg-red-700 mb-6 transition-all duration-300 ease-in-out" />
                                <h3 className={`${montserrat.className} text-zinc-900 text-lg lg:text-xl font-bold mb-4`}>
                                    {v.title}
                                </h3>
                                <p className={`${montserrat.className} text-zinc-500 text-sm lg:text-[15px] leading-relaxed`}>
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </FadeUp>

            </div>
        </div>
    )
}
