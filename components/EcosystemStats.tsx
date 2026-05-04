'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Play, Camera, MonitorPlay, MessageCircle, Share2 } from 'lucide-react'

// Dummy icons for social media platforms since we use Lucide
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const InstagramIcon = () => <Camera className="w-6 h-6" />
const YoutubeIcon = () => <MonitorPlay className="w-6 h-6" />
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
)

const influencerStats = [
  {
    platform: 'TikTok',
    icon: <TikTokIcon />,
    followers: '27.612.594',
    views: '911.946.685',
    accounts: 306,
    color: 'from-gray-800 to-black',
    textColor: 'text-gray-800',
  },
  {
    platform: 'Instagram',
    icon: <InstagramIcon />,
    followers: '2.361.412',
    views: '343.860.805',
    accounts: 158,
    color: 'from-pink-500 to-purple-600',
    textColor: 'text-pink-600',
  },
  {
    platform: 'YouTube',
    icon: <YoutubeIcon />,
    followers: '5.723.665',
    views: null, // Not provided
    accounts: 576,
    color: 'from-red-500 to-red-700',
    textColor: 'text-red-600',
  },
  {
    platform: 'Facebook',
    icon: <FacebookIcon />,
    followers: '3.827.753',
    views: null, // Not provided
    accounts: 573,
    color: 'from-blue-600 to-blue-800',
    textColor: 'text-blue-700',
  },
  {
    platform: 'X (Twitter)',
    icon: <XIcon />,
    followers: '558.329',
    views: null, // Not provided
    accounts: 783,
    color: 'from-gray-700 to-gray-900',
    textColor: 'text-gray-800',
  },
]

export default function EcosystemStats() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full">
              <span className="text-xs font-semibold text-[#00AEEF] tracking-wide uppercase">
                Data Ekosistem Promedia
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#001A2C] mb-4">
            Scale yang Kami Bangun
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Angka nyata dari ekosistem digital terbesar yang terus berkembang bersama Mediapreneurs dan Creators.
          </p>
        </motion.div>

        {/* Publisher Media Network */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#001A2C] to-[#2D74B3] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Publisher Media Network</h3>
                  <p className="text-blue-100/80 font-medium">Data Terverifikasi 2025</p>
                </div>
                <Globe className="w-16 h-16 text-white/20 absolute right-12 md:right-auto md:relative hidden sm:block" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="p-8 md:p-12 text-center md:text-left">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Jumlah Media</p>
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-5xl md:text-6xl font-black text-[#001A2C]">1.154</span>
                  <span className="text-xl font-bold text-[#00AEEF]">Publisher</span>
                </div>
              </div>
              <div className="p-8 md:p-12 text-center md:text-left">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Total Views</p>
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-5xl md:text-6xl font-black text-[#001A2C]">1.366</span>
                  <span className="text-xl font-bold text-[#00AEEF]">Billion+</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 font-medium">*1.366.125.327 views (Last 12 Month)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Influencer Media Network */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#001A2C]">Influencer Media Network</h3>
              <p className="text-slate-500 font-medium mt-1">Report Data Maret 2026 (1 Bulan)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {influencerStats.map((stat, index) => (
              <motion.div
                key={stat.platform}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${stat.color} shadow-md`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001A2C]">{stat.platform}</h4>
                    <p className="text-xs text-slate-500">{stat.accounts} Akun/Channel</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Followers / Subs</p>
                    <p className={`text-2xl font-black ${stat.textColor}`}>{stat.followers}</p>
                  </div>
                  
                  {stat.views && (
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Total Views</p>
                      <p className="text-xl font-bold text-[#001A2C]">{stat.views}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
