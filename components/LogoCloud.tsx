'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { scrapedMitraData } from './mitra/mitraData'
import { socialPartnerData } from '@/lib/socialPartnerData'
import {
  HOME_FEATURED_MEDIA_PARTNER_IDS,
  HOME_FEATURED_SOCIAL_PARTNER_IDS,
} from '@/lib/homePartnerConfig'

const HOME_PARTNER_MOBILE_LIMIT = 6

function PartnerLogo({
  name,
  logo,
  index,
  className,
}: {
  name: string
  logo: string
  index: number
  className?: string
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className={`flex items-center justify-center transition-all duration-300 ${className ?? ''}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 8) * 0.05 }}
    >
      <div className="relative w-full aspect-[3/2] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 hover:shadow-lg hover:shadow-slate-100 transition-shadow overflow-hidden group">
        {logo ? (
          <>
            {!isLoaded && (
              <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-xl" />
            )}
            <Image
              src={logo}
              alt={name}
              fill
              className={`object-contain p-2 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`}
              sizes="(max-width: 768px) 50vw, 12vw"
              onLoad={() => setIsLoaded(true)}
              unoptimized
            />
          </>
        ) : (
          <span className="font-bold text-center text-slate-800 text-sm sm:text-base px-2 group-hover:scale-105 transition-transform duration-500">
            {name}
          </span>
        )}
      </div>
    </motion.div>
  )
}

function SectionViewAllLink({
  href,
  colorClass,
}: {
  href: string
  colorClass: string
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-semibold ${colorClass} hover:underline inline-flex items-center gap-1`}
    >
      Lihat Semua <ArrowRight className="w-4 h-4" />
    </Link>
  )
}

function getFeaturedPartners<T extends { id: number }>(
  allPartners: T[],
  featuredIds: number[]
): T[] {
  const byId = new Map(allPartners.map((p) => [p.id, p]))
  return featuredIds
    .map((id) => byId.get(id))
    .filter((p): p is T => p !== undefined)
}

export default function LogoCloud({ clients }: { clients: any[] }) {
  const mediaPartners = getFeaturedPartners(scrapedMitraData, HOME_FEATURED_MEDIA_PARTNER_IDS)
  const socialPartners = getFeaturedPartners(socialPartnerData, HOME_FEATURED_SOCIAL_PARTNER_IDS)

  return (
    <section className="relative py-20 lg:py-4 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {mediaPartners.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-[#001A2C] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#00AEEF] rounded-full shrink-0" aria-hidden />
                Publisher Media Network
              </h3>
              <div className="hidden md:block">
                <SectionViewAllLink href="/mitra" colorClass="text-[#00AEEF]" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
              {mediaPartners.map((partner, index) => (
                <PartnerLogo
                  key={partner.id}
                  name={partner.name}
                  logo={partner.logo}
                  index={index}
                  className={index >= HOME_PARTNER_MOBILE_LIMIT ? 'hidden md:flex' : undefined}
                />
              ))}
            </div>
            <div className="mt-6 flex justify-center md:hidden">
              <SectionViewAllLink href="/mitra" colorClass="text-[#00AEEF]" />
            </div>
          </div>
        )}

        {socialPartners.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-[#001A2C] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2D74B3] rounded-full shrink-0" aria-hidden />
                Influencer Media Network
              </h3>
              <div className="hidden md:block">
                <SectionViewAllLink href="/mitra?category=social" colorClass="text-[#2D74B3]" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
              {socialPartners.map((partner, index) => (
                <PartnerLogo
                  key={partner.id}
                  name={partner.name}
                  logo={partner.logo}
                  index={index}
                  className={index >= HOME_PARTNER_MOBILE_LIMIT ? 'hidden md:flex' : undefined}
                />
              ))}
            </div>
            <div className="mt-6 flex justify-center md:hidden">
              <SectionViewAllLink href="/mitra?category=social" colorClass="text-[#2D74B3]" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
