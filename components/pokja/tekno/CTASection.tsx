'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-4 lg:py-32 bg-[#0B1120] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00AEEF]/[0.05] rounded-full blur-3xl" />
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
            Join the Tech Squad
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Bergabunglah dengan komunitas jurnalis teknologi terdepan di Indonesia
          </p>

          {/* Cyberpunk Style Button */}
          <motion.a
            href="https://bit.ly/promediamitra"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg transition-all duration-300 overflow-hidden"
            style={{
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Sharp corners effect */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white/50" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white/50" />

            <span className="relative z-10">Join the Tech Squad</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                filter: 'blur(10px)',
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
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
