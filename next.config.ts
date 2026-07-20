import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/#products',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/#solutions',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/resources/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
