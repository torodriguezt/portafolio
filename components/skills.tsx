"use client"
import { motion } from "framer-motion"
import { Code, Database, BarChart3, Brain, LineChart, PieChart, Sigma, GitBranch, Terminal, Cpu } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      name: t("skills.programming"),
      skills: [
        { name: "Python", icon: Code, level: 95 },
        { name: "R", icon: Code, level: 90 },
        { name: "SQL", icon: Database, level: 90 }
      ],
    },
    {
      name: t("skills.visualization"),
      skills: [
        { name: "Power BI", icon: BarChart3, level: 80 },
        { name: "Tableau", icon: PieChart, level: 70 },
        { name: "Matplotlib", icon: LineChart, level: 85 },
        { name: "Seaborn", icon: LineChart, level: 80 },
      ],
    },
    {
      name: t("skills.ml"),
      skills: [
        { name: "Scikit-learn", icon: Brain, level: 95 },
        { name: "TensorFlow", icon: Brain, level: 95 },
        { name: "Estadística", icon: Sigma, level: 95 },
        { name: "NLP", icon: Brain, level: 85 },
      ],
    },
    {
      name: t("skills.tools"),
      skills: [
        { name: "Git", icon: GitBranch, level: 90 },
        { name: "Docker", icon: Terminal, level: 80 },
        { name: "Linux", icon: Terminal, level: 75 },
        { name: "AWS", icon: Cpu, level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("skills.title")}</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">{t("skills.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
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
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-400 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

