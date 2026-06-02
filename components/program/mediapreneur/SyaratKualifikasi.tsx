'use client'

import { motion } from 'framer-motion'
import { Briefcase, ShieldCheck, Users } from 'lucide-react'

const requirements = [
  {
    id: 'kreator',
    title: '1.',
    description:
      'Tim kreator dan jurnalis yang ingin memulai bisnis media independennya sendiri.',
    icon: Users,
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
  {
    id: 'pemilik',
    title: '2.',
    description:
      'Pemilik dan pengelola media online yang sudah berjalan, namun tidak ingin lagi dipusingkan dengan biaya IT development, maintenance & security.',
    icon: Briefcase,
    color: 'from-[#2D74B3] to-[#00AEEF]',
  },
  {
    id: 'identitas',
    title: '1.',
    description:
      'Tim kreator dan jurnalis yang ingin memulai bisnis media independennya sendiri.',
    icon: ShieldCheck,
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
  {
    id: 'pengalaman',
    title: '2.',
    description:
      'Pemilik dan pengelola media online yang sudah berjalan, namun tidak ingin lagi dipusingkan dengan biaya IT development, maintenance & security.',
    icon: Users,
    color: 'from-[#2D74B3] to-[#00AEEF]',
  },
]

export default function SyaratKualifikasi() {
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
            Untuk Siapa Program Ini?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto" aria-hidden="true">
            {' '}
          </p>
          <p className="text-sm text-slate-500 mt-4 italic" aria-hidden="true">
            {' '}
          </p>
        </motion.div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {requirements.map((req, index) => {
            const Icon = req.icon
            return (
              <motion.div
                key={req.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-6 lg:p-8 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  {/* Icon */}
                  <div className={`inline-flex p-3 lg:p-4 rounded-xl bg-gradient-to-br ${req.color} mb-4 lg:mb-6 shadow-lg`}>
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-black text-[#001A2C] mb-3 lg:mb-4">
                    {req.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                    {req.description}
                  </p>

                  {/* Hover effect overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${req.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  />

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br ${req.color} opacity-5 rounded-bl-full`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
