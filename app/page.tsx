import Header from '@/components/Header'
import Hero from '@/components/Hero'
import EcosystemPillars from '@/components/EcosystemPillars'
import FeaturesGrid from '@/components/FeaturesGrid'
import EcosystemStats from '@/components/EcosystemStats'
import LatestNews from '@/components/LatestNews'
import EcosystemServices from '@/components/EcosystemServices'
import LogoCloud from '@/components/LogoCloud'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturesGrid />
      <EcosystemPillars />
      {/* <EcosystemServices /> */}
      <EcosystemStats />
      <LogoCloud />
      <LatestNews />
      <FinalCTA />
      <Footer />
    </main>
  )
}
