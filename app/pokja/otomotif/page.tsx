import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PokjaOtomotifHero from '@/components/pokja/otomotif/PokjaOtomotifHero'
import KegiatanProgram from '@/components/pokja/otomotif/KegiatanProgram'
import FeaturedReviews from '@/components/pokja/otomotif/FeaturedReviews'
import CTASection from '@/components/pokja/otomotif/CTASection'

export const metadata: Metadata = {
  title: 'Pokja Jurnalis Otomotif - Drive the Narrative | Promedia Teknologi',
  description: 'Wadah jurnalis otomotif untuk mengulas industri, hobi, dan mobilitas masa depan.',
  keywords: 'pokja jurnalis otomotif, jurnalis otomotif, automotive journalism, test drive, media touring, GIIAS, promedia teknologi',
  openGraph: {
    title: 'Pokja Jurnalis Otomotif - Drive the Narrative',
    description: 'Wadah jurnalis otomotif untuk mengulas industri, hobi, dan mobilitas masa depan',
    type: 'website',
  },
}

export default function PokjaOtomotifPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <PokjaOtomotifHero />
        <KegiatanProgram />
        <FeaturedReviews />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
