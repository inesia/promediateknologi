'use client'

import { motion } from 'framer-motion'
import { Play, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative py-4 lg:py-32 bg-gradient-to-b from-[#000F1A] via-slate-900 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#000F1A] to-transparent" />
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-full mb-6 border border-[#00AEEF]/30">
            <Sparkles className="w-5 h-5 text-[#00AEEF]" />
            <span className="text-sm font-semibold text-[#00AEEF]">
              Siap Berkreasi
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
            Mulai Produksi Anda
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Bergabunglah sebagai Videopreneur dan jadilah bagian dari tim yang menciptakan konten visual berkualitas tinggi
          </p>

          {/* CTA Button with Neon Gradient */}
          <Link href="/register?role=videopreneur">
            <motion.div
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-white font-semibold text-lg rounded-xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Neon Gradient Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00AEEF] via-[#2D74B3] to-[#00AEEF]"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] blur-xl opacity-50" />

              {/* Content */}
              <span className="relative z-10">Mulai Produksi Anda</span>
              <Play className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="white" />

              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          </Link>

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
