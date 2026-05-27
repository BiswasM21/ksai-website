"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[#EA580C] to-[#C2410C]" />

      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-3xl mx-auto text-center ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Ready to Build Something{" "}
            <span className="text-yellow-200">Extraordinary?</span>
          </h2>

          <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss your project. We offer free 30-minute scoping calls
            to understand your needs and provide honest, actionable recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-[var(--color-primary)] hover:bg-white/90 text-base px-8 py-6 font-semibold w-full sm:w-auto">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base px-8 py-6 font-semibold w-full sm:w-auto">
                Explore Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
