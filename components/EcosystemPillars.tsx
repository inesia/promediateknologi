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
    <section className="relative bg-white pb-20 sm:pb-28 lg:pb-32 text-slate-900 pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-20 -mt-16 sm:-mt-20 lg:-mt-[72px]">
        
        {/* Floating White Stats Bar Card - Exactly 50% in Hero, 50% in Light Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl py-8 lg:py-10 px-4 lg:px-8 shadow-[0_30px_40px_-15px_rgba(0,0,0,0.35)] border border-slate-100 mb-16 sm:mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 gap-y-8 lg:gap-y-0">
            {statsData.map((stat, idx) => (
              <div key={idx} className="text-center flex flex-col justify-center items-center lg:px-2">
                <span className="text-3xl lg:text-[36px] font-bold text-[#00AEEF] tracking-tight block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-slate-600">
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
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#061838] via-[#092659] to-[#0c3172] border border-blue-500/20 p-8 sm:p-10 flex flex-col justify-between shadow-2xl group"
          >
            {/* Visual Screen Mockup Overlay on Right Side */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 sm:opacity-30 pointer-events-none overflow-hidden">
              <div className="absolute right-[-20%] top-[10%] w-[130%] h-[90%] rounded-2xl border border-[#00AEEF]/30 bg-[#07193c] p-4 shadow-2xl transform rotate-[-6deg] transition-transform duration-700 group-hover:rotate-[-4deg] group-hover:scale-105">
                <div className="w-full h-4 bg-[#00AEEF]/20 rounded mb-3" />
                <div className="w-3/4 h-3 bg-white/30 rounded mb-2" />
                <div className="w-1/2 h-3 bg-white/20 rounded mb-4" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 bg-[#00AEEF]/30 rounded-lg" />
                  <div className="h-16 bg-[#00AEEF]/20 rounded-lg" />
                </div>
              </div>
            </div>

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
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#140b2e] via-[#211347] to-[#311b66] border border-purple-500/20 p-8 sm:p-10 flex flex-col justify-between shadow-2xl group"
          >
            {/* Visual Smartphone Profile Mockup Overlay on Right Side */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 sm:opacity-30 pointer-events-none overflow-hidden">
              <div className="absolute right-[-10%] top-[8%] w-[80%] h-[110%] rounded-3xl border-2 border-purple-400/30 bg-[#190d38] p-3 shadow-2xl transform rotate-[8deg] transition-transform duration-700 group-hover:rotate-[6deg] group-hover:scale-105">
                <div className="w-12 h-2 bg-purple-400/40 rounded-full mx-auto mb-3" />
                <div className="w-12 h-12 rounded-full bg-purple-500/40 mx-auto mb-2" />
                <div className="w-20 h-2.5 bg-white/40 rounded mx-auto mb-1" />
                <div className="w-28 h-2 bg-white/20 rounded mx-auto mb-3" />
                <div className="grid grid-cols-3 gap-1 px-1">
                  <div className="h-14 bg-purple-600/30 rounded" />
                  <div className="h-14 bg-purple-600/30 rounded" />
                  <div className="h-14 bg-purple-600/30 rounded" />
                </div>
              </div>
            </div>

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
