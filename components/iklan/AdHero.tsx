'use client'

import { motion } from 'framer-motion'
import { Megaphone } from 'lucide-react'

export default function AdHero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 bg-[#001A2C] overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 174, 239, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 174, 239, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[#00AEEF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/30 mb-6">
            <Megaphone className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide">
              Promedia Ad Solutions
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white mb-5 leading-tight">
            Product &amp; Success Story Campaign
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Jelajahi format periklanan, estimasi jangkauan banner, dan kolaborasi brand serta
            institusi nasional di jaringan media Promedia Group.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
