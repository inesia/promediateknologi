'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

const niches = [
  'News',
  'Tech',
  'Auto',
  'Business',
  'Lifestyle',
  'Health',
  'Sports',
  'Entertainment',
]

interface SidebarFilterProps {
  filters: {
    priceRange: [number, number]
    minDA: number
    minPA: number
    niches: string[]
    doFollowOnly: boolean
  }
  onFiltersChange: (filters: any) => void
}

export default function SidebarFilter({ filters, onFiltersChange }: SidebarFilterProps) {
  const [localPriceRange, setLocalPriceRange] = useState(filters.priceRange)
  const [localMinDA, setLocalMinDA] = useState(filters.minDA)
  const [localMinPA, setLocalMinPA] = useState(filters.minPA)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const handlePriceRangeChange = (index: number, value: number) => {
    const newRange: [number, number] = [...localPriceRange]
    newRange[index] = value
    setLocalPriceRange(newRange)
    onFiltersChange({ ...filters, priceRange: newRange })
  }

  const handleNicheToggle = (niche: string) => {
    const newNiches = filters.niches.includes(niche)
      ? filters.niches.filter((n) => n !== niche)
      : [...filters.niches, niche]
    onFiltersChange({ ...filters, niches: newNiches })
  }

  const clearFilters = () => {
    const clearedFilters = {
      priceRange: [0, 10000000] as [number, number],
      minDA: 0,
      minPA: 0,
      niches: [] as string[],
      doFollowOnly: false,
    }
    setLocalPriceRange(clearedFilters.priceRange)
    setLocalMinDA(0)
    setLocalMinPA(0)
    onFiltersChange(clearedFilters)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-80 flex-shrink-0"
    >
      <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-black text-[#001A2C]">Filter</h3>
          {(filters.niches.length > 0 || filters.minDA > 0 || filters.minPA > 0 || filters.doFollowOnly) && (
            <button
              onClick={clearFilters}
              className="text-sm text-[#00AEEF] hover:text-[#2D74B3] transition-colors"
            >
              Reset
            </button>
          )}
        </div>

        {/* Price Range Slider */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Price Range
          </label>
          <div className="space-y-4">
            <div>
              <input
                type="range"
                min="0"
                max="10000000"
                step="100000"
                value={localPriceRange[0]}
                onChange={(e) => handlePriceRangeChange(0, Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00AEEF]"
              />
              <div className="text-xs text-slate-500 mt-1">
                Min: {formatCurrency(localPriceRange[0])}
              </div>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="10000000"
                step="100000"
                value={localPriceRange[1]}
                onChange={(e) => handlePriceRangeChange(1, Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00AEEF]"
              />
              <div className="text-xs text-slate-500 mt-1">
                Max: {formatCurrency(localPriceRange[1])}
              </div>
            </div>
          </div>
        </div>

        {/* Minimum DA Slider */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Minimum DA
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={localMinDA}
            onChange={(e) => {
              const value = Number(e.target.value)
              setLocalMinDA(value)
              onFiltersChange({ ...filters, minDA: value })
            }}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00AEEF]"
          />
          <div className="text-xs text-slate-500 mt-1">DA: {localMinDA}</div>
        </div>

        {/* Minimum PA Slider */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Minimum PA
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={localMinPA}
            onChange={(e) => {
              const value = Number(e.target.value)
              setLocalMinPA(value)
              onFiltersChange({ ...filters, minPA: value })
            }}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00AEEF]"
          />
          <div className="text-xs text-slate-500 mt-1">PA: {localMinPA}</div>
        </div>

        {/* Niche Checkboxes */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Niche / Category
          </label>
          <div className="space-y-2">
            {niches.map((niche) => (
              <label
                key={niche}
                className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
              >
                <input
                  type="checkbox"
                  checked={filters.niches.includes(niche)}
                  onChange={() => handleNicheToggle(niche)}
                  className="w-4 h-4 text-[#00AEEF] border-slate-300 rounded focus:ring-[#00AEEF]"
                />
                <span className="text-sm text-slate-700">{niche}</span>
              </label>
            ))}
          </div>
        </div>

        {/* DoFollow Only Toggle */}
        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.doFollowOnly}
              onChange={(e) =>
                onFiltersChange({ ...filters, doFollowOnly: e.target.checked })
              }
              className="w-5 h-5 text-[#00AEEF] border-slate-300 rounded focus:ring-[#00AEEF]"
            />
            <span className="text-sm font-semibold text-slate-700">
              DoFollow Only
            </span>
          </label>
        </div>
      </div>
    </motion.div>
  )
}
