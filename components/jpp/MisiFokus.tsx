'use client'

import { motion } from 'framer-motion'
import { Gavel, Shield, Radio } from 'lucide-react'

const fokus = [
  {
    id: 'quality',
    title: 'Menjaga Kualitas Jurnalisme',
    description: 'Memastikan setiap konten yang diproduksi memenuhi standar kode etik jurnalistik dan ramah terhadap pembaca.',
    icon: Gavel,
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
  {
    id: 'policy',
    title: 'Advokasi Hak Para Penerbit (Publisher Rights)',
    description: 'Memperjuangkan hak-hak ekonomi dan kekayaan intelektual media di hadapan platform digital global.',
    icon: Shield,
    color: 'from-[#2D74B3] to-[#00AEEF]',
  },
  {
    id: 'network',
    title: 'Peningkatan Kompetensi SDM',
    description: 'Melakukan pelatihan rutin bagi para pemimpin redaksi agar mampu beradaptasi dengan perubahan lanskap media.',
    icon: Radio, // Maybe change icon to Users or GraduationCap if available but Radio is imported
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
]

export default function MisiFokus() {
  return (
    <section className="relative py-4 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
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
            Misi & Fokus Utama
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tiga pilar utama yang menjadi fokus JPP dalam membangun ekosistem jurnalisme berkualitas
          </p>
        </motion.div>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {fokus.map((item, index) => {
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
                {/* Glassmorphism Card */}
                <div className="relative h-full p-8 lg:p-10 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
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

                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
