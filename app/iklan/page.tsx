'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdHero from '@/components/iklan/AdHero'
import PortfolioSlider from '@/components/iklan/PortfolioSlider'
import ClientLogoSlider from '@/components/iklan/ClientLogoSlider'
import CTASection from '@/components/iklan/CTASection'

export default function IklanPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <AdHero />
        <PortfolioSlider />
        <ClientLogoSlider />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
