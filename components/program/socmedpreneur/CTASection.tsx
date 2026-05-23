'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { getPartnerFormUrl } from '@/lib/programRegistration'

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
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
          {/* Banner Text */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-full mb-6">
            <Zap className="w-5 h-5 text-[#00AEEF]" />
            <span className="text-sm font-semibold text-[#00AEEF]">
              Gabung Tim Kami
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001A2C] mb-8 leading-tight">
            Jadilah Motor Penggerak Traffic
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Bergabunglah sebagai Socmed Specialist dan jadilah bagian dari tim yang menggerakkan ekosistem media digital Promedia
          </p>

          {/* CTA Button */}
          <a
            href={getPartnerFormUrl('socmedpreneur')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00AEEF] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Daftar Influencer Media Network</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </a>

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
