'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { homeHero } from '@/lib/homeContent'
import HeroEcosystemBackground from '@/components/HeroEcosystemBackground'

export default function Hero() {
  const blurIn = {
    initial: { opacity: 0, filter: 'blur(10px)', y: 20 },
    animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20 md:pt-24 lg:pt-24 pb-8 md:pb-20 lg:pb-32"
    >
      <HeroEcosystemBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto text-center">
          <motion.div
            {...blurIn}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-flex items-center justify-center mb-3 md:mb-6 lg:mb-8"
          >
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-full backdrop-blur-sm">
              <span className="text-[10px] md:text-xs font-semibold text-[#00AEEF] tracking-wide uppercase">
                {homeHero.badge}
              </span>
            </div>
          </motion.div>

          <motion.h1
            {...blurIn}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-[#001A2C] mb-3 md:mb-6 lg:mb-8 leading-[1.25] md:leading-[1.2] px-2 pb-1"
            style={{ letterSpacing: '-0.03em' }}
          >
            {homeHero.headlineLine1}{' '}
            <span className="bg-gradient-to-r from-[#00AEEF] via-[#2D74B3] to-[#00AEEF] bg-clip-text text-transparent inline-block">
              {homeHero.headlineLine2}
            </span>
          </motion.h1>

          <motion.div
            {...blurIn}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-5 md:mb-8 lg:mb-12 px-2"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#64748b] max-w-2xl mx-auto leading-relaxed font-normal px-4 py-3 sm:px-6 sm:py-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#00AEEF]/15 shadow-sm shadow-slate-100/80">
              {homeHero.subheadline}
            </p>
          </motion.div>

          <motion.div
            {...blurIn}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 lg:gap-6 px-4"
          >
            <Link href={homeHero.primaryCtaHref} className="w-full sm:w-auto">
              <span className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-4 text-sm md:text-base lg:text-lg font-bold text-white bg-[#0077B6] rounded-xl shadow-lg shadow-[#0077B6]/40 hover:bg-[#005F92] transition-colors duration-200 cursor-pointer text-center">
                {homeHero.primaryCta}
              </span>
            </Link>

            <Link href={homeHero.secondaryCtaHref} className="w-full sm:w-auto">
              <motion.span
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-4 text-sm md:text-base lg:text-lg font-semibold text-[#001A2C] bg-white/80 backdrop-blur-sm border-2 border-[#00AEEF]/30 rounded-xl hover:border-[#00AEEF] hover:bg-[#00AEEF]/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {homeHero.secondaryCta}
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#00AEEF]/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#00AEEF]/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
