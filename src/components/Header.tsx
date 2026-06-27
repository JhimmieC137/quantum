"use client"

import { pageRoutes } from "@/data/routes";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

const headerLinks = [
    { name: 'About', link: pageRoutes.aboutUs },
    {
        name: 'Services',
        link: pageRoutes.services.base,
        children: [
            { name: 'Land Sales', link: pageRoutes.services.landSales },
            { name: 'Legal Support', link: pageRoutes.services.legalSupport },
            { name: 'Construction & Development', link: pageRoutes.services.construction },
            { name: 'Investment Advisory', link: pageRoutes.services.realEstateAdvisory },
        ]
    },
    { name: 'Projects', link: pageRoutes.projects },
]

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const [scrolled, setScrolled] = useState(false)
    const [visible, setVisible] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY
            setScrolled(y > 40)

            if (y < 2400) {
                setVisible(true)
            } else if (y < lastScrollY.current) {
                setVisible(true)
            } else {
                setVisible(false)
                setMobileOpen(false)
            }
            lastScrollY.current = y
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 z-[90] w-full transition-all duration-500 ease-in-out ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <nav className="px-4 py-3 safe-nav-top">
                <div className="max-w-[680px] mx-auto">

                    {/* Main pill — glass morphism */}
                    <div
                        className={`rounded-full px-4 sm:px-5 py-2.5 flex justify-between items-center shadow-2xl transition-all duration-500 ${
                            scrolled
                                ? 'glass-dark border border-white/10 shadow-[0_8px_32px_rgba(21,29,48,0.5)]'
                                : 'bg-[#1F2A44]/80 backdrop-blur-md border border-white/10'
                        }`}
                    >
                        {/* Logo */}
                        <a href="/" className="shrink-0 flex items-center gap-2">
                            <div className="bg-[#6B7A3A] rounded-full p-[2px] ring-1 ring-[#8a9c4a]/50">
                                <img src="/quantum_logo.png" className="max-w-[2rem] rounded-full" alt="Logo" />
                            </div>
                        </a>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-8 lg:gap-12">
                            {headerLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <Link
                                        href={link.link}
                                        className="flex items-center gap-1.5 text-sm text-zinc-200/80 hover:text-[#C9A84C] transition-colors duration-200 link-underline"
                                    >
                                        {link.name}
                                        {link.children && (
                                            <HiChevronDown className={`size-3.5 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                        )}
                                    </Link>

                                    {link.children && openDropdown === link.name && (
                                        <div className="absolute top-full left-0 pt-3 z-50">
                                            <div className="glass-dark rounded-2xl py-2 min-w-[15rem] shadow-2xl border border-white/10">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.link}
                                                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-zinc-300 hover:text-[#C9A84C] hover:bg-white/5 transition-all duration-150 group"
                                                    >
                                                        <span className="size-1.5 rounded-full bg-[#6B7A3A] group-hover:bg-[#C9A84C] transition-colors" />
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <a
                            href="/contact"
                            className="hidden md:flex items-center gap-2 btn-shimmer text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide shrink-0 shadow-lg"
                        >
                            Contact Us
                        </a>

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
                    <div className={`md:hidden overflow-hidden transition-all ease-in-out duration-300 ${
                        mobileOpen ? "max-h-[32rem] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}>
                        <div className="glass-dark rounded-2xl px-4 py-4 flex flex-col gap-1 border border-white/10">
                            {headerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.link}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-sm text-center font-medium text-zinc-400 hover:text-[#C9A84C] hover:bg-white/5 px-3 py-3 rounded-xl transition-all duration-150"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="mt-3 flex items-center justify-center btn-shimmer text-white px-4 py-2.5 rounded-full text-sm font-semibold"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}
