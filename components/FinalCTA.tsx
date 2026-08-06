'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Plus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function FinalCTA() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50/60 overflow-hidden w-full">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 space-y-16 lg:space-y-20">
        
        {/* Top 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Testimonial Andi Pratama */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 rounded-3xl p-7 lg:p-8 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:border-[#00AEEF]/30 transition-all duration-300"
          >
            <div>
              {/* Quote Mark */}
              <span className="text-4xl lg:text-5xl font-serif font-black text-[#00AEEF] block mb-3 leading-none opacity-90">
                “
              </span>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium mb-8">
                Berkat Promedia, kami bisa fokus mengembangkan konten dan audiens, sementara urusan teknis dan monetisasi ditangani dengan profesional.
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-sm">
                <Image
                  src="/images/avatar-andi.png"
                  alt="Andi Pratama"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left leading-tight">
                <h4 className="font-bold text-[#001A2C] text-base">
                  Andi Pratama
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Pemilik Media, SumateraNews.id
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Middle Highlight Card with Growth Visual */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#F0F9FF] via-white to-[#E0F2FE]/60 rounded-3xl p-7 lg:p-8 border border-[#00AEEF]/25 shadow-xl shadow-[#00AEEF]/5 flex flex-col justify-between relative overflow-hidden group hover:border-[#00AEEF]/50 transition-all duration-300 min-h-[260px]"
          >
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#001A2C] leading-snug">
                Bersama Promedia,
              </h3>
              <h3 className="text-xl sm:text-2xl font-black text-[#00AEEF] leading-snug">
                Media Bertumbuh,
              </h3>
              <h3 className="text-xl sm:text-2xl font-black text-[#2D74B3] leading-snug">
                Masa Depan Lebih Cerah
              </h3>
            </div>

            {/* Growth Visual Graphics (Arrow & Bar Chart) */}
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bar chart bars */}
                <rect x="70" y="90" width="22" height="40" rx="4" fill="#00AEEF" fillOpacity="0.15" />
                <rect x="102" y="70" width="22" height="60" rx="4" fill="#00AEEF" fillOpacity="0.25" />
                <rect x="134" y="45" width="22" height="85" rx="4" fill="#00AEEF" fillOpacity="0.4" />
                <rect x="166" y="20" width="22" height="110" rx="4" fill="#2D74B3" fillOpacity="0.5" />
                {/* Rising arrow path */}
                <path d="M10 120 Q 90 100 185 25" stroke="url(#growth-gradient)" strokeWidth="6" strokeLinecap="round" />
                <path d="M160 22 L187 23 L185 50" stroke="#00AEEF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="growth-gradient" x1="10" y1="120" x2="185" y2="25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00AEEF" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#00AEEF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Card 3: Testimonial Nadia Putri */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 rounded-3xl p-7 lg:p-8 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:border-[#00AEEF]/30 transition-all duration-300"
          >
            <div>
              {/* Quote Mark */}
              <span className="text-4xl lg:text-5xl font-serif font-black text-[#00AEEF] block mb-3 leading-none opacity-90">
                “
              </span>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium mb-8">
                Sebagai creator, saya tidak hanya punya media sendiri, tapi juga akses ke peluang yang lebih besar.
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-sm">
                <Image
                  src="/images/avatar-nadia.png"
                  alt="Nadia Putri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left leading-tight">
                <h4 className="font-bold text-[#001A2C] text-base">
                  Nadia Putri
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Creator & Influencer
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Row: "Dipercaya oleh" Logo Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400 mb-6 sm:mb-8">
            Dipercaya oleh
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-12">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#00AEEF] hover:opacity-80 transition-opacity">
              detik<span className="text-[#001A2C]">com</span>
            </span>

            <span className="font-black text-base sm:text-lg tracking-wider text-red-600 hover:opacity-80 transition-opacity">
              IDN <span className="text-slate-800">TIMES</span>
            </span>

            <span className="font-bold text-lg sm:text-xl text-[#00A896] hover:opacity-80 transition-opacity">
              kumparan
            </span>

            <span className="font-bold text-sm sm:text-base tracking-wide text-slate-800 flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4 text-red-600 fill-current" viewBox="0 0 24 24">
                <polygon points="12,2 2,22 22,22" />
              </svg> 
              ANTARA
            </span>

            <span className="font-extrabold text-base sm:text-lg text-[#0056B3] hover:opacity-80 transition-opacity">
              Tribun<span className="font-normal text-slate-700">Network</span>
            </span>

            <span className="font-black text-base sm:text-lg italic text-[#004B87] hover:opacity-80 transition-opacity">
              JawaPos<span className="text-slate-500 font-normal">.com</span>
            </span>

            <span className="font-extrabold text-base sm:text-lg text-[#003366] flex items-center gap-1 hover:opacity-80 transition-opacity">
              <span className="text-[#00AEEF] font-black">D</span> katadata
            </span>

            <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-300 hover:border-[#00AEEF] flex items-center justify-center text-slate-400 hover:text-[#00AEEF] transition-all hover:scale-105">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar: Dark Blue Capsule Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full bg-[#030917] border border-blue-900/40 sm:rounded-full rounded-3xl p-6 sm:p-7 lg:px-10 lg:py-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group"
        >
          {/* Glowing accent backdrop */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Icon + Text */}
          <div className="flex items-center gap-4 text-left relative z-10 w-full md:w-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#00AEEF]/15 border border-[#00AEEF]/30 flex items-center justify-center text-[#00AEEF] shrink-0 shadow-lg shadow-[#00AEEF]/20">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="leading-snug">
              <h3 className="font-bold text-white text-base sm:text-lg">
                Mari Bangun Media yang Lebih Kuat,
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-normal">
                Ekosistem yang Lebih Besar, Masa Depan yang Lebih Cerah
              </p>
            </div>
          </div>

          {/* Right Column: CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 relative z-10 w-full md:w-auto">
            <Link href="/register" className="w-full sm:w-auto">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] rounded-xl shadow-lg shadow-[#00AEEF]/30 hover:shadow-[#00AEEF]/50 transition-all cursor-pointer"
              >
                Gabung Sekarang
              </motion.span>
            </Link>

            <Link href="/kontak" className="w-full sm:w-auto">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/5 border border-white/20 hover:border-[#00AEEF] rounded-xl backdrop-blur-md hover:bg-white/10 transition-all cursor-pointer group"
              >
                <span>Hubungi Kami</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
