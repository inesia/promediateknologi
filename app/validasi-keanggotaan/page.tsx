import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ValidasiHero from '@/components/validasi/ValidasiHero'

export const metadata: Metadata = {
  title: 'Validasi Keanggotaan - Verify Membership Status | Promedia Teknologi',
  description: 'Pastikan validitas kartu pers dan status keanggotaan jaringan Promedia Teknologi. Verifikasi keanggotaan Anda dengan mudah.',
  keywords: 'validasi keanggotaan, kartu pers, membership verification, promedia teknologi, verify membership',
  openGraph: {
    title: 'Validasi Keanggotaan - Verify Membership Status',
    description: 'Pastikan validitas kartu pers dan status keanggotaan jaringan Promedia Teknologi',
    type: 'website',
  },
}

export default function ValidasiKeanggotaanPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <ValidasiHero />
      </article>
      <Footer />
    </main>
  )
}
