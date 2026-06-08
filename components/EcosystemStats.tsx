'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { ArrowRight, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { homeDalamAngka } from '@/lib/homeContent'
import { socialPlatformStats } from '@/lib/dalamAngkaData'
import { SocialBrandIcon } from '@/components/icons/SocialBrandIcons'

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
  { iconBg: string; textColor: string }
> = {
  TikTok: {
    iconBg: 'bg-black text-white',
    textColor: 'text-gray-900',
  },
  Instagram: {
    iconBg: 'bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white',
    textColor: 'text-pink-600',
  },
  YouTube: {
    iconBg: 'bg-[#FF0000] text-white',
    textColor: 'text-red-600',
  },
  Facebook: {
    iconBg: 'bg-[#1877F2] text-white',
    textColor: 'text-blue-700',
  },
  'X (Twitter)': {
    iconBg: 'bg-black text-white',
    textColor: 'text-gray-800',
  },
}

const TWITTER_PLATFORM = 'X (Twitter)'

export default function EcosystemStats() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const { primaryStats } = homeDalamAngka

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-20 lg:py-28 bg-[#001A2C] overflow-hidden">
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
        <motion.div
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/30 mb-4 sm:mb-6">
            <BarChart3 className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-[10px] sm:text-xs font-bold text-[#00AEEF] uppercase tracking-wide">
              {homeDalamAngka.badge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-2">
            Promedia{' '}
            <span className="inline-block px-2 sm:px-3 py-0.5 rounded-md border border-[#00AEEF]/50 text-[#00AEEF]">
              {homeDalamAngka.titleAccent}
            </span>{' '}
            Angka
          </h2>
        </motion.div>

        <motion.div
          className="rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xl shadow-black/20 overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="px-4 sm:px-8 lg:px-12 pt-5 sm:pt-10 pb-4 sm:pb-8">
            <p className="text-center text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto px-3 py-3 sm:px-4 sm:py-5 rounded-xl border border-slate-200 bg-white/80">
              {homeDalamAngka.description}
            </p>

            {/* Primary stats — 2 kolom */}
            <div className="mt-6 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-8 max-w-3xl mx-auto">
              <div className="text-center rounded-xl border border-slate-200 bg-white px-2 py-4 sm:px-6 sm:py-6">
                <p className="text-[10px] sm:text-sm font-bold text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2">
                  {primaryStats.mediaLabel}
                </p>
                <div className="flex flex-wrap items-baseline justify-center gap-1 sm:gap-2">
                  <span className="text-2xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] tabular-nums leading-none">
                    <MediaCounter value={1154} />
                  </span>
                  <span className="text-sm sm:text-2xl font-bold text-[#00AEEF]">
                    {primaryStats.mediaSuffix}
                  </span>
                </div>
              </div>
              <div className="text-center rounded-xl border border-slate-200 bg-white px-2 py-4 sm:px-6 sm:py-6">
                <p className="text-[10px] sm:text-sm font-bold text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2">
                  {primaryStats.viewsLabel}
                </p>
                <div className="flex flex-wrap items-baseline justify-center gap-1 sm:gap-2">
                  <span className="text-2xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] leading-none">
                    {primaryStats.viewsValue}
                  </span>
                  <span className="text-sm sm:text-2xl font-bold text-[#00AEEF]">
                    {primaryStats.viewsSuffix}
                  </span>
                </div>
                <p className="text-[9px] sm:text-xs text-slate-400 mt-1.5 sm:mt-2 font-medium leading-snug">
                  {primaryStats.viewsFootnote}
                </p>
              </div>
            </div>
          </div>

          {/* Social platform grid */}
          <div className="px-3 sm:px-6 lg:px-10 pb-5 sm:pb-10">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 max-w-4xl mx-auto">
              {socialPlatformStats.map((stat, index) => {
                const visual = platformVisuals[stat.platform]
                const isTwitter = stat.platform === TWITTER_PLATFORM
                const hasViews = Boolean(stat.views)

                return (
                  <motion.div
                    key={stat.platform}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
                    className={`bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${
                      isTwitter ? 'col-span-2' : ''
                    }`}
                  >
                    <div className="p-3 sm:p-5">
                      {isTwitter ? (
                        <div className="flex items-center justify-between gap-3 sm:gap-6">
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                            <div
                              className={`w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm ${visual.iconBg}`}
                            >
                              <SocialBrandIcon
                                platform={stat.platform}
                                className="w-4 h-4 sm:w-5 sm:h-5"
                              />
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-bold text-[#001A2C] text-xs sm:text-base leading-tight">
                                {stat.platform}
                              </h3>
                              <span className="text-[10px] sm:text-xs font-semibold text-slate-500">
                                {stat.accounts} Akun
                              </span>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">
                              Followers
                            </p>
                            <p
                              className={`text-sm sm:text-lg font-black tabular-nums leading-tight ${visual.textColor}`}
                            >
                              {stat.followers}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                              <div
                                className={`w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm ${visual.iconBg}`}
                              >
                                <SocialBrandIcon
                                  platform={stat.platform}
                                  className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                              </div>
                              <h3 className="font-bold text-[#001A2C] text-xs sm:text-base leading-tight truncate">
                                {stat.platform}
                              </h3>
                            </div>
                            <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-slate-600">
                              {stat.accounts} Akun
                            </span>
                          </div>
                          <div
                            className={`pt-3 grid gap-2 sm:gap-3 ${hasViews ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}
                          >
                            <div>
                              <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5 sm:mb-1">
                                Followers
                              </p>
                              <p
                                className={`text-sm sm:text-lg font-black tabular-nums leading-tight ${visual.textColor}`}
                              >
                                {stat.followers}
                              </p>
                            </div>
                            {hasViews && (
                              <div>
                                <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5 sm:mb-1">
                                  Views
                                </p>
                                <p className="text-sm sm:text-lg font-black text-[#001A2C] tabular-nums leading-tight">
                                  {stat.views}
                                </p>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="px-4 sm:px-8 lg:px-12 pb-5 sm:pb-10 lg:pb-12">
            <Link href={homeDalamAngka.ctaHref} className="block max-w-2xl mx-auto">
              <motion.span
                className="btn-shimmer flex items-center justify-center gap-2 sm:gap-3 w-full px-4 py-3 sm:px-6 sm:py-5 bg-[#00AEEF] text-white font-black text-xs sm:text-base rounded-xl shadow-lg shadow-[#00AEEF]/35 hover:bg-[#33c1ff] transition-colors relative overflow-hidden"
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
