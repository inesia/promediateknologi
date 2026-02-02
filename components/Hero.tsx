'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Users, TrendingUp, Zap, MapPin } from 'lucide-react'
import Link from 'next/link'

// Wave Component - Elegant Background Animation
interface WaveProps {
  className?: string
  pathColor: string
  duration?: number
  delay?: number
  reverse?: boolean
}

function Wave({ className = '', pathColor, duration = 20, delay = 0, reverse = false }: WaveProps) {
  return (
    <motion.svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 1440 800"
      preserveAspectRatio="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      <motion.path
        d="M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
        fill={pathColor}
        initial={{ d: "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z" }}
        animate={{
          d: [
            "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z",
            "M0,380 C320,480 420,280 720,380 C1020,480 1120,280 1440,380 L1440,800 L0,800 Z",
            "M0,420 C320,320 420,520 720,420 C1020,320 1120,520 1440,420 L1440,800 L0,800 Z",
            "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z",
          ]
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
          direction: reverse ? 'reverse' : 'normal',
        }}
      />
    </motion.svg>
  )
}

// Floating Card Component dengan Statistik
interface FloatingCardProps {
  icon: React.ReactNode
  value: string
  label: string
  delay: number
  duration: number
  className?: string
}

function FloatingCard({ icon, value, label, delay, duration, className }: FloatingCardProps) {
  return (
    <motion.div
      className={`absolute ${className} hidden md:block`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <motion.div
        className="relative w-48 sm:w-56 lg:w-64 p-6 bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl shadow-slate-200/50 cursor-pointer"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          y: -25,
          boxShadow: '0 25px 50px -12px rgba(0, 174, 239, 0.25)',
          transition: { duration: 0.3 }
        }}
      >
        {/* Glassmorphism effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#00AEEF]/10 to-[#2D74B3]/10">
            <div className="text-[#00AEEF]">
              {icon}
            </div>
          </div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#001A2C] mb-2">
            {value}
          </div>
          <div className="text-sm sm:text-base text-[#64748b] font-medium">
            {label}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Animated counter for 1 Billion - Media Profile 2025
function BillionCounter() {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => v.toFixed(1))
  const [display, setDisplay] = useState('0.0')

  useEffect(() => {
    const controls = animate(count, 1, {
      duration: 2.2,
      ease: 'easeOut',
    })
    return () => controls.stop()
  }, [count])

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(v))
    return () => unsub()
  }, [rounded])

  return (
    <span className="tabular-nums">
      <motion.span
        key={display}
        initial={{ opacity: 0.8, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
      >
        {display}
      </motion.span>
    </span>
  )
}

// Statistik data - Media Profile 2025
const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: '1,200+',
    label: 'Media Network',
    delay: 0.2,
    duration: 6,
    className: 'top-20 left-4 sm:left-8 lg:left-16',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: '1 Billion+',
    label: 'Unique Users/Year',
    delay: 0.4,
    duration: 7,
    className: 'top-40 right-4 sm:right-8 lg:right-16',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: '3.1 Billion+',
    label: 'Pageviews/Year',
    delay: 0.6,
    duration: 8,
    className: 'bottom-32 left-8 sm:left-16 lg:left-24',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    value: '210+',
    label: 'Cities & Regencies',
    delay: 0.8,
    duration: 9,
    className: 'bottom-20 right-8 sm:right-16 lg:right-24',
  },
]

export default function Hero() {
  // Blur-in Animation Effect
  const blurIn = {
    initial: { opacity: 0, filter: 'blur(10px)', y: 20 },
    animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 lg:pt-24 pb-12 md:pb-0"
    >
      {/* Animated Ambient Glow - Reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[#00AEEF]/5 rounded-full blur-3xl ambient-glow" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#2D74B3]/5 rounded-full blur-3xl ambient-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-[#00AEEF]/3 rounded-full blur-3xl ambient-glow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Optimized Waves Background - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {/* Wave 1 */}
        <Wave 
          pathColor="url(#gradient1)"
          duration={30}
          delay={0}
          className="opacity-20"
        />
        
        {/* Wave 2 */}
        <Wave 
          pathColor="url(#gradient2)"
          duration={40}
          delay={2}
          reverse={true}
          className="opacity-15"
        />
        
        {/* SVG Gradients Definition - Promedia Colors */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#2D74B3" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2D74B3" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.02" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Cards dengan Statistik */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stats.map((stat, index) => (
          <FloatingCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            delay={stat.delay}
            duration={stat.duration}
            className={stat.className}
          />
        ))}
      </div>

      {/* Content - Center Aligned */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge - Mavericks & Ahead */}
          <motion.div
            {...blurIn}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-flex items-center justify-center mb-4 md:mb-6 lg:mb-8"
          >
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-full backdrop-blur-sm">
              <span className="text-[10px] md:text-xs font-semibold text-[#00AEEF] tracking-wide uppercase">
                Mavericks & Ahead
              </span>
            </div>
          </motion.div>

          {/* Headline - Optimized for mobile */}
          <motion.h1
            {...blurIn}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#001A2C] mb-4 md:mb-6 lg:mb-8 leading-[1.15] md:leading-[1.1] px-2"
            style={{ letterSpacing: '-0.03em' }}
          >
            Ekosistem Media Digital{' '}
            <span className="bg-gradient-to-r from-[#00AEEF] via-[#2D74B3] to-[#00AEEF] bg-clip-text text-transparent block md:inline">
              Terintegrasi
            </span>
          </motion.h1>

          {/* Sub-headline - Optimized for mobile */}
          <motion.p
            {...blurIn}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#64748b] mb-6 md:mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-normal px-2"
          >
            Memberdayakan Mediapreneur & Contentpreneur melalui teknologi media yang inklusif dan berkelanjutan.
          </motion.p>

          {/* Media Profile 2025 - 1 Billion highlight with counter */}
          <motion.div
            {...blurIn}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mb-6 md:mb-8 lg:mb-10"
          >
            <div className="inline-block px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-gradient-to-br from-[#00AEEF]/8 via-white to-[#2D74B3]/8 border border-[#00AEEF]/20 shadow-lg shadow-[#00AEEF]/5">
              <p className="text-xs md:text-sm font-semibold text-[#64748b] uppercase tracking-wider mb-1 md:mb-2">
                Jangkauan User / Year
              </p>
              <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
                <span className="text-6xl sm:text-7xl md:text-8xl font-black text-[#001A2C] tracking-tighter">
                  <BillionCounter />
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#00AEEF] via-[#2D74B3] to-[#00AEEF] bg-clip-text text-transparent tracking-tight">
                  Billion+
                </span>
              </div>
              <p className="text-[10px] md:text-xs text-[#64748b] mt-2 md:mt-3 font-medium">
                Verified by Google Analytics & Internal Data 2025
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons - Full width on mobile */}
          <motion.div
            {...blurIn}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 lg:gap-6 px-4"
          >
            <Link href="/register" className="w-full sm:w-auto">
              <motion.div
                className="btn-shimmer px-6 py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-4 text-sm md:text-base lg:text-lg font-semibold text-white rounded-xl shadow-xl shadow-[#00AEEF]/30 hover:shadow-[#00AEEF]/50 transition-all duration-300 relative overflow-hidden cursor-pointer w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Mulai Sekarang</span>
              </motion.div>
            </Link>

            <motion.button
              type="button"
              onClick={() => {
                document.getElementById('brand-statement')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="px-6 py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-4 text-sm md:text-base lg:text-lg font-semibold text-[#001A2C] bg-transparent border-2 border-[#00AEEF]/30 rounded-xl hover:border-[#00AEEF] hover:bg-[#00AEEF]/5 transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pelajari Lebih Lanjut
            </motion.button>
          </motion.div>

          {/* Mobile Stats Grid - Show stats in grid on mobile */}
          <motion.div
            {...blurIn}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 md:hidden grid grid-cols-2 gap-4 px-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-[#00AEEF]/10 to-[#2D74B3]/10">
                  <div className="text-[#00AEEF]">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-[#001A2C] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#64748b] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#00AEEF]/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#00AEEF]/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
