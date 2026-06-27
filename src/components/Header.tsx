"use client"

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { pageRoutes } from "@/data/routes";
import { montserrat } from "@/lib/fonts";

const navLinks = [
    { name: "About", link: pageRoutes.aboutUs },
    {
        name: "Services",
        link: pageRoutes.services.base,
        children: [
            { name: "Land Sales",                link: pageRoutes.services.landSales },
            { name: "Legal Support",             link: pageRoutes.services.legalSupport },
            { name: "Construction & Development",link: pageRoutes.services.construction },
            { name: "Investment Advisory",       link: pageRoutes.services.realEstateAdvisory },
        ],
    },
    { name: "Projects", link: pageRoutes.projects },
]

export default function Header() {
    const [mobileOpen, setMobileOpen]   = useState(false)
    const [dropdown, setDropdown]       = useState<string | null>(null)
    const [scrolled, setScrolled]       = useState(false)
    const [visible, setVisible]         = useState(true)
    const lastY = useRef(0)

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY
            setScrolled(y > 60)
            if (y < 800)          { setVisible(true) }
            else if (y < lastY.current) { setVisible(true) }
            else                  { setVisible(false); setMobileOpen(false) }
            lastY.current = y
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-[90] transition-transform duration-500 ease-in-out safe-nav-top ${visible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="px-4 sm:px-6 pt-3">
                <div className={`max-w-[1400px] mx-auto transition-all duration-500 ${scrolled ? "max-w-[900px]" : ""}`}>
                    <div className={`flex items-center justify-between px-5 sm:px-7 py-3 rounded-full transition-all duration-500 ${
                        scrolled
                            ? "bg-[#111110]/92 backdrop-blur-xl shadow-2xl border border-white/8"
                            : "bg-[#111110]/75 backdrop-blur-md border border-white/10"
                    }`}>

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 shrink-0">
                            <div className="w-7 h-7 bg-[#b91c1c] rounded-full flex items-center justify-center">
                                <span className={`${montserrat.className} text-white font-bold text-[9px] tracking-widest`}>QH</span>
                            </div>
                            <span className={`${montserrat.className} text-white font-semibold text-[13px] tracking-wide hidden sm:block`}>
                                QUANTUM HOMES
                            </span>
                        </Link>

                        {/* Desktop links */}
                        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => link.children && setDropdown(link.name)}
                                    onMouseLeave={() => setDropdown(null)}
                                >
                                    <Link
                                        href={link.link}
                                        className={`${montserrat.className} flex items-center gap-1 text-[12px] text-zinc-300 hover:text-white tracking-wide transition-colors duration-200 link-underline`}
                                    >
                                        {link.name}
                                        {link.children && (
                                            <HiChevronDown className={`size-3 transition-transform duration-200 ${dropdown === link.name ? "rotate-180" : ""}`} />
                                        )}
                                    </Link>

                                    {link.children && dropdown === link.name && (
                                        <div className="absolute top-full left-0 pt-4 z-50">
                                            <div className="bg-[#1A1A18] border border-white/10 rounded-2xl py-2 min-w-[16rem] shadow-2xl">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.link}
                                                        className={`${montserrat.className} flex items-center gap-2.5 px-4 py-3 text-[11px] text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-150 tracking-wide group`}
                                                    >
                                                        <span className="size-1.5 rounded-full bg-[#b91c1c] opacity-70 group-hover:opacity-100 transition-opacity" />
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <Link
                            href={pageRoutes.contact}
                            className={`${montserrat.className} hidden md:flex items-center gap-2 btn-red text-white px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase`}
                        >
                            Talk to Us
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden text-zinc-200 p-1.5 rounded-full hover:bg-white/10 transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <HiX className="size-5" /> : <HiMenu className="size-5" />}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[28rem] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                        <div className="bg-[#111110]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.link}
                                    onClick={() => setMobileOpen(false)}
                                    className={`${montserrat.className} block text-[12px] text-center font-medium text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-3 rounded-xl transition-all duration-150 tracking-wide`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href={pageRoutes.contact}
                                onClick={() => setMobileOpen(false)}
                                className={`${montserrat.className} mt-2 flex items-center justify-center btn-red px-4 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase`}
                            >
                                Talk to Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
