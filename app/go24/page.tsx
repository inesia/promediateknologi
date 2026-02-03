import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Go24Client from '@/components/go24/Go24Client'

export const metadata: Metadata = {
  title: 'GO24 News Hub - Jelajahi Cerita dari Seluruh Nusantara | Promedia',
  description: 'Agregator berita dari 1.200+ jaringan media Promedia. Cari topik, tokoh, atau peristiwa dari seluruh Indonesia.',
  keywords: 'GO24, news hub, agregator berita, berita Indonesia, jaringan media Promedia',
  openGraph: {
    title: 'GO24 News Hub | Promedia',
    description: 'Jelajahi cerita dari seluruh Nusantara - 1.200+ jaringan media.',
    type: 'website',
  },
}

export default function Go24Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <Go24Client />
      </article>
      <Footer />
    </main>
  )
}
