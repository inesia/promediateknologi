'use client'

import { motion } from 'framer-motion'
import { Search, ShoppingCart } from 'lucide-react'

interface DashboardHeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  activeTab: 'marketplace' | 'orders'
  onTabChange: (tab: 'marketplace' | 'orders') => void
}

export default function DashboardHeader({
  searchQuery,
  onSearchChange,
  activeTab,
  onTabChange,
}: DashboardHeaderProps) {
  return (
    <section className="relative py-16 lg:py-4 bg-gradient-to-b from-white to-slate-50/50 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-4 leading-tight">
            High-Authority Backlinks Marketplace
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tingkatkan ranking SEO Anda dengan backlink berkualitas dari 1.000+ media berita terverifikasi.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
            <input
              type="text"
              placeholder="Cari media berdasarkan nama, niche, atau keyword..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-14 pr-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 focus:border-[#00AEEF] transition-all duration-200 text-slate-700 placeholder-slate-400 text-lg"
            />
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <button
            onClick={() => onTabChange('marketplace')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === 'marketplace'
                ? 'bg-[#00AEEF] text-white shadow-lg shadow-[#00AEEF]/25'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
          >
            Marketplace
          </button>
          <button
            onClick={() => onTabChange('orders')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'orders'
                ? 'bg-[#00AEEF] text-white shadow-lg shadow-[#00AEEF]/25'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
          >
            <ShoppingCart className="w-5 h-5" />
            My Orders
          </button>
        </motion.div>
      </div>
    </section>
  )
}
