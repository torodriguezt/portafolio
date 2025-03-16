import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"
import LanguageToggle from "@/components/language-toggle"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tomás Rodríguez | Científico de Datos",
  description:
    "Portfolio profesional de Tomás Rodríguez, Científico de Datos especializado en análisis, visualizaciones y machine learning.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ThemeToggle />
          <LanguageToggle />
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'