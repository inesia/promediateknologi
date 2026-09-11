'use client'

import { motion } from 'framer-motion'
import { Power } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-4 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D90429]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Copy */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001A2C] mb-8 leading-tight">
            Start Your Engine.
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Bergabunglah dengan komunitas jurnalis otomotif terdepan di Indonesia
          </p>

          {/* Engine Button Style */}
          <motion.a
            href="https://bit.ly/promediamitra"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-[#D90429] text-white font-semibold text-lg rounded-full shadow-lg shadow-[#D90429]/25 hover:shadow-[#D90429]/40 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-[#D90429] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                filter: 'blur(20px)',
              }}
            />

            {/* Button Content */}
            <span className="relative z-10">Start Your Engine</span>
            <Power className="w-5 h-5 relative z-10 group-hover:rotate-90 transition-transform duration-300" />

            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 border-2 border-white/30 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.a>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D90429]/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
