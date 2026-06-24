'use client'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { montserrat, garamond } from "@/lib/fonts"
import { pageRoutes } from "@/data/routes"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services/land-sales" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 safe-nav-top ${
          scrolled
            ? "bg-zinc-900/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#b91c1c] flex items-center justify-center rounded-sm flex-shrink-0">
              <span className={`${montserrat.className} text-white font-bold text-[10px] tracking-wider`}>ORC</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`${montserrat.className} text-zinc-100 font-semibold text-sm tracking-wide`}>Oyo Realty</span>
              <span className={`${garamond.className} text-amber-400 text-xs`}>&amp; Construction</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${garamond.className} text-sm text-zinc-300 tracking-wider uppercase hover:text-amber-400 transition-colors duration-200`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className={`${montserrat.className} bg-[#b91c1c] hover:bg-[#dc2626] text-white text-[10px] tracking-[0.25em] uppercase font-semibold px-5 py-2.5 rounded-sm transition-colors duration-200`}
            >
              Enquire
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-zinc-200 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-zinc-950/98 backdrop-blur-lg flex flex-col px-8 pt-24 pb-12"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <button
              className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-100"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`${garamond.className} text-2xl text-zinc-200 tracking-wider uppercase hover:text-amber-400 transition-colors`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/contact"
                className={`${montserrat.className} mt-4 bg-[#b91c1c] text-white text-[10px] tracking-[0.25em] uppercase font-semibold px-6 py-3 rounded-sm text-center`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileOpen(false)}
              >
                Enquire Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
