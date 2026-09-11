'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
}

function Counter({ value, suffix = '+', duration = 2 }: CounterProps) {
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    motionValue.set(value)
  }, [value, motionValue])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return () => unsubscribe()
  }, [spring])

  return <span>{displayValue.toLocaleString('id-ID')}{suffix}</span>
}

export default function MembershipStats() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#001A2C] text-white overflow-hidden">
      {/* Background Map Visual (Abstract Dots) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Angka Anggota JPP
            </h2>
            <div className="text-7xl sm:text-8xl lg:text-9xl font-black text-[#00AEEF] mb-4">
              <Counter value={1200} suffix="+" />
            </div>
            <p className="text-xl text-slate-400">Media Tergabung</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map & Coverage Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Jaringan Nasional dari Berbagai Daerah di Indonesia
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              JPP menjangkau media dan pemimpin redaksi dari berbagai kota dan wilayah di Indonesia, membangun kolaborasi lintas daerah dalam satu ekosistem media yang setara.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 inline-block">
              <div className="text-4xl font-bold text-[#00AEEF] mb-1">
                <Counter value={230} suffix="+" />
              </div>
              <div className="text-slate-300 font-medium">Kabupaten & Kota</div>
            </div>
          </motion.div>

          {/* Simple Abstract Map Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] lg:h-[400px] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/20 to-transparent opacity-30" />
            
            {/* Dots representing Indonesia (very abstract) */}
             <div className="relative w-full h-full">
                {/* Sumatra */}
                <div className="absolute top-[30%] left-[15%] w-24 h-8 bg-[#00AEEF] rounded-full opacity-60 rotate-45 blur-xl" />
                {/* Java */}
                <div className="absolute top-[60%] left-[30%] w-32 h-6 bg-[#00AEEF] rounded-full opacity-70 rotate-10 blur-xl" />
                {/* Kalimantan */}
                <div className="absolute top-[25%] left-[40%] w-20 h-20 bg-[#00AEEF] rounded-full opacity-50 blur-xl" />
                {/* Sulawesi */}
                <div className="absolute top-[35%] left-[60%] w-16 h-24 bg-[#00AEEF] rounded-full opacity-50 -rotate-15 blur-xl" />
                {/* Papua */}
                <div className="absolute top-[40%] right-[15%] w-24 h-16 bg-[#00AEEF] rounded-full opacity-60 blur-xl" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white/20 tracking-[1em]">INDONESIA</span>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
