'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function BrandStatement() {
  const sectionRef = useRef(null)

  // Scroll-linked opacity
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.2, 0.6, 1, 0.6, 0.2])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  // Split headline into words for staggered animation
  const headline = "Kami Tidak Hanya Berkembang, Kami Menciptakan Semesta Baru."
  const words = headline.split(' ')

  return (
    <section 
      id="brand-statement"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-white overflow-hidden"
    >
      {/* Continuous Ambient Wave from Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.svg 
          className="absolute inset-0 w-full h-full opacity-[0.03]" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="none"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <defs>
            <linearGradient id="brand-wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#2D74B3" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path 
            d="M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
            fill="url(#brand-wave-gradient)"
          />
        </motion.svg>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00AEEF]/[0.02] rounded-full blur-3xl" />

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity, scale }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline with Staggered Animation */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-8 lg:mb-12 leading-tight tracking-tighter">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Sub-headline */}
          <motion.p
            className="text-xl lg:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Kami membangun infrastruktur masa depan sekaligus ruang tumbuh yang setara dan berkelanjutan bagi media, jurnalis, dan kreator di seluruh Indonesia.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-10 lg:mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.a
              href="/about-us"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#001A2C] border-2 border-[#00AEEF]/30 rounded-xl hover:border-[#00AEEF] hover:bg-[#00AEEF]/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Pelajari Tentang Kami</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            className="mt-12 lg:mt-16 flex justify-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.4, ease: "easeInOut" }}
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
