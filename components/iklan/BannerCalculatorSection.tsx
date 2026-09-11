'use client'

import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'
import ReachSimulator from './ReachSimulator'

/** Formula Pending - Waiting for Real Calculation Data from Marketing Team */
export default function BannerCalculatorSection() {
  return (
    <section className="py-16 lg:py-4 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg mb-5 w-fit">
                <Calculator className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-[11px] font-bold text-amber-800">
                  Formula Pending — menunggu data dari tim marketing
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#001A2C] mb-3">Kalkulator Banner</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Estimasi jangkauan indikatif untuk kampanye display. Angka akan diperbarui setelah
                formula harga resmi dirilis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="p-6 lg:p-8 bg-slate-50/80"
            >
              <ReachSimulator />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
