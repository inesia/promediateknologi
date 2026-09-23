'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  Sparkles,
  Share2,
  Calendar,
  Layers,
  ZoomIn,
  X,
  ExternalLink,
  MapPin,
  Users,
  CheckCircle2,
} from 'lucide-react'

// Custom TikTok icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.86-4.49V8.52a8.27 8.27 0 0 0 4.84 1.56v-3.4a4.85 4.85 0 0 1-.93.01z" />
    </svg>
  )
}

interface PortfolioItem {
  id: string
  category: 'social' | 'event'
  title: string
  subtitle: string
  client: string
  image: string
  description: string
  platforms: string[]
  metrics?: string
  highlights?: string[]
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'daihatsu-yamaha',
    category: 'social',
    title: 'Daihatsu GIIAS 2024 & Yamaha Brand Awareness',
    subtitle: 'Amplifikasi Event & Multiplatform Content Campaign',
    client: 'Daihatsu & Yamaha',
    image: '/images/portfolio/portfolio-daihatsu-yamaha.webp',
    description:
      'Aktivasi konten multiplatform untuk peliputan booth Daihatsu di pameran otomotif GIIAS 2024 dan kampanye touring destinasi wisata Jawa Tengah bersama Yamaha melalui artikel web, Instagram reels, dan video TikTok.',
    platforms: ['TikTok', 'Instagram', 'Website'],
    metrics: 'Multiplatform Viral Reach',
    highlights: [
      'Liputan serentak booth Daihatsu di GIIAS 2024',
      'Konten interaktif TikTok "Kenapa Harus Main ke Booth Daihatsu"',
      'Artikel travel storytelling 5 destinasi wisata bersama Yamaha',
    ],
  },
  {
    id: 'bri-amplifikasi',
    category: 'social',
    title: 'Bank BRI: Corporate Campaign & Edukasi Publik',
    subtitle: 'Amplifikasi Program Kerakyatan & Transparansi Informasi',
    client: 'Bank BRI',
    image: '/images/portfolio/portfolio-bri-amplifikasi.webp',
    description:
      'Penyebaran rilis program pemberdayaan ekonomi kerakyatan (penyaluran mesin pipil jagung Gapoktan Sumsel), penguatan peran Kantor Regional BRI, dan diseminasi transparansi penegakan hukum perbankan.',
    platforms: ['Website', 'Instagram', 'TikTok'],
    metrics: 'Jangkauan Nasional & Regional',
    highlights: [
      'Penyaluran 23 unit mesin pipil jagung di Sumsel',
      'Publikasi profil BRI Region 4 Palembang',
      'Diseminasi komitmen transparansi & integritas perbankan',
    ],
  },
  {
    id: 'harita-bri-antam',
    category: 'social',
    title: 'Harita Group, BRI & ANTAM: ESG & Corporate News',
    subtitle: 'Amplifikasi Isu Lingkungan, Industri & Keberlanjutan',
    client: 'Harita Group, BRI, ANTAM',
    image: '/images/portfolio/portfolio-harita-bri-antam.webp',
    description:
      'Kampanye multiplatform edukasi industri hilirisasi bauksit Pulau Penebang bersama Harita Group, peringatan Hari Mangrove Sedunia bersama ANTAM & KLH, serta rilis kebijakan strategis direksi Bank BRI.',
    platforms: ['TikTok', 'Instagram', 'Website'],
    metrics: 'Top Engagement & Positive Sentiment',
    highlights: [
      'Edukasi pemurnian bauksit & dampak industri ramah lingkungan',
      'Aksi tanam 5.000 bibit mangrove ANTAM & KLH',
      'Penyebaran pesan strategis Direktur Utama Bank BRI',
    ],
  },
  {
    id: 'mediapreneur-talks',
    category: 'event',
    title: 'Mediapreneur Talks: Roadshow Nasional di 6 Kota',
    subtitle: 'Talkshow & Forum Kolaborasi Bisnis Media Berkelanjutan',
    client: 'Promedia Group & Mitra Media',
    image: '/images/portfolio/portfolio-mediapreneur-talks.webp',
    description:
      'Rangkaian roadshow talkshow industri media yang membahas model bisnis masa depan, pendekatan digital, dan kolaborasi ekonomi berbagi. Diikuti oleh lebih dari 1.000 pemilik media, pemimpin redaksi, dan pimpinan organisasi di 6 kota besar Indonesia.',
    platforms: ['Event', 'Website', 'Instagram'],
    metrics: '1.040+ Pemilik Media & Organisasi',
    highlights: [
      'Surabaya (Santika Premiere) — 197 Peserta',
      'Semarang (Aston Pandanaran Inn) — 191 Peserta',
      'Palembang (Aston Hotel) — 187 Peserta',
      'Tasikmalaya (Santika Premiere) — 187 Peserta',
      'Tangerang Selatan (Mercure Alsut) — 127 Peserta',
      'Medan (Aston Hotel) — 152 Peserta',
    ],
  },
]

