'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function DigitalGridCanvas() {
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
    const particleCount = isMobile ? 24 : 45
    const maxDistance = isMobile ? 90 : 130

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.getBoundingClientRect().width,
      y: Math.random() * canvas.getBoundingClientRect().height,
      vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.3),
      vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.3),
      r: Math.random() * 1.5 + 1,
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
        ctx.fillStyle = 'rgba(0, 174, 239, 0.6)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const o = particles[j]
          const dx = p.x - o.x
          const dy = p.y - o.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDistance) {
            const alpha = 0.2 * (1 - dist / maxDistance)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(o.x, o.y)
            ctx.strokeStyle = `rgba(0, 174, 239, ${alpha})`
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
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      aria-hidden
    />
  )
}

export default function HeroEcosystemBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#030917]" aria-hidden>
      {/* Radial Glow Spotlights */}
      <div className="absolute -top-[10%] left-[-5%] w-[600px] h-[600px] bg-[#0072FF]/20 rounded-full blur-[140px]" />
      <div className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] bg-[#00AEEF]/15 rounded-full blur-[160px]" />
      <div className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] bg-[#8B5CF6]/15 rounded-full blur-[150px]" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12]" 
        style={{
          backgroundImage: `linear-gradient(to right, #00AEEF 1px, transparent 1px), linear-gradient(to bottom, #00AEEF 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} 
      />

      {/* Interactive Network Particle Canvas */}
      <DigitalGridCanvas />

      {/* Dark Vignette Overlay to ensure text high contrast */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(3, 9, 23, 0.4) 0%, rgba(3, 9, 23, 0.85) 70%, rgba(3, 9, 23, 0.98) 100%)'
        }}
      />
    </div>
  )
}
