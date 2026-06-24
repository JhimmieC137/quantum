'use client'

import FadeUp from "@/ui/FadeUp"
import MainLayout from "../(pages)/layout"
import InvestmentSection from "@/components/Investment"
import ProjectGrid from "@/sections/projects/ProjectGrid"
import { availableProjects, projectCategories } from "@/data/projects"
import { layout } from "@/lib/constants"
import { LayoutTemplate, Road, Trees, Zap, ShieldCheck, MapPin, TrendingUp, Building2, FileCheck } from "lucide-react"
import ServiceSectionHeading from "@/sections/services/ServiceSectionHeading"
import FeatureCard from "@/sections/services/FeatureCard"
import ServiceCTA from "@/sections/services/ServiceCTA"
import HeroBanner from "@/components/HeroBanner"
import PageHero from "@/components/PageHero"
import { garamond } from "@/lib/fonts"

const residentialFeatures = [
    {
        icon: <LayoutTemplate />,
        titleWhite: "Well-Planned",
        titleAmber: "Layouts",
        description: "Professionally designed estate layouts with defined plots, roads, and green areas for a complete community experience.",
    },
    {
        icon: <Road />,
        titleWhite: "Basic",
        titleAmber: "Infrastructure",
        description: "Provision of access roads, perimeter fencing, drainage systems, and water supply points.",
    },
    {
        icon: <Zap />,
        titleWhite: "Electricity",
        titleAmber: "Access",
        description: "Connection to power supply or dedicated estate transformers for all residents.",
    },
    {
        icon: <ShieldCheck />,
        titleWhite: "Security",
        titleAmber: "Features",
        description: "Gated entrances, perimeter fencing, and provision for 24/7 security surveillance.",
    },
    {
        icon: <Trees />,
        titleWhite: "Recreational",
        titleAmber: "Spaces",
        description: "Allocation of spaces for parks, playgrounds, and communal areas to enhance lifestyle.",
    },
    {
        icon: <FileCheck />,
        titleWhite: "Verified",
        titleAmber: "Documentation",
        description: "Each plot comes with proper land titles and flexible payment options for peace of mind.",
    },
]

const commercialFeatures = [
    {
        icon: <MapPin />,
        titleWhite: "Prime",
        titleAmber: "Locations",
        description: "Strategically positioned along major roads and business districts to maximize visibility and accessibility.",
    },
    {
        icon: <Building2 />,
        titleWhite: "Flexible Plot",
        titleAmber: "Sizes",
        description: "Options that cater to different project scales, from small office blocks to large commercial hubs.",
    },
    {
        icon: <TrendingUp />,
        titleWhite: "High ROI",
        titleAmber: "Potential",
        description: "Located in areas with rising commercial activity, guaranteeing fast appreciation and excellent income opportunities.",
    },
    {
        icon: <Road />,
        titleWhite: "Infrastructure",
        titleAmber: "Readiness",
        description: "Availability of access roads, drainage, electricity, and water supply ensuring smooth commencement of construction.",
    },
    {
        icon: <LayoutTemplate />,
        titleWhite: "Mixed-Use",
        titleAmber: "Opportunities",
        description: "Plots designed for developments that combine residential and office spaces within one location.",
    },
    {
        icon: <FileCheck />,
        titleWhite: "Secure",
        titleAmber: "Documentation",
        description: "Each plot comes with verified and traceable legal documents to ensure full security of investment.",
    },
]

