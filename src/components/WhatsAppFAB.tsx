'use client'

import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { MessageCircle, X, Phone } from "lucide-react"
import { montserrat } from "@/lib/fonts"

const contacts = [
    { label: "Office 1 — Mokola",       number: "+2348060342510" },
    { label: "Office 2 — New Ife Road", number: "+2348162483372" },
]

export default function WhatsAppFAB() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed bottom-7 right-7 z-[99] flex flex-col items-end gap-3">

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0,  scale: 1 }}
                        exit={{ opacity: 0,  y: 12, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#FAF9F6] rounded-2xl border border-[#111110]/10 overflow-hidden shadow-2xl min-w-[220px]"
                    >
                        <div className="px-4 py-3 border-b border-[#111110]/10 bg-[#111110]">
                            <p className={`${montserrat.className} text-[9px] font-bold text-white/60 tracking-[0.22em] uppercase`}>
                                Chat with Us
                            </p>
                        </div>
                        {contacts.map((c) => (
                            <a
                                key={c.number}
                                href={`https://wa.me/${c.number.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-3.5 hover:bg-[#b91c1c]/6 transition-colors duration-150 group"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#b91c1c]/10 flex items-center justify-center shrink-0 group-hover:bg-[#b91c1c]/20 transition-colors">
                                    <Phone size={13} className="text-[#b91c1c]" />
                                </div>
                                <div>
                                    <p className={`${montserrat.className} text-[9px] text-[#888880] uppercase tracking-wider`}>{c.label}</p>
                                    <p className={`${montserrat.className} text-[#111110] text-sm font-semibold`}>{c.number}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                className="w-14 h-14 rounded-full bg-[#25D366] shadow-[0_6px_28px_rgba(37,211,102,0.45)] flex items-center justify-center text-white cursor-pointer"
                aria-label={open ? "Close WhatsApp" : "Open WhatsApp"}
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                            <X size={22} />
                        </motion.span>
                    ) : (
                        <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                            <MessageCircle size={22} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}
