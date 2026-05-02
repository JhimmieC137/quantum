'use client'

import { CgMenuGridO } from "react-icons/cg"
import FadeUp from "@/ui/FadeUp"
import FadeRight from "@/ui/FadeRight"
import MainLayout from "../(pages)/layout"
import InvestmentSection from "@/components/Investment"
import ProjectGrid from "@/sections/projects/ProjectGrid"
import { availableProjects, projectCategories } from "@/data/projects"
import { Montserrat } from "next/font/google"
import { MdOutlineVerified } from "react-icons/md"
import { FaRoad, FaTree, FaBolt, FaShieldAlt, FaMoneyBillWave, FaMapMarkerAlt, FaChartLine, FaBuilding, FaFileContract } from "react-icons/fa"
import { BsLayoutTextWindowReverse } from "react-icons/bs"
import ServiceIntro from "@/sections/services/ServiceIntro"
import ServiceSectionHeading from "@/sections/services/ServiceSectionHeading"
import FeatureCard from "@/sections/services/FeatureCard"
import ServiceCTA from "@/sections/services/ServiceCTA"

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const residentialFeatures = [
    {
        icon: <BsLayoutTextWindowReverse />,
        titleWhite: "Well-Planned",
        titleAmber: "Layouts",
        description: "Professionally designed estate layouts with defined plots, roads, and green areas for a complete community experience.",
    },
    {
        icon: <FaRoad />,
        titleWhite: "Basic",
        titleAmber: "Infrastructure",
        description: "Provision of access roads, perimeter fencing, drainage systems, and water supply points.",
    },
    {
        icon: <FaBolt />,
        titleWhite: "Electricity",
        titleAmber: "Access",
        description: "Connection to power supply or dedicated estate transformers for all residents.",
    },
    {
        icon: <FaShieldAlt />,
        titleWhite: "Security",
        titleAmber: "Features",
        description: "Gated entrances, perimeter fencing, and provision for 24/7 security surveillance.",
    },
    {
        icon: <FaTree />,
        titleWhite: "Recreational",
        titleAmber: "Spaces",
        description: "Allocation of spaces for parks, playgrounds, and communal areas to enhance lifestyle.",
    },
    {
        icon: <MdOutlineVerified />,
        titleWhite: "Verified",
        titleAmber: "Documentation",
        description: "Each plot comes with proper land titles and flexible payment options for peace of mind.",
    },
]

const commercialFeatures = [
    {
        icon: <FaMapMarkerAlt />,
        titleWhite: "Prime",
        titleAmber: "Locations",
        description: "Strategically positioned along major roads and business districts to maximize visibility and accessibility.",
    },
    {
        icon: <FaBuilding />,
        titleWhite: "Flexible Plot",
        titleAmber: "Sizes",
        description: "Options that cater to different project scales, from small office blocks to large commercial hubs.",
    },
    {
        icon: <FaChartLine />,
        titleWhite: "High ROI",
        titleAmber: "Potential",
        description: "Located in areas with rising commercial activity, guaranteeing fast appreciation and excellent income opportunities.",
    },
    {
        icon: <FaRoad />,
        titleWhite: "Infrastructure",
        titleAmber: "Readiness",
        description: "Availability of access roads, drainage, electricity, and water supply ensuring smooth commencement of construction.",
    },
    {
        icon: <BsLayoutTextWindowReverse />,
        titleWhite: "Mixed-Use",
        titleAmber: "Opportunities",
        description: "Plots designed for developments that combine residential and office spaces within one location.",
    },
    {
        icon: <FaFileContract />,
        titleWhite: "Secure",
        titleAmber: "Documentation",
        description: "Each plot comes with verified and traceable legal documents to ensure full security of investment.",
    },
]

