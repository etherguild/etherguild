/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server-side features since we're doing static export
  experimental: {
    serverActions: {
      allowedOrigins: [],
    },
  },
}

module.exports = nextConfig 