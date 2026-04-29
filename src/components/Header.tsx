"use client"

import Link from "next/link";
import { Orbitron } from "next/font/google";

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
        name: 'Projects',
        link: '/projects',
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
            <nav className="bg-zinc-950 relative">
                <div className="py-3 w-full 2xl:max-w-[1400px] xl:max-w-[1000px] lg:max-w-[800px]  mx-auto flex justify-between">
                    <a href="/"><img src="/logo.jpg" className="max-w-[8em] rounded-lg" alt="Logo" /></a>
                    <div className="max-w-[45%] flex justify-between items-center w-full mx-auto px-5 py-3 rounded-full">
                        {
                            headerLinks.map((link, index) => (
                                <Link className="text-md font-medium text-zinc-100 link-underline link-underline-black ease-in-out duration-150" key={index} href={link.link}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </div>
                    <a href="/contact" className="cursor-pointer bg-zinc-200 text-zinc-800 hover:text-zinc-200  hover:bg-red-700 ease-in-out duration-300 px-5 py-1 rounded-full flex justify-between items-center gap-2 ">
                        {/* <div className="size-4 bg-white rounded-full border-4 border-zinc-500" /> */}
                        <p className="text-lg">Contact us</p>
                    </a>
                    {/* <div className="max-w-[70%]">
                        <CircleHoverButton background="yellow" hoverBackground="brown" border="brown" content="Contact us" />
                    </div> */}
                </div>
            </nav>
        </header>
    )
}