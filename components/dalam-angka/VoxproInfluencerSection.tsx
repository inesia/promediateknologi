'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { voxproTiers, VOXPRO_TOTAL_DISPLAY } from '@/lib/dalamAngkaData'
import AnimatedCounter from './AnimatedCounter'

export default function VoxproInfluencerSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#001A2C] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00AEEF]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00AEEF]/15 border border-[#00AEEF]/30 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide">
              Voxpro Influencer Network
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
            Kekuatan Jaringan Influencer Multi-Tier
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Matriks influencer berlapis — dari mega hingga pico — untuk strategi kampanye yang
            presisi di setiap segmen audiens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {voxproTiers.map((tier, index) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-[#00AEEF]/30 transition-all duration-300"
            >
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">
                <AnimatedCounter value={tier.count} suffix={tier.suffix} />
              </p>
              <p className="text-sm font-bold text-[#00AEEF] mb-2">{tier.tier}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{tier.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-xs text-slate-500"
        >
          Total jaringan Voxpro: {VOXPRO_TOTAL_DISPLAY} influencer aktif di ekosistem Promedia Group
        </motion.p>
      </div>
    </section>
  )
}
