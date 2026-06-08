'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, MapPin, Tag, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { MITRA_CATEGORIES, MITRA_PROVINCES } from '@/lib/mitraFilters'

interface SearchFilterBarProps {
  onSearchChange: (query: string) => void
  onCategoryChange: (category: string) => void
  onProvinceChange: (province: string) => void
  activeCategory: string
  activeProvince: string
}

export default function SearchFilterBar({
  onSearchChange,
  onCategoryChange,
  onProvinceChange,
  activeCategory,
  activeProvince,
}: SearchFilterBarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const timer = setTimeout(() => {
      onSearchChange(searchQuery)
    }, 400)

    return () => clearTimeout(timer)
  }, [searchQuery, onSearchChange])

  return (
    <section className="bg-white border-b border-slate-100 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-5"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari media mitra..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 focus:border-[#00AEEF] transition-all duration-200 text-slate-700 placeholder-slate-400"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-4 md:gap-6"
          >
            <div className="min-w-0 flex-1">
              <label
                htmlFor="mitra-province-filter"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wide mb-2"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                Provinsi
              </label>
              <div className="relative">
                <select
                  id="mitra-province-filter"
                  value={activeProvince}
                  onChange={(e) => onProvinceChange(e.target.value)}
                  className="w-full px-4 py-3 pr-10 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 focus:border-[#00AEEF] transition-all duration-200 text-slate-700 appearance-none cursor-pointer truncate"
                >
                  {MITRA_PROVINCES.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <label
                htmlFor="mitra-category-filter"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wide mb-2"
              >
                <Tag className="w-3.5 h-3.5 shrink-0" />
                Kategori
              </label>
              <div className="relative">
                <select
                  id="mitra-category-filter"
                  value={activeCategory}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="w-full px-4 py-3 pr-10 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 focus:border-[#00AEEF] transition-all duration-200 text-slate-700 appearance-none cursor-pointer truncate"
                >
                  {MITRA_CATEGORIES.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
