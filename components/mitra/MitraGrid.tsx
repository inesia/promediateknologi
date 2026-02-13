'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MitraCard from './MitraCard'
import MitraSkeleton from './MitraSkeleton'

// Mock data - replace with actual API call
// Initial data
const mockMitraData = [
  { id: 1, name: 'Media Nasional 1', category: 'nasional', logo: '/images/logo.png' },
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
  // Fetch data
  useEffect(() => {
    async function fetchMitra() {
      setIsLoading(true)
      try {
        const res = await fetch('/api/mitra')
        if (!res.ok) throw new Error('Failed to fetch')
        const json = await res.json()
        
        // Console log to debug structure
        console.log('Mitra API Response:', json)

        // Attempting to map based on common patterns if the API returns direct array or wrapped object
        // Adjust this mapping once we know the exact structure
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
          id: item.id || index,
          name: item.fullname || item.name || item.domain || 'Mitra Media',
          category: normalizeCategory(item.category_name || item.category || ''),
          logo: item.logo_url || item.logo || item.image || '/images/logo.png', // Fallback to placeholder
          domain: item.domain || ''
        }))

        if (mappedData.length > 0) {
          setMitraData(mappedData)
        } else {
             // Fallback if mapping fails
             console.warn('Could not map API data, using mock data')
             setMitraData(mockMitraData)
        }
      } catch (error) {
        console.error('Error loading mitra:', error)
        setMitraData(mockMitraData)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMitra()
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
