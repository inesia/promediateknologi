'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdHero from '@/components/iklan/AdHero'
import PortfolioSlider from '@/components/iklan/PortfolioSlider'
import ClientLogoSlider from '@/components/iklan/ClientLogoSlider'
import CTASection from '@/components/iklan/CTASection'
import AdProductsGrid from '@/components/iklan/AdProductsGrid'
import HowItWorks from '@/components/iklan/HowItWorks'
import PricingTable from '@/components/iklan/PricingTable'
import SEOMarketplaceCTA from '@/components/iklan/SEOMarketplaceCTA'
import FloatingActionBar from '@/components/iklan/FloatingActionBar'
import { AnimatePresence } from 'framer-motion'

export default function IklanPage() {
  const [selectedProducts, setSelectedProducts] = useState<Array<{ id: string; name: string; price: string }>>([])

  const handleProductSelect = (product: { id: string; name: string; price: string }) => {
    setSelectedProducts((prev) => {
      const isAlreadySelected = prev.some((p) => p.id === product.id)
      if (isAlreadySelected) {
        return prev.filter((p) => p.id !== product.id)
      }
      return [...prev, product]
    })
  }

  const handleClearSelection = () => {
    setSelectedProducts([])
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <AdHero />
        <HowItWorks />
        <AdProductsGrid 
          onProductSelect={handleProductSelect} 
          selectedProducts={selectedProducts} 
        />
        <PricingTable 
          onProductSelect={handleProductSelect} 
          selectedProducts={selectedProducts} 
        />
        <PortfolioSlider />
        <SEOMarketplaceCTA />
        <ClientLogoSlider />
        <CTASection />
      </article>
      <Footer />

      <AnimatePresence>
        {selectedProducts.length > 0 && (
          <FloatingActionBar 
            selectedProducts={selectedProducts} 
            onClear={handleClearSelection} 
          />
        )}
      </AnimatePresence>
    </main>
  )
}
