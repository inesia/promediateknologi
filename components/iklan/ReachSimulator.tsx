'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ReachSimulator() {
  const [budget, setBudget] = useState(5000000) // Default Rp 5 juta

  // Dummy calculation logic
  const calculateReach = (budget: number) => {
    // CPM assumption: Rp 15.000 per 1000 impressions
    const cpm = 15000
    const impressions = Math.floor((budget / cpm) * 1000)
    // Assume 30% unique reach from impressions
    const reach = Math.floor(impressions * 0.3)
    return { impressions, reach }
  }

  const { impressions, reach } = calculateReach(budget)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('id-ID').format(value)
  }

  return (
    <div className="relative w-full p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 shadow-xl">
      <h3 className="text-2xl font-black text-[#001A2C] mb-6 text-center">
        Reach Simulator
      </h3>

      {/* Budget Slider */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Budget Anda
        </label>
        <input
          type="range"
          min="1000000"
          max="100000000"
          step="1000000"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00AEEF]"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-2">
          <span>Rp 1 Juta</span>
          <span>Rp 100 Juta</span>
        </div>
        <div className="text-center mt-4">
          <span className="text-2xl font-bold text-[#00AEEF]">
            {formatCurrency(budget)}
          </span>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {/* Potential Reach */}
        <motion.div
          key={reach}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-4 bg-gradient-to-br from-[#00AEEF]/10 to-[#2D74B3]/10 rounded-xl border border-[#00AEEF]/20"
        >
          <div className="text-sm text-slate-600 mb-1">Potential Reach</div>
          <div className="text-3xl font-black text-[#001A2C]">
            {formatNumber(reach)}
          </div>
          <div className="text-xs text-slate-500 mt-1">Pembaca unik</div>
        </motion.div>

        {/* Ad Impressions */}
        <motion.div
          key={impressions}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="p-4 bg-gradient-to-br from-[#2D74B3]/10 to-[#00AEEF]/10 rounded-xl border border-[#2D74B3]/20"
        >
          <div className="text-sm text-slate-600 mb-1">Ad Impressions</div>
          <div className="text-3xl font-black text-[#001A2C]">
            {formatNumber(impressions)}
          </div>
          <div className="text-xs text-slate-500 mt-1">Tayangan iklan</div>
        </motion.div>
      </div>

      {/* Info */}
      <div className="mt-6 text-xs text-slate-500 text-center">
        * Estimasi berdasarkan CPM rata-rata Rp 15.000
      </div>
    </div>
  )
}
