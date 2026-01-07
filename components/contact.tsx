"use client"
import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Send, Sparkles } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0d1117] bg-pattern relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent"></div>
      <div className="absolute -top-40 right-20 w-96 h-96 bg-[#7ee787]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 left-20 w-80 h-80 bg-[#58a6ff]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[#e6edf3] flex items-center gap-2">
            <span className="text-[#7ee787] font-mono">//</span>
            <span className="gradient-text">contact</span>
            <span className="flex-1 h-px bg-gradient-to-r from-[#21262d] to-transparent ml-4"></span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Text and info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass rounded-xl p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#7ee787]" />
                <h3 className="text-lg font-semibold text-[#e6edf3]">Let's work together</h3>
              </div>
              
              <p className="text-[#8b949e] text-lg mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, collaborations, 
                or just having a chat about <span className="text-[#7ee787]">data science</span> and{" "}
                <span className="text-[#58a6ff]">technology</span>.
              </p>

              <div className="space-y-4 mb-8">
                <motion.a
                  href="mailto:torodriguezt@unal.edu.co"
                  className="flex items-center gap-4 text-[#8b949e] hover:text-[#7ee787] transition-all duration-300 group p-3 rounded-lg hover:bg-[#7ee787]/5"
                  whileHover={{ x: 4 }}
                >
                  <div className="p-2 rounded-lg bg-[#7ee787]/10 group-hover:bg-[#7ee787]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#7ee787]" />
                  </div>
                  <span className="font-medium">torodriguezt@unal.edu.co</span>
                </motion.a>
                
                <motion.div 
                  className="flex items-center gap-4 text-[#8b949e] p-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-[#58a6ff]/10">
                    <MapPin className="w-5 h-5 text-[#58a6ff]" />
                  </div>
                  <span>Medellín, Colombia</span>
                </motion.div>
              </div>

              {/* Social links */}
              <motion.div 
                className="flex gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <motion.a
                  href="https://github.com/torodriguezt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 glass rounded-lg text-[#8b949e] hover:text-[#e6edf3] hover:border-[#30363d] transition-all duration-300 group"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-5 h-5 group-hover:text-[#7ee787] transition-colors" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/tomasrodriguezt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 glass rounded-lg text-[#8b949e] hover:text-[#e6edf3] hover:border-[#30363d] transition-all duration-300 group"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-5 h-5 group-hover:text-[#58a6ff] transition-colors" />
                  <span>LinkedIn</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative mb-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7ee787]/20 to-[#58a6ff]/20 rounded-full blur-2xl"></div>
                <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#7ee787]/10 to-[#58a6ff]/10 border border-[#30363d] flex items-center justify-center">
                  <Send className="w-12 h-12 text-[#7ee787]" />
                </div>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">
                Ready to start a project?
              </h3>
              <p className="text-[#8b949e] mb-8 max-w-sm mx-auto">
                Drop me a message and let's create something amazing together.
              </p>
              
              <motion.a
                href="mailto:torodriguezt@unal.edu.co"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7ee787] to-[#58a6ff] text-[#0d1117] font-semibold rounded-xl overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Say hi!
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#58a6ff] to-[#a371f7]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

