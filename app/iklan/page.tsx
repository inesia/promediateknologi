import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdHero from '@/components/iklan/AdHero'
import ProductCatalog from '@/components/iklan/ProductCatalog'
import BannerCalculatorSection from '@/components/iklan/BannerCalculatorSection'
import ClientsSuccessSection from '@/components/iklan/ClientsSuccessSection'
import CTASection from '@/components/iklan/CTASection'

export default function IklanPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden text-[#001A2C]">
      <Header />
      <article>
        <AdHero />
        <ProductCatalog />
        <BannerCalculatorSection />
        <ClientsSuccessSection />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
