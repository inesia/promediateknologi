import Header from '@/components/Header'
import Hero from '@/components/Hero'
import EcosystemPillars from '@/components/EcosystemPillars'
import FeaturesGrid from '@/components/FeaturesGrid'
import EcosystemStats from '@/components/EcosystemStats'
import { Suspense } from 'react'
import LatestNewsServer from '@/components/LatestNewsServer'
import LatestNewsSkeleton from '@/components/LatestNewsSkeleton'
import dynamic from 'next/dynamic'
const LogoCloud = dynamic(() => import('@/components/LogoCloud'))
const FinalCTA = dynamic(() => import('@/components/FinalCTA'))
const Footer = dynamic(() => import('@/components/Footer'))
import { getClient } from '@/controllers/base.controller'
import NoMotion from '@/components/NoMotion'

export const fetchCache = 'force-cache'

export default async function Home() {

  const clients = await getClient()

  return (
    <NoMotion>
      <main className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
        <Header />
        <Hero />
        <FeaturesGrid />
        <EcosystemPillars />
        {/* <EcosystemServices /> */}
        <EcosystemStats />
        <LogoCloud clients={clients} />
        <Suspense fallback={<LatestNewsSkeleton />}>
          <LatestNewsServer />
        </Suspense>
        <FinalCTA />
        <Footer />
      </main>
    </NoMotion>
  )
}
