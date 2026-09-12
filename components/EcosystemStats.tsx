'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { homeDalamAngka } from '@/lib/homeContent'
import { socialPlatformStats } from '@/lib/dalamAngkaData'
import { formatCompactStat } from '@/lib/formatNumber'
import { SocialBrandIcon } from '@/components/icons/SocialBrandIcons'

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
    <section ref={sectionRef} className="relative py-8 sm:py-20 lg:py-28 bg-[#001A2C] overflow-hidden w-full">
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

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mx-auto mb-4 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-[#00AEEF]/15 border border-[#00AEEF]/30 mb-3 sm:mb-6">
            <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00AEEF]" />
            <span className="text-[9px] sm:text-xs font-bold text-[#00AEEF] uppercase tracking-wide">
              {homeDalamAngka.badge}
            </span>
          </div>
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-1 sm:mb-2">
            Promedia{' '}
            <span className="inline-block px-1.5 sm:px-3 py-0.5 rounded-md border border-[#00AEEF]/50 text-[#00AEEF]">
              {homeDalamAngka.titleAccent}
            </span>{' '}
            Angka
          </h2>
        </motion.div>

        <motion.div
          className="rounded-xl sm:rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xl shadow-black/20 overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="px-3 sm:px-8 lg:px-12 pt-4 sm:pt-10 pb-3 sm:pb-8">
            <p className="text-center text-[11px] sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto px-2.5 py-2 sm:px-4 sm:py-5 rounded-xl border border-slate-200 bg-white/80">
              {homeDalamAngka.description}
            </p>

            {/* 3 Columns Clean Stat Bar on Mobile & Desktop */}
            <div className="mt-3 sm:mt-12 grid grid-cols-3 gap-1.5 sm:gap-6 mx-auto">
              <div className="text-center rounded-lg sm:rounded-xl border border-slate-200 bg-white px-1.5 py-2.5 sm:px-4 sm:py-6">
                <p className="text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-tight sm:tracking-widest mb-1 sm:mb-2 truncate">
                  Publisher Partner
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-base sm:text-4xl lg:text-5xl font-black text-[#001A2C] leading-none">
                    1.200+
                  </span>
                </div>
              </div>
              <div className="text-center rounded-lg sm:rounded-xl border border-slate-200 bg-white px-1.5 py-2.5 sm:px-4 sm:py-6">
                <p className="text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-tight sm:tracking-widest mb-1 sm:mb-2 truncate">
                  Provinsi
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-base sm:text-4xl lg:text-5xl font-black text-[#001A2C] leading-none">
                    36
                  </span>
                </div>
              </div>
              <div className="text-center rounded-lg sm:rounded-xl border border-slate-200 bg-white px-1.5 py-2.5 sm:px-4 sm:py-6">
                <p className="text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-tight sm:tracking-widest mb-1 sm:mb-2 truncate">
                  Kabupaten / Kota
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-base sm:text-4xl lg:text-5xl font-black text-[#001A2C] leading-none">
                    240+
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2.5 sm:px-6 lg:px-10 pb-4 sm:pb-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4 mx-auto">
              {socialPlatformStats.map((stat, index) => {
                const visual = platformVisuals[stat.platform]
                const isTwitter = stat.platform === TWITTER_PLATFORM
                const hasViews = stat.views !== null
                const followersDisplay = formatCompactStat(stat.followers)
                const viewsDisplay = stat.views !== null ? formatCompactStat(stat.views) : null

                return (
                  <motion.div
                    key={stat.platform}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
                    className={`bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${isTwitter ? 'col-span-2' : ''
                      }`}
                  >
                    <div className="p-3 sm:p-5">
                      {isTwitter ? (
                        <div className="flex items-center justify-between gap-3 sm:gap-6">
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                            <div
                              className={`w-8 h-8 sm:w-11 sm:h-11 shrink-0 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm ${visual.iconBg}`}
                            >
                              <SocialBrandIcon
                                platform={stat.platform}
                                className="w-3.5 h-3.5 sm:w-5 sm:h-5"
                              />
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-bold text-[#001A2C] text-xs sm:text-base leading-tight">
                                {stat.platform}
                              </h3>
                              {/* <span className="text-[10px] sm:text-xs font-semibold text-slate-500">
                                {stat.accounts} Akun
                              </span> */}
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">
                              Followers
                            </p>
                            <p
                              className={`text-xs sm:text-lg font-black tabular-nums leading-tight ${visual.textColor}`}
                            >
                              {followersDisplay}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center justify-between gap-2 pb-2.5 sm:pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                              <div
                                className={`w-8 h-8 sm:w-11 sm:h-11 shrink-0 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm ${visual.iconBg}`}
                              >
                                <SocialBrandIcon
                                  platform={stat.platform}
                                  className="w-3.5 h-3.5 sm:w-5 sm:h-5"
                                />
                              </div>
                              <h3 className="font-bold text-[#001A2C] text-xs sm:text-base leading-tight truncate">
                                {stat.platform}
                              </h3>
                            </div>
                            {/* <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-slate-600">
                              {stat.accounts} Akun
                            </span> */}
                          </div>
                          <div
                            className={`pt-2.5 sm:pt-3 grid gap-2 sm:gap-3 ${hasViews ? 'grid-cols-2' : 'grid-cols-1'}`}
                          >
                            <div>
                              <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5 sm:mb-1">
                                Followers
                              </p>
                              <p
                                className={`text-xs sm:text-lg font-black tabular-nums leading-tight ${visual.textColor}`}
                              >
                                {followersDisplay}
                              </p>
                            </div>
                            {viewsDisplay && (
                              <div className="text-right">
                                <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5 sm:mb-1">
                                  Views
                                </p>
                                <p className="text-xs sm:text-lg font-black text-[#001A2C] tabular-nums leading-tight">
                                  {viewsDisplay}
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

          <div className="px-3 sm:px-8 lg:px-12 pb-4 sm:pb-10 lg:pb-12">
            <Link href={homeDalamAngka.ctaHref} className="block max-w-2xl mx-auto">
              <span className="flex items-center justify-center gap-2 sm:gap-3 w-full px-4 py-2.5 sm:px-6 sm:py-5 bg-[#0077B6] text-white font-black text-xs sm:text-base rounded-xl shadow-lg shadow-[#0077B6]/35 hover:bg-[#005F92] transition-colors">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                {homeDalamAngka.cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </span>
            </Link>
            <p className="text-center text-[10px] sm:text-sm text-slate-500 mt-2 sm:mt-4">
              {homeDalamAngka.ctaFootnote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
