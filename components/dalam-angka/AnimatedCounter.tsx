'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const spring = useSpring(0, { duration: 2.2, bounce: 0 })

  const display = useTransform(spring, (current) => {
    const formatted = current.toLocaleString('id-ID', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
    return `${prefix}${formatted}${suffix}`
  })

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  return (
    <motion.span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </motion.span>
  )
}
