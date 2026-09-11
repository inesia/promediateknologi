'use client'

import { motion } from 'framer-motion'
import { FileText, Video, Rocket, CheckCircle2 } from 'lucide-react'
import { getPartnerFormUrl } from '@/lib/programRegistration'

const steps = [
  {
    id: 1,
    title: 'Isi Formulir & Submit CV',
    description: 'Siapkan dan kirim CV terbaik tim Anda dan isi formulir yang telah disiapkan.',
    icon: FileText,
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
  {
    id: 2,
    title: 'Zoom Penjelasan Kemitraan',
    description: 'Tunggu undangan untuk hadir ke zoom penjelasaan konsep bisnis dan kemitraan, langsung dengan CEO Promedia Group. Undangan akan dikirim via email & Whatsapp.',
    icon: Video,
    color: 'from-[#2D74B3] to-[#00AEEF]',
  },
  {
    id: 3,
    title: 'Onboarding',
    description: 'Setelah disetujui, Anda akan mengikuti proses onboarding dan setup portal',
    icon: Rocket,
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
]

export default function FlowPendaftaran() {
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
            Alur Pendaftaran
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Proses sederhana untuk memulai perjalanan di Publisher Media Network
          </p>
        </motion.div>

        {/* Vertical Step Process */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex gap-6 lg:gap-8"
              >
                {/* Connector Line */}
                {!isLast && (
                  <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-[#00AEEF] to-[#2D74B3] opacity-30" />
                )}

                {/* Icon Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Check mark overlay (for completed steps) */}
                  {index < 0 && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 pb-16 lg:pb-20"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl p-6 lg:p-8 transition-all duration-300">
                    {/* Step Number */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-full mb-4">
                      <span className="text-sm font-semibold text-[#00AEEF]">
                        Langkah {step.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-black text-[#001A2C] mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {step.description}
                    </p>

                    {/* Decorative accent */}
                    <div className={`mt-6 h-1 w-24 bg-gradient-to-r ${step.color} rounded-full`} />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href={getPartnerFormUrl('mediapreneur')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Mulai Pendaftaran</span>
              <Rocket className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
