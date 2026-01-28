'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Car } from 'lucide-react'

export default function PokjaOtomotifHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Silver Metallic Background with Slanted Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <SlantedLinesPattern />
      </div>

      {/* Motion Blur Background Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <MotionBlurEffect />
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
              Drive the Narrative.
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Wadah jurnalis otomotif untuk mengulas industri, hobi, dan mobilitas masa depan.
            </p>
          </motion.div>

          {/* Right: Futuristic Car Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex items-center justify-center"
          >
            <FuturisticCarVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SlantedLinesPattern() {
  return (
    <div className="absolute inset-0">
      {/* Silver Metallic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-white" />
      
      {/* Slanted Lines for Speed Effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          style={{
            top: `${i * 5}%`,
            left: `${-10 + (i % 3) * 5}%`,
            width: '120%',
            transform: `skewX(-45deg)`,
          }}
          animate={{
            x: [0, 100],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

function MotionBlurEffect() {
  return (
    <div className="relative w-full h-full">
      {/* Car silhouette with motion blur */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [-200, 200],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
            ease: 'easeInOut',
          }}
        >
          <div className="w-64 h-32 bg-gradient-to-r from-transparent via-slate-400/20 to-transparent blur-2xl transform skew-x-12" />
        </motion.div>
      ))}
    </div>
  )
}

function FuturisticCarVisual() {
  return (
    <div className="relative w-full max-w-lg h-[500px]">
      {/* Main Car Illustration */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Car Body */}
        <div className="relative w-80 h-40">
          {/* Car Silhouette */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl shadow-2xl transform -skew-x-6">
            {/* Car Windows */}
            <div className="absolute top-4 left-8 w-24 h-12 bg-slate-900/50 rounded-lg border border-slate-600" />
            <div className="absolute top-4 right-8 w-24 h-12 bg-slate-900/50 rounded-lg border border-slate-600" />
            
            {/* Car Wheels */}
            <div className="absolute bottom-2 left-8 w-16 h-16 bg-slate-900 rounded-full border-4 border-slate-600">
              <div className="absolute inset-2 bg-slate-700 rounded-full" />
            </div>
            <div className="absolute bottom-2 right-8 w-16 h-16 bg-slate-900 rounded-full border-4 border-slate-600">
              <div className="absolute inset-2 bg-slate-700 rounded-full" />
            </div>

            {/* Car Details */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-[#D90429] to-transparent" />
          </div>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#D90429]/20 to-transparent blur-2xl rounded-2xl -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Car Icon Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Car className="w-32 h-32 text-[#D90429] opacity-20" />
        </div>
      </motion.div>

      {/* Speed Lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          style={{
            width: '100%',
            y: -20 + i * 5,
          }}
          animate={{
            x: [0, 100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
