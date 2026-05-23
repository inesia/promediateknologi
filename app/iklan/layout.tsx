import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product & Success Story Campaign | Promedia Ad Solutions',
  description:
    'Katalog produk iklan Promedia Group: Native/Article, Sosmed Media Network, Banner Display, dan Event/Partnership. Jangkau audiens di 1.000+ media partner.',
  keywords:
    'promedia ad solutions, product campaign, advertorial, display banner, sosmed media network, success story, promedia teknologi',
  openGraph: {
    title: 'Product & Success Story Campaign | Promedia',
    description: 'Katalog produk periklanan dan dokumentasi kampanye sukses Promedia Group',
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
