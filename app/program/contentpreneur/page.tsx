import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContentpreneurHero from '@/components/program/contentpreneur/ContentpreneurHero'
import AudienceTarget from '@/components/program/contentpreneur/AudienceTarget'
import WhyJoinUs from '@/components/program/contentpreneur/WhyJoinUs'
import Persyaratan from '@/components/program/contentpreneur/Persyaratan'

export const metadata: Metadata = {
  title: 'Contentpreneur - Turn Words into Wealth | Promedia Teknologi',
  description: 'Menulis adalah proses merapikan kenangan menjadi pendapatan. Bergabunglah sebagai kreator konten di jaringan Promedia.',
  keywords: 'contentpreneur, program konten, penulis konten, kreator konten, menulis konten, promedia teknologi',
  openGraph: {
    title: 'Contentpreneur - Turn Words into Wealth',
    description: 'Menulis adalah proses merapikan kenangan menjadi pendapatan',
    type: 'website',
  },
}

export default function ContentpreneurPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <ContentpreneurHero />
        <AudienceTarget />
        <WhyJoinUs />
        <Persyaratan />
      </article>
      <Footer />
    </main>
  )
}
