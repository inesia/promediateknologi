'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, type ReactNode } from 'react'
import {
  Globe,
  Camera,
  MonitorPlay,
  MessageCircle,
  Share2,
  ArrowRight,
  BarChart3,
} from 'lucide-react'
import Link from 'next/link'
import { homeDalamAngka } from '@/lib/homeContent'
import { socialPlatformStats } from '@/lib/dalamAngkaData'

function MediaCounter({ value }: { value: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { duration: 2500, bounce: 0 })
  const displayValue = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString('id-ID')
  )

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  return (
    <motion.span ref={ref} className="tabular-nums">
      {displayValue}
    </motion.span>
  )
}

const platformVisuals: Record<
  string,
  { icon: ReactNode; gradient: string; textColor: string }
> = {
  TikTok: {
    icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    gradient: 'from-gray-800 to-black',
    textColor: 'text-gray-800',
  },
  Instagram: {
    icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6" />,
    gradient: 'from-pink-500 to-purple-600',
    textColor: 'text-pink-600',
  },
  YouTube: {
    icon: <MonitorPlay className="w-5 h-5 sm:w-6 sm:h-6" />,
    gradient: 'from-red-500 to-red-700',
    textColor: 'text-red-600',
  },
  Facebook: {
    icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
    gradient: 'from-blue-600 to-blue-800',
    textColor: 'text-blue-700',
  },
  'X (Twitter)': {
    icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
    gradient: 'from-gray-700 to-gray-900',
    textColor: 'text-gray-800',
  },
}

export default function EcosystemStats() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const { primaryStats } = homeDalamAngka

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-[#001A2C] overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 174, 239, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 174, 239, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header — navy */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/30 mb-6">
            <BarChart3 className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-[10px] sm:text-xs font-bold text-[#00AEEF] uppercase tracking-wide">
              {homeDalamAngka.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-2">
            Promedia{' '}
            <span className="inline-block px-2 sm:px-3 py-0.5 rounded-md border border-[#00AEEF]/50 text-[#00AEEF]">
              {homeDalamAngka.titleAccent}
            </span>{' '}
            Angka
          </h2>
        </motion.div>

        {/* Panel konten — layout mockup klien */}
        <motion.div
          className="rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xl shadow-black/20 overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-6 sm:pb-8">
            <p className="text-center text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto px-4 py-4 sm:py-5 rounded-xl border border-slate-200 bg-white/80">
              {homeDalamAngka.description}
            </p>

            {/* Primary stats — centered */}
            <div className="mt-10 sm:mt-12 space-y-10 sm:space-y-12 text-center">
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {primaryStats.mediaLabel}
                </p>
                <div className="flex flex-wrap items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] tabular-nums">
                    <MediaCounter value={1154} />
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#00AEEF]">
                    {primaryStats.mediaSuffix}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {primaryStats.viewsLabel}
                </p>
                <div className="flex flex-wrap items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C]">
                    {primaryStats.viewsValue}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#00AEEF]">
                    {primaryStats.viewsSuffix}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2 font-medium">{primaryStats.viewsFootnote}</p>
              </div>
            </div>
          </div>

          {/* Social platform grid — 2 kolom seperti mockup */}
          <div className="px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {socialPlatformStats.map((stat, index) => {
                const visual = platformVisuals[stat.platform]
                return (
                  <motion.div
                    key={stat.platform}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${visual.gradient} shadow-md`}
                        >
                          {visual.icon}
                        </div>
                        <h3 className="font-bold text-[#001A2C] text-sm sm:text-base truncate">
                          {stat.platform}
                        </h3>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-500 shrink-0">
                        {stat.accounts} Akun
                      </span>
                    </div>
                    <div className={`space-y-3 ${stat.views ? 'sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0' : ''}`}>
                      <div>
                        <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                          Followers
                        </p>
                        <p className={`text-base sm:text-lg font-black ${visual.textColor} tabular-nums`}>
                          {stat.followers}
                        </p>
                      </div>
                      {stat.views && (
                        <div>
                          <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                            Views
                          </p>
                          <p className="text-base sm:text-lg font-black text-[#001A2C] tabular-nums">
                            {stat.views}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="px-5 sm:px-8 lg:px-12 pb-8 sm:pb-10 lg:pb-12">
            <Link href={homeDalamAngka.ctaHref} className="block max-w-2xl mx-auto">
              <motion.span
                className="btn-shimmer flex items-center justify-center gap-3 w-full px-6 py-4 sm:py-5 bg-[#00AEEF] text-white font-black text-sm sm:text-base rounded-xl shadow-lg shadow-[#00AEEF]/35 hover:bg-[#33c1ff] transition-colors relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <BarChart3 className="w-5 h-5 shrink-0" />
                {homeDalamAngka.cta}
                <ArrowRight className="w-5 h-5 shrink-0" />
              </motion.span>
            </Link>
            <p className="text-center text-xs sm:text-sm text-slate-500 mt-4">
              {homeDalamAngka.ctaFootnote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
