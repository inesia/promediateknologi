'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const packages = [
  {
    id: 'startup',
    name: 'Startup Starter',
    price: 'Rp 5.000.000',
    features: [
      'Display Banner (1 bulan)',
      'Social Media Post (3x)',
      'Laporan performa dasar',
      'Support via email',
    ],
  },
  {
    id: 'sme',
    name: 'SME Growth',
    price: 'Rp 15.000.000',
    features: [
      'Display Banner (3 bulan)',
      'Advertorial (2x)',
      'Social Media Post (10x)',
      'Laporan performa lengkap',
      'Support prioritas',
      'Konsultasi strategi',
    ],
  },
  {
    id: 'corporate',
    name: 'Corporate Scale',
    price: 'Custom',
    features: [
      'Semua format iklan',
      'Durasi fleksibel',
      'Laporan real-time',
      'Dedicated account manager',
      'Konsultasi strategi premium',
      'Akses ke media premium',
    ],
  },
]

interface PricingTableProps {
  onProductSelect: (product: { id: string; name: string; price: string }) => void
  selectedProducts: Array<{ id: string; name: string; price: string }>
}

export default function PricingTable({ onProductSelect, selectedProducts }: PricingTableProps) {
  return (
    <section className="relative py-4 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
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
            Paket Bundling
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </motion.div>

        {/* Pricing Table */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => {
              const selected = selectedProducts.some((p) => p.id === pkg.id)
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white rounded-xl border-2 p-8 transition-all duration-300 ${selected
                      ? 'border-[#00AEEF] shadow-lg shadow-[#00AEEF]/20'
                      : 'border-slate-200 hover:border-[#00AEEF]/50 hover:shadow-lg'
                    }`}
                >
                  {/* Package Name */}
                  <h3 className="text-2xl font-black text-[#001A2C] mb-2">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-black text-[#00AEEF]">
                      {pkg.price}
                    </span>
                    {pkg.price !== 'Custom' && (
                      <span className="text-slate-500 text-sm ml-2">/bulan</span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() =>
                      onProductSelect({
                        id: pkg.id,
                        name: pkg.name,
                        price: pkg.price,
                      })
                    }
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${selected
                        ? 'bg-[#00AEEF] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-[#00AEEF] hover:text-white'
                      }`}
                  >
                    {selected ? 'Terpilih' : 'Pilih Paket'}
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
