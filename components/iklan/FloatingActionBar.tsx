'use client'

import { motion } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'

interface FloatingActionBarProps {
  selectedProducts: Array<{ id: string; name: string; price: string }>
  onClear: () => void
}

export default function FloatingActionBar({ selectedProducts, onClear }: FloatingActionBarProps) {
  // Calculate total estimate (dummy calculation)
  const calculateTotal = () => {
    let total = 0
    selectedProducts.forEach((product) => {
      if (product.price.includes('Rp')) {
        const priceStr = product.price.replace(/[^\d]/g, '')
        const price = parseInt(priceStr) || 0
        total += price
      }
    })
    return total
  }

  const total = calculateTotal()

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const handleWhatsApp = () => {
    const productNames = selectedProducts.map((p) => p.name).join(', ')
    const message = `Halo, saya tertarik dengan paket iklan berikut:\n\n${productNames}\n\nEstimasi total: ${total > 0 ? formatCurrency(total) : 'Hubungi untuk penawaran'}\n\nSaya ingin berkonsultasi lebih lanjut.`
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-slate-200 shadow-2xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Selected Items Info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="text-sm text-slate-600 mb-1">
              Item terpilih: {selectedProducts.map((p) => p.name).join(', ')}
            </div>
            <div className="text-lg font-bold text-[#001A2C]">
              Estimasi Total:{' '}
              <span className="text-[#00AEEF]">
                {total > 0 ? formatCurrency(total) : 'Hubungi untuk penawaran'}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClear}
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Clear selection"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 px-6 py-3 bg-[#00AEEF] text-white font-semibold rounded-lg hover:bg-[#2D74B3] transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Lanjut ke Konsultasi</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
