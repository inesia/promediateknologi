'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Monitor, FileText, Instagram, Video, X } from 'lucide-react'
import Image from 'next/image'
import WebsiteSimulation from './WebsiteSimulation'

const products = [
  {
    id: 'display-banner',
    name: 'Display Banner',
    description: 'Iklan banner di website media partner dengan berbagai ukuran',
    icon: Monitor,
    price: 'CPM mulai Rp 15.000',
    visual: 'website-banner',
    previewImage: '/images/logo.png',
    badge: 'Best Seller',
  },
  {
    id: 'advertorial',
    name: 'Advertorial / Content',
    description: 'Konten artikel yang terintegrasi dengan konten editorial',
    icon: FileText,
    price: 'Fixed Rate Rp 3.500.000',
    visual: 'article',
    previewImage: '/images/logo.png',
    badge: 'High Impact',
  },
  {
    id: 'social-media',
    name: 'Social Media Post',
    description: 'Iklan di feed Instagram, Facebook, dan Twitter',
    icon: Instagram,
    price: 'Mulai Rp 1.500.000',
    visual: 'instagram-feed',
    previewImage: '/images/logo.png',
  },
  {
    id: 'video-ad',
    name: 'Video Ad / TV',
    description: 'Iklan video untuk platform digital dan TV',
    icon: Video,
    price: 'Hubungi Kami',
    visual: 'video-player',
    previewImage: '/images/logo.png',
  },
]

interface AdProductsGridProps {
  onProductSelect: (product: { id: string; name: string; price: string }) => void
  selectedProducts: Array<{ id: string; name: string; price: string }>
}

export default function AdProductsGrid({ onProductSelect, selectedProducts }: AdProductsGridProps) {
  const [previewProduct, setPreviewProduct] = useState<string | null>(null)

  const isSelected = (id: string) => selectedProducts.some((p) => p.id === id)

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
            Pilih Format Iklan Anda
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Pilih format iklan yang sesuai dengan kebutuhan kampanye Anda
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon
            const selected = isSelected(product.id)

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Product Card */}
                <div
                  className={`relative h-full p-6 bg-white rounded-xl border-2 transition-all duration-300 ${selected
                      ? 'border-[#00AEEF] shadow-lg shadow-[#00AEEF]/20'
                      : 'border-slate-200 hover:border-[#00AEEF]/50 hover:shadow-lg'
                    }`}
                >
                  {/* Dynamic Badge */}
                  {product.badge && (
                    <div className="absolute -top-3 right-4 z-10">
                      <motion.div
                        className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                        animate={{
                          background: [
                            'linear-gradient(90deg, #00AEEF, #2D74B3)',
                            'linear-gradient(90deg, #2D74B3, #00AEEF)',
                            'linear-gradient(90deg, #00AEEF, #2D74B3)',
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        {product.badge}
                      </motion.div>
                    </div>
                  )}

                  {/* Visual Mockup */}
                  <div className="relative h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-4 overflow-hidden">
                    {product.visual === 'website-banner' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-12 bg-[#00AEEF]/20 rounded flex items-center justify-center">
                          <span className="text-xs text-slate-600">Banner Ad</span>
                        </div>
                      </div>
                    )}
                    {product.visual === 'article' && (
                      <div className="absolute inset-0 p-2">
                        <div className="h-2 bg-slate-300 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-slate-300 rounded w-full mb-1" />
                        <div className="h-2 bg-slate-300 rounded w-5/6" />
                      </div>
                    )}
                    {product.visual === 'instagram-feed' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg" />
                      </div>
                    )}
                    {product.visual === 'video-player' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-800 rounded-lg">
                        <div className="w-12 h-12 border-4 border-white rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-[#001A2C] mb-2 text-center">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-4 text-center leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-lg font-bold text-[#00AEEF]">
                      {product.price}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPreviewProduct(product.id)}
                      className="flex-1 px-4 py-2 text-sm font-semibold text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      Lihat Preview
                    </button>
                    <button
                      onClick={() =>
                        onProductSelect({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                        })
                      }
                      className={`flex-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${selected
                          ? 'bg-[#00AEEF] text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-[#00AEEF] hover:text-white'
                        }`}
                    >
                      {selected ? 'Terpilih' : 'Pilih'}
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setPreviewProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setPreviewProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              <h3 className="text-2xl font-black text-[#001A2C] mb-6">
                Preview: {products.find((p) => p.id === previewProduct)?.name}
              </h3>

              {/* Display Banner - Website Simulation */}
              {previewProduct === 'display-banner' ? (
                <WebsiteSimulation />
              ) : (
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                  <span className="text-slate-400">Preview Image</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
