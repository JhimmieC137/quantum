// app/(pages)/services/real-estate-investment-advisory/page.tsx
'use client'

import InvestmentSection from "@/components/Investment"
import MainLayout from "@/app/(pages)/layout"
import { BarChart2, PieChart, TrendingUp, Sprout, Users, LineChart } from "lucide-react"
import ServiceHero from "@/sections/services/ServiceHero"
import ServiceIntro from "@/sections/services/ServiceIntro"
import ServiceCTA from "@/sections/services/ServiceCTA"
import ServiceSectionHeading from "@/sections/services/ServiceSectionHeading"
import FeatureCard from "@/sections/services/FeatureCard"

const features = [
    {
        icon: <BarChart2 />,
        titleWhite: "Risk",
        titleAmber: "Assessment",
        description: "Helping clients evaluate potential risks in property acquisition and guiding them toward safe and secure investments.",
    },
    {
        icon: <PieChart />,
        titleWhite: "Portfolio",
        titleAmber: "Diversification",
        description: "Advising clients on balancing their investments across different property types (residential & commercial lands) to maximize returns.",
    },
    {
        icon: <TrendingUp />,
        titleWhite: "High-Return",
        titleAmber: "Projects",
        description: "Recommending lands with strong potential for capital appreciation.",
    },
    {
        icon: <Sprout />,
        titleWhite: "Short and Long-Term",
        titleAmber: "Investment Strategies",
        description: "Tailoring plans for clients based on their financial goals, whether they seek quick turnover or steady, long-term growth.",
    },
    {
        icon: <Users />,
        titleWhite: "Group and Corporate",
        titleAmber: "Investments",
        description: "Guiding cooperatives, organizations, and syndicates in pooling resources to acquire large-scale property assets.",
    },
    {
        icon: <LineChart />,
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
                description="At Oyo Realty & Construction, we understand that real estate is not just about buying
                    and selling properties. It's about making profitable, well-informed investment decisions.
                    Our Investment Advisory service is designed to guide individuals, families, and corporate
                    organizations in identifying, analyzing, and investing in high-value real estate opportunities
                    that yield long-term returns.
                "
            />

            <div className="pb-16 sm:pb-20 pt-16 sm:pt-24 lg:pt-36 bg-zinc-950 w-full">
                <ServiceIntro
                    image="/services/agents-in-meeting.jpg"
                    text="At Oyo Realty & Construction, we go beyond transactions. Our expert advisors study the market, identify emerging corridors, and create personalized strategies that turn your capital into lasting wealth."
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
