"use client"
import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Events() {
  const { t } = useLanguage()

  // Datos de ejemplo para eventos
  const events = [
    {
      title: "Conferencia Internacional de Estadística Bayesiana",
      role: "Participante",
      topic: "Modelo espacial bayesiano para la predicción de contaminación en el suelo de España",
      date: "Julia 2024",
      location: "Venecia, Italia",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Datathon de la ONU para el turismo sostenible en Medellín",
      role: "Participante",
      topic: "Desarrollo de agente que recomienda destinos turísticos sostenibles",
      date: "Noviembre 2024",
      location: "Medellín, Colombia",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Coloquio Nacional de Estadística",
      role: "Participante",
      topic: "Procesos Gaussianos aplicados al microclima del Valle de Aburrá",
      date: "Noviembre 2023",
      location: "Medellín, Colombia",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  return (
    <section id="events" className="py-20 md:py-28 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("events.title")}</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">{t("events.subtitle")}</p>
        </motion.div>

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full overflow-hidden relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                      {event.role}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{event.topic}</p>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      {t("events.viewDetails")}
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

