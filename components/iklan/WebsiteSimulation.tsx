'use client'

import { motion } from 'framer-motion'

export default function WebsiteSimulation() {
  return (
    <div className="relative bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden">
      {/* Browser Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 border-b border-slate-200">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="flex-1 h-6 bg-white rounded ml-4 flex items-center px-3 text-xs text-slate-500">
          promedia.id/berita/teknologi-terbaru
        </div>
      </div>

      {/* Website Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00AEEF] to-[#2D74B3] rounded-lg" />
            <div>
              <div className="h-3 bg-slate-300 rounded w-32 mb-1" />
              <div className="h-2 bg-slate-200 rounded w-24" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-slate-200 rounded" />
            <div className="w-8 h-8 bg-slate-200 rounded" />
          </div>
        </div>

        {/* Display Banner Ad - Top */}
        <motion.div
          className="mb-6 p-4 bg-gradient-to-r from-[#00AEEF] to-[#2D74B3] rounded-lg flex items-center justify-center min-h-[100px] relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Ad Label */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black/20 backdrop-blur-sm rounded text-xs text-white font-semibold">
            Iklan
          </div>
          
          {/* Ad Content */}
          <div className="text-center text-white">
            <div className="text-lg font-bold mb-1">Promedia Ad Solutions</div>
            <div className="text-sm opacity-90">Jangkau Jutaan Pembaca Indonesia</div>
          </div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>

        {/* Article Content */}
        <div className="space-y-4 mb-6">
          <div className="h-4 bg-slate-300 rounded w-3/4" />
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-5/6" />
          
          {/* Article Image */}
          <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg my-4" />
          
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-4/5" />
        </div>

        {/* Display Banner Ad - Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main Content */}
          <div className="md:col-span-3 space-y-3">
            <div className="h-3 bg-slate-200 rounded w-full" />
            <div className="h-3 bg-slate-200 rounded w-full" />
            <div className="h-3 bg-slate-200 rounded w-3/4" />
          </div>

          {/* Sidebar with Banner Ad */}
          <div className="md:col-span-1">
            <motion.div
              className="p-3 bg-gradient-to-b from-[#00AEEF] to-[#2D74B3] rounded-lg flex flex-col items-center justify-center min-h-[200px] text-white text-center relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Ad Label */}
              <div className="absolute top-2 right-2 px-2 py-1 bg-black/20 backdrop-blur-sm rounded text-xs text-white font-semibold">
                Iklan
              </div>
              
              <div className="text-sm font-bold mb-1">Promedia</div>
              <div className="text-xs opacity-90">Ad Solutions</div>
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200">
          <div className="h-2 bg-slate-200 rounded w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  )
}
