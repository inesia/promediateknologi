'use client'

import { motion } from 'framer-motion'
import { Camera, Mic, Monitor, Video } from 'lucide-react'

const software = [
  {
    name: 'Premiere Pro',
    icon: Video,
    color: '#EA77FF',
  },
  {
    name: 'CapCut',
    icon: Scissors,
    color: '#00AEEF',
  },
]

const hardware = [
  {
    name: 'Kamera',
    icon: Camera,
    color: '#00AEEF',
  },
  {
    name: 'Microphone',
    icon: Mic,
    color: '#2D74B3',
  },
  {
    name: 'Monitor',
    icon: Monitor,
    color: '#00AEEF',
  },
]

function Scissors({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  )
}

export default function GearTools() {
  return (
    <section className="relative py-4 lg:py-32 bg-[#000F1A] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(0,174,239,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Perangkat & Alat
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Software dan hardware yang digunakan dalam produksi video profesional
          </p>
        </motion.div>

        {/* Software Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Perangkat Lunak</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {software.map((item, index) => {
              const Icon = item.icon
              return (
                <NeonIconCard
                  key={item.name}
                  name={item.name}
                  icon={Icon}
                  color={item.color}
                  index={index}
                />
              )
            })}
          </div>
        </motion.div>

        {/* Hardware Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Perangkat Keras</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {hardware.map((item, index) => {
              const Icon = item.icon
              return (
                <NeonIconCard
                  key={item.name}
                  name={item.name}
                  icon={Icon}
                  color={item.color}
                  index={index + 2}
                />
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function NeonIconCard({
  name,
  icon: Icon,
  color,
  index,
}: {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300">
        {/* Neon Icon Outline */}
        <div className="flex items-center justify-center mb-4">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div
              style={{
                filter: `drop-shadow(0 0 10px ${color}) drop-shadow(0 0 20px ${color})`,
                color: color,
              }}
            >
              <Icon className="w-16 h-16" />
            </div>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div
                style={{
                  color: color,
                  filter: `blur(8px)`,
                  opacity: 0.5,
                }}
              >
                <Icon className="w-16 h-16" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Name */}
        <h4 className="text-lg font-semibold text-white text-center">{name}</h4>

        {/* Neon border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            boxShadow: `0 0 20px ${color}40`,
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}
