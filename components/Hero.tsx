'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Building2, Radio, Sparkles } from 'lucide-react'
import { homeHero } from '@/lib/homeContent'
import HeroEcosystemBackground from '@/components/HeroEcosystemBackground'

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030917] text-white pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      {/* Dynamic Network Particles & Glowing Stars Background */}
      <HeroEcosystemBackground />

      {/* Full Bleed Background Image Layer using /images/bg-hero1.png */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[68%] xl:w-[65%] h-full opacity-50 sm:opacity-75 lg:opacity-100">
          <Image
            src="/images/bg-hero1.png"
            alt="Digital Media Ecosystem Background"
            fill
            priority
            className="object-cover object-center lg:object-right"
          />
        </div>
        {/* Seamless gradient blending into dark navy #030917 on text side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030917] via-[#030917]/80 via-35% to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030917] via-transparent to-[#030917]/50 z-10" />
      </div>

      {/* Hero Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full min-h-[calc(100vh-8rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full max-w-7xl mx-auto">
          
          {/* Left Column: Headline, Subheadline & Buttons */}
          <div className="lg:col-span-7 xl:col-span-6 text-left py-6">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="space-y-1 mb-6 sm:mb-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.06]">
                <span className="block text-white">
                  {homeHero.headlineLine1}
                </span>
                <span className="block bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,174,239,0.4)]">
                  {homeHero.headlineHighlight}
                </span>
                <span className="block text-white">
                  {homeHero.headlineLine2}
                </span>
                <span className="block text-white">
                  {homeHero.headlineLine3}
                </span>
              </h1>
            </motion.div>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-normal max-w-xl mb-8 sm:mb-10"
            >
              {homeHero.subheadline}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Primary Button */}
                <Link href={homeHero.primaryCtaHref} className="w-full sm:w-auto">
                  <motion.span
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] rounded-xl shadow-lg shadow-[#00AEEF]/30 hover:shadow-[#00AEEF]/50 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{homeHero.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.span>
                </Link>

                {/* Secondary Button */}
                <Link href={homeHero.secondaryCtaHref} className="w-full sm:w-auto">
                  <motion.span
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 text-sm sm:text-base font-semibold text-white bg-[#0a1936]/80 border border-slate-700/80 hover:border-[#00AEEF]/60 rounded-xl backdrop-blur-md hover:bg-[#0f244c] transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{homeHero.secondaryCta}</span>
                    <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.span>
                </Link>
              </div>

              {/* Tertiary Link */}
              <div className="pt-2">
                <Link href={homeHero.tertiaryCtaHref} className="inline-flex items-center gap-2.5 text-slate-200 hover:text-white text-sm sm:text-base font-medium group transition-colors">
                  <span>{homeHero.tertiaryCta}</span>
                  <div className="w-6.5 h-6.5 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-colors p-1">
                    <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Badges matched precisely to the reference image */}
          <div className="lg:col-span-5 xl:col-span-6 relative h-[380px] sm:h-[480px] lg:h-[580px] w-full flex items-center justify-center pointer-events-none">
            
            {/* Badge 1: Stronger Media (Top Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[8%] left-[2%] sm:top-[12%] sm:left-[8%] lg:top-[15%] lg:left-[10%] z-30 pointer-events-auto"
            >
              <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#00AEEF]/85 border border-[#00AEEF]/50 backdrop-blur-xl text-white shadow-[0_12px_36px_rgba(0,174,239,0.4)] transition-transform hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                    Stronger
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                    Media
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Badge 2: Bigger Impact (Middle Right) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-[34%] right-[2%] sm:top-[38%] sm:right-[5%] lg:top-[35%] lg:right-[8%] z-30 pointer-events-auto"
            >
              <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#7c4dff]/85 border border-[#9333ea]/50 backdrop-blur-xl text-white shadow-[0_12px_36px_rgba(124,77,255,0.4)] transition-transform hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0">
                  <Radio className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                    Bigger
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                    Impact
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Badge 3: Brighter Future (Bottom Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-[14%] left-[6%] sm:bottom-[18%] sm:left-[12%] lg:bottom-[20%] lg:left-[15%] z-30 pointer-events-auto"
            >
              <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#008f95]/85 border border-[#06b6d4]/50 backdrop-blur-xl text-white shadow-[0_12px_36px_rgba(0,143,149,0.4)] transition-transform hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                    Brighter
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                    Future
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
