"use client";

import React, { useEffect, useMemo, useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const SPLINE_SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export const HeroFuturistic = () => {
  const titleWords = "Sovereign AI for the".split(" ");
  const titleLine2 = "Global South".split(" ");
  const subtitle = "We call.";

  const delays = useMemo(
    () => titleWords.map(() => Math.random() * 0.07),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const delays2 = useMemo(
    () => titleLine2.map(() => Math.random() * 0.07),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const subtitleDelay = useMemo(() => Math.random() * 0.1, []);

  const [visibleWords, setVisibleWords] = useState(0);
  const [visibleWords2, setVisibleWords2] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600);
      return () => clearTimeout(timeout);
    } else if (visibleWords2 < titleLine2.length) {
      const timeout = setTimeout(() => setVisibleWords2(visibleWords2 + 1), 500);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, visibleWords2, titleWords.length, titleLine2.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[var(--color-surface-2)]">
      {/* Vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(6,12,26,0.85) 100%)",
        }}
      />

      {/* Spline 3D scene — background layer */}
      <div className="absolute inset-0 z-10">
        <SplineScene
          scene={SPLINE_SCENE_URL}
          className="w-full h-full"
        />
      </div>

      {/* Spotlight glow effect */}
      <Spotlight
        className="-top-40 left-1/2 -translate-x-1/2"
        fill="white"
      />

      {/* Text layer — pointer-events-none except CTA */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center px-6">
        {/* Title line 1 */}
        <div className="text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-tight">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            {titleWords.map((word, index) => (
              <div
                key={`l1-${index}`}
                className={index < visibleWords ? "fade-in" : ""}
                style={{
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Title line 2 */}
        <div className="text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-tight mt-1 md:mt-2">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            {titleLine2.map((word, index) => (
              <div
                key={`l2-${index}`}
                className={`${index < visibleWords2 ? "fade-in" : ""} gradient-text`}
                style={{
                  animationDelay: `${(titleWords.length + index) * 0.13 + (delays2[index] || 0)}s`,
                  opacity: index < visibleWords2 ? undefined : 0,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-sm md:text-xl xl:text-2xl 2xl:text-3xl mt-4 md:mt-6 font-semibold overflow-hidden">
          <div
            className={subtitleVisible ? "fade-in-subtitle" : ""}
            style={{
              animationDelay: `${(titleWords.length + titleLine2.length) * 0.13 + 0.2 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="absolute bottom-36 md:bottom-32 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
          style={{
            opacity: 0,
            animation: subtitleVisible
              ? "fadeIn 0.6s ease-out 0.3s forwards"
              : "none",
          }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
          >
            Talk to Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Explore scroll button */}
        <button
          className="explore-btn"
          style={{ animationDelay: "2.5s" }}
          onClick={() => {
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Scroll to explore
          <span className="explore-arrow">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 12L11 17L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroFuturistic;
