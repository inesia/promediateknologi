'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroStats from '@/components/mitra/HeroStats'
import SearchFilterBar from '@/components/mitra/SearchFilterBar'
import MitraGrid from '@/components/mitra/MitraGrid'
import CTASection from '@/components/mitra/CTASection'

function MitraPageContent() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(
    () => searchParams.get('kategori') || searchParams.get('category') || 'all'
  )
  const [activeProvince, setActiveProvince] = useState(
    () => searchParams.get('daerah') || searchParams.get('provinsi') || 'all'
  )

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <HeroStats />
        <SearchFilterBar
          onSearchChange={setSearchQuery}
          onCategoryChange={setActiveCategory}
          onProvinceChange={setActiveProvince}
          activeCategory={activeCategory}
          activeProvince={activeProvince}
        />
        <MitraGrid
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          activeProvince={activeProvince}
        />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}

export default function MitraPage() {
  return (
    <Suspense fallback={null}>
      <MitraPageContent />
    </Suspense>
  )
}
