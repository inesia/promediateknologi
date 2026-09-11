import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgramHub from '@/components/register/ProgramHub'
import { getApplyPageUrl, normalizeProgramSlug } from '@/lib/programRegistration'

export const metadata: Metadata = {
  title: 'Pilih Program | Bergabung Promedia Group',
  description:
    'Jelajahi Publisher Media Network, Contentpreneur, dan Influencer Media Network. Pilih program, pelajari persyaratan, lalu daftar.',
}

export const dynamic = 'force-dynamic'

type PageProps = {
  searchParams?: { role?: string; program?: string }
}

export default function RegisterPage({ searchParams }: PageProps) {
  const slug = normalizeProgramSlug(
    searchParams?.program ?? searchParams?.role ?? null
  )
  if (slug) {
    redirect(getApplyPageUrl(slug))
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProgramHub />
      <Footer />
    </main>
  )
}
