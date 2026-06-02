import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocmedpreneurHero from '@/components/program/socmedpreneur/SocmedpreneurHero'
import KeyResponsibilities from '@/components/program/socmedpreneur/KeyResponsibilities'
import PlatformFocus from '@/components/program/socmedpreneur/PlatformFocus'
import CTASection from '@/components/program/socmedpreneur/CTASection'

export const metadata: Metadata = {
  title: 'Influencer Media Network | Promedia Teknologi',
  description:
    'Dari kreator, menjadi pemengaruh dan brand media profesional. Inkubator strategis untuk membangun dan memasarkan brand media Anda bersama Promedia.',
  keywords:
    'influencer media network, socmedpreneur, kreator konten, brand media, monetisasi media sosial, promedia teknologi',
  openGraph: {
    title: 'Influencer Media Network | Promedia Teknologi',
    description:
      'Dari kreator, menjadi pemengaruh dan brand media profesional bersama Influencer Media Network.',
    type: 'website',
  },
}

export default function SocmedpreneurPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <SocmedpreneurHero />
        <KeyResponsibilities />
        <PlatformFocus />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
