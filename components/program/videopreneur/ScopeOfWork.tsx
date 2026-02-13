'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Scissors, Radio, Sparkles } from 'lucide-react'

const scopes = [
  {
    id: 'editing',
    title: 'Penyuntingan Video',
    description: 'Mengedit dan memproduksi konten video berkualitas tinggi untuk berbagai platform',
    icon: Scissors,
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
  {
    id: 'streaming',
    title: 'Siaran Langsung',
    description: 'Mengelola dan memproduksi siaran langsung untuk berbagai acara dan program',
    icon: Radio,
    color: 'from-[#2D74B3] to-[#00AEEF]',
  },
  {
    id: 'motion',
    title: 'Grafis Gerak',
    description: 'Membuat animasi dan motion graphics untuk memperkaya konten visual',
    icon: Sparkles,
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
]

export default function ScopeOfWork() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
            Lingkup Pekerjaan
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tugas dan tanggung jawab sebagai Videopreneur di ekosistem Promedia
          </p>
        </motion.div>

        {/* Horizontal Film Strip Layout */}
        <div className="relative">
          {/* Film Strip Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide pb-8"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {scopes.map((scope, index) => {
              const Icon = scope.icon
              return (
                <motion.div
                  key={scope.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {/* Film Frame */}
                  <div className="relative bg-white rounded-xl border-4 border-slate-800 shadow-2xl overflow-hidden">
                    {/* Film Perforations */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 flex items-center justify-between px-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-slate-600 rounded-full" />
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-800 flex items-center justify-between px-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-slate-600 rounded-full" />
                      ))}
                    </div>

                    {/* Content */}
                    <div className="pt-16 pb-16 px-8">
                      {/* Icon */}
                      <div className="flex items-center justify-center mb-6">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${scope.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-black text-[#001A2C] mb-4 text-center">
                        {scope.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed text-center">
                        {scope.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {scopes.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-slate-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
