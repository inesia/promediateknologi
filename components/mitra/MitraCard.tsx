'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Mitra {
  id: number
  name: string
  category: string
  logo: string
}

interface MitraCardProps {
  mitra: Mitra
  index: number
}

export default function MitraCard({ mitra, index }: MitraCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative aspect-square bg-white border border-slate-200 rounded-xl p-4 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Logo Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {!imageError ? (
            <Image
              src={mitra.logo}
              alt={mitra.name}
              fill
              className={`object-contain transition-all duration-500 ${
                isHovered ? 'grayscale-0 scale-110 brightness-110' : 'grayscale'
              }`}
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-lg">
              <span className="text-xs text-slate-400 font-medium text-center px-2">
                {mitra.name}
              </span>
            </div>
          )}
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </div>
    </motion.div>
  )
}
