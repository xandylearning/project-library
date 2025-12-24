/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || '',
    NEXT_PUBLIC_ENABLE_ADMIN: process.env.NEXT_PUBLIC_ENABLE_ADMIN || 'false'
  },
  // Proxy API requests to backend (works for both server and client requests)
  async rewrites() {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:3001'
    return [
      {
        source: '/projects/:path*',
        destination: `${backendUrl}/projects/:path*`,
      },
      {
        source: '/enrollments/:path*',
        destination: `${backendUrl}/enrollments/:path*`,
      },
      {
        source: '/auth/:path*',
        destination: `${backendUrl}/auth/:path*`,
      },
      {
        source: '/admin/:path*',
        destination: `${backendUrl}/admin/:path*`,
      },
      {
        source: '/me/:path*',
        destination: `${backendUrl}/me/:path*`,
      },
      {
        source: '/activity',
        destination: `${backendUrl}/activity`,
      },
      {
        source: '/health',
        destination: `${backendUrl}/health`,
      },
      {
        source: '/files/:path*',
        destination: `${backendUrl}/files/:path*`,
      },
    ]
  },
  turbopack: {
    root: '/app'
  }
}

module.exports = nextConfig