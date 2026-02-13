'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ClientLogoSlider() {
  const clients = [
    { id: 1, name: 'Client 1', image: '/images/clients/1.png' },
    { id: 2, name: 'Client 2', image: '/images/clients/2.png' },
    { id: 3, name: 'Client 3', image: '/images/clients/3.png' },
    { id: 4, name: 'Client 4', image: '/images/clients/4.png' },
    { id: 5, name: 'Client 5', image: '/images/clients/5.png' },
    { id: 6, name: 'Client 6', image: '/images/clients/6.png' },
    { id: 7, name: 'Client 7', image: '/images/clients/7.png' },
    { id: 8, name: 'Client 8', image: '/images/clients/8.png' },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001A2C] mb-6">
            Dipercaya oleh Berbagai Brand & Institusi
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dari brand nasional, lokal, hingga institusi publik, Promedia Group dipercaya sebagai mitra distribusi dan publikasi media.
          </p>
        </motion.div>
      </div>

      {/* Marquee Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-12 sm:gap-16 lg:gap-20 w-[200%]">
          <motion.div
            className="flex gap-12 sm:gap-16 lg:gap-20 items-center justify-around flex-shrink-0 min-w-full"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {clients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-slate-100 rounded-lg flex items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              >
                 <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-sm">
                  {client.name}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-12 sm:gap-16 lg:gap-20 items-center justify-around flex-shrink-0 min-w-full"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {clients.map((client, index) => (
              <div
                key={`${client.id}-${index}-dup`}
                className="flex-shrink-0 w-32 h-20 bg-slate-100 rounded-lg flex items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              >
                 <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-sm">
                  {client.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
