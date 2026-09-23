'use client'

import { motion } from 'framer-motion'
import {
  Search,
  Sparkles,
  ShieldCheck,
  Share2,
  TrendingUp,
  Laptop,
  Smartphone,
  Globe2,
} from 'lucide-react'

export default function WhyMultiplatform() {
  const points = [
    {
      icon: Search,
      title: 'SEO Friendly & Terindeks di Google',
      description:
        'Portal berita di jaringan Promedia memiliki Domain Authority (DA) tinggi dan terindeks cepat oleh Google News. Saat calon pelanggan mencari nama brand atau kata kunci produk Anda, artikel media terpercaya yang akan tampil di halaman pertama.',
      highlight: 'Top Pencarian Google',
    },
    {
      icon: Share2,
      title: 'Jangkauan Luas di Instagram & TikTok',
      description:
        'Tidak hanya website berita, konten promosi Anda diamplifikasi ke akun Instagram dan TikTok resmi media mitra yang memiliki ribuan hingga ratusan ribu pengikut aktif setiap hari.',
      highlight: 'Multiplatform Buzz',
    },
    {
      icon: ShieldCheck,
      title: 'Tayang Selamanya Tanpa Biaya Berulang',
      description:
        'Berbeda dengan iklan berbayar (ads) harian yang langsung hilang saat saldo habis, publikasi artikel dan posting media sosial ini bersifat permanen sebagai jejak rekam digital positif brand Anda.',
      highlight: 'Aset Digital Permanen',
    },
    {
      icon: TrendingUp,
      title: 'Validasi Kredibilitas & Trust Publik',
      description:
        'Diberitakan oleh media pers resmi memberikan efek kredibilitas instan di mata mitra bisnis, investor, dan konsumen. Brand Anda tampak profesional, bonafide, dan terpercaya.',
      highlight: 'Meningkatkan Reputasi',
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kenapa Memilih Multiplatform?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001A2C] mb-3">
            Saatnya Brand Anda Tampil Lebih Profesional
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Kombinasi kekuatan media pers dan kecepatan media sosial untuk hasil awareness yang maksimal dan tahan lama.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-12">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="rounded-2xl p-6 sm:p-7 border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-[#00AEEF]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#001A2C] text-[#00AEEF] flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {point.highlight}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#001A2C] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Visual Banner Strip */}
        <div className="rounded-3xl bg-gradient-to-r from-[#001A2C] via-[#0b2b46] to-[#001A2C] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center shrink-0 border border-[#00AEEF]/30">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-white">
                Didukung Jaringan 1.000+ Media Partner di Seluruh Indonesia
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
                Jangkau audiens tertarget di tingkat nasional maupun daerah spesifik di seluruh Nusantara.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/628112007667?text=Halo%20Promedia,%20saya%20ingin%20berkonsultasi%20mengenai%20publikasi%20multiplatform%20untuk%20brand%20saya"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#00AEEF] hover:bg-[#0099d6] text-white text-xs sm:text-sm font-bold shrink-0 transition-colors shadow-md shadow-[#00AEEF]/20"
          >
            Konsultasi dengan Tim Promedia
          </a>
        </div>
      </div>
    </section>
  )
}
