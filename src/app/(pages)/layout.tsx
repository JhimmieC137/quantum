"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Services from "@/components/Services"

export default function mainLayout({ children }: {children: React.ReactNode}) {
    return (
        <div className="size-full relative bg-[#0a0a0a]">
            <div className="bg-[url('/wallpapers/mansion_b.png')] bg-cover bg-no-repeat bg-center w-full">
                <div className="bg-gradient-to-b from-[#000000b4] from-50% via-[#0a0a0af8] via-80% to-[#0a0a0a] to-95% px-20 pt-20 pb-5 relative md:px-24">
                {/* <div className="bg-gradient-to-b from-[#3f2e1b9c] from-50% via-[#945900f3] via-80% to-[#915700] to-95% px-20 pt-20 pb-5 relative md:px-56"> */}
                    <Header />
                    <div className="size-full mx-auto">
                        {children}
                    </div>
                </div>
            </div>


            <div className="w-full md:px-24">
                <div className="flex flex-row justify-between items-end w-full">
                    <div className="w-[45%]">
                        <p className="text-zinc-400/90 text-3xl font-medium leading-relaxed text-left">
                            <span className="text-amber-300">For years, architecture has been stuck in the past.</span> It’s time to redefine the future. <br/><br/>
                            At Quantum Homes, we don’t just design buildings, we craft experiences. Our innovative, human-centered approach blends aesthetics, sustainability, and functionality to shape spaces that inspire and endure. <br/><br/>
                            Design without limits. Cities without compromise. Welcome to the future of architecture.
                        </p>

                        <div className="flex justify-start items-end gap-3 mt-10">
                            <div className="bg-zinc-200 p-3 rounded-full">
                                <img src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67f4ebcce4ca40bd0427ebb1_Bank.svg" className="size-5"/>
                            </div>
                            <div className="bg-zinc-200 p-3 rounded-full">
                                <img src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67f4ebcccdb11bbfd05e221e_BuildingOffice.svg" className="size-5"/>
                            </div>
                            <div className="bg-zinc-200 p-3 rounded-full">
                                <img src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67f4ebccc96d0f68ab740e11_City.svg" className="size-5"/>
                            </div>
                            <div className="bg-zinc-200 p-3 rounded-full">
                                <img src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67f4ebcc1f7788d35ec44a0c_Lighthouse.svg" className="size-5"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-[40%]">
                        <p className="text-zinc-400/90 text-md">
                            At Urbanex+, we merge innovation with timeless design to create spaces that inspire and endure. Our architecture balances aesthetics, functionality, and sustainability for a better future.<br /><br />

                            With a passion for pushing boundaries, we embrace cutting-edge technology and visionary thinking. Every project we design transforms the way people live, work, and connect.
                        </p>
                    </div>

                </div>
            </div>

            <div className="bg-zinc-300 my-32 md:px-24 w-full">
                <Services />
            </div>

            <Footer />
        </div>
    )
}