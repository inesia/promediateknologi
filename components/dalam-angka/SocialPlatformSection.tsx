'use client'

import { motion } from 'framer-motion'
import { Share2 } from 'lucide-react'
import { socialPlatformStats } from '@/lib/dalamAngkaData'
import { formatCompactStat } from '@/lib/formatNumber'
import { SocialBrandIcon } from '@/components/icons/SocialBrandIcons'

const platformVisuals: Record<string, { iconBg: string; textColor: string }> = {
  TikTok: { iconBg: 'bg-black text-white', textColor: 'text-gray-900' },
  Instagram: {
    iconBg: 'bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white',
    textColor: 'text-pink-600',
  },
  YouTube: { iconBg: 'bg-[#FF0000] text-white', textColor: 'text-red-600' },
  Facebook: { iconBg: 'bg-[#1877F2] text-white', textColor: 'text-blue-700' },
  'X (Twitter)': { iconBg: 'bg-black text-white', textColor: 'text-gray-800' },
}

export default function SocialPlatformSection() {
  return (
    <section className="py-16 lg:py-4 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <Share2 className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wide">
              Social Media Reach
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001A2C] mb-3">
            Jangkauan Media Sosial
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Followers dan views terkonsolidasi dari jaringan akun media sosial ekosistem Promedia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {socialPlatformStats.map((stat, index) => {
            const visual = platformVisuals[stat.platform]
            return (
              <motion.div
                key={stat.platform}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5 sm:p-6"
              >
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                  <div
                    className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center shadow-sm ${visual.iconBg}`}
                  >
                    <SocialBrandIcon platform={stat.platform} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001A2C]">{stat.platform}</h3>
                    {/* <p className="text-xs font-semibold text-slate-500">{stat.accounts} Akun</p> */}
                  </div>
                </div>
                <div className={`grid gap-4 ${stat.views !== null ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                      Followers
                    </p>
                    <p className={`text-xl font-black tabular-nums ${visual.textColor}`}>
                      {formatCompactStat(stat.followers)}
                    </p>
                  </div>
                  {stat.views !== null && (
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                        Views
                      </p>
                      <p className="text-xl font-black text-[#001A2C] tabular-nums">
                        {formatCompactStat(stat.views)}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
