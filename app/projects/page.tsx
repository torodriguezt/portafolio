"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useLanguage, type Language } from "@/contexts/language-context"

interface Project {
  tags: string[]
  collaborators?: string
  github?: string | { label: string; url: string }[]
  link?: string
  title: Record<Language, string>
  description: Record<Language, string>
}

const projects: Project[] = [
  {
    tags: ["R", "Bayesian Statistics", "MCMC", "EM", "Variational Bayes", "Spatial Analysis"],
    collaborators: "With Johnatan Cardona Jiménez PhD, María Clara Lucía Zuluaga Vélez PhD, Francisco Javier Rodríguez Córtez PhD",
    github: "https://github.com/torodriguezt/Bayesian-Analysis-Huelva",
    title: {
      en: "Bayesian Contamination Modelling — Huelva, Spain",
      es: "Modelado Bayesiano de Contaminación — Huelva, España",
      pt: "Modelagem Bayesiana de Contaminação — Huelva, Espanha",
    },
    description: {
      en: "Bayesian spatial model for environmental contamination in the Huelva region. Compares three inference approaches: MCMC, EM algorithms, and Variational Bayes, evaluating their trade-offs in accuracy and computational cost.",
      es: "Modelo espacial bayesiano para contaminación ambiental en la región de Huelva. Compara tres enfoques de inferencia: MCMC, algoritmos EM y Bayes Variacional, evaluando sus compromisos en precisión y costo computacional.",
      pt: "Modelo espacial bayesiano para contaminação ambiental na região de Huelva. Compara três abordagens de inferência: MCMC, algoritmos EM e Bayes Variacional, avaliando seus compromissos em precisão e custo computacional.",
    },
  },
  {
    tags: ["R", "Bayesian Statistics", "Quantile Regression", "Education", "Sensitivity Analysis"],
    collaborators: "With Johnatan Cardona Jiménez PhD",
    title: {
      en: "Sensitivity of Bayesian Quantile Regression — Prueba Saber 11",
      es: "Sensibilidad de la Regresión Cuantílica Bayesiana — Prueba Saber 11",
      pt: "Sensibilidade da Regressão Quantílica Bayesiana — Prueba Saber 11",
    },
    description: {
      en: "Analysis of sensitivity in Bayesian quantile regression models under different prior specifications, with application to Colombia's Saber 11 standardized test for understanding educational performance across quantiles.",
      es: "Análisis de sensibilidad en modelos de regresión cuantílica bayesiana bajo diferentes especificaciones de prioris, con aplicación a la Prueba Saber 11 de Colombia para entender el rendimiento educativo a través de cuantiles.",
      pt: "Análise de sensibilidade em modelos de regressão quantílica bayesiana sob diferentes especificações de prioris, com aplicação à Prueba Saber 11 da Colômbia para entender o desempenho educacional através de quantis.",
    },
  },
  {
    tags: ["R", "Bayesian Statistics", "Multinomial", "Spatio-temporal", "Public Health"],
    collaborators: "With Johnatan Cardona Jiménez PhD, Alejandra Estefanía Patiño Hoyos PhD, Simón Ruiz Martínez PhD",
    github: "https://github.com/bayesian-vaw-colombia",
    title: {
      en: "Multinomial Model for Gender-Based Violence in Colombia",
      es: "Modelo Multinomial para la Violencia de Género en Colombia",
      pt: "Modelo Multinomial para Violência de Gênero na Colômbia",
    },
    description: {
      en: "Multinomial Bayesian model for analyzing gender-based violence patterns across Colombian municipalities, addressing the complexity and multidimensionality of violence as a wicked policy problem.",
      es: "Modelo bayesiano multinomial para analizar patrones de violencia de género en municipios colombianos, abordando la complejidad y multidimensionalidad de la violencia como un problema perverso de política pública.",
      pt: "Modelo bayesiano multinomial para analisar padrões de violência de gênero em municípios colombianos, abordando a complexidade e multidimensionalidade da violência como um problema perverso de política pública.",
    },
  },
  {
    tags: ["R", "Bayesian Statistics", "Bivariate Models", "Spatial Analysis", "Multinomial Logistic", "Public Health"],
    collaborators: "With Johnatan Cardona Jiménez PhD, Alejandra Estefanía Patiño Hoyos PhD, Simón Ruiz Martínez PhD",
    title: {
      en: "Bivariate Spatial Model for Violence in Colombia",
      es: "Modelo Espacial Bivariado para la Violencia en Colombia",
      pt: "Modelo Espacial Bivariado para a Violência na Colômbia",
    },
    description: {
      en: "Bivariate spatial model for jointly analyzing sexual and non-sexual violence, combined with a multinomial logistic model for women's mental violence across Colombian municipalities.",
      es: "Modelo espacial bivariado para analizar conjuntamente violencia sexual y no sexual, combinado con un modelo logístico multinomial para la violencia mental de la mujer en municipios colombianos.",
      pt: "Modelo espacial bivariado para analisar conjuntamente violência sexual e não sexual, combinado com um modelo logístico multinomial para a violência mental da mulher em municípios colombianos.",
    },
  },
  {
    tags: ["R", "Gaussian Processes", "Spatial Statistics", "Environmental Science"],
    github: "https://github.com/torodriguezt/GP-Valle-de-Aburra",
    title: {
      en: "Gaussian Process Modelling — Valle de Aburrá Microclimate",
      es: "Modelado con Procesos Gaussianos — Microclima del Valle de Aburrá",
      pt: "Modelagem com Processos Gaussianos — Microclima do Valle de Aburrá",
    },
    description: {
      en: "Gaussian process model for microclimate prediction in the Valle de Aburrá metropolitan area, capturing spatial variability in environmental conditions.",
      es: "Modelo de procesos gaussianos para predicción del microclima en el área metropolitana del Valle de Aburrá, capturando la variabilidad espacial en condiciones ambientales.",
      pt: "Modelo de processos gaussianos para previsão do microclima na área metropolitana do Valle de Aburrá, capturando a variabilidade espacial em condições ambientais.",
    },
  },
  {
    tags: ["Python", "BERT", "NLP", "Multi-label", "Multi-class", "Deep Learning"],
    github: "https://github.com/torodriguezt/Clasificacion_Biomedica",
    title: {
      en: "Multi-label Medical Article Classification",
      es: "Clasificación Multi-etiqueta de Artículos Médicos",
      pt: "Classificação Multi-rótulo de Artigos Médicos",
    },
    description: {
      en: "BERT-based multi-label and multi-class classifier for medical articles using title and abstract. Articles can belong to one, two, three, or all four categories simultaneously, handling the combinatorial nature of medical literature.",
      es: "Clasificador multi-etiqueta y multi-clase basado en BERT para artículos médicos usando título y resumen. Los artículos pueden pertenecer a una, dos, tres o las cuatro categorías simultáneamente.",
      pt: "Classificador multi-rótulo e multi-classe baseado em BERT para artigos médicos usando título e resumo. Os artigos podem pertencer a uma, duas, três ou todas as quatro categorias simultaneamente.",
    },
  },
]

