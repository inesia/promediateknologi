'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Share2, Video } from 'lucide-react'
import Link from 'next/link'

// CMS Dashboard Mockup Component
function CMSDashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glassmorphism Container */}
      <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl p-6 overflow-hidden">
        {/* Browser Bar */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="flex-1 h-8 bg-slate-100 rounded-lg ml-4 flex items-center px-4">
            <span className="text-xs text-slate-500">promedia.id/dashboard</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="space-y-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Articles', value: '1,234', color: 'from-[#00AEEF] to-[#2D74B3]' },
              { label: 'Views', value: '45.6K', color: 'from-[#2D74B3] to-[#00AEEF]' },
              { label: 'Revenue', value: 'Rp 12M', color: 'from-[#00AEEF] to-[#2D74B3]' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br bg-slate-50 rounded-xl p-3 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                <div className="text-base font-bold text-[#001A2C]">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Content List */}
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="bg-slate-50 rounded-lg border border-slate-200 p-3 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-2 bg-slate-300 rounded w-3/4 mb-1" />
                  <div className="h-2 bg-slate-200 rounded w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl pointer-events-none" />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00AEEF]/20 to-[#2D74B3]/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

// Digital Pen Illustration Component
function DigitalPenIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto h-[400px]">
      {/* Floating Pen */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="relative w-32 h-32">
          {/* Pen Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] rounded-full shadow-2xl flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          {/* Glow */}
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
        </div>
      </motion.div>

      {/* Flowing Text Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${15 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent rounded-full" />
        </motion.div>
      ))}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00AEEF]/30 rounded-full"
          style={{
            left: `${20 + (i % 4) * 20}%`,
            top: `${20 + Math.floor(i / 4) * 30}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  )
}

// Social Media Icons Visualization
function SocialMediaVisualization() {
  const socialIcons = [
    { name: 'Facebook', color: '#1877F2', delay: 0 },
    { name: 'Instagram', color: '#E4405F', delay: 0.2 },
    { name: 'Twitter', color: '#1DA1F2', delay: 0.4 },
    { name: 'TikTok', color: '#000000', delay: 0.6 },
    { name: 'YouTube', color: '#FF0000', delay: 0.8 },
    { name: 'LinkedIn', color: '#0077B5', delay: 1.0 },
  ]

  return (
    <div className="relative w-full max-w-lg mx-auto h-[400px] flex items-center justify-start">
      <div className="flex flex-col gap-6">
        {socialIcons.map((social, index) => (
          <motion.div
            key={social.name}
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: social.delay }}
          >
            {/* Icon Circle */}
            <motion.div
              className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
              style={{ backgroundColor: social.color }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: social.delay,
              }}
              whileHover={{ scale: 1.15 }}
            >
              <Share2 className="w-8 h-8 text-white" />
            </motion.div>
            
            {/* Platform Name */}
            <motion.span
              className="text-lg font-semibold text-[#001A2C]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: social.delay + 0.3 }}
            >
              {social.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Video Production Visualization
function VideoProductionVisualization() {
  return (
    <div className="relative w-full max-w-lg mx-auto h-[400px]">
      {/* Video Player Mockup */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-40 bg-gradient-to-br from-[#001A2C] to-[#2D74B3] rounded-xl shadow-2xl overflow-hidden"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Video Frame */}
        <div className="relative w-full h-full bg-gradient-to-br from-[#00AEEF]/20 to-[#2D74B3]/20 flex items-center justify-center">
          {/* Play Button */}
          <motion.div
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <Video className="w-8 h-8 text-white ml-1" fill="white" />
          </motion.div>

          {/* Video Waves */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{
                bottom: `${i * 8}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3 flex items-center gap-2">
          <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#00AEEF] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '65%' }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            />
          </div>
          <div className="text-xs text-white/80">2:45</div>
        </div>
      </motion.div>

      {/* Floating Video Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-10 bg-gradient-to-br from-[#00AEEF]/20 to-[#2D74B3]/20 rounded-lg backdrop-blur-sm border border-white/10"
          style={{
            left: `${15 + (i % 3) * 30}%`,
            top: `${10 + Math.floor(i / 3) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        >
          {/* Video thumbnail lines */}
          <div className="p-2 space-y-1">
            <div className="h-1 bg-white/30 rounded w-full" />
            <div className="h-1 bg-white/20 rounded w-2/3" />
          </div>
        </motion.div>
      ))}

      {/* Light rays */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-[#00AEEF]/30 via-transparent to-transparent"
          style={{
            rotate: `${i * 90}deg`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

interface FeatureSectionProps {
  title: string
  description: string
  linkHref: string
  linkText: string
  visual: React.ReactNode
  reverse?: boolean
  index: number
  isInView: boolean
}

function FeatureSection({
  title,
  description,
  linkHref,
  linkText,
  visual,
  reverse = false,
  index,
  isInView,
}: FeatureSectionProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
      {/* Visual */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        {visual}
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -50 : 50 }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
      >
        <h2 className="text-4xl lg:text-5xl font-black text-[#001A2C] mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-slate-600 mb-6 max-w-[500px] leading-relaxed">
          {description}
        </p>
        <Link
          href={linkHref}
          className="inline-flex items-center gap-2 text-[#00AEEF] hover:text-[#2D74B3] font-semibold transition-colors group"
        >
          <span>{linkText}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  )
}

export default function EcosystemServices() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const features = [
    {
      title: 'Mediapreneur',
      description:
        'Bangun bisnis media Anda sendiri dengan infrastruktur teknologi enterprise dan dukungan monetisasi penuh.',
      linkHref: '/program/mediapreneur',
      linkText: 'Pelajari Selengkapnya',
      visual: <CMSDashboardMockup />,
      reverse: false,
    },
    {
      title: 'Contentpreneur',
      description:
        'Ubah tulisan menjadi pendapatan. Platform terbaik untuk kreator konten berkembang dan terhubung dengan brand.',
      linkHref: '/program/contentpreneur',
      linkText: 'Pelajari Selengkapnya',
      visual: <DigitalPenIllustration />,
      reverse: true,
    },
    {
      title: 'Socmedpreneur',
      description:
        'Optimasi dan monetisasi media sosial dengan tools dan analytics lengkap untuk mengembangkan reach dan engagement.',
      linkHref: '/program/socmedpreneur',
      linkText: 'Pelajari Selengkapnya',
      visual: <SocialMediaVisualization />,
      reverse: false,
    },
    {
      title: 'Videopreneur',
      description:
        'Platform streaming profesional untuk memperkaya inventori video dan gambar bergerak dengan kualitas broadcast.',
      linkHref: '/program/videopreneur',
      linkText: 'Pelajari Selengkapnya',
      visual: <VideoProductionVisualization />,
      reverse: true,
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="px-4 py-2 bg-[#00AEEF]/5 border border-[#00AEEF]/20 rounded-full">
              <span className="text-xs font-semibold text-[#00AEEF] tracking-wide uppercase">
                Layanan & Ekosistem
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Solusi Lengkap untuk{' '}
            <span className="bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] bg-clip-text text-transparent">
              Media Digital
            </span>
          </motion.h2>
        </motion.div>

        {/* Feature Sections */}
        <div className="space-y-32 lg:space-y-40">
          {features.map((feature, index) => (
            <FeatureSection
              key={index}
              {...feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
