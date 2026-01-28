'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdHero from '@/components/iklan/AdHero'
import AdProductsGrid from '@/components/iklan/AdProductsGrid'
import HowItWorks from '@/components/iklan/HowItWorks'
import PricingTable from '@/components/iklan/PricingTable'
import CTASection from '@/components/iklan/CTASection'
import SEOMarketplaceCTA from '@/components/iklan/SEOMarketplaceCTA'
import FloatingActionBar from '@/components/iklan/FloatingActionBar'

export default function IklanPage() {
  const [selectedProducts, setSelectedProducts] = useState<Array<{ id: string; name: string; price: string }>>([])

  const handleProductSelect = (product: { id: string; name: string; price: string }) => {
    setSelectedProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) {
        return prev.filter((p) => p.id !== product.id)
      }
      return [...prev, product]
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <AdHero />
        <AdProductsGrid onProductSelect={handleProductSelect} selectedProducts={selectedProducts} />
        <HowItWorks />
        <PricingTable onProductSelect={handleProductSelect} selectedProducts={selectedProducts} />
        <SEOMarketplaceCTA />
        <CTASection />
      </article>
      <Footer />
      {selectedProducts.length > 0 && (
        <FloatingActionBar selectedProducts={selectedProducts} onClear={() => setSelectedProducts([])} />
      )}
    </main>
  )
}
