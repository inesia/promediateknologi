'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { ShoppingCart } from 'lucide-react'

// Mock data
const mediaData = [
  {
    id: '1',
    name: 'JawaPos.com',
    domain: 'jawapos.com',
    logo: '/images/logo.webp',
    da: 65,
    pa: 50,
    dr: 70,
    traffic: '5M+',
    niche: ['News'],
    price: 1500000,
    doFollow: true,
  },
  {
    id: '2',
    name: 'TechCrunch.id',
    domain: 'techcrunch.id',
    logo: '/images/logo.webp',
    da: 75,
    pa: 60,
    dr: 80,
    traffic: '3M+',
    niche: ['Tech'],
    price: 2500000,
    doFollow: true,
  },
  {
    id: '3',
    name: 'AutoReview.id',
    domain: 'autoreview.id',
    logo: '/images/logo.webp',
    da: 55,
    pa: 45,
    dr: 65,
    traffic: '2M+',
    niche: ['Auto'],
    price: 1800000,
    doFollow: true,
  },
  {
    id: '4',
    name: 'BusinessDaily.id',
    domain: 'businessdaily.id',
    logo: '/images/logo.webp',
    da: 70,
    pa: 55,
    dr: 75,
    traffic: '4M+',
    niche: ['Business'],
    price: 2200000,
    doFollow: false,
  },
  {
    id: '5',
    name: 'LifestyleMag.id',
    domain: 'lifestylemag.id',
    logo: '/images/logo.webp',
    da: 60,
    pa: 48,
    dr: 68,
    traffic: '1.5M+',
    niche: ['Lifestyle'],
    price: 1200000,
    doFollow: true,
  },
]

interface MarketplaceTableProps {
  searchQuery: string
  filters: {
    priceRange: [number, number]
    minDA: number
    minPA: number
    niches: string[]
    doFollowOnly: boolean
  }
  onAddToCart: (media: { id: string; name: string; price: number }) => void
}

export default function MarketplaceTable({
  searchQuery,
  filters,
  onAddToCart,
}: MarketplaceTableProps) {
  const filteredMedia = useMemo(() => {
    return mediaData.filter((media) => {
      // Search filter
      if (
        searchQuery &&
        !media.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !media.domain.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      // Price range filter
      if (media.price < filters.priceRange[0] || media.price > filters.priceRange[1]) {
        return false
      }

      // DA/PA filter
      if (media.da < filters.minDA || media.pa < filters.minPA) {
        return false
      }

      // Niche filter
      if (filters.niches.length > 0 && !filters.niches.some((n) => media.niche.includes(n))) {
        return false
      }

      // DoFollow filter
      if (filters.doFollowOnly && !media.doFollow) {
        return false
      }

      return true
    })
  }, [searchQuery, filters])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getBadgeColor = (score: number) => {
    if (score >= 70) return 'bg-green-100 text-green-700 border-green-300'
    if (score >= 50) return 'bg-blue-100 text-blue-700 border-blue-300'
    return 'bg-yellow-100 text-yellow-700 border-yellow-300'
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header */}
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Media Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Metrics
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Traffic/Month
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Niche
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-slate-200">
            {filteredMedia.length > 0 ? (
              filteredMedia.map((media, index) => (
                <motion.tr
                  key={media.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  {/* Media Name */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-slate-600">
                          {media.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-[#001A2C]">{media.name}</div>
                        <div className="text-sm text-slate-500">{media.domain}</div>
                      </div>
                    </div>
                  </td>

                  {/* Metrics */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-mono font-semibold border ${getBadgeColor(media.da)}`}
                      >
                        DA {media.da}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-mono font-semibold border ${getBadgeColor(media.pa)}`}
                      >
                        PA {media.pa}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-mono font-semibold border ${getBadgeColor(media.dr)}`}
                      >
                        DR {media.dr}
                      </span>
                    </div>
                  </td>

                  {/* Traffic */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono text-slate-700">{media.traffic} Visits</span>
                  </td>

                  {/* Niche */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {media.niche.map((n) => (
                        <span
                          key={n}
                          className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono font-semibold text-[#001A2C]">
                      {formatCurrency(media.price)}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4">
                    <button
                      onClick={() =>
                        onAddToCart({
                          id: media.id,
                          name: media.name,
                          price: media.price,
                        })
                      }
                      className="mx-auto flex items-center gap-2 px-4 py-2 bg-[#00AEEF] text-white rounded-lg hover:bg-[#2D74B3] transition-colors text-sm font-semibold"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                  Tidak ada media yang ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
