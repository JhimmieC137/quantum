import { HiPhone } from "react-icons/hi2";
import MainLayout from "../(pages)/layout";
import FadeUp from "@/ui/FadeUp";
import { FiSend } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function ContactUs() {
    return (
        <MainLayout>
            {/* Hero banner */}
            <div className="relative h-[14rem] sm:h-[18rem] lg:h-[23rem] overflow-hidden">
                <div className="absolute inset-0 bg-black/70 z-10"/>
                <img src="/wallpapers/construction_1.jpg" className="absolute inset-0 object-cover object-center w-full h-full"/>
                <p className="absolute inset-0 flex items-center justify-center text-zinc-200 text-5xl sm:text-7xl lg:text-[7.5rem] font-semibold z-20">
                    Contact <span className="text-amber-500 italic ml-4">Us</span>
                </p>
            </div>

            <div className="bg-[#F4F2EC]">
                <div className="max-w-[1400px] m-auto py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 w-full flex lg:flex-row flex-col gap-y-12 gap-x-8">

                    {/* Contact info */}
                    <div className="lg:w-1/2 w-full">
                        <FadeUp>
                            <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-2 pl-1`}>
                                <div className="h-px w-16 bg-red-500"/>
                                <p className="text-xs font-bold text-amber-500 tracking-widest">GET IN TOUCH</p>
                            </div>
                        </FadeUp>

                        <p className={`${montserrat.className} text-zinc-800 text-4xl sm:text-5xl font-semibold mb-3`}>
                            Reach out <span className="text-amber-500 italic">to us</span>
                        </p>
                        <p className="text-zinc-800 text-base sm:text-lg mb-5 max-w-[85%]">
                            Whether you're interested in buying land, building your dream home, or simply want to learn more about our services — our team is ready to help.
                        </p>

                        {[
                            {
                                icon: <HiPhone className="text-amber-300 size-5" />,
                                label: "Phone",
                                value: "+234800000000",
                            },
                            {
                                icon: <IoMdMail className="text-amber-300 size-7" />,
                                label: "Email",
                                value: "support@quantum.com",
                            },
                            {
                                icon: <FaLocationDot className="text-amber-300 size-5" />,
                                label: "Offices",
                                value: "Molete, Ibadan",
                            },
                        ].map((item) => (
                            <div key={item.label} className="flex gap-6 w-full items-center mt-8">
                                <div className="bg-red-700 shrink-0 size-12 flex justify-center items-center rounded-full">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-zinc-600/40 font-semibold text-sm">
                                        {item.label}
                                    </p>
                                    <p className="text-zinc-800 text-base sm:text-lg">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact form */}
                    <form className="lg:w-1/2 w-full p-8 sm:p-10 lg:p-12 bg-red-700 rounded-2xl overflow-hidden relative" action="">
                        <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[32%] -right-[17%] -rotate-[38deg] w-[33rem]"/>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="fullname">Full Name</label>
                                <input
                                    id="fullname"
                                    type="text"
                                    placeholder="John Doe"
                                    className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base"
                                />
                            </div>
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="example@mail.com"
                                    className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="phone">Phone No.</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="+234 70400000000"
                                    className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Tell us about your needs..."
                                    className="bg-transparent text-zinc-200 placeholder:text-zinc-200/30 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base resize-none"
                                />
                            </div>
                        </div>

                        <button type="submit" className="rounded-lg p-3 text-red-700 bg-white w-full flex justify-center items-center gap-2 hover:bg-zinc-100 ease-in-out duration-300 font-medium">
                            Send Message
                            <FiSend className="size-4" />
                        </button>
                    </form>

                </div>
            </div>
        </MainLayout>
    );
}