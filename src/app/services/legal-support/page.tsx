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
        description: "Assisting clients in securing government recognition for community lands released for private ownership.",
    },
    {
        icon: <MdOutlineVerified />,
        titleWhite: "Building Approvals",
        titleAmber: "And Permits",
        description: "Supporting clients in securing necessary building permits before construction begins",
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
                description="At Quantum Homes, we understand that proper documentation is the foundation of secure
                    property ownership. Many buyers fall victim to fraudulent sales or future disputes because
                    of incomplete or invalid paperwork. Our Title Documentation & Legal Support service is
                    designed to protect our clients by ensuring that every property acquired is authentic,
                    legally compliant, and properly registered.
                "
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