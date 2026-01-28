import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MediapreneurHero from '@/components/program/mediapreneur/MediapreneurHero'
import SyaratKualifikasi from '@/components/program/mediapreneur/SyaratKualifikasi'
import BenefitsGrid from '@/components/program/mediapreneur/BenefitsGrid'
import FlowPendaftaran from '@/components/program/mediapreneur/FlowPendaftaran'

export const metadata: Metadata = {
  title: 'Mediapreneur - Own Your Media Empire | Promedia Teknologi',
  description: 'Program kepemilikan media bagi jurnalis profesional. Bangun, kelola, dan monetisasi portal berita Anda sendiri dengan dukungan teknologi Promedia.',
  keywords: 'mediapreneur, program media, kepemilikan media, jurnalis profesional, portal berita, promedia teknologi',
  openGraph: {
    title: 'Mediapreneur - Own Your Media Empire',
    description: 'Program kepemilikan media bagi jurnalis profesional dengan dukungan teknologi Promedia',
    type: 'website',
  },
}

export default function MediapreneurPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <MediapreneurHero />
        <SyaratKualifikasi />
        <BenefitsGrid />
        <FlowPendaftaran />
      </article>
      <Footer />
    </main>
  )
}
