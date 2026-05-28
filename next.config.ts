import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      {
        protocol: "https",
        hostname: "minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com",
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Disabled: Strict Mode double-mounts components in dev
  reactStrictMode: false,

  // Memory optimization
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    optimizeCss: true,
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
