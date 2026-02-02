'use client'

import { motion } from 'framer-motion'

const DARK_NAVY = '#000F1A'

const sentimentData = [
  { label: 'Positif', value: 62, color: '#22c55e' },
  { label: 'Netral', value: 28, color: '#94a3b8' },
  { label: 'Negatif', value: 10, color: '#ef4444' },
]

const trendTopics = [
  'Media Digital',
  'Ekosistem',
  'Content',
  'Analytics',
  'AI',
  'Traffic',
  'Engagement',
  'CMS',
  'Cloud',
  'Security',
]

export default function MediaIntelligence() {
  const total = sentimentData.reduce((s, d) => s + d.value, 0)

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: DARK_NAVY }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Intelligence & Monitoring
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Bukan sekadar CMS, tapi alat intelijen media dengan Issue Extraction dan Analisis Sentimen Realtime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Sentiment Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Sentiment Analysis</h3>
            <div className="flex gap-2 h-10 rounded-lg overflow-hidden">
              {sentimentData.map((d, i) => {
                const width = (d.value / total) * 100
                return (
                  <motion.div
                    key={d.label}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="h-full rounded"
                    style={{
                      backgroundColor: d.color,
                      minWidth: `${width}%`,
                    }}
                    title={`${d.label}: ${d.value}%`}
                  />
                )
              })}
            </div>
            <div className="flex justify-between mt-4 gap-4">
              {sentimentData.map((d) => (
                <div key={d.label} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-sm text-slate-400">{d.label} {d.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Word Cloud - Trend Topik */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Trend Topik</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {trendTopics.map((topic, i) => (
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/5 text-slate-300 text-sm font-medium hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/50 transition-colors cursor-default"
                  style={{
                    fontSize: `${0.75 + (i % 5) * 0.1}rem`,
                  }}
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
