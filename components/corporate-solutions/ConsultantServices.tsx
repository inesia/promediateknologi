'use client'

import { motion } from 'framer-motion'
import {
  Search,
  Target,
  Megaphone,
  ShieldAlert,
  TrendingUp,
} from 'lucide-react'

const NAVY = '#001A2C'

const pillars = [
  {
    icon: Search,
    title: 'Audit & Analisis',
    items: ['Media Perception Audit', 'Media Mapping'],
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    items: ['House of Message', 'Communication Program Design'],
  },
  {
    icon: Megaphone,
    title: 'Communication Activation',
    items: ['Press Conference', 'Media Gathering', 'Media Visit'],
  },
  {
    icon: ShieldAlert,
    title: 'Issue & Crisis Management',
    items: ['Issue Intelligence', 'Alert System', 'Crisis Mitigation'],
  },
  {
    icon: TrendingUp,
    title: 'Monitoring & Evaluation',
    items: ['Impact Report', 'Sentiment Analysis'],
  },
]

export default function ConsultantServices() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001A2C] mb-4">
            Consultant Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Berdasarkan Media Profile. Layanan strategis untuk korporasi dan institusi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group border border-slate-200 rounded-xl p-6 lg:p-8 bg-white hover:border-[#00AEEF]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#001A2C] text-white mb-6 group-hover:bg-[#00AEEF] transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#001A2C] mb-4">
                  {pillar.title}
                </h3>
                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
