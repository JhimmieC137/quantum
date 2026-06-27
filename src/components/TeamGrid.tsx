'use client'

import { motion } from "motion/react"
import { montserrat, garamond } from "@/lib/fonts"
import FadeUp from "@/ui/FadeUp"

interface TeamMember {
    image: string
    firstName: string
    lastName: string
    role: string
}

const members: TeamMember[] = [
    {
        image: "/team/engnr_1.jpg",
        firstName: "Engr. Sobowale",
        lastName: "Micheal",
        role: "General Manager",
    },
    {
        image: "/agents/agent_1.png",
        firstName: "Titilayo",
        lastName: "Ronke",
        role: "Quantity Surveyor",
    },
    {
        image: "/agents/agent_2.png",
        firstName: "Mr. Gbenga",
        lastName: "Daniels",
        role: "Sales Manager",
    },
]

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group flex flex-col items-center"
        >
            {/* Avatar with animated ring */}
            <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6B7A3A] to-[#C9A84C] p-[3px] scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative rounded-full size-[14rem] sm:size-[16rem] overflow-hidden ring-[3px] ring-[#6B7A3A]/60 group-hover:ring-[#C9A84C]/80 transition-all duration-500">
                    <img
                        src={member.image}
                        alt={`${member.firstName} ${member.lastName}`}
                        className="absolute inset-0 object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Role badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-dark border border-white/15 rounded-full px-4 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
                    <p className={`${montserrat.className} text-[#C9A84C] text-[10px] tracking-[0.15em] uppercase font-bold`}>
                        {member.role}
                    </p>
                </div>
            </div>

            <h3 className={`${montserrat.className} text-zinc-100 text-center text-2xl font-semibold mt-2`}>
                {member.firstName}{" "}
                <em className="not-italic text-gradient-gold">{member.lastName}</em>
            </h3>

            <p className={`${garamond.className} text-zinc-400 text-center text-lg mt-1`}>
                {member.role}
            </p>
        </motion.div>
    )
}

export default function TeamGrid() {
    return (
        <section className="w-full py-28 bg-[#0e1520] relative overflow-hidden">

            {/* Decorative orb */}
            <div className="orb absolute top-0 right-0 w-[450px] h-[450px] bg-[#6B7A3A]/10 pointer-events-none" />
            <div className="orb absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C9A84C]/8 pointer-events-none" style={{ animationDelay: '4s' }} />

            {/* Blueprint watermark */}
            <img
                src="/wallpapers/dwg_img_2.png"
                className="absolute opacity-[0.03] top-0 right-0 w-[60%] pointer-events-none select-none"
                aria-hidden
            />

            <div className="max-w-[1400px] m-auto px-5 relative z-10">

                <FadeUp>
                    <div className="flex items-center gap-3 mb-5">
                        <div className="h-px w-10 bg-[#C9A84C]" />
                        <p className={`${montserrat.className} text-[11px] font-bold text-[#C9A84C] tracking-[0.22em] uppercase`}>
                            Our People
                        </p>
                    </div>
                    <h2 className={`${montserrat.className} text-zinc-100 text-4xl xl:text-5xl font-semibold mb-4`}>
                        Meet Our <em className="not-italic text-gradient-gold">Team</em>
                    </h2>
                    <p className={`${garamond.className} text-zinc-400 text-lg leading-relaxed mb-16 max-w-[48rem]`}>
                        A passionate group of architects, designers, and visionaries dedicated to crafting innovative, sustainable, and timeless spaces across Ibadan.
                    </p>
                </FadeUp>

                <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
                    {members.map((member, i) => (
                        <TeamCard key={i} member={member} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
