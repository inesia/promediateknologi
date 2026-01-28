'use client'

import { motion } from 'framer-motion'
import { Smartphone, Mic, Camera } from 'lucide-react'

const kegiatan = [
  {
    id: 'review',
    title: 'Review Gadget',
    description: 'Review mendalam produk teknologi terbaru dengan analisis komprehensif',
    icon: Smartphone,
  },
  {
    id: 'talk',
    title: 'Tech Talk',
    description: 'Diskusi dan sharing tentang tren teknologi dan inovasi digital',
    icon: Mic,
  },
  {
    id: 'launching',
    title: 'Liputan Launching',
    description: 'Liputan langsung event launching produk teknologi dan startup',
    icon: Camera,
  },
]

export default function KegiatanProgram() {
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
            Kegiatan & Program
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Aktivitas utama Pokja Jurnalis Tekno dalam mengawal literasi teknologi
          </p>
        </motion.div>

        {/* Grid Cards with Neon Border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {kegiatan.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card with Neon Border Gradient */}
                <div className="relative p-8 lg:p-10 bg-white rounded-xl border-2 border-transparent bg-clip-padding overflow-hidden">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                  <div className="absolute inset-[2px] rounded-xl bg-white -z-10" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Pixel Art Style Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-black text-[#001A2C] mb-4 text-center">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed text-center">
                      {item.description}
                    </p>
                  </div>

                  {/* Neon glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
