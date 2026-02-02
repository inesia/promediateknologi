import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RowebHero from '@/components/teknologi-infrastruktur/RowebHero'
import InfrastructureGrid from '@/components/teknologi-infrastruktur/InfrastructureGrid'
import CMSShowcase from '@/components/teknologi-infrastruktur/CMSShowcase'
import MediaIntelligence from '@/components/teknologi-infrastruktur/MediaIntelligence'
import CTASection from '@/components/teknologi-infrastruktur/CTASection'

export const metadata: Metadata = {
  title: 'Teknologi & Infrastruktur - Roweb | Promedia Teknologi',
  description: 'Roweb: The Engine Behind 1,200+ Media. Infrastruktur teknologi enterprise berbasis AWS dan Cloudflare—uptime 99%, keamanan siber, dan CMS intelijen media.',
  keywords: 'Roweb, Promedia teknologi, AWS, Cloudflare, CMS, infrastruktur media, enterprise tech',
  openGraph: {
    title: 'Teknologi & Infrastruktur - Roweb | Promedia',
    description: 'Infrastruktur teknologi enterprise untuk 1,200+ media. AWS, Cloudflare, AI-driven CMS.',
    type: 'website',
  },
}

export default function TeknologiInfrastrukturPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <RowebHero />
        <InfrastructureGrid />
        <CMSShowcase />
        <MediaIntelligence />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
