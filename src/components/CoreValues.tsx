'use client'

import { motion } from "motion/react";
import { montserrat, garamond } from "@/lib/fonts";
import FadeUp from "@/ui/FadeUp";

const beliefs = [
    {
        num: "1",
        title: "Transparency",
        body: "Every transaction is clear, honest, and straightforward. We provide clients with accurate information, verified properties, and open communication at every stage.",
    },
    {
        num: "2",
        title: "Integrity",
        body: "We uphold the highest ethical standards in every dealing, ensuring that our clients' trust is never compromised. Integrity is the foundation of every relationship we build.",
    },
    {
        num: "3",
        title: "Reliability",
        body: "Our clients can count on us to consistently deliver on our promises, with professionalism, dedication, and excellence — every single time.",
    },
]

export default function CoreValues() {
    return (
        <section className="w-full bg-[#FAF9F6] overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-24 lg:py-32">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
                    <div>
                        <FadeUp>
                            <p className={`${montserrat.className} section-label mb-6`}>(What We Stand For)</p>
                        </FadeUp>
                        <FadeUp>
                            <h2
                                className={`${garamond.className} text-[#111110] font-normal leading-none tracking-tight`}
                                style={{ fontSize: "clamp(2.6rem, 5vw, 5.5rem)" }}
                            >
                                Our Core <em className="italic text-[#b91c1c]">Beliefs</em>
                            </h2>
                        </FadeUp>
                    </div>
                    <FadeUp>
                        <p className={`${garamond.className} text-[#555550] text-xl leading-relaxed lg:max-w-[36rem] lg:text-right`}>
                            Through these values, we are committed to making the dream of homeownership a reality — providing secure, sustainable, and lasting housing solutions.
                        </p>
                    </FadeUp>
                </div>

                {/* Belief pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {beliefs.map((b, i) => (
                        <motion.div
                            key={b.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className={`group py-12 ${i < beliefs.length - 1 ? "md:border-r border-b md:border-b-0 border-[#111110]/10" : ""} ${i === 0 ? "" : "md:pl-12"} ${i === beliefs.length - 1 ? "" : "md:pr-12"} flex flex-col gap-6 cursor-default`}
                        >
                            {/* Number */}
                            <span
                                className={`${montserrat.className} font-bold text-[#b91c1c]`}
                                style={{ fontSize: "clamp(3rem, 5vw, 5rem)", lineHeight: 1, opacity: 0.18 }}
                            >
                                {b.num}
                            </span>

                            {/* Red rule */}
                            <div className="w-10 h-[2px] bg-[#b91c1c] -mt-4 group-hover:w-20 transition-all duration-400" />

                            {/* Title */}
                            <h3 className={`${montserrat.className} text-[#111110] text-2xl font-semibold`}>
                                {b.title}
                            </h3>

                            {/* Body */}
                            <p className={`${garamond.className} text-[#555550] text-lg leading-[1.8]`}>
                                {b.body}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Quote banner */}
                <FadeUp>
                    <div className="mt-20 relative overflow-hidden rounded-2xl">
                        <img
                            src="/wallpapers/female-engineers-working.jpg"
                            alt=""
                            className="w-full h-52 object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-[#111110]/75" />
                        <div className="absolute inset-0 flex items-center justify-center px-8">
                            <p className={`${garamond.className} text-white text-center italic text-2xl md:text-3xl lg:text-4xl font-normal leading-snug max-w-[700px]`}>
                                "Building spaces where luxury meets purpose, and comfort meets lasting value."
                            </p>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#b91c1c]" />
                    </div>
                </FadeUp>
            </div>

            {/* Bottom rule */}
            <div className="rule max-w-[1400px] mx-auto" />
        </section>
    )
}
