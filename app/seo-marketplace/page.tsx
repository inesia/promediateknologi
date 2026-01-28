'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DashboardHeader from '@/components/seo-marketplace/DashboardHeader'
import MarketplaceTable from '@/components/seo-marketplace/MarketplaceTable'
import SidebarFilter from '@/components/seo-marketplace/SidebarFilter'
import OrderModal from '@/components/seo-marketplace/OrderModal'
import MyOrders from '@/components/seo-marketplace/MyOrders'
import CTASection from '@/components/seo-marketplace/CTASection'

export default function SEOMarketplacePage() {
  const [activeTab, setActiveTab] = useState<'marketplace' | 'orders'>('marketplace')
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<{
    priceRange: [number, number]
    minDA: number
    minPA: number
    niches: string[]
    doFollowOnly: boolean
  }>({
    priceRange: [0, 10000000] as [number, number],
    minDA: 0,
    minPA: 0,
    niches: [],
    doFollowOnly: false,
  })
  const [selectedMedia, setSelectedMedia] = useState<{
    id: string
    name: string
    price: number
  } | null>(null)
  const [cart, setCart] = useState<Array<{
    mediaId: string
    mediaName: string
    price: number
    anchorText: string
    targetUrl: string
    articleOption: 'upload' | 'request'
  }>>([])

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <DashboardHeader 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        {activeTab === 'marketplace' ? (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Sidebar Filter */}
              <SidebarFilter filters={filters} onFiltersChange={setFilters} />
              
              {/* Marketplace Table */}
              <div className="flex-1">
                <MarketplaceTable
                  searchQuery={searchQuery}
                  filters={filters}
                  onAddToCart={(media) => setSelectedMedia(media)}
                />
              </div>
            </div>
          </div>
        ) : (
          <MyOrders orders={cart} />
        )}

        {/* CTA Section */}
        {activeTab === 'marketplace' && <CTASection />}
      </article>
      <Footer />

      {/* Order Modal */}
      {selectedMedia && (
        <OrderModal
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
          onSubmit={(orderData) => {
            setCart([...cart, { 
              mediaId: selectedMedia.id,
              mediaName: selectedMedia.name,
              price: selectedMedia.price,
              ...orderData 
            }])
            setSelectedMedia(null)
          }}
        />
      )}
    </main>
  )
}
