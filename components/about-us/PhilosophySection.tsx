'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax effect for background text
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.05, 0.05, 0.05, 0.05])

  return (
    <section 
      ref={sectionRef}
      id="tentang-kami"
      className="relative py-32 lg:py-40 bg-white overflow-hidden"
    >
      {/* Background "Expanding Universe" text */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-[15rem] lg:text-[20rem] font-black text-[#001A2C] opacity-[0.05] whitespace-nowrap select-none">
          Expanding Universe
        </h2>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
              Philosophy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3]" />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-lg lg:text-xl text-slate-700 leading-relaxed tracking-wide"
          >
            <p className="font-medium">
              Kami tidak hanya berkembang—kami menciptakan semesta baru.
            </p>
            
            <p>
              Promedia Teknologi hadir sebagai pembeda di tengah ekosistem media digital yang semakin padat. 
              Kami tidak sekadar mengikuti tren, melainkan menciptakan ekosistem baru yang memberikan nilai 
              tambah bagi setiap anggota komunitas media.
            </p>

            <p>
              Sebagai pionir ekosistem media digital terintegrasi, kami membangun infrastruktur masa depan 
              yang memungkinkan Mediapreneur dan Contentpreneur untuk berkembang dengan legalitas yang jelas, 
              teknologi yang mutakhir, dan dukungan komunitas yang solid.
            </p>

            <p className="font-semibold text-[#001A2C]">
              Visi kami adalah menjadi arsitek ekosistem media yang membentuk masa depan industri media Indonesia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
