'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00AEEF]/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001A2C] mb-6 leading-tight">
            Konsultasikan Kebutuhan Publikasi Anda
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Tim Promedia Group siap membantu merancang strategi publikasi dan distribusi iklan yang selaras dengan kebutuhan serta tujuan komunikasi Anda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20iklan%20Promedia%20Ad%20Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-[#00AEEF] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Konsultasi Sekarang</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
