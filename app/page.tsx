import Header from '@/components/Header'
import Hero from '@/components/Hero'
import dynamic from 'next/dynamic'

const EcosystemPillars = dynamic(() => import('@/components/EcosystemPillars'))
const FeaturesGrid = dynamic(() => import('@/components/FeaturesGrid'))
const EcosystemStats = dynamic(() => import('@/components/EcosystemStats'))
const LatestNews = dynamic(() => import('@/components/LatestNews'))
const LogoCloud = dynamic(() => import('@/components/LogoCloud'))
const FinalCTA = dynamic(() => import('@/components/FinalCTA'))
const Footer = dynamic(() => import('@/components/Footer'))
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
