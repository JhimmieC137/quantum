import { HiPhone } from "react-icons/hi2";
import MainLayout from "../(pages)/layout";
import FadeUp from "@/ui/FadeUp";
import { FiSend } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Montserrat } from "next/font/google";

export default function ContactUs() {
    const montserrat = Montserrat({
      weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      variable: "--font-montserrat",
      subsets: ["latin"],
    });

    return(
        <MainLayout>
            <div className="relative max-h-[23rem] overflow-hidden">
                <div className="absolute inset-0 bg-black/70"/>
                <img src="/wallpapers/construction_1.jpg" className="bg-cover -z-10 w-full -mt-32"/>
                <p className="absolute top-[25%] left-0 right-0 text-zinc-200 text-[7.5rem] font-semibold m-auto w-fit z-50">Contact <span className="text-amber-500 italic">Us</span></p>
            </div>
            <div className="bg-[#F4F2EC]">
                <div className="max-w-[1400px] m-auto py-32 w-full flex gap-x-8">
                    <div className="w-1/2">
                        <FadeUp>
                            <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-2 pl-1`}>
                                <div className="h-px w-16 bg-red-500"/>
                                <p className={`${montserrat.className} text-xs font-bold text-amber-500 tracking-widest`}>GET IN TOUCH</p>
                            </div>
                        </FadeUp>
                        <p className={`${montserrat.className} text-zinc-800 text-[3rem] font-semibold `}>
                            Reach out <span className="text-amber-500 italic">to us</span>
                        </p>
                        <p className="text-zinc-800 text-lg mb-5 max-w-[85%]">
                            Whether you're interested in buying land, building your dream home, or simply want to learn more about our services — our team is ready to help.
                        </p>

                        <div className="flex gap-7 w-full items-center mt-8">
                            <div className="bg-red-700 size-12 flex justify-center items-center rounded-[50%]">
                                <HiPhone className="text-amber-300 m-auto size-5" />
                            </div>

                            <div>
                                <p className="text-zinc-600/40 font-semibold text-md">
                                    Phone
                                </p>
                                <p className="text-zinc-800 text-lg m-0">
                                    +234800000000
                                </p>
                            </div>

                        </div>

                        <div className="flex gap-7 w-full items-center mt-8">
                            <div className="bg-red-700 size-12 flex justify-center items-center rounded-[50%]">
                                <IoMdMail className="text-amber-300 m-auto size-7" />
                            </div>

                            <div>
                                <p className="text-zinc-600/40 font-semibold text-md">
                                    Email
                                </p>
                                <p className="text-zinc-800 text-lg m-0">
                                    support@quantum.com
                                </p>
                            </div>

                        </div>

                        <div className="flex gap-7 w-full items-center mt-8">
                            <div className="bg-red-700 size-12 flex justify-center items-center rounded-[50%]">
                                <FaLocationDot className="text-amber-300 m-auto size-5" />
                            </div>

                            <div>
                                <p className="text-zinc-600/40 font-semibold text-md">
                                    Offices
                                </p>
                                <p className="text-zinc-800 text-lg m-0">
                                    Molete, Ibadan
                                </p>
                            </div>

                        </div>
                    </div>

                    <form className="w-1/2 p-12 bg-red-700 rounded-2xl overflow-hidden relative" action="">
                        <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[32%] -right-[17%] -rotate-[38deg] w-[33rem]"/>
                        <div className="grid grid-cols-[1fr_1fr] gap-6 mb-4">
                            <div className="w-full flex flex-col gap-y-[2px] ">
                                <label className="text-zinc-200" htmlFor="fullname">
                                    Full Name
                                </label>
                                <input id="fullname" type="text" placeholder="John Doe" className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:outline-none focus:border focus:border-zinc-200 ease-in-out duration-300" />
                            </div>
                            <div className="w-full flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200" htmlFor="email">
                                    Email
                                </label>
                                <input id="email" type="text" placeholder="example@mail.com" className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:outline-none focus:border focus:border-zinc-200 ease-in-out duration-300" />
                            </div>
                        </div>
                        <div className="grid grid-cols-[1fr_1fr] gap-6 mb-4">
                            <div className="w-full flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200" htmlFor="phone">
                                    Phone No.
                                </label>
                                <input id="phone" type="text" placeholder="+234 70400000000" className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:outline-none focus:border focus:border-zinc-200 ease-in-out duration-300" />
                            </div>
                            {/* <div className="w-full flex flex-col gap-y-2">
                                <label className="text-zinc-200" htmlFor="email">
                                    Interest
                                </label>
                                <input id="email" type="text" className="bg-transparent text-zinc-200 p-3 border border-zinc-400 rounded-lg" />
                            </div> */}
                        </div>
                        <div className="grid grid-cols-[1fr] gap-6 mb-6">
                            <div className="w-full flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200" htmlFor="phone">
                                    Message
                                </label>
                                <textarea id="phone" rows={5} placeholder="Tell us about your needs..." className="bg-transparent text-zinc-200 placeholder:text-zinc-200/30 p-3 border border-zinc-200/50 rounded-lg outline-none focus:outline-none focus:border focus:border-zinc-200 ease-in-out duration-300" />    
                            </div>
                        </div>
                        <a href="/" className="rounded-lg p-3 text-md text-red-700 bg-white w-full flex justify-center items-center gap-2">
                            Send Message
                            <FiSend className="size-4" />
                        </a>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}