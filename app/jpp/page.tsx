import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JPPHero from '@/components/jpp/JPPHero'
import MisiFokus from '@/components/jpp/MisiFokus'
import AgendaAktivitas from '@/components/jpp/AgendaAktivitas'
import MembershipStats from '@/components/jpp/MembershipStats'
import CTASection from '@/components/jpp/CTASection'

export const metadata: Metadata = {
  title: 'JPP - Jaringan Pemimpin Redaksi Promedia | Penjaga Jurnalisme Berkualitas',
  description: 'Wadah eksklusif bagi ribuan Pemimpin Redaksi dalam ekosistem Promedia untuk menetapkan standar jurnalisme masa depan.',
  keywords: 'JPP, jaringan pemimpin redaksi, pemimpin redaksi, jurnalisme berkualitas, publisher rights, promedia teknologi',
  openGraph: {
    title: 'JPP - Jaringan Pemimpin Redaksi Promedia',
    description: 'Penjaga Jurnalisme Berkualitas - Wadah eksklusif bagi Pemimpin Redaksi',
    type: 'website',
  },
}

export default function JPPPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <JPPHero />
        <MisiFokus />
        <AgendaAktivitas />
        <MembershipStats />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
