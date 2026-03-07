"use client"

import Link from "next/link";
import { Orbitron } from "next/font/google";
import CircleHoverButton from "@/components/buttons/CircleHoverButton";

const headerLinks = [
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Services',
        link: '/services',
    },
    {
        name: 'Gallery',
        link: '/services',
    },
    {
        name: 'Portfolio',
        link: '/services',
    },
    {
        name: 'Agents',
        link: '/services',
    },
    {
        name: 'Properties',
        link: '/properties',
    },
]

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export default function Header() {
    return (
        <header className="relative z-20 w-full h-auto">
            <nav className="bg-black relative">
                <div className="py-5 w-full md:max-w-[1400px] mx-auto flex justify-between">
                    <img src="/logo.jpg" className="max-w-[8em] rounded-lg" alt="Logo" />
                    <div className="max-w-[45%] flex justify-between items-center w-full mx-auto px-5 py-3 rounded-full">
                        {
                            headerLinks.map((link, index) => (
                                <Link className="text-md font-medium text-zinc-100 link-underline link-underline-black ease-in-out duration-150" key={index} href={link.link}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </div>
                    <a href="/" className="cursor-pointer bg-white/20 px-3 py-1 rounded-full flex justify-between items-center gap-2 ">
                        <div className="size-4 bg-white rounded-full border-4 border-zinc-500" />
                        <p className="text-lg text-zinc-100">Contact us</p>
                    </a>
                    {/* <div className="max-w-[70%]">
                        <CircleHoverButton background="yellow" hoverBackground="brown" border="brown" content="Contact us" />
                    </div> */}
                </div>
            </nav>
        </header>
    )
}