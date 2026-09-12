'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { homeHero } from '@/lib/homeContent'
import HeroEcosystemBackground from '@/components/HeroEcosystemBackground'

export default function Hero() {
  // No opacity:0 entrance — Safari iOS can leave hero text invisible / feel "stuck"
  const fadeInUp = {
    initial: false as const,
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#F4F8FC] text-[#001A2C] pt-14 pb-4 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-16"
    >
      {/* Dynamic Network Particles & Light Background Canvas */}
      <HeroEcosystemBackground />

      {/* Desktop Background Image Layer */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full opacity-100">
          <Image
            src="/images/banner-hero1.webp"
            alt="Digital Media Ecosystem Background Wave"
            fill
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#F4F8FC] via-[#F4F8FC]/70 to-transparent z-10" />
      </div>

      {/* Mobile-Optimized Background Layer */}
      <div className="block lg:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#F4F8FC]">
        <div className="absolute top-0 right-0 left-0 h-[420px] xs:h-[460px] sm:h-[520px]">
          <Image
            src="/images/banner-hero1.webp"
            alt="Digital Media Ecosystem Mobile Background Wave"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right-top opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F4F8FC]/50 to-[#F4F8FC]" />
        </div>

        {/* Soft glow without CSS filter blur (Safari iOS safe) */}
        <div
          className="absolute top-4 right-[-10%] w-[280px] h-[280px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(0,174,239,0.25) 0%, rgba(0,174,239,0) 70%)',
          }}
        />
      </div>

      {/* Hero Main Content Container */}
      <div className="container mx-auto px-3.5 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col justify-center">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-12 items-center w-full mx-auto py-1 lg:py-0">
          
          {/* Text Content & Action Buttons Section (Desktop Left Column) */}
          <div className="lg:col-span-7 xl:col-span-6 text-left py-1 sm:py-4 lg:py-6 flex flex-col justify-center w-full">
            
            {/* Top Badge Pill (Full Width at Top on Mobile & Desktop) */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/25 text-[10px] sm:text-sm font-bold tracking-wider uppercase mb-2 sm:mb-5 self-start"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00AEEF] animate-pulse" />
              {homeHero.badge}
            </motion.div>

            {/* Mobile Top Row: Judul Left, Gambar Right | Desktop: Normal Vertical Stack */}
            <div className="grid grid-cols-12 lg:flex lg:flex-col items-center lg:items-start gap-2 sm:gap-4 mb-2 sm:mb-6">
              
              {/* Left Column (Mobile: 7 Cols | Desktop: Full Width) */}
              <div className="col-span-7 min-w-0 lg:w-full flex flex-col justify-center text-left">
                {/* Headline - Larger Font on Mobile to Match Image Height */}
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="space-y-1 w-full"
                >
                  <h1 className="w-full text-[1.85rem] xs:text-[2.25rem] sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#001A2C] break-words">
                    {/* Line 1: Building Indonesia's */}
                    <span className="block w-full">
                      <span className="text-[#001A2C]">Building </span>
                      <span className="bg-gradient-to-r from-[#00AEEF] via-[#0088D6] to-[#2D74B3] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,174,239,0.3)]">
                        Indonesia&apos;s
                      </span>
                    </span>
                    
                    {/* Line 2: Digital Media Ecosystem */}
                    <span className="block w-full text-[#001A2C]">
                      Digital Media Ecosystem
                    </span>
                  </h1>
                </motion.div>

                {/* Subheadline (Desktop Only inside left column) */}
                <motion.p
                  {...fadeInUp}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="hidden lg:block text-sm sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal max-w-xl mt-4 sm:mt-8"
                >
                  {homeHero.subheadline}
                </motion.p>
              </div>

              {/* Right Column Image for Mobile (Mobile: 5 Cols | Desktop: Hidden, handled by desktop column) */}
              <div className="col-span-5 min-w-0 block lg:hidden relative w-full flex items-center justify-center">
                <div className="relative z-20 w-full max-w-[160px] xs:max-w-[190px] sm:max-w-[240px] mx-auto">
                  <Image
                    src="/images/banner-hero2-m2.png"
                    alt="Promedia Ecosystem - Web & Mobile Platform"
                    width={271}
                    height={417}
                    priority
                    sizes="(max-width: 640px) 160px, 240px"
                    className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,174,239,0.22)]"
                  />
                </div>
              </div>

            </div>

            {/* Subheadline (Mobile Only - Full width above buttons) */}
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block lg:hidden text-lg sm:text-xl text-slate-700 leading-relaxed font-normal my-[30px] sm:my-6"
            >
              {homeHero.subheadline}
            </motion.p>

            {/* Action CTAs (Full width below Headline + Image on Mobile) */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-2.5 sm:space-y-5"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full">
                {/* Primary Button */}
                <Link href={homeHero.primaryCtaHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <motion.span
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-4 text-xs sm:text-base font-semibold text-white bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] rounded-xl shadow-md shadow-[#00AEEF]/30 hover:shadow-[#00AEEF]/45 transition-all duration-300 group cursor-pointer text-center"
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
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-4 text-xs sm:text-base font-semibold text-[#001A2C] bg-white border border-slate-300 hover:border-[#00AEEF] rounded-xl backdrop-blur-md hover:bg-slate-50 shadow-sm transition-all duration-300 group cursor-pointer text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{homeHero.secondaryCta}</span>
                    <ArrowRight className="w-4 h-4 ml-2 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.span>
                </Link>
              </div>

              {/* Tertiary Link */}
              <div className="pt-0.5">
                <Link href={homeHero.tertiaryCtaHref} className="inline-flex items-center gap-2 text-[#001A2C] hover:text-[#00AEEF] text-xs sm:text-base font-medium group transition-colors">
                  <span>{homeHero.tertiaryCta}</span>
                  <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border border-[#00AEEF]/40 bg-[#00AEEF]/10 flex items-center justify-center group-hover:bg-[#00AEEF] group-hover:text-white transition-colors p-1 text-[#00AEEF]">
                    <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Visual Illustration Section (Desktop Right Column) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 relative w-full items-center justify-center py-2 lg:py-0">
            
            {/* Main Visual Image (banner-hero2.png - Phone & Social Media Illustration) */}
            <div className="relative z-20 w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[480px] md:max-w-lg lg:max-w-2xl mx-auto">
              <Image
                src="/images/banner-hero2.webp"
                alt="Promedia Ecosystem - Web & Mobile Platform"
                width={950}
                height={760}
                sizes="(max-width: 1024px) 0px, 640px"
                className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,174,239,0.28)] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}


