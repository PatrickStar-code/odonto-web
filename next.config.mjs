/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },

      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },

      {
        protocol: 'https',
        hostname: 'pagedone.io',
      },

      {
        protocol: 'https',
        hostname: 'tailus.io',
      },

      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
}

export default nextConfig
