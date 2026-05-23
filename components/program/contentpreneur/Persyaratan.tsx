'use client'

import { motion } from 'framer-motion'
import { FileText, Users, MonitorPlay, ArrowRight } from 'lucide-react'
import { getPartnerFormUrl } from '@/lib/programRegistration'

export default function Persyaratan() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
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
            Alur dan Cara Mendaftar
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ada dua jalur untuk mengikuti program Contentpreneur ini
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Jalur Media */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg"
          >
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] mb-6 shadow-lg">
              <MonitorPlay className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#001A2C] mb-6">1. Jalur Media</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#00AEEF] flex-shrink-0" />
                <p className="text-slate-600">Mendaftar lowongan jurnalis/penulis yang dibuka oleh mitra media Promedia Group. Cek laman karir dan media sosial mereka.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#00AEEF] flex-shrink-0" />
                <p className="text-slate-600">Mengikuti alur administrasi pendaftaran yang diterapkan mitra media Promedia Group.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#00AEEF] flex-shrink-0" />
                <p className="text-slate-600">Mengikuti rangkaian pelatihan terpusat yang digelar oleh tim Promedia Group.</p>
              </li>
            </ul>
          </motion.div>

          {/* Jalur Promedia Group */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg"
          >
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#2D74B3] to-[#00AEEF] mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#001A2C] mb-6">2. Jalur Promedia Group</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#2D74B3] flex-shrink-0" />
                <p className="text-slate-600">Mengisi formulir pendaftaran yang disediakan. Klik tombol di bawah.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#2D74B3] flex-shrink-0" />
                <p className="text-slate-600">Mengikuti zoom penjelasan konsep program Contentpreneur secara online.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#2D74B3] flex-shrink-0" />
                <p className="text-slate-600">Melakukan daftar ulang.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#2D74B3] flex-shrink-0" />
                <p className="text-slate-600">Mengikuti rangkaian pelatihan terpusat yang digelar oleh tim Promedia Group.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#2D74B3] flex-shrink-0" />
                <p className="text-slate-600">Mendapatkan penempatan ke media yang direkomendasikan Promedia Group.</p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href={getPartnerFormUrl('contentpreneur')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#00AEEF] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
