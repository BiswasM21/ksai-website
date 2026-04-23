"use client";

import React, { useEffect, useMemo, useState, useRef, useCallback } from "react";
import type { Application } from "@splinetool/runtime";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const SPLINE_SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const HEAD_OBJECT_NAME = "Head"; // name of the head object in the Spline scene

export const HeroFuturistic = () => {
  const titleWords = "Building Data Sovereign AI Solutions".split(" ");
  const titleLine2 = "for the Global South".split(" ");

  const appRef = useRef<Application | null>(null);
  const headRef = useRef<{ rotation: { x: number; y: number; z: number } } | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

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

  const [visibleWords, setVisibleWords] = useState(0);
  const [visibleWords2, setVisibleWords2] = useState(0);

  // Handle Spline scene load — find the head object
  const handleLoad = useCallback((app: Application) => {
    appRef.current = app;
    const head = app.findObjectByName(HEAD_OBJECT_NAME);
    if (head) {
      headRef.current = head as { rotation: { x: number; y: number; z: number } };
    }
  }, []);

  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to [-1, 1]
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smoothly lerp head rotation toward cursor each animation frame
  useEffect(() => {
    let rafId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      const head = headRef.current;
      if (head) {
        const targetX = -mouseRef.current.y * 0.4; // tilt up/down
        const targetY = mouseRef.current.x * 0.6; // turn left/right
        head.rotation.x = lerp(head.rotation.x, targetX, 0.08);
        head.rotation.y = lerp(head.rotation.y, targetY, 0.08);
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Word-by-word reveal animation
  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 400);
      return () => clearTimeout(timeout);
    } else if (visibleWords2 < titleLine2.length) {
      const timeout = setTimeout(() => setVisibleWords2(visibleWords2 + 1), 300);
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
          onSplineLoad={handleLoad}
        />
      </div>

      {/* Spotlight glow effect */}
      <Spotlight
        className="-top-40 left-1/2 -translate-x-1/2"
        fill="white"
      />

      {/* Text layer — pointer-events-none except CTA */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-end px-6 pb-32">
        {/* Title line 1 */}
        <div className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl uppercase tracking-wide text-center">
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            {titleWords.map((word, index) => (
              <div
                key={`l1-${index}`}
                className={`${index < visibleWords ? "fade-in" : ""} shimmer-text`}
                style={{
                  animationDelay: `${index * 0.08 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Title line 2 */}
        <div className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl uppercase tracking-wide mt-3 md:mt-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            {titleLine2.map((word, index) => (
              <div
                key={`l2-${index}`}
                className={`${index < visibleWords2 ? "fade-in" : ""} shimmer-text`}
                style={{
                  animationDelay: `${index * 0.08 + (delays2[index] || 0)}s`,
                  opacity: index < visibleWords2 ? undefined : 0,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="mt-8 z-50 pointer-events-auto"
          style={{
            opacity: 0,
            animation: visibleWords2 >= titleLine2.length
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

        {/* Explore scroll button — centered via flex parent */}
        <button
          className="explore-btn"
          style={{ animationDelay: "2s" }}
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
