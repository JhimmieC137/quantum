// app/(pages)/services/land-sales/page.tsx
'use client'

import InvestmentSection from "@/components/Investment"
import MainLayout from "@/app/(pages)/layout"
import { CheckCircle, MapPin, Globe, Building2, Wallet } from "lucide-react"
import ProjectGrid from "@/sections/projects/ProjectGrid"
import { availableProjects, projectCategories } from "@/data/projects"
import ServiceHero from "@/sections/services/ServiceHero"
import ServiceIntro from "@/sections/services/ServiceIntro"
import ServiceCTA from "@/sections/services/ServiceCTA"
import ServiceSectionHeading from "@/sections/services/ServiceSectionHeading"
import FeatureCard from "@/sections/services/FeatureCard"

const features = [
    {
        icon: <CheckCircle />,
        titleWhite: "Verified",
        titleAmber: "Titles",
        description: "All lands are carefully checked to ensure they are free from government acquisition, litigation, or ownership disputes.",
    },
    {
        icon: <MapPin />,
        titleWhite: "Strategic",
        titleAmber: "Location",
        description: "We offer lands in areas with high appreciation value, ensuring clients benefit from long-term returns on investment.",
    },
    {
        icon: <Globe />,
        titleWhite: "Diverse",
        titleAmber: "Purposes",
        description: "Whether for residential, commercial or investment purposes, we help clients secure the right parcel of land that meets their needs.",
    },
    {
        icon: <Building2 />,
        titleWhite: "Future",
        titleAmber: "Development",
        description: "Our lands are often located in regions earmarked for infrastructural growth (roads, schools, businesses, housing estates), guaranteeing increased value over time.",
    },
    {
        icon: <Wallet />,
        titleWhite: "Flexible Payment",
        titleAmber: "Options",
        description: "We provide outright purchase, installment plans, and in some cases, cooperative purchase structures to make land ownership accessible to all.",
    },
]

export default function LandSales() {
    return (
        <MainLayout>
            <ServiceHero
                image="/services/land_sales_1.jpg"
                category="Land Sales"
                titleWhite="From Vision to Value, Excellence in"
                titleAmber="Land Sales"
                description="Our land sales service focuses on providing clients with genuine, well-verified lands in
                    both prime and fast-developing locations. We understand that buying land is one of the
                    most significant investments an individual or business can make, so we ensure that every
                    property we offer is authentic, secure, and properly documented.
                "
            />

            <div className="pb-16 sm:pb-20 pt-16 sm:pt-24 lg:pt-36 bg-zinc-950 w-full">
                <ServiceIntro
                    image="/services/land_sales_2.jpg"
                    text="At Quantum Homes & Property, we don't just sell land — we craft opportunities. Our innovative, client-centered approach blends location intelligence, legal security, and flexible access to shape investments that inspire and endure."
                />

                <ServiceCTA
                    headingWhite="Don't miss out on"
                    headingAmber="high-growth locations"
                    subtext="Reach out today to view available lands and lock in your investment."
                    buttonLabel="Get Started"
                />

                <ServiceSectionHeading
                    white="What We Offer"
                    amber="Our Clients"
                />

                <div className="w-full mt-10 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-[60px] pt-10 pb-16 sm:pb-20">
                        {features.map((f) => (
                            <FeatureCard key={f.titleWhite} {...f} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full bg-zinc-950">
                <div className="max-w-[1600px] m-auto">
                    <ProjectGrid categories={projectCategories} projects={availableProjects} />
                </div>
            </div>

            <InvestmentSection />
        </MainLayout>
    )
}
