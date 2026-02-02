'use client'

import { motion } from 'framer-motion'
import { Server } from 'lucide-react'

const DARK_NAVY = '#000F1A'
const PRIMARY = '#00AEEF'
const PRIMARY_DIM = 'rgba(0, 174, 239, 0.15)'

export default function RowebHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-24 pb-16"
      style={{ backgroundColor: DARK_NAVY }}
    >
      {/* Circuit / Server lights background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY} stopOpacity="0.6" />
              <stop offset="100%" stopColor={PRIMARY} stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Flowing circuit lines */}
          <motion.path
            d="M0 120 L200 120 L240 80 L400 80 L440 200 L600 200 L640 320 L800 320 L880 400 L1200 400 L1280 280 L1440 280"
            fill="none"
            stroke="url(#circuit-grad)"
            strokeWidth="1"
            strokeDasharray="8 12"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0 400 L180 400 L220 500 L380 500 L420 350 L700 350 L740 450 L900 450 L960 550 L1200 550 L1300 600 L1440 600"
            fill="none"
            stroke="url(#circuit-grad)"
            strokeWidth="1"
            strokeDasharray="6 10"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2.5, delay: 0.3, ease: 'easeInOut' }}
          />
          <motion.path
            d="M1440 150 L1100 150 L1060 250 L800 250 L760 150 L500 150 L460 80 L200 80 L160 200 L0 200"
            fill="none"
            stroke="url(#circuit-grad)"
            strokeWidth="0.5"
            strokeDasharray="4 8"
            initial={{ pathLength: 0, opacity: 0.15 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, delay: 0.5, ease: 'easeInOut' }}
          />
        </svg>
        {/* Glowing dots (server lights) */}
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${8 + (i % 8) * 12}%`,
              top: `${10 + Math.floor(i / 8) * 25}%`,
              backgroundColor: PRIMARY,
              boxShadow: `0 0 8px ${PRIMARY}`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5 + (i % 3) * 0.3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/5 mb-6"
            >
              <Server className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider">
                Enterprise Infrastructure
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="text-[#00AEEF]">Roweb:</span> The Engine Behind 1,200+ Media.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Infrastruktur teknologi enterprise berbasis <strong className="text-white font-semibold">AWS</strong> dan <strong className="text-white font-semibold">Cloudflare</strong> yang menjamin uptime 99% dan keamanan siber tingkat tinggi.
            </motion.p>
          </div>

          {/* Isometric Server Rack + Indonesia map visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simplified Indonesia map outline (stylized) */}
                <motion.path
                  d="M280 180 Q300 160 320 180 Q340 200 320 240 Q300 280 280 260 Q260 240 280 180 Z M260 220 L240 200 L220 220 L240 240 Z"
                  stroke={PRIMARY_DIM}
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                {/* Connection lines from rack to map */}
                <motion.line x1="200" y1="200" x2="260" y2="210" stroke={PRIMARY} strokeWidth="0.5" strokeOpacity="0.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
                <motion.line x1="200" y1="220" x2="250" y2="230" stroke={PRIMARY} strokeWidth="0.5" strokeOpacity="0.4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} />
                {/* Isometric server rack (simplified 3D box + slots) */}
                <g transform="translate(80, 120) skewX(-10) scale(1.1)">
                  <motion.rect x="0" y="0" width="140" height="180" rx="4" fill="#0a1628" stroke={PRIMARY} strokeWidth="1" strokeOpacity="0.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.rect
                      key={i}
                      x="10"
                      y={20 + i * 28}
                      width="120"
                      height="22"
                      rx="2"
                      fill="#000F1A"
                      stroke={PRIMARY}
                      strokeWidth="0.5"
                      strokeOpacity="0.6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                    />
                  ))}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.circle
                      key={`led-${i}`}
                      cx="125"
                      cy={31 + i * 28}
                      r="3"
                      fill={PRIMARY}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </g>
                {/* Glow behind */}
                <ellipse cx="150" cy="220" rx="120" ry="80" fill={PRIMARY_DIM} opacity="0.5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
