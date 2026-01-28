'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const platforms = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: Facebook,
    color: '#1877F2',
    glowColor: 'from-blue-500 to-blue-600',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    color: '#E4405F',
    glowColor: 'from-pink-500 to-purple-600',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: Twitter,
    color: '#1DA1F2',
    glowColor: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: () => (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    color: '#000000',
    glowColor: 'from-gray-800 to-gray-900',
  },
]

export default function PlatformFocus() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
            Platform Focus
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Platform media sosial yang menjadi fokus optimasi dan monetisasi
          </p>
        </motion.div>

        {/* Glass Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            const isHovered = hoveredId === platform.id

            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(platform.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                {/* Glass Icon Container */}
                <motion.div
                  className="relative w-full aspect-square bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg flex flex-col items-center justify-center p-6 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    boxShadow: isHovered
                      ? `0 20px 40px -10px ${platform.color}40, 0 0 0 1px ${platform.color}20`
                      : undefined,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="mb-4 transition-colors duration-300"
                    style={{
                      color: isHovered ? platform.color : '#64748b',
                    }}
                  >
                    <Icon />
                  </div>

                  {/* Platform Name */}
                  <span className="text-sm font-semibold text-slate-700">
                    {platform.name}
                  </span>

                  {/* Glow Effect on Hover */}
                  {isHovered && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${platform.glowColor} opacity-20 rounded-2xl blur-xl -z-10`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl pointer-events-none" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
