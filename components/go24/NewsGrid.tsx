'use client'

import { useEffect, useRef, useCallback } from 'react'
import NewsCard from './NewsCard'
import SkeletonCard from './SkeletonCard'
import type { NewsItem } from './newsData'

interface NewsGridProps {
  items: NewsItem[]
  loading: boolean
  hasMore: boolean
  onLoadMore: () => void
}

export default function NewsGrid({ items, loading, hasMore, onLoadMore }: NewsGridProps) {
  const sentinelRef = useRef<HTMLDivElement>(null)

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (entry?.isIntersecting && hasMore && !loading) onLoadMore()
    },
    [hasMore, loading, onLoadMore]
  )

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '200px',
      threshold: 0.1,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [handleIntersect])

  return (
    <div className="py-2">
      {/* Masonry: CSS columns */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3 gap-6"
        style={{ columnFill: 'balance' }}
      >
        {loading && items.length === 0 ? (
          <>
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </>
        ) : (
          <>
            {items.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
            {loading && items.length > 0 && (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            )}
          </>
        )}
      </div>

      {/* Infinite scroll sentinel */}
      <div ref={sentinelRef} className="h-4 w-full" aria-hidden />
    </div>
  )
}
