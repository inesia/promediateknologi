'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
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
            Butuh Bantuan Memilih Media?
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Konsultasikan kebutuhan SEO dan backlink Anda dengan tim ahli kami. Dapatkan rekomendasi media terbaik untuk meningkatkan ranking website Anda.
          </p>

          {/* WhatsApp CTA Button */}
          <motion.a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20SEO%20Marketplace%20Promedia.%20Saya%20ingin%20konsultasi%20tentang%20backlink%20dan%20content%20placement."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
            <span>Konsultasi via WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Benefits List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3 text-left">
              <CheckCircle className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-[#001A2C] mb-1">Konsultasi Gratis</div>
                <div className="text-sm text-slate-600">Diskusi tanpa biaya</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-[#001A2C] mb-1">Respon Cepat</div>
                <div className="text-sm text-slate-600">Tim siap membantu 24/7</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-[#001A2C] mb-1">Rekomendasi Personal</div>
                <div className="text-sm text-slate-600">Sesuai kebutuhan Anda</div>
              </div>
            </div>
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#25D366]/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
