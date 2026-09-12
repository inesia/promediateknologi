/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/program/mediapreneur',
        destination: '/program/publishermedianetwork',
        permanent: true,
      },
      {
        source: '/program/socmedpreneur',
        destination: '/program/influencermedianetwork',
        permanent: true,
      },
    ]
  },

  
  images: {
    // Prefer WebP only — AVIF decode can stall Safari iOS on first paint
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
  poweredByHeader: false,
}

module.exports = nextConfig
