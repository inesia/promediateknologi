'use client'

import { motion } from 'framer-motion'

export default function MitraSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="aspect-square bg-slate-100 rounded-xl border border-slate-200 overflow-hidden"
    >
      <motion.div
        className="w-full h-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 100%',
        }}
      />
    </motion.div>
  )
}
