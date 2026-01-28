'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Server, DollarSign, GraduationCap } from 'lucide-react'

const benefits = [
  {
    id: 'teknologi',
    title: 'Teknologi Server',
    description: 'Infrastruktur server yang handal dan scalable untuk mendukung portal berita Anda',
    icon: Server,
    revenue: 'Hemat hingga Rp 50 juta/tahun',
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
  {
    id: 'monetisasi',
    title: 'Monetisasi Iklan Programmatic',
    description: 'Sistem iklan otomatis yang mengoptimalkan pendapatan dari setiap pageview',
    icon: DollarSign,
    revenue: 'Potensi revenue Rp 10-50 juta/bulan',
    color: 'from-[#2D74B3] to-[#00AEEF]',
  },
  {
    id: 'pelatihan',
    title: 'Pelatihan',
    description: 'Workshop dan training berkala untuk meningkatkan kualitas konten dan manajemen media',
    icon: GraduationCap,
    revenue: 'Nilai investasi Rp 20 juta/tahun',
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
]

export default function BenefitsGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="relative py-24 lg:py-32 bg-white">
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
            Keuntungan
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Manfaat yang akan Anda dapatkan sebagai mitra Mediapreneur
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isHovered = hoveredId === benefit.id

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(benefit.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                <div className={`relative h-full p-8 lg:p-10 bg-gradient-to-br ${benefit.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-xl bg-white/20 backdrop-blur-sm mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 leading-relaxed mb-6">
                      {benefit.description}
                    </p>

                    {/* Hover Reveal - Revenue Estimate */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                      className="pt-6 border-t border-white/20"
                    >
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-white" />
                        <span className="text-white font-semibold text-lg">
                          {benefit.revenue}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
