"use client"

import { motion } from "framer-motion"

const awards = [
  {
    title: "Best Award — ISBA 2024",
    context: "International Society for Bayesian Analysis World Meeting",
    year: "2024",
  },
  {
    title: "First Place — Hackathon UdeA × Source Meridian",
    context: "Universidad de Antioquia",
    year: "2024",
  },
]

const conferences: {
  year: number
  events: { name: string; type: string; topic: string; location: string }[]
}[] = [
  {
    year: 2025,
    events: [
      {
        name: "METMA XI",
        type: "Talk",
        topic: "Spatio-temporal modelling of gender-based violence in Antioquia",
        location: "Barranquilla, Colombia",
      },
      {
        name: "Congreso Nacional de Estadística",
        type: "Talk",
        topic: "Algorithm for Bayesian quantile regression under hierarchical data",
        location: "Bogotá, Colombia",
      },
      {
        name: "Congreso Nacional de Estadística",
        type: "Talk",
        topic: "Analytics tools for the study of gender-based violence in Colombia",
        location: "Bogotá, Colombia",
      },
    ],
  },
  {
    year: 2024,
    events: [
      {
        name: "ISBA World Meeting",
        type: "Poster",
        topic: "Modeling geochemical risk in the Huelva Province",
        location: "Venice, Italy",
      },
      {
        name: "ISBA World Meeting",
        type: "Poster",
        topic: "Sensitivity analysis and application of Bayesian quantile regression to Prueba Saber 11 in Antioquia",
        location: "Venice, Italy",
      },
    ],
  },
  {
    year: 2023,
    events: [
      {
        name: "Coloquio Nacional de Estadística",
        type: "Poster",
        topic: "Modelling the microclimate with Gaussian processes",
        location: "Colombia",
      },
    ],
  },
]

export default function Events() {
  return (
    <section id="recognition" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest font-mono mb-16">
            Recognition
          </h2>
        </motion.div>

        <div className="space-y-10 mb-24">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-medium text-gray-900">{award.title}</h3>
                <span className="text-sm text-gray-400 font-mono">{award.year}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{award.context}</p>
            </motion.div>
          ))}
        </div>

        {/* Conferences */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest font-mono mb-16">
            Conferences
          </h2>
        </motion.div>

        <div className="space-y-14">
          {conferences.map((group) => (
            <motion.div
              key={group.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">{group.year}</h3>

              <div className="space-y-8">
                {group.events.map((event, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <h4 className="text-gray-900 font-medium">{event.name}</h4>
                      <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{event.topic}</p>
                    <p className="text-xs text-gray-400 font-mono mt-1">{event.location}</p>
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
