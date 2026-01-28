import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Promedia SEO Marketplace - High-Authority Backlinks Marketplace',
  description: 'Tingkatkan ranking SEO Anda dengan backlink berkualitas dari 1.000+ media berita terverifikasi. Platform self-service untuk backlink & content placement.',
  keywords: 'seo marketplace, backlink marketplace, high authority backlinks, content placement, seo backlinks, promedia teknologi',
  openGraph: {
    title: 'Promedia SEO Marketplace - High-Authority Backlinks',
    description: 'Platform self-service untuk backlink berkualitas dari 1.000+ media berita terverifikasi',
    type: 'website',
  },
}

export default function SEOMarketplaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
