import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

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
  description: 'Platform terintegrasi untuk Publisher Media Network dan Contentpreneur. Solusi digital lengkap untuk mengembangkan bisnis media Anda.',
  keywords: 'promedia teknologi, media digital, publisher media network, contentpreneur, ekosistem digital',
  authors: [{ name: 'Promedia Teknologi' }],
  openGraph: {
    title: 'Promedia Teknologi - Ekosistem Media Digital Terintegrasi',
    description: 'Platform terintegrasi untuk Publisher Media Network dan Contentpreneur',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Promedia Teknologi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promedia Teknologi - Ekosistem Media Digital Terintegrasi',
    description: 'Platform terintegrasi untuk Publisher Media Network dan Contentpreneur',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
