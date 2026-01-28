'use client'

import { motion } from 'framer-motion'

interface VideopreneurVisualProps {
  isActive: boolean
}

export default function VideopreneurVisual({ isActive }: VideopreneurVisualProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Minimalist video frame */}
      <motion.div
        className="relative w-full max-w-md aspect-video"
        animate={isActive ? {
          scale: [1, 1.02, 1],
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        {/* Frame border */}
        <div className="absolute inset-0 border-4 border-[#001A2C] rounded-lg shadow-2xl" />
        
        {/* Inner blurred content */}
        <div className="absolute inset-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#00AEEF]/10 to-[#2D74B3]/10 backdrop-blur-2xl">
          {/* Blurred video-like content */}
          <motion.div
            className="absolute inset-0"
            animate={isActive ? {
              backgroundPosition: ['0% 0%', '100% 100%'],
            } : {}}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              background: `
                linear-gradient(45deg, 
                  rgba(0,174,239,0.1) 0%, 
                  rgba(45,116,179,0.1) 25%,
                  rgba(0,174,239,0.1) 50%,
                  rgba(45,116,179,0.1) 75%,
                  rgba(0,174,239,0.1) 100%
                ),
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(0,174,239,0.05) 2px,
                  rgba(0,174,239,0.05) 4px
                )
              `,
              backgroundSize: '200% 200%, 20px 20px',
            }}
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-xl border-2 border-[#00AEEF] flex items-center justify-center shadow-lg"
              animate={isActive ? {
                scale: [1, 1.1, 1],
                opacity: [0.9, 1, 0.9],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.div
                className="w-0 h-0 border-l-[12px] border-l-[#00AEEF] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"
                animate={isActive ? {
                  x: [0, 2, 0],
                } : {}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#00AEEF] rounded-tr-lg" />
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#00AEEF] rounded-bl-lg" />
        </div>

        {/* Glow effect */}
        {isActive && (
          <motion.div
            className="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#00AEEF]/20 to-[#2D74B3]/20 blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
      </motion.div>

      {/* Floating particles */}
      {isActive && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00AEEF] rounded-full"
              initial={{
                x: '50%',
                y: '50%',
                opacity: 0,
              }}
              animate={{
                x: `${50 + Math.cos(i * 45 * Math.PI / 180) * 150}%`,
                y: `${50 + Math.sin(i * 45 * Math.PI / 180) * 150}%`,
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </>
      )}
    </div>
  )
}
