'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Users } from 'lucide-react'

const fokus = [
  {
    title: 'Edukasi & Sertifikasi',
    description: 'Standarisasi kompetensi kreator konten melalui pelatihan dan uji sertifikasi profesi.',
    icon: Award,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Perlindungan Hak Cipta',
    description: 'Advokasi perlindungan kekayaan intelektual atas karya cipta para kreator.',
    icon: Shield,
    color: 'from-indigo-600 to-purple-500',
  },
  {
    title: 'Networking & Kolaborasi',
    description: 'Membuka peluang kerjasama antar kreator dan brand dalam ekosistem Promedia.',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
]

export default function AKKIFokus() {
  return (
    <section className="relative py-4 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-[#001A2C] mb-6">Fokus Utama</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tiga pilar utama dalam membangun ekosistem kreator yang profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {fokus.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 lg:p-10 bg-white rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-[#001A2C] mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative stripe */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
