'use client'

import { useEffect, useRef, useState } from 'react'

function DigitalGridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    const isNarrow = window.innerWidth < 768
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Skip canvas on mobile / reduced-motion — heavy for Safari iOS main thread
    if (isCoarsePointer || isNarrow || prefersReducedMotion) return

    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0
    let frameId = 0
    let isVisible = true
    let running = false

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const particleCount = 45
    const maxDistance = 130
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * Math.max(width, 1),
      y: Math.random() * Math.max(height, 1),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 1,
    }))

    const draw = () => {
      if (!isVisible) {
        running = false
        frameId = 0
        return
      }

      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 174, 239, 0.45)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const o = particles[j]
          const dx = p.x - o.x
          const dy = p.y - o.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDistance) {
            const alpha = 0.15 * (1 - dist / maxDistance)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(o.x, o.y)
            ctx.strokeStyle = `rgba(0, 174, 239, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      frameId = requestAnimationFrame(draw)
    }

    const start = () => {
      if (running) return
      running = true
      frameId = requestAnimationFrame(draw)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible) start()
        else if (frameId) {
          cancelAnimationFrame(frameId)
          frameId = 0
          running = false
        }
      },
      { threshold: 0 }
    )
    observer.observe(canvas)
    start()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70 pointer-events-none"
      aria-hidden
    />
  )
}

export default function HeroEcosystemBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-transparent" aria-hidden>
      {/* Desktop glows only — large CSS blur freezes Safari iOS compositing */}
      <div className="hidden lg:block absolute -top-[10%] left-[-5%] w-[600px] h-[600px] bg-[#00AEEF]/20 rounded-full blur-[140px]" />
      <div className="hidden lg:block absolute top-[20%] right-[-10%] w-[700px] h-[700px] bg-[#2D74B3]/15 rounded-full blur-[160px]" />
      <div className="hidden lg:block absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] bg-[#00AEEF]/15 rounded-full blur-[150px]" />

      {/* Mobile: soft radial gradients without filter:blur */}
      <div
        className="lg:hidden absolute top-[8%] right-[-15%] w-[280px] h-[280px] rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(0,174,239,0.28) 0%, rgba(0,174,239,0) 70%)',
        }}
      />
      <div
        className="lg:hidden absolute top-[45%] left-[-20%] w-[240px] h-[240px] rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(45,116,179,0.22) 0%, rgba(45,116,179,0) 70%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.05] hidden sm:block"
        style={{
          backgroundImage: `linear-gradient(to right, #00AEEF 1px, transparent 1px), linear-gradient(to bottom, #00AEEF 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <DigitalGridCanvas />
    </div>
  )
}
