'use client'

import { CgMenuGridO } from "react-icons/cg"
import FadeUp from "@/ui/FadeUp"
import FadeRight from "@/ui/FadeRight"
import InvestmentSection from "@/components/Investment"
import OurClients from "@/components/OurClients"
import { Montserrat } from "next/font/google"
import MainLayout from "../(pages)/layout"
import FAQAccordion from "@/components/FAQ"
import TeamGrid from "@/components/TeamGrid"
import PageHero from "@/components/PageHero"
import HeroBanner from "@/components/HeroBanner"

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export default function About() {
    const paragraphList = [
        "\
            Quantum Homes & Property is a trusted real estate company committed to bridging the gap between property ownership dreams and reality. Since our inception, we have helped\
            hundreds of individuals, families, and organizations acquire genuine properties with peace\
            of mind.\
        ",
        "\
            We pride ourselves on integrity, professionalism, and innovation in the real estate \
            sector. At Quantum Homes, we don’t just sell properties we build trust, create \
            value, and ensure long-term satisfaction \
        ",
    ]

    return (
        <MainLayout>
            <HeroBanner 
                image="/wallpapers/construction_1.jpg"
                title="About"
                titleAccent="Us"
            />

            <PageHero
                paragraphs={paragraphList}
            />

            <OurClients />

            <div className="bg-[#F4F2EC] py-28 relative overflow-hidden px-2">
                <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.07] top-[40%] -right-[20%] scale-x-[-1]" />
                <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.07]  -top-[20%] -left-[20%]" />
                {/* <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.07] bottom-3 -left-[20%]" /> */}

                <div className="relative max-w-[1000px] m-auto z-50">
                    <p className={`${montserrat.className} text-zinc-900 lg:text-6xl text-5xl font-semibold my-10 text-center`}>
                        We believe in the transformative <br />
                        <span className="text-amber-500 italic">power of construction</span>
                    </p>

                    <div className="w-full flex md:flex-row flex-col gap-12 relative mt-16 items-stretch">
                        {/* Image + red accent block wrapper */}
                        <div className="md:w-1/2 w-full relative">
                            {/* Red offset background — positioned behind image, top-right offset */}
                            <div className="absolute bg-red-700 -z-10 inset-0 md:-translate-x-3 translate-x-[3px] md:-translate-y-3 -translate-y-[3px] rounded-[1.5rem]" />

                            {/* Image container */}
                            <div className="relative rounded-[1.5rem] overflow-hidden w-full h-full min-h-[30rem]">
                            <img
                                src="/wallpapers/planners.png"
                                className="absolute inset-0 md:scale-110 scale-125 w-full h-full object-cover"
                            />
                            {/* Red transparent film — covers only the image */}
                            <div className="absolute inset-0 bg-red-700/30 z-20" />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="md:w-1/2 w-full flex flex-col justify-between">
                            <p className="text-zinc-900 xl:text-4xl lg:text-3xl text-2xl xl:leading-[3rem] lg:leading-[2.5rem] md:leading-[2.3rem]">
                                Through our artworks, our goal is to spark curiosity, provoke
                                introspection, geographical boundaries. Drawing inspiration, we
                                skillfully blend realism and imaginative elements to imbue our
                                creations with a unique and captivating essence.
                            </p>

                            <a href="/projects" className="mt-8 py-4 px-10 bg-red-700 text-zinc-200 rounded-2xl hover:bg-red-600 hover:shadow-xl ease-in-out duration-300 cursor-pointer w-fit">
                                <p className="text-xl text-center">Explore projects</p>
                            </a>
                        </div>
                    </div>
                        
                    <div className="w-full flex md:flex-row flex-col gap-8 mb-10 mt-14">
                        
                        <div className="w-full p-[2px] bg-gradient-to-br from-red-700 via-amber-400 to-transparent rounded-[1.7rem] overflow-hidden relative">
                            <div className="bg-[#F4F2EC] p-10 rounded-[1.5rem] relative">
                                <p className={`${montserrat.className} text-3xl font-semibold text-zinc-900 mb-12`}>
                                    Our <span className="text-amber-400">Mision</span>
                                </p>

                                <p className="text-xl mt-px text-zinc-900">
                                    At Quantum Homes, our mission is to deliver magnificent real estate services that make
                                    homeownership and property investment achievable for everyone, irrespective of class or
                                    background.
                                </p>

                                {/* <p className={`absolute bottom-0 -right-2 text-zinc-400/10 font-semibold text-[6.4rem] leading-4 ${montserrat.className} italic`}>
                                    <em>Vision</em>
                                </p> */}

                            </div>
                        </div>

                        <div className="w-full p-[2px] bg-gradient-to-br from-red-700 via-amber-400 to-transparent rounded-[1.7rem] overflow-hidden relative">
                            <div className="bg-[#F4F2EC] p-10 rounded-[1.5rem] relative">
                                <p className={`${montserrat.className} text-3xl font-semibold text-zinc-900 mb-12`}>
                                    Our <span className="text-amber-400">Vision</span>
                                </p>

                                <p className="text-xl mt-px text-zinc-900">
                                    To be the undisputed, prime, and dominant real estate development firm in the world,
                                    setting global standards in innovation, excellence, and customer satisfaction.
                                </p>
                            </div>
                        </div>
                        
                    </div>

                </div>


                <p className={`${montserrat.className} text-center text-zinc-900 text-5xl font-semibold mt-[17rem] max-w-[40rem] m-auto`}>
                    Our Impact over <br />
                    <span className="text-amber-500 italic">The Years</span>
                </p>
                <div className="mb-5 py-8 xl:max-w-[1000px] max-w-full m-auto flex sm:flex-row flex-col justify-between  w-full lg:gap-14 gap-8 px-3">


                    {/* <div className="flex flex-col divide-y-2 divide-amber-500">
                        <div className="w-full py-24">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione! Quidem eum assumenda ipsum nisi repudiandae!
                            </p>
                        </div>
                        <div className="w-full py-24">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione! Quidem eum assumenda ipsum nisi repudiandae!
                            </p>
                        </div>
                    </div>  */}

                    <div className="flex flex-col divide-y-2 divide-amber-500 ">
                        <div className="w-full py-16">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold mb-1">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 text-md">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione! 
                            </p>
                        </div>
                        <div className="w-full py-16">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold mb-1">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 text-md">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione!
                            </p>
                        </div>
                    </div> 

                    <div className="h-[2px] w-full bg-amber-500 sm:hidden block"/>

                    <div className="flex flex-col divide-y-2 divide-amber-500">
                        <div className="w-full py-16">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold mb-1">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 text-md">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione!
                            </p>
                        </div>
                        <div className="w-full py-16">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold mb-1">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 text-md">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione!
                            </p>
                        </div>
                    </div> 


                </div>

            </div>

            <TeamGrid />

            <FAQAccordion />
            <InvestmentSection />
        </MainLayout>
    )
} 