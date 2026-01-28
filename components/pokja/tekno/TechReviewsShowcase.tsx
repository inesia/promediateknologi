'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play } from 'lucide-react'

const reviews = [
  {
    id: 1,
    title: 'Review iPhone 15 Pro Max: Flagship yang Mengesankan',
    category: 'Smartphone',
    thumbnail: '/images/logo.jpg',
  },
  {
    id: 2,
    title: 'MacBook Pro M3: Performa untuk Profesional',
    category: 'Laptop',
    thumbnail: '/images/logo.jpg',
  },
  {
    id: 3,
    title: 'Samsung Galaxy S24 Ultra: AI yang Revolusioner',
    category: 'Smartphone',
    thumbnail: '/images/logo.jpg',
  },
  {
    id: 4,
    title: 'iPad Pro 2024: Tablet untuk Kreator',
    category: 'Tablet',
    thumbnail: '/images/logo.jpg',
  },
]

export default function TechReviewsShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
            Latest Insights
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Review dan analisis produk teknologi terbaru dari Pokja Jurnalis Tekno
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(review.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/20 to-[#2D74B3]/20 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-50" />
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg">
                  <span className="text-xs font-semibold text-[#00AEEF]">{review.category}</span>
                </div>
              </div>

              {/* Title with Glitch Effect */}
              <h3 className="text-lg font-bold text-[#001A2C] leading-tight">
                <GlitchText text={review.title} isActive={hoveredId === review.id} />
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GlitchText({ text, isActive }: { text: string; isActive: boolean }) {
  return (
    <span className="relative inline-block">
      <span className={isActive ? 'glitch-text' : ''}>{text}</span>
      {isActive && (
        <>
          <span className="absolute inset-0 glitch-layer-1" aria-hidden="true">{text}</span>
          <span className="absolute inset-0 glitch-layer-2" aria-hidden="true">{text}</span>
        </>
      )}
    </span>
  )
}
