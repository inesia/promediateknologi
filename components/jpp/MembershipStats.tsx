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

export default function MembershipStats() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Big Number */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-8xl sm:text-9xl lg:text-[12rem] font-light text-[#001A2C] tracking-tight" style={{ fontFamily: 'system-ui, sans-serif' }}>
              <Counter value={1000} suffix="+" duration={2} />
            </span>
          </motion.div>

          {/* Label */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001A2C] mb-4">
            Pemimpin
          </h3>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-slate-600 mb-8">
            Bersatu untuk ekosistem media yang lebih baik.
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
