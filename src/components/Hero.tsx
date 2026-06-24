'use client'
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { montserrat, garamond } from "@/lib/fonts"
import { ChevronDown } from "lucide-react"
import { pageRoutes } from "@/data/routes"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"])
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])

  return (
    <div ref={ref} className="relative min-h-screen w-full overflow-hidden bg-zinc-950">
      {/* Layer 1: Background image — parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[145%] -top-[22%]"
        style={{ y: bgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-zinc-950/78" />
      </motion.div>

      {/* Layer 2: Mid depth overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"
        style={{ y: midY }}
      />

      {/* Vertical accent lines */}
      <motion.div
        className="hidden lg:block absolute left-8 top-32 w-px bg-white/10"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
        style={{ height: "40%" }}
      />
      <motion.div
        className="hidden lg:block absolute right-8 top-48 w-px bg-white/10"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 1.1, ease: "easeOut" }}
        style={{ height: "30%" }}
      />

      {/* Layer 3: Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto"
        style={{ y: textY }}
      >
        {/* Eyebrow */}
        <motion.p
          className={`${montserrat.className} text-amber-400 text-[10px] tracking-[0.3em] uppercase font-bold mb-8`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          Ibadan · Oyo State · Nigeria
        </motion.p>

        {/* Headline — 3 staggered lines */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className={`${montserrat.className} text-zinc-100 font-semibold text-6xl sm:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] leading-none`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Build
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h1
            className={`${montserrat.className} text-zinc-100 font-semibold text-6xl sm:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] leading-none`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Beyond
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            className={`${montserrat.className} text-[#b91c1c] font-semibold text-6xl sm:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] leading-none`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Boundaries.
          </motion.h1>
        </div>

        {/* Glass CTA panel */}
        <motion.div
          className="glass rounded-sm p-6 sm:p-8 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
        >
          <p className={`${garamond.className} text-zinc-300 text-base sm:text-lg leading-relaxed mb-6`}>
            Premium real estate and construction across Oyo State since 2009.
            We deliver verified estates, serviced plots, and quality builds.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={pageRoutes.projects}
              className={`${montserrat.className} bg-[#b91c1c] hover:bg-[#dc2626] text-white text-[10px] tracking-[0.25em] uppercase font-semibold px-6 py-3 rounded-sm transition-colors duration-200`}
            >
              Explore Projects
            </a>
            <a
              href={pageRoutes.services.base}
              className={`${montserrat.className} bg-white/5 border border-white/20 hover:bg-white/10 text-zinc-200 text-[10px] tracking-[0.25em] uppercase font-semibold px-6 py-3 rounded-sm transition-colors duration-200`}
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 2.2, ease: "easeOut" }}
      >
        <span className={`${montserrat.className} text-zinc-500 text-[9px] tracking-[0.3em] uppercase`}>Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-zinc-500" />
        </motion.div>
      </motion.div>
    </div>
  )
}
