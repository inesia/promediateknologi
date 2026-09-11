'use client'

import { useState, type ComponentType } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  Share2,
  Monitor,
  Calendar,
  ExternalLink,
  ChevronRight,
  Newspaper,
  PenLine,
  Star,
  Instagram,
  Facebook,
  Youtube,
  LayoutGrid,
  Handshake,
  Mic2,
} from 'lucide-react'
import Link from 'next/link'

const BANNER_SIMULATION_URL =
  'https://html.promediateknologi.id/project/iventori-iklan/mobile/index.html'

const pillars = [
  {
    id: 'native',
    label: 'Native / Article',
    shortLabel: 'Native',
    icon: FileText,
    description:
      'Konten bergaya editorial terintegrasi di media mitra—cocok untuk storytelling dan edukasi brand.',
  },
  {
    id: 'sosmed',
    label: 'Sosmed Media Network',
    shortLabel: 'Sosmed',
    icon: Share2,
    description:
      'Distribusi kreatif di jaringan media sosial kami: Instagram, TikTok, Reels, dan format lainnya.',
  },
  {
    id: 'banner',
    label: 'Banner / Display',
    shortLabel: 'Banner',
    icon: Monitor,
    description:
      'Iklan display mobile & desktop di portal media mitra—berbagai ukuran standar IAB tersedia.',
  },
  {
    id: 'event',
    label: 'Event / Partnership',
    shortLabel: 'Event',
    icon: Calendar,
    description:
      'Aktivasi brand, kemitraan strategis, dan kolaborasi dengan institusi.',
  },
] as const

type PillarId = (typeof pillars)[number]['id']

function ProductTypeCard({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 hover:border-[#00AEEF]/30 hover:bg-white transition-colors">
      <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/10 flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-[#00AEEF]" />
      </div>
      <h4 className="font-bold text-[#001A2C] text-sm mb-1">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  )
}

function NativeArticlePanel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <ProductTypeCard
        icon={Newspaper}
        title="Advertorial"
        description="Artikel berbayar dengan gaya bahasa editorial."
      />
      <ProductTypeCard
        icon={PenLine}
        title="Sponsored Post"
        description="Konten branded dalam lineup editorial media."
      />
      <ProductTypeCard
        icon={Star}
        title="Review Article"
        description="Ulasan produk atau layanan dengan pendekatan jurnalistik."
      />
    </div>
  )
}

const sosmedPlatforms = [
  { name: 'Instagram Feed', icon: Instagram },
  { name: 'Instagram Reels', icon: Instagram },
  { name: 'TikTok', icon: Share2 },
  { name: 'Story', icon: LayoutGrid },
  { name: 'Facebook', icon: Facebook },
  { name: 'YouTube Shorts', icon: Youtube },
]

function SosmedPanel() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {sosmedPlatforms.map((platform) => {
        const Icon = platform.icon
        return (
          <div
            key={platform.name}
            className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 hover:border-[#00AEEF]/25 transition-colors"
          >
            <div className="w-9 h-9 shrink-0 rounded-lg bg-[#00AEEF]/10 flex items-center justify-center">
              <Icon className="w-4 h-4 text-[#00AEEF]" />
            </div>
            <span className="text-xs font-semibold text-[#001A2C] leading-tight">{platform.name}</span>
          </div>
        )
      })}
    </div>
  )
}

function BannerDisplayPanel() {
  const formats = [
    { name: 'Leaderboard', size: '728×90' },
    { name: 'Medium Rectangle', size: '300×250' },
    { name: 'Mobile Banner', size: '320×50' },
    { name: 'Wide Skyscraper', size: '160×600' },
    { name: 'Large Mobile', size: '320×100' },
    { name: 'Billboard', size: '970×250' },
  ]
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {formats.map((f) => (
          <div
            key={f.name}
            className="rounded-xl border border-slate-100 bg-slate-50/60 p-3 hover:border-[#00AEEF]/25 transition-colors"
          >
            <p className="text-xs font-bold text-[#001A2C]">{f.name}</p>
            <p className="text-[11px] text-slate-500 mt-0.5 font-mono">{f.size}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-[#001A2C] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-white min-w-0">
          <p className="font-bold text-sm sm:text-base mb-1">Demo penempatan banner (mobile)</p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Buka inventori dummy untuk melihat contoh slot iklan di tampilan mobile.
          </p>
        </div>
        <Link
          href={BANNER_SIMULATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#00AEEF] text-white text-sm font-bold rounded-lg hover:bg-[#0099d6] transition-colors shrink-0"
        >
          Buka Simulasi Banner
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

function EventPartnershipPanel() {
  const items = [
    { title: 'Brand Activation', tag: 'Event', icon: Mic2 },
    { title: 'Partnership Summit', tag: 'Kemitraan', icon: Handshake },
    { title: 'Industry Talk', tag: 'Event', icon: Mic2 },
    { title: 'Program CSR', tag: 'Kemitraan', icon: Handshake },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <div
            key={item.title}
            className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 hover:border-[#00AEEF]/25 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-[#2D74B3]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#2D74B3]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#00AEEF] uppercase tracking-wide">
                  {item.tag}
                </span>
                <p className="text-sm font-bold text-[#001A2C] mt-0.5">{item.title}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function PillarPanel({ id }: { id: PillarId }) {
  switch (id) {
    case 'native':
      return <NativeArticlePanel />
    case 'sosmed':
      return <SosmedPanel />
    case 'banner':
      return <BannerDisplayPanel />
    case 'event':
      return <EventPartnershipPanel />
  }
}

export default function ProductCatalog() {
  const [activePillar, setActivePillar] = useState<PillarId>('native')
  const active = pillars.find((p) => p.id === activePillar)!

  return (
    <section className="py-16 lg:py-4 bg-white -mt-px">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide mb-2">
            Penawaran
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#001A2C] mb-3">Katalog Produk</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Empat pilar penawaran iklan. Pilih kategori untuk melihat format dan opsi.
          </p>
        </div>

        <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 mb-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            const isActive = activePillar === pillar.id
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillar(pillar.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${isActive
                    ? 'bg-[#00AEEF] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600'
                  }`}
              >
                <Icon className="w-4 h-4" />
                {pillar.shortLabel}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-8 items-start">
          <nav className="hidden lg:flex flex-col gap-1.5 p-2 rounded-2xl bg-slate-50 border border-slate-100">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              const isActive = activePillar === pillar.id
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(pillar.id)}
                  className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-xl text-sm font-semibold transition-all ${isActive
                      ? 'bg-white text-[#00AEEF] shadow-sm'
                      : 'text-slate-600 hover:bg-white/70'
                    }`}
                >
                  <Icon
                    className={`w-5 h-5 shrink-0 ${isActive ? 'text-[#00AEEF]' : 'text-slate-400'}`}
                  />
                  <span className="flex-1 leading-snug text-left">{pillar.label}</span>
                  {isActive && <ChevronRight className="w-4 h-4 shrink-0 text-[#00AEEF]" />}
                </button>
              )
            })}
          </nav>

          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="px-5 sm:px-6 py-5 border-b border-slate-100">
              <h3 className="text-lg font-black text-[#001A2C]">{active.label}</h3>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">{active.description}</p>
            </div>
            <div className="p-5 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <PillarPanel id={activePillar} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
