import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MediapreneurHero from '@/components/program/mediapreneur/MediapreneurHero'
import SyaratKualifikasi from '@/components/program/mediapreneur/SyaratKualifikasi'
import BenefitsGrid from '@/components/program/mediapreneur/BenefitsGrid'
import FlowPendaftaran from '@/components/program/mediapreneur/FlowPendaftaran'

export const metadata: Metadata = {
  title: 'Publisher Media Network | Promedia Teknologi',
  description:
    'Bangun dan kembangkan mediamu sendiri tanpa pusing biaya IT hingga marketing. Jadilah bagian ekosistem media terbesar di Indonesia.',
  keywords:
    'publisher media network, program media, kepemilikan media, jurnalis profesional, portal berita, promedia teknologi',
  openGraph: {
    title: 'Publisher Media Network | Promedia Teknologi',
    description:
      'Bangun bisnis media Anda sendiri bersama Publisher Media Network dan ekosistem Promedia.',
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
