'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
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

            {/* Iklan Email */}
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
              <h3 className="text-xl font-bold text-[#001A2C] mb-4">Iklan & Kerjasama</h3>
              <a href="mailto:iklan@promedia.co.id" className="text-lg font-semibold text-purple-600 hover:underline">
                iklan@promedia.co.id
              </a>
               <p className="text-slate-500 text-sm mt-1">Konsultasi Publikasi</p>
            </motion.div>
          </div>

          {/* Maps Section */}
          <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
               {/* Jakarta Office */}
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                 <div className="flex items-center gap-3 mb-6">
                   <div className="bg-[#00AEEF]/10 p-2 rounded-lg">
                      <MapPin className="w-6 h-6 text-[#00AEEF]" />
                   </div>
                   <h3 className="text-2xl font-bold text-[#001A2C]">Kantor Jakarta</h3>
                 </div>
                 <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-100 h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2171243477483!2d106.8428395!3d-6.2350852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3677d716bc1%3A0x3d8216b711782ea6!2sPromedia%20Teknologi%20Indonesia%20(Jakarta)!5e0!3m2!1sen!2sid!4v1707900000000!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: '1rem' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Promedia Jakarta Office"
                    ></iframe>
                 </div>
                  <p className="mt-4 text-slate-600">
                    Promedia Teknologi Indonesia (Jakarta)
                  </p>
               </motion.div>

               {/* Bandung Office */}
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
               >
                 <div className="flex items-center gap-3 mb-6">
                   <div className="bg-[#00AEEF]/10 p-2 rounded-lg">
                      <MapPin className="w-6 h-6 text-[#00AEEF]" />
                   </div>
                   <h3 className="text-2xl font-bold text-[#001A2C]">Kantor Bandung</h3>
                 </div>
                 <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-100 h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.095763303645!2d107.62616!3d-6.927194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7fea1e69c83%3A0x1a1cbd847a0728c2!2sPT%20Promedia%20Teknologi%20Indonesia!5e0!3m2!1sen!2sid!4v1707900000000!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: '1rem' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Promedia Bandung Office"
                    ></iframe>
                 </div>
                 <p className="mt-4 text-slate-600">
                    Jl. Progo No. 06, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115
                  </p>
               </motion.div>
             </div>
          </div>

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
