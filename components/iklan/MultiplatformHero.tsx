'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Instagram,
  CheckCircle2,
  ArrowDown,
  MessageCircle,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Search,
} from 'lucide-react'

// Custom TikTok icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.86-4.49V8.52a8.27 8.27 0 0 0 4.84 1.56v-3.4a4.85 4.85 0 0 1-.93.01z" />
    </svg>
  )
}

export default function MultiplatformHero() {
  const scrollToPackages = () => {
    const el = document.getElementById('pilihan-paket')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 bg-[#001A2C] overflow-hidden text-white">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 174, 239, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 174, 239, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial Glows */}
      <div className="absolute top-10 right-0 w-[420px] h-[420px] bg-[#00AEEF]/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-[#2D74B3]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/30 mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span className="text-xs font-bold text-[#00AEEF] tracking-wider uppercase">
              Promedia Ad Solutions • Multiplatform Package
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-tight mb-4"
          >
            Paket Iklan <span className="text-[#00AEEF]">Multiplatform</span>
          </motion.h1>

          {/* Subtitle / Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-5"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white text-xs sm:text-sm font-semibold border border-white/15">
              <Globe className="w-4 h-4 text-[#00AEEF]" /> Website Media
            </span>
            <span className="text-slate-400 font-bold">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white text-xs sm:text-sm font-semibold border border-white/15">
              <Instagram className="w-4 h-4 text-pink-400" /> Instagram Feed & Reels
            </span>
            <span className="text-slate-400 font-bold">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white text-xs sm:text-sm font-semibold border border-white/15">
              <TikTokIcon className="w-4 h-4 text-cyan-300" /> TikTok
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Saatnya brand dan bisnis Anda tampil profesional. Sekali pasang, konten promosi Anda langsung terbit di website portal berita terpercaya, feed Instagram, dan akun TikTok resmi jaringan media Promedia.
          </motion.p>
        </div>

        {/* 3 Core Value Props Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-12"
        >
          <div className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-4 hover:border-[#00AEEF]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                Web SEO Friendly
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Artikel mudah terindeks &amp; ditemukan di Google, menaikkan otoritas domain &amp; reputasi brand.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-4 hover:border-[#00AEEF]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center shrink-0 border border-[#00AEEF]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                Tayang Selamanya (Permanen)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sekali bayar, konten tayang permanen di Website, Instagram, dan TikTok tanpa biaya perpanjangan.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-4 hover:border-[#00AEEF]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-500/30">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                Tingkatkan Trust &amp; Awareness
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Membangun kredibilitas instan di mata konsumen dengan profil brand di media jurnalistik resmi.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pricing Highlight Pill + Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Mulai dari <strong className="text-white font-extrabold">Rp 1.2 Juta</strong> untuk 4 Media Placement</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <button
              onClick={scrollToPackages}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00AEEF] hover:bg-[#0099d6] text-white text-sm font-bold shadow-lg shadow-[#00AEEF]/25 transition-all w-full sm:w-auto"
            >
              <span>Pilih Paket Iklan</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/628112007667?text=Halo%20Promedia%20Ad%20Solutions,%20saya%20tertarik%20dengan%20Paket%20Iklan%20Multiplatform%20(Website,%20IG,%20TikTok).%20Boleh%20minta%20info%20detailnya?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 transition-all w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-[#00AEEF]" />
              <span>Konsultasi WA</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
