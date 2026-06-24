// app/(pages)/services/legal-support/page.tsx
'use client'

import InvestmentSection from "@/components/Investment"
import MainLayout from "@/app/(pages)/layout"
import { FileText, Compass, LayoutList, CheckSquare } from "lucide-react"
import ServiceHero from "@/sections/services/ServiceHero"
import ServiceIntro from "@/sections/services/ServiceIntro"
import ServiceCTA from "@/sections/services/ServiceCTA"
import ServiceSectionHeading from "@/sections/services/ServiceSectionHeading"
import FeatureCard from "@/sections/services/FeatureCard"

const features = [
    {
        icon: <Compass />,
        titleWhite: "Survey",
        titleAmber: "Plans",
        description: "Preparation and verification of survey documents to establish the exact boundaries and size of the land.",
    },
    {
        icon: <FileText />,
        titleWhite: "Deeds of",
        titleAmber: "Assignment/Conveyance",
        description: "Legal transfer of ownership from seller to buyer, duly signed and registered.",
    },
    {
        icon: <LayoutList />,
        titleWhite: "Excision and",
        titleAmber: "Gazette Processing",
        description: "Assisting clients in securing government recognition for community lands released for private ownership.",
    },
    {
        icon: <CheckSquare />,
        titleWhite: "Building Approvals",
        titleAmber: "And Permits",
        description: "Supporting clients in securing necessary building permits before construction begins.",
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
                description="At Quantum Homes & Property, we understand that proper documentation is the foundation of secure
                    property ownership. Many buyers fall victim to fraudulent sales or future disputes because
                    of incomplete or invalid paperwork. Our Title Documentation & Legal Support service is
                    designed to protect our clients by ensuring that every property acquired is authentic,
                    legally compliant, and properly registered.
                "
            />

            <div className="pb-16 sm:pb-20 pt-16 sm:pt-24 lg:pt-36 bg-zinc-950 w-full">
                <ServiceIntro
                    image="/services/consultation.jpg"
                    text="At Quantum Homes & Property, we don't just process paperwork — we protect your investment. Our legal support team ensures every title is authentic, every transfer is compliant, and every client can build on their land with full confidence."
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
