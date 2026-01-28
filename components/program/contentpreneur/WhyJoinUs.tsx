'use client'

import { motion } from 'framer-motion'
import { DollarSign, GraduationCap, Clock } from 'lucide-react'

const highlights = [
  {
    title: 'Income dari Views',
    description: 'Dapatkan penghasilan dari setiap view artikel Anda',
    icon: DollarSign,
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
  {
    title: 'Pelatihan Gratis',
    description: 'Akses workshop dan training untuk meningkatkan skill menulis',
    icon: GraduationCap,
    color: 'from-[#2D74B3] to-[#00AEEF]',
  },
  {
    title: 'Fleksibilitas Waktu',
    description: 'Tulis kapan saja, di mana saja sesuai waktu luang Anda',
    icon: Clock,
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
]

export default function WhyJoinUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Marquee Background Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap"
          animate={{
            x: [0, -50],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <span className="text-[15rem] lg:text-[20rem] font-black text-[#001A2C] opacity-[0.02] select-none">
            WRITE. SHARE. EARN. {' '}
          </span>
          <span className="text-[15rem] lg:text-[20rem] font-black text-[#001A2C] opacity-[0.02] select-none">
            WRITE. SHARE. EARN. {' '}
          </span>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
            Why Join Us?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Keuntungan yang akan Anda dapatkan sebagai Contentpreneur
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative h-full p-8 lg:p-10 bg-gradient-to-br ${highlight.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-xl bg-white/20 backdrop-blur-sm mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 leading-relaxed">
                      {highlight.description}
                    </p>
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
