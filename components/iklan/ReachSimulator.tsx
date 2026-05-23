'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ReachSimulator() {
  const [budget, setBudget] = useState(5000000)

  const calculateReach = (amount: number) => {
    const cpm = 15000
    const impressions = Math.floor((amount / cpm) * 1000)
    const reach = Math.floor(impressions * 0.3)
    return { impressions, reach }
  }

  const { impressions, reach } = calculateReach(budget)

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)

  const formatNumber = (value: number) => new Intl.NumberFormat('id-ID').format(value)

  return (
    <div className="w-full">
      <h3 className="text-lg font-black text-[#001A2C] mb-5">Estimasi Jangkauan Banner</h3>

      <div className="mb-6">
        <label htmlFor="budget-range" className="block text-sm font-semibold text-slate-700 mb-2">
          Budget kampanye
        </label>
        <input
          id="budget-range"
          type="range"
          min="1000000"
          max="100000000"
          step="1000000"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00AEEF]"
        />
        <div className="flex justify-between text-xs text-slate-400 mt-1">
          <span>Rp 1 Jt</span>
          <span>Rp 100 Jt</span>
        </div>
        <p className="mt-3 text-xl font-bold text-[#00AEEF]">{formatCurrency(budget)}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <motion.div
          key={reach}
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
          className="p-4 rounded-xl bg-white border border-[#00AEEF]/20"
        >
          <p className="text-xs text-slate-500 mb-1">Potensi jangkauan</p>
          <p className="text-xl font-black text-[#001A2C]">{formatNumber(reach)}</p>
        </motion.div>
        <motion.div
          key={impressions}
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
          className="p-4 rounded-xl bg-white border border-[#2D74B3]/20"
        >
          <p className="text-xs text-slate-500 mb-1">Impresi</p>
          <p className="text-xl font-black text-[#001A2C]">{formatNumber(impressions)}</p>
        </motion.div>
      </div>

      <p className="mt-4 text-[11px] text-slate-400">
        * CPM placeholder Rp 15.000 — bukan harga resmi.
      </p>
    </div>
  )
}
