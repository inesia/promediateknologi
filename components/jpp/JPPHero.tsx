'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Shield } from 'lucide-react'

export default function JPPHero() {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!canvasRef.current || !mounted) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Constellation particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
    }> = []

    const particleCount = 50
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const maxDistance = 150

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 174, 239, 0.6)'
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(0, 174, 239, ${0.2 * (1 - distance / maxDistance)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [mounted])

  return (
    <section className="relative min-h-screen flex items-center bg-[#001A2C] overflow-hidden pt-20">
      {/* Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/20 rounded-full border border-[#00AEEF]/30 mb-6"
            >
              <Shield className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-sm font-semibold text-[#00AEEF]">
                Advokat Hak Penerbit
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Penjaga Jurnalisme Berkualitas.
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Wadah eksklusif bagi ribuan Pemimpin Redaksi dalam ekosistem Promedia untuk menetapkan standar jurnalisme masa depan.
            </p>
          </motion.div>

          {/* Right: Digital Roundtable Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex items-center justify-center"
          >
            <DigitalRoundtable />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DigitalRoundtable() {
  return (
    <div className="relative w-full max-w-lg h-[500px]">
      {/* Central Globe */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-[#00AEEF]/30"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00AEEF]/10 to-[#2D74B3]/10 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border border-[#00AEEF]/20" />
        </div>
      </motion.div>

      {/* Connected Nodes */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * 360
        const radius = 180
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius

        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            {/* Connection Line */}
            <div
              className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-[#00AEEF]/20 to-transparent"
              style={{
                transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
                transformOrigin: 'top center',
              }}
            />

            {/* Node */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] shadow-lg shadow-[#00AEEF]/30 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white/20" />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
