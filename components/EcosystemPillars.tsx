'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, User, Check, ArrowRight, Users, UserCheck } from 'lucide-react'

const publisherBenefits = [
  'Dibuatkan Website Media Gratis',
  'Server & IT Maintenance Gratis',
  'Support Monetisasi & Dicarikan Iklan',
  'Pelatihan & Pendampingan Gratis',
]

const publisherSyaratOther = [
  'Pengalaman di Media Minimal 1 Tahun',
  'Komitmen Minimal 5 Artikel/Hari',
  'Bercita-cita bangun redaksi media sendiri',
]

const influencerBenefits = [
  'Dibuatkan Website Personal Gratis',
  'Server & IT Maintenance Gratis',
  'Support Monetisasi & Dicarikan Iklan',
  'Pelatihan & Pendampingan Gratis',
]

const influencerSyaratOther = [
  'Aktif Media Sosial (Min. 1000 Follower)',
  'Komitmen Minimal 1 Post/Hari di Medsos & Web',
  'Bercita-cita bangun personal brand & media personal',
]

export default function EcosystemPillars() {
  return (
    <section className="relative bg-white pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-28 lg:pb-32 text-slate-900 overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Section Heading */}
        <motion.div
          initial={false}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001A2C] mb-3 tracking-tight">
            Dua Pilar, Satu Ekosistem, Pertumbuhan Tanpa Batas
          </h2>
          <div className="w-12 h-1 bg-[#00AEEF] rounded-full mx-auto" />
        </motion.div>

        {/* Dual Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Card 1: Publisher Media Network */}
          <motion.div
            initial={false}
            className="relative rounded-3xl overflow-hidden bg-[#061838] border border-blue-500/20 p-8 sm:p-10 flex flex-col justify-between shadow-2xl group"
          >
            {/* Background Image Layer */}
            <div
              className="absolute inset-0 bg-cover bg-right lg:bg-center opacity-40 pointer-events-none transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/section-bgg.webp')" }}
            />
            {/* Directional Dark Gradient Overlay for perfect text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061838] via-[#061838]/95 to-[#092659]/60 pointer-events-none" />

            <div className="relative z-10 flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#00AEEF] flex items-center justify-center text-white shadow-lg shadow-[#00AEEF]/40 shrink-0">
                  <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Publisher Media Network
                  </h3>
                </div>
              </div>

              {/* Yang Anda Dapatkan */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] mb-3.5 flex items-center gap-2">
                  <span>Yang Anda Dapatkan:</span>
                </h4>
                <ul className="space-y-3">
                  {publisherBenefits.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base font-medium text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 flex items-center justify-center text-[#00AEEF] shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Syarat */}
              <div className="mb-8">
                {/* <h4 className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] mb-3.5">
                  Syarat:
                </h4> */}

                {/* Highlighted Syarat Box: Memiliki Tim Minimal 3 Orang */}
                <div className="mb-4 rounded-2xl bg-gradient-to-r from-[#00AEEF]/25 via-[#00AEEF]/15 to-[#00AEEF]/5 border border-[#00AEEF]/50 p-4 backdrop-blur-md flex items-center gap-3.5 shadow-lg shadow-[#00AEEF]/10 ring-1 ring-[#00AEEF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#00AEEF] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#00AEEF]/40">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#00AEEF] uppercase tracking-wider block mb-0.5">
                      Syarat Utama
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Memiliki Tim Minimal 3 Orang
                    </span>
                  </div>
                </div>

                {/* Other Syarat List */}
                <ul className="space-y-2.5 pl-1">
                  {publisherSyaratOther.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-[15px] font-medium text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-[#00AEEF] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action CTA */}
            <div className="relative z-10 pt-4 mt-auto border-t border-white/10">
              <Link
                href="https://go.promediateknologi.id/DaftarMitraMedia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group/btn inline-flex items-center justify-center w-full px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] hover:from-[#00bbf5] hover:to-[#3180c4] rounded-xl shadow-lg shadow-[#00AEEF]/30 transition-all cursor-pointer"
                >
                  <span>Daftar Program Publisher</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Influencer Media Network */}
          <motion.div
            initial={false}
            className="relative rounded-3xl overflow-hidden bg-[#140b2e] border border-purple-500/20 p-8 sm:p-10 flex flex-col justify-between shadow-2xl group"
          >
            {/* Background Image Layer */}
            <div
              className="absolute inset-0 bg-cover bg-right lg:bg-center opacity-40 pointer-events-none transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/section-bgc.webp')" }}
            />
            {/* Directional Dark Gradient Overlay for perfect text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#140b2e] via-[#140b2e]/95 to-[#211347]/60 pointer-events-none" />

            <div className="relative z-10 flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#7c4dff] flex items-center justify-center text-white shadow-lg shadow-purple-600/40 shrink-0">
                  <User className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Influencer Media Network
                  </h3>
                </div>
              </div>

              {/* Yang Anda Dapatkan */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#b388ff] mb-3.5 flex items-center gap-2">
                  <span>Yang Anda Dapatkan:</span>
                </h4>
                <ul className="space-y-3">
                  {influencerBenefits.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base font-medium text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-[#7c4dff]/20 border border-[#7c4dff]/40 flex items-center justify-center text-[#b388ff] shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Syarat */}
              <div className="mb-8">
                {/* <h4 className="text-xs font-bold uppercase tracking-wider text-[#b388ff] mb-3.5">
                  Syarat:
                </h4> */}

                {/* Highlighted Syarat Box: Min. Pengelola 1 Orang */}
                <div className="mb-4 rounded-2xl bg-gradient-to-r from-[#7c4dff]/25 via-[#7c4dff]/15 to-[#7c4dff]/5 border border-[#7c4dff]/50 p-4 backdrop-blur-md flex items-center gap-3.5 shadow-lg shadow-purple-600/10 ring-1 ring-[#7c4dff]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#7c4dff] flex items-center justify-center text-white shrink-0 shadow-md shadow-purple-600/40">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#b388ff] uppercase tracking-wider block mb-0.5">
                      Syarat Utama
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Min. Pengelola 1 Orang
                    </span>
                  </div>
                </div>

                {/* Other Syarat List */}
                <ul className="space-y-2.5 pl-1">
                  {influencerSyaratOther.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-[15px] font-medium text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-[#b388ff] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action CTA */}
            <div className="relative z-10 pt-4 mt-auto border-t border-white/10">
              <Link
                href="https://go.promediateknologi.id/VoxProCreators"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group/btn inline-flex items-center justify-center w-full px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#7c4dff] hover:bg-[#6c3be8] rounded-xl shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
                >
                  <span>Daftar Program Influencer</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </motion.div>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
