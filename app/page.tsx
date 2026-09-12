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
import { getClient, getNetworkLivePulse } from '@/controllers/base.controller'

export const fetchCache = 'force-cache'

export default async function Home() {

  const clients = await getClient()
  const networkLivePulse = await getNetworkLivePulse()

  return (
    <main className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      <Header />
      <Hero />
      <FeaturesGrid />
      <EcosystemPillars />
      {/* <EcosystemServices /> */}
      <EcosystemStats />
      <LogoCloud clients={clients} />
      <LatestNews news={networkLivePulse} />
      <FinalCTA />
      <Footer />
    </main>
  )
}
