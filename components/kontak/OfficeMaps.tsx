'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { officeLocations } from '@/lib/officeLocations'

export default function OfficeMaps() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {officeLocations.map((office, index) => (
          <motion.div
            key={office.id}
            initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
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
            <p className="mt-4 text-slate-600">{office.address}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
