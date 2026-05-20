'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function FinalCTA() {
  const requirements = [
    { title: 'Mediapreneur', items: ['Memiliki badan hukum (PT/CV/Yayasan)', 'Minimal 5 jurnalis/penulis tetap', 'Berkomitmen mengelola media secara profesional'] },
    { title: 'Contentpreneur', items: ['Memiliki portofolio karya tulis/jurnalisme', 'Memiliki minat tinggi di dunia digital media', 'Berkomitmen memproduksi konten berkualitas'] },
    { title: 'Influencer Media Network', items: ['Memiliki akun media sosial aktif', 'Minimal followers/engagement sesuai standar', 'Berkomitmen membangun dampak positif'] },
  ]

  return (
    <section id="pendaftaran" className="relative py-20 lg:py-32 bg-[#001A2C] overflow-hidden">
      {/* Animated Blue Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full rounded-full bg-[#00AEEF] blur-[120px]" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 leading-tight">
                Persyaratan <span className="text-[#00AEEF]">Pendaftaran</span>
              </h2>
              
              <div className="space-y-8 text-left">
                {requirements.map((req, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00AEEF]" />
                      {req.title}
                    </h3>
                    <ul className="space-y-2 pl-4">
                      {req.items.map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-[#00AEEF]">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: CTA / Form Link */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-3xl text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Mulai Perjalanan Anda</h3>
              <p className="text-slate-300 mb-8">
                Isi formulir pendaftaran mitra kami melalui Google Form. Tim kami akan segera menghubungi Anda.
              </p>

              <Link href="https://forms.fillout.com/t/18DvaYMThNus" target="_blank">
                <motion.div
                  className="btn-shimmer group px-8 py-5 text-lg font-bold text-white rounded-2xl shadow-2xl shadow-[#00AEEF]/30 hover:shadow-[#00AEEF]/50 transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-3 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Daftar Jadi Mitra</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>

              <p className="mt-6 text-xs text-slate-500">
                Dengan mendaftar, Anda menyetujui Ketentuan Layanan dan Kebijakan Privasi Promedia.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave Divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}
