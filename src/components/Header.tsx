"use client"

import Link from "next/link";
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
        name: 'Properties',
        link: '/properties',
    },
]

export default function Header() {
    return (
        <header className="mt-8 w-full px-5">
            <nav className=" max-w-[1440px] mx-auto flex justify-between items-center w-full">
                <div className="">
                    <img src="/logo.jpg" className="w-[8em] rounded-md h-auto" alt="Logo" />
                </div>
                <div className="flex justify-between items-center gap-8">
                    {
                        headerLinks.map((link, index) => (
                            <Link className="text-xl font-medium text-amber-950 hover:text-amber-400 ease-in-out duration-150" key={index} href={link.link}>{link.name}</Link>
                        ))
                    }
                </div>
                <div className="max-w-[70%]">
                    <CircleHoverButton background="yellow" hoverBackground="brown" border="brown" content="Contact us" />
                </div>
            </nav>
        </header>
    )
}