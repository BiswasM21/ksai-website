"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="section relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, var(--color-primary) 0%, #1E3A8A 100%)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
          }}
        />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-3xl mx-auto text-center ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss how our solutions can help you achieve your goals.
            From initial concept to final deployment, we&apos;re with you every step
            of the way.
          </p>

          <Link href="/contact">
            <Button className="bg-white text-[var(--color-primary)] hover:bg-white/90 text-base px-8 py-5 font-semibold">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
