'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type FooterLink = {
  label: string
  href: string
  external?: boolean
}

const footerLinks: {
  product: FooterLink[]
  company: FooterLink[]
  support: FooterLink[]
  legal: FooterLink[]
} = {
  product: [
    { label: 'Publisher Media Network', href: '/program/mediapreneur' },
    { label: 'Influencer Media Network', href: '/program/socmedpreneur' },
    { label: 'Contentpreneur', href: '/program/contentpreneur' },
  ],
  company: [
    { label: 'Tentang Kami', href: '/about-us' },
    { label: 'Mitra', href: '/mitra' },
    { label: 'Karir', href: '/karir' },
    { label: 'Blog', href: 'https://news.promediateknologi.id/', external: true },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Dokumentasi', href: '#' },
    { label: 'Kontak', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className = 'text-sm text-slate-600 hover:text-[#00AEEF] transition-colors duration-200'

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
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Product Column */}
            <div>
              <h3 className="text-sm font-semibold text-[#001A2C] uppercase tracking-wider mb-4">
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

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold text-[#001A2C] uppercase tracking-wider mb-4">
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

            {/* Support Column */}
            <div>
              <h3 className="text-sm font-semibold text-[#001A2C] uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-sm font-semibold text-[#001A2C] uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-slate-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Tagline */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <Link href="/" className="flex items-center">
                <motion.span whileHover={{ scale: 1.05 }} className="block">
                  <Image
                  src="/images/logo.png"
                  alt="Promedia Teknologi"
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
                </motion.span>
              </Link>
             
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#00AEEF] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center md:text-left">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Promedia Teknologi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
