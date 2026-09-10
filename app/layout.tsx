import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Promedia Teknologi - Ekosistem Media Digital Terintegrasi',
  description: 'Platform terintegrasi untuk Publisher Media Network dan Influencer Media Network. Solusi digital lengkap untuk mengembangkan bisnis media Anda.',
  keywords: 'promedia teknologi, media digital, publisher media network, influencer media network, ekosistem digital',
  authors: [{ name: 'Promedia Teknologi' }],
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico' },
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicon/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon/apple-icon.png' },
      { url: '/images/favicon/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/images/favicon/manifest.json',
  openGraph: {
    title: 'Promedia Teknologi - Ekosistem Media Digital Terintegrasi',
    description: 'Platform terintegrasi untuk Publisher Media Network dan Influencer Media Network',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Promedia Teknologi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promedia Teknologi - Ekosistem Media Digital Terintegrasi',
    description: 'Platform terintegrasi untuk Publisher Media Network dan Influencer Media Network',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
