'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'Pertamina', stat: '405 Artikel di 50 Media', slug: 'pertamina' },
  { name: 'Telkomsel', stat: 'Artikel di 200 Media', slug: 'telkomsel' },
  { name: 'Shopee', stat: 'Artikel di 595 Media', slug: 'shopee' },
  { name: 'PLN', stat: '400 Artikel di 75 Media', slug: 'pln' },
]

export default function TrustedBy() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001A2C] mb-4">
            Scale of Trust
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kapasitas distribusi konten yang masif—dibuktikan dengan angka dari klien korporasi dan institusi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {clients.map((client, i) => (
            <motion.div
              key={client.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-slate-200 rounded-xl p-8 text-center hover:border-[#00AEEF]/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Logo: monochrome (grayscale), warna asli saat hover. Ganti dengan <Image> + className="grayscale hover:grayscale-0" bila pakai asset logo. */}
              <div className="flex items-center justify-center h-16 mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                <span
                  className="text-2xl font-bold text-slate-500 group-hover:text-[#00AEEF] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                >
                  {client.name}
                </span>
              </div>
              <p className="text-sm font-semibold text-[#001A2C] mb-1">
                {client.stat}
              </p>
              <p className="text-xs text-slate-500">
                Data Media Profile
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
