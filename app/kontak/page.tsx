'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, Clock, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import OfficeMaps from '@/components/kontak/OfficeMaps'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-4 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
              Hubungi Promedia Group
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Kami siap membantu pertanyaan, kolaborasi, dan kebutuhan publikasi Anda.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-[#00AEEF]" />
              </div>
              <h3 className="text-xl font-bold text-[#001A2C] mb-4">Telepon</h3>
              <p className="text-lg font-semibold text-[#00AEEF] mb-1">022 8735 7766</p>
              <p className="text-slate-500 text-sm">(Office Hour)</p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-bold text-[#001A2C] mb-4">WhatsApp Business</h3>
              <a
                href="https://wa.me/628112007667"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[#25D366] hover:underline mb-1 block"
              >
                0811 2007 667
              </a>
              <p className="text-slate-500 text-sm">(Text Only)</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-[#001A2C] mb-4">Email</h3>
              <a
                href="mailto:marcomm@promediateknologi.id"
                className="text-lg font-semibold text-purple-600 hover:underline"
              >
                marcomm@promediateknologi.id
              </a>
              <p className="text-slate-500 text-sm mt-1">Pertanyaan & Kolaborasi</p>
            </motion.div>
          </div>

          <OfficeMaps />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-slate-600 font-medium">
              <Clock className="w-5 h-5 text-[#00AEEF]" />
              <span>Jam operasional kantor: Senin–Jumat, 09.00–18.00 WIB</span>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
