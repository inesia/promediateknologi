'use client'

import { motion } from 'framer-motion'
import { Building2, ChevronDown } from 'lucide-react'

const sectionLinks = [
  { label: 'Tentang Perusahaan', href: '#tentang-perusahaan' },
  { label: 'Pilar Utama', href: '#pilar' },
  { label: 'Lokasi', href: '#lokasi' },
]

export default function AboutHero() {
  return (
    <section className="relative pt-28 pb-6 lg:pt-32 bg-[#001A2C] overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 174, 239, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 174, 239, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/30 mb-5">
            <Building2 className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide">
              Promedia Group
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Tentang <span className="text-[#00AEEF]">Kami</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Membangun ekosistem media digital terintegrasi untuk masa depan industri media di Indonesia
          </p>

          <nav aria-label="Navigasi halaman" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-slate-200 hover:bg-[#00AEEF]/20 hover:border-[#00AEEF]/40 hover:text-white transition-colors"
              >
                {link.label}
                <ChevronDown className="w-3.5 h-3.5" />
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </section>
  )
}
