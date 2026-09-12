'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function FinalCTA() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50/60 overflow-hidden w-full">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">

        {/* Bottom Bar: Dark Blue Capsule Banner */}
        <motion.div
          initial={false}
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
