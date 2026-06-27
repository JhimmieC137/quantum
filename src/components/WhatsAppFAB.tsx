'use client'

import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { MessageCircle, X, Phone } from "lucide-react"
import { montserrat } from "@/lib/fonts"

const contacts = [
    { label: "Office 1 — Mokola", number: "+2348060342510" },
    { label: "Office 2 — New Ife Road", number: "+2348162483372" },
]

export default function WhatsAppFAB() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-[99] flex flex-col items-end gap-3">

            {/* Contact options */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="glass-dark rounded-2xl border border-white/12 overflow-hidden shadow-2xl min-w-[220px]"
                    >
                        <div className="px-4 py-3 border-b border-white/10">
                            <p className={`${montserrat.className} text-[10px] font-bold text-[#C9A84C] tracking-[0.2em] uppercase`}>
                                Chat with Us
                            </p>
                        </div>
                        {contacts.map((c) => (
                            <a
                                key={c.number}
                                href={`https://wa.me/${c.number.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-3 hover:bg-white/8 transition-colors duration-150 group"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                                    <Phone size={14} className="text-[#25D366]" />
                                </div>
                                <div>
                                    <p className={`${montserrat.className} text-[10px] text-zinc-500 uppercase tracking-wider`}>
                                        {c.label}
                                    </p>
                                    <p className="text-zinc-200 text-sm font-medium">{c.number}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB button */}
            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.4)] flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                aria-label={open ? "Close WhatsApp menu" : "Open WhatsApp"}
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.span
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <X size={22} />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <MessageCircle size={22} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}
