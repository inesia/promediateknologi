'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'


const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
]

function formatNewsDate(dateString?: string) {
  if (!dateString) return { day: '', month: '', year: '' }

  const datePart = dateString.trim().split(/[ T]/)[0]
  const [year, monthNum, day] = datePart.split('-')

  const monthIdx = parseInt(monthNum, 10) - 1
  const month = MONTH_NAMES[monthIdx] || ''

  return {
    day: String(parseInt(day, 10) || ''),
    month,
    year: year || '',
  }
}

export default function LatestNews({ news }: { news: any }) {
  const latestNews = (Array.isArray(news?.data?.list?.latest) ? news.data.list.latest : []).slice(0, 6)

  return (
    <section className="py-0 sm:py-6 bg-slate-50 overflow-hidden safari-no-anim">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-0 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001A2C] mb-4">
              Kabar <span className="text-[#00AEEF]">Ekosistem</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Berita terkini dari Promedia dan seluruh jaringan mitra di Indonesia.
            </p>
          </motion.div>

          <Link href="https://www.go24jam.id/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-[#001A2C] hover:bg-slate-50 transition-all shadow-sm">
            Lihat Semua Berita <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {latestNews.map((item: any, index: number) => {
            const date = formatNewsDate(item.published_date)
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden group border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.thumb_url}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                  />
                  <div className={`absolute top-2 left-2 md:top-3 md:left-3 px-2 py-1 md:px-3 md:py-1.5 backdrop-blur-md rounded-lg text-[8px] md:text-[10px] font-bold uppercase tracking-wider ${item.type === 'promedia'
                    ? 'bg-[#00AEEF]/90 text-white shadow-lg shadow-[#00AEEF]/20 border border-[#00AEEF]/50'
                    : 'bg-white/90 text-[#001A2C] shadow-sm border border-white/50'
                    }`}>
                    {/* {item.type === 'promedia' ? 'Promedia' : 'Network'} */}
                    Network
                  </div>
                </div>

                <div className="p-3 md:p-6 flex-1 flex flex-col">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 md:mb-4 gap-1 md:gap-2">
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="text-[#00AEEF] font-black text-sm md:text-lg">{date.day}</div>
                      <div className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        {date.month} {date.year}
                      </div>
                    </div>
                    <div className="text-[8px] md:text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-md tracking-wide w-fit truncate max-w-full">
                      {item.site?.name}
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm md:text-lg font-bold text-[#001A2C] leading-snug group-hover:text-[#00AEEF] transition-colors line-clamp-3 md:line-clamp-3">
                    {item.origin_url || item.url ? (
                      <a href={item.origin_url || item.url} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

