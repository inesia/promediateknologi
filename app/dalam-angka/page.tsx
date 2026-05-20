'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DalamAngkaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="px-4 py-2 bg-[#00AEEF]/10 border border-[#00AEEF]/20 rounded-full">
              <span className="text-sm font-semibold text-[#00AEEF] tracking-wide uppercase">
                Marketing Profile
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#001A2C] mb-6">
            Promedia <span className="text-[#00AEEF]">Dalam Angka</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            Halaman ini sedang dalam tahap persiapan materi.
          </p>
          
        </div>
      </section>

      <Footer />
    </main>
  )
}
