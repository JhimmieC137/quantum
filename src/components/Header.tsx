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
            { name: 'Land Sales', link: pageRoutes.services.landSales},
            { name: 'Legal Support', link: pageRoutes.services.legalSupport },
            { name: 'Construction & Dev', link: pageRoutes.services.construction},
            { name: 'Investment Advisory', link: pageRoutes.services.realEstateAdvisory},
        ]
    },
    { name: 'Properties', link: pageRoutes.properties},
]

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const [visible, setVisible] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            if (currentScrollY < 2400) {
                // Always show within first ~50rem
                setVisible(true)
            } else if (currentScrollY < lastScrollY.current) {
                // Scrolling up — show
                setVisible(true)
            } else {
                // Scrolling down — hide
                setVisible(false)
                setMobileOpen(false)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 z-[90] w-full transition-transform duration-300 ease-in-out ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <nav className="px-4 py-3">
                <div className="max-w-[600px] mx-auto">

                    {/* Main pill */}
                    <div className="bg-black rounded-full px-4 sm:px-2 py-2 flex justify-between items-center shadow-xl">

                        {/* Logo */}
                        <a href="/" className="text-zinc-100 font-bold text-lg shrink-0">
                            <div className="bg-red-700 rounded-full p-[2px]">
                                <img src="/quantum_logo.png" className="max-w-[2rem] rounded-lg" alt="Logo" />
                            </div>
                            {/* <img src="/logo.jpg" className="md:hidden max-w-[6rem] rounded-[20%]" alt="Logo" /> */}
                        </a>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-10 lg:gap-16">
                            {headerLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <Link
                                        href={link.link}
                                        className="flex items-center gap-3 text-sm lg:text-base text-zinc-100 link-underline link-underline-black ease-in-out duration-150"
                                    >
                                        {link.name}
                                    </Link>

                                    {link.children && openDropdown === link.name && (
                                        <div className="absolute top-full left-0 pt-2 z-50">
                                            <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl py-2 min-w-[14rem] shadow-xl">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.link}
                                                        className="block px-4 py-2.5 text-sm text-zinc-200 hover:text-zinc-100 hover:bg-zinc-800 ease-in-out duration-150"
                                                    >
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
                            className="hidden md:flex items-center gap-2 bg-zinc-300 text-zinc-900 hover:bg-red-700 hover:text-zinc-100 ease-in-out duration-300 px-4 py-1.5 rounded-full text-sm lg:text-base font-medium shrink-0"
                        >
                            {/* <div className="size-2 bg-amber-400 rounded-full border-3 border-amber-300/80 pr-2 text-zinc-900/80" /> */}
                            Contact Us
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden text-zinc-100 p-1.5 rounded-full hover:bg-zinc-800"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <HiX className="size-5" /> : <HiMenu className="size-5" />}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    <div className={`md:hidden overflow-hidden transition-all ease-in-out duration-300 ${
                        mobileOpen ? "max-h-[30rem] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}>
                        <div className="bg-zinc-900 rounded-2xl px-4 py-4 flex flex-col gap-1">
                            {headerLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.link}
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-sm text-center font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 px-3 py-3 rounded-xl ease-in-out duration-150"
                                    >
                                        {link.name}
                                    </Link>
                                    {/* {link.children && (
                                        <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-zinc-800 pl-3">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.link}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block text-sm text-zinc-500 hover:text-zinc-200 py-1.5 ease-in-out duration-150"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )} */}
                                </div>
                            ))}
                            <a
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="mt-3 flex items-center justify-center gap-2 bg-zinc-100 text-zinc-900 hover:bg-red-700 hover:text-zinc-100 ease-in-out duration-300 px-4 py-2.5 rounded-full text-sm font-medium"
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