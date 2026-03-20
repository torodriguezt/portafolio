"use client"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const testimonials = [
  {
    content:
      "Tomás demostró una capacidad excepcional para extraer insights valiosos de nuestros datos. Su trabajo transformó nuestra estrategia de marketing digital.",
    author: "María González",
    position: "Directora de Marketing, Empresa ABC",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    content:
      "Trabajar con Tomás fue una experiencia increíble. Su conocimiento técnico y capacidad para comunicar conceptos complejos de manera sencilla marcaron la diferencia en nuestro proyecto.",
    author: "Carlos Martínez",
    position: "CTO, Startup XYZ",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    content:
      "La implementación de modelos predictivos desarrollados por Tomás nos permitió anticipar tendencias del mercado y optimizar nuestro inventario, generando un ahorro significativo.",
    author: "Laura Sánchez",
    position: "Gerente de Operaciones, Retail Corp",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("testimonials.title")}
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">{t("testimonials.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-blue-100 dark:text-blue-900/30" />
              <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${testimonial.image || '/placeholder.svg'}`}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

