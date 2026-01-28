import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PokjaTeknoHero from '@/components/pokja/tekno/PokjaTeknoHero'
import KegiatanProgram from '@/components/pokja/tekno/KegiatanProgram'
import TechReviewsShowcase from '@/components/pokja/tekno/TechReviewsShowcase'
import Partnership from '@/components/pokja/tekno/Partnership'
import CTASection from '@/components/pokja/tekno/CTASection'

export const metadata: Metadata = {
  title: 'Pokja Jurnalis Tekno - Decoding the Future | Promedia Teknologi',
  description: 'Komunitas jurnalis teknologi yang mengawal inovasi dan literasi digital di Indonesia.',
  keywords: 'pokja jurnalis tekno, jurnalis teknologi, tech journalism, review gadget, tech talk, promedia teknologi',
  openGraph: {
    title: 'Pokja Jurnalis Tekno - Decoding the Future',
    description: 'Komunitas jurnalis teknologi yang mengawal inovasi dan literasi digital',
    type: 'website',
  },
}

export default function PokjaTeknoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <PokjaTeknoHero />
        <KegiatanProgram />
        <TechReviewsShowcase />
        <Partnership />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
