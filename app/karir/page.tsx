import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import KarirContent from '@/components/karir/KarirContent'

export const metadata: Metadata = {
  title: 'Karir - Promedia Group',
  description:
    'Bergabung dengan Promedia Group. Peluang karier di ekosistem media digital terintegrasi — teknologi, editorial, marketing, dan operasional.',
  openGraph: {
    title: 'Karir - Promedia Group',
    description: 'Bangun masa depan media digital bersama Promedia Group.',
    type: 'website',
  },
}

export default function KarirPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <KarirContent />
      <Footer />
    </main>
  )
}
