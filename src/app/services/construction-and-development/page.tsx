'use client'

import { CgMenuGridO } from "react-icons/cg"
import FadeUp from "@/ui/FadeUp"
import FadeRight from "@/ui/FadeRight"
import InvestmentSection from "@/components/Investment"
import { HiDocument, HiOutlineBuildingOffice } from "react-icons/hi2"
import { Montserrat } from "next/font/google"
import MainLayout from "@/app/(pages)/layout"
import OurClients from "@/components/OurClients"
import { SiRenovate, SiTicktick } from "react-icons/si";
import { IoLocationSharp, IoCash } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa6";
import { PiFediverseLogo } from "react-icons/pi";
import ProjectGrid from "@/sections/ProjectGrid"
import { availableProjects, projectCategories } from "@/data/projects"
import { RiCompassDiscoverLine, RiCustomSize } from "react-icons/ri"
import { LuLandPlot } from "react-icons/lu"
import { MdOutlineSell, MdOutlineVerified } from "react-icons/md"
import { TbHome, TbHomeDollar, TbHomeStats } from "react-icons/tb"
import { BsHouses } from "react-icons/bs"
import { GrUserManager } from "react-icons/gr"


const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export default function ConstructionAndDev() {
    return (
        <MainLayout>
            <div className="relative max-h-[47rem] overflow-hidden">
                <div className="absolute inset-0 bg-black/70"/>
                <img src="/services/new-building.jpg" className="bg-cover -z-10 w-full -mt-32 h-[70%]"/>
                
                <div className="absolute bottom-[10%] left-[10%] right-0 z-50">
                    <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md">
                        <CgMenuGridO className="size-4 text-zinc-200"/>
                        <p className="text-zinc-100/80 text-sm">Construction And Development</p>
                    </div>
    
                    <FadeUp>
                        <p className={`${montserrat.className} text-zinc-200 text-7xl font-semibold my-7 max-w-[58rem]`}>
                            Designing, Building, and 
                            <br/><span className="text-amber-300 italic">Managing Projects</span>
                        </p>
                    </FadeUp>   
    
                    <div className="flex gap-x-5 mb-10">
                        <div className="bg-amber-400 p-[3px] max-w-[10px] z-20" />
    
                        <FadeRight>
                            <p className="text-zinc-200/90 text-lg pr-10 mb-5 max-w-[45rem]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error. Quibusdam, iure? Consequatur sunt, in aperiam assumenda nam earum vel deserunt?
                            </p>
                        </FadeRight>         
                    </div>   
                </div>

                
            </div>


            <div className="pb-20 pt-36 bg-[#F4F2EC] w-full">
                <div className="max-w-[1400px] m-auto flex gap-20 relative">
                    <div className="w-1/2 rounded-[1.5rem] overflow-hidden relative max-h-[60em] z-10">
                        <img src="/services/working-project.jpg" className="absolute inset-0 bg-cover" />
                        <div className="absolute bg-red-700/30 inset-0"/>
                    </div>
                    <div className="absolute bg-red-700 bottom-[5%] left-2.5 rounded-[1.7rem] w-[41.5rem] h-[27.5rem]"/>
                    <div className="w-1/2">
                        <p className="text-4xl ">
                            For years, architecture has been stuck in the past. It’s time to redefine the future.<br/><br/>
                            At Urbanex+, we don’t just design buildings—we craft experiences. Our innovative, human-centered approach blends aesthetics, sustainability, and functionality to shape spaces that inspire and endure.<br/><br/>
                            {/* Design without limits. Cities without compromise.Welcome to the future of architecture. */}
                        </p>
                        
                    </div>

                </div>


                <div className="w-full mt-[15rem]">
                    <div className="max-w-[1400px] m-auto flex justify-between items-center bg-red-700 px-14 py-10 rounded-3xl">
                        <div className="max-w-[60%]">
                            <p className={`${montserrat.className} text-zinc-200 text-[3rem] font-semibold leading-[3.5rem] mb-4`}>
                               Ready to bring your <br/><span className="text-amber-400 italic">real estate vision</span> to life? 
                            </p>
                            <p className={`text-zinc-200 text-xl`}>
                                Build with confidence. Speak with our team today to plan and execute your next development project.
                            </p>
                        </div>
                        
                        <div className="max-w-[40%] w-full flex justify-end items-end pr-5">
                            <div className="max-w-fit py-2 px-4 rounded-lg border border-transparent bg-zinc-200 text-red-700 text-md hover:text-zinc-200 hover:bg-transparent hover:border-zinc-200/40 duration-150 ease-in-out hover:shadow-xl cursor-pointer shadow-lg">
                                <p>
                                    Get started
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="w-full mt-[15rem]">
                    <p className={`${montserrat.className} text-center text-zinc-900 text-7xl font-semibold  max-w-[50rem] m-auto`}>
                        What We Offer in<br />
                        <span className="text-amber-500 italic">Construction And Development</span>
                    </p>
                </div>


                <div className="w-full mt-10">
                    <div className="max-w-[1600px] m-auto grid grid-cols-[1fr_1fr_1fr] gap-[60px] py-20">
                        <div className="relative">
                            <div className="p-[2px] bg-gradient-to-br from-red-700 via-amber-400 to-transparent rounded-[1.7rem] overflow-hidden relative h-full">
                                <div className="bg-[#F4F2EC] p-7 py-10 rounded-[1.5rem] relative h-full">
                                    <p className={`${montserrat.className} text-3xl font-semibold text-zinc-900 mb-5`}>
                                        Residential <span className="text-amber-400 italic">Projects</span>
                                    </p>

                                    <p className="text-xl mt-px text-zinc-900">
                                        Development of modern housing units including duplexes,
                                        bungalows, luxury apartments, and estate layouts that cater to diverse budgets.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -top-[10%] -left-[8%] bg-red-700 rounded-[50%] flex justify-center items-center p-4">
                                <TbHome className="text-zinc-200 size-10"/>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-[2px] bg-gradient-to-br from-red-700 via-amber-400 to-transparent rounded-[1.7rem] overflow-hidden relative h-full">
                                <div className="bg-[#F4F2EC] p-7 py-10 rounded-[1.5rem] relative h-full">
                                    <p className={`${montserrat.className} text-3xl font-semibold text-zinc-900 mb-5`}>
                                        Commercial <span className="text-amber-400 italic">Projects</span>
                                    </p>

                                    <p className="text-xl mt-px text-zinc-900">
                                        Designing and constructing office complexes, shopping centers,
                                        and mixed-use developments for business purposes.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -top-[10%] -left-[8%] bg-red-700 rounded-[50%] flex justify-center items-center p-4">
                                <TbHomeDollar  className="text-zinc-200 size-10"/>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-[2px] bg-gradient-to-br from-red-700 via-amber-400 to-transparent rounded-[1.7rem] overflow-hidden relative h-full">
                                <div className="bg-[#F4F2EC] p-7 py-10 rounded-[1.5rem] relative h-full">
                                    <p className={`${montserrat.className} text-3xl font-semibold text-zinc-900 mb-5`}>
                                        Estate <span className="text-amber-400 italic">Development</span>
                                    </p>

                                    <p className="text-xl mt-px text-zinc-900">
                                        Planning and building gated communities with essential infrastructure such as roads, drainage, electricity, and green spaces.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -top-[10%] -left-[8%] bg-red-700 rounded-[50%] flex justify-center items-center p-4">
                                <BsHouses  className="text-zinc-200 size-10"/>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-[2px] bg-gradient-to-br from-red-700 via-amber-400 to-transparent rounded-[1.7rem] overflow-hidden relative h-full">
                                <div className="bg-[#F4F2EC] p-7 py-10 rounded-[1.5rem] relative h-full">
                                    <p className={`${montserrat.className} text-3xl font-semibold text-zinc-900 mb-5`}>
                                        Custom-Built <span className="text-amber-400 italic">Homes</span>
                                    </p>

                                    <p className="text-xl mt-px text-zinc-900">
                                        Tailored construction projects for clients who want personalized designs that reflect their lifestyle and taste.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -top-[10%] -left-[8%] bg-red-700 rounded-[50%] flex justify-center items-center p-4">
                                <RiCustomSize className="text-zinc-200 size-10"/>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-[2px] bg-gradient-to-br from-red-700 via-amber-400 to-transparent rounded-[1.7rem] overflow-hidden relative h-full">
                                <div className="bg-[#F4F2EC] p-7 py-10 rounded-[1.5rem] relative h-full">
                                    <p className={`${montserrat.className} text-3xl font-semibold text-zinc-900 mb-5`}>
                                        Project <span className="text-amber-400 italic">Management</span>
                                    </p>

                                    <p className="text-xl mt-px text-zinc-900">
                                        Coordinating every stage of development — from architectural
                                        design and budgeting to construction and finishing — ensuring projects are completed on
                                        time and within budget.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -top-[10%] -left-[8%] bg-red-700 rounded-[50%] flex justify-center items-center p-4">
                                <GrUserManager className="text-zinc-200 size-10"/>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-[2px] bg-gradient-to-br from-red-700 via-amber-400 to-transparent rounded-[1.7rem] overflow-hidden relative h-full">
                                <div className="bg-[#F4F2EC] p-7 py-10 rounded-[1.5rem] relative h-full">
                                    <p className={`${montserrat.className} text-3xl font-semibold text-zinc-900 mb-5`}>
                                        Renovation and <span className="text-amber-400 italic">Remodelling</span>
                                    </p>

                                    <p className="text-xl mt-px text-zinc-900">
                                        Upgrading existing properties to modern standards, enhancing both aesthetics and functionality.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -top-[10%] -left-[8%] bg-red-700 rounded-[50%] flex justify-center items-center p-4">
                                <SiRenovate className="text-zinc-200 size-10"/>
                            </div>
                        </div>

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