const openSource: Project[] = [
  {
    tags: ["R", "C++", "Bayesian", "Quantile Regression", "Survey Statistics", "MCMC"],
    collaborators: "With Johnatan Cardona Jiménez PhD, Kelly Christina Mota Gonçalves PhD, Marcus Lavagnole Nascimiento PhD",
    link: "https://cran.r-project.org/web/packages/bayesQRsurvey/index.html",
    title: {
      en: "bayesQRsurvey",
      es: "bayesQRsurvey",
      pt: "bayesQRsurvey",
    },
    description: {
      en: "R package for Bayesian quantile regression under informative sampling designs. Implements MCMC and EM algorithms with a C++ backend for efficient computation on complex survey data.",
      es: "Paquete de R para regresión cuantílica bayesiana bajo diseños de muestreo informativos. Implementa algoritmos MCMC y EM con backend en C++ para computación eficiente en datos de encuestas complejas.",
      pt: "Pacote R para regressão quantílica bayesiana sob desenhos de amostragem informativos. Implementa algoritmos MCMC e EM com backend em C++ para computação eficiente em dados de pesquisas complexas.",
    },
  },
  {
    tags: ["Python", "R", "Statistics", "Teaching", "Regression"],
    github: "https://github.com/torodriguezt/Estadistica-II",
    title: {
      en: "Estadística II — Course Materials",
      es: "Estadística II — Material del Curso",
      pt: "Estatística II — Material do Curso",
    },
    description: {
      en: "Teaching materials for Statistics II at Universidad Nacional de Colombia, covering multiple linear regression, logistic regression, Poisson regression, and probabilistic sampling in Python and R.",
      es: "Material de enseñanza para Estadística II en la Universidad Nacional de Colombia, cubriendo regresión lineal múltiple, regresión logística, regresión de Poisson y muestreo probabilístico en Python y R.",
      pt: "Material de ensino para Estatística II na Universidad Nacional de Colombia, cobrindo regressão linear múltipla, regressão logística, regressão de Poisson e amostragem probabilística em Python e R.",
    },
  },
]

