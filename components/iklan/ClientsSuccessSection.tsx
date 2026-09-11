'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import ClientLogoSlider from './ClientLogoSlider'

const successStories = [
  {
    title: 'Peluncuran FMCG Nasional',
    client: 'Brand Partner',
    metric: '12Jt+ impresi',
    summary: 'Advertorial dan display di jaringan media regional.',
  },
  {
    title: 'Kampanye Korporat B2B',
    client: 'Mitra Institusi',
    metric: '850Rb+ jangkauan',
    summary: 'Artikel native dengan amplifikasi sosial terintegrasi.',
  },
  {
    title: 'Awareness Program Publik',
    client: 'Mitra Sektor',
    metric: '2,4Jt+ tayangan',
    summary: 'Kombinasi artikel, banner, dan dokumentasi event dalam satu kampanye.',
  },
]

export default function ClientsSuccessSection() {
  return (
    <section className="py-16 lg:py-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-20 lg:space-y-24">
        <ClientLogoSlider embedded />

        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00AEEF]/10 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide">
                Success Story
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#001A2C] mb-2">
              Studi Kasus Kampanye
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Ringkasan kampanye terbaru — media deck lengkap tersedia atas permintaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {successStories.map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-2 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3]" />
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] font-bold text-[#00AEEF] uppercase tracking-wide">
                    {story.client}
                  </p>
                  <h3 className="text-lg font-black text-[#001A2C] mt-1 mb-3">{story.title}</h3>
                  <p className="text-2xl font-bold text-[#2D74B3] mb-3">{story.metric}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mt-auto">{story.summary}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
