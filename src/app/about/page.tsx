'use client'

import InvestmentSection from "@/components/Investment"
import OurClients from "@/components/OurClients"
import { montserrat, garamond } from "@/lib/fonts"
import { brand } from "@/lib/constants"
import { pageRoutes } from "@/data/routes"
import MainLayout from "../(pages)/layout"
import FAQAccordion from "@/components/FAQ"
import TeamGrid from "@/components/TeamGrid"
import PageHero from "@/components/PageHero"
import HeroBanner from "@/components/HeroBanner"

const stats = [
  {
    value: "2+",
    label: "Years of",
    accent: "Experience",
    description: "In just over two years, Quantum Homes & Property has established itself as one of Ibadan's most trusted names in real estate, delivering on every commitment with speed, integrity, and professionalism.",
  },
  {
    value: "5K+",
    label: "Satisfied",
    accent: "Clients",
    description: "Over 5,000 individuals, families, and investors have trusted Quantum Homes & Property to guide them through one of the most significant decisions of their lives. Their confidence is our greatest endorsement.",
  },
  {
    value: "60+",
    label: "Plots",
    accent: "Sold",
    description: "Over 60 plots have been successfully sold across our active estates in Ibadan, reflecting the confidence buyers place in our documentation, locations, and long-term value proposition.",
  },
  {
    value: "8+",
    label: "Successful",
    accent: "Projects",
    description: "From land banking estates to buy-and-build communities, every project we've launched has been carefully planned, properly documented, and delivered with clear value for investors and homeowners alike.",
  },
];

const missionVision = [
  {
    accent: "Mission",
    content: "At Quantum Homes & Property, our mission is to deliver magnificent real estate services that make homeownership and property investment achievable for everyone, irrespective of class or background.",
  },
  {
    accent: "Vision",
    content: "To be the undisputed, prime, and dominant real estate development firm in the world, setting global standards in innovation, excellence, and customer satisfaction.",
  },
];

function StatItem({ value, label, accent, description }: { value: string; label: string; accent: string; description: string }) {
  return (
    <div className="w-full py-16">
      <p className={`text-[#b91c1c] text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
        {value}
      </p>
      <p className={`${montserrat.className} text-zinc-200 text-xl font-semibold mb-1`}>
        {label} <span className="text-amber-500 italic">{accent}</span>
      </p>
      <p className={`${garamond.className} text-zinc-400 text-md`}>
        {description}
      </p>
    </div>
  );
}

function MissionVisionCard({ accent, content }: { accent: string; content: string }) {
  return (
    <div className="w-full glass rounded-sm overflow-hidden relative">
      <div className="p-10">
        <p className={`${montserrat.className} text-3xl font-semibold text-zinc-200 mb-12`}>
          Our <span className="text-amber-400">{accent}</span>
        </p>
        <p className={`${garamond.className} text-xl mt-px text-zinc-400`}>
          {content}
        </p>
      </div>
    </div>
  );
}

export default function About() {
    const paragraphList = [
        "\
            Quantum Homes & Property is a trusted real estate company committed to bridging the gap between property ownership dreams and reality. Since our founding, we have helped\
            thousands of individuals, families, and organizations acquire genuine properties with peace\
            of mind.\
        ",
        "\
            We pride ourselves on integrity, professionalism, and innovation in the real estate \
            sector. At Quantum Homes & Property, we don't just sell properties — we build trust, create \
            value, and ensure long-term satisfaction. \
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

            <div className="bg-zinc-950 py-28 relative overflow-hidden px-2">
                <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.04] top-[40%] -right-[20%] scale-x-[-1]" alt="" />
                <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.04] -top-[20%] -left-[20%]" alt="" />

                <div className="relative max-w-[1000px] m-auto z-50">
                    <p className={`${montserrat.className} text-zinc-200 lg:text-6xl text-5xl font-semibold my-10 text-center`}>
                        We believe in the transformative <br />
                        <span className="text-amber-500 italic">power of construction</span>
                    </p>

                    <div className="w-full flex md:flex-row flex-col gap-12 relative mt-16 items-stretch">
                        {/* Image + red accent block wrapper */}
                        <div className="md:w-1/2 w-full relative">
                            <div className="absolute bg-[#b91c1c] -z-10 inset-0 md:-translate-x-3 translate-x-[3px] md:-translate-y-3 -translate-y-[3px] rounded-sm" />
                            <div className="relative rounded-sm overflow-hidden w-full h-full min-h-[30rem]">
                                <img
                                    src="/wallpapers/planners.png"
                                    className="absolute inset-0 md:scale-110 scale-125 w-full h-full object-cover"
                                    alt="Planners at work"
                                />
                                <div className="absolute inset-0 bg-[#b91c1c]/20 z-20" />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="md:w-1/2 w-full flex flex-col justify-between">
                            <p className={`${garamond.className} text-zinc-300 xl:text-4xl lg:text-3xl text-2xl xl:leading-[3rem] lg:leading-[2.5rem] md:leading-[2.3rem]`}>
                                Through our artworks, our goal is to spark curiosity, provoke
                                introspection, geographical boundaries. Drawing inspiration, we
                                skillfully blend realism and imaginative elements to imbue our
                                creations with a unique and captivating essence.
                            </p>

                            <a href={pageRoutes.projects} className={`${montserrat.className} mt-8 py-3 px-8 bg-[#b91c1c] hover:bg-[#dc2626] text-zinc-200 rounded-sm transition-colors duration-200 cursor-pointer w-fit text-[10px] tracking-[0.25em] uppercase font-semibold`}>
                                Explore Projects
                            </a>
                        </div>
                    </div>

                    <div className="w-full flex md:flex-row flex-col gap-8 mb-10 mt-14">
                        {missionVision.map((item) => (
                            <MissionVisionCard key={item.accent} {...item} />
                        ))}
                    </div>
                </div>

                <p className={`${montserrat.className} text-center text-zinc-200 text-5xl font-semibold mt-20 sm:mt-28 lg:mt-32 max-w-[40rem] m-auto`}>
                    Our Impact over <br />
                    <span className="text-amber-500 italic">The Years</span>
                </p>

                <div className="mb-5 py-8 xl:max-w-[1000px] max-w-full m-auto flex sm:flex-row flex-col justify-between w-full lg:gap-14 gap-8 px-3">
                    <div className={`flex flex-col divide-y-2 ${brand.amberDivide}`}>
                        {stats.slice(0, 2).map((stat) => (
                            <StatItem key={stat.accent} {...stat} />
                        ))}
                    </div>

                    <div className="h-[2px] w-full bg-amber-400 sm:hidden block"/>

                    <div className={`flex flex-col divide-y-2 ${brand.amberDivide}`}>
                        {stats.slice(2).map((stat) => (
                            <StatItem key={stat.accent} {...stat} />
                        ))}
                    </div>
                </div>
            </div>

            <TeamGrid />

            <FAQAccordion />
            <InvestmentSection />
        </MainLayout>
    )
}
