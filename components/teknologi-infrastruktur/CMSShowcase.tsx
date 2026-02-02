'use client'

import { motion } from 'framer-motion'
import { Bot, Smartphone, LayoutGrid } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Bot,
    title: 'AI-Driven',
    desc: 'Big Data Mining & Generative AI integration.',
  },
  {
    icon: Smartphone,
    title: 'User Friendly',
    desc: 'Dashboard mudah digunakan di berbagai perangkat (Mobile/Desktop).',
  },
  {
    icon: LayoutGrid,
    title: 'Multi-Format',
    desc: 'Mendukung artikel, video, dan integrasi multi-platform.',
  },
]

export default function CMSShowcase() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider">
              The Experience
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001A2C] mt-2 mb-6 leading-tight">
              CMS Promedia: Bukan Sekadar Dashboard.
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-xl">
              Platform manajemen konten yang dirancang untuk skala enterprise—dengan intelijen AI dan kemudahan akses di mana saja.
            </p>
            <ul className="space-y-6">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.li
                    key={f.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#001A2C] text-lg">{f.title}</h3>
                      <p className="text-slate-600">{f.desc}</p>
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>

          {/* Right: Laptop mockup with CMS dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Laptop frame */}
              <div className="relative rounded-lg border-4 border-slate-300 bg-slate-200 shadow-2xl overflow-hidden">
                <div className="aspect-video bg-slate-800 p-2">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 h-8 px-2 rounded-t bg-slate-700/80">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 mx-4 py-1 rounded bg-slate-600/60 text-slate-400 text-xs truncate">
                      app.roweb.promedia.id/dashboard
                    </div>
                  </div>
                  {/* Mock dashboard content */}
                  <div className="mt-2 grid grid-cols-4 gap-1.5">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="h-12 rounded bg-slate-700/80"
                        style={{ opacity: 0.6 + (i % 3) * 0.1 }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 h-16 rounded bg-slate-700/60" />
                  <div className="mt-2 flex gap-2">
                    <div className="flex-1 h-20 rounded bg-[#00AEEF]/20 border border-[#00AEEF]/30" />
                    <div className="w-1/3 h-20 rounded bg-slate-700/60" />
                  </div>
                </div>
                <div className="h-4 bg-slate-300 rounded-b" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-2 rounded-b-full bg-slate-400 shadow-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
