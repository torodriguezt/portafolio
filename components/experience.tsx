"use client"
import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      company: "Impossible Code",
      fullName: "Impossible Code",
      title: "Software Engineer",
      period: "Nov 2025 – Present",
      points: [
        "Designed and implemented database schema updates, creating new relational tables that integrate seamlessly with existing clinical data models.",
        "Implemented concurrency control mechanisms to prevent race conditions and ensure data integrity in multi-user clinical workflows.",
        "Developed a disease ontology to support structured classification and interpretation of cancer samples.",
        "Built and maintained both frontend and backend components for clinical software used by medical teams to register and manage cancer samples.",
        "Architected the system for integration with external AI-based software responsible for protein-level cancer analysis."
      ]
    },

    {
      company: "Universidad Nacional de Colombia",
      fullName: "Universidad Nacional de Colombia",
      title: "Research Assistant",
      period: "JAN 2023 - PRESENT",
      points: [
        "Implementation of spatial, temporal, and quantile regression statistical models from a Bayesian perspective",
        "Predicting pollution levels in soil and air using advanced statistical modeling techniques",
        "Analyzing academic performance in the Saber 11 test in the Antioquia department",
        "Collaborating with interdisciplinary teams on data-driven research projects"
      ]
    },
    {
  company: "Universidad Nacional de Colombia",
  fullName: "Universidad Nacional de Colombia",
  title: "Teaching Assistant — Introduction to Artificial Intelligence",
  period: "March 2025 – July 2025",
  points: [
    "Designed and developed teaching materials and programming assignments for an undergraduate Artificial Intelligence course with over 90 students, using Python as the primary language.",
    "Covered core topics in Machine Learning and Deep Learning, including tree-based algorithms, neural networks, CNNs, RNNs, and Transformers.",
    "Introduced students to generative models, including Autoencoders, Variational Autoencoders (VAEs), and Generative Adversarial Networks (GANs).",
    "Provided academic support through labs, code reviews, and conceptual explanations, helping students bridge theory and practical implementation."
  ]
}
  ]

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#161b22] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#58a6ff]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#7ee787]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[#e6edf3] flex items-center gap-2">
            <span className="text-[#8b949e]">/</span> experience
            <span className="flex-1 h-px bg-[#21262d] ml-4"></span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="border-l-2 border-[#7ee787] pl-8 py-2"
            >
              <h3 className="text-xl font-semibold text-[#e6edf3] mb-1">
                {exp.title} @{" "}
                <span className="text-[#7ee787]">{exp.fullName}</span>
              </h3>
              <p className="text-[#8b949e] text-sm mb-6">{exp.period}</p>

              <div className="space-y-3">
                {exp.points.map((point, pointIndex) => (
                  <motion.div
                    key={pointIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + pointIndex * 0.1 }}
                    className="flex gap-3 text-[#8b949e] leading-relaxed"
                  >
                    <span className="text-[#7ee787] mt-1 flex-shrink-0">&gt;</span>
                    <p>{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

