'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

const quickTags = ['#Timnas', '#Ekonomi', '#Tekno', '#Olahraga', '#Hiburan', '#Otomotif', '#Politik']

interface HeroSearchProps {
  onSearch: (q: string) => void
  onTagClick: (tag: string) => void
}

export default function HeroSearch({ onSearch, onTagClick }: HeroSearchProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001A2C] mb-8">
            Jelajahi Cerita dari Seluruh Nusantara.
          </h1>
          <form onSubmit={handleSubmit} className="relative mb-6">
            <div className="relative flex items-center rounded-2xl border-2 border-slate-200 bg-slate-50 focus-within:border-[#00AEEF] focus-within:bg-white transition-colors shadow-sm">
              <Search className="absolute left-5 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari topik, tokoh, atau peristiwa..."
                className="w-full pl-14 pr-6 py-4 text-base bg-transparent border-0 focus:ring-0 focus:outline-none placeholder:text-slate-400 text-[#001A2C]"
                autoComplete="off"
              />
            </div>
          </form>
          <p className="text-sm text-slate-500 mb-6">
            Dari 1.200+ jaringan media Promedia
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onTagClick(tag)}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 bg-slate-100 hover:bg-[#00AEEF]/10 hover:text-[#00AEEF] transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
