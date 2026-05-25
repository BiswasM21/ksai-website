"use client";

import dynamic from "next/dynamic";

const HeroFuturistic = dynamic(
  () => import("@/components/hero-futuristic"),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen w-full bg-[var(--color-bg)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function HeroSection() {
  return <HeroFuturistic />;
}
