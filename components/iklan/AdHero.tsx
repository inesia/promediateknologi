'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ReachSimulator from './ReachSimulator'

export default function AdHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden pt-20">
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
              Iklan Terintegrasi di Jaringan Media Promedia
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Solusi periklanan untuk hubungkan brand dengan audiens melalui jaringan media lintas segmen dan daerah.
            </p>
          </motion.div>

          {/* Right: Reach Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <ReachSimulator />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
