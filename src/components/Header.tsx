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
        <header className="mt-8 w-full md:max-w-[1700px] mx-auto px-5 absolute z-50 top-0 left-0 right-0">
            {/* <nav className="max-w-screen-md flex justify-between items-center w-full mx-auto px-3 py-3 rounded-full bg-zinc-900 shadow-xl shadow-zinc-600/50"> */}
            {/* <nav className="max-w-screen-md flex justify-between items-center "> */}
                {/* <div className=""> */}
                <img src="/logo.jpg" className="w-[8em] rounded-lg h-auto" alt="Logo" />
                {/* </div> */}
                {/* <p className={`${orbitron.className} text-lg font-bold text-zinc-100 pl-2`}>Quantum</p> */}
            <div className="max-w-screen-sm -m-10 flex justify-between gap-6 items-center w-full mx-auto px-5 py-3 rounded-full bg-blur border-[2px] border-primary">
                    {
                        headerLinks.map((link, index) => (
                            <Link className="text-md font-medium text-primary hover:text-zinc-200 ease-in-out duration-150" key={index} href={link.link}>{link.name}</Link>
                        ))
                    }
                </div>
                {/* <a href="/" className="cursor-pointer bg-white/20 px-3 py-1 rounded-full flex justify-between items-center gap-2 ">
                    <div className="size-4 bg-white rounded-full border-4 border-zinc-500" />
                    <p className="text-lg text-zinc-100">Contact us</p>
                </a> */}
                {/* <div className="max-w-[70%]">
                    <CircleHoverButton background="yellow" hoverBackground="brown" border="brown" content="Contact us" />
                </div> */}
            {/* </nav> */}
        </header>
    )
}