'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Building2, Radio, Sparkles } from 'lucide-react'
import { homeHero } from '@/lib/homeContent'
import HeroEcosystemBackground from '@/components/HeroEcosystemBackground'

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F4F8FC] text-[#001A2C] pt-20 pb-12 lg:pt-28 lg:pb-20"
    >
      {/* Dynamic Network Particles & Light Background Canvas */}
      <HeroEcosystemBackground />

      {/* Desktop Background Image Layer (100% intact as praised by user) */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full opacity-100">
          <Image
            src="/images/banner-hero1.png"
            alt="Digital Media Ecosystem Background Wave"
            fill
            priority
            quality={100}
            className="object-cover object-right"
          />
        </div>
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#F4F8FC] via-[#F4F8FC]/70 to-transparent z-10" />
      </div>

      {/* Mobile-Optimized Background Layer (Retina Sharp, No 4x Stretched Zoom, Zero Pixelation) */}
      <div className="block lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#F4F8FC]">
        {/* Top Wave Graphic aligned cleanly behind illustration artwork */}
        <div className="absolute top-0 right-0 left-0 h-[420px] xs:h-[460px] sm:h-[520px]">
          <Image
            src="/images/banner-hero1.png"
            alt="Digital Media Ecosystem Mobile Background Wave"
            fill
            priority
            quality={100}
            className="object-cover object-right-top opacity-95"
          />
          {/* Smooth fade into solid #F4F8FC light backdrop behind text for 100% text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F4F8FC]/50 to-[#F4F8FC]" />
        </div>

        {/* Ambient Cyan Spotlight Glow for Mobile depth */}
        <div className="absolute top-4 right-[-10%] w-[320px] h-[320px] bg-[#00AEEF]/25 rounded-full blur-[85px]" />
      </div>

      {/* Hero Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col justify-center">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full mx-auto py-2 lg:py-0">
          
          {/* Visual Illustration Section (Order 1 on mobile, Order 2 on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-6 relative w-full flex items-center justify-center py-4 lg:py-0">
            
            {/* Main Visual Image (banner-hero2.png) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.1 },
                scale: { duration: 0.8, delay: 0.1 },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="relative z-20 w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-md lg:max-w-xl mx-auto"
            >
              <Image
                src="/images/banner-hero2.png"
                alt="Promedia Ecosystem - Web & Mobile Platform"
                width={950}
                height={760}
                priority
                quality={100}
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,174,239,0.25)] hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>

            {/* Badge 1: Stronger Media (Top-Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 left-0 sm:-top-3 sm:left-2 lg:-top-4 lg:-left-4 z-30 pointer-events-auto scale-85 sm:scale-100 origin-top-left"
            >
              <div className="flex items-center gap-2.5 sm:gap-3.5 px-3 sm:px-5 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-[#00AEEF]/35 backdrop-blur-xl text-[#001A2C] shadow-[0_8px_25px_rgba(0,174,239,0.22)] transition-transform hover:scale-105">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#00AEEF] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#00AEEF]/30">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs sm:text-base font-bold text-[#001A2C] tracking-wide">
                    Stronger
                  </span>
                  <span className="text-xs sm:text-base font-bold text-[#00AEEF] tracking-wide">
                    Media
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Badge 2: Bigger Impact (Bottom-Right, placed directly below the YouTube icon) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 right-0 sm:bottom-0 sm:right-2 lg:-bottom-4 lg:-right-4 z-30 pointer-events-auto scale-85 sm:scale-100 origin-bottom-right"
            >
              <div className="flex items-center gap-2.5 sm:gap-3.5 px-3 sm:px-5 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-purple-200 backdrop-blur-xl text-[#001A2C] shadow-[0_8px_25px_rgba(124,77,255,0.22)] transition-transform hover:scale-105">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#7c4dff] flex items-center justify-center text-white shrink-0 shadow-md shadow-purple-500/30">
                  <Radio className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs sm:text-base font-bold text-[#001A2C] tracking-wide">
                    Bigger
                  </span>
                  <span className="text-xs sm:text-base font-bold text-[#7c4dff] tracking-wide">
                    Impact
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Badge 3: Brighter Future (Bottom-Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-2 left-1 sm:-bottom-3 sm:left-3 lg:-bottom-4 lg:left-0 z-30 pointer-events-auto scale-85 sm:scale-100 origin-bottom-left"
            >
              <div className="flex items-center gap-2.5 sm:gap-3.5 px-3 sm:px-5 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-teal-200 backdrop-blur-xl text-[#001A2C] shadow-[0_8px_25px_rgba(0,143,149,0.22)] transition-transform hover:scale-105">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#008f95] flex items-center justify-center text-white shrink-0 shadow-md shadow-teal-500/30">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs sm:text-base font-bold text-[#001A2C] tracking-wide">
                    Brighter
                  </span>
                  <span className="text-xs sm:text-base font-bold text-[#008f95] tracking-wide">
                    Future
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Text Content & Action Buttons Section (Order 2 on mobile, Order 1 on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-6 text-left py-2 sm:py-4 lg:py-6 flex flex-col justify-center w-full">
            
            {/* Top Badge Pill */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/25 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 sm:mb-6 self-start"
            >
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              {homeHero.badge}
            </motion.div>

            {/* Headline - Full Width on Mobile */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-1 mb-3 sm:mb-6 w-full"
            >
              <h1 className="w-full text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#001A2C]">
                <span className="block w-full text-[#001A2C]">
                  {homeHero.headlineLine1}
                </span>
                <span className="block w-full bg-gradient-to-r from-[#00AEEF] via-[#0088D6] to-[#2D74B3] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,174,239,0.3)]">
                  {homeHero.headlineHighlight}
                </span>
                <span className="block w-full text-[#001A2C]">
                  {homeHero.headlineLine2}
                </span>
                <span className="block w-full text-[#001A2C]">
                  {homeHero.headlineLine3}
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal max-w-xl mb-6 sm:mb-8"
            >
              {homeHero.subheadline}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4 sm:space-y-5"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                {/* Primary Button */}
                <Link href={homeHero.primaryCtaHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.span
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] rounded-xl shadow-lg shadow-[#00AEEF]/30 hover:shadow-[#00AEEF]/45 transition-all duration-300 group cursor-pointer text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{homeHero.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 ml-2 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.span>
                </Link>

                {/* Secondary Button */}
                <Link href={homeHero.secondaryCtaHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.span
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#001A2C] bg-white border border-slate-300 hover:border-[#00AEEF] rounded-xl backdrop-blur-md hover:bg-slate-50 shadow-sm transition-all duration-300 group cursor-pointer text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{homeHero.secondaryCta}</span>
                    <ArrowRight className="w-4 h-4 ml-2 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.span>
                </Link>
              </div>

              {/* Tertiary Link */}
              <div className="pt-1">
                <Link href={homeHero.tertiaryCtaHref} className="inline-flex items-center gap-2.5 text-[#001A2C] hover:text-[#00AEEF] text-sm sm:text-base font-medium group transition-colors">
                  <span>{homeHero.tertiaryCta}</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#00AEEF]/40 bg-[#00AEEF]/10 flex items-center justify-center group-hover:bg-[#00AEEF] group-hover:text-white transition-colors p-1 text-[#00AEEF]">
                    <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}


