'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-[#001A2C]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Rencanakan Kampanye Berikutnya
          </h2>
          <p className="text-slate-300 mb-8 text-sm sm:text-base leading-relaxed">
            Tim kami siap membantu memilih format, mitra media, dan strategi distribusi sesuai
            tujuan komunikasi Anda.
          </p>
          <motion.a
            href="https://wa.me/628112007667?text=Halo,%20saya%20tertarik%20dengan%20Product%20%26%20Success%20Story%20Campaign%20Promedia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#00AEEF] text-white font-semibold rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:bg-[#0099d6] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            Konsultasi via WhatsApp
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
