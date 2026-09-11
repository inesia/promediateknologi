'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
}

function Counter({ value, suffix = '+', duration = 2 }: CounterProps) {
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    motionValue.set(value)
  }, [value, motionValue])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return () => unsubscribe()
  }, [spring])

  return <span>{displayValue.toLocaleString('id-ID')}{suffix}</span>
}

export default function HeroStats({ totalMitra }: { totalMitra?: number }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative py-4 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00AEEF]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#2D74B3]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Bergabung dalam Ekosistem Media Terbesar di Indonesia
          </motion.h1>

          {/* Sub-headline with Counter */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block">
              <span className="text-[#00AEEF] font-bold">
                <Counter value={totalMitra || 1000} suffix="+" duration={2} />
              </span>
            </span>
            {' '}Mitra Media telah bertransformasi bersama kami.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ scaleX: 0 }}
            animate={mounted ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
