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
              Tentang Perusahaan
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
            <div className="space-y-12">
              {/* Profil Singkat */}
              <div>
                <h3 className="text-2xl font-bold text-[#001A2C] mb-4">Profil Singkat</h3>
                <p>
                  Promedia Group adalah ekosistem media dan teknologi yang tumbuh dari keyakinan bahwa setiap cerita layak mendapat ruang. Bukan hanya dari media besar, tapi juga dari media kecil, jurnalis dan kreator personal, terutama mereka yang berkarya di daerah, dekat dengan realitas sehari-hari.
                </p>
                <p className="mt-4">
                  Sejak Juli 2021, Promedia Group hadir dengan misi menumbuhkan dan mendampingi mereka, mitra-mitra kami yang memiliki banyak cerita penting, namun sering kali kekurangan akses dan dukungan teknologi. Melalui berbagai inisiatif di bidang media digital, sosial media hingga dan video, Promedia Group menyediakan platform, infrastruktur teknologi dan monetisasi, serta jaringan media dan komunitas kreator dengan satu tujuan, tumbuh bersama.
                </p>
                <p className="mt-4">
                  Bagi kami, teknologi hanyalah alat. Yang utama adalah manusia, proses, dan cerita di baliknya. Karena suara-suara dari daerah tidak kalah penting, hanya sering kali kurang terdengar. Promedia Group hadir untuk membantu suara-suara itu tumbuh, terhubung, dan sampai ke audiens yang lebih luas secara berkelanjutan.
                </p>
              </div>

              {/* Filosofi Kami */}
              <div>
                <h3 className="text-2xl font-bold text-[#001A2C] mb-4">Filosofi Kami</h3>
                <p>
                  Promedia Group meyakini bahwa keberlanjutan media dibangun melalui akses yang setara dan kolaborasi yang sehat. Setiap entitas, baik media maupun kreator independen, memiliki peran dalam ekosistem informasi yang beragam.
                </p>
                <p className="mt-4">
                  Kami menyediakan platform, teknologi, dan jaringan untuk mendukung proses tersebut secara efisien dan berkelanjutan, tanpa mengorbankan independensi dan identitas. Dengan pendekatan ekosistem, Promedia Group berkomitmen untuk tumbuh bersama mitra kami dan membangun media yang relevan bagi masa depan.
                </p>
              </div>

              {/* Cita-cita Kami */}
              <div>
                <h3 className="text-2xl font-bold text-[#001A2C] mb-4">Cita-cita Kami</h3>
                <p>
                  Menjadi ruang di mana setiap cerita memiliki kesempatan yang sama untuk tumbuh, didengar, dan memberi makna, tanpa dibatasi lokasi, modal, dan kerumitan teknologi.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
