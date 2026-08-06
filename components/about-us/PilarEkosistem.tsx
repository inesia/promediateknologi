'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import MediapreneurVisual from './pilar-visuals/MediapreneurVisual'
import SocmedpreneurVisual from './pilar-visuals/SocmedpreneurVisual'

const pilars = [
  {
    id: 'mediapreneur',
    title: 'Publisher Media Network',
    subtitle: 'The Foundation',
    description:
      'Bangun media digital Anda sendiri dengan teknologi terkini, didampingi praktisi berpengalaman, dan dukungan monetisasi terintegrasi — tanpa dipungut biaya.',
    visual: MediapreneurVisual,
  },

  {
    id: 'influencer-media-network',
    title: 'Influencer Media Network',
    subtitle: 'The Reach',
    description:
      'Ruang kreator membangun dampak di media sosial sambil terhubung dengan brand, didukung tools, analitik, dan monetisasi terintegrasi.',
    visual: SocmedpreneurVisual,
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
      className="relative py-32 lg:py-16 bg-white"
    >
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6 lg:mb-4">
            Pilar Ekosistem
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Tiga pilar utama yang membentuk fondasi ekosistem Promedia Teknologi
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
              className="relative min-h-screen lg:min-h-0 lg:py-10 flex items-center"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center ${
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-full mb-6 lg:mb-4">
                        <span className="text-sm font-semibold text-[#00AEEF]">
                          {pilar.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl lg:text-5xl font-black text-[#001A2C] mb-6 lg:mb-4 leading-tight">
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
                    className={`lg:sticky lg:top-1/2 lg:-translate-y-1/2 h-[400px] lg:h-[480px] ${
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
