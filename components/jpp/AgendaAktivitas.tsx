'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Mic, Flag } from 'lucide-react'

const activities = [
  {
    id: 'audiensi',
    title: 'Audiensi Pemerintah',
    description: 'Dialog strategis dengan pemerintah untuk membahas kebijakan media dan jurnalisme',
    icon: Building2,
    color: '#00AEEF',
  },
  {
    id: 'seminar',
    title: 'Seminar Nasional',
    description: 'Diskusi dan sharing knowledge tentang perkembangan industri media dan jurnalisme',
    icon: Mic,
    color: '#2D74B3',
  },
  {
    id: 'pemilu',
    title: 'Komitmen Pemilu Damai',
    description: 'Komitmen bersama untuk menjaga netralitas dan perdamaian dalam pemilu',
    icon: Flag,
    color: '#00AEEF',
  },
]

export default function AgendaAktivitas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 bg-white">
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
            Dialog Strategis & Dampak
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Agenda dan aktivitas strategis JPP dalam membangun ekosistem jurnalisme berkualitas
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2" />
          
          {/* Progress Bar */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] -translate-y-1/2"
            style={{
              width: `${progress.get()}%`,
            }}
          />

          {/* Activities */}
          <div className="relative flex gap-8 lg:gap-16 overflow-x-auto scrollbar-hide pb-8" style={{ scrollSnapType: 'x mandatory' }}>
            {activities.map((activity, index) => {
              const Icon = activity.icon
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 flex flex-col items-center"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-[#00AEEF] shadow-lg flex items-center justify-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#2D74B3]" />
                  </div>

                  {/* Activity Card */}
                  <div className="w-full bg-white rounded-xl border border-slate-200 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: `${activity.color}20`,
                        }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: activity.color }}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-black text-[#001A2C] mb-3 text-center">
                      {activity.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed text-center text-sm">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
