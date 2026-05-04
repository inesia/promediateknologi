import Header from '@/components/Header'
import Hero from '@/components/Hero'
import EcosystemStats from '@/components/EcosystemStats'
import LatestNews from '@/components/LatestNews'
import NetworkLivePulse from '@/components/NetworkLivePulse'
import BrandStatement from '@/components/BrandStatement'
import EcosystemServices from '@/components/EcosystemServices'
import LogoCloud from '@/components/LogoCloud'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <EcosystemStats />
      <BrandStatement />
      <EcosystemServices />
      <LogoCloud />
      <LatestNews />
      <NetworkLivePulse />
      <FinalCTA />
      <Footer />
    </main>
  )
}
