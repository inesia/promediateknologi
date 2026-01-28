'use client'

import { motion } from 'framer-motion'
import { FileText, Heart } from 'lucide-react'

const requirements = [
  {
    icon: FileText,
    title: 'CV Terbaru',
    description: 'Kirimkan CV Anda yang sudah diupdate dengan pengalaman menulis',
  },
  {
    icon: Heart,
    title: 'Passion Menulis',
    description: 'Memiliki minat dan semangat untuk menulis konten berkualitas',
  },
]

export default function Persyaratan() {
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
            Persyaratan
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Persyaratan sederhana untuk memulai perjalanan sebagai Contentpreneur
          </p>
        </motion.div>

        {/* Simple List */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {requirements.map((req, index) => {
              const Icon = req.icon
              return (
                <motion.div
                  key={req.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6 p-6 lg:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-black text-[#001A2C] mb-2">
                      {req.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {req.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="https://bit.ly/promediamitra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Daftar Sekarang</span>
              <FileText className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
