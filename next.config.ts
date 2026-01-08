// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows ALL external domains (quick fix for development)
      },
    ],
  },
};

export default nextConfig;