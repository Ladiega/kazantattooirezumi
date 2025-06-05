/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Asegúrate que esté en false
  },
  eslint: {
    ignoreDuringBuilds: false,
  }
}

module.exports = nextConfig