"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowLeft, Star, Code2, BookOpen, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const featuredProjects = [
  {
    title: "E-Commerce AI Platform",
    description:
      "Complete AI platform for e-commerce featuring LSTM time series models for demand prediction, deep learning recommendation system, and computer vision product detection. Increased sales by 35% and reduced unused inventory by 28%.",
    tags: ["Python", "Tensorflow", "Keras", "Computer Vision", "Time Series", "Docker"],
    github: "https://github.com/torodriguezt/ecommerce-ai",
    demo: "https://demo-ecommerce.example.com",
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "NLP News Intelligence System",
    description:
      "Intelligent news analysis system using transformers (BERT, GPT). Automatically classifies 10,000+ daily articles into 15 categories, generates extractive and abstractive summaries, and extracts key entities and topics with 94% precision.",
    tags: ["Python", "Transformers", "BERT", "Hugging Face", "NLP", "FastAPI"],
    github: "https://github.com/torodriguezt/news-nlp",
    demo: "https://news-ai.example.com",
    image: "/projects/nlp.jpg",
  },
  {
    title: "Environmental Pollution Prediction System",
    description:
      "Bayesian spatial-temporal model for predicting air and soil pollution levels across Spain. Uses INLA for fast Bayesian inference and includes interactive Shiny dashboard for real-time visualization. Adopted by 3 Spanish municipalities.",
    tags: ["R", "INLA", "Bayesian Statistics", "Shiny", "Spatial Analysis", "Environmental"],
    github: "https://github.com/torodriguezt/pollution-bayesian",
    demo: "https://pollution-predict.example.com",
    image: "/projects/pollution.jpg",
  },
  {
    title: "Educational Performance Analytics",
    description:
      "Predictive analytics system for academic performance on Colombia's Saber 11 exam. Uses ML techniques to identify risk factors and predict outcomes with 89% accuracy, enabling early educational interventions.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Education", "Data Science", "Streamlit"],
    github: "https://github.com/torodriguezt/education-ml",
    demo: "https://edu-analytics.example.com",
    image: "/projects/education.jpg",
  },
]

const openSourceProjects = [
  {
    title: "SpatialPy: Python Spatial Analysis Library",
    description: "Open-source library for geospatial data processing and analysis. Includes optimized algorithms for kriging, spatial interpolation, and cluster detection. 2,500+ GitHub stars, used by 50+ organizations.",
    tags: ["Python", "Open Source", "GIS", "NumPy", "GeoPandas"],
    github: "https://github.com/spatialpy/spatialpy",
  },
  {
    title: "bayesSpatial: R Package for Spatial Bayesian Models",
    description: "R package with Bayesian statistical tools for spatial and temporal analysis. Implements CAR, SAR, and SPDE models with direct INLA integration. Published on CRAN with 10K+ monthly downloads.",
    tags: ["R", "CRAN", "Bayesian", "INLA", "Spatial Statistics"],
    github: "https://github.com/torodriguezt/bayesSpatial",
  },
  {
    title: "MLToolkit: Machine Learning Utilities",
    description: "Set of utilities and wrappers to simplify ML workflows. Includes functions for feature engineering, spatial cross-validation, and hyperparameter tuning. Designed to integrate with scikit-learn and PyTorch.",
    tags: ["Python", "PyPI", "Machine Learning", "scikit-learn", "Open Source"],
    github: "https://github.com/torodriguezt/ml-toolkit",
  },
]

const researchArticles = [
  {
    title: "Spatial-Temporal Bayesian Models for Environmental Pollution Forecasting",
    description: "Published in Environmental Statistics Journal (IF: 3.2). Proposes a hierarchical Bayesian framework combining SPDE spatial effects with autoregressive temporal components. Validated in 15 Spanish cities with 12% better RMSE than traditional methods.",
    tags: ["Bayesian Statistics", "INLA", "Spatial Analysis", "Environmental Science", "SPDE"],
    github: "https://github.com/torodriguezt/spatial-pollution-code",
  },
  {
    title: "Machine Learning Approaches for Educational Performance Prediction",
    description: "Published in Journal of Educational Data Mining. Compares 8 ML algorithms (Random Forest, XGBoost, Neural Networks) for predicting Saber 11 test outcomes. Includes interpretability analysis with SHAP values. Cited by 23 academic works.",
    tags: ["Machine Learning", "Education", "XGBoost", "Feature Importance", "Predictive Analytics"],
    github: "https://github.com/torodriguezt/education-ml-research",
  },
  {
    title: "Deep Learning for Multivariate Time Series in E-Commerce",
    description: "Article in IEEE Transactions on Neural Networks. Proposes hybrid LSTM-CNN architecture for multivariate forecasting on e-commerce platforms. Reduces prediction error by 28% compared to ARIMA and Prophet. Public dataset with 2M+ transactions.",
    tags: ["Deep Learning", "LSTM", "Time Series", "E-Commerce", "Forecasting"],
    github: "https://github.com/torodriguezt/ecommerce-lstm",
  },
]

