'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const LATEST_NEWS = [
  {
    id: 1,
    title: 'Promedia Group Raih Penghargaan di Panen Fest 2026',
    date: { day: '07', month: 'Feb' },
    source: 'Promedia News',
    image: 'https://picsum.photos/seed/news1/600/400',
  },
  {
    id: 2,
    title: 'Headline Utama Partner: Kolaborasi Strategis di Era Digital',
    date: { day: '05', month: 'Feb' },
    source: 'Mitra Media',
    image: 'https://picsum.photos/seed/news2/600/400',
  },
  {
    id: 3,
    title: 'Usung Tagline "Mavericks and Ahead", Promedia Teknologi Optimis Tatap Masa Depan',
    date: { day: '28', month: 'Jan' },
    source: 'Promedia News',
    image: 'https://picsum.photos/seed/news3/600/400',
  },
  {
    id: 4,
    title: 'Inovasi Jurnalistik Lokal: Cerita dari Jaringan Mitra Promedia',
    date: { day: '15', month: 'Jan' },
    source: 'Mitra Media',
    image: 'https://picsum.photos/seed/news4/600/400',
  },
]

export default function LatestNews() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001A2C] mb-4">
              Kabar Terbaru <span className="text-[#00AEEF]">Ekosistem</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Berita terkini dari Promedia dan seluruh jaringan mitra di Indonesia.
            </p>
          </motion.div>
          
          <Link href="/news" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-[#001A2C] hover:bg-slate-50 transition-all shadow-sm">
            Lihat Semua Berita <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LATEST_NEWS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden group border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-[#001A2C] uppercase tracking-wider">
                  {item.source}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#00AEEF] font-black text-lg">{item.date.day}</div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{item.date.month} 2026</div>
                </div>
                
                <h3 className="text-base font-bold text-[#001A2C] leading-snug group-hover:text-[#00AEEF] transition-colors line-clamp-3">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
