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
import { montserrat } from "@/lib/fonts";
import { brand, layout } from "@/lib/constants";
import HeroBanner from "@/components/HeroBanner";

const offices = [
    {
        id: "mokola",
        label: "Office 1",
        email: "quantumhomes28@gmail.com",
        phones: ["+234 8060342510"],
        address: "C9, Mokola ICT Hub, Beside NNPC Filling Station, Cele Bus-Stop, Mokola, Ibadan.",
        mapLink: "https://maps.app.goo.gl/fosedVPFyh8yYXz86",
    },
    {
        id: "newife",
        label: "Office 2",
        email: "quantumhomes28@gmail.com",
        phones: ["+234 8162483372"],
        address: "Km2, Green House Building, Beside ASVON Hospital, Ile-Eja Bus-Stop, Gbagi, New Ife Road, Ibadan.",
        mapLink: "https://maps.app.goo.gl/ZCEvi4frVJ9H7qD98",
    },
];

export default function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("mokola");

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
                let errorMsg = 'Something went wrong. Please try again.';
                try {
                    const data = await res.json();
                    if (data?.error) errorMsg = data.error;
                } catch {}
                throw new Error(errorMsg);
            }

            toast.success('Message sent! We\'ll get back to you shortly.');
            setForm({ name: '', email: '', phone: '', message: '' });
        } catch (err: any) {
            toast.error(err.message || 'Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    const office = offices.find(o => o.id === activeTab)!;

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

            <div className={brand.pageBg}>
                <div className={`${layout.container} ${layout.sectionPy} w-full flex lg:flex-row flex-col gap-y-12 gap-x-8 lg:items-stretch`}>

                    {/* ── Contact info ──────────────────────────────── */}
                    <div className="lg:w-1/2 w-full flex flex-col">
                        <FadeUp>
                            <div className={`${montserrat.className} flex justify-start gap-4 items-center mb-2 pl-1`}>
                                <div className="h-px w-16 bg-red-500" />
                                <p className={`text-xs font-bold ${brand.amberAltText} tracking-widest`}>GET IN TOUCH</p>
                            </div>
                        </FadeUp>

                        <p className={`${montserrat.className} text-zinc-800 text-4xl sm:text-5xl font-semibold mb-3`}>
                            Reach out <span className={`${brand.amberAltText} italic`}>to us</span>
                        </p>
                        <p className="text-zinc-800 text-base sm:text-lg mb-8 max-w-[85%]">
                            Whether you're interested in buying land, building your dream home, or simply want to learn more about our services, our team is ready to help.
                        </p>

                        {/* Office tabs — underline style */}
                        <div className="relative flex gap-8 border-b border-zinc-200 mb-8">
                            {offices.map((o) => (
                                <button
                                    key={o.id}
                                    onClick={() => setActiveTab(o.id)}
                                    className={`${montserrat.className} relative pb-3 text-sm sm:text-base font-semibold transition-colors duration-200
                                        ${activeTab === o.id ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"}`}
                                >
                                    {o.label}
                                    {/* Animated underline */}
                                    <span
                                        className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-red-600 transition-all duration-300 ease-in-out
                                            ${activeTab === o.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
                                        style={{ transformOrigin: "left" }}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Tab content — no card, bare details with fade */}
                        <div
                            key={activeTab}
                            className="flex flex-col gap-7"
                            style={{ animation: "fadeIn 0.35s ease" }}
                        >
                            {/* Email */}
                            <div className="flex gap-5 items-start">
                                <div className={`${brand.redBg} shrink-0 size-11 flex justify-center items-center rounded-full mt-0.5`}>
                                    <IoMdMail className="text-amber-300 size-5" />
                                </div>
                                <div>
                                    <p className={`${montserrat.className} text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-1`}>Email</p>
                                    <a
                                        href={`mailto:${office.email}`}
                                        className="text-zinc-800 text-base sm:text-lg hover:text-red-700 transition-colors duration-150"
                                    >
                                        {office.email}
                                    </a>
                                </div>
                            </div>

                            {/* Phones */}
                            <div className="flex gap-5 items-start">
                                <div className={`${brand.redBg} shrink-0 size-11 flex justify-center items-center rounded-full mt-0.5`}>
                                    <HiPhone className="text-amber-300 size-4" />
                                </div>
                                <div>
                                    <p className={`${montserrat.className} text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-1`}>Phone</p>
                                    <p className="text-zinc-800 text-sm sm:text-base leading-relaxed">
                                        {office.phones.map((p, i) => (
                                            <span key={p}>
                                                <a
                                                    href={`tel:${p.replace(/\s/g, '')}`}
                                                    className="hover:text-red-700 transition-colors duration-150 whitespace-nowrap"
                                                >
                                                    {p}
                                                </a>
                                                {i < office.phones.length - 1 && <span className="text-zinc-400">,{" "}</span>}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex gap-5 items-start">
                                <div className={`${brand.redBg} shrink-0 size-11 flex justify-center items-center rounded-full mt-0.5`}>
                                    <FaLocationDot className="text-amber-300 size-4" />
                                </div>
                                <div>
                                    <p className={`${montserrat.className} text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-1`}>Address</p>
                                    <a
                                        href={office.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-800 text-base sm:text-lg leading-relaxed hover:text-red-700 transition-colors duration-150 underline underline-offset-2 decoration-zinc-300 hover:decoration-red-700"
                                    >
                                        {office.address}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Contact form ──────────────────────────────── */}
                    <form
                        onSubmit={handleSubmit}
                        className={`lg:w-1/2 w-full p-8 sm:p-10 lg:p-12 ${brand.redBg} rounded-2xl overflow-hidden relative flex flex-col`}
                    >
                        <img src="/quantum_logo.png" className="absolute opacity-10 -bottom-[32%] -right-[17%] -rotate-[38deg] w-[33rem] z-0 pointer-events-none" />

                        <div className="flex-1 flex flex-col">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="name">Full Name</label>
                                <input
                                    id="name" name="name" type="text" placeholder="John Doe"
                                    value={form.name} onChange={handleChange} required
                                    className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base"
                                />
                            </div>
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="email">Email</label>
                                <input
                                    id="email" name="email" type="email" placeholder="example@mail.com"
                                    value={form.email} onChange={handleChange} required
                                    className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="phone">Phone No.</label>
                                <input
                                    id="phone" name="phone" type="tel" placeholder="+234 70400000000"
                                    value={form.phone} onChange={handleChange}
                                    className="bg-transparent placeholder:text-zinc-200/30 text-zinc-200 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex flex-col gap-y-[2px]">
                                <label className="text-zinc-200 text-sm sm:text-base" htmlFor="message">Message</label>
                                <textarea
                                    id="message" name="message" rows={5} placeholder="Tell us about your needs..."
                                    value={form.message} onChange={handleChange} required
                                    className="bg-transparent text-zinc-200 placeholder:text-zinc-200/30 p-3 border border-zinc-200/50 rounded-lg outline-none focus:border-zinc-200 ease-in-out duration-300 text-sm sm:text-base resize-none"
                                />
                            </div>
                        </div>

                        </div>{/* end flex-1 fields wrapper */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`${montserrat.className} relative rounded-lg p-3 z-20 text-red-700 border border-transparent bg-white w-full flex justify-center items-center gap-2 hover:bg-transparent hover:text-zinc-200 hover:border-zinc-200/60 ease-in-out duration-300 font-medium cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-auto`}
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
