"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useLanguage, type Language } from "@/contexts/language-context"

interface Paper {
  collaborators: string
  status: string
  tags: string[]
  title: Record<Language, string>
  description: Record<Language, string>
}

const papers: Paper[] = [
  {
    collaborators: "With Johnatan Cardona Jiménez PhD, María Clara Lucía Zuluaga Vélez PhD, Francisco Javier Rodríguez Córtez PhD",
    status: "In preparation",
    tags: ["Bayesian Statistics", "MCMC", "EM", "Variational Bayes", "Geoscience"],
    title: {
      en: "Bayesian Modelling for Contamination in Geoscientific Applications",
      es: "Modelado Bayesiano para Contaminación en Aplicaciones Geocientíficas",
      pt: "Modelagem Bayesiana para Contaminação em Aplicações Geocientíficas",
    },
    description: {
      en: "Bayesian spatial model for environmental contamination using MCMC, EM algorithms, and Variational Bayes inference methods applied to geoscientific data.",
      es: "Modelo espacial bayesiano para contaminación ambiental usando MCMC, algoritmos EM y métodos de inferencia de Bayes Variacional aplicados a datos geocientíficos.",
      pt: "Modelo espacial bayesiano para contaminação ambiental usando MCMC, algoritmos EM e métodos de inferência de Bayes Variacional aplicados a dados geocientíficos.",
    },
  },
  {
    collaborators: "With Johnatan Cardona Jiménez PhD, Alejandra Estefanía Patiño Hoyos PhD, Simón Ruiz Martínez PhD",
    status: "In preparation",
    tags: ["Bayesian Statistics", "Multinomial", "Spatio-temporal", "Public Health", "Social Science"],
    title: {
      en: "Multinomial Model for Gender-Based Violence in Colombia: A Bayesian Approach to a Wicked Policy Problem",
      es: "Modelo Multinomial para la Violencia de Género en Colombia: Un Enfoque Bayesiano a un Problema Perverso de Política Pública",
      pt: "Modelo Multinomial para Violência de Gênero na Colômbia: Uma Abordagem Bayesiana para um Problema Perverso de Política Pública",
    },
    description: {
      en: "Multinomial Bayesian model for analyzing gender-based violence patterns across Colombian municipalities, addressing the complexity and multidimensionality of violence as a wicked policy problem.",
      es: "Modelo bayesiano multinomial para analizar patrones de violencia de género en municipios colombianos, abordando la complejidad y multidimensionalidad de la violencia como un problema perverso de política pública.",
      pt: "Modelo bayesiano multinomial para analisar padrões de violência de gênero em municípios colombianos, abordando a complexidade e multidimensionalidade da violência como um problema perverso de política pública.",
    },
  },
  {
    collaborators: "With Johnatan Cardona Jiménez PhD, Alejandra Estefanía Patiño Hoyos PhD, Simón Ruiz Martínez PhD",
    status: "In preparation",
    tags: ["Bayesian Statistics", "Bivariate Models", "Spatial Analysis", "Multinomial Logistic", "Public Health"],
    title: {
      en: "Bivariate Spatial Analysis of Sexual and Non-Sexual Violence Against Women in Colombia",
      es: "Análisis Espacial Bivariado de Violencia Sexual y No Sexual Contra la Mujer en Colombia",
      pt: "Análise Espacial Bivariada de Violência Sexual e Não Sexual Contra a Mulher na Colômbia",
    },
    description: {
      en: "Bivariate spatial model for jointly analyzing sexual and non-sexual violence, combined with a multinomial logistic model for women's mental violence, capturing spatial correlation across Colombian municipalities.",
      es: "Modelo espacial bivariado para analizar conjuntamente violencia sexual y no sexual, combinado con un modelo logístico multinomial para la violencia mental de la mujer, capturando correlación espacial en municipios colombianos.",
      pt: "Modelo espacial bivariado para analisar conjuntamente violência sexual e não sexual, combinado com um modelo logístico multinomial para a violência mental da mulher, capturando correlação espacial em municípios colombianos.",
    },
  },
  {
    collaborators: "With Johnatan Cardona Jiménez PhD, Kelly Christina Mota Gonçalves PhD, Marcus Lavagnole Nascimiento PhD",
    status: "In preparation",
    tags: ["R", "C++", "Bayesian", "Quantile Regression", "Survey Statistics"],
    title: {
      en: "bayesQRsurvey: Bayesian Quantile Regression Approach for Complex Survey Data in R",
      es: "bayesQRsurvey: Bayesian Quantile Regression Approach for Complex Survey Data in R",
      pt: "bayesQRsurvey: Bayesian Quantile Regression Approach for Complex Survey Data in R",
    },
    description: {
      en: "Software paper presenting bayesQRsurvey, an R package implementing Bayesian quantile regression under informative sampling designs using MCMC and EM algorithms with a C++ backend.",
      es: "Artículo de software presentando bayesQRsurvey, un paquete de R que implementa regresión cuantílica bayesiana bajo diseños de muestreo informativos usando algoritmos MCMC y EM con backend en C++.",
      pt: "Artigo de software apresentando bayesQRsurvey, um pacote R que implementa regressão quantílica bayesiana sob desenhos de amostragem informativos usando algoritmos MCMC e EM com backend em C++.",
    },
  },
]

