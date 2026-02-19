import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Roboto } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingActions from "@/components/layout/floating-actions"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "AVAIA Mind Clinic - Professional Online Therapy",
  description:
    "Evidence-based clinical psychology services that foster awareness, healing, and growth. Professional online therapy with qualified clinical psychologists.",
  keywords: "clinical psychology, online therapy, mental health, counseling, CBT, trauma therapy, Pune",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${roboto.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>
        <div className="bg-pattern"></div>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}
