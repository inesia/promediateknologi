'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'nasional', label: 'Nasional' },
  { id: 'regional', label: 'Regional' },
  { id: 'hiburan', label: 'Hiburan' },
  { id: 'teknologi', label: 'Teknologi' },
]

interface SearchFilterBarProps {
  onSearchChange: (query: string) => void
  onCategoryChange: (category: string) => void
  activeCategory: string
}

export default function SearchFilterBar({
  onSearchChange,
  onCategoryChange,
  activeCategory,
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
            className="flex flex-wrap items-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => onCategoryChange(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.id
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
        </div>
      </div>
    </section>
  )
}
