'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#001A2C] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Konsultasikan Kebutuhan Publikasi Anda
          </h2>
          <p className="text-slate-300 mb-8 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Tim Promedia Ad Solutions siap membantu merancang strategi publikasi, pemilihan media mitra, dan distribusi iklan yang selaras dengan target serta budget bisnis Anda.
          </p>
          <motion.a
            href="https://wa.me/628112007667?text=Halo%20Promedia%20Ad%20Solutions,%20saya%20ingin%20berkonsultasi%20mengenai%20paket%20dan%20strategi%20iklan%20di%20jaringan%20Promedia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#00AEEF] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:bg-[#0099d6] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Konsultasi Sekarang via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
