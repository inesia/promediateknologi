'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'

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
            Siap Memulai Kampanye Iklan Anda?
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Konsultasikan kebutuhan iklan Anda dengan tim kami dan dapatkan strategi terbaik untuk mencapai target bisnis Anda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20iklan%20Promedia%20Ad%20Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Konsultasi via WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Phone CTA */}
            <motion.a
              href="tel:+6281234567890"
              className="group flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#00AEEF] text-[#00AEEF] font-semibold text-lg rounded-xl hover:bg-[#00AEEF] hover:text-white transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Hubungi Kami</span>
            </motion.a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-[#00AEEF] mb-2">1.000+</div>
              <div className="text-sm text-slate-600">Media Premium</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#00AEEF] mb-2">24/7</div>
              <div className="text-sm text-slate-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#00AEEF] mb-2">100%</div>
              <div className="text-sm text-slate-600">Transparan</div>
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
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
