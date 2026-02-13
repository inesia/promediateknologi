import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AKKIHero from '@/components/organisasi/akki/AKKIHero'
import AKKIFokus from '@/components/organisasi/akki/AKKIFokus'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AKKI - Asosiasi Konten Kreator Indonesia | Wadah Kolaboratif Kreator Digital',
  description: 'Wadah kolaboratif bagi konten kreator digital untuk pengembangan industri kreatif melalui pembinaan, advokasi, dan kolaborasi.',
}

export default function AKKIPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article>
        <AKKIHero />
        <AKKIFokus />
        
        {/* Simple CTA */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#001A2C] mb-8">Siap Bergabung?</h2>
            <a
              href="https://bit.ly/promediamitra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-purple-700 transition-colors"
            >
              <span>Daftar Anggota</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}
