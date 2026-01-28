'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Smartphone, Laptop, Cpu } from 'lucide-react'

export default function PokjaTeknoHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <CircuitPattern />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[#001A2C]"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#001A2C] mb-6 leading-tight">
              Decoding the Future.
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Komunitas jurnalis teknologi yang mengawal inovasi dan literasi digital di Indonesia.
            </p>
          </motion.div>

          {/* Right: 3D Isometric Gadgets */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex items-center justify-center"
          >
            <IsometricGadgets />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CircuitPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 400">
      <defs>
        <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 0 20 L 40 20 M 20 0 L 20 40"
            stroke="#00AEEF"
            strokeWidth="0.5"
            fill="none"
          />
          <circle cx="20" cy="20" r="2" fill="#00AEEF" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
      
      {/* Animated glowing lines */}
      {[...Array(8)].map((_, i) => (
        <motion.path
          key={i}
          d={`M ${50 + i * 50} ${50 + (i % 2) * 100} L ${100 + i * 50} ${100 + (i % 2) * 100}`}
          stroke="#00AEEF"
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0.05 }}
          animate={{
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </svg>
  )
}

function IsometricGadgets() {
  return (
    <div className="relative w-full max-w-lg h-[500px]">
      {/* Smartphone */}
      <motion.div
        className="absolute top-20 left-1/4"
        initial={{ opacity: 0, y: 50, rotateX: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="relative"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-24 h-40 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl shadow-2xl border border-slate-600 p-2 transform rotate-12">
            <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
              <Smartphone className="w-12 h-12 text-[#00AEEF]" />
            </div>
          </div>
          {/* Glow */}
          <div className="absolute inset-0 bg-[#00AEEF]/20 blur-xl rounded-2xl -z-10" />
        </motion.div>
      </motion.div>

      {/* Laptop */}
      <motion.div
        className="absolute top-1/2 right-1/4 -translate-y-1/2"
        initial={{ opacity: 0, y: 50, rotateX: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          className="relative"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <div className="w-48 h-32 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg shadow-2xl border border-slate-600 p-2 transform -rotate-12">
            <div className="w-full h-full bg-black rounded flex items-center justify-center">
              <Laptop className="w-16 h-16 text-[#00AEEF]" />
            </div>
          </div>
          {/* Glow */}
          <div className="absolute inset-0 bg-[#00AEEF]/20 blur-xl rounded-lg -z-10" />
        </motion.div>
      </motion.div>

      {/* Chip */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 50, rotateX: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.div
          className="relative"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] rounded-lg shadow-2xl border border-[#00AEEF]/50 p-3 transform rotate-45">
            <div className="w-full h-full bg-[#00AEEF]/20 rounded flex items-center justify-center">
              <Cpu className="w-10 h-10 text-white transform -rotate-45" />
            </div>
          </div>
          {/* Glow */}
          <div className="absolute inset-0 bg-[#00AEEF]/30 blur-xl rounded-lg -z-10" />
        </motion.div>
      </motion.div>
    </div>
  )
}
