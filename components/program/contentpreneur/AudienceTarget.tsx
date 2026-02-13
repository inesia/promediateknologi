'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Briefcase } from 'lucide-react'

const personas = [
  {
    id: 'fresh-graduate',
    title: 'Baru Lulus Sekolah atau Ingin Memulai Kembali',
    description: 'Baik lulusan baru, profesional di masa transisi, dan siapa pun yang sedang mencari ruang untuk berkembang melalui menulis dan berkarya.',
    icon: GraduationCap,
    color: 'from-[#00AEEF] to-[#2D74B3]',
    avatar: '🎓',
  },
  {
    id: 'hobby-writer',
    title: 'Suka Membaca dan Menulis',
    description: 'Memiliki ketertarikan pada dunia literasi dan ingin mengasah kemampuan menulis secara konsisten.',
    icon: BookOpen,
    color: 'from-[#2D74B3] to-[#00AEEF]',
    avatar: '✍️',
  },
  {
    id: 'freelancer',
    title: 'Siap Berkarya dari Mana Saja',
    description: 'Memiliki ponsel atau laptop yang dapat mendukung aktivitas menulis dan mengikuti rangkaian pelatihan.',
    icon: Briefcase,
    color: 'from-[#00AEEF] to-[#2D74B3]',
    avatar: '💼',
  },
]

export default function AudienceTarget() {
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
            Untuk Siapa?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Program Contentpreneur cocok untuk berbagai kalangan yang memiliki passion menulis
          </p>
        </motion.div>

        {/* Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {personas.map((persona, index) => {
            const Icon = persona.icon
            return (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 lg:p-10 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  {/* 3D Avatar */}
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-5xl shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {persona.avatar}
                    </motion.div>
                  </div>

                  {/* Icon Badge */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${persona.color} mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-black text-[#001A2C] mb-4">
                    {persona.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {persona.description}
                  </p>

                  {/* Decorative accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${persona.color} opacity-5 rounded-bl-full`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
