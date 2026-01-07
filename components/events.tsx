"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Events() {
  const [expandedYears, setExpandedYears] = useState<Record<number, boolean>>({
    2025: false,
    2024: false,
    2023: false,
  })

  const toggleYear = (year: number) => {
    setExpandedYears(prev => ({ ...prev, [year]: !prev[year] }))
  }

  const eventsByYear = {
    2025: [
      {
        title: "AI & Machine Learning Conference 2025",
        role: "Speaker",
        topic: "Advances in Bayesian Deep Learning",
        date: "January 2025",
        location: "Barcelona, Spain",
      },
    ],
    2024: [
      {
        title: "International Conference on Bayesian Statistics",
        role: "Speaker",
        topic: "Bayesian spatial model for soil pollution prediction in Spain",
        date: "July 2024",
        location: "Venice, Italy",
      },
      {
        title: "UN Datathon for Sustainable Tourism",
        role: "Participant",
        topic: "AI agent recommending sustainable tourism destinations",
        date: "November 2024",
        location: "Medellín, Colombia",
      },
      {
        title: "Data Science Summit 2024",
        role: "Participant",
        topic: "Deep Learning applications in environmental modeling",
        date: "March 2024",
        location: "Madrid, Spain",
      },
    ],
    2023: [
      {
        title: "National Statistics Colloquium",
        role: "Speaker",
        topic: "Gaussian Processes applied to Valle de Aburrá microclimate",
        date: "November 2023",
        location: "Medellín, Colombia",
      },
      {
        title: "Python Conference Colombia",
        role: "Participant",
        topic: "Statistical modeling with Python and R",
        date: "June 2023",
        location: "Bogotá, Colombia",
      },
    ],
  }

  return (
    <section id="events" className="py-20 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-4">
            Events & Conferences
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#7ee787] to-[#39d353] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-[#8b949e]">
            Conferences, workshops, and events where I've shared knowledge and collaborated with the community
          </p>
        </motion.div>

        <div className="space-y-6">
          {Object.entries(eventsByYear).sort(([a], [b]) => Number(b) - Number(a)).map(([year, events], yearIndex) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
              className="bg-[#161b22] rounded-lg border border-[#21262d] overflow-hidden"
            >
              {/* Year Header - Collapsible */}
              <button
                onClick={() => toggleYear(Number(year))}
                className="w-full flex items-center justify-between p-5 hover:bg-[#21262d]/50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-[#e6edf3]">{year}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-[#8b949e] transition-transform duration-300 ${
                    expandedYears[Number(year)] ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Events Grid */}
              <AnimatePresence>
                {expandedYears[Number(year)] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 gap-4 p-5 pt-0">
                      {events.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-[#0d1117] rounded-lg border border-[#21262d] p-5 hover:border-[#7ee787]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#7ee787]/5"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#7ee787]/10 text-[#7ee787] border border-[#7ee787]/20">
                              {event.role}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-[#e6edf3] mb-2">
                            {event.title}
                          </h4>

                          <p className="text-sm text-[#8b949e] mb-4 line-clamp-2">
                            {event.topic}
                          </p>

                          <div className="space-y-2">
                            <div className="flex items-center text-xs text-[#8b949e]">
                              <Calendar className="h-3.5 w-3.5 mr-2 text-[#7ee787]" />
                              <span>{event.date}</span>
                            </div>

                            <div className="flex items-center text-xs text-[#8b949e]">
                              <MapPin className="h-3.5 w-3.5 mr-2 text-[#7ee787]" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