const minorArticles = [
  {
    title: "Fine-tuning BERT for Spanish News Classification",
    description: "Workshop paper at NLP Latam 2024. Demonstrates how fine-tuning BETO (Spanish BERT) outperforms baseline models by 15% F1-score for news classification into 10 categories. Includes labeled dataset of 50K articles.",
    tags: ["NLP", "BERT", "Spanish", "Text Classification", "Transfer Learning"],
    github: "https://github.com/torodriguezt/bert-news-spanish",
  },
  {
    title: "Prophet vs LSTM for Retail Demand Forecasting",
    description: "Comparative study presented at Data Science Colombia Meetup. Evaluates Prophet, ARIMA, and LSTM on 3 real retail use cases. LSTM shows better performance for series with multiple seasonalities but requires 10x more training time.",
    tags: ["Time Series", "Prophet", "LSTM", "Forecasting", "Retail"],
    github: "https://github.com/torodriguezt/forecasting-comparison",
  },
  {
    title: "Visual Product Search with CNNs",
    description: "Technical blog about implementing visual product search using pre-trained ResNet50 with fine-tuning. System finds similar products with 87% top-5 precision. Includes complete pipeline for feature extraction and similarity search.",
    tags: ["Computer Vision", "ResNet", "CNN", "Image Similarity", "Transfer Learning"],
    github: "https://github.com/torodriguezt/visual-product-search",
  },
  {
    title: "Interpretable ML Models for Credit Scoring",
    description: "Short paper on using SHAP and LIME to interpret credit scoring models. Compares interpretability of LightGBM vs neural networks, showing trade-offs between performance and explainability in financial context.",
    tags: ["Interpretability", "SHAP", "XAI", "Credit Scoring", "LightGBM"],
    github: "https://github.com/torodriguezt/interpretable-credit",
  },
]

export default function ProjectsPage() {
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

  const isFeatured = activeTab === "featured"

  return (
    <main className="min-h-screen bg-[#0d1117] pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#8b949e] hover:text-[#e6edf3] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-[#e6edf3] mb-4">
            <span className="text-[#8b949e]">/</span> projects
          </h1>
          <p className="text-[#8b949e] text-lg max-w-2xl">
            A collection of projects I've worked on, from data science research to 
            machine learning applications and analytics tools.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-3 mb-12 flex-wrap"
        >
          <button
            onClick={() => setActiveTab("featured")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm ${
              activeTab === "featured"
                ? "bg-[#21262d] text-[#e6edf3] border border-[#30363d]"
                : "text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22]"
            }`}
          >
            <Star className="h-4 w-4" />
            Featured Projects
          </button>
          <button
            onClick={() => setActiveTab("opensource")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm ${
              activeTab === "opensource"
                ? "bg-[#21262d] text-[#e6edf3] border border-[#30363d]"
                : "text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22]"
            }`}
          >
            <Code2 className="h-4 w-4" />
            Open Source
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm ${
              activeTab === "research"
                ? "bg-[#21262d] text-[#e6edf3] border border-[#30363d]"
                : "text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22]"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            Research Articles
          </button>
          <button
            onClick={() => setActiveTab("minor")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm ${
              activeTab === "minor"
                ? "bg-[#21262d] text-[#e6edf3] border border-[#30363d]"
                : "text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22]"
            }`}
          >
            <FileText className="h-4 w-4" />
            Minor Articles
          </button>
        </motion.div>

        {/* Projects Display */}
        {isFeatured ? (
          /* Featured Projects - Large Layout */
          <section className="mb-20">
            <div className="space-y-12">
              {getCurrentProjects().map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-[#161b22] rounded-lg border border-[#21262d] flex items-center justify-center">
                    <span className="text-[#8b949e] text-sm">Project Preview</span>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-[#e6edf3]">{project.title}</h3>
                    <p className="text-[#8b949e] leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-[#161b22] text-[#7ee787] border border-[#21262d] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#8b949e] hover:text-[#e6edf3] transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#8b949e] hover:text-[#e6edf3] transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ) : (
          /* Other Categories - Grid Layout */
          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getCurrentProjects().map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-6 bg-[#161b22] border border-[#21262d] rounded-lg hover:border-[#30363d] transition-colors group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-[#e6edf3] group-hover:text-[#7ee787] transition-colors">
                      {project.title}
                    </h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8b949e] hover:text-[#e6edf3] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-[#8b949e] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[#8b949e]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
