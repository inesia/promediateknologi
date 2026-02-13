'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const LATEST_NEWS = [
  {
    id: 1,
    title: 'Promedia Group Raih Penghargaan di Panen Fest 2026',
    date: { day: '07', month: 'Feb' },
    image: 'https://picsum.photos/seed/news1/600/400', // Event/Stage placeholder
  },
  {
    id: 2,
    title: 'Usung Tagline "Mavericks and Ahead", Promedia Teknologi Optimis Tatap Masa Depan',
    date: { day: '28', month: 'Jan' },
    image: 'https://picsum.photos/seed/news2/600/400', // Business meeting placeholder
  },
  {
    id: 3,
    title: 'Sekjen Kemensos Robben Rico Bahas Program Sekolah Rakyat bersama Promedia',
    date: { day: '21', month: 'Jan' },
    image: 'https://picsum.photos/seed/news3/600/400', // Speaking/Conference placeholder
  },
  {
    id: 4,
    title: 'Promedia Terima Kunjungan SMSI Murung Raya, Bahas Kolaborasi Media Lokal',
    date: { day: '09', month: 'Jan' },
    image: 'https://picsum.photos/seed/news4/600/400', // Group photo placeholder
  },
  {
    id: 5,
    title: 'Forum JPP Promedia bersama DIKPI Kupas Ilmu Self Policing dan Etika Jurnalistik',
    date: { day: '12', month: 'Nov' },
    image: 'https://picsum.photos/seed/news5/600/400', // Webinar/Video call placeholder
  },
  {
    id: 6,
    title: 'Mediapreneur Talks Promedia 2025 Sukses Digelar di Jakarta',
    date: { day: '06', month: 'Nov' },
    image: 'https://picsum.photos/seed/news6/600/400', // Audience/Event placeholder
  },
]

export default function LatestNews() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A] mb-4"
          >
            Latest From Promedia
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_NEWS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-transparent group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 bg-[#F26522] text-white rounded-lg w-16 h-16 flex flex-col items-center justify-center shadow-sm">
                  <span className="text-xl font-bold leading-none">{item.date.day}</span>
                  <span className="text-sm font-medium leading-none mt-1">{item.date.month}</span>
                </div>
                
                <h3 className="text-lg font-bold text-[#4A4A4A] leading-snug group-hover:text-[#F26522] transition-colors line-clamp-3">
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
