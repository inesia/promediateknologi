import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutHero from '@/components/about-us/AboutHero'
import PhilosophySection from '@/components/about-us/PhilosophySection'
import FourPillarsGrid from '@/components/about-us/FourPillarsGrid'
import OurPresence from '@/components/about-us/OurPresence'
import FinalStatement from '@/components/about-us/FinalStatement'

export const metadata: Metadata = {
  title: 'Tentang Kami - Promedia Teknologi | The Architects of Media Ecosystem',
  description: 'Promedia Teknologi adalah pionir ekosistem media digital terintegrasi. Tiga pilar utama: Publisher Media Network, dan Influencer Media Network.',
  keywords: 'promedia teknologi, tentang kami, media digital, ekosistem media, publisher media network',
  openGraph: {
    title: 'Tentang Kami - Promedia Teknologi',
    description: 'The Architects of Media Ecosystem - Membangun ekosistem media digital terintegrasi',
    type: 'website',
  },
}

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <AboutHero />
        <PhilosophySection />
        <FourPillarsGrid />
        <OurPresence />
        <FinalStatement />
      </article>
      <Footer />
    </main>
  )
}
