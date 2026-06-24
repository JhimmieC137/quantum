'use client'

import MainLayout from "../(pages)/layout"
import InvestmentSection from "@/components/Investment"
import HeroBanner from "@/components/HeroBanner"
import PageHero from "@/components/PageHero"
import FAQAccordion from "@/components/FAQ"
import { montserrat, garamond } from "@/lib/fonts"

export default function Services() {
    const paragraphList=[
        "\
            We deliver end-to-end real estate and construction solutions from architectural design to final handover built on precision, integrity, and a relentless commitment to exceeding every client's expectations.\
        ",
        "\
            Every structure we raise is a statement of purpose. We blend intelligent design with durable craftsmanship to create spaces that serve communities, stand the test of time, and define skylines.\
        ",
    ]

    return (
        <MainLayout>
            <HeroBanner
                image="/wallpapers/construction_1.jpg"
                title="Our"
                titleAccent="Services"
            />

            <PageHero
                CTAMain="Innovative Designs "
                CTAAccent="Urban Excellence"
                paragraphs={paragraphList}
            />

            <div className="bg-zinc-950">
                <div className="bg-zinc-950">
                    <div className="max-w-7xl m-auto py-16 sm:py-24 lg:py-32 px-6">
                        <div className="flex lg:flex-row flex-col w-full lg:min-h-[25rem] gap-y-8 lg:gap-y-0 lg:gap-x-20">

                        {/* Image side */}
                        <div className="lg:w-1/2 w-full relative pt-3 pr-3">
                            <div className="bg-[#b91c1c] absolute top-0 right-0 bottom-3 left-3 rounded-sm z-0" />
                            <div className="rounded-sm overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[25rem]">
                            <img className="absolute inset-0 object-cover size-full" src="/services/land_sales_narrow.jpg" alt="Land Sales" />
                            <div className="absolute bg-[#b91c1c]/10 inset-0" />
                            </div>
                        </div>

                        {/* Text side */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-center">
                            <p className={`${montserrat.className} text-zinc-200 text-4xl sm:text-5xl xl:text-6xl font-semibold mb-4`}>
                            Land <span className="text-amber-400 italic">Sales</span>
                            </p>
                            <p className={`${garamond.className} text-zinc-400 text-base sm:text-lg xl:text-xl`}>
                            Our land sales service focuses on providing clients with genuine,
                            well-verified lands in both prime and fast-developing locations.
                            </p>
                            <a href="/services/land-sales">
                            <div className={`${montserrat.className} mt-8 py-3 px-8 bg-[#b91c1c] hover:bg-[#dc2626] text-white rounded-sm transition-colors duration-200 cursor-pointer w-fit text-[10px] tracking-[0.25em] uppercase font-semibold`}>
                                Learn more
                            </div>
                            </a>
                        </div>

                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 relative overflow-hidden">
                    <div className="max-w-7xl m-auto py-16 sm:py-24 lg:py-32 px-6 relative">
                        <div className="flex lg:flex-row-reverse flex-col w-full lg:min-h-[25rem] gap-y-12 lg:gap-y-0 lg:gap-x-20">

                        {/* Image side */}
                        <div className="lg:w-1/2 w-full relative">
                            <div className="rounded-sm overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[25rem]">
                            <img className="absolute inset-0 object-cover size-full" src="/services/signing-papers.jpg" alt="Legal Support" />
                            <div className="absolute bg-[#b91c1c]/10 inset-0 z-10" />
                            </div>
                        </div>

                        {/* Text side */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-center">
                            <p className={`${montserrat.className} text-zinc-200 text-4xl sm:text-5xl xl:text-6xl font-semibold mb-4`}>
                            Title Documentation and <span className="text-amber-400 italic">Legal Support</span>
                            </p>
                            <p className={`${garamond.className} text-base sm:text-lg xl:text-xl text-zinc-400`}>
                            Our Title Documentation &amp; Legal Support service is designed to protect our clients by ensuring
                            that every property acquired is authentic, legally compliant, and properly registered.
                            </p>
                            <a href="/services/legal-support">
                            <div className={`${montserrat.className} mt-8 py-3 px-8 bg-white/5 border border-white/20 hover:bg-white/10 text-zinc-200 rounded-sm transition-colors duration-200 cursor-pointer w-fit text-[10px] tracking-[0.25em] uppercase font-semibold`}>
                                Learn more
                            </div>
                            </a>
                        </div>

                        </div>
                    </div>
                </div>

                <div className="bg-zinc-950">
                    <div className="max-w-7xl m-auto py-16 sm:py-24 lg:py-32 px-6">
                        <div className="flex lg:flex-row flex-col w-full lg:min-h-[25rem] gap-y-8 lg:gap-y-0 lg:gap-x-20">

                        {/* Image side */}
                        <div className="lg:w-1/2 w-full relative pt-3 pr-3">
                            <div className="bg-[#b91c1c] absolute top-0 right-0 bottom-3 left-3 rounded-sm z-0" />
                            <div className="rounded-sm overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[25rem]">
                            <img className="absolute inset-0 object-cover size-full" src="/services/new-building.jpg" alt="Construction" />
                            <div className="absolute bg-[#b91c1c]/10 inset-0" />
                            </div>
                        </div>

                        {/* Text side */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-center">
                            <p className={`${montserrat.className} text-zinc-200 text-4xl sm:text-5xl xl:text-6xl font-semibold mb-4`}>
                            Construction and <span className="text-amber-400 italic">Development</span>
                            </p>
                            <p className={`${garamond.className} text-zinc-400 text-base sm:text-lg xl:text-xl`}>
                            Our Construction and Development service is tailored for individuals, families, investors,
                            and organizations who want to bring their real estate visions to life.
                            </p>
                            <a href="/services/construction-and-development">
                            <div className={`${montserrat.className} mt-8 py-3 px-8 bg-[#b91c1c] hover:bg-[#dc2626] text-white rounded-sm transition-colors duration-200 cursor-pointer w-fit text-[10px] tracking-[0.25em] uppercase font-semibold`}>
                                Learn more
                            </div>
                            </a>
                        </div>

                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 relative overflow-hidden">
                    <div className="max-w-7xl m-auto py-16 sm:py-24 lg:py-32 px-6 relative">
                        <div className="flex lg:flex-row-reverse flex-col w-full lg:min-h-[25rem] gap-y-12 lg:gap-y-0 lg:gap-x-20">

                        {/* Image side */}
                        <div className="lg:w-[47%] w-full relative">
                            <div className="rounded-sm overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[25rem]">
                            <img className="absolute inset-0 object-cover size-full" src="/services/agents-in-meeting.jpg" alt="Investment Advisory" />
                            <div className="absolute bg-[#b91c1c]/10 inset-0 z-10" />
                            </div>
                        </div>

                        {/* Text side */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-center">
                            <p className={`${montserrat.className} text-zinc-200 text-4xl sm:text-5xl xl:text-6xl font-semibold mb-4`}>
                            Real Estate <span className="text-amber-400 italic">Investment Advisory</span>
                            </p>
                            <p className={`${garamond.className} text-base sm:text-lg xl:text-xl text-zinc-400`}>
                            Our Investment Advisory service is designed to guide individuals, families, and corporate
                            organizations in identifying, analyzing, and investing in high-value real estate opportunities
                            that yield long-term returns.
                            </p>
                            <a href="/services/real-estate-investment-advisory">
                            <div className={`${montserrat.className} mt-8 py-3 px-8 bg-white/5 border border-white/20 hover:bg-white/10 text-zinc-200 rounded-sm transition-colors duration-200 cursor-pointer w-fit text-[10px] tracking-[0.25em] uppercase font-semibold`}>
                                Learn more
                            </div>
                            </a>
                        </div>

                        </div>
                    </div>
                </div>

            </div>
            <FAQAccordion />
            <InvestmentSection />
        </MainLayout>
    )
}
