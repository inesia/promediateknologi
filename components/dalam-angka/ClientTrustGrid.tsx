'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Building2, ChevronDown, ChevronUp } from 'lucide-react'
import { clientLogos } from '@/lib/clientLogos'

const INITIAL_VISIBLE = 12

export default function ClientTrustGrid() {
  const [expanded, setExpanded] = useState(false)
  const visibleLogos = expanded ? clientLogos : clientLogos.slice(0, INITIAL_VISIBLE)
  const hasMore = clientLogos.length > INITIAL_VISIBLE

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00AEEF]/10 rounded-full mb-4">
            <Building2 className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide">
              Kolaborasi Terpercaya
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001A2C] mb-3">
            Dipercaya Brand &amp; Institusi
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Korporasi, BUMN, institusi pemerintah, dan brand nasional yang telah berkolaborasi
            di jaringan media Promedia Group.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {visibleLogos.map((client) => (
              <motion.div
                key={client.src}
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-4 sm:py-5 min-h-[5.5rem] sm:min-h-[6rem] hover:border-[#00AEEF]/25 hover:bg-white hover:shadow-sm transition-colors duration-300"
                title={client.name}
              >
                <div className="relative w-full h-10 sm:h-11 mb-2">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    sizes="(max-width: 640px) 28vw, 120px"
                  />
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 text-center leading-tight line-clamp-2 group-hover:text-slate-600">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-[#001A2C] hover:border-[#00AEEF]/40 hover:text-[#00AEEF] shadow-sm transition-colors"
              aria-expanded={expanded}
            >
              {expanded ? (
                <>
                  Tampilkan lebih sedikit
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Lihat semua mitra ({clientLogos.length})
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
