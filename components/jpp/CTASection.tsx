'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00AEEF]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] flex items-center justify-center shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Copy */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001A2C] mb-8 leading-tight">
            Apakah Anda Pemimpin Redaksi?
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Bergabunglah dalam lingkaran ini.
          </p>

          {/* CTA Button - Outline Style */}
          <motion.a
            href="https://bit.ly/promediamitra"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#00AEEF] text-[#00AEEF] font-semibold text-lg rounded-xl hover:bg-[#00AEEF] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Gabung JPP</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

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
