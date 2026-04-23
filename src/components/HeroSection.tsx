"use client";

import dynamic from "next/dynamic";

const HeroFuturistic = dynamic(
  () => import("@/components/hero-futuristic"),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen w-full bg-[#060c1a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#3b82f6] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function HeroSection() {
  return <HeroFuturistic />;
}
