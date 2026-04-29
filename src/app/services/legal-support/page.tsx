// app/(pages)/services/legal-support/page.tsx
'use client'

import InvestmentSection from "@/components/Investment"
import MainLayout from "@/app/(pages)/layout"
import { HiDocument } from "react-icons/hi2"
import { RiCompassDiscoverLine } from "react-icons/ri"
import { LuLandPlot } from "react-icons/lu"
import { MdOutlineVerified } from "react-icons/md"
import ServiceHero from "@/sections/services/ServiceHero"
import ServiceIntro from "@/sections/services/ServiceIntro"
import ServiceCTA from "@/sections/services/ServiceCTA"
import ServiceSectionHeading from "@/sections/services/ServiceSectionHeading"
import FeatureCard from "@/sections/services/FeatureCard"

const features = [
    {
        icon: <RiCompassDiscoverLine />,
        titleWhite: "Survey",
        titleAmber: "Plans",
        description: "Preparation and verification of survey documents to establish the exact boundaries and size of the land.",
    },
    {
        icon: <HiDocument />,
        titleWhite: "Deeds of",
        titleAmber: "Assignment/Conveyance",
        description: "Legal transfer of ownership from seller to buyer, duly signed and registered.",
    },
    {
        icon: <LuLandPlot />,
        titleWhite: "Excision and",
        titleAmber: "Gazette Processing",
        description: "We provide outright purchase, installment plans, and in some cases, cooperative purchase structures to make land ownership accessible to all.",
    },
    {
        icon: <MdOutlineVerified />,
        titleWhite: "Building Approvals",
        titleAmber: "And Permits",
        description: "Whether for residential, commercial or investment purposes, we help clients secure the right parcel of land that meets their needs.",
    },
]

export default function TitleDocAndLegalSupport() {
    return (
        <MainLayout>
            <ServiceHero
                image="/services/signing-papers.jpg"
                category="Legal Support"
                titleWhite="Standardized Title Documentation and"
                titleAmber="Legal Support"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error."
            />

            <div className="pb-16 sm:pb-20 pt-16 sm:pt-24 lg:pt-36 bg-[#F4F2EC] w-full">
                <ServiceIntro
                    image="/services/consultation.jpg"
                    text="For years, architecture has been stuck in the past. It's time to redefine the future. At Urbanex+, we don't just design buildings—we craft experiences. Our innovative, human-centered approach blends aesthetics, sustainability, and functionality to shape spaces that inspire and endure."
                />

                <ServiceCTA
                    headingWhite="Ensure your property is"
                    headingAmber="legally secure"
                    subtext="Speak with our experts today for proper documentation and guidance."
                    buttonLabel="See Experts"
                />

                <ServiceSectionHeading
                    white="What We Handle"
                    amber="For Our Clients"
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