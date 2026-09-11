'use client'

import { motion } from 'framer-motion'
import { Users, Globe, Scale } from 'lucide-react'

export default function AboutJPP() {
  return (
    <section className="relative py-4 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-full mb-6">
              <Users className="w-5 h-5 text-[#00AEEF]" />
              <span className="text-sm font-semibold text-[#00AEEF]">
                Tentang Kami
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-8 leading-tight">
              Apa itu JPP?
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Jaringan Pemred Promedia (JPP) adalah ruang kolaborasi para Pemimpin Redaksi media yang berada di ekosistem Promedia. JPP menghubungkan pemimpin media dari berbagai daerah dan beragam segmen liputan untuk berdiskusi, berjejaring, dan memperkuat peran media di tengah dinamika industri media digital.
              </p>
              <p>
                Melalui JPP, kolaborasi lintas media dijalankan secara setara dan berkelanjutan, menciptakan ruang diskusi strategis, pertukaran perspektif, serta inisiatif bersama yang mendukung kualitas dan masa depan industri media Indonesia.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual Features */}
          <div className="space-y-6">
            <FeatureCard
              icon={Users}
              title="Kolaborasi Lintas Media"
              description="Menghubungkan pemimpin redaksi untuk sinergi yang produktif."
              delay={0.2}
            />
            <FeatureCard
              icon={Globe}
              title="Jaringan Nasional"
              description="Menjangkau media dari berbagai daerah di seluruh Indonesia."
              delay={0.4}
            />
            <FeatureCard
              icon={Scale}
              title="Kesetaraan & Keberlanjutan"
              description="Membangun ekosistem media yang adil dan berorientasi masa depan."
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#00AEEF]/30 hover:bg-[#00AEEF]/5 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-[#00AEEF]" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#001A2C] mb-2">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
