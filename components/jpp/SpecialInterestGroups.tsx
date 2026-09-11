'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Car, Pickaxe, Cpu, Sprout } from 'lucide-react'

const groups = [
  {
    id: 'ekonomi',
    title: 'Forum Wartawan Ekonomi dan Bisnis',
    description: 'Wadah kolaborasi jurnalis ekonomi dan bisnis untuk berdiskusi, berbagi perspektif, serta memperkuat kualitas liputan isu ekonomi nasional dan daerah.',
    icon: TrendingUp,
    color: 'from-emerald-400 to-teal-600',
  },
  {
    id: 'otomotif',
    title: 'Jaringan Jurnalis Otomotif Promedia',
    description: 'Komunitas jurnalis otomotif dalam ekosistem Promedia yang fokus pada isu industri otomotif, teknologi kendaraan, dan mobilitas masa depan.',
    icon: Car,
    color: 'from-orange-400 to-red-600',
  },
  {
    id: 'tambang',
    title: 'Forum Wartawan Tambang Nusantara',
    description: 'Forum jurnalis yang mengulas isu pertambangan, energi, dan sumber daya alam dengan perspektif keberlanjutan dan kepentingan nasional.',
    icon: Pickaxe,
    color: 'from-amber-400 to-yellow-600',
  },
  {
    id: 'techno',
    title: 'Pokja Jurnalis Techno',
    description: 'Kelompok kerja jurnalis teknologi yang membahas perkembangan teknologi digital, inovasi, dan transformasi industri berbasis teknologi.',
    icon: Cpu,
    color: 'from-blue-400 to-indigo-600',
  },
  {
    id: 'pangan',
    title: 'Forwapi (Forum Wartawan Pangan Indonesia)',
    description: 'Forum jurnalis yang fokus pada isu pangan, pertanian, dan ketahanan pangan sebagai bagian penting dari pembangunan nasional.',
    icon: Sprout,
    color: 'from-green-400 to-emerald-600',
  },
]

export default function SpecialInterestGroups() {
  return (
    <section className="relative py-4 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6 uppercase">
            FORUM & KOMUNITAS WARTAWAN
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Untuk memperkuat kolaborasi yang lebih fokus dan relevan, Promedia menginisiasi berbagai forum dan komunitas jurnalis berdasarkan segmen liputan.
          </p>
        </motion.div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {groups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 lg:p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">

                  {/* Background Gradient Blob */}
                  <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${group.color} opacity-[0.03] group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />

                  {/* Icon & Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#001A2C] leading-tight">
                      {group.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="relative z-10">
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                      {group.description}
                    </p>

                    <div className="inline-flex items-center text-[#00AEEF] font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                      Lihat Aktivitas
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
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
