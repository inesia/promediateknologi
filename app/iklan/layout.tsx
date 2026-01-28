import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Promedia Ad Solutions - Marketplace Iklan Modern & Transparan',
  description: 'Platform periklanan transparan dengan akses ke 1.000+ jaringan media premium. Jangkau jutaan pembaca Indonesia dalam satu klik.',
  keywords: 'promedia ad solutions, iklan online, marketplace iklan, display banner, advertorial, social media ads, video ads, promedia teknologi',
  openGraph: {
    title: 'Promedia Ad Solutions - Marketplace Iklan Modern',
    description: 'Platform periklanan transparan dengan akses ke 1.000+ jaringan media premium',
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
