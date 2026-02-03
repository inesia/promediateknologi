'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MOCK_NEWS } from '@/components/go24/newsData'
import { CATEGORY_COLORS } from '@/components/go24/newsData'
import type { NewsItem } from '@/components/go24/newsData'

const PRIMARY = '#00AEEF'

// Show first 6 items; free placeholder images from Picsum
const PREVIEW_ITEMS = MOCK_NEWS.slice(0, 6).map((item, i) => ({
  ...item,
  imageUrl: `https://picsum.photos/400/225?random=${i + 1}`,
}))

function CloudNewsCard({
  item,
  imageUrl,
  index,
}: {
  item: NewsItem
  imageUrl: string
  index: number
}) {
  const badgeClass = CATEGORY_COLORS[item.category] ?? 'bg-slate-100 text-slate-800'

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group break-inside-avoid mb-6 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-[#00AEEF]/30 hover:-translate-y-1 transition-all duration-300"
    >
      <Link href="/go24" className="block">
        <div className="aspect-video relative bg-slate-100 overflow-hidden">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-medium ${badgeClass}`}>
            {item.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-[#001A2C] text-sm leading-snug group-hover:text-[#00AEEF] transition-colors line-clamp-2 mb-2">
            {item.title}
          </h3>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-slate-500 truncate">{item.media}</span>
            <span className="text-xs text-slate-400 flex-shrink-0">{item.timeAgo}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function NetworkLivePulse() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header + GO24 logo slot */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            {/* Slot logo GO24: letakkan asset di public/images/go24-logo.png */}
            <div className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm overflow-hidden">
              <Image
                src="/images/go24-logo.png"
                alt="GO24"
                width={80}
                height={80}
                className="w-full h-full object-contain relative z-10"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.closest('.relative')
                  const fallback = parent?.querySelector('[data-go24-fallback]') as HTMLElement
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <span
                data-go24-fallback
                className="absolute inset-0 hidden items-center justify-center text-lg font-bold text-[#00AEEF] bg-slate-50"
                style={{ display: 'none' }}
                aria-hidden
              >
                GO24
              </span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#001A2C] mb-1">
                Network Live Pulse
              </h2>
              <p className="text-slate-600 text-sm">
                Berita terbaru dari jejaring media Promedia di seluruh Indonesia
              </p>
            </div>
          </div>
          <Link
            href="/go24"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00AEEF] hover:bg-[#009ad6] rounded-lg transition-colors w-fit"
          >
            Cari Berita di Kotamu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News cards grid (masonry-style) */}
        <div
          className="columns-2 lg:columns-3 gap-6"
          style={{ columnFill: 'balance' }}
        >
          {PREVIEW_ITEMS.map((item, i) => (
            <CloudNewsCard
              key={item.id}
              item={item}
              imageUrl={item.imageUrl}
              index={i}
            />
          ))}
        </div>

        {/* CTA below cards */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/go24"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#00AEEF] border border-[#00AEEF]/50 rounded-xl hover:bg-[#00AEEF]/5 transition-colors bg-white"
          >
            Jelajahi Semua Berita
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
