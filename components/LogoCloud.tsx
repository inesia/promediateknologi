'use client'

import { motion } from 'framer-motion'

// Placeholder logo component
function PartnerLogo({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      className="flex-shrink-0 w-32 h-20 mx-6 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <span className="text-xs font-semibold text-slate-600">{name}</span>
      </div>
    </motion.div>
  )
}

export default function LogoCloud() {
  // Placeholder partner names
  const partners = [
    'Media Partner 1',
    'Media Partner 2',
    'Media Partner 3',
    'Media Partner 4',
    'Media Partner 5',
    'Media Partner 6',
    'Media Partner 7',
    'Media Partner 8',
    'Media Partner 9',
    'Media Partner 10',
  ]

  // Duplicate for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00AEEF]/3 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2D74B3]/3 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="px-4 py-2 bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-full backdrop-blur-sm">
              <span className="text-xs font-semibold text-[#00AEEF] tracking-wide uppercase">
                Trusted By
              </span>
            </div>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001A2C] mb-4">
            Telah dipercaya oleh 1.000+ jaringan media
          </h2>
          <p className="text-lg text-slate-600">
            di seluruh Indonesia
          </p>
        </motion.div>

        {/* Infinite Scroll Logo */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: [0, -1600], // Adjust based on total width
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <PartnerLogo key={`${partner}-${index}`} name={partner} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
