import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect trailing slashes to non-trailing
  trailingSlash: false,

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
        destination: 'https://ramjeeprasad.online/:path*',
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

  // Headers for better SEO and caching
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
        ],
      },
    ];
  },
};

export default nextConfig;
