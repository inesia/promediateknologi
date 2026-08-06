'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Mitra {
  id: string | number
  name: string
  logo: string
  url?: string
}

interface MitraCardProps {
  mitra: Mitra
  index: number
}

export default function MitraCard({ mitra, index }: MitraCardProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group relative"
    >
      <div className="relative aspect-square bg-white border border-slate-200 rounded-xl p-4 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Logo Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {!imageError ? (
            <>
              {!isLoaded && (
                <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-lg" />
              )}
              <Image
                src={mitra.logo}
                alt={mitra.name}
                fill
                className={`object-contain p-4 transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100 group-hover:scale-110' : 'opacity-0 scale-95'}`}
                onError={() => setImageError(true)}
                onLoad={() => setIsLoaded(true)}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                unoptimized
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-lg p-2">
              <span className="text-xs text-slate-400 font-medium text-center line-clamp-2 leading-tight">
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
