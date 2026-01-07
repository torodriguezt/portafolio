"use client"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0d1117] border-t border-[#21262d]/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#7ee787]/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <motion.div 
              className="flex items-center justify-center md:justify-start gap-2 mb-2"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-xl font-bold gradient-text">TR</span>
              <span className="text-lg font-semibold text-[#e6edf3]">Tomás Rodríguez</span>
            </motion.div>
            <p className="text-sm text-[#8b949e]">
              Data Scientist & Systems Engineer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/torodriguezt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass text-[#8b949e] hover:text-[#e6edf3] hover:border-[#30363d] transition-all duration-300"
              aria-label="GitHub"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/tomasrodriguezt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff]/30 transition-all duration-300"
              aria-label="LinkedIn"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:torodriguezt@unal.edu.co"
              className="p-3 rounded-lg glass text-[#8b949e] hover:text-[#7ee787] hover:border-[#7ee787]/30 transition-all duration-300"
              aria-label="Email"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-lg glass text-[#8b949e] hover:text-[#7ee787] hover:border-[#7ee787]/30 transition-all duration-300"
            aria-label="Back to top"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-[#21262d]/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#8b949e]">
            <p>© {currentYear} Tomás Rodríguez. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-[#f778ba] animate-pulse" /> using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

