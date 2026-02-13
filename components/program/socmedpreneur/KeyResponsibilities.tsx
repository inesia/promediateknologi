'use client'

import { motion } from 'framer-motion'
import { Share2, MessageSquare, TrendingUp } from 'lucide-react'

const responsibilities = [
  {
    id: 'distribusi',
    title: 'Distribusi Konten',
    description: 'Menyebarkan konten ke berbagai platform media sosial untuk mencapai audiens yang lebih luas',
    icon: Share2,
    color: 'from-[#00AEEF] to-[#2D74B3]',
    animation: {
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
    },
  },
  {
    id: 'community',
    title: 'Manajemen Komunitas',
    description: 'Mengelola dan berinteraksi dengan komunitas untuk membangun engagement yang kuat',
    icon: MessageSquare,
    color: 'from-[#2D74B3] to-[#00AEEF]',
    animation: {
      y: [0, -10, 0],
      scale: [1, 1.05, 1],
    },
  },
  {
    id: 'traffic',
    title: 'Peningkat Trafik',
    description: 'Meningkatkan traffic website melalui strategi optimasi media sosial yang efektif',
    icon: TrendingUp,
    color: 'from-[#00AEEF] to-[#2D74B3]',
    animation: {
      y: [0, -15, 0],
      scale: [1, 1.15, 1],
    },
  },
]

export default function KeyResponsibilities() {
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
            Tanggung Jawab Utama
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tugas utama sebagai Socmed Specialist di ekosistem Promedia
          </p>
        </motion.div>

        {/* Visual Loop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {responsibilities.map((resp, index) => {
            const Icon = resp.icon
            return (
              <motion.div
                key={resp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 lg:p-10 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Icon with Visual Loop Animation */}
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${resp.color} flex items-center justify-center shadow-lg`}
                      animate={resp.animation}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-black text-[#001A2C] mb-4 text-center">
                    {resp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-center">
                    {resp.description}
                  </p>

                  {/* Decorative accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${resp.color} opacity-5 rounded-bl-full`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
