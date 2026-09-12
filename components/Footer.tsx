'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  XTwitterIcon,
  YouTubeIcon,
} from '@/components/icons/SocialBrandIcons'

type FooterLink = {
  label: string
  href: string
  external?: boolean
}

const footerLinks: {
  product: FooterLink[]
  company: FooterLink[]
} = {
  product: [
    { label: 'Publisher Media Network', href: '/program/publishermedianetwork' },
    { label: 'Influencer Media Network', href: '/program/influencermedianetwork' },
  ],
  company: [
    { label: 'Tentang Kami', href: '/about-us' },
    { label: 'Mitra', href: '/mitra' },
    { label: 'Karir', href: '/karir' },
    { label: 'Kontak', href: '/kontak' },
    { label: 'Blog', href: 'https://news.promediateknologi.id/', external: true },
  ],
}

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className = 'text-sm text-white/80 hover:text-white transition-colors duration-200'

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    )
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  )
}

const socialLinks = [
  { icon: InstagramIcon, href: 'https://www.instagram.com/promediaecosystem/', label: 'Instagram' },
  { icon: FacebookIcon, href: 'https://www.facebook.com/promediaecosystemID/', label: 'Facebook' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@promediaecosystem', label: 'TikTok' },
  { icon: XTwitterIcon, href: 'https://x.com/PromediaGroupID', label: 'X (Twitter)' },
  { icon: YouTubeIcon, href: 'https://www.youtube.com/@protv_official', label: 'YouTube' },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: 'https://www.linkedin.com/company/promediaecosystem',
    label: 'LinkedIn',
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#0f2032] overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block mb-4 bg-white/10 p-2 rounded-lg">
                <Image
                  src="/images/logo.webp"
                  alt="Promedia Teknologi"
                  width={180}
                  height={60}
                  className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-white/80 leading-relaxed max-w-xs">
                Ekosistem media digital terintegrasi untuk publisher, kreator, dan brand.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Produk
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Perusahaan
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Ikuti Kami
              </h3>
              {/* Single row for 6 social icons */}
              <div className="flex items-center gap-2 sm:gap-3 w-fit flex-wrap sm:flex-nowrap">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#00AEEF] flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/20">
          <p className="text-sm text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} Promedia Teknologi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
