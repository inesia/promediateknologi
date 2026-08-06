'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MitraCard from './MitraCard'
import MitraSkeleton from './MitraSkeleton'
import { socialPartnerData } from '@/lib/socialPartnerData'

interface Mitra {
  id: string | number
  name: string
  logo: string
  url?: string
}

interface MitraGridProps {
  searchQuery: string
  activeCategory: string
  activeProvince: string
  activeType?: 'media' | 'influencer'
}

export default function MitraGrid({
  searchQuery,
  activeCategory,
  activeProvince,
  activeType = 'media',
}: MitraGridProps) {
  const [mitraData, setMitraData] = useState<Mitra[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchMitra = useCallback(
    async (pageNum: number, replace: boolean) => {
      if (replace) {
        setIsLoading(true)
        setError(null)
      } else {
        setIsLoadingMore(true)
      }

      try {
        const params = new URLSearchParams({
          kategori: activeCategory,
          daerah: activeProvince,
          page: String(pageNum),
        })

        if (searchQuery.trim()) {
          params.set('pencarian', searchQuery.trim())
        }

        const res = await fetch(`/api/mitra?${params.toString()}`)
        const json = await res.json()

        if (!res.ok) {
          throw new Error(json.error || 'Gagal memuat data mitra')
        }

        const items: Mitra[] = json.data ?? []
        setMitraData((prev) => (replace ? items : [...prev, ...items]))
        setHasMore(Boolean(json.hasMore))
        setPage(pageNum)
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Gagal memuat data mitra'
        setError(message)
        if (replace) setMitraData([])
      } finally {
        setIsLoading(false)
        setIsLoadingMore(false)
      }
    },
    [activeCategory, activeProvince, searchQuery]
  )

  useEffect(() => {
    if (activeType === 'media') {
      fetchMitra(1, true)
    } else {
      setIsLoading(false)
    }
  }, [activeType, fetchMitra])

  const filteredInfluencers = activeType === 'influencer'
    ? socialPartnerData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const displayItems = activeType === 'media' ? mitraData : filteredInfluencers

  const handleLoadMore = () => {
    if (!hasMore || isLoadingMore) return
    fetchMitra(page + 1, false)
  }

  if (isLoading && activeType === 'media') {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
            {[...Array(12)].map((_, i) => (
              <MitraSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {error && activeType === 'media' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-red-600 mb-8"
          >
            {error}
          </motion.p>
        )}

        {displayItems.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-600 mb-8 text-center"
          >
            Menampilkan {displayItems.length} {activeType === 'media' ? 'mitra media' : 'influencer & creator'}
            {activeType === 'media' && hasMore ? ' (muat lebih banyak untuk melihat lainnya)' : ''}
          </motion.p>
        )}

        {displayItems.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
              <AnimatePresence mode="wait">
                {displayItems.map((mitra, index) => (
                  <MitraCard key={mitra.id} mitra={mitra} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {hasMore && (
              <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={handleLoadMore}
                  disabled={isLoadingMore}
                  className="px-8 py-3 bg-white border-2 border-[#00AEEF]/30 text-[#00AEEF] font-semibold rounded-xl hover:border-[#00AEEF] hover:bg-[#00AEEF]/5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: isLoadingMore ? 1 : 1.05 }}
                  whileTap={{ scale: isLoadingMore ? 1 : 0.95 }}
                >
                  {isLoadingMore ? 'Memuat...' : 'Muat Lebih Banyak'}
                </motion.button>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-xl text-slate-600 mb-4">Tidak ada mitra yang ditemukan</p>
            <p className="text-slate-500">
              Coba ubah filter provinsi, kategori, atau kata kunci pencarian Anda
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
