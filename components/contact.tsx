"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
            Get in touch
          </h2>

          <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Interested in collaborating on AI research, statistical modeling,
            or data-driven products — I{"'"}d love to hear from you.
          </p>

          <a
            href="mailto:torodriguezt@unal.edu.co"
            className="inline-block text-gray-900 font-medium border-b border-gray-900 pb-0.5 hover:opacity-60 transition-opacity"
          >
            torodriguezt@unal.edu.co
          </a>

          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href="https://github.com/torodriguezt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/tomasrodriguezt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
