// app/(pages)/services/real-estate-investment-advisory/page.tsx
'use client'

import InvestmentSection from "@/components/Investment"
import MainLayout from "@/app/(pages)/layout"
import { IoAnalytics } from "react-icons/io5"
import { GrAnalytics } from "react-icons/gr"
import { FaSeedling } from "react-icons/fa"
import { FaArrowTrendUp } from "react-icons/fa6"
import { TbUsersGroup } from "react-icons/tb"
import { MdOutlineAnalytics } from "react-icons/md"
import ServiceHero from "@/sections/services/ServiceHero"
import ServiceIntro from "@/sections/services/ServiceIntro"
import ServiceCTA from "@/sections/services/ServiceCTA"
import ServiceSectionHeading from "@/sections/services/ServiceSectionHeading"
import FeatureCard from "@/sections/services/FeatureCard"

const features = [
    {
        icon: <IoAnalytics />,
        titleWhite: "Risk",
        titleAmber: "Assessment",
        description: "Helping clients evaluate potential risks in property acquisition and guiding them toward safe and secure investments.",
    },
    {
        icon: <GrAnalytics />,
        titleWhite: "Portfolio",
        titleAmber: "Diversification",
        description: "Advising clients on balancing their investments across different property types (residential & commercial lands) to maximize returns.",
    },
    {
        icon: <FaArrowTrendUp />,
        titleWhite: "High-Return",
        titleAmber: "Projects",
        description: "Recommending lands with strong potential for capital appreciation.",
    },
    {
        icon: <FaSeedling />,
        titleWhite: "Short and Long-Term",
        titleAmber: "Investment Strategies",
        description: "Tailoring plans for clients based on their financial goals, whether they seek quick turnover or steady, long-term growth.",
    },
    {
        icon: <TbUsersGroup />,
        titleWhite: "Group and Corporate",
        titleAmber: "Investments",
        description: "Guiding cooperatives, organizations, and syndicates in pooling resources to acquire large-scale property assets.",
    },
    {
        icon: <MdOutlineAnalytics />,
        titleWhite: "Market Research and",
        titleAmber: "Analysis",
        description: "We provide in-depth insights into real estate market trends, property appreciation rates, and emerging investment hotspots.",
    },
]

export default function RealEstateAdvisory() {
    return (
        <MainLayout>
            <ServiceHero
                image="/services/professionals-preparing-presentation.jpg"
                category="Real Estate Investment Advisory"
                titleWhite="Guiding investors on"
                titleAmber="high-return properties"
                description="At Quantum Homes & Property, we understand that real estate is not just about buying
                    and selling properties — it’s about making profitable, well-informed investment decisions.
                    Our Investment Advisory service is designed to guide individuals, families, and corporate
                    organizations in identifying, analyzing, and investing in high-value real estate opportunities
                    that yield long-term returns.
                "
            />

            <div className="pb-16 sm:pb-20 pt-16 sm:pt-24 lg:pt-36 bg-[#F4F2EC] w-full">
                <ServiceIntro
                    image="/services/agents-in-meeting.jpg"
                    text="For years, architecture has been stuck in the past. It's time to redefine the future. At Urbanex+, we don't just design buildings—we craft experiences. Our innovative, human-centered approach blends aesthetics, sustainability, and functionality to shape spaces that inspire and endure."
                />

                <ServiceCTA
                    headingWhite="Not sure where to"
                    headingAmber="invest?"
                    subtext="Speak with our advisors today to identify high-return opportunities. Let us help you make informed, profitable real estate decisions."
                    buttonLabel="Get Started"
                />

                <ServiceSectionHeading
                    white="What We Offer in"
                    amber="Investment Advisory"
                />

                <div className="w-full mt-10 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1600px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-[60px] pt-10 pb-16 sm:pb-20">
                        {features.map((f) => (
                            <FeatureCard key={f.titleWhite} {...f} />
                        ))}
                    </div>
                </div>
            </div>

            <InvestmentSection />
        </MainLayout>
    )
}