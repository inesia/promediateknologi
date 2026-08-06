'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, User, Check, ArrowRight } from 'lucide-react'

const statsData = [
  { value: '1.300+', label: 'Publisher Partner' },
  { value: '15.000+', label: 'Creator & Influencer' },
  { value: '38', label: 'Provinsi' },
  { value: '240+', label: 'Kabupaten/Kota' },
  { value: 'Jutaan', label: 'Audience Setiap Hari' },
]

const publisherFeatures = [
  'Website Profesional',
  'Infrastruktur & Teknologi Terbaik',
  'Monetisasi & Peluang Iklan',
  'Pelatihan & Pendampingan',
  'Dukungan Komunitas',
]

const creatorFeatures = [
  'Website Personal',
  'Branding & Identitas Profesional',
  'Monetisasi & Peluang Kolaborasi',
  'Live Commerce & Media Kit',
  'Pelatihan & Dukungan Komunitas',
]

export default function EcosystemPillars() {
  return (
    <section className="relative bg-white pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-28 lg:pb-32 text-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-20 mt-4 sm:mt-6 lg:mt-8">
        
        {/* Floating White Stats Bar Card - Optimized for Mobile & Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl py-6 lg:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 mb-16 sm:mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-5 lg:divide-x divide-slate-200 gap-y-6 sm:gap-y-8 lg:gap-y-0">
            {statsData.map((stat, idx) => (
              <div 
                key={idx} 
                className={`text-center flex flex-col justify-center items-center px-2 py-1 lg:py-0 ${
                  idx === 4 ? 'col-span-2 lg:col-span-1 border-t border-slate-100/80 pt-4 lg:border-t-0 lg:pt-0' : ''
                }`}
              >
                <span className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#00AEEF] tracking-tight block mb-1.5">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001A2C] mb-3 tracking-tight">
            Dua Pilar, Satu Ekosistem, Pertumbuhan Tanpa Batas
          </h2>
          <div className="w-12 h-1 bg-[#00AEEF] rounded-full mx-auto" />
        </motion.div>

        {/* Dual Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Publisher Media Network */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden bg-[#061838] border border-blue-500/20 p-8 sm:p-10 flex flex-col justify-between shadow-2xl group"
          >
            {/* Background Image Layer */}
            <div
              className="absolute inset-0 bg-cover bg-right lg:bg-center opacity-40 pointer-events-none transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/section-bgg.png')" }}
            />
            {/* Directional Dark Gradient Overlay for perfect text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061838] via-[#061838]/95 to-[#092659]/60 pointer-events-none" />

            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#00AEEF] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#00AEEF]/40">
                <Building2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Publisher Media Network
              </h3>
              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-8 max-w-md">
                Untuk perusahaan media yang ingin tumbuh lebih profesional dan berkelanjutan.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3.5 mb-10">
                {publisherFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm sm:text-base font-medium text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#00AEEF] flex items-center justify-center text-white shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <div className="relative z-10 pt-2">
              <Link href="/register?role=publisher" className="inline-block w-full sm:w-auto">
                <motion.span 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] rounded-xl shadow-lg shadow-[#00AEEF]/30 transition-all cursor-pointer"
                >
                  <span>Daftar Sebagai Publisher</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.span>
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Influencer Media Network */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden bg-[#140b2e] border border-purple-500/20 p-8 sm:p-10 flex flex-col justify-between shadow-2xl group"
          >
            {/* Background Image Layer */}
            <div
              className="absolute inset-0 bg-cover bg-right lg:bg-center opacity-40 pointer-events-none transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/section-bgc.png')" }}
            />
            {/* Directional Dark Gradient Overlay for perfect text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#140b2e] via-[#140b2e]/95 to-[#211347]/60 pointer-events-none" />

            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#7c4dff] flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-600/40">
                <User className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Influencer Media Network
              </h3>
              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-8 max-w-md">
                Untuk creator dan influencer yang ingin membangun media personal yang kuat.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3.5 mb-10">
                {creatorFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm sm:text-base font-medium text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#7c4dff] flex items-center justify-center text-white shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <div className="relative z-10 pt-2">
              <Link href="/register?role=creator" className="inline-block w-full sm:w-auto">
                <motion.span 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#7c4dff] hover:bg-[#6c3be8] rounded-xl shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
                >
                  <span>Jadi Creator Sekarang</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
