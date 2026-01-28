'use client'

import { motion } from 'framer-motion'

interface ContentpreneurVisualProps {
  isActive: boolean
}

const words = ['Content', 'Writing', 'Story', 'Article', 'Blog', 'Post', 'Copy', 'Text']

export default function ContentpreneurVisual({ isActive }: ContentpreneurVisualProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Flowing text particles */}
      {isActive && (
        <div className="absolute inset-0">
          {words.map((word, index) => {
            const angle = (index / words.length) * 360
            const radius = 200
            
            return (
              <motion.div
                key={index}
                className="absolute text-2xl font-bold text-[#00AEEF]/20"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{
                  x: 0,
                  y: 0,
                  rotate: angle,
                }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * radius,
                  y: Math.sin((angle * Math.PI) / 180) * radius,
                  rotate: angle + 360,
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: 'linear',
                }}
              >
                {word}
              </motion.div>
            )
          })}
        </div>
      )}

      {/* Central focus */}
      <motion.div
        className="relative z-10"
        animate={isActive ? {
          scale: [1, 1.1, 1],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00AEEF]/20 to-[#2D74B3]/20 backdrop-blur-xl border border-[#00AEEF]/30 flex items-center justify-center">
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] flex items-center justify-center"
            animate={isActive ? {
              rotate: 360,
            } : {}}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <span className="text-white text-2xl font-black">C</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Flowing lines */}
      {isActive && (
        <>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: `conic-gradient(from ${i * 90}deg, transparent, #00AEEF/10, transparent)`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </>
      )}
    </div>
  )
}
