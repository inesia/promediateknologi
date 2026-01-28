'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroStats from '@/components/mitra/HeroStats'
import SearchFilterBar from '@/components/mitra/SearchFilterBar'
import MitraGrid from '@/components/mitra/MitraGrid'
import CTASection from '@/components/mitra/CTASection'

export default function MitraPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <HeroStats />
        <SearchFilterBar
          onSearchChange={setSearchQuery}
          onCategoryChange={setActiveCategory}
          activeCategory={activeCategory}
        />
        <MitraGrid searchQuery={searchQuery} activeCategory={activeCategory} />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
