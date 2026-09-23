import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paket Iklan Multiplatform (Web, IG, TikTok) | Promedia Ad Solutions',
  description:
    'Paket iklan multiplatform terintegrasi di Website portal berita, Instagram, dan TikTok jaringan media Promedia Group. SEO friendly, tayang selamanya, dan tingkatkan trust brand.',
  keywords:
    'paket iklan multiplatform, iklan promedia, pasang iklan media online, advertorial website, promosi tiktok, promosi instagram media, promedia teknologi',
  openGraph: {
    title: 'Paket Iklan Multiplatform | Promedia Ad Solutions',
    description: 'Solusi iklan terintegrasi Website, Instagram, dan TikTok di jaringan media Promedia Group',
    type: 'website',
  },
}

export default function IklanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
