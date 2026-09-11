'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MitraCard from './MitraCard'
import MitraSkeleton from './MitraSkeleton'

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
  initialClients?: any
  initialInfluencers?: any
}

function mapClientsToMitra(clientsData: any): Mitra[] {
  if (clientsData?.data && Array.isArray(clientsData.data)) {
    return clientsData.data.map((c: any) => ({
      id: c.code || c.id,
      name: c.name,
      logo: c.path,
      url: c.url,
    }))
  }
  return []
}

export default function MitraGrid({
  searchQuery,
  activeCategory,
  activeProvince,
  activeType = 'media',
  initialClients,
  initialInfluencers,
}: MitraGridProps) {
  const [mitraData, setMitraData] = useState<Mitra[]>(() => {
    const initialSource = activeType === 'influencer' ? initialInfluencers : initialClients
    return mapClientsToMitra(initialSource)
  })
  const [isLoading, setIsLoading] = useState(() => {
    const initialSource = activeType === 'influencer' ? initialInfluencers : initialClients
    return !(initialSource?.data && initialSource.data.length > 0)
  })
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(() => {
    const initialSource = activeType === 'influencer' ? initialInfluencers : initialClients
    if (initialSource?.meta) {
      return (initialSource.meta.current_page || 1) < (initialSource.meta.last_page || 1)
    }
    return false
  })
  const [error, setError] = useState<string | null>(null)
  const isInitialMount = useRef(true)
  const prevTypeRef = useRef(activeType)

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
          type: activeType,
          page: String(pageNum),
        })

        if (activeType === 'media') {
          if (activeCategory && activeCategory !== 'all') {
            params.set('kategori', activeCategory)
          }
          if (activeProvince && activeProvince !== 'all') {
            params.set('daerah', activeProvince)
          }
        }

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
    [activeType, activeCategory, activeProvince, searchQuery]
  )

  useEffect(() => {
    // When activeType switches
    if (prevTypeRef.current !== activeType) {
      prevTypeRef.current = activeType
      if (activeType === 'influencer' && initialInfluencers?.data && !searchQuery.trim()) {
        setMitraData(mapClientsToMitra(initialInfluencers))
        setHasMore(Boolean(initialInfluencers.meta && (initialInfluencers.meta.current_page || 1) < (initialInfluencers.meta.last_page || 1)))
        setPage(1)
        setIsLoading(false)
        return
      }
      if (activeType === 'media' && initialClients?.data && !searchQuery.trim() && activeCategory === 'all' && activeProvince === 'all') {
        setMitraData(mapClientsToMitra(initialClients))
        setHasMore(Boolean(initialClients.meta && (initialClients.meta.current_page || 1) < (initialClients.meta.last_page || 1)))
        setPage(1)
        setIsLoading(false)
        return
      }
      fetchMitra(1, true)
      return
    }

    if (isInitialMount.current) {
      isInitialMount.current = false
      if (mitraData.length > 0) {
        return
      }
    }

    fetchMitra(1, true)
  }, [activeType, fetchMitra, initialClients, initialInfluencers, searchQuery, activeCategory, activeProvince])

  const handleLoadMore = () => {
    if (!hasMore || isLoadingMore) return
    fetchMitra(page + 1, false)
  }

  if (isLoading) {
    return (
      <section className="py-16 lg:py-4 bg-white">
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
    <section className="py-16 lg:py-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-red-600 mb-8"
          >
            {error}
          </motion.p>
        )}

        {mitraData.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-600 mb-8 text-center"
          >
            Menampilkan {mitraData.length} {activeType === 'media' ? 'mitra media' : 'influencer & creator'}
            {hasMore ? ' (muat lebih banyak untuk melihat lainnya)' : ''}
          </motion.p>
        )}

        {mitraData.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
              <AnimatePresence mode="wait">
                {mitraData.map((mitra, index) => (
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
            <p className="text-xl text-slate-600 mb-4">
              Tidak ada {activeType === 'media' ? 'mitra media' : 'influencer & creator'} yang ditemukan
            </p>
            <p className="text-slate-500">
              {activeType === 'media'
                ? 'Coba ubah filter provinsi, kategori, atau kata kunci pencarian Anda'
                : 'Coba ubah kata kunci pencarian Anda'}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
