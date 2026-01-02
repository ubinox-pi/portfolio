import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect trailing slashes to non-trailing
  trailingSlash: false,

  // Enable React strict mode for better debugging
  reactStrictMode: true,

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    // Enable modern image formats
    formats: ['image/avif', 'image/webp'],
    // Optimize remote images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/devicons/**',
      },
    ],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Experimental features for better performance
  experimental: {
    // Optimize CSS
    optimizeCss: true,
  },

  // Redirects for old URLs or common typos
  async redirects() {
    return [
      // Redirect old Vercel domain to new domain (if accessed directly)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'portfolio-three-azure-84.vercel.app',
          },
        ],
        destination: 'https://www.ramjeeprasad.online/:path*',
        permanent: true,
      },
      // Common redirects for blog variations
      {
        source: '/blogs/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
      {
        source: '/posts/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
      // Resume variations
      {
        source: '/cv',
        destination: '/resume',
        permanent: true,
      },
    ];
  },

  // Headers for better SEO, caching, and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      // Cache static assets
      {
        source: '/(.*).(ico|png|jpg|jpeg|svg|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
