'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import SearchFilterBar from '@/components/mitra/SearchFilterBar'
import MitraGrid from '@/components/mitra/MitraGrid'

interface FilterItem {
  id?: number | string
  name: string
  slug: string
}

interface MitraContainerProps {
  regions: FilterItem[]
  categories: FilterItem[]
  initialClients?: any
  initialInfluencers?: any
}

export default function MitraContainer({
  regions,
  categories,
  initialClients,
  initialInfluencers,
}: MitraContainerProps) {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeType, setActiveType] = useState<'media' | 'influencer'>('media')
  const [activeCategory, setActiveCategory] = useState(
    () => searchParams.get('kategori') || searchParams.get('category') || 'all'
  )
  const [activeProvince, setActiveProvince] = useState(
    () => searchParams.get('daerah') || searchParams.get('provinsi') || 'all'
  )

  return (
    <>
      <SearchFilterBar
        onSearchChange={setSearchQuery}
        onCategoryChange={setActiveCategory}
        onProvinceChange={setActiveProvince}
        onTypeChange={setActiveType}
        activeCategory={activeCategory}
        activeProvince={activeProvince}
        activeType={activeType}
        regions={regions}
        categories={categories}
      />
      <MitraGrid
        searchQuery={searchQuery}
        activeCategory={activeCategory}
        activeProvince={activeProvince}
        activeType={activeType}
        initialClients={initialClients}
        initialInfluencers={initialInfluencers}
      />
    </>
  )
}