export default function CampaignPortfolio() {
  const [activeTab, setActiveTab] = useState<'all' | 'social' | 'event'>('all')
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string } | null>(null)

  const filteredItems = portfolioData.filter((item) => {
    if (activeTab === 'all') return true
    return item.category === activeTab
  })

  return (
    <section id="portofolio" className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Story &amp; Real Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001A2C] mb-3">
            Portofolio &amp; Bukti Nyata Kampanye
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Lihat bagaimana brand ternama nasional, BUMN, dan korporasi memanfaatkan ekosistem multiplatform Promedia untuk amplifikasi pesan, aktivasi event, dan pembentukan reputasi publik.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-6">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#001A2C] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Semua Portofolio ({portfolioData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('social')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'social'
                  ? 'bg-[#00AEEF] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Amplifikasi Media Sosial (3)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('event')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'event'
                  ? 'bg-[#00AEEF] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Event &amp; Roadshow (1)</span>
            </button>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              {/* Image Preview with Zoom Action */}
              <div
                className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage({ title: item.title, image: item.image })}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 580px"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-[#001A2C] text-xs font-bold shadow-md backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4 text-[#00AEEF]" /> Perbesar Slide
                  </span>
                </div>

                {/* Badge top-left */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full bg-[#001A2C]/80 backdrop-blur-md text-[#00AEEF] text-[11px] font-black uppercase tracking-wider border border-white/10">
                    {item.client}
                  </span>
                </div>

                {/* Metric pill bottom-right */}
                {item.metrics && (
                  <div className="absolute bottom-3.5 right-3.5">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[11px] font-bold shadow-sm">
                      {item.metrics}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {item.platforms.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold"
                    >
                      {p === 'TikTok' && <TikTokIcon className="w-3 h-3 text-cyan-600" />}
                      {p === 'Instagram' && <Share2 className="w-3 h-3 text-pink-600" />}
                      {p === 'Website' && <Layers className="w-3 h-3 text-[#00AEEF]" />}
                      {p === 'Event' && <Calendar className="w-3 h-3 text-amber-600" />}
                      <span>{p}</span>
                    </span>
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#001A2C] mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#00AEEF] font-bold uppercase tracking-wide mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights List */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Sorotan Kampanye:
                    </p>
                    <div className="space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700 font-medium leading-tight">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mediapreneur Talks Cities Grid Feature */}
        <div className="mt-10 sm:mt-12 rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>Roadshow Event Mediapreneur Talks</span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-[#001A2C]">
                Sebaran Jaringan Media di 6 Kota Besar
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-3 py-2 rounded-xl border border-slate-200 w-fit">
              <Users className="w-4 h-4 text-[#00AEEF]" />
              <span>Total 1.040+ Pimpinan Redaksi &amp; Media</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { city: 'Surabaya', venue: 'Santika Premiere', attendees: '197 Peserta' },
              { city: 'Semarang', venue: 'Aston Pandanaran', attendees: '191 Peserta' },
              { city: 'Palembang', venue: 'Aston Hotel', attendees: '187 Peserta' },
              { city: 'Tasikmalaya', venue: 'Santika Premiere', attendees: '187 Peserta' },
              { city: 'Tangsel', venue: 'Mercure Alsut', attendees: '127 Peserta' },
              { city: 'Medan', venue: 'Aston Hotel', attendees: '152 Peserta' },
            ].map((loc) => (
              <div
                key={loc.city}
                className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#00AEEF] text-[11px] font-bold mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{loc.city}</span>
                  </div>
                  <p className="text-xs font-black text-[#001A2C] leading-snug">{loc.venue}</p>
                </div>
                <p className="text-[11px] text-slate-500 font-semibold mt-2 pt-2 border-t border-slate-100">
                  {loc.attendees}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-4xl w-full bg-[#001A2C] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 border-b border-white/10 text-white">
                  <p className="text-sm font-bold">{selectedImage.title}</p>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
