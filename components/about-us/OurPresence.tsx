'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { officeLocations } from '@/lib/officeLocations'

export default function OurPresence() {
  return (
    <section id="lokasi" className="relative py-32 lg:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
            Our Presence
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Kami hadir di kota-kota strategis untuk melayani ekosistem media digital Indonesia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {officeLocations.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#00AEEF]/10 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#001A2C]">{office.title}</h3>
              </div>

              <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-100 h-[400px]">
                <iframe
                  src={office.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Promedia ${office.city} Office`}
                />
              </div>

              <p className="mt-4 text-slate-600 leading-relaxed">{office.address}</p>

              <motion.a
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#00AEEF] hover:underline"
                whileHover={{ x: 2 }}
              >
                Buka di Google Maps
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00AEEF]/30 text-[#00AEEF] font-semibold rounded-xl hover:border-[#00AEEF] hover:bg-[#00AEEF]/5 transition-all"
          >
            Lihat halaman Contact Us
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
