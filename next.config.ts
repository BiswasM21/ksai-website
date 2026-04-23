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
    ],
  },
  // Disabled: Strict Mode double-mounts components in dev,
  // destroying the Three.js scene and stopping useFrame animations
  reactStrictMode: false,
};

export default nextConfig;
