'use client'

import { motion } from 'framer-motion'

const brands = [
  { id: 1, name: 'TechBrand A' },
  { id: 2, name: 'TechBrand B' },
  { id: 3, name: 'TechBrand C' },
  { id: 4, name: 'TechBrand D' },
  { id: 5, name: 'TechBrand E' },
  { id: 6, name: 'TechBrand F' },
]

export default function Partnership() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white">
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
            Collaborating with Innovators
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Brand teknologi yang bekerja sama dengan Pokja Jurnalis Tekno
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Logo Placeholder - Monochrome White */}
              <div className="aspect-square bg-white rounded-xl border border-slate-200 flex items-center justify-center p-6 hover:border-[#00AEEF] transition-all duration-300">
                <div className="w-full h-12 bg-slate-300 rounded opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
