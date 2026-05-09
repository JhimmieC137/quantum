'use client'

import { useState } from "react";
import Script from "next/script";
import { toast } from "sonner";
import { HiPhone } from "react-icons/hi2";
import MainLayout from "../(pages)/layout";
import FadeUp from "@/ui/FadeUp";
import { FiSend } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Montserrat } from "next/font/google";
import HeroBanner from "@/components/HeroBanner";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [loading, setLoading] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            const recaptchaToken = await new Promise<string>((resolve, reject) => {
                (window as any).grecaptcha.enterprise.ready(() => {
                    (window as any).grecaptcha.enterprise
                        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'contact' })
                        .then(resolve)
                        .catch(reject);
                });
            });

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, recaptchaToken }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Something went wrong.');
            }

            toast.success('Message sent! We\'ll get back to you shortly.');
            setForm({ name: '', email: '', phone: '', message: '' });
        } catch (err: any) {
            toast.error(err.message || 'Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <MainLayout>
            <Script
                src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                strategy="afterInteractive"
            />
            <HeroBanner
                image="/wallpapers/construction_1.jpg"
                title="Contact"
                titleAccent="Us"
            />

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
                                icon: <IoMdMail className="text-amber-300 size-7" />,
                                label: "Email",
                                value: "quantumhomes28@gmail.com",
                            },
                            {
                                icon: <HiPhone className="text-amber-300 size-5" />,
                                label: "Phone",
                                value: "+2348162483372, +2348128549125, +2348072577012",
                            },
                            {
                                icon: <FaLocationDot className="text-amber-300 size-5" />,
                                label: "Offices",
                                value: [
                                    "C9, Mokola ICT Hub, Beside NNPC Filling Station, Cele Bus-Stop, Mokola Ibaadan,",
                                    "Km2, Green HOuse Building, Beside ASVON Hospital, Ile-Eja Bus-Stop, Gbagi New IFe"
                                ],
                            },
                        ].map((item: any) => (
                            item.label === "Offices" ? (
                                <div key={item.label} className="flex flex-col w-full mt-8 gap-0">
                                    <div className="flex gap-6 items-center">
                                        <div className="bg-red-700 shrink-0 size-12 flex justify-center items-center rounded-full">
                                            {item.icon}
                                        </div>
                                        <p className="text-zinc-600/40 font-semibold text-sm">
                                            {item.label}
                                        </p>
                                    </div>
                                    <div className="pl-[72px] pr-8 -mt-2">
                                        {item.value.map((office: string) => (
                                            <p key={office} className="text-zinc-800 text-base sm:text-lg mb-2">
                                                {office}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ) : (
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
                            )
                        ))}
                    </div>

                    {/* Contact form */}
                    <form
                        onSubmit={handleSubmit}
                        className="lg:w-1/2 w-full p-8 sm:p-10 lg:p-12 bg-red-700 rounded-2xl overflow-hidden relative"
                    >
                        <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[32%] -right-[17%] -rotate-[38deg] w-[33rem] z-0 pointer-events-none"/>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="name">Full Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base"
                                />
                            </div>
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="example@mail.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="phone">Phone No.</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+234 70400000000"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us about your needs..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="bg-transparent text-zinc-200 placeholder:text-zinc-200/30 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base resize-none"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="relative rounded-lg p-3 z-20 text-red-700 border border-transparent bg-white w-full flex justify-center items-center gap-2 hover:bg-transparent hover:text-zinc-200 hover:border-zinc-200/60 ease-in-out duration-300 font-medium cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                            <FiSend className="size-4" />
                        </button>
                    </form>

                </div>
            </div>
        </MainLayout>
    );
}
