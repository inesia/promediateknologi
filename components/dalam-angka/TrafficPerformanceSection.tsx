'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { trafficMetrics } from '@/lib/dalamAngkaData'
import MetricCard from './MetricCard'

export default function TrafficPerformanceSection() {
  return (
    <section className="py-16 lg:py-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00AEEF]/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide">
              Traffic &amp; Search Visibility
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001A2C] mb-3">
            Performa Jangkauan Massif
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Volume kunjungan dan visibilitas organik yang membuktikan otoritas SEO jaringan
            Promedia Group di skala nasional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {trafficMetrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} variant="accent" />
          ))}
        </div>
      </div>
    </section>
  )
}
