'use client'

import { pageRoutes } from "@/data/routes"
import { Instagram, Video, MessageCircle, Mail } from "lucide-react"
import { montserrat, garamond } from "@/lib/fonts"

const cols = [
    {
        label: "Company",
        links: [
            { name: "About Us",  href: pageRoutes.aboutUs },
            { name: "Projects",  href: pageRoutes.projects },
            { name: "Services",  href: pageRoutes.services.base },
            { name: "Contact",   href: pageRoutes.contact },
        ],
    },
    {
        label: "Services",
        links: [
            { name: "Land Sales",              href: pageRoutes.services.landSales },
            { name: "Legal Support",           href: pageRoutes.services.legalSupport },
            { name: "Construction",            href: pageRoutes.services.construction },
            { name: "Investment Advisory",     href: pageRoutes.services.realEstateAdvisory },
        ],
    },
    {
        label: "Contact",
        links: [
            { name: "+234 806 034 2510",       href: "tel:+2348060342510" },
            { name: "+234 816 248 3372",       href: "tel:+2348162483372" },
            { name: "quantumhomes28@gmail.com",href: "mailto:quantumhomes28@gmail.com" },
            { name: "Mokola ICT Hub, Ibadan",  href: "https://maps.app.goo.gl/fosedVPFyh8yYXz86" },
        ],
    },
]

const socials = [
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/quantumhomesofficial/",                       label: "Instagram" },
    { icon: <Video       size={18} />, href: "https://www.tiktok.com/@quantum_homes",                               label: "TikTok"    },
    { icon: <MessageCircle size={18}/>, href: "https://wa.me/2348128549125",                                        label: "WhatsApp"  },
    { icon: <Mail        size={18} />, href: "mailto:quantumhomes28@gmail.com",                                     label: "Email"     },
]

export default function Footer() {
    return (
        <footer className="bg-[#111110] border-t border-white/8 safe-footer-bottom">

            {/* Top section */}
            <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 pt-20 pb-14 border-b border-white/8">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-0 justify-between">

                    {/* Brand block */}
                    <div className="lg:w-[30%]">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 bg-[#b91c1c] rounded-full flex items-center justify-center shrink-0">
                                <span className={`${montserrat.className} text-white font-bold text-[9px] tracking-widest`}>QH</span>
                            </div>
                            <div>
                                <p className={`${montserrat.className} text-white font-semibold text-[13px] tracking-wide leading-none`}>Quantum Homes</p>
                                <p className={`${garamond.className} text-[#b91c1c] text-xs`}>&amp; Property</p>
                            </div>
                        </div>

                        <p className={`${garamond.className} text-zinc-400 text-base leading-relaxed mb-8 max-w-[22rem]`}>
                            Premium real estate across Ibadan&apos;s fastest-growing corridors. Verified estates, serviced plots, lasting value.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-4">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center text-zinc-500 hover:text-white hover:border-[#b91c1c] hover:bg-[#b91c1c]/10 transition-all duration-200"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav columns */}
                    <div className="lg:w-[65%] grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-8">
                        {cols.map((col) => (
                            <div key={col.label}>
                                <p className={`${montserrat.className} text-[10px] font-bold tracking-[0.28em] uppercase text-[#b91c1c] mb-6`}>
                                    {col.label}
                                </p>
                                <ul className="flex flex-col gap-3.5">
                                    {col.links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                target={link.href.startsWith("http") ? "_blank" : "_self"}
                                                rel="noopener noreferrer"
                                                className={`${garamond.className} text-zinc-500 text-[15px] hover:text-zinc-200 transition-colors duration-200`}
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className={`${montserrat.className} text-zinc-600 text-[10px] tracking-[0.12em] uppercase`}>
                    &copy; {new Date().getFullYear()} Quantum Homes &amp; Property. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    <div className="w-5 h-px bg-[#b91c1c]" />
                    <p className={`${montserrat.className} text-zinc-600 text-[10px] tracking-[0.12em] uppercase`}>
                        Ibadan, Nigeria
                    </p>
                </div>
            </div>
        </footer>
    )
}
