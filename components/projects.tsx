"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github, FileText, Code2, BookOpen, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

const featuredProjects = [
  {
    title: "Comercio Electrónico AI Platform",
    desc: "Plataforma completa de IA para e-commerce con modelos de series de tiempo LSTM para predicción de demanda, sistema de recomendación basado en deep learning y detección de productos por visión artificial. Aumentó las ventas en un 35% y redujo el inventario no utilizado en 28%.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "Tensorflow", "Keras", "Computer Vision", "Time Series", "Docker"],
    demoLink: "https://demo-ecommerce.example.com",
    codeLink: "https://github.com/user/ecommerce-ai",
  },
  {
    title: "NLP News Intelligence System",
    desc: "Sistema inteligente de análisis de noticias usando transformers (BERT, GPT). Clasifica automáticamente más de 10,000 artículos diarios en 15 categorías, genera resúmenes extractivos y abstractivos, y extrae entidades y temas clave con 94% de precisión.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "Transformers", "BERT", "Hugging Face", "NLP", "FastAPI"],
    demoLink: "https://news-ai.example.com",
    codeLink: "https://github.com/user/news-nlp",
  },
  {
    title: "Sistema de Predicción de Contaminación Ambiental",
    desc: "Modelo espacial-temporal bayesiano para predecir niveles de contaminación del aire y suelo en toda España. Utiliza INLA para inferencia bayesiana rápida y incluye dashboard interactivo Shiny para visualización en tiempo real. Adoptado por 3 municipios españoles.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["R", "INLA", "Bayesian Statistics", "Shiny", "Spatial Analysis", "Environmental"],
    demoLink: "https://pollution-predict.example.com",
    codeLink: "https://github.com/user/pollution-bayesian",
  },
  {
    title: "Educational Performance Analytics",
    desc: "Sistema de análisis predictivo del rendimiento académico en el examen Saber 11 de Colombia. Utiliza técnicas de ML para identificar factores de riesgo y predecir resultados con 89% de precisión, ayudando a intervenciones educativas tempranas.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "Scikit-learn", "XGBoost", "Education", "Data Science", "Streamlit"],
    demoLink: "https://edu-analytics.example.com",
    codeLink: "https://github.com/user/education-ml",
  },
]

const openSourceProjects = [
  {
    title: "SpatialPy: Python Spatial Analysis Library",
    desc: "Librería de código abierto para procesamiento y análisis de datos geoespaciales. Incluye algoritmos optimizados para kriging, interpolación espacial, y detección de clusters. +2,500 estrellas en GitHub, usada por más de 50 organizaciones.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "Open Source", "GIS", "NumPy", "GeoPandas"],
    demoLink: "https://spatialpy.readthedocs.io",
    codeLink: "https://github.com/spatialpy/spatialpy",
  },
  {
    title: "bayesSpatial: R Package for Spatial Bayesian Models",
    desc: "Paquete de R con herramientas estadísticas bayesianas para análisis espacial y temporal. Implementa modelos CAR, SAR, y SPDE con integración directa a INLA. Publicado en CRAN con más de 10,000 descargas mensuales.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["R", "CRAN", "Bayesian", "INLA", "Spatial Statistics"],
    demoLink: "https://cran.r-project.org/package=bayesSpatial",
    codeLink: "https://github.com/user/bayesSpatial",
  },
  {
    title: "MLToolkit: Machine Learning Utilities",
    desc: "Conjunto de utilidades y wrappers para simplificar workflows de ML. Incluye funciones para feature engineering, validación cruzada espacial, y hyperparameter tuning. Diseñado para integrarse con scikit-learn y PyTorch.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "PyPI", "Machine Learning", "scikit-learn", "Open Source"],
    demoLink: "https://mltoolkit.readthedocs.io",
    codeLink: "https://github.com/user/ml-toolkit",
  },
]

