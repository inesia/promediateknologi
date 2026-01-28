'use client'

import { motion } from 'framer-motion'

interface MediapreneurVisualProps {
  isActive: boolean
}

export default function MediapreneurVisual({ isActive }: MediapreneurVisualProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Floating Glass Card - CMS Mockup */}
      <motion.div
        className="relative w-full max-w-md h-[500px] bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl p-6"
        animate={isActive ? {
          y: [0, -10, 0],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="flex-1 h-px bg-slate-200 ml-4" />
        </div>

        {/* Content Area */}
        <div className="space-y-4">
          {/* Title Bar */}
          <div className="h-8 bg-gradient-to-r from-[#00AEEF]/20 to-[#2D74B3]/20 rounded-lg flex items-center px-4">
            <div className="w-2 h-2 rounded-full bg-[#00AEEF] mr-3" />
            <div className="h-2 bg-slate-300 rounded w-32" />
          </div>

          {/* Content Blocks */}
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-16 bg-slate-50 rounded-lg border border-slate-200 p-3"
                initial={{ opacity: 0.5 }}
                animate={isActive ? {
                  opacity: [0.5, 1, 0.5],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 bg-slate-300 rounded w-3/4" />
                    <div className="h-2 bg-slate-200 rounded w-1/2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl pointer-events-none" />
      </motion.div>

      {/* Floating particles */}
      {isActive && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00AEEF] rounded-full"
              initial={{
                x: '50%',
                y: '50%',
                opacity: 0,
              }}
              animate={{
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
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
