"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";

export default function mainLayout({ children }: {children: React.ReactNode}) {
    return (
        <div className="size-full">
            <Header />
            <div className="size-full max-w-[1550px] mx-auto min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    )
}