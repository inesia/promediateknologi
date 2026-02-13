import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'FAQ - Promedia Teknologi',
  description: 'Pertanyaan yang sering diajukan seputar Promedia Teknologi dan layanan kami.',
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <FAQSection />
      <Footer />
    </main>
  )
}

