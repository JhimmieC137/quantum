"use client"

import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import CircleHoverButton from "./buttons/CircleHoverButton";
import { VscMail } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks = [
    {
        link: 'https://www.instagram.com',
        icon: (key: number) => <FaInstagram key={key} className="w-6 h-auto hover:text-primary ease-in-out duration-150" />,
    },
    {
        link: 'https://www.instagram.com',
        icon: (key: number) => <FaTiktok key={key} className="w-6 h-auto hover:text-primary ease-in-out duration-150" />,
    },
    {
        link: 'https://www.instagram.com',
        icon: (key: number) => <FaWhatsapp key={key} className="w-6 h-auto hover:text-primary ease-in-out duration-150" />,
    },
    {
        link: 'https://www.instagram.com',
        icon: (key: number) => <FaXTwitter  key={key} className="w-6 h-auto hover:text-primary ease-in-out duration-150" />,
    },
    {
        link: 'https:mailto:example@mail.com',
        icon: (key: number) => <VscMail key={key} className="w-6 h-auto hover:text-primary ease-in-out duration-150" />,
    },
]

export default function Footer() {
    return (
        <footer className="bg-[#36140a] flex justify-center items-center px-4">
            <div className="max-w-[1440px] mx-auto">
                <div className="w-3/6 text-center my-[8em] mx-auto">
                    <p className="text-lg font-bold text-orange-400 my-3">Become a Landlord</p>
                    <h3 className="text-[3.35em] leading-[1.15em] text-zinc-200 font-bold w-[90%] mx-auto my-4">A piece of land is more than gold.</h3>
                    <p className="text-lg font-normal text-zinc-400 my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor eum aliquid aperiam ea consequuntur unde molestias, dolorem tenetur, minus repudiandae! Officia, architecto!</p>
                    <CircleHoverButton border="yellow" background="none" hoverBackground="yellow" style="mt-10 w-[9em] mx-auto" content="Invest now" />
                </div>
                <div className="h-px bg-zinc-400/20 w-5/6 mx-auto" />
                <div className="w-5/6 flex justify-between my-[4em] items-center gap-5 mx-auto">
                    <div className="w-[50%] m-auto">
                        <img className="w-[15em] rounded-lg" src="/logo.jpg" alt="logo" />
                        <p className="text-base font-semibold text-primary mt-3 mb-5">...a call to your dream home</p>
                        
                    </div>
                    <div className="w-full flex justify-between items-start gap-3 text-zinc-200/70">
                        <div className="w-full flex flex-col justify-center items-center gap-5">
                            <h3 className="font-semibold mb-3 text-zinc-200">Company</h3>
                            <p>About</p>
                            <p>Sevices</p>
                            <p>Gallery</p>
                            <p>Properties</p>
                            <p>Gallery</p>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center gap-5">
                            <h3 className="font-semibold mb-3 text-zinc-200">Properties</h3>
                            <p>About</p>
                            <p>About</p>
                            <p>About</p>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center gap-5">
                            <h3 className="font-semibold mb-3 text-zinc-200">Construction</h3>
                            <p>About</p>
                            <p>About</p>
                            <p>About</p>
                        </div>
                    </div>
                </div>
                <div className="h-px bg-zinc-400/20 w-5/6 my-4 mx-auto" />
                <div className="w-5/6 flex justify-between items-center my-6 mx-auto">
                    <p className="text-left text-base text-zinc-300/70 font-normal">
                        © 2025 Quantun Homes RC:1913687. All rights reserved.
                    </p>
                    <div className="flex gap-7 text-zinc-200">
                        {
                            socialLinks.map((link, index) => (
                                link.icon(index)
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}