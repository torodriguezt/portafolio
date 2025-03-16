"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Definir los idiomas disponibles
export type Language = "es" | "en"

// Definir la interfaz del contexto
interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Crear el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traducciones
const translations = {
  es: {
    // Metadata
    language: "es",

    // Navbar
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.events": "Eventos",
    "nav.currentWork": "Proyectos Actuales",
    "nav.contact": "Contacto",

    // Hero
    "hero.profession": "Científico de Datos",
    "hero.title": "Hola, soy",
    "hero.subtitle":
      "Científico de Datos con base en estadística y programación, enfocado en convertir datos en soluciones estratégicas. Apasionado por aplicaciones avanzadas como lenguaje natural, visión por computadora y modelos predictivos.",
    "hero.contact": "Contactar",
    "hero.projects": "Ver proyectos",
    "hero.downloadCV": "Descargar CV",

    // About
    "about.title": "Sobre mí",
    "about.description":
      "Especialista en ciencia de datos y predicción aplicado en problemas como análisis de ventas, NLP, segmentación de clientes y predicción de contaminación. Manejo Python, SQL, Power BI, AWS y machine learning.",
    "about.skills": "Mis habilidades",
    "about.education": "Educación",
    "about.degree1": "Pregrado en Ingeniería de Sistemas e Informática",
    "about.degree1.place": "Universidad Nacional de Colombia, 2021-2025",
    "about.degree2": "Pregrado en Estadística",
    "about.degree2.place": "Universidad Nacional de Colombia, 2022-2026",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Una selección de mis proyectos más recientes en el campo de la ciencia de datos y análisis.",
    "projects.demo": "Demo",
    "projects.code": "Código",

    // Experience
    "experience.title": "Experiencia Profesional",
    "experience.subtitle": "Mi trayectoria profesional en el campo de la ciencia de datos y análisis.",

    // Skills
    "skills.title": "Mis Habilidades",
    "skills.subtitle": "Tecnologías y herramientas que domino para convertir datos en soluciones.",
    "skills.programming": "Lenguajes de Programación",
    "skills.visualization": "Visualización de Datos",
    "skills.ml": "Machine Learning",
    "skills.tools": "Herramientas",

    // Events
    "events.title": "Participación en Eventos",
    "events.subtitle": "Conferencias, hackathons y meetups en los que he participado como ponente o asistente.",
    "events.viewDetails": "Ver detalles",

    // Current Work
    "currentWork.title": "Proyectos Actuales",
    "currentWork.subtitle": "Proyectos en desarrollo y colaboraciones en curso.",
    "currentWork.progress": "Progreso",
    "currentWork.lastUpdate": "Última actualización",
    "currentWork.viewRepo": "Ver repositorio",
    "currentWork.viewProgress": "Ver progreso",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle":
      "¿Te interesa colaborar conmigo? ¡Conversemos! Estoy abierto a nuevas oportunidades y proyectos.",
    "contact.info": "Información de contacto",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.socialMedia": "Redes Sociales",
    "contact.emailMe": "Contactar por email",
    "contact.viewFullCV": "Ver Currículum Completo",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos de uso",
  },
  en: {
    // Metadata
    language: "en",

    // Navbar
    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.events": "Events",
    "nav.currentWork": "Current Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.profession": "Data Scientist",
    "hero.title": "Hello, I am",
    "hero.subtitle":
      "Data Scientist passionate about transforming data into strategic decisions through analysis, visualizations, and machine learning.",
    "hero.contact": "Contact me",
    "hero.projects": "View projects",
    "hero.downloadCV": "Download CV",

    // About
    "about.title": "About me",
    "about.description":
      "With experience in business analytics, report automation, and data science, I specialize in converting large volumes of data into value for organizations. I master Python, SQL, Power BI, and machine learning techniques.",
    "about.skills": "My skills",
    "about.education": "Education",
    "about.degree1": "Bachelor in Systems Engineering",
    "about.degree1.place": "University of Antioquia, 2016-2020",
    "about.degree2": "Bachelor in Data Science",
    "about.degree2.place": "EAFIT University, 2018-2022",

    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "A selection of my most recent projects in the field of data science and analysis.",
    "projects.demo": "Demo",
    "projects.code": "Code",

    // Experience
    "experience.title": "Professional Experience",
    "experience.subtitle": "My professional journey in the field of data science and analysis.",

    // Skills
    "skills.title": "My Skills",
    "skills.subtitle": "Technologies and tools I master to convert data into solutions.",
    "skills.programming": "Programming Languages",
    "skills.visualization": "Data Visualization",
    "skills.ml": "Machine Learning",
    "skills.tools": "Tools",

    // Events
    "events.title": "Event Participation",
    "events.subtitle": "Conferences, hackathons, and meetups where I've participated as a speaker or attendee.",
    "events.viewDetails": "View details",

    // Current Work
    "currentWork.title": "Current Projects",
    "currentWork.subtitle": "Projects under development and ongoing collaborations.",
    "currentWork.progress": "Progress",
    "currentWork.lastUpdate": "Last update",
    "currentWork.viewRepo": "View repository",
    "currentWork.viewProgress": "View progress",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Interested in collaborating with me? Let's talk! I'm open to new opportunities and projects.",
    "contact.info": "Contact information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.socialMedia": "Social Media",
    "contact.emailMe": "Contact by email",
    "contact.viewFullCV": "View Full Resume",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
  },
}

// Proveedor del contexto
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("es")

  // Cargar el idioma desde localStorage al iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Guardar el idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Función para obtener traducciones
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Hook personalizado para usar el contexto
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

