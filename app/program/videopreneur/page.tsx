import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VideopreneurHero from '@/components/program/videopreneur/VideopreneurHero'
import ScopeOfWork from '@/components/program/videopreneur/ScopeOfWork'
import GearTools from '@/components/program/videopreneur/GearTools'
import CTASection from '@/components/program/videopreneur/CTASection'

export const metadata: Metadata = {
  title: 'Videopreneur - Visualize the Story | Promedia Teknologi',
  description: 'Program Promedia TV untuk memperkaya inventori video dan konten visual bergerak. Start your production dengan dukungan teknologi profesional.',
  keywords: 'videopreneur, program video, video production, promedia tv, video editing, live streaming, motion graphic',
  openGraph: {
    title: 'Videopreneur - Visualize the Story',
    description: 'Program Promedia TV untuk memperkaya inventori video dan konten visual bergerak',
    type: 'website',
  },
}

export default function VideopreneurPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <VideopreneurHero />
        <ScopeOfWork />
        <GearTools />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
