'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'

export default function VideopreneurHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-[#000F1A] overflow-hidden pt-20">
      {/* Abstract Video Background (Blur) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0,174,239,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(45,116,179,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0,174,239,0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Video-like grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0,174,239,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00AEEF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              y: [0, -100, -200],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Visualize the Story.
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Program Promedia TV untuk memperkaya inventori video dan konten visual bergerak.
            </p>

            {/* CTA Button */}
            <motion.a
              href="https://bit.ly/promediamitra"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Production</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right: Giant Play Button with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex items-center justify-center"
          >
            <GiantPlayButton />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GiantPlayButton() {
  return (
    <div className="relative w-full max-w-md">
      {/* Glassmorphism Play Button */}
      <motion.div
        className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] opacity-20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Glassmorphism container */}
        <div className="relative w-full h-full bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl flex items-center justify-center">
          {/* Play icon */}
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] flex items-center justify-center shadow-xl">
              <Play className="w-16 h-16 lg:w-20 lg:h-20 text-white ml-2" fill="white" />
            </div>
          </motion.div>

          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00AEEF]/30 to-[#2D74B3]/30 blur-xl" />

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              background: [
                'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent)',
                'conic-gradient(from 180deg, transparent, rgba(255,255,255,0.1), transparent)',
                'conic-gradient(from 360deg, transparent, rgba(255,255,255,0.1), transparent)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </motion.div>

      {/* Floating video frames */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-12 border-2 border-[#00AEEF]/30 rounded bg-[#00AEEF]/10 backdrop-blur-sm"
          style={{
            top: `${20 + i * 25}%`,
            left: i % 2 === 0 ? '-10%' : 'auto',
            right: i % 2 === 1 ? '-10%' : 'auto',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}
