'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Upload, Radio } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Pilih Format',
    description: 'Pilih format iklan yang sesuai dengan kebutuhan kampanye Anda',
    icon: CheckCircle,
  },
  {
    id: 2,
    title: 'Upload Materi/Brief',
    description: 'Kirimkan materi iklan atau brief untuk review tim kami',
    icon: Upload,
  },
  {
    id: 3,
    title: 'Tayang di Jaringan Promedia',
    description: 'Iklan Anda akan tayang di jaringan media premium Promedia',
    icon: Radio,
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
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
            Cara Kerja
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Proses sederhana untuk memulai kampanye iklan Anda
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#00AEEF] to-slate-200 z-0" style={{ width: 'calc(100% - 4rem)' }} />
                  )}

                  {/* Step Card */}
                  <div className="relative z-10 bg-white rounded-xl border border-slate-200 p-6 text-center">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] mb-4">
                      <span className="text-2xl font-black text-white">{step.id}</span>
                    </div>

                    {/* Icon */}
                    <div className="flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-[#00AEEF]" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-[#001A2C] mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
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
