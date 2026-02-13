'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight, FileText, PenTool, Coins } from 'lucide-react'
import Link from 'next/link'

export default function ContentpreneurHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00AEEF]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#2D74B3]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#001A2C] mb-6 leading-tight">
              Berkarya, Berkembang, dan Terhubung
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Tempat jurnalis dan kreator mengembangkan karya, membangun reputasi, dan tumbuh bersama — lalu mengubahnya jadi pendapatan.
            </p>

            {/* CTA Button */}
            <Link href="/register?role=contentpreneur">
              <motion.div
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00AEEF] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Daftar Sekarang</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Right: Floating 3D Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[500px] lg:h-[600px]"
          >
            <FloatingElements />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FloatingElements() {
  return (
    <div className="relative w-full h-full">
      {/* Paper Element */}
      <motion.div
        className="absolute top-20 left-10 lg:left-20"
        initial={{ opacity: 0, y: 50, rotate: -15 }}
        animate={{
          opacity: 1,
          y: [0, -30, 0],
          rotate: [-15, -10, -15],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0,
        }}
      >
        <div className="relative w-32 h-40 bg-white rounded-lg shadow-2xl border border-slate-200 p-4">
          <FileText className="w-16 h-16 text-[#00AEEF] mx-auto" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/10 to-transparent rounded-lg" />
        </div>
      </motion.div>

      {/* Digital Pen Element */}
      <motion.div
        className="absolute top-1/2 right-10 lg:right-20"
        initial={{ opacity: 0, y: 50, rotate: 15 }}
        animate={{
          opacity: 1,
          y: [0, -40, 0],
          rotate: [15, 20, 15],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <div className="relative w-24 h-24 bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] rounded-full shadow-2xl flex items-center justify-center">
          <PenTool className="w-12 h-12 text-white" />
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
        </div>
      </motion.div>

      {/* Gold Coin Element */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 50, rotate: 0 }}
        animate={{
          opacity: 1,
          y: [0, -50, 0],
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <div className="relative w-28 h-28 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-2xl flex items-center justify-center">
          <Coins className="w-16 h-16 text-white" />
          <div className="absolute inset-0 bg-yellow-300/30 rounded-full blur-xl" />
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00AEEF]/30 rounded-full"
          style={{
            left: `${20 + (i % 4) * 20}%`,
            top: `${15 + Math.floor(i / 4) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  )
}