export default function Projects() {
    return (
        <MainLayout>

            {/* Hero */}
            <div className="relative h-[14rem] sm:h-[18rem] lg:h-[23rem] overflow-hidden">
                <div className="absolute inset-0 bg-black/70 z-10"/>
                <img
                    src="/wallpapers/construction_1.jpg"
                    className="absolute inset-0 object-cover object-center w-full h-full"
                />
                <p className="absolute inset-0 flex items-center justify-center text-zinc-200 text-5xl sm:text-7xl lg:text-[7.5rem] font-semibold z-20">
                    Our <span className="text-amber-500 italic ml-4">Properties</span>
                </p>
            </div>

            {/* Intro banner */}
            <div className="bg-red-700 relative overflow-hidden">
                <img src="/quantum_logo.png" className="absolute opacity-10 -top-[2%] -right-[12%] rotate-[228deg] w-[33rem]"/>
                <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[20%] -left-[8%] rotate-[38deg] w-[33rem]"/>
                <div className="max-w-[1400px] m-auto py-20 px-4 sm:px-6 lg:px-8 relative">
                    <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md">
                        <CgMenuGridO className="size-4 text-zinc-200"/>
                        <p className="text-zinc-100/80 text-sm">Our Properties</p>
                    </div>

                    <FadeUp>
                        <p className={`${montserrat.className} text-zinc-200 text-2xl sm:text-4xl lg:text-5xl font-semibold my-7`}>
                            Where Vision Meets <span className="text-amber-300 italic">Excellence</span>
                        </p>
                    </FadeUp>

                    <div className="flex gap-x-5 mb-10">
                        <div className="bg-amber-400 p-[3px] max-w-[10px] shrink-0 z-20"/>
                        <FadeRight>
                            <p className="text-zinc-200/90 text-base sm:text-lg lg:text-2xl mb-5 max-w-[80rem]">
                                At Quantum Homes, every project is a testament to our commitment to quality, integrity,
                                and innovation. From serviced residential estates to prime commercial plots, we develop
                                spaces that inspire growth and stand the test of time.
                            </p>
                            <p className="text-zinc-200/90 text-base sm:text-lg lg:text-2xl max-w-[80rem]">
                                Our projects are carefully planned, fully documented, and strategically located to
                                deliver maximum value — whether you're building your dream home or growing a thriving business.
                            </p>
                        </FadeRight>
                    </div>
                </div>
            </div>

            {/* Residential section */}
            <div className="bg-[#F4F2EC] pt-8 sm:pt-24 lg:pt-36 pb-10">
                {/* <div className="max-w-[1400px] m-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-400/40 rounded-lg bg-transparent shadow-sm mb-6">
                        <CgMenuGridO className="size-4 text-zinc-600"/>
                        <p className="text-zinc-600/80 text-sm">Residential</p>
                    </div>
                </div>

                <ServiceIntro
                    image="/services/land_sales_narrow.jpg"
                    text="At Quantum Homes, we develop and sell serviced plots within well-planned residential estates, designed to provide clients with a safe, comfortable, and future-ready environment for building their dream homes. Unlike raw, unplanned lands, our serviced plots are properly laid out, documented, and equipped with essential infrastructure."
                /> */}
                <div className="relative max-w-[1000px] m-auto z-50">
                    <div className="w-full flex md:flex-row flex-col gap-12 relative mt-16 items-stretch">
                        {/* Image + red accent block wrapper */}
                        <div className="md:w-1/2 w-full relative">
                            {/* Red offset background — positioned behind image, top-right offset */}
                            <div className="absolute bg-red-700 -z-10 inset-0 md:-translate-x-3 translate-x-[3px] md:-translate-y-3 -translate-y-[3px] rounded-[1.5rem]" />

                            {/* Image container */}
                            <div className="relative rounded-[1.5rem] overflow-hidden w-full h-full min-h-[30rem]">
                            <img
                                src="/services/residential_estate.png"
                                className="absolute inset-0 md:scale-110 scale-125 w-full h-full object-cover"
                            />
                            {/* Red transparent film — covers only the image */}
                            <div className="absolute inset-0 bg-red-700/30 z-20" />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="md:w-1/2 w-full flex flex-col justify-between">
                            <p className="text-zinc-900 xl:text-4xl lg:text-3xl text-2xl xl:leading-[3rem] lg:leading-[2.5rem] md:leading-[2.3rem]">
                                At Quantum Homes, we develop and sell serviced plots within well-planned residential
                                estates, designed to provide clients with a safe, comfortable, and future-ready
                                environment for building their dream homes. 
                                {/* Unlike raw, unplanned lands, serviced plots
                                are properly laid out, documented, and equipped with essential infrastructure that
                                guarantees both convenience and value appreciation. */}
                            </p>
                        </div>
                    </div>
                </div>

                <ServiceSectionHeading
                    white="What Our Residential"
                    amber="Plots Offer"
                />

                <div className="w-full mt-10 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1400px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-[60px] pt-10 pb-16 sm:pb-20">
                        {residentialFeatures.map((f) => (
                            <FeatureCard key={f.titleWhite} {...f} />
                        ))}
                    </div>
                </div>

                {/* <ServiceCTA
                    headingWhite="Ready to secure your"
                    headingAmber="serviced plot?"
                    subtext="Immediate possession available — commence building as soon as payments and documentation are completed."
                    buttonLabel="Get Started"
                /> */}
            </div>

            {/* Commercial section */}
            <div className="bg-[#F4F2EC] relative overflow-hidden pt-8 sm:pt-24 lg:pt-36 pb-10">
                {/* <img src="/quantum_logo.png" className="absolute opacity-10 -top-[2%] -right-[12%] rotate-[228deg] w-[33rem]"/>
                <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[20%] -left-[8%] rotate-[38deg] w-[33rem]"/>

                <div className="max-w-[1400px] m-auto px-4 sm:px-6 lg:px-8 mb-12 relative">
                    <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-sm mb-6">
                        <CgMenuGridO className="size-4 text-zinc-200"/>
                        <p className="text-zinc-200/80 text-sm">Commercial</p>
                    </div>
                </div>

                <div className="max-w-[1400px] m-auto flex lg:flex-row-reverse flex-col gap-y-8 lg:gap-x-20 relative px-4 sm:px-6 lg:px-8">
                    <div className="lg:w-1/2 w-full relative pt-3 pl-3">
                        <div className="bg-zinc-200/30 absolute top-0 left-0 bottom-3 right-3 rounded-[1.7rem] z-0"/>
                        <div className="rounded-[1.6rem] overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[28rem]">
                            <img
                                src="/services/signing-papers.jpg"
                                className="absolute inset-0 object-cover size-full"
                            />
                            <div className="absolute bg-red-700/30 inset-0"/>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex flex-col justify-center">
                        <p className="text-base sm:text-xl lg:text-2xl text-zinc-200 leading-relaxed">
                            We recognize the growing demand for strategically located commercial spaces that drive
                            business growth and economic activity. Our commercial plots are carefully selected and
                            developed to suit a wide range of purposes — from shopping complexes and office buildings
                            to large-scale mixed-use developments.
                        </p>
                    </div>
                </div> */}

                <div className="relative max-w-[1000px] m-auto z-50">
                    <div className="w-full flex md:flex-row flex-col gap-12 relative mt-16 items-stretch">
                        {/* Image + red accent block wrapper */}
                        <div className="md:w-1/2 w-full relative">
                            {/* Red offset background — positioned behind image, top-right offset */}
                            <div className="absolute bg-red-700 -z-10 inset-0 md:-translate-x-3 translate-x-[3px] md:-translate-y-3 -translate-y-[3px] rounded-[1.5rem]" />

                            {/* Image container */}
                            <div className="relative rounded-[1.5rem] overflow-hidden w-full h-full min-h-[30rem]">
                            <img
                                src="/services/commercial_estate.png"
                                className="absolute inset-0 md:scale-110 scale-125 w-full h-full object-cover"
                            />
                            {/* Red transparent film — covers only the image */}
                            <div className="absolute inset-0 bg-red-700/30 z-20" />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="md:w-1/2 w-full flex flex-col justify-between">
                            <p className="text-zinc-900 xl:text-4xl lg:text-3xl text-2xl xl:leading-[3rem] lg:leading-[2.5rem] md:leading-[2.3rem]">
                                Our commercial plots are carefully selected and developed to suit a wide range of commercial purposes,
                                including shopping complexes, office buildings, and mixed-use projects. 
                                {/* Unlike raw, unplanned lands, serviced plots
                                are properly laid out, documented, and equipped with essential infrastructure that
                                guarantees both convenience and value appreciation. */}
                            </p>
                        </div>
                    </div>
                </div>

                

                <div className="relative">
                    <ServiceSectionHeading
                        white="What Our Commercial"
                        amber="Plots Offer"
                    />
                </div>

                <div className="w-full mt-10 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1400px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-[60px] pt-10 pb-16 sm:pb-20">
                        {commercialFeatures.map((f) => (
                            <FeatureCard key={f.titleWhite} {...f} />
                        ))}
                    </div>
                </div>

                <ServiceCTA
                    headingWhite="Residential or"
                    headingAmber="Commercial, get yours"
                    subtext="Immediate possession available, commence building as soon as want and have your documentation and all documentation completed by our experts."
                    buttonLabel="Get Started"
                />
            </div>
            

            {/* Project grid */}
            <ProjectGrid categories={projectCategories} projects={availableProjects}/>

            <InvestmentSection />
        </MainLayout>
    )
}