import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroStats from '@/components/mitra/HeroStats'
import CTASection from '@/components/mitra/CTASection'
import MitraContainer from '@/components/mitra/MitraContainer'
import { getCategoriesSite, getClients, getInfluencerClient, getRegions } from '@/controllers/base.controller'

export default async function MitraPage() {
  const [regionsRes, categoriesRes, clientsRes, influencerRes] = await Promise.all([
    getRegions(),
    getCategoriesSite(),
    getClients({ page: 1, limit: 24 }),
    getInfluencerClient({ page: 1, limit: 24 }),
  ])

  const regions = regionsRes?.data || []
  const categories = categoriesRes?.data || []
  const initialClients = clientsRes

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <HeroStats totalMitra={clientsRes?.meta?.total} />
        <Suspense fallback={null}>
          <MitraContainer
            regions={regions}
            categories={categories}
            initialClients={initialClients}
            initialInfluencers={influencerRes}
          />
        </Suspense>
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
