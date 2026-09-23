'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  CheckCircle2,
  Globe,
  Instagram,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react'
import { MULTIPLATFORM_PACKAGES, PackageTier } from '@/lib/multiplatformPackages'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.86-4.49V8.52a8.27 8.27 0 0 0 4.84 1.56v-3.4a4.85 4.85 0 0 1-.93.01z" />
    </svg>
  )
}

export default function MultiplatformPackages() {
  const [activeTierId, setActiveTierId] = useState<'starter' | 'growth'>('starter')
  const [activeSubOptionId, setActiveSubOptionId] = useState<'A' | 'B' | 'C' | 'D'>('A')

  const activeTier: PackageTier =
    MULTIPLATFORM_PACKAGES.find((p) => p.id === activeTierId) || MULTIPLATFORM_PACKAGES[0]

  const activeSubOption =
    activeTier.subOptions.find((s) => s.id === activeSubOptionId) || activeTier.subOptions[0]

  // Construct WhatsApp URL with pre-filled text
  const mediaNames = activeSubOption.mediaList.map((m) => m.name).join(', ')
  const waMessage = `Halo Promedia Ad Solutions, saya ingin konsultasi & memesan:\n\n• ${activeTier.name} (Paket ${activeSubOption.id})\n• Total Media: ${activeTier.mediaCount} Media\n• Harga: ${activeTier.priceFormatted}\n• Daftar Media: ${mediaNames}\n• Termasuk Publikasi: Website, Instagram, TikTok\n\nMohon informasi ketersediaan slot dan alur pengiriman materinya.`
  const waUrl = `https://wa.me/628112007667?text=${encodeURIComponent(waMessage)}`

  return (
    <section id="pilihan-paket" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Katalog Paket Iklan 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001A2C] mb-3">
            Pilihan Paket Iklan Multiplatform
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Satu harga sudah termasuk publikasi di <strong>Website Berita</strong>, <strong>Instagram</strong>, dan <strong>TikTok</strong>. Pilih tingkatan paket dan kelompok media yang sesuai dengan target eksposur Anda.
          </p>

          {/* Tier Switcher (Starter vs Growth) */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm mt-6 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                setActiveTierId('starter')
                setActiveSubOptionId('A')
              }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTierId === 'starter'
                  ? 'bg-[#001A2C] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#001A2C] hover:bg-slate-100/70'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Paket Starter (4 Media)</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#00AEEF] text-white font-extrabold ml-1">
                1.2 Juta
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTierId('growth')
                setActiveSubOptionId('A')
              }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTierId === 'growth'
                  ? 'bg-[#001A2C] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#001A2C] hover:bg-slate-100/70'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              <span>Paket Growth (18 Media)</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-600 text-white font-extrabold ml-1">
                Mulai 5 Juta
              </span>
            </button>
          </div>
        </div>

        {/* Main Package Showcase Card */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          {/* Card Top Banner */}
          <div className="bg-gradient-to-r from-[#001A2C] via-[#0d2a42] to-[#001A2C] text-white p-6 sm:p-8 border-b border-slate-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-2 border border-[#00AEEF]/30">
                  {activeTier.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
                  <span>{activeTier.name}</span>
                  <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-200 border border-white/15">
                    {activeTier.mediaCount} Media Placement
                  </span>
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                  {activeTier.tagline}
                </p>
              </div>

              {/* Price Block */}
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4 sm:p-5 text-right shrink-0 lg:min-w-[240px]">
                <p className="text-xs font-medium text-slate-300 uppercase tracking-wide">
                  Harga Total Paket
                </p>
                <div className="text-2xl sm:text-3xl font-black text-[#00AEEF] mt-0.5">
                  {activeTier.priceFormatted}
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Website + Instagram + TikTok
                </p>
              </div>
            </div>

            {/* Channels Included Pill */}
            <div className="flex items-center flex-wrap gap-2.5 mt-5 pt-5 border-t border-white/10">
              <span className="text-xs text-slate-300 font-semibold mr-1">Publikasi serentak di:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-white">
                <Globe className="w-3.5 h-3.5 text-[#00AEEF]" /> Website Berita
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-white">
                <Instagram className="w-3.5 h-3.5 text-pink-400" /> Instagram Feed & Story
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-white">
                <TikTokIcon className="w-3.5 h-3.5 text-cyan-300" /> TikTok Media
              </span>
            </div>
          </div>

          {/* Sub-option Selection Area (Paket A, B, C, D) */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h4 className="text-base font-extrabold text-[#001A2C]">
                  Pilih Kelompok Media Jaringan
                </h4>
                <p className="text-xs text-slate-500">
                  Tersedia 4 pilihan kelompok media mitra dengan jangkauan audiens terpercaya.
                </p>
              </div>

              {/* Sub-option Buttons */}
              <div className="flex items-center gap-2">
                {activeTier.subOptions.map((sub) => {
                  const isActive = activeSubOptionId === sub.id
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setActiveSubOptionId(sub.id)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                        isActive
                          ? 'bg-[#00AEEF] text-white shadow-md shadow-[#00AEEF]/20'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Paket {sub.id}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Media Grid Showcase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTierId}-${activeSubOptionId}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Daftar Media di {activeSubOption.title}:
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      Total: {activeSubOption.mediaList.length} Media Portal
                    </span>
                  </div>

                  {/* Media Grid */}
                  <div
                    className={`grid gap-2.5 sm:gap-3 ${
                      activeTierId === 'starter'
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                        : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
                    }`}
                  >
                    {activeSubOption.mediaList.map((media, idx) => (
                      <div
                        key={media.name}
                        className={`rounded-xl border p-3 sm:p-3.5 transition-all flex flex-col justify-between ${
                          media.isHighlight
                            ? 'bg-[#00AEEF]/5 border-[#00AEEF]/30 hover:border-[#00AEEF]'
                            : 'bg-slate-50 border-slate-200/80 hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <span className="text-[10px] font-mono text-slate-400">
                            #{idx + 1}
                          </span>
                          {media.isHighlight && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#00AEEF] text-white uppercase">
                              Utama
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-black text-[#001A2C] line-clamp-1">
                            {media.name}
                          </p>
                          {media.domain && (
                            <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                              {media.domain}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits / Features Checklist */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5 sm:p-6 mb-8">
                  <h4 className="text-xs sm:text-sm font-black text-[#001A2C] uppercase tracking-wide mb-4">
                    Keuntungan &amp; Fasilitas yang Anda Dapatkan:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {activeTier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#001A2C] text-white">
                  <div>
                    <p className="text-xs text-slate-300 font-medium">Paket Terpilih:</p>
                    <p className="text-base sm:text-lg font-black text-white">
                      {activeTier.name} — {activeSubOption.title}
                    </p>
                    <p className="text-xs text-[#00AEEF] font-semibold mt-0.5">
                      {activeTier.priceFormatted} (Sudah termasuk Web, IG, TikTok)
                    </p>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00AEEF] hover:bg-[#0099d6] text-white text-sm font-extrabold shadow-lg shadow-[#00AEEF]/25 transition-all shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pesan Paket Ini via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Small Footnote */}
        <p className="text-center text-xs text-slate-500 mt-6 leading-relaxed">
          * Materi konten (rilis artikel &amp; visual media sosial) dapat disiapkan langsung oleh pihak klien atau dibantu penyuntingannya oleh tim editorial Promedia Group.
        </p>
      </div>
    </section>
  )
}