const conferencesByYear = [
  {
    year: 2025,
    conferences: [
      {
        name: "Congreso Nacional de Estadística",
        location: "Bogotá, Colombia",
        presentations: [
          { topic: "Algorithm for Bayesian quantile regression under hierarchical data", type: "Talk" },
          { topic: "Analytics tools for the study of gender-based violence in Colombia", type: "Talk" },
        ],
      },
      {
        name: "METMA II",
        location: "Barranquilla, Colombia",
        presentations: [
          { topic: "Spatio-temporal modelling of gender-based violence in Antioquia", type: "Poster" },
        ],
      },
    ],
  },
  {
    year: 2024,
    conferences: [
      {
        name: "ISBA World Meeting",
        location: "Venice, Italy",
        presentations: [
          { topic: "Modeling geochemical risk in the Huelva Province", type: "Poster" },
          { topic: "Sensitivity analysis and application of Bayesian quantile regression to Prueba Saber 11 in Antioquia", type: "Poster" },
        ],
      },
    ],
  },
  {
    year: 2023,
    conferences: [
      {
        name: "Coloquio Nacional de Estadística",
        location: "Colombia",
        presentations: [
          { topic: "Modelling the microclimate with Gaussian processes", type: "Poster" },
        ],
      },
    ],
  },
]

type TabKey = "papers" | "conferences"

const tabLabels: Record<TabKey, Record<Language, string>> = {
  papers: { en: "Papers", es: "Artículos", pt: "Artigos" },
  conferences: { en: "Conferences", es: "Conferencias", pt: "Conferências" },
}

const tabKeys: TabKey[] = ["papers", "conferences"]

const ui = {
  en: { home: "Home", title: "Research", subtitle: "Academic papers and conference presentations." },
  es: { home: "Inicio", title: "Investigación", subtitle: "Artículos académicos y presentaciones en conferencias." },
  pt: { home: "Início", title: "Pesquisa", subtitle: "Artigos acadêmicos e apresentações em conferências." },
}

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("papers")
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
          <h1 className="text-4xl font-semibold text-gray-900 mb-3">{t.title}</h1>
          <p className="text-gray-600 mb-12 max-w-xl">{t.subtitle}</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-14 border-b border-gray-200">
          {tabKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2.5 text-sm font-medium transition-colors relative ${
                activeTab === key
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tabLabels[key][language]}
              {activeTab === key && (
                <motion.div
                  layoutId="researchTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gray-900"
                  transition={{ duration: 0.25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Papers */}
        {activeTab === "papers" && (
          <div className="space-y-0 divide-y divide-gray-200">
            {papers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="py-8 first:pt-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{paper.title[language]}</h3>
                  <span className="text-xs text-gray-500 font-mono italic">{paper.status}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-2 max-w-2xl">
                  {paper.description[language]}
                </p>
                <p className="text-xs text-gray-500 italic mb-3">
                  {paper.collaborators}
                </p>
                <p className="text-xs text-gray-500 font-mono">
                  {paper.tags.join(" · ")}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Conferences */}
        {activeTab === "conferences" && (
          <div className="space-y-16">
            {conferencesByYear.map((group, gi) => (
              <motion.div
                key={group.year}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: gi * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">{group.year}</h3>

                <div className="space-y-10">
                  {group.conferences.map((conf, ci) => (
                    <div key={ci}>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-4">
                        <h4 className="text-gray-900 font-medium">{conf.name}</h4>
                        <span className="text-xs text-gray-500 font-mono">{conf.location}</span>
                      </div>

                      <div className="space-y-2.5 pl-4 border-l border-gray-200">
                        {conf.presentations.map((pres, pi) => (
                          <div key={pi}>
                            <p className="text-sm text-gray-700 leading-relaxed">{pres.topic}</p>
                            <p className="text-xs text-gray-500 font-mono mt-0.5">{pres.type}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
