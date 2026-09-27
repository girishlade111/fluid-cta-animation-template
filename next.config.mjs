/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/fluid-cta-animation-template',
  assetPrefix: '/fluid-cta-animation-template/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
