import FadeUp from "@/ui/FadeUp"
import { montserrat } from "@/lib/fonts";
import { brand } from "@/lib/constants";

export default function CoreValues() {
    const VALUES = [
    { num: "01", title: "Transparency", desc: "Every transaction we handle is clear, straightforward, and honest. We provide clients with accurate information, verified properties, and open communication at every stage." },
    { num: "02", title: "Integrity", desc: "We uphold the highest ethical standards in our dealings, ensuring that our clients' trust is never compromised. Integrity is the foundation on which we build lasting relationships." },
    { num: "03", title: "Reliability", desc: "Our clients can count on us to consistently deliver on our promises. We ensure that every commitment made is fulfilled with professionalism, dedication, and excellence." },
    ];

    return (
        <div className="w-full py-24 relative">
            <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.04] -top-[110%] -left-[20%]" alt="" />

            <div className="w-full 2xl:max-w-[1400px] xl:max-w-[1200px] lg:max-w-[1000px] relative z-20 m-auto mt-10 px-2">
                <div className="w-full flex justify-between z-40">
                    <div className="w-full">
                        <FadeUp>
                            <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-2 pl-1`}>
                                <div className="h-px xl:w-16 lg:w-10 w-7 bg-[#b91c1c]"/>
                                <p className={`${montserrat.className} text-[10px] font-bold ${brand.amberAltText} tracking-[0.3em] uppercase`}>WHAT WE OFFER</p>
                            </div>
                        </FadeUp>
                        <FadeUp>
                            <p className={`${montserrat.className} text-zinc-200 text-left lg:text-5xl text-3xl font-semibold my-3`}>
                                Our Core <span className={`${brand.amberAltText} italic`}>Values</span>
                            </p>
                        </FadeUp>
                        <FadeUp>
                            <p className="text-zinc-400 text-left pr-10 my-5 max-w-[60rem]">
                                Through these values, we are committed to making the dream of homeownership a reality
                                by providing affordable, secure, and sustainable housing solutions. Whether it&apos;s land
                                acquisition or investment opportunities, we strive to serve as a trusted partner in every
                                client&apos;s journey to owning their dream home.
                            </p>
                        </FadeUp>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                    {VALUES.map((v) => (
                        <div key={v.title}>
                            <div
                                className={`relative overflow-hidden cursor-pointer rounded-sm border border-amber-400/30 ${brand.redBg} px-7 py-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl h-full`}
                            >
                                <h3 className={`${montserrat.className} mt-3 mb-3 text-2xl font-semibold ${brand.amberLightText} italic`}>
                                    {v.title}
                                </h3>

                                <p className={`text-md leading-[1.7] text-zinc-200`}>
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
