"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest font-mono mb-16">
            About
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Text */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                I work at the intersection of Bayesian statistics and machine learning.
                Currently a Software Engineer at{" "}
                <strong className="text-gray-900 font-medium">Impossible Code</strong>,
                where I build clinical software for cancer sample analysis
                and architect its integration with AI-based systems.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                I{"'"}m pursuing a dual degree in{" "}
                <strong className="text-gray-900 font-medium">Systems Engineering</strong> and{" "}
                <strong className="text-gray-900 font-medium">Statistics</strong> at
                Universidad Nacional de Colombia, where my research focuses
                on spatio-temporal Bayesian models applied to environmental
                science, public health, and education.
              </p>

              <p className="text-gray-500 leading-relaxed">
                My interests span machine learning, deep learning, Bayesian
                statistics, and spatio-temporal modeling. Outside of work,
                I watch movies, read books, and practice photography.
              </p>
            </div>

            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/perfil.jpg`}
                  alt="Tomás Rodríguez"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-100">
            <div>
              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest font-mono mb-4">
                Bayesian Statistics
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                R, C++, MCMC, EM, Variational Bayes, Spatio-temporal Models, INLA
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest font-mono mb-4">
                Machine Learning & DL
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Python, BERT, LSTM, Diffusion Models, Computer Vision, NLP
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest font-mono mb-4">
                Software Engineering
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                TypeScript, SQL, Docker, Next.js, Git, REST APIs
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
