'use client'
import SeviceSection from "@/sections/ServiceSection"
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
        <div className="w-full pt-24 relative bg-zinc-950/5 z-50">

            <div className="w-full max-w-[1400px] relative m-auto mt-24 mb-10">
                {/* <FadeUp>
                    <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-2 pl-1`}>
                        <div className="h-px w-16 bg-zinc-200"/>
                        <p className={`${montserrat.className} text-xs font-bold text-amber-300 tracking-widest`}>WHAT WE OFFER</p>
                    </div>
                </FadeUp> */}

                <div className="flex w-full">
                    <div className="w-1/2">
                        <FadeLeft>
                            <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md">
                                <CgMenuGridO className="size-4 text-zinc-200"/>
                                <p className="text-zinc-100/80 text-sm">Our Services</p>
                            </div>
                        </FadeLeft>
                    </div>

                    <div className="w-1/2">
                        <FadeUp>
                            <p className={`${montserrat.className} text-zinc-200 text-left text-5xl font-semibold my-3`}>
                                Our <span className="text-amber-400 italic">Services</span>
                            </p>
                        </FadeUp>
                        <FadeUp>
                            <p className="text-zinc-200 text-left text-md pr-10 my-5 max-w-[50rem]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error. Quibusdam, iure? Consequatur sunt, in aperiam assumenda nam earum vel deserunt?
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