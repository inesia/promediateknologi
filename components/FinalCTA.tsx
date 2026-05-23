'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Newspaper, PenTool, Share2, Route } from 'lucide-react'
import Link from 'next/link'
import { PROGRAMS } from '@/lib/programRegistration'
import type { ProgramSlug } from '@/lib/programRegistration'

const programIcons: Record<ProgramSlug, typeof Newspaper> = {
  mediapreneur: Newspaper,
  contentpreneur: PenTool,
  socmedpreneur: Share2,
}

const steps = [
  'Pilih program yang sesuai',
  'Pelajari detail & persyaratan',
  'Daftar lewat formulir resmi',
]

export default function FinalCTA() {
  return (
    <section id="pendaftaran" className="relative py-16 sm:py-20 lg:py-28 bg-[#001A2C] overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 w-[min(800px,120vw)] h-[min(800px,120vw)] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full bg-[#00AEEF] blur-[100px] sm:blur-[120px]" />
      </motion.div>

      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 174, 239, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 174, 239, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/30 mb-4">
              <Route className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-[10px] sm:text-xs font-bold text-[#00AEEF] uppercase tracking-wide">
                Program Kemitraan Promedia
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
              Gabung <span className="text-[#00AEEF]">Program</span> yang Tepat untuk Anda
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Tiga jalur berbeda — media, konten, dan influencer. Mulai dari halaman program, baru
              lanjut pendaftaran.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            {/* Program cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4"
            >
              {PROGRAMS.map((program) => {
                const Icon = programIcons[program.slug]
                return (
                  <Link
                    key={program.slug}
                    href={program.programHref}
                    className="group block rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00AEEF]/30 p-4 sm:p-5 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-[#00AEEF]/15 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF]/25 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold text-[#00AEEF] uppercase tracking-wide mb-0.5">
                          {program.menuLabel}
                        </p>
                        <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                          {program.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                          {program.tagline}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00AEEF] shrink-0 mt-1 transition-colors" />
                    </div>
                  </Link>
                )
              })}
            </motion.div>

            {/* Main CTA */}
            <motion.div
              className="relative rounded-2xl sm:rounded-3xl border border-[#00AEEF]/30 bg-gradient-to-br from-[#00AEEF]/20 via-white/5 to-[#2D74B3]/10 p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-center lg:text-left shadow-2xl shadow-[#00AEEF]/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Belum yakin program mana?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                Buka halaman pilih program untuk membandingkan ketiga jalur, lalu daftar saat Anda
                sudah siap.
              </p>

              <ol className="space-y-2.5 mb-8 text-left max-w-sm mx-auto lg:mx-0">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00AEEF] text-[11px] font-black text-[#001A2C]">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <Link href="/register" className="w-full">
                <motion.div
                  className="btn-shimmer group w-full flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-black text-[#001A2C] bg-[#00AEEF] rounded-xl shadow-xl shadow-[#00AEEF]/30 hover:bg-[#33c1ff] transition-colors relative overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Lihat Semua Program</span>
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-[#001A2C]/10">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </motion.div>
              </Link>

              <p className="mt-5 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                Pendaftaran tidak dipungut biaya. Setiap program memiliki formulir dan alur
                onboarding sendiri.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}
