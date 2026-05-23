import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Promedia Dalam Angka | Media Profile & Data Ekosistem',
  description:
    'Data terverifikasi ekosistem Promedia Group: 1.200+ media digital, 3,1 miliar pageviews, demografi audiens, dan jaringan Voxpro Influencer multi-tier.',
  keywords:
    'promedia dalam angka, media profile, jaringan media digital, pageviews, influencer network, voxpro, promedia teknologi',
  openGraph: {
    title: 'Promedia Dalam Angka',
    description: 'Skala ekosistem media, traffic, demografi, dan influencer network Promedia Group',
    type: 'website',
  },
}

export default function DalamAngkaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
