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
        d="M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
        fill={pathColor}
        initial={{ d: 'M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z' }}
        animate={{
          d: [
            'M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z',
            'M0,380 C320,480 420,280 720,380 C1020,480 1120,280 1440,380 L1440,800 L0,800 Z',
            'M0,420 C320,320 420,520 720,420 C1020,320 1120,520 1440,420 L1440,800 L0,800 Z',
            'M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z',
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
        ctx.fillStyle = 'rgba(0, 174, 239, 0.14)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const o = particles[j]
          const dx = p.x - o.x
          const dy = p.y - o.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDistance) {
            const alpha = 0.06 * (1 - dist / maxDistance)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(o.x, o.y)
            ctx.strokeStyle = `rgba(45, 116, 179, ${alpha})`
            ctx.lineWidth = 0.6
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
      className="absolute inset-0 w-full h-full opacity-[0.55] sm:opacity-[0.65]"
      aria-hidden
    />
  )
}

export default function HeroEcosystemBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[#00AEEF]/5 rounded-full blur-3xl ambient-glow" />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#2D74B3]/5 rounded-full blur-3xl ambient-glow"
        style={{ animationDelay: '2s' }}
      />

      {/* Animated waves */}
      <Wave pathColor="url(#hero-gradient1)" duration={32} className="opacity-[0.12] sm:opacity-[0.18]" />
      <Wave
        pathColor="url(#hero-gradient2)"
        duration={42}
        delay={1.5}
        reverse
        className="opacity-[0.08] sm:opacity-[0.14]"
      />

      {/* Network nodes & edges */}
      <NetworkCanvas />

      {/* Vignette — area tengah lebih bersih untuk teks */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 42%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.15) 75%, transparent 100%)',
        }}
      />

      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="hero-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#2D74B3" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="hero-gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2D74B3" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.03" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
