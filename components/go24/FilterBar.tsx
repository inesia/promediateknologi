'use client'

import { useState } from 'react'
import { MapPin, Newspaper, ChevronDown } from 'lucide-react'

const CATEGORIES = [
  { id: 'all', label: 'Semua' },
  { id: 'politik', label: 'Politik' },
  { id: 'ekonomi', label: 'Ekonomi' },
  { id: 'olahraga', label: 'Olahraga' },
  { id: 'hiburan', label: 'Hiburan' },
  { id: 'otomotif', label: 'Otomotif' },
  { id: 'tekno', label: 'Tekno' },
]

const LOCATIONS = [
  { id: 'nasional', label: 'Nasional' },
  { id: 'dki', label: 'DKI Jakarta' },
  { id: 'jabar', label: 'Jawa Barat' },
  { id: 'jatim', label: 'Jawa Timur' },
  { id: 'jateng', label: 'Jawa Tengah' },
  { id: 'sumut', label: 'Sumatera Utara' },
  { id: 'sulsel', label: 'Sulawesi Selatan' },
  { id: 'kaltim', label: 'Kalimantan Timur' },
]

const MEDIA_OPTIONS = [
  { id: 'all', label: 'Semua Media' },
  { id: 'ayobandung', label: 'AyoBandung' },
  { id: 'jatimnetwork', label: 'JatimNetwork.com' },
  { id: 'beritajakarta', label: 'BeritaJakarta.id' },
]

interface FilterBarProps {
  category: string
  location: string
  media: string
  onCategoryChange: (id: string) => void
  onLocationChange: (id: string) => void
  onMediaChange: (id: string) => void
}

export default function FilterBar({
  category,
  location,
  media,
  onCategoryChange,
  onLocationChange,
  onMediaChange,
}: FilterBarProps) {
  const [locationOpen, setLocationOpen] = useState(false)
  const [mediaOpen, setMediaOpen] = useState(false)

  const locationLabel = LOCATIONS.find((l) => l.id === location)?.label ?? 'Nasional'
  const mediaLabel = MEDIA_OPTIONS.find((m) => m.id === media)?.label ?? 'Semua Media'

  return (
    <div className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Categories - horizontal scroll on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-3 lg:pb-0 scrollbar-hide">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onCategoryChange(c.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === c.id
                  ? 'bg-[#00AEEF] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Location & Media dropdowns */}
        <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-slate-100">
          <div className="relative">
            <button
              type="button"
              onClick={() => { setLocationOpen(!locationOpen); setMediaOpen(false) }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50"
            >
              <MapPin className="w-4 h-4 text-slate-500" />
              {locationLabel}
              <ChevronDown className={`w-4 h-4 transition-transform ${locationOpen ? 'rotate-180' : ''}`} />
            </button>
            {locationOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLocationOpen(false)} aria-hidden />
                <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-xl border border-slate-200 shadow-lg py-2 z-50 max-h-64 overflow-y-auto">
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => { onLocationChange(loc.id); setLocationOpen(false) }}
                      className={`w-full text-left px-4 py-2 text-sm ${location === loc.id ? 'bg-[#00AEEF]/10 text-[#00AEEF] font-medium' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => { setMediaOpen(!mediaOpen); setLocationOpen(false) }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50"
            >
              <Newspaper className="w-4 h-4 text-slate-500" />
              {mediaLabel}
              <ChevronDown className={`w-4 h-4 transition-transform ${mediaOpen ? 'rotate-180' : ''}`} />
            </button>
            {mediaOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setMediaOpen(false)} aria-hidden />
                <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-xl border border-slate-200 shadow-lg py-2 z-50">
                  {MEDIA_OPTIONS.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => { onMediaChange(m.id); setMediaOpen(false) }}
                      className={`w-full text-left px-4 py-2 text-sm ${media === m.id ? 'bg-[#00AEEF]/10 text-[#00AEEF] font-medium' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
