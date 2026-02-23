'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  { id: 'all', label: 'Semua Kategori' },
  { id: 'business-economy', label: 'Business Economy' },
  { id: 'education', label: 'Education' },
  { id: 'general-news', label: 'General News' },
  { id: 'health', label: 'Health' },
  { id: 'hobby', label: 'Hobby' },
  { id: 'leisure', label: 'Leisure' },
  { id: 'religion', label: 'Religion' },
  { id: 'sport', label: 'Sport' }
]

const regions = [
  { id: 'all', label: 'Semua Wilayah' },
  { id: 'Nasional', label: 'Nasional' },
  { id: 'Jawa Barat', label: 'Jawa Barat' },
  { id: 'Jawa Tengah', label: 'Jawa Tengah' },
  { id: 'Jawa Timur', label: 'Jawa Timur' },
  { id: 'DKI Jakarta', label: 'DKI Jakarta' },
  { id: 'Banten', label: 'Banten' },
  { id: 'Sumatera', label: 'Sumatera' },
  { id: 'Kalimantan', label: 'Kalimantan' },
  { id: 'Sulawesi', label: 'Sulawesi' },
  { id: 'Bali & Nusa Tenggara', label: 'Bali & Nusa Tenggara' },
  { id: 'Papua & Maluku', label: 'Papua & Maluku' },
]

interface SearchFilterBarProps {
  onSearchChange: (query: string) => void
  onCategoryChange: (category: string) => void
  activeCategory: string
  onRegionChange: (region: string) => void
  activeRegion: string
}

export default function SearchFilterBar({
  onSearchChange,
  onCategoryChange,
  activeCategory,
  onRegionChange,
  activeRegion,
}: SearchFilterBarProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    onSearchChange(value)
  }

  return (
    <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-6"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari media mitra..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 focus:border-[#00AEEF] transition-all duration-200 text-slate-700 placeholder-slate-400"
              />
            </div>
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2 mb-4"
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Kategori:</span>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => onCategoryChange(category.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-[#00AEEF] text-white shadow-lg shadow-[#00AEEF]/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Filter Regions */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Wilayah:</span>
            {regions.map((region, index) => (
              <motion.button
                key={region.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                onClick={() => onRegionChange(region.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${activeRegion === region.id
                  ? 'bg-[#2D74B3] text-white shadow-lg shadow-[#2D74B3]/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {region.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