const sideProjects: Project[] = [
  {
    tags: ["Python", "Computer Vision", "LSTM", "Embeddings", "Recommendation Systems"],
    github: [
      { label: "Forecast", url: "https://github.com/RNA-y-Algo-Bioinsp-2024-02/model_forecast" },
      { label: "Recommendations", url: "https://github.com/RNA-y-Algo-Bioinsp-2024-02/model_recommendations" },
      { label: "Vision", url: "https://github.com/RNA-y-Algo-Bioinsp-2024-02/model_images" },
    ],
    title: {
      en: "E-Commerce AI Platform",
      es: "Plataforma de IA para E-Commerce",
      pt: "Plataforma de IA para E-Commerce",
    },
    description: {
      en: "End-to-end application combining computer vision for item classification, LSTM networks for stock prediction, and embedding-based recommendations — suggesting products based on what the user is currently browsing.",
      es: "Aplicación de extremo a extremo combinando visión por computadora para clasificación de productos, redes LSTM para predicción de inventario, y recomendaciones basadas en embeddings — sugiriendo productos según lo que el usuario está navegando.",
      pt: "Aplicação de ponta a ponta combinando visão computacional para classificação de itens, redes LSTM para previsão de estoque, e recomendações baseadas em embeddings — sugerindo produtos com base no que o usuário está navegando.",
    },
  },
  {
    tags: ["Python", "Deep Learning", "Credit Risk", "Classification"],
    github: "https://github.com/RNA-y-Algo-Bioinsp-2024-02/model_credit_risk",
    title: {
      en: "Credit Risk Classification Model",
      es: "Modelo de Clasificación de Riesgo Crediticio",
      pt: "Modelo de Classificação de Risco de Crédito",
    },
    description: {
      en: "Credit risk model for classifying borrowers into different credit risk categories along with their respective risk scores.",
      es: "Modelo de riesgo crediticio para clasificar prestatarios en diferentes categorías de riesgo de nivel crediticio junto con su respectivo score.",
      pt: "Modelo de risco de crédito para classificar tomadores de empréstimo em diferentes categorias de risco de crédito junto com seus respectivos scores.",
    },
  },
  {
    tags: ["Python", "BERT", "NLP", "LDA", "Text Generation", "Topic Modeling"],
    title: {
      en: "News Intelligence Pipeline",
      es: "Pipeline de Inteligencia de Noticias",
      pt: "Pipeline de Inteligência de Notícias",
    },
    description: {
      en: "Classification of news articles across genres using BERT, with a generative model for automatic summary creation and LDA for latent topic discovery across the corpus.",
      es: "Clasificación de artículos de noticias por géneros usando BERT, con un modelo generativo para creación automática de resúmenes y LDA para descubrimiento de temas latentes en el corpus.",
      pt: "Classificação de artigos de notícias por gêneros usando BERT, com um modelo generativo para criação automática de resumos e LDA para descoberta de tópicos latentes no corpus.",
    },
  },
  {
    tags: ["R", "Bayesian Statistics", "Simulated Annealing", "Probability", "Sports Analytics"],
    github: "https://github.com/torodriguezt/SABayesFIFA",
    title: {
      en: "FIFA World Cup Draw Fairness",
      es: "Justicia del Sorteo del Mundial FIFA",
      pt: "Justiça do Sorteio da Copa do Mundo FIFA",
    },
    description: {
      en: "Bayesian model with simulated annealing evaluating the fairness of the FIFA World Cup group-stage draw mechanism, quantifying whether the allocation process produces balanced groups.",
      es: "Modelo bayesiano con recocido simulado evaluando la justicia del mecanismo del sorteo de la fase de grupos del Mundial FIFA, cuantificando si el proceso de asignación produce grupos equilibrados.",
      pt: "Modelo bayesiano com recozimento simulado avaliando a justiça do mecanismo de sorteio da fase de grupos da Copa do Mundo FIFA, quantificando se o processo de alocação produz grupos equilibrados.",
    },
  },
  {
    tags: ["Python", "Diffusion Models", "Stable Diffusion", "Generative AI"],
    title: {
      en: "MTG Card Generator",
      es: "Generador de Cartas MTG",
      pt: "Gerador de Cartas MTG",
    },
    description: {
      en: "Diffusion model fine-tuned to generate Magic: The Gathering card artwork, exploring the creative boundaries of image generation on a highly stylized domain.",
      es: "Modelo de difusión afinado para generar arte de cartas de Magic: The Gathering, explorando los límites creativos de la generación de imágenes en un dominio altamente estilizado.",
      pt: "Modelo de difusão ajustado para gerar arte de cartas de Magic: The Gathering, explorando os limites criativos da geração de imagens em um domínio altamente estilizado.",
    },
  },
]

