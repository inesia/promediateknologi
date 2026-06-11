'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface WaveProps {
  className?: string
  pathColor: string
  duration?: number
  delay?: number
  reverse?: boolean
}

function Wave({ className = '', pathColor, duration = 20, delay = 0, reverse = false }: WaveProps) {
  const basePath =
    'M0,420 C280,280 460,560 720,420 C980,280 1160,560 1440,420 L1440,800 L0,800 Z'

  return (
    <motion.svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 1440 800"
      preserveAspectRatio="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay }}
      aria-hidden
    >
      <motion.path
        d={basePath}
        fill={pathColor}
        initial={{ d: basePath }}
        animate={{
          d: [
            basePath,
            'M0,390 C280,520 460,300 720,390 C980,520 1160,300 1440,390 L1440,800 L0,800 Z',
            'M0,450 C280,320 460,580 720,450 C980,320 1160,580 1440,450 L1440,800 L0,800 Z',
            basePath,
          ],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
          direction: reverse ? 'reverse' : 'normal',
        }}
      />
    </motion.svg>
  )
}

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 18 : 32
    const maxDistance = isMobile ? 100 : 140

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.getBoundingClientRect().width,
      y: Math.random() * canvas.getBoundingClientRect().height,
      vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.25),
      vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.25),
      r: Math.random() * 1.2 + 1,
    }))

    let frameId = 0

    const draw = () => {
      const w = canvas.getBoundingClientRect().width
      const h = canvas.getBoundingClientRect().height
      ctx.clearRect(0, 0, w, h)

      particles.forEach((p, i) => {
        if (!prefersReducedMotion) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0) p.x = w
          if (p.x > w) p.x = 0
          if (p.y < 0) p.y = h
          if (p.y > h) p.y = 0
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 174, 239, 0.25)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const o = particles[j]
          const dx = p.x - o.x
          const dy = p.y - o.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDistance) {
            const alpha = 0.12 * (1 - dist / maxDistance)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(o.x, o.y)
            ctx.strokeStyle = `rgba(45, 116, 179, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      })

      frameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
    }
  }, [mounted])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-[0.70] sm:opacity-[0.80]"
      aria-hidden
    />
  )
}

function DotPattern() {
  return (
    <div className="absolute inset-0 opacity-50">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#00AEEF" opacity="0.3" />
            <circle cx="20" cy="20" r="1" fill="#2D74B3" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  )
}

function FloatingGeometry() {
  const shapes = [
    { type: 'circle', size: 60, x: '10%', y: '15%', delay: 0, duration: 20 },
    { type: 'square', size: 40, x: '85%', y: '25%', delay: 2, duration: 25 },
    { type: 'triangle', size: 50, x: '15%', y: '70%', delay: 4, duration: 22 },
    { type: 'circle', size: 35, x: '90%', y: '65%', delay: 3, duration: 18 },
    { type: 'square', size: 45, x: '8%', y: '45%', delay: 1, duration: 24 },
  ]

  return (
    <div className="absolute inset-0 hidden md:block">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.18, 0.18, 0],
            scale: [0.8, 1, 1, 0.8],
            rotate: [0, 180, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'circle' && (
            <div className="w-full h-full rounded-full border-2 border-[#00AEEF]" />
          )}
          {shape.type === 'square' && (
            <div className="w-full h-full rounded-lg border-2 border-[#2D74B3]" />
          )}
          {shape.type === 'triangle' && (
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,10 90,90 10,90" fill="none" stroke="#00AEEF" strokeWidth="2" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default function HeroEcosystemBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Dot pattern background */}
      <DotPattern />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[#00AEEF]/8 rounded-full blur-3xl ambient-glow" />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#2D74B3]/8 rounded-full blur-3xl ambient-glow"
        style={{ animationDelay: '2s' }}
      />

      {/* Floating geometric shapes */}
      <FloatingGeometry />

      {/* Animated waves */}
      <Wave pathColor="url(#hero-gradient1)" duration={28} className="opacity-[0.38] sm:opacity-[0.45]" />
      <Wave
        pathColor="url(#hero-gradient2)"
        duration={36}
        delay={1}
        reverse
        className="opacity-[0.30] sm:opacity-[0.38]"
      />
      <Wave
        pathColor="url(#hero-gradient3)"
        duration={48}
        delay={2}
        className="opacity-[0.22] sm:opacity-[0.28] translate-y-8"
      />

      {/* Network nodes & edges */}
      <NetworkCanvas />

      {/* Vignette — area tengah lebih bersih untuk teks */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 42%, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.38) 45%, rgba(255,255,255,0.05) 75%, transparent 100%)',
        }}
      />

      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="hero-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#2D74B3" stopOpacity="0.40" />
            <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.50" />
          </linearGradient>
          <linearGradient id="hero-gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2D74B3" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.38" />
          </linearGradient>
          <linearGradient id="hero-gradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#2D74B3" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.32" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
