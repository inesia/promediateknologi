'use client'

import { motion } from 'framer-motion'
import { Wallet, Laptop, Heart } from 'lucide-react'

const services = [
  {
    title: 'Simpan Pinjam',
    description: 'Layanan simpanan berbunga kompetitif dan pinjaman modal usaha dengan syarat mudah.',
    icon: Wallet,
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
  {
    title: 'Pembiayaan Alat Kerja',
    description: 'Fasilitas kredit kepemilikan alat kerja (laptop, kamera, dll) dengan cicilan ringan.',
    icon: Laptop,
    color: 'from-[#2D74B3] to-[#00AEEF]',
  },
  {
    title: 'Dana Kesejahteraan',
    description: 'Alokasi dana sosial untuk anggota yang mengalami musibah atau sakit.',
    icon: Heart,
    color: 'from-[#00AEEF] to-[#2D74B3]',
  },
]

export default function LayananKoperasi() {
  return (
    <section className="relative py-4 lg:py-32 bg-white -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 lg:p-10 bg-white rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-[#001A2C] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative stripe */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
