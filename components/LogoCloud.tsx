'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

function PartnerLogo({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 8) * 0.05 }}
    >
      <div className="relative w-full aspect-[3/2] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4 hover:shadow-lg hover:shadow-slate-100 transition-shadow">
        <span className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-tighter">{name}</span>
      </div>
    </motion.div>
  )
}

export default function LogoCloud() {
  const mediaPartners = [
    'Media Partner 1', 'Media Partner 2', 'Media Partner 3', 'Media Partner 4',
    'Media Partner 5', 'Media Partner 6', 'Media Partner 7', 'Media Partner 8'
  ]

  const socialPartners = [
    'Social Media 1', 'Social Media 2', 'Social Media 3', 'Social Media 4',
    'Social Media 5', 'Social Media 6', 'Social Media 7', 'Social Media 8'
  ]

  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-black text-[#001A2C] mb-4">
            Ekosistem Media & Jaringan Kami
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Berkolaborasi dengan ribuan entitas media dan kreator di seluruh Indonesia.
          </p>
        </motion.div>

        {/* Media Partners Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-[#001A2C] flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#00AEEF] rounded-full" />
              Media Partners
            </h3>
            <Link href="/mitra" className="text-sm font-semibold text-[#00AEEF] hover:underline flex items-center gap-1">
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
            {mediaPartners.map((partner, index) => (
              <PartnerLogo key={partner} name={partner} index={index} />
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-[#001A2C] flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#2D74B3] rounded-full" />
              Social Media & Influencer
            </h3>
            <Link href="/mitra?category=social" className="text-sm font-semibold text-[#2D74B3] hover:underline flex items-center gap-1">
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
            {socialPartners.map((partner, index) => (
              <PartnerLogo key={partner} name={partner} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
