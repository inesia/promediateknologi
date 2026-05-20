'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { scrapedMitraData } from './mitra/mitraData'

function PartnerLogo({
  name,
  logo,
  index,
}: {
  name: string
  logo: string
  index: number
}) {
  return (
    <motion.div
      className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 8) * 0.05 }}
    >
      <motion.div className="relative w-full aspect-[3/2] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 hover:shadow-lg hover:shadow-slate-100 transition-shadow">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 50vw, 12vw"
          unoptimized
        />
      </motion.div>
    </motion.div>
  )
}

function PlaceholderPartner({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 8) * 0.05 }}
    >
      <motion.div className="relative w-full aspect-[3/2] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4">
        <span className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-tighter">
          {name}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default function LogoCloud() {
  const mediaPartners = scrapedMitraData

  const socialPartners = [
    'Social Media 1', 'Social Media 2', 'Social Media 3', 'Social Media 4',
    'Social Media 5', 'Social Media 6', 'Social Media 7', 'Social Media 8',
  ]

  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-black text-[#001A2C] mb-4">
            Ekosistem Media & Jaringan Kami
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Berkolaborasi dengan ribuan entitas media dan kreator di seluruh Indonesia.
          </p>
        </motion.div>

        <motion.div className="mb-20">
          <motion.div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-[#001A2C] flex items-center gap-2">
              <motion.div className="w-1.5 h-6 bg-[#00AEEF] rounded-full" />
              Media Partners
            </h3>
            <Link
              href="/mitra"
              className="text-sm font-semibold text-[#00AEEF] hover:underline flex items-center gap-1"
            >
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
            {mediaPartners.map((partner, index) => (
              <PartnerLogo
                key={partner.id}
                name={partner.name}
                logo={partner.logo}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-[#001A2C] flex items-center gap-2">
              <motion.div className="w-1.5 h-6 bg-[#2D74B3] rounded-full" />
              Social Media & Influencer
            </h3>
            <Link
              href="/mitra?category=social"
              className="text-sm font-semibold text-[#2D74B3] hover:underline flex items-center gap-1"
            >
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
            {socialPartners.map((partner, index) => (
              <PlaceholderPartner key={partner} name={partner} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
