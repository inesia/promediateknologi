'use client'

import { motion } from 'framer-motion'
import type { ScaleMetric } from '@/lib/dalamAngkaData'
import AnimatedCounter from './AnimatedCounter'

type MetricCardProps = {
  metric: ScaleMetric
  index: number
  variant?: 'light' | 'dark' | 'accent'
}

export default function MetricCard({ metric, index, variant = 'light' }: MetricCardProps) {
  const Icon = metric.icon

  const styles = {
    light: 'bg-white border-slate-200 shadow-sm hover:shadow-md',
    dark: 'bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10',
    accent: 'bg-gradient-to-br from-[#00AEEF]/5 to-[#2D74B3]/5 border-[#00AEEF]/20 hover:border-[#00AEEF]/40',
  }

  const textPrimary = variant === 'dark' ? 'text-white' : 'text-[#001A2C]'
  const textMuted = variant === 'dark' ? 'text-slate-300' : 'text-slate-500'
  const iconWrap =
    variant === 'dark'
      ? 'bg-[#00AEEF]/20 text-[#00AEEF]'
      : 'bg-[#00AEEF]/10 text-[#00AEEF]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`rounded-2xl border p-6 lg:p-7 transition-all duration-300 ${styles[variant]}`}
    >
      <div className={`inline-flex w-11 h-11 items-center justify-center rounded-xl mb-4 ${iconWrap}`}>
        <Icon className="w-5 h-5" />
      </div>
      <p className={`text-3xl sm:text-4xl font-black leading-none mb-2 ${textPrimary}`}>
        <AnimatedCounter
          value={metric.value}
          suffix={metric.suffix}
          prefix={metric.prefix}
          decimals={metric.decimals ?? 0}
        />
      </p>
      <p className={`text-sm font-bold leading-snug mb-1 ${textPrimary}`}>{metric.label}</p>
      {metric.sublabel && (
        <p className={`text-xs leading-relaxed ${textMuted}`}>{metric.sublabel}</p>
      )}
    </motion.div>
  )
}
