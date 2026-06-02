'use client'

import { pageRoutes } from "@/data/routes";
import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { VscMail } from "react-icons/vsc";


const Footer: React.FC = () => {
    const columns = [
        {
            label: "Company",
            links: [
              {
                name: "About Us",
                link: "/about",
              }, 
              {
                name: "Services",
                link: "/services",
              },
              {
                name: "Projects",
                link: "/projects",
              },
            ],
        },
        {
            label: "Services",
            links: [
             {
                name: "Land Sales",
                link: pageRoutes.services.landSales,
             },
             {
                name: "Legal Support",
                link: pageRoutes.services.legalSupport,
             },
             {
                name: "Construction",
                link: pageRoutes.services.construction,
             },
             {
                name: "Investment Advisory",
                link: pageRoutes.services.realEstateAdvisory,
             },
            ],
        },
        {
            label: "Contact",
            links: [
              {
                name: "+234 816 248 3372",
                link: "tel:+2348162483372",
              },
              {
                name: "quantumhomes28@gmail.com",
                link: "mailto:quantumhomes28@gmail.com",
              },
            ],
        },
    ];

    const socialLinks = [
        {
            link: 'https://www.instagram.com/quantumhomesofficial/',
            icon: (key: number) => <FaInstagram key={key} className="w-6 h-auto hover:text-primary ease-in-out duration-150" />,
        },
        {
            link: 'https://www.tiktok.com/@quantum_homes?_t=ZS-8ze1aq6o50a&_r=1',
            icon: (key: number) => <FaTiktok key={key} className="w-6 h-auto hover:text-primary ease-in-out duration-150" />,
        },
        {
            link: 'https://wa.me/2348162483372',
            icon: (key: number) => <FaWhatsapp key={key} className="w-6 h-auto hover:text-primary ease-in-out duration-150" />,
        },
        // {
        //     link: 'https://www.instagram.com',
        //     icon: (key: number) => <FaXTwitter  key={key} className="w-6 h-auto hover:text-primary ease-in-out duration-150" />,
        // },
        {
            link: 'mailto:quantumhomes28@gmail.com',
            icon: (key: number) => <VscMail key={key} className="w-6 h-auto hover:text-primary ease-in-out duration-150" />,
        },
    ]

  return (
    <footer className="bg-[#0D0D0C] pt-20 safe-footer-bottom">
      {/* Top Section */}
      <div className="flex md:flex-row flex-col pb-14 border-b border-white/10 max-w-[1400px] m-auto px-2">
        {/* Brand */}
        <div className="w-full">
          <div className="w-full gap-2.5 md:mb-5 m-0">
            <div className="w-full">
                <img className="w-[8rem] rounded-lg" src="/logo.png" alt="logo" />
                <p className="text-base font-semibold text-primary mt-3 mb-5">...a call to your dream home</p>
            </div>
          </div >

          <div className="w-full flex gap-10 text-zinc-200 mt-5">
              {
                  socialLinks.map((link, index) => (
                      link.icon(index)
                  ))
              }
          </div>
        </div>

        <div className="w-full grid sm:grid-cols-[1fr_1fr_1fr] grid-cols-1 sm:gap-14 sm:mt-0 mt-10 gap-8 text-left">
          {/* Columns */}
          {columns.map((col) => (
            <div key={col.label}>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-zinc-200/30 uppercase mb-5">
                {col.label}
              </p>

              <ul className="flex flex-col gap-3">
                {col.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link?.link}
                      className="
                        text-white/40 text-sm
                        transition-colors duration-200
                        hover:text-white
                      "
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="flex lg:flex-row flex-col justify-center items-center pt-7">
        <p className="text-white/25 text-[13px] text-center">
          © 2024 Quantum Homes Ltd. All rights reserved.
        </p>

        {/* <div className="flex gap-7">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/25 text-[13px] hover:text-white/60 transition-colors"
            >
              {link}
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;