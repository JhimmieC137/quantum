// app/(pages)/services/land-sales/page.tsx
'use client'

import InvestmentSection from "@/components/Investment"
import { Montserrat } from "next/font/google"
import MainLayout from "@/app/(pages)/layout"
import { SiTicktick } from "react-icons/si"
import { IoLocationSharp, IoCash } from "react-icons/io5"
import { FaRegBuilding } from "react-icons/fa6"
import { PiFediverseLogo } from "react-icons/pi"
import ProjectGrid from "@/sections/projects/ProjectGrid"
import { availableProjects, projectCategories } from "@/data/projects"
import ServiceHero from "@/sections/services/ServiceHero"
import ServiceIntro from "@/sections/services/ServiceIntro"
import ServiceCTA from "@/sections/services/ServiceCTA"
import ServiceSectionHeading from "@/sections/services/ServiceSectionHeading"
import FeatureCard from "@/sections/services/FeatureCard"

const montserrat = Montserrat({
    weight: ['600'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const features = [
    {
        icon: <SiTicktick />,
        titleWhite: "Verified",
        titleAmber: "Titles",
        description: "All lands are carefully checked to ensure they are free from government acquisition, litigation, or ownership disputes.",
    },
    {
        icon: <IoLocationSharp />,
        titleWhite: "Strategic",
        titleAmber: "Location",
        description: "We offer lands in areas with high appreciation value, ensuring clients benefit from long-term returns on investment.",
    },
    {
        icon: <IoCash />,
        titleWhite: "Flexible Payment",
        titleAmber: "Options",
        description: "We provide outright purchase, installment plans, and in some cases, cooperative purchase structures to make land ownership accessible to all.",
    },
    {
        icon: <PiFediverseLogo />,
        titleWhite: "Diverse",
        titleAmber: "Purposes",
        description: "Whether for residential, commercial or investment purposes, we help clients secure the right parcel of land that meets their needs.",
    },
    {
        icon: <FaRegBuilding />,
        titleWhite: "Future",
        titleAmber: "Development",
        description: "Our lands are often located in regions earmarked for infrastructural growth (roads, schools, businesses, housing estates), guaranteeing increased value over time.",
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
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error."
            />

            <div className="pb-16 sm:pb-20 pt-16 sm:pt-24 lg:pt-36 bg-[#F4F2EC] w-full">
                <ServiceIntro
                    image="/services/land_sales_2.jpg"
                    text="For years, architecture has been stuck in the past. It's time to redefine the future. At Urbanex+, we don't just design buildings—we craft experiences. Our innovative, human-centered approach blends aesthetics, sustainability, and functionality to shape spaces that inspire and endure."
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
                    <div className="max-w-[1600px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-[60px] pt-10 pb-16 sm:pb-20">
                        {features.map((f) => (
                            <FeatureCard key={f.titleWhite} {...f} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#F4F2EC]">
                <div className="max-w-[1600px] m-auto">
                    <ProjectGrid categories={projectCategories} projects={availableProjects} maxWidth="1600px"/>
                </div>
            </div>

            <InvestmentSection />
        </MainLayout>
    )
}