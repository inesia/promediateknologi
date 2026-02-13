import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JPPHero from '@/components/jpp/JPPHero'
import AboutJPP from '@/components/jpp/AboutJPP'
import SpecialInterestGroups from '@/components/jpp/SpecialInterestGroups'
import MembershipStats from '@/components/jpp/MembershipStats'
import CTASection from '@/components/jpp/CTASection'

export const metadata: Metadata = {
  title: 'JPP - Jaringan Pemred Promedia | Penjaga Jurnalisme Berkualitas',
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
        <AboutJPP />
        <MembershipStats />
        <SpecialInterestGroups />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
