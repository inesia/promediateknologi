import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import KoperasiHero from '@/components/organisasi/koperasi/KoperasiHero'
import LayananKoperasi from '@/components/organisasi/koperasi/LayananKoperasi'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Koperasi Jasa Mitra Promedia Sejahtera | Ekonomi Gotong Royong',
  description: 'Koperasi bagi mitra dalam ekosistem Promedia untuk memperkuat kolaborasi, kesejahteraan anggota, serta mendorong pertumbuhan ekonomi bersama.',
}

export default function KoperasiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <KoperasiHero />
        <LayananKoperasi />
        
        {/* Simple CTA */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#001A2C] mb-8">Tertarik Bergabung?</h2>
            <a
              href="https://bit.ly/promediamitra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#00AEEF] text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-[#0099d3] transition-colors"
            >
              <span>Gabung Koperasi</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}
