"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLanguage, type Language } from "@/contexts/language-context"

interface Award {
  year: string
  title: Record<Language, string>
  context: Record<Language, string>
}

const awards: Award[] = [
  {
    year: "2024",
    title: {
      en: "Best Poster Award — ISBA 2024",
      es: "Mejor Póster — ISBA 2024",
      pt: "Melhor Pôster — ISBA 2024",
    },
    context: {
      en: "International Society for Bayesian Analysis World Meeting",
      es: "Congreso Mundial de la Sociedad Internacional de Análisis Bayesiano",
      pt: "Congresso Mundial da Sociedade Internacional de Análise Bayesiana",
    },
  },
  {
    year: "2025",
    title: {
      en: "First Place — Hackathon UdeA × Source Meridian",
      es: "Primer Lugar — Hackathon UdeA × Source Meridian",
      pt: "Primeiro Lugar — Hackathon UdeA × Source Meridian",
    },
    context: {
      en: "Universidad de Antioquia — Built a BERT-based multi-label and multi-class classifier for medical articles",
      es: "Universidad de Antioquia — Desarrollo de un clasificador multi-etiqueta y multi-clase basado en BERT para artículos médicos",
      pt: "Universidad de Antioquia — Desenvolvimento de um classificador multi-rótulo e multi-classe baseado em BERT para artigos médicos",
    },
  },
]

const ui = {
  en: { home: "Home", title: "Recognition" },
  es: { home: "Inicio", title: "Reconocimientos" },
  pt: { home: "Início", title: "Reconhecimentos" },
}

export default function RecognitionPage() {
  const { language } = useLanguage()
  const t = ui[language]

  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-16"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t.home}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-semibold text-gray-900 mb-16">{t.title}</h1>
        </motion.div>

        <div className="space-y-10">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-medium text-gray-900">{award.title[language]}</h3>
                <span className="text-sm text-gray-500 font-mono">{award.year}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{award.context[language]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
