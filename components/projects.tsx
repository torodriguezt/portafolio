"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const projects = [
  {
    title: "Comercio Electrónico",
    desc: "Creación de modelos de series de tiempo, visión artificial y recomendación de productos para automatizar el comercio electrónico.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "Tensorflow", "Matplotlib", "Digital Ocean"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Procesamiento de Lenguaje Natural para noticias",
    desc: "Utilizando modelos basados en transformers se desarrollaron modelos que permitieron clasificar noticias según su contenido, resumirlas y extraer los temas principales de las noticias.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "NLP", "Hugging Face"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Predicción de la contaminación España",
    desc: "Creación de modelo espacial bayesiano para la predicción de la contaminación en Espana.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["R", "INLA", "Shiny"],
    demoLink: "#",
    codeLink: "#",
  },
]

export default function Projects() {
  const { t } = useLanguage()

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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
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
                  src={project.image || "/placeholder.svg"}
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

