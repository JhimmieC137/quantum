'use client'

import { CgMenuGridO } from "react-icons/cg"
import FadeUp from "@/ui/FadeUp"
import FadeRight from "@/ui/FadeRight"
import InvestmentSection from "@/components/Investment"
import OurClients from "@/components/OurClients"
import { Montserrat } from "next/font/google"
import MainLayout from "../(pages)/layout"

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function About() {
    return (
        <MainLayout>
            <div className="relative h-[14rem] sm:h-[18rem] lg:h-[23rem] overflow-hidden">
                <div className="absolute inset-0 bg-black/70 z-10"/>
                <img src="/wallpapers/construction_1.jpg" className="absolute inset-0 object-cover object-center w-full h-full"/>
                <p className="absolute inset-0 flex items-center justify-center text-zinc-200 text-5xl sm:text-7xl lg:text-[7.5rem] font-semibold z-20">
                    About <span className="text-amber-500 italic ml-4">Us</span>
                </p>
            </div>
            <div className="xl:max-w-[1400px] lg:max-w-[1200px] md:max-w-full m-auto py-20 px-2">
                <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md">
                    <CgMenuGridO className="size-4 text-zinc-200"/>
                    <p className="text-zinc-100/80 text-sm">About Us</p>
                </div>

                <FadeUp>
                    <p className={`${montserrat.className} text-zinc-200 xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold my-7`}>
                        Innovative Designs, <br/>Urban <span className="text-amber-300 italic">Excellence</span>
                    </p>
                </FadeUp>

                <div className="flex lg:gap-x-5 gap-x-3 mb-10">
                    <div className="bg-amber-400 lg:p-[3px] p-[2px] lg:max-w-[10px] max-w-[5px] z-20" />
                    {/* <div className="max-w-[5px]">
                    </div> */}

                    <FadeRight>
                        <p className="text-zinc-200/90 lg:text-3xl md:text-2xl text-md lg:pr-10 p-0 mb-5 max-w-[80rem]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error. Quibusdam, iure? Consequatur sunt, in aperiam assumenda nam earum vel deserunt?
                        </p>
                        <p className="text-zinc-200/90 lg:text-3xl md:text-2xl text-md lg:pr-10 p-0 my-10 max-w-[80rem]">
                            Consectetur adipisicing elit. Adipisci corrupti repellendus fugit exercitationem, vitae assumenda voluptas at quisquam error. Quibusdam, iure? Consequatur sunt, in aperiam assumenda nam earum vel deserunt?
                        </p>
                    </FadeRight>         
                </div>

            </div>
            <OurClients />

            <div className="bg-[#F4F2EC] py-28 relative overflow-hidden px-2">
                <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.07] top-[40%] -right-[20%] scale-x-[-1]" />
                <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.07]  -top-[20%] -left-[20%]" />
                {/* <img src="/wallpapers/dwg_img_2.png" className="absolute opacity-[0.07] bottom-3 -left-[20%]" /> */}

                <div className="relative max-w-[1000px] m-auto z-50">
                    <p className={`${montserrat.className} text-zinc-900 lg:text-6xl text-5xl font-semibold my-10 text-center`}>
                        We believe in the transformative <br />
                        <span className="text-amber-500 italic">power of construction</span>
                    </p>

                    {/* <div className="w-full flex gap-12 relative mt-16">
                        <div className="w-1/2 rounded-[1.5rem] overflow-hidden relative max-h-[60em]">
                            <img src="/wallpapers/planners.png" className="absolute inset-0 bg-cover"/>
                            <div className="absolute bg-red-700/30 inset-0 z-20"/>
                        </div>
                        <div className="absolute bg-red-700 -z-10 bottom-[5%] left-2.5 rounded-[1.7rem] w-[30rem] h-[35rem]"/>
                        <div className="w-1/2">
                            <p className="text-zinc-900 xl:text-4xl lg:text-3xl xl:leading-[3rem] leading-[2rem]">
                                Through our artworks, our goal is to spark curiosity, provoke introspection, geographical boundaries. Drawing inspiration, we skillfully blend realism and imaginative elements to imbue our creations with a unique and captivating essence. 
                            </p>

                            <div className="mt-8 py-4 px-10 bg-red-700 text-zinc-100 rounded-2xl hover:bg-zinc-200 hover:text-zinc-900 ease-in-out duration-300 cursor-pointer">
                                <p className="text-xl text-center">Explore properties</p>
                            </div>
                        </div>
                    </div> */}


                    <div className="w-full flex md:flex-row flex-col gap-12 relative mt-16 items-stretch">
                        {/* Image + red accent block wrapper */}
                        <div className="md:w-1/2 w-full relative">
                            {/* Red offset background — positioned behind image, top-right offset */}
                            <div className="absolute bg-red-700 -z-10 inset-0 md:-translate-x-3 translate-x-[3px] md:-translate-y-3 -translate-y-[3px] rounded-[1.5rem]" />

                            {/* Image container */}
                            <div className="relative rounded-[1.5rem] overflow-hidden w-full h-full min-h-[30rem]">
                            <img
                                src="/wallpapers/planners.png"
                                className="absolute inset-0 md:scale-110 scale-125 w-full h-full object-cover"
                            />
                            {/* Red transparent film — covers only the image */}
                            <div className="absolute inset-0 bg-red-700/30 z-20" />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="md:w-1/2 w-full flex flex-col justify-between">
                            <p className="text-zinc-900 xl:text-4xl lg:text-3xl text-2xl xl:leading-[3rem] lg:leading-[2.5rem] md:leading-[2.3rem]">
                                Through our artworks, our goal is to spark curiosity, provoke
                                introspection, geographical boundaries. Drawing inspiration, we
                                skillfully blend realism and imaginative elements to imbue our
                                creations with a unique and captivating essence.
                            </p>

                            <div className="mt-8 py-4 px-10 bg-red-700 text-zinc-100 rounded-2xl hover:bg-zinc-200 hover:text-zinc-900 ease-in-out duration-300 cursor-pointer w-fit">
                            <p className="text-xl text-center">Explore properties</p>
                            </div>
                        </div>
                    </div>
                        
                    <div className="w-full flex md:flex-row flex-col gap-8 mb-10 mt-14">
                        
                        <div className="p-[2px] bg-gradient-to-br from-red-700 via-amber-400 to-transparent rounded-[1.7rem] overflow-hidden relative">
                            <div className="bg-[#F4F2EC] p-10 rounded-[1.5rem] relative">
                                <p className={`${montserrat.className} text-3xl font-semibold text-zinc-900 mb-12`}>
                                    Our <span className="text-amber-400">Mision.</span>
                                </p>

                                <p className="text-xl mt-px text-zinc-900">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repellat, laudantium 
                                    doloremque, similique dolores inventore incidunt eveniet quae iure dicta, pariatur aut.
                                </p>

                                {/* <p className={`absolute bottom-0 -right-2 text-zinc-400/10 font-semibold text-[6.4rem] leading-4 ${montserrat.className} italic`}>
                                    <em>Vision</em>
                                </p> */}

                            </div>
                        </div>

                        <div className="p-[2px] bg-gradient-to-br from-red-700 via-amber-400 to-transparent rounded-[1.7rem] overflow-hidden relative">
                            <div className="bg-[#F4F2EC] p-10 rounded-[1.5rem] relative">
                                <p className={`${montserrat.className} text-3xl font-semibold text-zinc-900 mb-12`}>
                                    Our <span className="text-amber-400">Vision.</span>
                                </p>

                                <p className="text-xl mt-px text-zinc-900">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repellat, laudantium 
                                    doloremque, similique dolores inventore incidunt eveniet quae iure dicta, pariatur aut.
                                </p>
                            </div>
                        </div>
                        
                    </div>

                </div>


                <p className={`${montserrat.className} text-center text-zinc-900 text-5xl font-semibold mt-[17rem] max-w-[40rem] m-auto`}>
                    Our Impact over <br />
                    <span className="text-amber-500 italic">The Years</span>
                </p>
                <div className="mb-5 py-8 xl:max-w-[1000px] max-w-full m-auto flex sm:flex-row flex-col justify-between  w-full lg:gap-14 gap-8 px-3">


                    {/* <div className="flex flex-col divide-y-2 divide-amber-500">
                        <div className="w-full py-24">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione! Quidem eum assumenda ipsum nisi repudiandae!
                            </p>
                        </div>
                        <div className="w-full py-24">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione! Quidem eum assumenda ipsum nisi repudiandae!
                            </p>
                        </div>
                    </div>  */}

                    <div className="flex flex-col divide-y-2 divide-amber-500 ">
                        <div className="w-full py-16">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione! 
                            </p>
                        </div>
                        <div className="w-full py-16">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione!
                            </p>
                        </div>
                    </div> 

                    <div className="h-[2px] w-full bg-amber-500 sm:hidden block"/>

                    <div className="flex flex-col divide-y-2 divide-amber-500">
                        <div className="w-full py-16">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione!
                            </p>
                        </div>
                        <div className="w-full py-16">
                            <p className={`text-red-700 text-[6rem] m-0 p-0 leading-[8rem] ${montserrat.className}`}>
                                20+
                            </p>

                            <p className="text-zinc-900 text-xl font-semibold">
                                Years <span className="text-amber-500 italic">Experience</span>
                            </p>

                            <p className="text-zinc-900/80 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cumque nisi fugit ipsum ducimus, magnam maxime esse ex hic dolorum, ut velit saepe ratione!
                            </p>
                        </div>
                    </div> 


                </div>

            </div>

            <div className="bg-[#F4F2EC] py-10 w-full">
                <div className="max-w-[1400px] m-auto">
                    {/* <FadeUp>
                        <div className="w-fit flex gap-x-1.5 justify-center items-center p-2 border border-zinc-200/40 rounded-lg bg-transparent shadow-md m-auto">
                            <CgMenuGridO className="size-4 text-zinc-200"/>
                            <p className="text-zinc-100/80 text-sm">Our Team</p>
                        </div>
                    </FadeUp> */}

                    <FadeUp>
                        <p className={`${montserrat.className} text-zinc-800 text-center text-5xl font-semibold mt-14`}>
                            Meet Our <span className="text-amber-300 italic">Team</span>
                        </p>
                    </FadeUp>
        
                    <FadeUp>
                        <p className="text-zinc-800 text-center text-md pr-10 my-5 max-w-[50rem] mx-auto mb-14">
                            A passionate group of architects, designers, and visionaries dedicated to crafting innovative, sustainable, and timeless spaces.
                        </p>
                    </FadeUp>


                    <div className="mt-16 grid xl:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr] gap-14">
                        <div className="w-full  flex flex-col items-center justify-center">
                            <div className="rounded-[50%] size-[18rem] relative overflow-hidden flex justify-center items-center bg-red-700 p-[3px]">
                                <div className="rounded-[50%] size-full relative overflow-hidden m-auto">
                                    <img src="/team/engnr_1.jpg" className="absolute inset-0 bg-cover"/>
                                </div>
                            </div>
                            <p className={`${montserrat.className} text-zinc-800 text-center text-3xl font-semibold mt-5`}>
                                Engr. Sobowale <span className="text-amber-400 italic">Micheal</span>
                            </p>

                            <p className="text-zinc-800 text-center text-xl mt-2">
                                General Manager
                            </p>

                        </div>
                        <div className="w-full  flex flex-col items-center justify-center">
                            <div className="rounded-[50%] size-[18rem] relative overflow-hidden flex justify-center items-center bg-red-700 p-[3px]">
                                <div className="rounded-[50%] size-full relative overflow-hidden m-auto">
                                    <img src="/team/engnr_1.jpg" className="absolute inset-0 bg-cover"/>
                                </div>
                            </div>
                            <p className={`${montserrat.className} text-zinc-800 text-center text-3xl font-semibold mt-5`}>
                                Engr. Sobowale <span className="text-amber-400 italic">Micheal</span>
                            </p>

                            <p className="text-zinc-800 text-center text-xl mt-2">
                                General Manager
                            </p>

                        </div>
                        <div className="w-full  flex flex-col items-center justify-center">
                            <div className="rounded-[50%] size-[18rem] relative overflow-hidden flex justify-center items-center bg-red-700 p-[3px]">
                                <div className="rounded-[50%] size-full relative overflow-hidden m-auto">
                                    <img src="/team/engnr_1.jpg" className="absolute inset-0 bg-cover"/>
                                </div>
                            </div>
                            <p className={`${montserrat.className} text-zinc-800 text-center text-3xl font-semibold mt-5`}>
                                Engr. Sobowale <span className="text-amber-400 italic">Micheal</span>
                            </p>

                            <p className="text-zinc-800 text-center text-xl mt-2">
                                General Manager
                            </p>

                        </div>

                    </div>

                </div>


            </div>
            <InvestmentSection />
        </MainLayout>
    )
} 