'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight, Heart, Share2, MessageCircle } from 'lucide-react'

export default function SocmedpreneurHero() {
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
              Master the Algorithm.
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Optimasi dan monetisasi media sosial untuk mendorong traffic ekosistem Promedia.
            </p>

            {/* CTA Button */}
            <motion.a
              href="https://bit.ly/promediamitra"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00AEEF] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Apply as Socmed Specialist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right: Smartphone Mockup with Bubbles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex items-center justify-center"
          >
            <SmartphoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SmartphoneMockup() {
  return (
    <div className="relative w-full max-w-md">
      {/* Smartphone Frame */}
      <motion.div
        className="relative mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Phone Body */}
        <div className="relative w-64 h-[500px] mx-auto bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Screen */}
          <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
            {/* Status Bar */}
            <div className="h-8 bg-slate-100 flex items-center justify-between px-6 text-xs">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-slate-400 rounded-sm" />
                <div className="w-1 h-1 bg-slate-400 rounded-full" />
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-4">
              {/* Post Card */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] rounded-full" />
                  <div className="flex-1">
                    <div className="h-3 bg-slate-300 rounded w-24 mb-1" />
                    <div className="h-2 bg-slate-200 rounded w-16" />
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-br from-[#00AEEF]/20 to-[#2D74B3]/20 rounded-lg mb-3" />
                <div className="h-2 bg-slate-200 rounded w-full mb-1" />
                <div className="h-2 bg-slate-200 rounded w-3/4" />
              </div>
            </div>

            {/* Action Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around px-8">
              <div className="w-6 h-6 bg-slate-300 rounded" />
              <div className="w-6 h-6 bg-slate-300 rounded" />
              <div className="w-12 h-12 bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] rounded-full -mt-6 shadow-lg" />
              <div className="w-6 h-6 bg-slate-300 rounded" />
              <div className="w-6 h-6 bg-slate-300 rounded" />
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl" />
        </div>
      </motion.div>

      {/* Animated Bubbles */}
      <SocialBubbles />
    </div>
  )
}

function SocialBubbles() {
  const bubbles = [
    {
      icon: Heart,
      label: '1.2K',
      color: 'from-red-500 to-pink-500',
      position: { top: '10%', right: '-10%' },
      delay: 0.5,
    },
    {
      icon: Share2,
      label: '456',
      color: 'from-blue-500 to-cyan-500',
      position: { top: '30%', left: '-15%' },
      delay: 1,
    },
    {
      icon: MessageCircle,
      label: '89',
      color: 'from-green-500 to-emerald-500',
      position: { bottom: '20%', right: '-10%' },
      delay: 1.5,
    },
    {
      icon: Heart,
      label: '2.5K',
      color: 'from-red-500 to-pink-500',
      position: { bottom: '10%', left: '-15%' },
      delay: 2,
    },
  ]

  return (
    <>
      {bubbles.map((bubble, index) => {
        const Icon = bubble.icon
        return (
          <motion.div
            key={index}
            className="absolute"
            style={bubble.position}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.2, 1, 0.8],
              y: [20, -10, -20, -30],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: bubble.delay,
              ease: 'easeOut',
            }}
          >
            <div className={`relative bg-gradient-to-br ${bubble.color} rounded-full p-4 shadow-xl flex items-center gap-2`}>
              <Icon className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-sm">{bubble.label}</span>
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bubble.color} rounded-full blur-lg opacity-50 -z-10`} />
            </div>
          </motion.div>
        )
      })}
    </>
  )
}
