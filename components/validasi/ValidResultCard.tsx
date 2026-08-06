'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'

interface ValidResultCardProps {
  cardId: string
}

export default function ValidResultCard({ cardId }: ValidResultCardProps) {
  const [showShimmer, setShowShimmer] = useState(true)

  useEffect(() => {
    // Show shimmer only on first render
    const timer = setTimeout(() => setShowShimmer(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Mock data based on cardId
  const memberData = {
    name: 'John Doe',
    position: 'Pemimpin Redaksi',
    media: 'JatimNetwork.com',
    id: cardId || 'PM-2024-X88',
    avatar: '/images/logo.webp',
  }

  return (
    <div className="relative">
      {/* Shimmer Effect */}
      {showShimmer && (
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              transform: 'skewX(-20deg)',
            }}
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}

      {/* Digital Press Card */}
      <motion.div
        className="relative bg-gradient-to-br from-[#001A2C] via-[#002A4C] to-[#00AEEF] rounded-2xl p-8 shadow-2xl border border-white/20 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
      >
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-sm text-white/60 mb-1">Kartu Pers</div>
              <div className="text-xs text-white/40">Promedia Teknologi</div>
            </div>
            {/* Status Badge */}
            <motion.div
              className="px-4 py-2 bg-green-500 rounded-full flex items-center gap-2 shadow-lg"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(34, 197, 94, 0.7)',
                  '0 0 0 10px rgba(34, 197, 94, 0)',
                  '0 0 0 0 rgba(34, 197, 94, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            >
              <CheckCircle className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">VERIFIED ACTIVE</span>
            </motion.div>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-6 mb-8">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/30 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] flex items-center justify-center text-white text-2xl font-black">
                {memberData.name.charAt(0)}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-white">
              <h3 className="text-2xl lg:text-3xl font-black mb-2">
                {memberData.name}
              </h3>
              <p className="text-white/80 text-lg mb-1">{memberData.position}</p>
              <p className="text-white/60 text-sm">{memberData.media}</p>
            </div>
          </div>

          {/* ID Number */}
          <div className="pt-6 border-t border-white/20">
            <div className="text-xs text-white/40 mb-2">Nomor ID</div>
            <div className="text-xl font-mono font-bold text-white tracking-wider">
              {memberData.id}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-tr-full" />
        </div>
      </motion.div>
    </div>
  )
}
