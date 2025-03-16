"use client"
import { motion } from "framer-motion"
import { Clock, ArrowRight, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function CurrentWork() {
  const { t } = useLanguage()

  // Datos de ejemplo para proyectos actuales
  const currentProjects = [
    {
      title: "Desarrollo de material educativo para el curso de Introducción a la Inteligencia Artificial",
      description:
        "Me encuentro desarrollando el material pedagógico necesario para impartir conocimientos de inteligencia artificial a nivel pregrado desde la inteligencia artificial simbólica, predictiva y generativa",
      progress: 30,
      lastUpdate: "2 días atrás",
      repoLink: "#",
      demoLink: "#",
    },
    {
      title: "Desarrollo de test bayesiano para muestras pareadas",
      description:
        "Propuesta de test bayesiano para probar diferencia significativas en muestras pareadas desde una perspectiva bayesiana.",
      progress: 50,
      lastUpdate: "5 días atrás",
      repoLink: "#",
      demoLink: "#",
    },
  ]

  return (
    <section
      id="current-work"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("currentWork.title")}
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">{t("currentWork.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("currentWork.progress")}
                  </span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-400 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>
                    {t("currentWork.lastUpdate")}: {project.lastUpdate}
                  </span>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.repoLink}
                    className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    <span>{t("currentWork.viewRepo")}</span>
                  </a>
                  <a
                    href={project.demoLink}
                    className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    <span>{t("currentWork.viewProgress")}</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

