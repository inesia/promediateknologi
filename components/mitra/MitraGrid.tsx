'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MitraCard from './MitraCard'
import MitraSkeleton from './MitraSkeleton'

// Mock data - replace with actual API call
// Initial data

interface Mitra {
  id: number
  name: string
  category: string
  path: string
}

interface MitraGridProps {
  searchQuery: string
  activeCategory: string
  activeRegion: string
}

export default function MitraGrid({ searchQuery, activeCategory, activeRegion }: MitraGridProps) {
  const [mitraData, setMitraData] = useState<Mitra[]>([])
  const [meta, setMeta] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isMoreLoading, setIsMoreLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, activeCategory, activeRegion])

  // Simulate loading
  // Fetch data
  useEffect(() => {
    async function fetchMitra() {
      if (currentPage === 1) {
        setIsLoading(true)
      } else {
        setIsMoreLoading(true)
      }

      try {
        const params = new URLSearchParams()
        if (searchQuery) params.append('search', searchQuery)
        if (activeCategory) params.append('category', activeCategory)
        if (activeRegion) params.append('region', activeRegion)
        params.append('page', currentPage.toString())
        params.append('limit', '40') // Keep 40 as requested, or set to a reasonable number

        const res = await fetch(`/api/mitra?${params.toString()}`)
        if (!res.ok) throw new Error('Failed to fetch')
        const json = await res.json()

        // Attempting to map based on common patterns if the API returns direct array or wrapped object
        let dataToMap = []
        if (Array.isArray(json)) {
          dataToMap = json
        } else if (json.data && Array.isArray(json.data)) {
          dataToMap = json.data
        } else if (json.record && Array.isArray(json.record)) {
          dataToMap = json.record
        }

        const normalizeCategory = (apiCategory: string) => {
          const lower = (apiCategory || '').toLowerCase()
          if (lower.includes('nasional') || lower.includes('news')) return 'nasional'
          if (lower.includes('regional') || lower.includes('daerah')) return 'regional'
          if (lower.includes('ekonomi') || lower.includes('bisnis') || lower.includes('business')) return 'ekonomi'
          if (lower.includes('energi') || lower.includes('lingkungan')) return 'energi'
          if (lower.includes('agro') || lower.includes('tani')) return 'agrobisnis'
          if (lower.includes('otomotif') || lower.includes('auto')) return 'otomotif'
          if (lower.includes('teknologi') || lower.includes('tech') || lower.includes('gadget')) return 'teknologi'
          if (lower.includes('sains') || lower.includes('pengetahuan') || lower.includes('science')) return 'sains'
          if (lower.includes('pendidikan') || lower.includes('edukasi') || lower.includes('education')) return 'pendidikan'
          if (lower.includes('kesehatan') || lower.includes('health') || lower.includes('medis')) return 'kesehatan'
          if (lower.includes('agama') || lower.includes('religi')) return 'agama'
          if (lower.includes('lifestyle') || lower.includes('gaya hidup')) return 'lifestyle'
          if (lower.includes('kuliner') || lower.includes('food') || lower.includes('makan')) return 'kuliner'
          if (lower.includes('wisata') || lower.includes('travel') || lower.includes('turis')) return 'wisata'
          if (lower.includes('seni') || lower.includes('hiburan') || lower.includes('art') || lower.includes('entertainment')) return 'hiburan'
          return 'nasional' // Default fallback
        }

        const mappedData = dataToMap.map((item: any, index: number) => ({
          id: item.id || `${currentPage}-${index}`,
          name: item.fullname || item.name || item.domain || 'Mitra Media',
          category: normalizeCategory(item.category_name || item.category || ''),
          path: item.path || item.logo || item.image || '/images/logo.png', // Fallback to placeholder
          domain: item.url || ''
        }))

        setMeta(json.meta)
        setLastPage(json.meta.last_page)

        if (currentPage === 1) {
          setMitraData(mappedData)
        } else {
          setMitraData(prev => [...prev, ...mappedData])
        }
      } catch (error) {
        console.error('Error loading mitra:', error)
        if (currentPage === 1) setMitraData([])
      } finally {
        setIsLoading(false)
        setIsMoreLoading(false)
      }
    }

    fetchMitra()
  }, [searchQuery, activeCategory, activeRegion, currentPage])

  // Data already filtered by server, but we keep this to handle re-renders efficiently
  const filteredMitra = useMemo(() => {
    return mitraData
  }, [mitraData])

  const handleLoadMore = () => {
    if (currentPage < lastPage) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  if (isLoading) {
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
        {/* Results count */}
        {meta && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-600 mb-8 text-center"
          >
            Menampilkan {mitraData.length} dari {meta.total} mitra media
          </motion.p>
        )}

        {/* Grid */}
        {mitraData.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
              <AnimatePresence>
                {mitraData.map((mitra, index) => (
                  <MitraCard key={mitra.id} mitra={mitra} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {/* Load More Button */}
            {currentPage < lastPage && (
              <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={handleLoadMore}
                  disabled={isMoreLoading}
                  className="px-8 py-3 bg-white border-2 border-[#00AEEF]/30 text-[#00AEEF] font-semibold rounded-xl hover:border-[#00AEEF] hover:bg-[#00AEEF]/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMoreLoading ? 'Memuat...' : 'Muat Lebih Banyak'}
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
              Tidak ada mitra yang ditemukan
            </p>
            <p className="text-slate-500">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
