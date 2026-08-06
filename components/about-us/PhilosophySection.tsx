'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax effect for background text
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.05, 0.05, 0.05, 0.05])

  return (
    <section 
      ref={sectionRef}
      id="tentang-kami"
      className="relative py-32 lg:py-40 bg-white overflow-hidden"
    >
      {/* Background "Expanding Universe" text */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-[15rem] lg:text-[20rem] font-black text-[#001A2C] opacity-[0.05] whitespace-nowrap select-none">
          Expanding Universe
        </h2>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
              Tentang Perusahaan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3]" />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16"
          >
            {/* About Us Paragraphs */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 sm:p-10 lg:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001A2C] tracking-tight">
                About Us
              </h3>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                <strong className="text-[#001A2C] font-semibold">Promedia Group</strong> adalah perusahaan pengembang ekosistem media digital yang berfokus pada pertumbuhan publisher, creator, dan influencer di Indonesia.
              </p>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                Kami percaya masa depan media tidak lagi bergantung pada satu platform. Karena itu kami membangun ekosistem multi-platform yang mengintegrasikan website, media sosial, teknologi, pelatihan, serta monetisasi agar setiap mitra dapat berkembang secara berkelanjutan.
              </p>
            </div>

            {/* Vision & Mission Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Vision Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#061838] to-[#092659] p-8 sm:p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden flex flex-col justify-between group border border-blue-500/20"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
                  style={{ backgroundImage: "url('/images/section-bgg.webp')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#061838]/90 to-[#092659]/80 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#00AEEF]/20 border border-[#00AEEF]/40 flex items-center justify-center text-[#00AEEF]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    Vision
                  </h3>
                  <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
                    Menjadi ekosistem media digital terbesar di Indonesia.
                  </p>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40 relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 flex items-center justify-center text-[#00AEEF]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#001A2C]">
                    Mission
                  </h3>
                  
                  <ul className="space-y-3.5">
                    {[
                      'Mengembangkan publisher profesional.',
                      'Memberdayakan creator.',
                      'Membangun teknologi media.',
                      'Meningkatkan monetisasi.',
                      'Menghubungkan brand dengan audience.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-base sm:text-lg text-slate-700 font-medium">
                        <div className="w-2 h-2 rounded-full bg-[#00AEEF] mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            </div>

            {/* Additional Company Narrative */}
            <div className="space-y-8 text-slate-700 leading-relaxed pt-6 border-t border-slate-200/60">
              <div>
                <h4 className="text-xl font-bold text-[#001A2C] mb-3">Profil & Perjalanan</h4>
                <p className="text-base sm:text-lg">
                  Promedia Group hadir dengan misi menumbuhkan dan mendampingi mitra-mitra media digital di seluruh Indonesia. Melalui berbagai inisiatif di bidang media digital, media sosial, hingga teknologi video, kami menyediakan platform, infrastruktur teknologi, monetisasi, serta jaringan media dan komunitas kreator dengan satu tujuan: tumbuh bersama secara berkelanjutan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
