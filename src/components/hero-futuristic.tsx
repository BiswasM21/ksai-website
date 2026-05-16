"use client";

import React, { useEffect, useMemo, useState, useRef, useCallback } from "react";
import type { Application } from "@splinetool/runtime";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const SPLINE_SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const HEAD_OBJECT_NAME = "Head";

// Detect mobile/low-power devices
const isMobile = () => {
  if (typeof window === "undefined") return false;
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth < 768
  );
};

export const HeroFuturistic = () => {
  const titleWords = "AI Solutions Built for the Rest".split(" ");
  const titleLine2 = "by the Best".split(" ");

  const appRef = useRef<Application | null>(null);
  const headRef = useRef<{ rotation: { x: number; y: number; z: number } } | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);
  const [visibleWords2, setVisibleWords2] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect mobile and reduced motion preference
  useEffect(() => {
    setIsMobileDevice(isMobile());
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Initialize animations based on device
  useEffect(() => {
    // Skip animations on mobile or if user prefers reduced motion
    if (isMobileDevice || prefersReducedMotion) {
      setVisibleWords(titleWords.length);
      setVisibleWords2(titleLine2.length);
      return;
    }
    // Desktop: show words one by one
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 400);
      return () => clearTimeout(timeout);
    } else if (visibleWords2 < titleLine2.length) {
      const timeout = setTimeout(() => setVisibleWords2(visibleWords2 + 1), 300);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, visibleWords2, titleWords.length, titleLine2.length, isMobileDevice, prefersReducedMotion]);

  const handleLoad = useCallback((app: Application) => {
    appRef.current = app;
    const head = app.findObjectByName(HEAD_OBJECT_NAME);
    if (head) {
      headRef.current = head as { rotation: { x: number; y: number; z: number } };
    }
  }, []);

  // Mouse tracking - only on desktop
  useEffect(() => {
    if (isMobileDevice) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobileDevice]);

  // Head animation loop - STOPPED on mobile
  useEffect(() => {
    // Don't run animation loop on mobile
    if (isMobileDevice || prefersReducedMotion) {
      return;
    }

    let lastTime = 0;
    const targetFPS = 30;
    const interval = 1000 / targetFPS;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = (time: number) => {
      if (time - lastTime >= interval) {
        lastTime = time;
        const head = headRef.current;
        if (head) {
          const targetX = -mouseRef.current.y * 0.4;
          const targetY = mouseRef.current.x * 0.6;
          head.rotation.x = lerp(head.rotation.x, targetX, 0.08);
          head.rotation.y = lerp(head.rotation.y, targetY, 0.08);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobileDevice, prefersReducedMotion]);

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

  const shouldAnimate = !isMobileDevice && !prefersReducedMotion;

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
          onSplineLoad={handleLoad}
        />
      </div>

      {/* Spotlight glow effect */}
      <Spotlight
        className="-top-40 left-1/2 -translate-x-1/2"
        fill="white"
      />

      {/* Screen-reader H1 with target keywords */}
      <h1 className="sr-only">
        Custom AI Agents and AI Solutions — Kalinga Sovereign AI builds AI agents,
        workflow automation, and intelligent applications for SMEs, enterprises,
        and institutions across India and the Global South
      </h1>

      {/* Text layer */}
      <div
        className="absolute inset-0 z-40 flex flex-col items-center justify-center px-4 md:px-6"
        style={{ paddingTop: isMobileDevice ? "45vh" : "55vh" }}
      >
        {/* Title line 1 - Smaller on mobile */}
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl uppercase tracking-wide text-center leading-tight md:leading-normal">
          <div className="flex flex-wrap justify-center gap-2 md:gap-5">
            {titleWords.map((word, index) => (
              <div
                key={`l1-${index}`}
                className={`${index < visibleWords ? (shouldAnimate ? "fade-in" : "opacity-100") : "opacity-0"} ${shouldAnimate ? "shimmer-text" : "text-white"}`}
                style={
                  shouldAnimate
                    ? {
                        animationDelay: `${index * 0.08 + (delays[index] || 0)}s`,
                        opacity: index < visibleWords ? undefined : 0,
                      }
                    : { opacity: index < visibleWords ? 1 : 0 }
                }
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Title line 2 - Smaller on mobile */}
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl uppercase tracking-wide mt-2 md:mt-4 text-center leading-tight md:leading-normal">
          <div className="flex flex-wrap justify-center gap-2 md:gap-5">
            {titleLine2.map((word, index) => (
              <div
                key={`l2-${index}`}
                className={`${index < visibleWords2 ? (shouldAnimate ? "fade-in" : "opacity-100") : "opacity-0"} ${shouldAnimate ? "shimmer-text" : "text-white"}`}
                style={
                  shouldAnimate
                    ? {
                        animationDelay: `${index * 0.08 + (delays2[index] || 0)}s`,
                        opacity: index < visibleWords2 ? undefined : 0,
                      }
                    : { opacity: index < visibleWords2 ? 1 : 0 }
                }
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 md:mt-4 z-50 pointer-events-auto">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold px-6 py-2.5 md:px-8 md:py-3 rounded-full transition-all duration-200 active:scale-95 text-sm md:text-base"
          >
            Talk to Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Explore scroll button - hidden on mobile for performance */}
        <button
          className={`${isMobileDevice ? "hidden" : "explore-btn"}`}
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
