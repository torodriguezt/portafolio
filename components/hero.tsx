"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
      let index = 0
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
          setIsTyping(false)
        }
      }, 80)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, delay])

  return (
    <span>
      {displayedText}
      <span 
        className={`inline-block w-[3px] h-[1em] bg-[#7ee787] ml-1 align-middle ${
          isTyping ? 'animate-pulse' : 'animate-blink'
        }`}
      />
    </span>
  )
}

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  char: string
  vx: number
  vy: number
}

function InteractiveAscii() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Dragon ASCII art
    const asciiPattern = [
      "                    +T+++++++T+++                      ",
      "                    +++|+++++++|+++|                   ",
      "                    ++++++++++++++/+                   ",
      "                    ++++++++++++++/++                  ",
      "                    +++++++++++++/++++                 ",
      "                    +++++:::iiiII/++++.                ",
      "                    IIIIIIIIIIII/Ii++++                ",
      "                    ITTTTTTTTTT/III++++.               ",
      "                    \"IIIIIIIIIIiIIII++++               ",
      "                      \"IIIIIIIIIiIIII+++.              ",
      "                        \"IIIIIIIIiIIIi+++              ",
      "                          \"IIIIIIIiIII+++              ",
      "                            \"I/\\IIIiIII++              ",
      "                             ///\\IIIiIIi+              ",
      "              .o8OOOOOOOOOOOOOo/IIIIIiIIi              ",
      "            oOOOOOOOOOOOOOOOOOOOOIIIIIiI               ",
      "           888888888888OOOOOOOOOOOOIIIII               ",
      "      o8OOOOOOOOOOOOOOO88888OOOOOOOOIIIT               ",
      "    oOOOOOOOOOOOOOOOOOOOOOOO888OOOOOb                  ",
      "   8OOOOOOOOOOOOOOOOOOOOOOOOOOO8OOOOOb                 ",
      "   OOOOOOOOOOOOOOOOOOOOOOOOOOOOO88OOOOb                ",
      "   OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO8OOOO.               ",
      "   OOOO~~~~~~~~~~~~~~~~OOOOOOOOOOOO8OOOb               ",
      "   OO~ oo8888888888888oo ~~OOOOOOOOO8OOO               ",
      "   8 oO888888888888888888oo ~~OOOOOOO8OO               ",
      "   8 OO888888888888888888888oo OOOOOO8OO               ",
      "   ~8 O8888888888888888888888888 ~OOOOOP               ",
      "     ~O88 ~888~Y88Y88P    888888>-~OOOO                ",
      "       88b ~~ .888 ~~    d88888| ( OOOO                ",
      "        88Xooo88888ooood8888888/ /XooO~                ",
      "         ~88888888888888888888| |OOX|                  ",
      "         //88888888888888888:',:OOO|                   ",
      "       ,'/OOOO888888888888~<-<OOOOO|                   ",
      "      <-<OOOOO| jFFFFFFFFF* \\ \\OOOO|                  ",
      "       \\ \\OOO/  H********** | |OOO/                   ",
      "        \\_\\O/   H*******\\*** \\ \\O/                    ",
      "                H\\*******|**  \\_V                      ",
      "                H*\\******|**                           ",
      "           __   H\\*\\*****|**                           ",
      "         _(  `-vH*\\******|**     __                    ",
      "       _l  `-  \\\\**\\*****|**  _/'  \\                  ",
      "      (  ~-_    \\\\*******|**-T    \\ |                 ",
      "       \\ \\_ _    \\)******(__/     | |>                ",
      "       |   Y ..  ,O\\******    _ / | |<_                ",
      "     ___~-'8o8OO88OX8OOOO    ~ Y  '/O8|                ",
      "   ,'   `-_OOOOOOOXX|OOOO8o.  .A  /OX/>                ",
      "  /...     \\X8OOOXX/|OOOOO|OOOOO8X\\X/ <_               ",
      " 888888b    \\XXX8X/:|OOOOO|\\8XXXXX      \\              ",
      "d88888888    |\\X8/::|8XXXX|\\IXX~  \\ d8.  \\             ",
      "888888888b   \\ \\/ ::lXXXXXl ~~ \\--_|888   \\            ",
      "Y88DR88888    |  .:\"-----\"    /_-_|~8~   |             ",
      " 888888888b   \\  :::          /_ -_|      |            ",
      " 8888GUZ888    | ::          /_ -_ |      |            ",
      "  888888888b   \\:::         /_ -_ /       [            ",
      "   888888888    |`:        /  -_ /       ]             ",
      "    88888888b     |       |     /        |             ",
      "     88888888b    [       |    (        /              ",
      "      88888888   ]        |            /               ",
      "       ~888888b  |         \\         ,'                ",
      "         ~88888  |          `.___,--'                  ",
      "           ~~88_/                                      ",
    ]

    const charSize = 9
    const spacing = 5

    // Calculate dimensions
    const maxWidth = Math.max(...asciiPattern.map(row => row.length))
    canvas.width = maxWidth * spacing
    canvas.height = asciiPattern.length * spacing * 1.4

    // Create particles from ASCII pattern
    const particles: Particle[] = []
    asciiPattern.forEach((row, y) => {
      for (let x = 0; x < row.length; x++) {
        const char = row[x]
        if (char !== " ") {
          particles.push({
            x: x * spacing,
            y: y * spacing * 1.4,
            originX: x * spacing,
            originY: y * spacing * 1.4,
            char: char,
            vx: 0,
            vy: 0,
          })
        }
      }
    })
    particlesRef.current = particles

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${charSize}px "JetBrains Mono", "Courier New", monospace`

      const mouse = mouseRef.current
      const maxDistance = 60
      const pushStrength = 8
      const friction = 0.94
      const returnStrength = 0.025

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Apply push force if mouse is close
        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          particle.vx -= Math.cos(angle) * force * pushStrength * 0.15
          particle.vy -= Math.sin(angle) * force * pushStrength * 0.15
        }

        // Apply friction
        particle.vx *= friction
        particle.vy *= friction

        // Return to origin with spring effect
        const returnDx = particle.originX - particle.x
        const returnDy = particle.originY - particle.y
        particle.vx += returnDx * returnStrength
        particle.vy += returnDy * returnStrength

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Green color palette for Dragon
        ctx.fillStyle = "#7ee787"

        ctx.fillText(particle.char, particle.x, particle.y + charSize)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 }
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cursor-default"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-20 pb-16 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Interactive ASCII Art */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center lg:justify-start"
          >
            <InteractiveAscii />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e6edf3]">
              hi, <span className="text-[#7ee787]">tomás</span> here.
              <TypewriterText text="" delay={500} />
            </h1>

            <p className="text-[#8b949e] text-base sm:text-lg leading-relaxed max-w-xl">
              I'm a software engineer focused on data-driven applications.
              I'm passionate about bridging software architecture and predictive modeling, turning complex data into scalable, strategic solutions.
              Some of my main interest are computer vision, NLP, Bayesian modelling and cloud computing. 
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#7ee787] text-[#7ee787] rounded-md hover:bg-[#7ee787]/10 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Say hi!
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

