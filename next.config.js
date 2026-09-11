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
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
  poweredByHeader: false,
}

module.exports = nextConfig
