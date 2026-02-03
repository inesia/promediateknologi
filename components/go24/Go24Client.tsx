'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
import HeroSearch from './HeroSearch'
import FilterBar from './FilterBar'
import NewsGrid from './NewsGrid'
import TrendingSidebar from './TrendingSidebar'
import { MOCK_NEWS, type NewsItem } from './newsData'

const PAGE_SIZE = 12

function filterItems(
  items: NewsItem[],
  search: string,
  category: string,
  location: string,
  media: string
): NewsItem[] {
  let out = [...items]
  if (search.trim()) {
    const q = search.toLowerCase()
    out = out.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.media.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
    )
  }
  if (category && category !== 'all') {
    out = out.filter((i) => i.category === category)
  }
  if (media && media !== 'all') {
    out = out.filter((i) => i.media.toLowerCase().replace(/\s/g, '').includes(media))
  }
  return out
}

export default function Go24Client() {
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [location, setLocation] = useState('nasional')
  const [media, setMedia] = useState('all')
  const [loading, setLoading] = useState(true)
  const [initialLoad, setInitialLoad] = useState(true)
  const [page, setPage] = useState(1)

  const filtered = useMemo(
    () => filterItems(MOCK_NEWS, searchQuery, category, location, media),
    [searchQuery, category, location, media]
  )

  const displayed = useMemo(
    () => filtered.slice(0, page * PAGE_SIZE),
    [filtered, page]
  )
  const hasMore = displayed.length < filtered.length

  const handleSearch = useCallback((q: string) => {
    setSearchQuery(q)
    setPage(1)
  }, [])

  const handleTagClick = useCallback((tag: string) => {
    const id = tag.replace('#', '').toLowerCase()
    const map: Record<string, string> = {
      timnas: 'olahraga',
      ekonomi: 'ekonomi',
      tekno: 'tekno',
      olahraga: 'olahraga',
      hiburan: 'hiburan',
      otomotif: 'otomotif',
      politik: 'politik',
    }
    setCategory(map[id] ?? 'all')
    setPage(1)
  }, [])

  const handleLoadMore = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setPage((p) => p + 1)
      setLoading(false)
    }, 600)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false)
      setInitialLoad(false)
    }, 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <HeroSearch onSearch={handleSearch} onTagClick={handleTagClick} />
      <FilterBar
        category={category}
        location={location}
        media={media}
        onCategoryChange={(id) => {
          setCategory(id)
          setPage(1)
        }}
        onLocationChange={setLocation}
        onMediaChange={setMedia}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-8">
          <div className="flex-1 min-w-0">
            <NewsGrid
              items={initialLoad ? [] : displayed}
              loading={loading}
              hasMore={hasMore}
              onLoadMore={handleLoadMore}
            />
          </div>
          <div className="hidden lg:block w-80 flex-shrink-0">
            <TrendingSidebar className="sticky top-24" />
          </div>
        </div>
      </div>

      {/* Mobile: Trending section below grid */}
      <div className="lg:hidden border-t border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <TrendingSidebar />
        </div>
      </div>
    </>
  )
}
