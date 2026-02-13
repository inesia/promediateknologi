'use client'

import { motion } from 'framer-motion'
import { Landmark } from 'lucide-react'

export default function KoperasiHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#001A2C] overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00AEEF]/20 rounded-full border border-[#00AEEF]/30 mb-8">
              <Landmark className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-sm font-semibold text-[#00AEEF]">
                Ekonomi Gotong Royong
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Koperasi Jasa Mitra Promedia Sejahtera
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              Koperasi bagi mitra dalam ekosistem Promedia untuk memperkuat kolaborasi, kesejahteraan anggota, serta mendorong pertumbuhan ekonomi bersama.
            </p>

            {/* Visual Element */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent max-w-xs mx-auto opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
