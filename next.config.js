/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Mejorar Hot Module Replacement (HMR) en desarrollo
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Mejorar la detección de cambios para HMR
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig
