'use client'
import SeviceSection from "@/sections/services/ServiceSection"
import FadeLeft from "@/ui/FadeLeft"
import FadeUp from "@/ui/FadeUp"
import { Montserrat } from "next/font/google"
import { CgMenuGridO } from "react-icons/cg"
import { CiEdit } from "react-icons/ci"
import { GrUserManager } from "react-icons/gr"
import { HiOutlineBuildingOffice, HiOutlineDocument } from "react-icons/hi2"
import { LuLandPlot } from "react-icons/lu"


const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export default function OurServices()  {

    return (
        <div className="w-full lg:pt-24 pt-5 relative bg-zinc-950/5 z-50">

            <div className="w-full 2xl:max-w-[1400px] lg:max-w-[1200px] relative m-auto lg:mt-24 mt-5 mb-10">

                <div className="flex xl:w-full xl:px-2 px-4 gap-1.5 md:flex-row flex-col ">
                    <div className="xl:w-1/2 lg:w-[20%] w-full">
                        <FadeLeft>
                            <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md">
                                <CgMenuGridO className="size-4 text-zinc-200"/>
                                <p className="text-zinc-100/80 text-sm">Our Services</p>
                            </div>
                        </FadeLeft>
                    </div>

                    <div className="xl:w-1/2 lg:w-[80%] w-full">
                        <FadeUp>
                            <p className={`${montserrat.className} text-zinc-200 text-left xl:text-5xl text-4xl font-semibold lg:m-0 mt-3 leading-9`}>
                                Our <span className="text-amber-400 italic">Services</span>
                            </p>
                        </FadeUp>
                        <FadeUp>
                            <p className="text-zinc-200 text-left lg:text-md text-sm xl:pr-10 pr-2 my-5 lg:max-w-[50rem] max-w-full">
                                We handle the full lifecycle from the first survey peg in the ground to the final key handover. Our teams bring deep technical expertise to every discipline, so your project moves as one coordinated effort rather than a chain of disconnected contractors.
                            </p>
                        </FadeUp>
                    </div>
                </div>
                
            </div>

            <div className="w-full flex flex-col">
                <div className="w-full">
                    <SeviceSection 
                        image={"/services/land_sales_narrow.jpg"}
                        headerWhite={"Land"}
                        headerAmber={"Sales"}
                        icon={
                            <LuLandPlot className="size-12 text-zinc-300 mb-3"/>
                        }
                        description={"Our land sales service focuses on providing clients with genuine, well-verified lands inboth prime and fast-developing locations."}
                        link="/services/land-sales"
                    />
                </div>
                <div className="w-full">
                    <SeviceSection 
                        image={"/services/signing-papers.jpg"}
                        headerWhite={"Title Documentation and"}
                        headerAmber={"Legal Support"}
                        icon={
                            <CiEdit className="size-12 text-zinc-300 mb-3"/>
                        }
                        description={"Our Title Documentation & Legal Support service is designed to protect our clients by ensuring that every property acquired is authentic, legally compliant, and properly registered."}
                        link="/services/legal-support"
                    />
                </div>
                <div className="w-full">
                    <SeviceSection 
                        image={"/services/new-building.jpg"}
                        headerWhite={"Construction and"}
                        headerAmber={"Development"}
                        icon={
                            <HiOutlineBuildingOffice className="size-12 text-zinc-300 mb-3"/>
                        }
                        description={"Our Construction and Development service is tailored for individuals, families, investors, and organizations who want to bring their real estate visions to life."}
                        link="/services/legal-support"
                    />
                </div>
                <div className="w-full">
                    <SeviceSection 
                        image={"/services/agents-in-meeting.jpg"}
                        headerWhite={"Real Estate"}
                        headerAmber={"Investment Advisory"}
                        icon={
                            <GrUserManager className="size-12 text-zinc-300 mb-3"/>
                        }
                        description={"Our Investment Advisory service is designed to guide individuals, families, and corporate organizations in identifying, analyzing, and investing in high-value real estate opportunities that yield long-term returns."}
                        link="/services/real-estate-investment-advisory"
                    />
                </div>

            </div>

        </div>
    )
}