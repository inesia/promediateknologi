'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MitraCard from './MitraCard'
import MitraSkeleton from './MitraSkeleton'

// Mock data - replace with actual API call
const mockMitraData = [
  { id: 1, name: 'Media Nasional 1', category: 'nasional', logo: '/images/logo.png' },
  { id: 2, name: 'Media Regional 1', category: 'regional', logo: '/images/logo.png' },
  { id: 3, name: 'Media Hiburan 1', category: 'hiburan', logo: '/images/logo.png' },
  { id: 4, name: 'Media Teknologi 1', category: 'teknologi', logo: '/images/logo.png' },
  { id: 5, name: 'Media Nasional 2', category: 'nasional', logo: '/images/logo.png' },
  { id: 6, name: 'Media Regional 2', category: 'regional', logo: '/images/logo.png' },
  { id: 7, name: 'Media Hiburan 2', category: 'hiburan', logo: '/images/logo.png' },
  { id: 8, name: 'Media Teknologi 2', category: 'teknologi', logo: '/images/logo.png' },
  { id: 9, name: 'Media Nasional 3', category: 'nasional', logo: '/images/logo.png' },
  { id: 10, name: 'Media Regional 3', category: 'regional', logo: '/images/logo.png' },
  { id: 11, name: 'Media Hiburan 3', category: 'hiburan', logo: '/images/logo.png' },
  { id: 12, name: 'Media Teknologi 3', category: 'teknologi', logo: '/images/logo.png' },
  { id: 13, name: 'Media Nasional 4', category: 'nasional', logo: '/images/logo.png' },
  { id: 14, name: 'Media Regional 4', category: 'regional', logo: '/images/logo.png' },
  { id: 15, name: 'Media Hiburan 4', category: 'hiburan', logo: '/images/logo.png' },
  { id: 16, name: 'Media Teknologi 4', category: 'teknologi', logo: '/images/logo.png' },
]

interface Mitra {
  id: number
  name: string
  category: string
  logo: string
}

interface MitraGridProps {
  searchQuery: string
  activeCategory: string
}

export default function MitraGrid({ searchQuery, activeCategory }: MitraGridProps) {
  const [mitraData, setMitraData] = useState<Mitra[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [displayCount, setDisplayCount] = useState(12)

  // Simulate loading
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setMitraData(mockMitraData)
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Filter and search
  const filteredMitra = useMemo(() => {
    let filtered = [...mitraData]

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter((mitra) => mitra.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter((mitra) =>
        mitra.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }, [mitraData, activeCategory, searchQuery])

  const displayedMitra = filteredMitra.slice(0, displayCount)
  const hasMore = displayCount < filteredMitra.length

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 12)
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
        {filteredMitra.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-600 mb-8 text-center"
          >
            Menampilkan {displayedMitra.length} dari {filteredMitra.length} mitra media
          </motion.p>
        )}

        {/* Grid */}
        {displayedMitra.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
              <AnimatePresence mode="wait">
                {displayedMitra.map((mitra, index) => (
                  <MitraCard key={mitra.id} mitra={mitra} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {/* Load More Button */}
            {hasMore && (
              <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-white border-2 border-[#00AEEF]/30 text-[#00AEEF] font-semibold rounded-xl hover:border-[#00AEEF] hover:bg-[#00AEEF]/5 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Muat Lebih Banyak
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
