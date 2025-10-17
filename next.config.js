/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // optimizePackageImports: ['lucide-react'], // Removed as lucide-react was removed
  },
};

module.exports = nextConfig;
