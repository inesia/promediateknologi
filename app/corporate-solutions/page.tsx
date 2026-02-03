import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/corporate-solutions/HeroSection'
import ConsultantServices from '@/components/corporate-solutions/ConsultantServices'
import SuccessStories from '@/components/corporate-solutions/SuccessStories'
import DashboardSection from '@/components/corporate-solutions/DashboardSection'
import TrustedBy from '@/components/corporate-solutions/TrustedBy'
import CTASection from '@/components/corporate-solutions/CTASection'

export const metadata: Metadata = {
  title: 'Corporate Solutions - Strategic Communication Consultant | Promedia',
  description: 'End-to-End Strategic Communication Consultant. Mitra strategis korporasi dalam audit komunikasi, manajemen krisis, hingga amplifikasi pesan melalui jejaring media terbesar di Indonesia.',
  keywords: 'corporate solutions, strategic communication, crisis management, media audit, B2B, BUMN, pemerintah',
  openGraph: {
    title: 'Corporate Solutions | Promedia Teknologi',
    description: 'Strategic Communication Consultant untuk korporasi, BUMN, dan pemerintah.',
    type: 'website',
  },
}

export default function CorporateSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <HeroSection />
        <ConsultantServices />
        <SuccessStories />
        <DashboardSection />
        <TrustedBy />
        <CTASection />
      </article>
      <Footer />
    </main>
  )
}
