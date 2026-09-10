'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalStatement() {
  return (
    <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00AEEF]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#2D74B3]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Statement */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-8 leading-tight">
            Ready to join the universe?
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed">
            Bergabunglah dengan ekosistem Promedia Teknologi dan jadilah bagian dari revolusi media digital Indonesia.
          </p>

          {/* CTA Button */}
          <motion.a
            href={`${window.location.origin}/register`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Daftar</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 flex justify-center"
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
