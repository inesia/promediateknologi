'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function DalamAngkaCTA() {
  return (
    <section className="py-16 lg:py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-black text-[#001A2C] mb-4">
            Siap Berkolaborasi di Skala Ini?
          </h2>
          <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Diskusikan strategi kampanye, paket iklan, dan aktivasi influencer dengan tim
            Promedia Ad Solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/628112007667?text=Halo,%20saya%20ingin%20diskusi%20kampanye%20berdasarkan%20data%20Promedia%20Dalam%20Angka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 text-[#001A2C] font-semibold rounded-xl hover:border-[#00AEEF]/40 hover:bg-slate-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#00AEEF]" />
              Konsultasi via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
