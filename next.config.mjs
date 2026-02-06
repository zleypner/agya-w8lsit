import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuración de Turbopack (Next.js 16+)
  turbopack: {
    root: __dirname,
  },
  // Configuración de webpack para cuando se use explícitamente con --webpack
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

export default nextConfig
