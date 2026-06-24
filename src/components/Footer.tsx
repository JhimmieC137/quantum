'use client'

import { pageRoutes } from "@/data/routes"
import React from "react"
import { Instagram, Video, MessageCircle, Mail } from "lucide-react"
import { montserrat, garamond } from "@/lib/fonts"

const Footer: React.FC = () => {
    const columns = [
        {
            label: "Company",
            links: [
                { name: "About Us", link: "/about" },
                { name: "Services", link: "/services/land-sales" },
                { name: "Projects", link: "/projects" },
                { name: "Contact", link: "/contact" },
            ],
        },
        {
            label: "Services",
            links: [
                { name: "Land Sales", link: pageRoutes.services.landSales },
                { name: "Construction & Development", link: pageRoutes.services.construction },
            ],
        },
        {
            label: "Projects",
            links: [
                { name: "All Projects", link: "/projects" },
                { name: "Ongoing Estates", link: "/projects" },
                { name: "Completed Estates", link: "/projects" },
            ],
        },
        {
            label: "Contact",
            links: [
                { name: "+234 8060342510", link: "tel:+2348060342510" },
                { name: "+234 8162483372", link: "tel:+2348162483372" },
                { name: "quantumhomes28@gmail.com", link: "mailto:quantumhomes28@gmail.com" },
                { name: "C9, Mokola ICT Hub, Beside NNPC Filling Station, Cele Bus-Stop, Mokola, Ibadan.", link: "https://maps.app.goo.gl/fosedVPFyh8yYXz86" },
            ],
        },
    ]

    const socialLinks = [
        {
            link: "https://www.instagram.com/quantumhomesofficial/",
            icon: <Instagram size={20} />,
            label: "Instagram",
        },
        {
            link: "https://www.tiktok.com/@quantum_homes?_t=ZS-8ze1aq6o50a&_r=1",
            icon: <Video size={20} />,
            label: "TikTok",
        },
        {
            link: "https://wa.me/2348128549125",
            icon: <MessageCircle size={20} />,
            label: "WhatsApp",
        },
        {
            link: "mailto:quantumhomes28@gmail.com",
            icon: <Mail size={20} />,
            label: "Email",
        },
    ]

    return (
        <footer className="bg-zinc-950 pt-20 safe-footer-bottom border-t border-white/5">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 pb-16 border-b border-white/5">
                <div className="flex md:flex-row flex-col gap-12">
                    {/* Brand */}
                    <div className="md:w-1/4 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-[#b91c1c] flex items-center justify-center rounded-sm flex-shrink-0">
                                <span className={`${montserrat.className} text-white font-bold text-[10px] tracking-wider`}>ORC</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className={`${montserrat.className} text-zinc-100 font-semibold text-sm tracking-wide`}>Oyo Realty</span>
                                <span className={`${garamond.className} text-amber-400 text-xs`}>&amp; Construction</span>
                            </div>
                        </div>
                        <p className={`${garamond.className} text-zinc-400 text-sm leading-relaxed mb-2`}>
                            Build Beyond Boundaries
                        </p>
                        <p className={`${montserrat.className} text-zinc-600 text-[10px] tracking-[0.2em] uppercase mb-6`}>
                            Est. 2009
                        </p>

                        <div className="flex gap-4 text-zinc-400">
                            {socialLinks.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.link}
                                    target={s.link.startsWith("mailto") ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="hover:text-amber-400 transition-colors duration-200"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columns */}
                    <div className="md:w-3/4 w-full grid sm:grid-cols-4 grid-cols-2 gap-8">
                        {columns.map((col) => (
                            <div key={col.label}>
                                <p className={`${montserrat.className} text-[10px] font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-5`}>
                                    {col.label}
                                </p>
                                <ul className="flex flex-col gap-3">
                                    {col.links.map((link, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={link.link}
                                                target={link.link.startsWith("http") ? "_blank" : "_self"}
                                                rel="noopener noreferrer"
                                                className={`${garamond.className} text-zinc-500 text-sm transition-colors duration-200 hover:text-zinc-200`}
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

            {/* Bottom Bar */}
            <div className="bg-white/[0.02] backdrop-blur-sm border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className={`${montserrat.className} text-zinc-600 text-[11px] tracking-wide text-center`}>
                        &copy; {new Date().getFullYear()} Oyo Realty &amp; Construction Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-5 text-zinc-600">
                        {socialLinks.map((s, i) => (
                            <a
                                key={i}
                                href={s.link}
                                target={s.link.startsWith("mailto") ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="hover:text-amber-400 transition-colors duration-200"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
