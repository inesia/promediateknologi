import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MultiplatformHero from '@/components/iklan/MultiplatformHero'
import MultiplatformPackages from '@/components/iklan/MultiplatformPackages'
import CampaignPortfolio from '@/components/iklan/CampaignPortfolio'
import WhyMultiplatform from '@/components/iklan/WhyMultiplatform'
import ClientsSuccessSection from '@/components/iklan/ClientsSuccessSection'
import ProductCatalog from '@/components/iklan/ProductCatalog'
import CTASection from '@/components/iklan/CTASection'

export default function IklanPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden text-[#001A2C]">
      <Header />
      <article>
        <MultiplatformHero />
        <MultiplatformPackages />
        <CampaignPortfolio />
        <WhyMultiplatform />
        <ClientsSuccessSection />
        <ProductCatalog />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
