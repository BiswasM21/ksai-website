import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence Turbopack lockfile warning
  turbopack: {
    root: "/Users/biswas/ksai-website",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anthropic-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Disabled: Strict Mode double-mounts components in dev,
  // destroying the Three.js scene and stopping useFrame animations
  reactStrictMode: false,

  // Memory optimization
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    optimizeCss: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