type TabKey = "projects" | "opensource" | "side"

const tabLabels: Record<TabKey, Record<Language, string>> = {
  projects: { en: "Projects", es: "Proyectos", pt: "Projetos" },
  opensource: { en: "Open Source", es: "Código Abierto", pt: "Código Aberto" },
  side: { en: "Side Projects", es: "Proyectos Personales", pt: "Projetos Pessoais" },
}

const tabKeys: TabKey[] = ["projects", "opensource", "side"]

const projectsByTab: Record<TabKey, Project[]> = {
  projects,
  opensource: openSource,
  side: sideProjects,
}

const ui = {
  en: {
    home: "Home",
    title: "Projects",
    subtitle: "Bayesian models, deep learning applications, and open-source tools.",
    deploymentNote: "Most of these projects were deployed on Render or Digital Ocean instances, which were later shut down due to cost. Deployment screenshots are available on the blog.",
    blog: "Blog",
  },
  es: {
    home: "Inicio",
    title: "Proyectos",
    subtitle: "Modelos bayesianos, aplicaciones de aprendizaje profundo y herramientas de código abierto.",
    deploymentNote: "La mayoría de estos proyectos fueron desplegados en instancias de Render o Digital Ocean, que fueron apagadas posteriormente por el costo. Imágenes del despliegue están disponibles en el blog.",
    blog: "Blog",
  },
  pt: {
    home: "Início",
    title: "Projetos",
    subtitle: "Modelos bayesianos, aplicações de aprendizado profundo e ferramentas de código aberto.",
    deploymentNote: "A maioria destes projetos foi implantada em instâncias do Render ou Digital Ocean, que foram posteriormente desligadas devido ao custo. Capturas de tela da implantação estão disponíveis no blog.",
    blog: "Blog",
  },
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("projects")
  const { language } = useLanguage()
  const t = ui[language]

  const currentProjects = projectsByTab[activeTab]

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
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gray-900"
                  transition={{ duration: 0.25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Deployment note + Blog for side projects */}
        {activeTab === "side" && (
          <div className="mb-10 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <a
                href="https://rna-y-algo-bioinsp-2024-02.github.io/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors font-mono"
              >
                {t.blog} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t.deploymentNote}
            </p>
          </div>
        )}

        {/* Project list */}
        <div className="space-y-0 divide-y divide-gray-200">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title.en}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="py-8 first:pt-0 group"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {project.title[language]}
                </h3>
                <div className="flex flex-wrap gap-3 shrink-0 mt-1 justify-end">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors text-xs font-mono"
                    >
                      CRAN <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {project.github && (
                    typeof project.github === "string" ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors text-xs font-mono"
                      >
                        GitHub <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      project.github.map((repo) => (
                        <a
                          key={repo.url}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors text-xs font-mono"
                        >
                          {repo.label} <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ))
                    )
                  )}
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-2 max-w-2xl">
                {project.description[language]}
              </p>

              {project.collaborators && (
                <p className="text-xs text-gray-500 italic mb-3">
                  {project.collaborators}
                </p>
              )}

              <p className="text-xs text-gray-500 font-mono">
                {project.tags.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}
