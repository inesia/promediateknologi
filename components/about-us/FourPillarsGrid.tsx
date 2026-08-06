'use client'

import { motion } from 'framer-motion'
import { Newspaper, PenTool, Share2 } from 'lucide-react'

const pillars = [
  {
    title: 'Publisher Media Network',
    description:
      'Bangun media digital Anda sendiri dengan teknologi terkini, didampingi praktisi berpengalaman, dan dukungan monetisasi terintegrasi — tanpa dipungut biaya.',
    icon: Newspaper,
    gradient: 'from-[#00AEEF] to-[#2D74B3]',
  },
  {
    title: 'Influencer Media Network',
    description:
      'Ruang kreator membangun dampak di media sosial sambil terhubung dengan brand, didukung tools, analitik, dan monetisasi terintegrasi.',
    icon: Share2,
    gradient: 'from-[#2D74B3] to-[#00AEEF]',
  },
  {
    title: 'Contentpreneur',
    description:
      'Ubah tulisan jadi pendapatan. Ruang bagi jurnalis dan kreator untuk berkarya, berkembang, dan terhubung dengan ekosistem media digital.',
    icon: PenTool,
    gradient: 'from-[#00AEEF] to-[#2D74B3]',
  },
]

export default function FourPillarsGrid() {
  return (
    <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
            The 3 Pillars
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tiga pilar utama yang membentuk ekosistem Promedia Teknologi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            const isPublisher = pillar.title === 'Publisher Media Network'
            const isInfluencer = pillar.title === 'Influencer Media Network'
            const isDarkCard = isPublisher || isInfluencer
            const bgImage = isPublisher ? "/images/section-bgg.webp" : isInfluencer ? "/images/section-bgc.webp" : null
            const darkBgClass = isPublisher ? 'bg-[#061838]' : isInfluencer ? 'bg-[#140b2e]' : 'bg-white/80 backdrop-blur-xl'
            const gradientOverlay = isPublisher
              ? "bg-gradient-to-br from-[#061838]/95 via-[#061838]/90 to-[#092659]/75"
              : "bg-gradient-to-br from-[#140b2e]/95 via-[#140b2e]/90 to-[#211347]/75"

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`relative h-full p-8 lg:p-10 rounded-2xl border border-white/50 shadow-lg shadow-[#00AEEF]/5 hover:shadow-[#00AEEF]/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden ${
                    isDarkCard ? `${darkBgClass} text-white` : 'bg-white/80 backdrop-blur-xl'
                  }`}
                >
                  {isDarkCard && bgImage && (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-right lg:bg-center opacity-40 pointer-events-none transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${bgImage}')` }}
                      />
                      <div className={`absolute inset-0 ${gradientOverlay} pointer-events-none`} />
                    </>
                  )}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${pillar.gradient.includes('from-[#00AEEF]') ? '#00AEEF' : '#2D74B3'}15, ${pillar.gradient.includes('to-[#2D74B3]') ? '#2D74B3' : '#00AEEF'}15)`,
                      filter: 'blur(20px)',
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className={`text-2xl lg:text-3xl font-black mb-4 ${isDarkCard ? 'text-white' : 'text-[#001A2C]'}`}>
                      {pillar.title}
                    </h3>

                    <p className={`leading-relaxed ${isDarkCard ? 'text-slate-200' : 'text-slate-600'}`}>{pillar.description}</p>
                  </div>

                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.gradient} opacity-5 rounded-bl-full`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
