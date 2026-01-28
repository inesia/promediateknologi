'use client'

import { motion } from 'framer-motion'

interface SocmedpreneurVisualProps {
  isActive: boolean
}

export default function SocmedpreneurVisual({ isActive }: SocmedpreneurVisualProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Pulsing radar waves */}
      {isActive && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full border-2 border-[#00AEEF]"
              initial={{
                scale: 0,
                opacity: 0.8,
              }}
              animate={{
                scale: [0, 2],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
                ease: 'easeOut',
              }}
            />
          ))}
        </>
      )}

      {/* Central hub */}
      <motion.div
        className="relative z-10"
        animate={isActive ? {
          scale: [1, 1.05, 1],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] shadow-2xl shadow-[#00AEEF]/50 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center">
            <svg
              className="w-20 h-20 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Blue aura waves */}
      {isActive && (
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(0,174,239,${0.1 - i * 0.03}) 0%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
