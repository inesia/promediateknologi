'use client'

import { motion } from 'framer-motion'
import { BarChart3 } from 'lucide-react'
import { ecosystemScaleMetrics } from '@/lib/dalamAngkaData'
import MetricCard from './MetricCard'

export default function DalamAngkaHero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 bg-[#001A2C] overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 174, 239, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 174, 239, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/30 mb-6">
            <BarChart3 className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide">
              Media Profile · Data Terverifikasi
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Promedia <span className="text-[#00AEEF]">Dalam Angka</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Skala ekosistem media, performa traffic, demografi audiens, dan kekuatan jaringan
            influencer — dirangkum untuk brand dan pengiklan korporat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {ecosystemScaleMetrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} variant="dark" />
          ))}
        </div>
      </div>
    </section>
  )
}
