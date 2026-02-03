'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const NAVY = '#001A2C'
const OVERLAY = 'linear-gradient(135deg, rgba(0, 26, 44, 0.92) 0%, rgba(0, 15, 26, 0.88) 100%)'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 lg:pt-24 pb-20"
      style={{ backgroundColor: NAVY }}
    >
      {/* Abstract digital network background - calm, professional */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 174, 239, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 174, 239, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: OVERLAY }}
        />
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00AEEF]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-[#00AEEF] uppercase tracking-widest mb-6"
          >
            The Strategic Partner
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            End-to-End Strategic Communication Consultant.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Mitra strategis korporasi dalam audit komunikasi, manajemen krisis, hingga amplifikasi pesan melalui jejaring media terbesar di Indonesia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="#contact-consultant"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#001A2C] bg-white hover:bg-slate-100 transition-colors rounded-lg"
            >
              Konsultasi Strategi Komunikasi
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
