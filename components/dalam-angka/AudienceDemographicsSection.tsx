'use client'

import { motion } from 'framer-motion'
import { UserCircle, Users } from 'lucide-react'
import { ageDistribution, genderSplit } from '@/lib/dalamAngkaData'
import AnimatedCounter from './AnimatedCounter'

function PercentBar({
  label,
  percent,
  color,
  delay,
  highlight,
}: {
  label: string
  percent: number
  color: string
  delay: number
  highlight?: boolean
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center gap-2 text-sm">
        <span
          className={`font-semibold ${highlight ? 'text-[#001A2C]' : 'text-slate-600'}`}
        >
          {label}
          {highlight && (
            <span className="ml-2 text-[10px] font-bold text-[#00AEEF] uppercase">
              Pengambil keputusan
            </span>
          )}
        </span>
        <span className="font-black text-[#001A2C] tabular-nums">
          <AnimatedCounter value={percent} suffix="%" decimals={percent % 1 !== 0 ? 1 : 0} />
        </span>
      </div>
      <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  )
}

export default function AudienceDemographicsSection() {
  return (
    <section className="py-16 lg:py-4 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <Users className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide">
              Audience Demographics
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001A2C] mb-3">
            Profil Audiens Pengambil Keputusan
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Komposisi gender seimbang dan konsentrasi usia 25–54 tahun — segmen dengan daya beli
            dan pengaruh pembelian tertinggi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Gender */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center">
                <UserCircle className="w-5 h-5 text-[#00AEEF]" />
              </div>
              <h3 className="text-lg font-black text-[#001A2C]">Gender Split</h3>
            </div>

            <div className="flex h-4 rounded-full overflow-hidden mb-6">
              {genderSplit.map((g, i) => (
                <motion.div
                  key={g.label}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${g.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.15 }}
                  className={`h-full ${g.color} ${i === 0 ? 'rounded-l-full' : ''} ${i === genderSplit.length - 1 ? 'rounded-r-full' : ''}`}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {genderSplit.map((g) => (
                <div key={g.label} className="rounded-xl bg-slate-50 border border-slate-100 p-4">
                  <div className={`w-3 h-3 rounded-full mb-2 ${g.color}`} />
                  <p className="text-2xl font-black text-[#001A2C]">
                    <AnimatedCounter value={g.percent} suffix="%" decimals={1} />
                  </p>
                  <p className="text-sm font-semibold text-slate-600">{g.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Age */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#2D74B3]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#2D74B3]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#001A2C]">Distribusi Usia</h3>
                <p className="text-xs text-slate-500">Segmen dominan: 25–54 tahun (69%)</p>
              </div>
            </div>

            <div className="space-y-4">
              {ageDistribution.map((item, index) => (
                <PercentBar
                  key={item.range}
                  label={`Usia ${item.range}`}
                  percent={item.percent}
                  color={item.highlight ? 'bg-gradient-to-r from-[#00AEEF] to-[#2D74B3]' : 'bg-slate-300'}
                  delay={0.1 + index * 0.08}
                  highlight={item.highlight}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
