import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mitra Promedia - Jaringan Media Terbesar di Indonesia',
  description: 'Bergabung dengan 1,000+ Mitra Media yang telah bertransformasi bersama Promedia Teknologi. Ekosistem media digital terintegrasi untuk masa depan industri media Indonesia.',
  keywords: 'mitra promedia, jaringan media, media partner, ekosistem media digital, promedia teknologi',
  openGraph: {
    title: 'Mitra Promedia - Jaringan Media Terbesar di Indonesia',
    description: '1,000+ Mitra Media telah bertransformasi bersama kami',
    type: 'website',
  },
}

export default function MitraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
