import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LatestNews from '@/components/LatestNews'
import NetworkLivePulse from '@/components/NetworkLivePulse'
import BrandStatement from '@/components/BrandStatement'
import EcosystemServices from '@/components/EcosystemServices'
import LogoCloud from '@/components/LogoCloud'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import { getClient, getNetworkLivePulse, getPageHome, getRecentNews } from '@/controllers/base.controller'

export default async function Home() {

  const data = await getRecentNews()
  const clients = await getClient()
  const networkLivePulse = await getNetworkLivePulse()
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BrandStatement />
      <EcosystemServices />
      <LogoCloud clients={clients} />
      <LatestNews data={data} />
      <NetworkLivePulse />
      <FinalCTA />
      <Footer />
    </main>
  )
}
