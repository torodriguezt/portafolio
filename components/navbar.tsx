"use client"

import { useState, useEffect } from "react"
import { Menu, X, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home", isPage: true },
    { href: "#about", label: "About", isPage: false },
    { href: "#experience", label: "Experience", isPage: false },
    { href: "/projects", label: "Projects", isPage: true },
    { href: "/blog", label: "Blog", isPage: true },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#0d1117]/80 backdrop-blur-xl border-b border-[#21262d]/50 shadow-lg shadow-black/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
          >
            <Link href="/" className="group flex items-center gap-2">
              <span className="text-lg font-bold gradient-text">TR</span>
              <span className="text-lg font-semibold text-[#e6edf3] group-hover:text-[#7ee787] transition-colors">
                Tomás Rodríguez
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link, index) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-lg bg-[#7ee787]/0 group-hover:bg-[#7ee787]/10 transition-colors duration-300"></span>
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-lg bg-[#7ee787]/0 group-hover:bg-[#7ee787]/10 transition-colors duration-300"></span>
                </a>
              )
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-2">
            <motion.a
              href="mailto:tomasrodriguezt@email.com"
              className="p-2 rounded-lg text-[#8b949e] hover:text-[#7ee787] hover:bg-[#7ee787]/10 transition-all duration-300"
              aria-label="Email"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/torodriguezt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d] transition-all duration-300"
              aria-label="GitHub"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/tomasrodriguezt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#58a6ff]/10 transition-all duration-300"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d] transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0d1117]/95 backdrop-blur-xl border-t border-[#21262d]/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                link.isPage ? (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 rounded-lg text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d] transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="block px-4 py-3 rounded-lg text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d] transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                )
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 pt-4 mt-4 border-t border-[#21262d]"
              >
                <a href="mailto:tomasrodriguezt@email.com" className="p-3 rounded-lg text-[#8b949e] hover:text-[#7ee787] hover:bg-[#7ee787]/10 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://github.com/torodriguezt" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#21262d] transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/tomasrodriguezt" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#58a6ff]/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

