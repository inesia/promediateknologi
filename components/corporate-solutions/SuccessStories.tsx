'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, Newspaper } from 'lucide-react'

const cases = [
  {
    id: 'crisis',
    tag: 'Crisis Handling',
    title: 'Counter Narrative Hoaks Galon Palsu',
    client: 'Le Minerale',
    description: 'Penanganan krisis naratif hoaks galon palsu dengan pergeseran sentimen dari negatif menjadi netral/positif.',
    icon: AlertTriangle,
    metric: 'Sentimen',
    chart: [
      { label: 'Negatif', value: 65, color: '#ef4444' },
      { label: 'Netral', value: 25, color: '#94a3b8' },
      { label: 'Positif', value: 10, color: '#22c55e' },
    ],
    chartAfter: [
      { label: 'Negatif', value: 15, color: '#ef4444' },
      { label: 'Netral', value: 45, color: '#94a3b8' },
      { label: 'Positif', value: 40, color: '#22c55e' },
    ],
  },
  {
    id: 'amplification',
    tag: 'Amplification',
    title: 'Viral Marketing GIIAS 2024',
    client: 'Daihatsu',
    description: 'Kampanye amplifikasi yang mendorong engagement media sosial sangat tinggi selama event GIIAS.',
    icon: TrendingUp,
    metric: 'Engagement',
    stat: '2.4M+',
    statLabel: 'Total Engagement',
  },
  {
    id: 'government',
    tag: 'Government Policy',
    title: 'Amplifikasi Isu Pangan Nasional',
    client: 'Kementan',
    description: 'Amplifikasi kebijakan pangan nasional dengan coverage berita yang masif di media.',
    icon: Newspaper,
    metric: 'Coverage',
    stat: '500+',
    statLabel: 'Artikel & Tayangan',
  },
]

export default function SuccessStories() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001A2C] mb-4">
            Proven Impact & Case Studies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Hasil nyata dari kerja strategis bersama klien korporasi dan institusi.
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
          {cases.map((c, index) => {
            const Icon = c.icon
            const isReverse = index % 2 === 1
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReverse ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={isReverse ? 'lg:order-2' : ''}>
                  <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider">
                    {c.tag}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#001A2C] mt-2 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-slate-600 font-medium mb-4">{c.client}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {c.description}
                  </p>
                  {c.stat && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[#001A2C]">{c.stat}</span>
                      <span className="text-slate-600">{c.statLabel}</span>
                    </div>
                  )}
                </div>
                <div className={isReverse ? 'lg:order-1' : ''}>
                  <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-sm">
                    {c.chart ? (
                      <>
                        <div className="flex items-center gap-2 mb-4">
                          <Icon className="w-5 h-5 text-[#00AEEF]" />
                          <span className="text-sm font-semibold text-slate-700">
                            {c.metric} — Sebelum → Sesudah
                          </span>
                        </div>
                        <div className="flex gap-2 h-10 rounded-lg overflow-hidden mb-4">
                          {c.chart.map((d, i) => (
                            <div
                              key={d.label}
                              className="h-full rounded flex-1 flex items-center justify-center text-xs text-white font-medium"
                              style={{
                                backgroundColor: d.color,
                                minWidth: `${d.value}%`,
                              }}
                            >
                              {d.value}%
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2 h-10 rounded-lg overflow-hidden">
                          {c.chartAfter!.map((d, i) => (
                            <div
                              key={d.label}
                              className="h-full rounded flex-1 flex items-center justify-center text-xs text-white font-medium"
                              style={{
                                backgroundColor: d.color,
                                minWidth: `${d.value}%`,
                              }}
                            >
                              {d.value}%
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-slate-500 mt-2">
                          Negatif turun, Netral & Positif naik setelah intervensi.
                        </p>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8">
                        <div className="w-16 h-16 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-[#00AEEF]" />
                        </div>
                        <span className="text-4xl font-bold text-[#001A2C]">{c.stat}</span>
                        <span className="text-slate-600 mt-1">{c.statLabel}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
