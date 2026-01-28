'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#001A2C] overflow-hidden">
      {/* Animated Blue Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full rounded-full bg-[#00AEEF] blur-[120px]" />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <div className="w-full h-full rounded-full bg-[#2D74B3] blur-[100px]" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-full backdrop-blur-sm">
              <span className="text-xs font-semibold text-[#00AEEF] tracking-wide uppercase">
                Get Started Today
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 lg:mb-8 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ready to Scale Your{' '}
            <span className="bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] bg-clip-text text-transparent">
              Media Business?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg lg:text-xl text-slate-300 mb-10 lg:mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Bergabunglah dengan 1,000+ media partners yang telah mempercayai Promedia untuk mengembangkan bisnis mereka.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/register">
              <motion.div
                className="btn-shimmer group px-8 py-4 lg:px-10 lg:py-5 text-base lg:text-lg font-semibold text-white rounded-xl shadow-2xl shadow-[#00AEEF]/30 hover:shadow-[#00AEEF]/50 transition-all duration-300 relative overflow-hidden flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Mulai Sekarang</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>

            <motion.a
              href="#"
              className="px-8 py-4 lg:px-10 lg:py-5 text-base lg:text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Sales
            </motion.a>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-600" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>Free trial available</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}
