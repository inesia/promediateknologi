'use client'

import { motion } from 'framer-motion'
import { Globe, Server, Settings, TrendingUp, BookOpen, Users } from 'lucide-react'

const features = [
  {
    title: 'Website Profesional',
    icon: Globe,
  },
  {
    title: 'Server Performa Tinggi',
    icon: Server,
  },
  {
    title: 'Maintenance Gratis',
    icon: Settings,
  },
  {
    title: 'Monetisasi Maksimal',
    icon: TrendingUp,
  },
  {
    title: 'Pelatihan & Pendampingan',
    icon: BookOpen,
  },
  {
    title: 'Komunitas Kolaborasi',
    icon: Users,
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-20 sm:py-24 bg-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#001A2C] mb-4 tracking-tight">
            Semua yang Anda Butuhkan untuk Tumbuh
          </h2>
          <div className="w-10 h-1 bg-[#00AEEF] rounded-full mx-auto mb-6" />
          
          {/* Highlighted Wording for 100% Gratis */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl sm:rounded-full shadow-sm"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00AEEF]"></span>
              </span>
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] text-sm sm:text-base">
                100% Gratis.
              </span>
            </div>
            <span className="text-sm sm:text-base text-slate-600 font-medium text-center">
              Kami investasi di awal. Anda cukup siapkan domain dan fokus berkarya.
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-100 rounded-[28px] shadow-[0_12px_40px_rgba(0,174,239,0.06)] overflow-hidden relative"
        >
          <div className="flex flex-wrap lg:flex-nowrap w-full">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="w-1/2 md:w-1/3 lg:flex-1 relative flex flex-col group">
                  {/* Faded Right Border (Vertical Separator) */}
                  {idx !== features.length - 1 && (
                    <div className="absolute right-0 top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-slate-200 to-transparent pointer-events-none hidden lg:block" />
                  )}
                  {/* For mobile/tablet: add borders appropriately */}
                  {(idx + 1) % 2 !== 0 && (
                    <div className="absolute right-0 top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-slate-200 to-transparent pointer-events-none md:hidden" />
                  )}
                  {(idx + 1) % 3 !== 0 && (
                    <div className="absolute right-0 top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-slate-200 to-transparent pointer-events-none hidden md:block lg:hidden" />
                  )}
                  
                  {/* Faded Bottom Border (Horizontal Separator for wrapped rows) */}
                  {idx < features.length - 2 && (
                    <div className="absolute bottom-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none md:hidden" />
                  )}
                  {idx < features.length - 3 && (
                    <div className="absolute bottom-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none hidden md:block lg:hidden" />
                  )}

                  <div
                    className="bg-white p-6 sm:p-8 flex flex-col items-center justify-start text-center hover:bg-slate-50/50 transition-all duration-300 cursor-pointer relative overflow-hidden h-full z-10"
                  >
                  {/* Subtle animated bottom border on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  
                  {/* Icon Container with hover effects */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-50/60 border border-blue-100/50 flex items-center justify-center text-[#00AEEF] mb-5 group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-[#00AEEF] group-hover:to-[#2D74B3] group-hover:border-transparent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_8px_20px_rgba(0,174,239,0.35)]">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-[13px] sm:text-sm font-bold text-slate-700 leading-snug group-hover:text-[#2D74B3] transition-colors max-w-[120px] mx-auto">
                    {feature.title}
                  </h3>
                </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
