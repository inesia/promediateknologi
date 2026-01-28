import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocmedpreneurHero from '@/components/program/socmedpreneur/SocmedpreneurHero'
import KeyResponsibilities from '@/components/program/socmedpreneur/KeyResponsibilities'
import PlatformFocus from '@/components/program/socmedpreneur/PlatformFocus'
import CTASection from '@/components/program/socmedpreneur/CTASection'

export const metadata: Metadata = {
  title: 'Socmedpreneur - Master the Algorithm | Promedia Teknologi',
  description: 'Optimasi dan monetisasi media sosial untuk mendorong traffic ekosistem Promedia. Jadilah motor penggerak traffic sebagai Socmed Specialist.',
  keywords: 'socmedpreneur, program media sosial, social media specialist, optimasi media sosial, monetisasi media sosial, promedia teknologi',
  openGraph: {
    title: 'Socmedpreneur - Master the Algorithm',
    description: 'Optimasi dan monetisasi media sosial untuk mendorong traffic ekosistem Promedia',
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