const researchArticles = [
  {
    title: "Spatial-Temporal Bayesian Models for Environmental Pollution Forecasting",
    desc: "Published in Environmental Statistics Journal (Impact Factor: 3.2). Propone un marco bayesiano jerárquico que combina efectos espaciales SPDE con componentes temporales autorregresivos para predecir contaminación. Validado en 15 ciudades españolas con RMSE 12% mejor que métodos tradicionales.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Bayesian Statistics", "INLA", "Spatial Analysis", "Environmental Science", "SPDE"],
    demoLink: "https://doi.org/10.1234/envstats.2024.001",
    codeLink: "https://github.com/user/spatial-pollution-code",
  },
  {
    title: "Machine Learning Approaches for Educational Performance Prediction",
    desc: "Publicado en Journal of Educational Data Mining. Compara 8 algoritmos de ML (Random Forest, XGBoost, Neural Networks) para predecir resultados del test Saber 11. Incluye análisis de interpretabilidad con SHAP values. Citado por 23 trabajos académicos.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Machine Learning", "Education", "XGBoost", "Feature Importance", "Predictive Analytics"],
    demoLink: "https://doi.org/10.1234/jedm.2025.003",
    codeLink: "https://github.com/user/education-ml-research",
  },
  {
    title: "Deep Learning for Multivariate Time Series in E-Commerce",
    desc: "Artículo en IEEE Transactions on Neural Networks. Propone arquitectura LSTM-CNN híbrida para forecasting multivariado en plataformas de e-commerce. Reduce error de predicción en 28% comparado con ARIMA y Prophet. Dataset público con 2M+ transacciones.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Deep Learning", "LSTM", "Time Series", "E-Commerce", "Forecasting"],
    demoLink: "https://doi.org/10.1109/TNNLS.2025.123456",
    codeLink: "https://github.com/user/ecommerce-lstm",
  },
]

const minorArticles = [
  {
    title: "Fine-tuning BERT for Spanish News Classification",
    desc: "Workshop paper en NLP Latam 2024. Demuestra cómo fine-tuning de BETO (BERT en español) supera a modelos baseline en 15% F1-score para clasificación de noticias en 10 categorías. Incluye dataset etiquetado de 50K artículos.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["NLP", "BERT", "Spanish", "Text Classification", "Transfer Learning"],
    demoLink: "https://arxiv.org/abs/2024.12345",
    codeLink: "https://github.com/user/bert-news-spanish",
  },
  {
    title: "Prophet vs LSTM for Retail Demand Forecasting",
    desc: "Estudio comparativo presentado en Data Science Colombia Meetup. Evalúa Prophet, ARIMA y LSTM en 3 casos de uso reales de retail. LSTM muestra mejor rendimiento para series con múltiples estacionalidades pero requiere 10x más tiempo de entrenamiento.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Time Series", "Prophet", "LSTM", "Forecasting", "Retail"],
    demoLink: "https://medium.com/@user/prophet-vs-lstm",
    codeLink: "https://github.com/user/forecasting-comparison",
  },
  {
    title: "Visual Product Search with CNNs",
    desc: "Blog técnico sobre implementación de búsqueda visual de productos usando ResNet50 pre-entrenado y fine-tuning. Sistema permite encontrar productos similares con 87% precisión top-5. Incluye pipeline completo de feature extraction y búsqueda por similitud.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Computer Vision", "ResNet", "CNN", "Image Similarity", "Transfer Learning"],
    demoLink: "https://towardsdatascience.com/visual-search-cnn",
    codeLink: "https://github.com/user/visual-product-search",
  },
  {
    title: "Interpretable ML Models for Credit Scoring",
    desc: "Short paper sobre uso de SHAP y LIME para interpretar modelos de credit scoring. Compara interpretabilidad de LightGBM vs redes neuronales, mostrando trade-offs entre performance y explicabilidad en contexto financiero.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Interpretability", "SHAP", "XAI", "Credit Scoring", "LightGBM"],
    demoLink: "https://arxiv.org/abs/2024.67890",
    codeLink: "https://github.com/user/interpretable-credit",
  },
]

export default function Projects() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<"featured" | "opensource" | "research" | "minor">("featured")

  const getCurrentProjects = () => {
    switch (activeTab) {
      case "featured":
        return featuredProjects
      case "opensource":
        return openSourceProjects
      case "research":
        return researchArticles
      case "minor":
        return minorArticles
      default:
        return featuredProjects
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("projects.title")}</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">{t("projects.subtitle")}</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          <button
            onClick={() => setActiveTab("featured")}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "featured"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <Star className="h-5 w-5" />
            Featured
          </button>
          <button
            onClick={() => setActiveTab("opensource")}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "opensource"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <Code2 className="h-5 w-5" />
            Open Source
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "research"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <BookOpen className="h-5 w-5" />
            Research
          </button>
          <button
            onClick={() => setActiveTab("minor")}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "minor"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <FileText className="h-5 w-5" />
            Minor Articles
          </button>
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          variants={container}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {getCurrentProjects().map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${project.image || '/placeholder.svg'}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoLink}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Demo</span>
                    </a>
                    <a
                      href={project.codeLink}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    {t("projects.demo")}
                  </a>
                  <a
                    href={project.codeLink}
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    {t("projects.code")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

