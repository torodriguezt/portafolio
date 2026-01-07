"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function About() {
  const technologies = [
    "Python",
    "R",
    "Typescript",
    "SQL",
    "React.js",
    "Vue.js",
    "C++",
    "TensorFlow",
    "Javascript ES6+",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "Next.js",
    "Docker",
    "Git & GitHub",
    "AWS"
  ]

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#0d1117]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#e6edf3] flex items-center gap-2 mb-12">
            <span className="text-[#8b949e]">/</span> about me
            <span className="flex-1 h-px bg-[#21262d] ml-4"></span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text content */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[#8b949e] leading-relaxed"
              >
                I am currently a <span className="font-semibold text-[#e6edf3]">Software Engineer</span> at{" "}
                <span className="text-[#7ee787] font-semibold">Impossible Code</span>, 
                where I design and build the software architecture that enables clinicians to 
                register, process, and analyze cancer samples.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#8b949e] leading-relaxed"
              >
                At the same time, I am pursuing a dual degree in{" "}
                <span className="font-semibold text-[#e6edf3]">Systems Engineering</span> and{" "}
                <span className="font-semibold text-[#e6edf3]">Statistics</span> at{" "}
                <span className="text-[#7ee787] font-semibold">Universidad Nacional de Colombia</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-[#8b949e] leading-relaxed"
              >
              I'm passionate about machine learning, deep learning, computer vision, and about transforming complex
              data into actionable insights through well-designed software systems.
              I enjoy building tools that help people make better, data-informed decisions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-4"
              >
                <p className="text-[#8b949e] leading-relaxed mb-6">
                  Outside of work, I enjoy to watch movies, read books, and practice my photography.
                </p>

                <div>
                  <p className="text-[#e6edf3] mb-4">Here are some technologies I have been working with:</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                        className="flex items-center gap-2 text-[#8b949e]"
                      >
                        <span className="text-[#7ee787]">&gt;</span>
                        <span>{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-lg overflow-hidden">
                <img
                  src="/perfil.jpg"
                  alt="Tomás Rodríguez"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

