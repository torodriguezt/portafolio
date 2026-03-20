"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { useLanguage, type Language } from "@/contexts/language-context"

const navLinks = (language: Language) => [
  { href: "/about", label: { en: "About", es: "Acerca", pt: "Sobre" }[language] },
  { href: "/experience", label: { en: "Experience", es: "Experiencia", pt: "Experiência" }[language] },
  { href: "/projects", label: { en: "Projects", es: "Proyectos", pt: "Projetos" }[language] },
  { href: "/research", label: { en: "Research", es: "Investigación", pt: "Pesquisa" }[language] },
  { href: "/recognition", label: { en: "Recognition", es: "Reconocimientos", pt: "Reconhecimentos" }[language] },
]

const languages: Language[] = ["en", "es", "pt"]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const links = navLinks(language)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-gray-900 font-medium hover:opacity-60 transition-opacity"
          >
            Tom{"á"}s Rodr{"í"}guez
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-0.5 ml-2 border-l border-gray-200 pl-4">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-1.5 py-0.5 text-xs font-mono uppercase transition-colors ${
                    language === lang
                      ? "text-gray-900 font-medium"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex items-center gap-1 pt-3 mt-2 border-t border-gray-100">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 text-xs font-mono uppercase transition-colors ${
                      language === lang
                        ? "text-gray-900 font-medium"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
