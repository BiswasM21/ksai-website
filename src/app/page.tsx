import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import PadhaiWayBanner from "@/components/home/PadhaiWayBanner";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalinga Sovereign AI — Web Dev, App Dev & AI Automation Company",
  description: "Expert web development, mobile app development & AI automation for startups & SMEs. Custom solutions with React, Next.js, Flutter & cutting-edge AI. Based in Bhubaneswar, serving globally.",
  keywords: [
    "web development company",
    "app development company",
    "AI automation services",
    "custom software development",
    "React developer India",
    "Next.js development",
    "Flutter app development",
    "AI chatbot development",
    "deep tech company",
    "AI company Bhubaneswar",
    "software development company India",
    "startup development services",
    "SME technology solutions",
    "mobile app development India",
  ],
  openGraph: {
    title: "Kalinga Sovereign AI — Web Dev, App Dev & AI Automation",
    description: "Expert web development, mobile apps & AI automation for startups & SMEs. Custom solutions with React, Next.js, Flutter & cutting-edge AI.",
    url: "https://kalingasovereignai.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PadhaiWayBanner />
      <CTABanner />
    </>
  );
}
