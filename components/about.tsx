"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Database, BarChart3, Brain, Code } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const { t } = useLanguage()
  const skills = [
    { name: "Python", icon: Code, level: 90 },
    { name: "SQL", icon: Database, level: 85 },
    { name: "Power BI", icon: BarChart3, level: 80 },
    { name: "Machine Learning", icon: Brain, level: 75 },
  ]

  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div style={{ opacity, y }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("about.title")}</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t("about.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("about.skills")}</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <skill.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-400 h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("about.education")}</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{t("about.degree1")}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t("about.degree1.place")}</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{t("about.degree2")}</h4>
                <p className="text-gray-600 dark:text-gray-300">{t("about.degree2.place")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

