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
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.promediateknologi.id',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'promediateknologi.id',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'db3.promediateknologi.id',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.promediateknologi.id',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.promediateknologi.id',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
