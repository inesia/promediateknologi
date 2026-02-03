'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section
      id="contact-consultant"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: '#001A2C' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Siap Mengamankan Reputasi Brand Anda?
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Hubungi tim konsultan kami untuk audit komunikasi, perencanaan strategi, atau dukungan krisis.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20strategi%20komunikasi%20untuk%20perusahaan%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#001A2C] bg-white hover:bg-slate-100 transition-colors rounded-lg"
          >
            Hubungi Tim Konsultan
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
