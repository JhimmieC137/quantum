// app/(pages)/services/construction-and-development/page.tsx
'use client'

import InvestmentSection from "@/components/Investment"
import MainLayout from "@/app/(pages)/layout"
import { Hammer, DollarSign, Home, Building2, Users, Wrench } from "lucide-react"
import ProjectGrid from "@/sections/projects/ProjectGrid"
import { availableProjects, projectCategories } from "@/data/projects"
import ServiceHero from "@/sections/services/ServiceHero"
import ServiceIntro from "@/sections/services/ServiceIntro"
import ServiceCTA from "@/sections/services/ServiceCTA"
import ServiceSectionHeading from "@/sections/services/ServiceSectionHeading"
import FeatureCard from "@/sections/services/FeatureCard"

const features = [
    {
        icon: <Home />,
        titleWhite: "Residential",
        titleAmber: "Projects",
        description: "Development of modern housing units including duplexes, bungalows, luxury apartments, and estate layouts that cater to diverse budgets.",
    },
    {
        icon: <DollarSign />,
        titleWhite: "Commercial",
        titleAmber: "Projects",
        description: "Designing and constructing office complexes, shopping centers, and mixed-use developments for business purposes.",
    },
    {
        icon: <Building2 />,
        titleWhite: "Estate",
        titleAmber: "Development",
        description: "Planning and building gated communities with essential infrastructure such as roads, drainage, electricity, and green spaces.",
    },
    {
        icon: <Hammer />,
        titleWhite: "Custom-Built",
        titleAmber: "Homes",
        description: "Tailored construction projects for clients who want personalized designs that reflect their lifestyle and taste.",
    },
    {
        icon: <Users />,
        titleWhite: "Project",
        titleAmber: "Management",
        description: "Coordinating every stage of development from architectural design and budgeting to construction and finishing ensuring projects are completed on time and within budget.",
    },
    {
        icon: <Wrench />,
        titleWhite: "Renovation and",
        titleAmber: "Remodelling",
        description: "Upgrading existing properties to modern standards, enhancing both aesthetics and functionality.",
    },
]

export default function ConstructionAndDev() {
    return (
        <MainLayout>
            <ServiceHero
                image="/services/new-building.jpg"
                category="Construction And Development"
                titleWhite="Designing, Building, and"
                titleAmber="Managing Projects"
                description="We don't just sell Landed properties, we also design, build, and deliver modern
                    residential and commercial projects that meet the highest standards of quality and
                    functionality. Our Construction & Development service is tailored for individuals, families,
                    investors, and organizations who want to bring their real estate visions to life.
                "
            />

            <div className="pb-16 sm:pb-20 pt-16 sm:pt-24 lg:pt-36 bg-zinc-950 w-full">
                <ServiceIntro
                    image="/services/working-project.jpg"
                    text="At Quantum Homes & Property, we don't just design buildings — we craft experiences. Our innovative, human-centered approach blends aesthetics, sustainability, and functionality to shape spaces that inspire and endure."
                />

                <ServiceCTA
                    headingWhite="Ready to bring your"
                    headingAmber="real estate vision to life?"
                    subtext="Build with confidence. Speak with our team today to plan and execute your next development project."
                    buttonLabel="Get Started"
                />

                <ServiceSectionHeading
                    white="What We Offer in"
                    amber="Construction And Development"
                />

                <div className="w-full mt-10 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1600px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-[60px] pt-10 pb-16 sm:pb-20">
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
