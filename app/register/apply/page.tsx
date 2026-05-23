import { Suspense } from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramApply from '@/components/register/ProgramApply'

export const metadata: Metadata = {
  title: 'Daftar Program | Promedia Group',
  description: 'Lengkapi pendaftaran program melalui formulir kemitraan resmi Promedia Group.',
}

function ApplyFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center pt-28">
      <p className="text-slate-500">Memuat…</p>
    </div>
  )
}

export default function RegisterApplyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Suspense fallback={<ApplyFallback />}>
        <ProgramApply />
      </Suspense>
      <Footer />
    </main>
  )
}
