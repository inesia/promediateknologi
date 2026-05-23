'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { getPartnerFormUrl } from '@/lib/programRegistration'

export default function MediapreneurHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#00AEEF]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#2D74B3]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#001A2C] mb-6 leading-tight">
              Bangun Bisnis Media Anda Sendiri
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Program untuk jurnalis hingga penulis berpengalaman. Bangun, kelola, dan monetisasi portal media Anda sendiri. Wujudkan visi mediamu dengan dukungan teknologi Promedia. Gratis.
            </p>

            {/* CTA Button */}
            <a
              href={getPartnerFormUrl('mediapreneur')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00AEEF] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Daftar Publisher Media Network</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </a>
          </motion.div>

          {/* Right: CMS Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <CMSDashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CMSDashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glassmorphism Container */}
      <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl p-6 lg:p-8 overflow-hidden">
        {/* Browser Bar */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="flex-1 h-8 bg-slate-100 rounded-lg ml-4 flex items-center px-4">
            <span className="text-xs text-slate-500">promedia.id/dashboard</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="space-y-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Artikel', value: '1,234', color: 'from-[#00AEEF] to-[#2D74B3]' },
              { label: 'Pembaca', value: '45.6K', color: 'from-[#2D74B3] to-[#00AEEF]' },
              { label: 'Pendapatan', value: 'Rp 12M', color: 'from-[#00AEEF] to-[#2D74B3]' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br bg-slate-50 rounded-xl p-4 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                <div className="text-lg font-bold text-[#001A2C]">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Content List */}
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="bg-slate-50 rounded-lg border border-slate-200 p-4 flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-3 bg-slate-300 rounded w-3/4 mb-2" />
                  <div className="h-2 bg-slate-200 rounded w-1/2" />
                </div>
                <div className="w-16 h-8 bg-slate-200 rounded" />
              </motion.div>
            ))}
          </div>

          {/* Action Bar */}
          <motion.div
            className="flex items-center gap-3 pt-4 border-t border-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex-1 h-10 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] rounded-lg" />
            <div className="w-10 h-10 bg-slate-200 rounded-lg" />
          </motion.div>
        </div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl pointer-events-none" />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00AEEF]/20 to-[#2D74B3]/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
