'use client'

import { motion } from 'framer-motion'
import { Briefcase, Heart, Rocket, Users, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: Rocket,
    title: 'Inovasi & Pertumbuhan',
    description:
      'Berkembang di ekosistem media digital yang terus berevolusi bersama ribuan mitra di seluruh Indonesia.',
  },
  {
    icon: Users,
    title: 'Kolaborasi Tim',
    description:
      'Bekerja dengan profesional lintas disiplin — teknologi, jurnalistik, marketing, dan operasional media.',
  },
  {
    icon: Heart,
    title: 'Dampak Nyata',
    description:
      'Kontribusi Anda membantu memperkuat ekosistem media digital dan literasi informasi di tanah air.',
  },
]

const departments = [
  'Teknologi & Produk',
  'Editorial & Konten',
  'Marketing & Komunikasi',
  'Operasional & Mitra',
]

export default function KarirContent() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-sm font-semibold text-[#00AEEF]">Karir</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
            Bangun Masa Depan Media Digital Bersama Kami
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Promedia Group mencari talenta yang ingin berkontribusi membangun ekosistem media digital
            terintegrasi di Indonesia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg"
            >
              <div className="w-12 h-12 bg-[#00AEEF]/10 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-[#00AEEF]" />
              </div>
              <h2 className="text-lg font-bold text-[#001A2C] mb-3">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-[#001A2C] text-center mb-8">
            Area yang Kami Buka
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {departments.map((dept) => (
              <div
                key={dept}
                className="flex items-center gap-3 px-5 py-4 bg-white rounded-xl border border-slate-200"
              >
                <span className="w-2 h-2 rounded-full bg-[#00AEEF] shrink-0" aria-hidden />
                <span className="font-medium text-[#001A2C]">{dept}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-white p-10 lg:p-12 rounded-2xl border border-slate-200 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-[#001A2C] mb-4">
            Tertarik Bergabung?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Kirimkan CV dan portofolio Anda ke email kami. Tim HR akan menghubungi kandidat yang
            sesuai dengan kebutuhan posisi yang tersedia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:marcomm@promediateknologi.id?subject=Lamaran%20Kerja%20-%20Promedia%20Group"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="w-5 h-5" />
              marcomm@promediateknologi.id
            </a>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00AEEF]/30 text-[#00AEEF] font-semibold rounded-xl hover:border-[#00AEEF] hover:bg-[#00AEEF]/5 transition-all"
            >
              Halaman Kontak
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
