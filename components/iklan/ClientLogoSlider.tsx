'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { clientLogos } from '@/lib/clientLogos'

interface ClientLogoSliderProps {
  embedded?: boolean
}

export default function ClientLogoSlider({ embedded = false }: ClientLogoSliderProps) {
  const header = (
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-black text-[#001A2C] mb-3">
        Dipercaya Brand &amp; Institusi
      </h2>
      <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
        Mitra nasional dan regional di ekosistem media Promedia Group.
      </p>
    </div>
  )

  const grid = (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
      {clientLogos.map((client, index) => (
        <motion.div
          key={client.name}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.04 }}
          className="flex items-center justify-center h-16 sm:h-[4.5rem] px-3 rounded-xl bg-slate-50 border border-slate-100 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        >
          <div className="relative w-full h-10 sm:h-11">
            <Image
              src={client.src}
              alt={client.name}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 40vw, 120px"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )

  if (embedded) {
    return (
      <div>
        {header}
        {grid}
      </div>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {header}
        {grid}
      </div>
    </section>
  )
}
