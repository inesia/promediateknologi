'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CATEGORY_COLORS, type NewsItem } from './newsData'

interface NewsCardProps {
  item: NewsItem
}

export default function NewsCard({ item }: NewsCardProps) {
  const badgeClass = CATEGORY_COLORS[item.category] ?? 'bg-slate-100 text-slate-800'

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group break-inside-avoid mb-6 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <a href="#" className="block">
        <div className="aspect-video relative bg-slate-100 overflow-hidden">
          <Image
            src={item.thumbnail}
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
          <h3 className="font-bold text-[#001A2C] text-base leading-snug group-hover:text-[#00AEEF] transition-colors line-clamp-3 mb-2">
            {item.title}
          </h3>
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-sm text-slate-500 truncate">
              <span className="w-5 h-5 rounded bg-slate-200 flex-shrink-0 overflow-hidden">
                <Image src={item.thumbnail} alt="" width={20} height={20} className="w-full h-full object-cover" />
              </span>
              <span className="truncate">{item.media}</span>
            </span>
            <span className="text-xs text-slate-400 flex-shrink-0">{item.timeAgo}</span>
          </div>
        </div>
      </a>
    </motion.article>
  )
}