export default function Projects() {
    const paragraphList = [
        "\
            At Quantum Homes & Property, every project is a testament to our commitment to quality, integrity, \
            and innovation. From serviced residential estates to prime commercial plots, we develop \
            spaces that inspire growth and stand the test of time. \
        ",
        "\
            Our projects are carefully planned, fully documented, and strategically located to \
            deliver maximum value, whether you're building your dream home or growing a thriving business. \
        "
    ]

    return (
        <MainLayout>
            <HeroBanner
                image="/wallpapers/construction_1.jpg"
                title="Our"
                titleAccent="Projects"
            />

            <PageHero
                CTAMain="Where Vision Meets"
                CTAAccent="Excellence"
                paragraphs={paragraphList}
            />

            {/* ── Residential section ─────────────────────────────────── */}
            <div className="bg-zinc-950 pt-8 sm:pt-12 lg:pt-16 pb-10">

                {/* Image + text — mirrors ServiceIntro layout */}
                <FadeUp>
                    <div className={`${layout.container} flex lg:flex-row flex-col gap-y-8 lg:gap-x-20`}>
                        {/* Image side */}
                        <div className="lg:w-1/2 w-full relative pt-3 pr-3">
                            <div className="bg-[#b91c1c] absolute top-0 right-0 bottom-3 left-3 rounded-sm z-0" />
                            <div className="rounded-sm overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[28rem]">
                                <img
                                    src="/services/residential_estate.png"
                                    className="absolute inset-0 object-cover size-full"
                                    alt="Residential estate"
                                />
                                <div className="absolute inset-0 bg-[#b91c1c]/20 z-20" />
                            </div>
                        </div>

                        {/* Text side */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-center">
                            <p className={`${garamond.className} text-zinc-300 text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed xl:leading-[3rem] lg:leading-[2.5rem]`}>
                                At Quantum Homes &amp; Property, we develop and sell serviced plots within well-planned residential
                                estates, designed to provide clients with a safe, comfortable, and future-ready
                                environment for building their dream homes.
                            </p>
                        </div>
                    </div>
                </FadeUp>

                <ServiceSectionHeading
                    white="What Our Residential"
                    amber="Plots Offer"
                />

                <div className="w-full mt-10">
                    <div className={`${layout.container} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-[60px] pt-10 pb-16 sm:pb-20`}>
                        {residentialFeatures.map((f) => (
                            <FeatureCard key={f.titleWhite} {...f} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Commercial section ──────────────────────────────────── */}
            <div className="bg-zinc-950 pt-8 sm:pt-24 lg:pt-36 pb-10">

                {/* Image + text — reversed */}
                <FadeUp>
                    <div className={`${layout.container} flex lg:flex-row-reverse flex-col gap-y-8 lg:gap-x-20`}>
                        {/* Image side */}
                        <div className="lg:w-1/2 w-full relative pt-3 pl-3">
                            <div className="bg-[#b91c1c] absolute top-0 left-0 bottom-3 right-3 rounded-sm z-0" />
                            <div className="rounded-sm overflow-hidden relative z-10 w-full h-[18rem] sm:h-[24rem] lg:h-full lg:min-h-[28rem]">
                                <img
                                    src="/services/commercial_estate.png"
                                    className="absolute inset-0 object-cover size-full"
                                    alt="Commercial estate"
                                />
                                <div className="absolute inset-0 bg-[#b91c1c]/20 z-20" />
                            </div>
                        </div>

                        {/* Text side */}
                        <div className="lg:w-1/2 w-full flex flex-col justify-center">
                            <p className={`${garamond.className} text-zinc-300 text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed xl:leading-[3rem] lg:leading-[2.5rem]`}>
                                Our commercial plots are carefully selected and developed to suit a wide range of
                                commercial purposes, including shopping complexes, office buildings, and mixed-use projects.
                            </p>
                        </div>
                    </div>
                </FadeUp>

                <ServiceSectionHeading
                    white="What Our Commercial"
                    amber="Plots Offer"
                />

                <div className="w-full mt-10">
                    <div className={`${layout.container} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-[60px] pt-10 pb-16 sm:pb-20`}>
                        {commercialFeatures.map((f) => (
                            <FeatureCard key={f.titleWhite} {...f} />
                        ))}
                    </div>
                </div>

                <ServiceCTA
                    headingWhite="Residential or"
                    headingAmber="Commercial, get yours"
                    subtext="Immediate possession available. Commence building as soon as you're ready, with all documentation completed by our experts."
                    buttonLabel="Get Started"
                />
            </div>

            {/* ── Project grid ────────────────────────────────────────── */}
            <ProjectGrid categories={projectCategories} projects={availableProjects} />

            <InvestmentSection />
        </MainLayout>
    )
}
