"use client"

import { pageRoutes } from "@/data/routes";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { montserrat } from "@/lib/fonts";

const headerLinks = [
    { name: 'About', link: pageRoutes.aboutUs },
    { name: 'Services', link: pageRoutes.services.base },
    { name: 'Our Projects', link: pageRoutes.projects },
]

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [visible, setVisible] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < 2400) {
                setVisible(true)
            } else if (currentScrollY < lastScrollY.current) {
                setVisible(true)
            } else {
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
            <nav className="px-4 py-3 safe-nav-top">
                <div className="max-w-[600px] mx-auto">

                    {/* Main pill */}
                    <div className="bg-black/70 backdrop-blur-md rounded-full px-4 sm:px-2 py-2 flex justify-between items-center shadow-xl">

                        {/* Logo */}
                        <a href="/" className="text-zinc-100 font-bold text-lg shrink-0">
                            <div className="bg-red-700 rounded-full p-[2px]">
                                <img src="/quantum_logo.png" className="max-w-[2rem] rounded-lg" alt="Logo" />
                            </div>
                        </a>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-10 lg:gap-16">
                            {headerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.link}
                                    className={`${montserrat.className} text-sm lg:text-base text-zinc-100 link-underline link-underline-black ease-in-out duration-150`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <a
                            href="/contact"
                            className={`${montserrat.className} hidden md:flex items-center gap-2 bg-zinc-300 text-[#1F2A44] hover:bg-red-700 hover:text-zinc-100 ease-in-out duration-300 px-4 py-1.5 rounded-full text-sm lg:text-base font-medium shrink-0`}
                        >
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
                                <Link
                                    key={link.name}
                                    href={link.link}
                                    onClick={() => setMobileOpen(false)}
                                    className={`${montserrat.className} block text-sm text-center font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 px-3 py-3 rounded-xl ease-in-out duration-150`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className={`${montserrat.className} mt-3 flex items-center justify-center gap-2 bg-zinc-100 text-[#1F2A44] hover:bg-red-700 hover:text-zinc-100 ease-in-out duration-300 px-4 py-2.5 rounded-full text-sm font-medium`}
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
