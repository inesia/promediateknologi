'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

export default function AKKIHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-purple-900 to-indigo-900 overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[100px] opacity-30" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-8 backdrop-blur-sm">
              <Users className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Wadah Kolaboratif Kreator
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Asosiasi Konten Kreator Indonesia (AKKI)
            </h1>

            <p className="text-xl lg:text-2xl text-purple-100 mb-10 leading-relaxed max-w-4xl mx-auto">
              Wadah kolaboratif bagi konten kreator digital di berbagai platform. AKKI dibentuk guna mendukung pengembangan industri kreatif digital melalui pembinaan, advokasi, standardisasi, dan kerja sama lintas sektor.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
