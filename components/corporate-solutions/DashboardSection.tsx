'use client'

import { motion } from 'framer-motion'
import { BarChart3, MessageCircle, PieChart } from 'lucide-react'

const metrics = [
  { label: 'Buzz Reach', value: '1.2M', icon: BarChart3 },
  { label: 'Engagement Rate', value: '8.4%', icon: MessageCircle },
  { label: 'Share of Voice', value: '24%', icon: PieChart },
]

export default function DashboardSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001A2C] mb-4">
              The Dashboard
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Pantau reputasi brand Anda secara realtime dengan teknologi Big Data Promedia.
            </p>
            <ul className="space-y-4">
              {['Buzz Reach', 'Engagement Rate', 'Share of Voice'].map((item, i) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Media Monitoring Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-[#001A2C] rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 h-12 px-4 bg-[#0a1628] border-b border-slate-700">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-400 ml-4">Media Monitoring Dashboard</span>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                {metrics.map((m, i) => {
                  const Icon = m.icon
                  return (
                    <div
                      key={m.label}
                      className="bg-[#0a1628] rounded-lg p-4 border border-slate-700"
                    >
                      <Icon className="w-6 h-6 text-[#00AEEF] mb-2" />
                      <div className="text-2xl font-bold text-white">{m.value}</div>
                      <div className="text-xs text-slate-400">{m.label}</div>
                    </div>
                  )
                })}
              </div>
              <div className="h-32 px-6 pb-6 flex items-end gap-2">
                {[40, 65, 45, 80, 55, 70, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-[#00AEEF]/40 min-h-[20px]"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
