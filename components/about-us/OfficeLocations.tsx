'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'

const offices = [
  {
    type: 'Headquarter',
    city: 'Bandung',
    address: 'Jl. Contoh No. 123, Bandung, Jawa Barat',
    mapUrl: 'https://maps.google.com/?q=Bandung,+Jawa+Barat',
    description: 'Kantor pusat Promedia Teknologi yang menjadi pusat operasional dan pengembangan teknologi.',
  },
  {
    type: 'Branch Office',
    city: 'Jakarta',
    address: 'Jl. Contoh No. 456, Jakarta Pusat, DKI Jakarta',
    mapUrl: 'https://maps.google.com/?q=Jakarta+Pusat,+DKI+Jakarta',
    description: 'Kantor cabang yang melayani klien dan mitra di wilayah Jakarta dan sekitarnya.',
  },
]

export default function OfficeLocations() {
  return (
    <section className="relative py-32 lg:py-40 bg-white">
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
            Regional Presence
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Kami hadir di berbagai kota strategis untuk melayani ekosistem media digital Indonesia
          </p>
        </motion.div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 lg:p-10 bg-gradient-to-br from-white to-slate-50/50 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                {/* Type Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-full mb-6">
                  <span className="text-sm font-semibold text-[#00AEEF]">
                    {office.type}
                  </span>
                </div>

                {/* City */}
                <h3 className="text-3xl lg:text-4xl font-black text-[#001A2C] mb-4">
                  {office.city}
                </h3>

                {/* Address */}
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-[#00AEEF] mt-1 flex-shrink-0" />
                  <p className="text-slate-600 leading-relaxed">
                    {office.address}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {office.description}
                </p>

                {/* Visit Button */}
                <motion.a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Visit Our Office</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>

                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00AEEF]/10 to-transparent rounded-bl-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
