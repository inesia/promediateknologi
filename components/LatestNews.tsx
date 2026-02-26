'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function LatestNews({ data }: { data: any }) {
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
          {data.meta.code === 200 && data.data.list.latest.slice(0, 6).map((item: any, index: number) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-transparent group cursor-pointer"
            >
              <Link href={item.url}>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={item.thumb_url}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 bg-[#F26522] text-white rounded-lg w-16 h-16 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-xl font-bold leading-none">{new Date(item.published_date).getDate()}</span>
                    <span className="text-sm font-medium leading-none mt-1">
                      {new Date(item.published_date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#4A4A4A] leading-snug group-hover:text-[#F26522] transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
