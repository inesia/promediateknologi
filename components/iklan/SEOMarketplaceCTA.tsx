'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Link2, TrendingUp } from 'lucide-react'

export default function SEOMarketplaceCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00AEEF]/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-full mb-6">
                <Link2 className="w-4 h-4 text-[#00AEEF]" />
                <span className="text-sm font-semibold text-[#00AEEF]">
                  SEO Marketplace
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6 leading-tight">
                Butuh Backlink Berkualitas?
              </h2>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Akses marketplace backlink self-service dengan 1.000+ media premium terverifikasi. Tingkatkan ranking SEO website Anda dengan mudah.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#00AEEF] flex-shrink-0" />
                  <span className="text-slate-700">High-authority backlinks dari media terverifikasi</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#00AEEF] flex-shrink-0" />
                  <span className="text-slate-700">Self-service platform yang mudah digunakan</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#00AEEF] flex-shrink-0" />
                  <span className="text-slate-700">Transparan dengan metrics DA, PA, DR lengkap</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href="/seo-marketplace"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Kunjungi SEO Marketplace</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00AEEF]/10 to-[#2D74B3]/10 rounded-2xl p-8 border border-[#00AEEF]/20">
                {/* Mockup Dashboard Preview */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  {/* Table Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                    <div className="h-4 bg-slate-300 rounded w-32" />
                    <div className="h-4 bg-slate-300 rounded w-24" />
                  </div>

                  {/* Table Rows */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] rounded" />
                          <div className="h-3 bg-slate-200 rounded w-24" />
                        </div>
                        <div className="flex gap-2">
                          <div className="h-5 w-12 bg-green-100 rounded" />
                          <div className="h-5 w-12 bg-blue-100 rounded" />
                        </div>
                        <div className="h-3 bg-slate-200 rounded w-16" />
                      </div>
                    ))}
                  </div>

                  {/* CTA Badge */}
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-center gap-2 px-4 py-2 bg-[#00AEEF]/10 rounded-lg">
                      <Link2 className="w-4 h-4 text-[#00AEEF]" />
                      <span className="text-sm font-semibold text-[#00AEEF]">
                        Explore Marketplace
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] rounded-full shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
