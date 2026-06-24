import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import { garamond, montserrat } from "@/lib/fonts";
import "./globals.css";
import "./swiper-styles.css";

export const metadata: Metadata = {
  title: "Oyo Realty & Construction",
  description: "Premium real estate and construction across Oyo State since 2009. Build Beyond Boundaries.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",   // allows content to extend behind notch / Dynamic Island
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${garamond.className} ${montserrat.variable} antialiased w-full`}>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
