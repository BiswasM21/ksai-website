"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PadhaiWayBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => { setMounted(true); });
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0C6DA2]" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }} />

      {/* Content */}
      <div className="relative z-10 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center text-white ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/20 mb-6">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              PadhaiWay — The Sovereign Learning Layer for the Global South
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Where AI tutoring works without the cloud, without the signal,
              and without the data leaving the child&apos;s device.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="px-4 py-2 rounded-lg bg-white/10">
                <span className="font-bold">1.4 billion</span> learners on the wrong side
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10">
                Built for regions where edtech apps don&apos;t load
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10">
                NEP 2020 · PM SHRI · NIPUN Bharat aligned
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://padhaiway.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white border-0">
                  Visit PadhaiWay <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link href="/vision/padhaiway">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  Read the Manifesto <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
