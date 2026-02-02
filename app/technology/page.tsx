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
  description: 'Roweb: The Engine Behind 1,200+ Media. Enterprise infrastructure powered by AWS and Cloudflare—99% uptime, enterprise security, AI-driven CMS.',
  keywords: 'Roweb, Promedia technology, AWS, Cloudflare, CMS, media infrastructure, enterprise tech',
  openGraph: {
    title: 'Technology & Infrastructure - Roweb | Promedia',
    description: 'Enterprise technology infrastructure for 1,200+ media. AWS, Cloudflare, AI-driven CMS.',
    type: 'website',
  },
}

export default function TechnologyPage() {
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
