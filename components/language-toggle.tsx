"use client"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 left-6 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors z-50 flex items-center justify-center"
      aria-label="Toggle language"
    >
      <Globe className="h-5 w-5 mr-2" />
      <span className="text-sm font-medium">{language === "es" ? "EN" : "ES"}</span>
    </button>
  )
}

