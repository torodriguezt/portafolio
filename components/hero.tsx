"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage, type Language } from "@/contexts/language-context"

const navLinks = (language: Language) => [
  { href: "/experience", label: { en: "Experience", es: "Experiencia", pt: "Experiência" }[language] },
  { href: "/projects", label: { en: "Projects", es: "Proyectos", pt: "Projetos" }[language] },
  { href: "/research", label: { en: "Research", es: "Investigación", pt: "Pesquisa" }[language] },
  { href: "/awards", label: { en: "Awards", es: "Premios", pt: "Prêmios" }[language] },
]

const content = {
  en: {
    tagline:
      "My work focuses on developing models and software at the intersection of Bayesian statistics and machine learning, with applications ranging from spatio-temporal systems to deep learning.",
    location: "Medellín, Colombia",
  },
  es: {
    tagline:
      "Mi trabajo se enfoca en desarrollar modelos y software en la intersección de la estadística bayesiana y el aprendizaje automático, con aplicaciones que van desde sistemas espacio-temporales hasta aprendizaje profundo.",
    location: "Medellín, Colombia",
  },
  pt: {
    tagline:
      "Meu trabalho foca no desenvolvimento de modelos e software na interseção entre estatística bayesiana e aprendizado de máquina, com aplicações que vão de sistemas espaço-temporais ao aprendizado profundo.",
    location: "Medellín, Colômbia",
  },
}

export default function Hero() {
  const { language } = useLanguage()
  const text = content[language]
  const links = navLinks(language)

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-16 relative">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-normal text-gray-900">
            Tom{"á"}s Rodr{"í"}guez
          </h1>

          <div className="w-12 h-px bg-gray-200 my-10" />

          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
            {text.tagline}
          </p>

          {/* Navigation links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-14">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900 pb-0.5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact line */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-8 text-sm text-gray-500 font-mono">
            <span>{text.location}</span>
            <span className="text-gray-300">·</span>
            <a
              href="mailto:torodriguezt@unal.edu.co"
              className="hover:text-gray-900 transition-colors"
            >
              torodriguezt@unal.edu.co
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
