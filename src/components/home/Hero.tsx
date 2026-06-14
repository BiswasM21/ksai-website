"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronDown, MapPin, Shield, Lock } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageContext";

const taglines = [
  "AI Infrastructure Built for the Global South",
  "Privacy by Physics",
  "Sovereign Ground Layer",
];

const taglinesHi = [
  "वैश्विक दक्षिण के लिए AI अवसंरचना",
  "भौतिकी द्वारा गोपनीयता",
  "संप्रभु भूमि परत",
];

const trustIndicators = [
  { icon: MapPin, text: "Registered in Odisha", textHi: "ओडिशा में पंजीकृत" },
  { icon: Shield, text: "Enterprise Grade Performance", textHi: "एंटरप्राइज ग्रेड परफॉर्मेंस" },
  { icon: Lock, text: "Data Sovereignty Guaranteed", textHi: "डेटा संप्रभुता की गारंटी" },
];

const stats = [
  { value: "50+", label: "Projects Delivered", labelHi: "प्रोजेक्ट डिलीवर किए" },
  { value: "98%", label: "Client Satisfaction", labelHi: "क्लाइंट संतुष्टि" },
  { value: "24/7", label: "Support Available", labelHi: "सपोर्ट उपलब्ध" },
];

function TaglineRotator({ language }: { language: "en" | "hi" }) {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const currentTaglines = language === "hi" ? taglinesHi : taglines;
  const [displayText, setDisplayText] = useState(currentTaglines[0]);

  const rotateTagline = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % currentTaglines.length);
      setDisplayText(currentTaglines[(index + 1) % currentTaglines.length]);
      setIsExiting(false);
      setIsEntering(true);
      setTimeout(() => setIsEntering(false), 400);
    }, 400);
  }, [index, currentTaglines]);

  useEffect(() => {
    const interval = setInterval(rotateTagline, 4000);
    return () => clearInterval(interval);
  }, [rotateTagline]);

  return (
    <div className="relative h-16 sm:h-18 flex items-center justify-center mb-6 overflow-hidden">
      <p
        className="text-xl sm:text-2xl md:text-3xl font-serif text-center px-4"
        style={{
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          color: "var(--color-primary)",
          animation: isExiting
            ? "fadeOutUp 0.4s ease-out forwards"
            : isEntering
            ? "fadeInDown 0.4s ease-out forwards"
            : "none",
        }}
      >
        {displayText}
      </p>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    requestAnimationFrame(() => { setMounted(true); });
  }, []);

  const isHindi = language === "hi";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 via-transparent to-[var(--color-bg)]" />

      {/* Main glow effect - center top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px]"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 40%, transparent 70%)",
        }}
      />

      {/* Secondary glow - bottom left */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[400px]"
        style={{
          background: "radial-gradient(circle at 0% 100%, rgba(59,130,246,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Secondary glow - bottom right */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px]"
        style={{
          background: "radial-gradient(circle at 100% 100%, rgba(249,115,22,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Ambient floating orb */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Gradient fade to base color */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/80 to-[var(--color-bg)]" />

      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className={`mb-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <Logo size={100} showText={false} />
        </div>

        <div className={`mb-6 ${mounted ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
            CIN: U62013OD2026PTC052646
          </span>
        </div>

        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 ${mounted ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          <span className="gradient-text">Kalinga Sovereign AI</span>
        </h1>

        <div className={mounted ? "animate-fade-in-up delay-300" : "opacity-0"}>
          <TaglineRotator language={language} />
        </div>

        <p className={`text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mb-10 leading-relaxed ${mounted ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
          We engineer custom AI agents, intelligent automation, and sovereign technology solutions
          that keep your data where it belongs — with you.
        </p>

        <div className={`flex flex-wrap justify-center gap-6 mb-12 ${mounted ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
          {trustIndicators.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <item.icon className="w-4 h-4 text-[var(--color-primary)]" />
              <span>{isHindi ? item.textHi : item.text}</span>
            </div>
          ))}
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 ${mounted ? "animate-fade-in-up delay-600" : "opacity-0"}`}>
          <Link href="/contact">
            <Button className="text-base px-8 py-6 w-full sm:w-auto">
              {isHindi ? "हमसे जुड़ें" : "Partner with Us"}
            </Button>
          </Link>
          <Link href="/contact?type=investor">
            <Button variant="outline" className="btn-secondary text-base px-8 py-6 w-full sm:w-auto">
              {isHindi ? "निवेशक पूछताछ" : "Investor Enquiry"}
            </Button>
          </Link>
        </div>

        <div className={`grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-[var(--color-border)] ${mounted ? "animate-fade-in-up delay-700" : "opacity-0"}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-1">{stat.value}</div>
              <div className="text-sm text-[var(--color-text-muted)]">{isHindi ? stat.labelHi : stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${mounted ? "animate-fade-in delay-800" : "opacity-0"}`}>
        <div className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
          <span className="text-xs uppercase tracking-widest">{isHindi ? "एक्सप्लोर करें" : "Explore"}</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
