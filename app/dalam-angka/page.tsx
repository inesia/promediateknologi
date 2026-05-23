import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DalamAngkaHero from '@/components/dalam-angka/DalamAngkaHero'
import TrafficPerformanceSection from '@/components/dalam-angka/TrafficPerformanceSection'
import ClientTrustGrid from '@/components/dalam-angka/ClientTrustGrid'
import AudienceDemographicsSection from '@/components/dalam-angka/AudienceDemographicsSection'
import VoxproInfluencerSection from '@/components/dalam-angka/VoxproInfluencerSection'
import DalamAngkaCTA from '@/components/dalam-angka/DalamAngkaCTA'

export default function DalamAngkaPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <article>
        <DalamAngkaHero />
        <TrafficPerformanceSection />
        <ClientTrustGrid />
        <AudienceDemographicsSection />
        <VoxproInfluencerSection />
        <DalamAngkaCTA />
      </article>
      <Footer />
    </main>
  )
}
