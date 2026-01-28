'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import MediapreneurVisual from './pilar-visuals/MediapreneurVisual'
import ContentpreneurVisual from './pilar-visuals/ContentpreneurVisual'
import SocmedpreneurVisual from './pilar-visuals/SocmedpreneurVisual'
import VideopreneurVisual from './pilar-visuals/VideopreneurVisual'

const pilars = [
  {
    id: 'mediapreneur',
    title: 'Mediapreneur',
    subtitle: 'The Foundation',
    description: 'Program kepemilikan media bagi jurnalis profesional dengan legalitas yang jelas dan teknologi CMS yang mutakhir. Mediapreneur memberikan akses penuh kepada jurnalis untuk memiliki dan mengelola media digital mereka sendiri dengan dukungan infrastruktur teknologi Promedia.',
    visual: MediapreneurVisual,
  },
  {
    id: 'contentpreneur',
    title: 'Contentpreneur',
    subtitle: 'The Talent',
    description: 'Pemberdayaan penulis untuk menghasilkan konten berkualitas tinggi di bawah naungan Promedia dengan sistem yang terintegrasi. Contentpreneur membuka peluang bagi para penulis untuk berkarya dengan platform yang profesional dan sistem monetisasi yang transparan.',
    visual: ContentpreneurVisual,
  },
  {
    id: 'socmedpreneur',
    title: 'Socmedpreneur',
    subtitle: 'The Reach',
    description: 'Program optimasi dan monetisasi media sosial bagi anggota ekosistem dengan tools dan analytics yang lengkap. Socmedpreneur membantu anggota untuk mengoptimalkan kehadiran digital mereka di berbagai platform media sosial dengan strategi yang terukur.',
    visual: SocmedpreneurVisual,
  },
  {
    id: 'videopreneur',
    title: 'Videopreneur',
    subtitle: 'The Future',
    description: 'Program Promedia TV untuk memperkaya inventori video dan gambar bergerak dengan platform streaming yang profesional. Videopreneur membuka era baru dalam produksi konten video dengan teknologi streaming mutakhir dan distribusi yang luas.',
    visual: VideopreneurVisual,
  },
]

export default function PilarEkosistem() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Calculate which section is active based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const index = Math.min(Math.floor(latest * pilars.length), pilars.length - 1)
      setActiveIndex(index)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section 
      ref={containerRef}
      className="relative py-32 lg:py-40 bg-white"
    >
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
            Pilar Ekosistem
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Empat pilar utama yang membentuk fondasi ekosistem Promedia Teknologi
          </p>
        </motion.div>
      </div>

      {/* Alternating Side Layout */}
      <div className="space-y-0">
        {pilars.map((pilar, index) => {
          const VisualComponent = pilar.visual
          const isEven = index % 2 === 0
          
          return (
            <div
              key={pilar.id}
              className="relative min-h-screen flex items-center"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Text Content - Sticky */}
                  <motion.div
                    className={`lg:sticky lg:top-1/2 lg:-translate-y-1/2 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="max-w-2xl">
                      {/* Subtitle */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-full mb-6">
                        <span className="text-sm font-semibold text-[#00AEEF]">
                          {pilar.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl lg:text-5xl font-black text-[#001A2C] mb-6 leading-tight">
                        {pilar.title}
                      </h3>

                      {/* Description */}
                      <p className="text-lg lg:text-xl text-slate-600 leading-relaxed tracking-wide">
                        {pilar.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Visual - Sticky */}
                  <motion.div
                    className={`lg:sticky lg:top-1/2 lg:-translate-y-1/2 h-[400px] lg:h-[600px] ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <VisualComponent isActive={activeIndex === index} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
