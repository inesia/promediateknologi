'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const headline = "The Architects of Media Ecosystem"
const words = headline.split(' ')

export default function AboutHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00AEEF]/[0.02] via-transparent to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00AEEF]/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#2D74B3]/[0.02] rounded-full blur-3xl" />

      {/* Ornamental elements */}
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-[#00AEEF]/10 rounded-lg"
        animate={mounted ? {
          rotate: [0, 5, -5, 0],
          y: [0, -20, 0],
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 border-2 border-[#2D74B3]/10 rounded-full"
        animate={mounted ? {
          rotate: [0, -10, 10, 0],
          scale: [1, 1.1, 1],
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-[#00AEEF]/5 to-[#2D74B3]/5 rounded-lg rotate-45"
        animate={mounted ? {
          rotate: [45, 50, 40, 45],
          opacity: [0.3, 0.6, 0.3],
        } : {}}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />

      {/* Floating dots pattern */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00AEEF]/20 rounded-full"
          style={{
            left: `${10 + (i % 4) * 25}%`,
            top: `${15 + Math.floor(i / 4) * 30}%`,
          }}
          animate={mounted ? {
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          } : {}}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Decorative lines */}
      <motion.svg
        className="absolute top-1/2 left-0 w-full h-px opacity-10"
        initial={{ pathLength: 0 }}
        animate={mounted ? { pathLength: 1 } : {}}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <motion.line
          x1="10%"
          y1="0"
          x2="90%"
          y2="0"
          stroke="#00AEEF"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </motion.svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Headline with blur-to-clear effect */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#001A2C] leading-tight tracking-tight mb-8">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-[0.2em]"
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={mounted ? { 
                  opacity: 1, 
                  filter: 'blur(0px)',
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Membangun ekosistem media digital terintegrasi untuk masa depan industri media Indonesia
          </motion.p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-[#00AEEF]/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-[#00AEEF] rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
