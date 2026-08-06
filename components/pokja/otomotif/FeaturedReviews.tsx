'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const reviews = [
  {
    id: 1,
    title: 'Toyota GR Supra',
    category: 'Sports Car',
    image: '/images/logo.webp',
    height: 'tall',
  },
  {
    id: 2,
    title: 'Honda Civic Type R',
    category: 'Hot Hatch',
    image: '/images/logo.webp',
    height: 'short',
  },
  {
    id: 3,
    title: 'BMW M3 Competition',
    category: 'Sedan',
    image: '/images/logo.webp',
    height: 'tall',
  },
  {
    id: 4,
    title: 'Mercedes-AMG GT',
    category: 'Supercar',
    image: '/images/logo.webp',
    height: 'short',
  },
  {
    id: 5,
    title: 'Porsche 911 Turbo',
    category: 'Sports Car',
    image: '/images/logo.webp',
    height: 'medium',
  },
  {
    id: 6,
    title: 'Audi RS6 Avant',
    category: 'Wagon',
    image: '/images/logo.webp',
    height: 'tall',
  },
]

export default function FeaturedReviews() {
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
            Featured Reviews
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Galeri foto hasil liputan kendaraan terbaru dari Pokja Jurnalis Otomotif
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid mb-6 lg:mb-8 group relative"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image Container */}
                <div className={`relative overflow-hidden ${
                  review.height === 'tall' ? 'h-96' : 
                  review.height === 'medium' ? 'h-64' : 
                  'h-48'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <div className="text-slate-400 text-sm">Photo Placeholder</div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-semibold text-[#D90429]">{review.category}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-white">{review.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
